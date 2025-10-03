require("dotenv").config();

import { StdFee } from "@cosmjs/stargate";
import { utils } from "./common";

export const RPC_URL = process.env.RPC_URL || "https://devnet.ixo.earth/rpc/";

export type KeyTypes = "ed" | "secp";
export const keyType: KeyTypes = "secp";

// You can add more users here and wallets will be generated for it and usable from getUser(WalletUsers.user)
export enum WalletUsers {
  tester = "tester",
  alice = "alice",
  bob = "bob",
  // charlie = "charlie",
  // bond = "bond",
  // oracle = "oracle",
  random = "random",
}

export const BlocksyncUrls = {
  devnet: "https://devnet-blocksync.ixo.earth",
  testnet: "https://blocksync-pandora.ixo.earth",
  mainnet: "https://blocksync.ixo.earth",
};

export let constants: ReturnType<typeof generateConstants>;

export const generateConstants = (setGlobal = true) => {
  const newConstants = {
    // bonds
    bondToken: utils.common.generateId(3),
    bondReserveToken: "uixo",

    // iid
    contextKey: utils.common.generateId(10),
    accordedRightId: utils.common.generateId(10),
    linkedEntityId: utils.common.generateId(10),
    linkedResourceId: utils.common.generateId(10),
    linkedClaimId: utils.common.generateId(10),
    serviceId: utils.common.generateId(10),
  };
  if (setGlobal) constants = newConstants;
  // Logs constants for tester to see details for constants
  if (setGlobal) console.log({ constants });
  return newConstants;
};

/**
 * Generates a new constant and logs it to console
 * @param constant The constant to generate
 * @param fixedConstant If set, the constant will be set to this value
 */
export const generateNewConstant = async (
  constant: keyof typeof constants,
  fixedConstant?: string
) => {
  const newConstants = generateConstants(false);
  const newConstant = fixedConstant || newConstants[constant];
  // @ts-ignore
  constants[constant] = newConstant;
  console.log({ constant: newConstant });
  return fixedConstant || newConstant;
};

export const fee: StdFee = {
  amount: [
    {
      denom: "uixo",
      amount: "100000",
    },
  ],
  gas: "500000",
  // if wana do transactions using feegrant granter address
  // granter: "ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2",
};

export const getFee = (
  trxLength = 1,
  simGas?: number
): number | StdFee | "auto" => {
  if (simGas && simGas > 50000) return "auto";
  // console.log("getFee simGas too low: ", simGas);

  return {
    amount: [
      {
        denom: "uixo",
        amount: (trxLength * 1000).toString(),
      },
    ],
    gas: (trxLength * 1000000).toString(),
    // if wana do transactions using feegrant granter address
    // granter: "ixo1n8yrmeatsk74dw0zs95ess9sgzptd6thgjgcj2",
  };
};
