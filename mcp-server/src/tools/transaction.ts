import { fromBase64, toBase64 } from "@cosmjs/encoding";
import { z } from "zod";
import { getStargateClient, invalidateClients } from "../clients";
import { errorResult, textResult } from "../utils/format";
import { defineTool } from "../utils/tool";
import {
  assembleTxRawBytes,
  buildDirectSignDoc,
  RawMessage,
  resolveFee,
  simulateGasUsed,
} from "../utils/tx";

const message = z.object({
  typeUrl: z.string(),
  value: z.record(z.string(), z.any()),
});

const DEFAULT_GAS_ADJUSTMENT = 1.3;
/** Used only if gas is not supplied and on-chain simulation is unavailable. */
const FALLBACK_GAS_PER_MESSAGE = 250_000;
/** Bounded wait when the caller opts into awaiting inclusion (Workers time limits). */
const AWAIT_TIMEOUT_MS = 20_000;
const AWAIT_POLL_MS = 2_500;

export const transactionTools = [
  defineTool({
    name: "ixo_build_transaction",
    description:
      "Build an unsigned SIGN_MODE_DIRECT SignDoc from one or more messages (use the ixo_compose_* tools to create them). The server fetches the account number/sequence and, unless `gas` is given, simulates to estimate gas. Returns base64 bodyBytes/authInfoBytes for YOU (the agent) to sign with your own wallet — the server never signs. After signing, call ixo_broadcast_transaction.",
    inputSchema: {
      messages: z.array(message).min(1),
      signerAddress: z.string().describe("Bech32 ixo address of the signer"),
      signerPubKey: z.string().describe("base64 secp256k1 compressed public key of the signer"),
      memo: z.string().optional(),
      gas: z.number().int().positive().optional().describe("Explicit gas limit (skips simulation)"),
      gasAdjustment: z
        .number()
        .positive()
        .optional()
        .describe(`Multiplier applied to simulated gas (default ${DEFAULT_GAS_ADJUSTMENT})`),
    },
    handler: async (args, { config }) => {
      try {
        const messages = args.messages as RawMessage[];
        const stargate = await getStargateClient(config.rpcUrl);
        const account = await stargate.getAccount(args.signerAddress);
        if (!account) {
          return errorResult(
            `Signer account ${args.signerAddress} not found on chain (fund it first).`,
          );
        }

        let gas = args.gas;
        let simulatedGas: number | undefined;
        let gasNote: string | undefined;
        if (!gas) {
          try {
            simulatedGas = await simulateGasUsed(
              config.rpcUrl,
              messages,
              args.signerPubKey,
              account.sequence,
              args.memo ?? "",
            );
            gas = Math.ceil(simulatedGas * (args.gasAdjustment ?? DEFAULT_GAS_ADJUSTMENT));
          } catch (simErr) {
            gas = FALLBACK_GAS_PER_MESSAGE * messages.length;
            gasNote = `Gas simulation failed (${
              simErr instanceof Error ? simErr.message : String(simErr)
            }); using fallback gas ${gas}. Pass an explicit 'gas' to override.`;
          }
        }

        const fee = await resolveFee(gas, config.gasPrice);
        const signDoc = await buildDirectSignDoc({
          messages,
          signerPubKeyBase64: args.signerPubKey,
          sequence: account.sequence,
          accountNumber: account.accountNumber,
          chainId: config.chainId,
          fee,
          memo: args.memo ?? "",
        });

        return textResult({
          signMode: "SIGN_MODE_DIRECT",
          signDoc: {
            bodyBytes: toBase64(signDoc.bodyBytes),
            authInfoBytes: toBase64(signDoc.authInfoBytes),
            chainId: signDoc.chainId,
            accountNumber: signDoc.accountNumber.toString(),
          },
          signerData: {
            accountNumber: account.accountNumber,
            sequence: account.sequence,
            chainId: config.chainId,
          },
          fee,
          simulatedGas,
          gasNote,
          instructions:
            "Sign the SignDoc (serialize the SignDoc proto and sign with your secp256k1 key, SIGN_MODE_DIRECT). Then call ixo_broadcast_transaction with either signedTxBytes (base64 TxRaw) or { bodyBytes, authInfoBytes, signature }.",
        });
      } catch (err) {
        invalidateClients(config.rpcUrl);
        return errorResult(err);
      }
    },
  }),

  defineTool({
    name: "ixo_simulate_transaction",
    description:
      "Estimate gas for one or more messages without broadcasting. Returns gasUsed/gasWanted and a suggested gas limit + fee.",
    inputSchema: {
      messages: z.array(message).min(1),
      signerAddress: z.string(),
      signerPubKey: z.string().describe("base64 secp256k1 compressed public key"),
      memo: z.string().optional(),
      gasAdjustment: z.number().positive().optional(),
    },
    handler: async (args, { config }) => {
      try {
        const messages = args.messages as RawMessage[];
        const stargate = await getStargateClient(config.rpcUrl);
        const account = await stargate.getAccount(args.signerAddress);
        if (!account) {
          return errorResult(`Signer account ${args.signerAddress} not found on chain.`);
        }
        const gasUsed = await simulateGasUsed(
          config.rpcUrl,
          messages,
          args.signerPubKey,
          account.sequence,
          args.memo ?? "",
        );
        const suggestedGas = Math.ceil(gasUsed * (args.gasAdjustment ?? DEFAULT_GAS_ADJUSTMENT));
        return textResult({
          gasUsed,
          suggestedGas,
          suggestedFee: await resolveFee(suggestedGas, config.gasPrice),
        });
      } catch (err) {
        invalidateClients(config.rpcUrl);
        return errorResult(err);
      }
    },
  }),

  defineTool({
    name: "ixo_broadcast_transaction",
    description:
      "Broadcast a transaction that YOU signed. Provide either signedTxBytes (base64-encoded TxRaw) or the three parts { bodyBytes, authInfoBytes, signature } (all base64). The server holds no keys; it only relays your signed bytes to the chain. By default it broadcasts in 'sync' mode (returns the hash once the tx passes CheckTx and enters the mempool) — then poll ixo_get_tx for the on-chain result. Set awaitInclusion=true to wait for a block instead (bounded; may hit Worker time limits).",
    inputSchema: {
      signedTxBytes: z
        .string()
        .optional()
        .describe("base64-encoded signed TxRaw (preferred)"),
      bodyBytes: z.string().optional().describe("base64 TxBody bytes (from ixo_build_transaction)"),
      authInfoBytes: z
        .string()
        .optional()
        .describe("base64 AuthInfo bytes (from ixo_build_transaction)"),
      signature: z.string().optional().describe("base64 signature over the SignDoc"),
      awaitInclusion: z
        .boolean()
        .optional()
        .describe("Wait for block inclusion (default false → return hash after CheckTx)."),
    },
    handler: async (args, { config }) => {
      let txBytes: Uint8Array;
      if (args.signedTxBytes) {
        txBytes = fromBase64(args.signedTxBytes);
      } else if (args.bodyBytes && args.authInfoBytes && args.signature) {
        txBytes = assembleTxRawBytes(args.bodyBytes, args.authInfoBytes, args.signature);
      } else {
        return errorResult(
          "Provide either signedTxBytes, or all of bodyBytes + authInfoBytes + signature.",
        );
      }
      const explorerFor = (hash: string) =>
        config.explorer ? `${config.explorer}/transactions/${hash}` : undefined;
      try {
        const stargate = await getStargateClient(config.rpcUrl);
        if (args.awaitInclusion) {
          const res = await stargate.broadcastTx(txBytes, AWAIT_TIMEOUT_MS, AWAIT_POLL_MS);
          return textResult({
            broadcast: "block",
            success: res.code === 0,
            transactionHash: res.transactionHash,
            code: res.code,
            height: res.height,
            gasUsed: res.gasUsed,
            gasWanted: res.gasWanted,
            rawLog: res.rawLog,
            explorer: explorerFor(res.transactionHash),
          });
        }
        // sync: resolves with the hash once CheckTx passes; rejects (with code/log)
        // if CheckTx fails (e.g. bad sequence, insufficient fee).
        const hash = await stargate.broadcastTxSync(txBytes);
        return textResult({
          broadcast: "sync",
          accepted: true,
          transactionHash: hash,
          explorer: explorerFor(hash),
          note: "Accepted into the mempool (CheckTx passed). Poll ixo_get_tx with this hash for the on-chain execution result.",
        });
      } catch (err) {
        invalidateClients(config.rpcUrl);
        return errorResult(err);
      }
    },
  }),
];
