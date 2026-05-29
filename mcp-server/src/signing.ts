import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";
import {
  createDOStoreFunctions,
  createSigningClient,
  SigningStargateClient,
} from "@ixo/impactxclient-sdk";
import { Env, IxoConfig } from "./config";

/**
 * Helpers for the OPTIONAL custodial server-signing mode. The server builds a
 * wallet from `IXO_MNEMONIC` and signs/broadcasts on its own behalf. When the
 * `SEQUENCE_MANAGER` Durable Object is bound, sequence numbers are allocated
 * atomically (safe for concurrent broadcasts) via the SDK's Cloudflare helper.
 *
 * This is the counterpart to the default non-custodial flow; it is only active
 * when a mnemonic is configured.
 */

let walletCache: Promise<DirectSecp256k1HdWallet> | undefined;
let walletCacheKey: string | undefined;

export function getServerWallet(
  mnemonic: string,
  prefix: string,
): Promise<DirectSecp256k1HdWallet> {
  const key = `${prefix}:${mnemonic}`;
  if (!walletCache || walletCacheKey !== key) {
    walletCacheKey = key;
    walletCache = DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix }).catch((err) => {
      walletCache = undefined;
      throw err;
    });
  }
  return walletCache;
}

const signingClients = new Map<string, Promise<SigningStargateClient>>();

export async function getServerSigningClient(
  config: IxoConfig,
  env: Env,
): Promise<SigningStargateClient> {
  const mnemonic = env.IXO_MNEMONIC;
  if (!mnemonic) {
    throw new Error(
      "Server-signing is not configured. Set the IXO_MNEMONIC secret to enable the ixo_server_* tools.",
    );
  }
  const cached = signingClients.get(config.rpcUrl);
  if (cached) return cached;

  const promise = (async () => {
    const wallet = await getServerWallet(mnemonic, config.prefix);
    let storeFunctions;
    if (env.SEQUENCE_MANAGER) {
      const id = env.SEQUENCE_MANAGER.idFromName("global");
      const stub = env.SEQUENCE_MANAGER.get(id);
      storeFunctions = createDOStoreFunctions(stub as unknown as { fetch: typeof stub.fetch });
    }
    return createSigningClient(
      config.rpcUrl,
      wallet,
      false,
      { gasPrice: GasPrice.fromString(config.gasPrice) },
      storeFunctions,
    );
  })().catch((err) => {
    signingClients.delete(config.rpcUrl);
    throw err;
  });

  signingClients.set(config.rpcUrl, promise);
  return promise;
}
