import { queryClient } from "./common";
import { JsonToArray, Uint8ArrayToJS } from "../../src/utils/conversions";

type ObjectMap = {
  [key: string]: string;
};

enum AmountType {
  Single = "single",
  Multiple = "multiple",
}

export enum TokenType {
  Token1155 = "token1155",
  Token2 = "token2",
}

export type TokenAmount = {
  [key in AmountType]?: string | ObjectMap;
};

const getRandomTokenIds = (tokenIds: string[], idsCount: number): string[] =>
  tokenIds.sort(() => 0.5 - Math.random()).slice(0, idsCount);

const splitAmountOnRandomParts = (
  amount: number,
  parts: number,
  min = 100
): number[] => {
  const randomBit = amount - min * parts;
  const result: number[] = [];

  for (let i = 0; i < parts; i++) {
    result.push(Math.random());
  }

  const multiplier = randomBit / result.reduce((prev, curr) => prev + curr);
  return result.map((amount) => Math.round(amount * multiplier + min));
};

export const formatInputAmount = (
  inputTokenType: TokenType,
  inputAmount: number,
  inputTokensId: string[]
): TokenAmount => {
  if (inputTokenType == TokenType.Token1155) {
    const includedBatchesCount =
      Math.floor(Math.random() * inputTokensId.length) + 1;
    const batchesAmounts = splitAmountOnRandomParts(
      inputAmount,
      includedBatchesCount
    );
    const batchesIds = getRandomTokenIds(inputTokensId, includedBatchesCount);

    return {
      multiple: {
        ...batchesIds.reduce((acc, id, index) => {
          acc[id] = batchesAmounts[index].toString();
          return acc;
        }, {}),
      },
    };
  } else {
    return { single: inputAmount.toString() };
  }
};

export const formatOutputAmount = (
  inputTokenType: TokenType,
  outputTokenIds: string[],
  outputAmount: number,
  includeBatches = true
): TokenAmount => {
  if (inputTokenType == TokenType.Token1155) {
    return {
      single: outputAmount.toFixed(),
    };
  } else {
    const anyBatches = Math.random() < 0.5;

    if (!includeBatches) {
      return {
        single: outputAmount.toFixed(),
      };
    }

    if (anyBatches) {
      return {
        single: outputAmount.toFixed(),
      };
    } else {
      const includedBatchesCount =
        Math.floor(Math.random() * outputTokenIds.length) + 1;
      const batchesAmounts = splitAmountOnRandomParts(
        Number(outputAmount.toFixed()),
        includedBatchesCount
      );
      const batchesIds = getRandomTokenIds(
        outputTokenIds,
        includedBatchesCount
      );

      return {
        multiple: {
          ...batchesIds.reduce((acc, id, index) => {
            acc[id] = batchesAmounts[index].toString();
            return acc;
          }, {}),
        },
      };
    }
  }
};

export const queryOutputAmount = async (
  inputTokenType: TokenType,
  inputTokenAmount: TokenAmount,
  swapContractAddress: string
) => {
  let query = {};
  if (inputTokenType == TokenType.Token1155) {
    query = {
      token1155_for_token2_price: {
        token1155_amount: inputTokenAmount,
      },
    };
  } else {
    query = {
      token2_for_token1155_price: {
        token2_amount: inputTokenAmount,
      },
    };
  }

  const response = await queryClient.cosmwasm.wasm.v1.smartContractState({
    address: swapContractAddress,
    queryData: JsonToArray(JSON.stringify(query)),
  });
  const parsedResponse = JSON.parse(Uint8ArrayToJS(response.data));

  return Number(
    parsedResponse.token2_amount ?? parsedResponse.token1155_amount
  );
};
