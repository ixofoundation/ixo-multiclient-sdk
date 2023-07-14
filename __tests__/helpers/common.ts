import { OfflineSigner } from "@cosmjs/proto-signing";
import {
  assertIsDeliverTxSuccess,
  DeliverTxResponse,
  GasPrice,
} from "@cosmjs/stargate";
import axios from "axios";
import base58 from "bs58";
import store from "store";

import { keyType, KeyTypes, RPC_URL, WalletUsers } from "./constants";
import { getEdClient } from "./edClient";
import { getSecpClient } from "./secpClient";
import {
  utils,
  createSigningClient,
  ixo,
  ibc,
  cosmos,
  cosmwasm,
  createQueryClient as createQueryClientImport,
  customMessages,
  customQueries,
} from "../../src";
import { IObjectKeys } from "./types";

const fs = require("fs");
const path = require("path");

export { ixo, cosmos, utils, ibc, customMessages, cosmwasm, customQueries };

export const sendFaucet = async (address: string) => {
  const faucetUrl = RPC_URL.includes("devnet")
    ? `https://faucet.devnet.ixo.earth/send/${address}`
    : `https://faucet.testnet.ixo.earth/send/${address}`;
  return await axios.get(faucetUrl);
};

export type EdClient = ReturnType<typeof getEdClient>;
export type SecpClient = Awaited<ReturnType<typeof getSecpClient>>;

export type Wallet = {
  ed: EdClient;
  secp: SecpClient;
};

export let wallets: { [key in WalletUsers]: Wallet };

export const generateWallets = async (log = true) => {
  let generatedWallets = {};
  for (const user of Object.values(WalletUsers)) {
    const mnemonics = utils.mnemonic.generateMnemonic(24);
    generatedWallets[user] = {
      ed: getEdClient(mnemonics),
      secp: await getSecpClient(mnemonics),
    };
  }
  wallets = generatedWallets as any;

  if (log) {
    // Logs wallet for tester to see account details for wallets
    let walletLog = {};
    for (const [user, wallet] of Object.entries(wallets)) {
      const edAccount = (await wallet.ed.getAccounts())[0];
      const secpAccount = (await wallet.secp.getAccounts())[0];
      walletLog[user] = {
        ed: {
          did: wallet.ed.did,
          address: edAccount.address,
          publicKey: base58.encode(edAccount.pubkey),
        },
        secp: {
          did: wallet.secp.did,
          address: secpAccount.address,
          publicKey: base58.encode(secpAccount.pubkey),
        },
      };
    }
    console.log(walletLog);
  }
};

export const generateNewWallet = async (
  user: WalletUsers,
  mnemonic?: string
) => {
  const mnemonics = mnemonic || utils.mnemonic.generateMnemonic(24);
  const wallet = {
    ed: getEdClient(mnemonics),
    secp: await getSecpClient(mnemonics),
  };
  wallets[user] = wallet;

  const edAccount = (await wallet.ed.getAccounts())[0];
  const secpAccount = (await wallet.secp.getAccounts())[0];
  console.log({
    [user]: {
      ed: {
        did: wallet.ed.did,
        address: edAccount.address,
        publicKey: base58.encode(edAccount.pubkey),
      },
      secp: {
        did: wallet.secp.did,
        address: secpAccount.address,
        publicKey: base58.encode(secpAccount.pubkey),
      },
    },
  });
};

export const getUser = (
  user: WalletUsers = WalletUsers.tester,
  walletKeyType: KeyTypes = keyType
) => wallets[user][walletKeyType];

export const createClient = async (
  offlineWallet: SecpClient | EdClient = getUser(),
  ignoreGetSequence?: boolean
) => {
  return createSigningClient(
    RPC_URL,
    offlineWallet as OfflineSigner,
    ignoreGetSequence,
    { gasPrice: GasPrice.fromString("0.025uixo") },
    {
      getLocalData: (k) => store.get(k),
      setLocalData: (k, d) => store.set(k, d),
    }
  );
};

export let queryClient: Awaited<ReturnType<typeof createQueryClientImport>>;

export const createQueryClient = async (
  setNewGlobal = true,
  rpcEndpoint?: string
) => {
  const newQueryClient = await createQueryClientImport(rpcEndpoint || RPC_URL);
  if (setNewGlobal) queryClient = newQueryClient;
  return newQueryClient;
};

