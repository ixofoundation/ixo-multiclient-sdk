import { toBase64 } from "@cosmjs/encoding";
import { z } from "zod";
import { loadSdk } from "../lazy";
import { getServerSigningClient, getServerWallet } from "../signing";
import { errorResult, textResult } from "../utils/format";
import { defineTool } from "../utils/tool";
import { normalizeMessage, RawMessage, resolveFee } from "../utils/tx";

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
      "CUSTODIAL: the SERVER signs the given messages with its own wallet (IXO_MNEMONIC) and broadcasts them, waiting for inclusion. Use ixo_compose_* to build messages. gas defaults to 'auto' (simulated). Prefer the non-custodial build/sign/broadcast flow unless the server itself is the authorized signer.",
    inputSchema: {
      messages: z.array(message).min(1),
      memo: z.string().optional(),
      gas: z
        .union([z.number().int().positive(), z.literal("auto")])
        .optional()
        .describe("Explicit gas limit, or 'auto' to simulate (default)."),
    },
    handler: async (args, ctx) => {
      try {
        const mnemonic = ctx.env.IXO_MNEMONIC;
        if (!mnemonic) return errorResult("Server-signing is not configured (no IXO_MNEMONIC).");

        const [client, wallet] = await Promise.all([
          getServerSigningClient(ctx.config, ctx.env),
          getServerWallet(mnemonic, ctx.config.prefix),
        ]);
        const [account] = await wallet.getAccounts();

        const messages = (args.messages as RawMessage[]).map(normalizeMessage);
        const fee =
          args.gas && args.gas !== "auto"
            ? await resolveFee(args.gas, ctx.config.gasPrice)
            : "auto";

        const res = await client.signAndBroadcast(
          account.address,
          messages,
          fee as never,
          args.memo ?? "",
        );
        return textResult({
          success: res.code === 0,
          transactionHash: res.transactionHash,
          code: res.code,
          height: res.height,
          gasUsed: res.gasUsed,
          gasWanted: res.gasWanted,
          rawLog: res.rawLog,
          signer: account.address,
          explorer: ctx.config.explorer
            ? `${ctx.config.explorer}/transactions/${res.transactionHash}`
            : undefined,
        });
      } catch (err) {
        return errorResult(err);
      }
    },
  }),
];
