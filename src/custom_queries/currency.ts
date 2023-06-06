import axios from "axios";

import { keplrCurrencies } from "./currency.constants";
import { QueryClient } from "../queries";
import {
  CoinCodexCoinResponse,
  CoinCodexHistoryResponse,
  IbcTokenAsset,
  TokenAsset,
  TokenAssetHistory,
  TokenAssetInfo,
} from "./currency.types";

export const findTokenFromDenom = (denom: string): TokenAsset | undefined => {
  if (!denom?.length) return;
  const denomLowerCased = denom?.toLowerCase();
  const token = keplrCurrencies[denomLowerCased];
  if (token) return token;
  const denomUpperCased = denom?.toUpperCase();
  const possibleToken = Object.values(keplrCurrencies).find(
    (currency) =>
      currency.coinMinimalDenom === denom ||
      currency.coinDenom === denom ||
      currency.coinMinimalDenom === denomLowerCased ||
      currency.coinDenom === denomLowerCased ||
      currency.coinMinimalDenom === denomUpperCased ||
      currency.coinDenom === denomUpperCased
  );
  return possibleToken;
};

export const findIbcTokenFromHash = (() => {
  const cache: { [hash: string]: IbcTokenAsset } = {};

  return async (
    queryClient: QueryClient,
    ibcHash: string
  ): Promise<IbcTokenAsset | undefined> => {
    if (!queryClient) throw new Error("Invalid query client");
    const hash = ibcHash.replace(/^ibc\//i, "");
    if (cache[hash]) return cache[hash];
    const response = await queryClient.ibc.applications.transfer.v1.denomTrace({
      hash,
    });
    if (!response.denomTrace?.baseDenom) return;
    const token = findTokenFromDenom(response.denomTrace.baseDenom);
    const result = {
      ibc: { ...response.denomTrace, hash },
      token,
    };
    cache[hash] = result;
    return result;
  };
})();

export const findIbcTokensFromHashes = async (
  queryClient: QueryClient,
  ibcHashes: string[]
): Promise<Array<IbcTokenAsset | undefined>> => {
  if (!queryClient) throw new Error("Invalid query client");
  const requests = ibcHashes.map((ibcHash: string) =>
    findIbcTokenFromHash(queryClient, ibcHash)
  );
  const responses = await Promise.allSettled(requests);
  const results: Array<IbcTokenAsset | undefined> = responses.map(
    (response) => {
      if (response.status !== "fulfilled") return;
      return response.value;
    }
  );
  return results;
};

/**
 * LOCAL USE ONLY
 * Fetch a list of currencies as defined in keplr chain registry:
 * https://github.com/chainapsis/keplr-chain-registry/tree/main/cosmos
 */
// export const fetchAllCurrenciesInKeplrChainRegistry = async () => {
//   const fetchKeplrChainInfo = async (chainName: string) => {
//     try {
//       const url = `https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/${chainName}.json`;
//       const response = await axios.get(url);
//       return response.data as KeplrChainInfo;
//     } catch (error) {
//       return {} as KeplrChainInfo;
//     }
//   };

//   const responses = await Promise.allSettled(
//     keplrChainNames.map((chainName) => fetchKeplrChainInfo(chainName))
//   );
//   let chainInfos = responses
//     .filter((x) => x.status === "fulfilled")
//     // @ts-ignore
//     .map((x) => x.value);
//   chainInfos = chainInfos.map(prepareKeplrChainInfoTokenAssets);
//   let currencies = chainInfos
//     .map((chainInfo: KeplrChainInfo): TokenAsset[] => chainInfo.currencies)
//     .flat();
//   return currencies.reduce((result, value) => {
//     if (!result[value.coinMinimalDenom])
//       return { ...result, [value.coinMinimalDenom]: value };
//     return {
//       ...result,
//       [value.coinMinimalDenom]: { ...result[value.coinMinimalDenom], ...value },
//     };
//   }, {});
// };

const coinCodexBaseUrl = "https://coincodex.com/api/coincodex";
const coinCodexGetCoinUrl = coinCodexBaseUrl + "/get_coin";
const coinCodexGetCoinHistoryUrl = coinCodexBaseUrl + "/get_coin_history";

const fetchTokenInfo = async (
  denom: string
): Promise<CoinCodexCoinResponse | undefined> => {
  try {
    const url = `${coinCodexGetCoinUrl}/${denom}`;
    const response = await axios.get(url);
    if (response) return response.data as CoinCodexCoinResponse;
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const findTokenInfoFromDenom = (() => {
  const cache: { [denom: string]: TokenAssetInfo } = {};

  return async (
    denom: string,
    cacheResult: boolean = true
  ): Promise<TokenAssetInfo | undefined> => {
    if (!denom) return;
    const token = findTokenFromDenom(denom);
    if (cacheResult && (cache[denom] || cache[token?.coinCodexId]))
      return cache[denom] ?? cache[token?.coinCodexId];
    let coinCodexTokenInfo = await fetchTokenInfo(token?.coinCodexId ?? denom);
    if (!coinCodexTokenInfo) return;
    const result = {
      symbol: coinCodexTokenInfo.symbol,
      coinName: coinCodexTokenInfo.coin_name,
      shortname: coinCodexTokenInfo.shortname,
      slug: coinCodexTokenInfo.slug,
      displaySymbol: coinCodexTokenInfo.display_symbol,
      todayOpen: coinCodexTokenInfo.today_open,
      lastPriceUsd: coinCodexTokenInfo.last_price_usd,
      priceChangePercent: {
        "1H": coinCodexTokenInfo.price_change_1H_percent,
        "1D": coinCodexTokenInfo.price_change_1D_percent,
        "7D": coinCodexTokenInfo.price_change_7D_percent,
        "30D": coinCodexTokenInfo.price_change_30D_percent,
        "90D": coinCodexTokenInfo.price_change_90D_percent,
      },
      lastUpdate: coinCodexTokenInfo.last_update,
      social: coinCodexTokenInfo.social,
    };
    if (cacheResult) cache[denom] = result;
    return result;
  };
})();

export const findTokensInfoFromDenoms = async (
  denoms: string[]
): Promise<Array<TokenAssetInfo | undefined>> => {
  const requests = denoms.map((d) => findTokenInfoFromDenom(d));
  const responses = await Promise.allSettled(requests);
  const results: Array<TokenAssetInfo | undefined> = responses.map(
    (response) => {
      if (response.status !== "fulfilled") return;
      return response.value;
    }
  );

  return results;
};

const fetchTokenHistory = async (
  denom: string,
  startDate: string,
  endDate: string,
  samples: number = 100
): Promise<CoinCodexHistoryResponse | undefined> => {
  try {
    const url = `${coinCodexGetCoinHistoryUrl}/${denom}/${startDate}/${endDate}/${samples}`;
    const response = await axios.get(url);
    if (response) return response.data as CoinCodexHistoryResponse;
    return undefined;
  } catch (error) {
    return undefined;
  }
};

export const findTokenHistoryFromDenom = (() => {
  const cache: { [denom: string]: TokenAssetHistory } = {};

  return async (
    denom: string,
    startDate: string,
    endDate: string,
    samples: number = 100,
    cacheResult: boolean = true
  ): Promise<TokenAssetHistory | undefined> => {
    if (!denom) return;
    const token = findTokenFromDenom(denom);
    if (cacheResult && (cache[denom] || cache[token?.coinCodexId]))
      return cache[denom] ?? cache[token?.coinCodexId];
    let coinCodexTokenHistory = await fetchTokenHistory(
      token?.coinCodexId ?? denom,
      startDate,
      endDate,
      samples
    );
    if (!coinCodexTokenHistory) return;
    const result = (Object.values(coinCodexTokenHistory) ?? [[]])[0]?.map(
      (v) => ({ timestamp: v[0], usdPrice: v[1], usdVolume24H: v[2] })
    );
    if (cacheResult) cache[denom] = result;
    return result;
  };
})();

export const findTokensHistoryFromDenoms = async (
  denoms: string[],
  startDate: string,
  endDate: string,
  samples: number = 100,
  cacheResult: boolean = true
): Promise<Array<TokenAssetHistory | undefined>> => {
  const requests = denoms.map((d) =>
    findTokenHistoryFromDenom(d, startDate, endDate, samples, cacheResult)
  );
  const responses = await Promise.allSettled(requests);
  const results: Array<TokenAssetHistory | undefined> = responses.map(
    (response) => {
      if (response.status !== "fulfilled") return;
      return response.value;
    }
  );
  return results;
};