export const checkSuccessMsg = (
  res: DeliverTxResponse,
  logRawlog = false,
  succeed: boolean
) => {
  if (logRawlog) console.log(res.rawLog);
  let isSuccess = true;
  try {
    assertIsDeliverTxSuccess(res);
  } catch (error) {
    // Only print error if expects to succeed
    if (succeed) console.log({ error });
    isSuccess = false;
  }
  succeed ? expect(isSuccess).toBeTruthy() : expect(isSuccess).toBeFalsy();
};

export const checkSuccessQry = (res: any, equal: IObjectKeys) => {
  let isSuccess = true;
  // console.log({ res });
  // console.log({ equal });
  try {
    Object.entries(equal).forEach(([key, value]) => {
      console.log({ key, value });
      const val = findVal(res, key);
      if (val === undefined) throw new Error(`${key} not found in response`);
      if (JSON.stringify(val) === JSON.stringify(value)) return;
      throw new Error(
        `${JSON.stringify(val)} is not equal to ${JSON.stringify(value)}`
      );
    });
  } catch (error) {
    console.log({ error });
    isSuccess = false;
  }
  expect(isSuccess).toBeTruthy();
};

export const testMsg = (
  message: string,
  action: () => Promise<DeliverTxResponse>,
  logRawlog = false,
  // must test succeed? If false then expect trx to fail and test will pass
  succeed: boolean = true
) => {
  return test(message, async () => {
    console.log("Testing message " + message);
    checkSuccessMsg(await action(), logRawlog, succeed);
  });
};

export const testQry = (
  message: string,
  query: () => Promise<any>,
  equal: IObjectKeys
) => {
  return test(message, async () => {
    console.log("Testing query " + message);
    checkSuccessQry(await query(), equal);
  });
};

export const runQry = (message: string, query: () => Promise<any>) => {
  return test(message, async () => {
    console.log("Running query " + message);
    const res = await query();
    // console.log(res);
    if (message.indexOf("ProjectDoc") !== -1) {
      console.log(
        '[\n {\n "projectDoc": {\n "txHash":"' +
          res.projectDoc.txHash +
          '",\n "projectDid":"' +
          res.projectDoc.projectDid +
          '",\n "senderDid":"' +
          res.projectDoc.senderDid +
          '",\n "pubKey":"' +
          res.projectDoc.pubKey +
          '",\n "status":"' +
          res.projectDoc.status +
          '",\n "data": [\n ' +
          utils.conversions.Uint8ArrayToJS(res.projectDoc.data) +
          "\n}\n]"
      );
    } else if (message.indexOf("AllAccounts") !== -1) {
      console.log(utils.conversions.Uint8ArrayToJS(res.accounts.value));
    } else {
      console.log(res);
    }
    expect(true).toBeTruthy();
  });
};

export const sendFromFaucet = (user: WalletUsers) => {
  return test("send tokens from faucet", async () => {
    const tester = getUser(user);
    const account = (await tester.getAccounts())[0];
    console.log(`Sending tokens from faucet to: ${user}(${account.address})`);
    const res = await sendFaucet(account.address);
    expect(res.data.result.code).toBe(0);
  });
};

const findVal = (object: IObjectKeys, key: string) => {
  var value: any;
  Object.keys(object).some((k) => {
    if (k === key) {
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === "object") {
      value = findVal(object[k] as IObjectKeys, key);
      return value !== undefined;
    }
  });
  return value;
};

// Helper to get file from within assets folder in root
export const getFileFromPath = (
  pathList: string[],
  encoding: string = "base64"
) => {
  const newPath = path.resolve(__dirname, "..", "..", "assets", ...pathList);
  const fileBuffer = fs.readFileSync(newPath, encoding && { encoding });
  return fileBuffer;
};

// Helper to save file to assets folder in root
export const saveFileToPath = (pathList: string[], data: any) => {
  const newPath = path.resolve(__dirname, "..", "..", "assets", ...pathList);
  fs.writeFileSync(newPath, data);
};

export const addDays = (date: Date, days: number) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const timeout = async (timeoutMS = 1000) => {
  const promise = new Promise((res) =>
    setTimeout(() => res("Waaa"), timeoutMS)
  );
  return await promise;
};

export const chunkArray = <T>(arr: T[], size: number): T[][] =>
  [...Array(Math.ceil(arr.length / size))].map((_, i) =>
    arr.slice(size * i, size + size * i)
  );

export const addMinutesToDate = (date: Date, minutes: number): Date => {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
};
