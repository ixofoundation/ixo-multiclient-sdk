import { toHex } from "@cosmjs/encoding";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { assertIsDeliverTxSuccess, DeliverTxResponse } from "@cosmjs/stargate";
import axios from "axios";
import base58 from "bs58";

import { keyType, KeyTypes, RPC_URL, WalletUsers } from "./constants";
import { getEdClient } from "./edClient";
import { getSecpClient } from "./secpClient";
import {
  utils,
  createSigningClient,
  ixo,
  cosmos,
  createQueryClient as createQueryClientImport,
} from "../../src";
import { IObjectKeys } from "./types";

export { ixo, cosmos, utils };

export const generateId = (length: number = 12) => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const sendFaucet = async (address: string) => {
  return await axios.post("https://devnet-faucet.ixo.earth/credit", {
    denom: "uixo",
    address: address,
  });
};

export const getVerificationMethod = (
  did: string,
  pubkey: Uint8Array,
  controller: string,
  type: KeyTypes = keyType
) => {
  return ixo.iid.v1beta1.VerificationMethod.fromPartial({
    id: did,
    type:
      type === "ed"
        ? "Ed25519VerificationKey2018"
        : "EcdsaSecp256k1VerificationKey2019",
    publicKeyMultibase: "F" + toHex(pubkey),
    controller: controller,
  });
};

export type wallet = {
  ed: ReturnType<typeof getEdClient>;
  secp: ReturnType<typeof getEdClient>;
};

export let wallets: { [key in WalletUsers]: wallet };

export const generateWallets = async () => {
  let generatedWallets = {};
  for (const user of Object.values(WalletUsers)) {
    const mnemonics = utils.mnemonic.generateMnemonic(24);
    generatedWallets[user] = {
      ed: getEdClient(mnemonics),
      secp: await getSecpClient(mnemonics),
    };
  }
  wallets = generatedWallets as any;

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
};

export const generateNewWallet = async (user: WalletUsers) => {
  const mnemonics = utils.mnemonic.generateMnemonic(24);
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
  offlineWallet: ReturnType<typeof getEdClient> = getUser(),
  ignoreGetSequence?: boolean
) => {
  return createSigningClient(
    RPC_URL,
    offlineWallet as OfflineSigner,
    ignoreGetSequence
  );
};

export let queryClient: Awaited<ReturnType<typeof createQueryClientImport>>;

export const createQueryClient = async () => {
  console.log("ran createQueryClient");
  queryClient = await createQueryClientImport(RPC_URL);
};

export const checkSuccessMsg = (res: DeliverTxResponse, succeed: boolean) => {
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
  console.log({ res });
  console.log({ equal });
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
  succeed: boolean = true
) => {
  return test(message, async () => {
    console.log("Testing message " + message);
    checkSuccessMsg(await action(), succeed);
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

export const sendFromFaucet = (user: WalletUsers) => {
  return test("send tokens from faucet", async () => {
    const tester = getUser(user);
    const account = (await tester.getAccounts())[0];
    console.log(`Sending tokens from faucet to: ${user}(${account.address})`);
    const res = await sendFaucet(account.address);
    expect(res.data).toBe("ok");
  });
};

export const getDidFromEvents = (res: DeliverTxResponse) => {
  // console.log(res);
  return JSON.parse(res.rawLog!)[0]
    ["events"].find((e: any) => e.type === "iid.IidDocumentCreatedEvent")
    ["attributes"].find((e: any) => e.key === "did")
    ["value"].replaceAll('"', "");
};

function findVal(object: IObjectKeys, key: string) {
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
}
