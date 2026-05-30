import { toBase64 } from "@cosmjs/encoding";
import { z } from "zod";
import { getStargateClient, invalidateClients } from "../clients";
import { loadSdk } from "../lazy";
import { getServerSigningClient, getServerWallet } from "../signing";
import { errorResult, textResult } from "../utils/format";
import { defineTool } from "../utils/tool";
import { normalizeMessage, RawMessage, resolveFee, simulateGasUsed } from "../utils/tx";

const DEFAULT_GAS_ADJUSTMENT = 1.3;

const message = z.object({
  typeUrl: z.string(),
  value: z.record(z.string(), z.any()),
});

/**
 * OPTIONAL custodial server-signing tools. Registered only when IXO_MNEMONIC is
 * configured. In this mode the SERVER signs with its own wallet — the opposite
 * of the default non-custodial flow. Use only where the server is the
 * authorized actor (e.g. an oracle/relayer agent operating its own account).
 */
export const serverSigningTools = [
  defineTool({
    name: "ixo_server_get_signer",
    description:
      "Return the server's own signing identity (server-signing mode): bech32 address, did and base64 public key. These are the credentials ixo_server_sign_and_broadcast signs with.",
    inputSchema: {},
    handler: async (_args, ctx) => {
      const mnemonic = ctx.env.IXO_MNEMONIC;
      if (!mnemonic) return errorResult("Server-signing is not configured (no IXO_MNEMONIC).");
      const [{ utils }, wallet] = await Promise.all([
        loadSdk(),
        getServerWallet(mnemonic, ctx.config.prefix),
      ]);
      const [account] = await wallet.getAccounts();
      return textResult({
        address: account.address,
        did: utils.did.generateSecpDid(account.address),
        pubKey: toBase64(account.pubkey),
        sequenceCoordination: ctx.env.SEQUENCE_MANAGER ? "durable-object" : "chain",
      });
    },
  }),

  defineTool({
    name: "ixo_server_sign_and_broadcast",
    description:
      "CUSTODIAL: the SERVER signs the given messages with its own wallet (IXO_MNEMONIC) and broadcasts them. Use ixo_compose_* to build messages. Gas is simulated (DIRECT mode) unless an explicit `gas` is given. Defaults to 'sync' broadcast (returns the hash after CheckTx — poll ixo_get_tx for the result); set awaitInclusion=true to wait for a block. Prefer the non-custodial flow unless the server itself is the authorized signer.",
    inputSchema: {
      messages: z.array(message).min(1),
      memo: z.string().optional(),
      gas: z.number().int().positive().optional().describe("Explicit gas limit (skips simulation)."),
      gasAdjustment: z.number().positive().optional(),
      awaitInclusion: z
        .boolean()
        .optional()
        .describe("Wait for block inclusion (default false → return hash after CheckTx)."),
    },
    handler: async (args, ctx) => {
      try {
        const mnemonic = ctx.env.IXO_MNEMONIC;
        if (!mnemonic) return errorResult("Server-signing is not configured (no IXO_MNEMONIC).");

        const [client, wallet, stargate] = await Promise.all([
          getServerSigningClient(ctx.config, ctx.env),
          getServerWallet(mnemonic, ctx.config.prefix),
          getStargateClient(ctx.config.rpcUrl),
        ]);
        const [account] = await wallet.getAccounts();
        const messages = (args.messages as RawMessage[]).map(normalizeMessage);

        // Compute an explicit fee. Never use CosmJS fee:"auto" — its internal
        // simulate advertises SIGN_MODE_UNSPECIFIED, which IXO ante can reject.
        let gas = args.gas;
        if (!gas) {
          const onchain = await stargate.getAccount(account.address);
          const gasUsed = await simulateGasUsed(
            ctx.config.rpcUrl,
            messages,
            toBase64(account.pubkey),
            onchain?.sequence ?? 0,
            args.memo ?? "",
          );
          gas = Math.ceil(gasUsed * (args.gasAdjustment ?? DEFAULT_GAS_ADJUSTMENT));
        }
        const fee = await resolveFee(gas, ctx.config.gasPrice);

        const explorerFor = (hash: string) =>
          ctx.config.explorer ? `${ctx.config.explorer}/transactions/${hash}` : undefined;

        if (args.awaitInclusion) {
          const res = await client.signAndBroadcast(account.address, messages, fee, args.memo ?? "");
          return textResult({
            broadcast: "block",
            success: res.code === 0,
            transactionHash: res.transactionHash,
            code: res.code,
            height: res.height,
            gasUsed: res.gasUsed,
            gasWanted: res.gasWanted,
            rawLog: res.rawLog,
            signer: account.address,
            explorer: explorerFor(res.transactionHash),
          });
        }
        const hash = await client.signAndBroadcastSync(account.address, messages, fee, args.memo ?? "");
        return textResult({
          broadcast: "sync",
          accepted: true,
          transactionHash: hash,
          signer: account.address,
          explorer: explorerFor(hash),
          note: "Accepted into the mempool (CheckTx passed). Poll ixo_get_tx with this hash for the on-chain execution result.",
        });
      } catch (err) {
        invalidateClients(ctx.config.rpcUrl);
        return errorResult(err);
      }
    },
  }),
];
