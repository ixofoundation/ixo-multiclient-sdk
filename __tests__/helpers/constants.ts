require("dotenv").config();

import { utils } from "./common";

export const RPC_URL = process.env.RPC_URL || "https://devnet.ixo.earth/rpc/";

export type KeyTypes = "ed" | "secp";
export const keyType: KeyTypes = "secp";

// You can add more users here and wallets will be generated for it and usable from getUser(WalletUsers.user)
export enum WalletUsers {
  tester = "tester",
  alice = "alice",
  bob = "bob",
  project = "project",
  bond = "bond",
  oracle = "oracle",
  accordedRight = "accordedRight",
}

export let constants: ReturnType<typeof generateConstants>;

export const generateConstants = (setGlobal = true) => {
  const newConstants = {
    // payments
    paymentTemplateId: `payment:template:${utils.common.generateId(10)}`,
    paymentContractId: `payment:contract:${utils.common.generateId(10)}`,
    paymentSubscripionId: `payment:subscription:${utils.common.generateId(10)}`,
    paymentContractRecipient: {
      address: "ixo107pmtx9wyndup8f9lgj6d7dnfq5kuf3sapg0vx",
      percentage: "100",
    },
    paymentDiscountId: "1",

    // projects
    projectClaimId: utils.common.generateId(),
    projectTemplateId: utils.common.generateId(),
    projectWalletType: "ed",

    // bonds
    bondToken: utils.common.generateId(3),
    bondReserveToken: "uixo",

    // iid
    contextKey: utils.common.generateId(10),
    accordedRightId: utils.common.generateId(10),
    linkedEntityId: utils.common.generateId(10),
    linkedResourceId: utils.common.generateId(10),
    serviceId: utils.common.generateId(10),
  };
  if (setGlobal) constants = newConstants;
  // Logs constants for tester to see details for constants
  if (setGlobal) console.log({ constants });
  return newConstants;
};

export const generateNewConstant = async (constant: keyof typeof constants) => {
  const newConstants = generateConstants(false);
  const newConstant = newConstants[constant];
  // @ts-ignore
  constants[constant] = newConstant;
  console.log({ constant: newConstant });
  return newConstant;
};

export const fee = {
  amount: [
    {
      denom: "uixo",
      amount: "100000",
    },
  ],
  gas: "3000000",
};
