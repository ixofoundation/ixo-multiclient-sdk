import { encodeSecp256k1Pubkey } from "@cosmjs/amino";
import { fromBase64 } from "@cosmjs/encoding";
import {
  encodePubkey,
  makeAuthInfoBytes,
  makeSignDoc,
  Registry,
  type TxBodyEncodeObject,
} from "@cosmjs/proto-signing";
import { calculateFee, GasPrice, type StdFee } from "@cosmjs/stargate";
import { createRegistry } from "@ixo/impactxclient-sdk";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { AuthInfo, Fee, Tx, TxBody, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";

export interface RawMessage {
  typeUrl: string;
  value: Record<string, unknown>;
}

let registry: Registry | undefined;
export function getRegistry(): Registry {
  if (!registry) registry = createRegistry();
  return registry;
}

/**
 * Messages arrive as JSON ({typeUrl, value}) from compose tools or directly
 * from the agent. JSON cannot carry the Uint8Array `bytes` fields some messages
 * require, so we convert known base64-encoded byte fields back to Uint8Array
 * before the registry encodes them. (Most Cosmos/IXO messages are string/number
 * only and need no conversion.)
 */
export function normalizeMessage(msg: RawMessage): RawMessage {
  const value: Record<string, unknown> = { ...msg.value };
  switch (msg.typeUrl) {
    case "/cosmwasm.wasm.v1.MsgExecuteContract":
    case "/cosmwasm.wasm.v1.MsgInstantiateContract":
    case "/cosmwasm.wasm.v1.MsgMigrateContract":
      if (typeof value.msg === "string") value.msg = fromBase64(value.msg);
      break;
    case "/cosmwasm.wasm.v1.MsgStoreCode":
      if (typeof value.wasmByteCode === "string")
        value.wasmByteCode = fromBase64(value.wasmByteCode);
      break;
  }
  return { typeUrl: msg.typeUrl, value };
}

export function encodeTxBodyBytes(messages: RawMessage[], memo: string): Uint8Array {
  const txBodyEncodeObject: TxBodyEncodeObject = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: { messages: messages.map(normalizeMessage), memo },
  };
  return getRegistry().encode(txBodyEncodeObject);
}

/** Compute an StdFee from a gas limit and a "<price><denom>" gas price string. */
export function resolveFee(gas: number, gasPrice: string): StdFee {
  return calculateFee(Math.ceil(gas), GasPrice.fromString(gasPrice));
}

export interface BuildSignDocParams {
  messages: RawMessage[];
  signerPubKeyBase64: string;
  sequence: number;
  accountNumber: number;
  chainId: string;
  fee: StdFee;
  memo: string;
}

/** Build a SIGN_MODE_DIRECT SignDoc for the agent to sign. No private key involved. */
export function buildDirectSignDoc(params: BuildSignDocParams) {
  const { messages, signerPubKeyBase64, sequence, accountNumber, chainId, fee, memo } =
    params;
  const pubkey = encodePubkey(encodeSecp256k1Pubkey(fromBase64(signerPubKeyBase64)));
  const txBodyBytes = encodeTxBodyBytes(messages, memo);
  const gasLimit = Number(fee.gas);
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey, sequence }],
    fee.amount,
    gasLimit,
    fee.granter,
    fee.payer,
    SignMode.SIGN_MODE_DIRECT,
  );
  return makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
}

/**
 * Build an unsigned Tx (single empty signature) for the chain's `Simulate`
 * gas-estimation endpoint. The IXO SimulateRequest takes a decoded `tx`.
 */
export function buildSimulationTx(
  messages: RawMessage[],
  signerPubKeyBase64: string,
  sequence: number,
  memo: string,
): Tx {
  const reg = getRegistry();
  const pubkey = encodePubkey(encodeSecp256k1Pubkey(fromBase64(signerPubKeyBase64)));
  const anyMsgs = messages.map((m) => reg.encodeAsAny(normalizeMessage(m)));
  const body = TxBody.fromPartial({ messages: anyMsgs, memo });
  const authInfo = AuthInfo.fromPartial({
    signerInfos: [
      {
        publicKey: pubkey,
        sequence: BigInt(sequence),
        modeInfo: { single: { mode: SignMode.SIGN_MODE_UNSPECIFIED } },
      },
    ],
    fee: Fee.fromPartial({}),
  });
  return Tx.fromPartial({ body, authInfo, signatures: [new Uint8Array()] });
}

/** Assemble signed TxRaw bytes from its three base64 parts. */
export function assembleTxRawBytes(
  bodyBytesB64: string,
  authInfoBytesB64: string,
  signatureB64: string,
): Uint8Array {
  const txRaw = TxRaw.fromPartial({
    bodyBytes: fromBase64(bodyBytesB64),
    authInfoBytes: fromBase64(authInfoBytesB64),
    signatures: [fromBase64(signatureB64)],
  });
  return TxRaw.encode(txRaw).finish();
}
