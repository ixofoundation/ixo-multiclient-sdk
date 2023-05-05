import {
  customQueries,
  generateNewWallet,
  sendFromFaucet,
  testMsg,
  utils,
} from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import { LinkedClaimUploaded, LinkedResourcesUploaded } from "./constants";
import { chainNetwork } from "./index.setup.spec";
import * as IidMain from "../modules/Iid";

export const uploadAllToCellnodeWeb3 = async (listToUpload: any[]) => {
  let linkedListUploaded: LinkedResourcesUploaded = [];

  for (const { name, type, storage, json } of listToUpload) {
    if (storage === "cellnode") {
      const cellnode = await customQueries.cellnode.uploadPublicDoc(
        "application/ld+json",
        Buffer.from(JSON.stringify(json)).toString("base64"),
        undefined,
        chainNetwork
      );
      linkedListUploaded.push({
        name,
        cid: cellnode.key,
        type,
        storage,
      });
    } else if (storage === "ipfs") {
      const web3 = await customQueries.cellnode.uploadWeb3Doc(
        utils.common.generateId(12),
        "application/ld+json",
        Buffer.from(JSON.stringify(json)).toString("base64"),
        undefined,
        chainNetwork
      );
      linkedListUploaded.push({
        name,
        cid: web3.cid,
        type,
        storage,
      });
    }
  }

  return linkedListUploaded;
};

export const uploadAllToCellnodeWeb3Claims = async (listToUpload: any[]) => {
  let linkedListUploaded: LinkedClaimUploaded = [];

  for (const { name, type, storage, json, description } of listToUpload) {
    if (storage === "cellnode") {
      const cellnode = await customQueries.cellnode.uploadPublicDoc(
        "application/ld+json",
        Buffer.from(JSON.stringify(json)).toString("base64"),
        undefined,
        chainNetwork
      );
      linkedListUploaded.push({
        name,
        description,
        cid: cellnode.key,
        type,
        storage,
      });
    } else if (storage === "ipfs") {
      const web3 = await customQueries.cellnode.uploadWeb3Doc(
        utils.common.generateId(12),
        "application/ld+json",
        Buffer.from(JSON.stringify(json)).toString("base64"),
        undefined,
        chainNetwork
      );
      linkedListUploaded.push({
        name,
        description,
        cid: web3.cid,
        type,
        storage,
      });
    }
  }

  return linkedListUploaded;
};

export const setAndLedgerUser = async (
  mnemonic: string,
  mnemonicEdKeys?: string
) => {
  // ===============================================================
  // Set Testers mnemonic to env variable and ledger root user did
  // ===============================================================

  // below test can fail as user might already be ledgered, that is ok
  beforeAll(() =>
    mnemonicEdKeys
      ? Promise.all([
          generateNewWallet(WalletUsers.tester, mnemonic),
          generateNewWallet(WalletUsers.alice, mnemonicEdKeys),
        ])
      : generateNewWallet(WalletUsers.tester, mnemonic)
  );

  if (chainNetwork != "mainnet") {
    // Send from faucet for devnet/testnet
    sendFromFaucet(WalletUsers.tester);
    if (mnemonicEdKeys) sendFromFaucet(WalletUsers.alice);
  }

  testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
    IidMain.CreateIidDoc(WalletUsers.tester)
  );
};
