import { fromBase64 } from "@cosmjs/encoding";
import type { Registry } from "@cosmjs/proto-signing";
import type { StdFee } from "@cosmjs/stargate";
import { SignMode } from "cosmjs-types/cosmos/tx/signing/v1beta1/signing";
import { AuthInfo, Fee, Tx, TxBody, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { getQueryClient } from "../clients";
import { loadAmino, loadProtoSigning, loadSdk, loadStargate } from "../lazy";

export interface RawMessage {
  typeUrl: string;
  value: Record<string, unknown>;
}

let registry: Registry | undefined;
export async function getRegistry(): Promise<Registry> {
  if (!registry) {
    const { createRegistry } = await loadSdk();
    registry = createRegistry();
  }
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
    case "/ixo.entity.v1beta1.MsgCreateEntity":
    case "/ixo.entity.v1beta1.MsgUpdateEntity":
      if (typeof value.data === "string") value.data = fromBase64(value.data);
      break;
  }
  return { typeUrl: msg.typeUrl, value };
}

export async function encodeTxBodyBytes(
  messages: RawMessage[],
  memo: string,
): Promise<Uint8Array> {
  const reg = await getRegistry();
  return reg.encode({
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    value: { messages: messages.map(normalizeMessage), memo },
  });
}

/** Compute an StdFee from a gas limit and a "<price><denom>" gas price string. */
export async function resolveFee(gas: number, gasPrice: string): Promise<StdFee> {
  const { calculateFee, GasPrice } = await loadStargate();
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
export async function buildDirectSignDoc(params: BuildSignDocParams) {
  const { messages, signerPubKeyBase64, sequence, accountNumber, chainId, fee, memo } =
    params;
  const { encodePubkey, makeAuthInfoBytes, makeSignDoc } = await loadProtoSigning();
  const { encodeSecp256k1Pubkey } = await loadAmino();
  const pubkey = encodePubkey(encodeSecp256k1Pubkey(fromBase64(signerPubKeyBase64)));
  const txBodyBytes = await encodeTxBodyBytes(messages, memo);
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey, sequence }],
    fee.amount,
    Number(fee.gas),
    fee.granter,
    fee.payer,
    SignMode.SIGN_MODE_DIRECT,
  );
  return makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
}

/**
 * Build an unsigned Tx (single empty signature) for the chain's `Simulate`
 * gas-estimation endpoint. The IXO SimulateRequest takes a decoded `tx`, and
 * the signer info advertises SIGN_MODE_DIRECT to match the real sign doc (IXO
 * ante validates the sign mode during simulation).
 */
export async function buildSimulationTx(
  messages: RawMessage[],
  signerPubKeyBase64: string,
  sequence: number,
  memo: string,
): Promise<Tx> {
  const { encodePubkey } = await loadProtoSigning();
  const { encodeSecp256k1Pubkey } = await loadAmino();
  const reg = await getRegistry();
  const pubkey = encodePubkey(encodeSecp256k1Pubkey(fromBase64(signerPubKeyBase64)));
  const anyMsgs = messages.map((m) => reg.encodeAsAny(normalizeMessage(m)));
  const body = TxBody.fromPartial({ messages: anyMsgs, memo });
  const authInfo = AuthInfo.fromPartial({
    signerInfos: [
      {
        publicKey: pubkey,
        sequence: BigInt(sequence),
        modeInfo: { single: { mode: SignMode.SIGN_MODE_DIRECT } },
      },
    ],
    fee: Fee.fromPartial({}),
  });
  return Tx.fromPartial({ body, authInfo, signatures: [new Uint8Array()] });
}

/**
 * Estimate gas via the chain's Simulate endpoint using a DIRECT-mode unsigned
 * tx. Used by both the non-custodial build path and server-signing, so neither
 * relies on CosmJS's `fee: "auto"` (which simulates with SIGN_MODE_UNSPECIFIED
 * and can be rejected by IXO ante sign-mode validation).
 */
export async function simulateGasUsed(
  rpcUrl: string,
  messages: RawMessage[],
  signerPubKeyBase64: string,
  sequence: number,
  memo: string,
): Promise<number> {
  const qc = await getQueryClient(rpcUrl);
  const tx = await buildSimulationTx(messages, signerPubKeyBase64, sequence, memo);
  const sim = await qc.cosmos.tx.v1beta1.simulate({ tx } as any);
  return Number(sim.gasInfo?.gasUsed ?? 0n);
}

/** Assemble signed TxRaw bytes from its three base64 parts. (No crypto.) */
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
