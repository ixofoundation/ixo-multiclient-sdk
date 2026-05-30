import type { StargateClient } from "@cosmjs/stargate";
import type { QueryClient } from "@ixo/impactxclient-sdk";
import { loadSdk, loadStargate } from "./lazy";

/**
 * Lazily-created, memoized chain clients keyed by RPC URL. Both are read-only
 * from the Worker's perspective:
 *  - the IXO query client serves module reads + tx simulate/getTx, and
 *  - the Stargate client serves account/balance reads and broadcasts the
 *    already-signed transactions the agent returns (`broadcastTx`).
 * The server never holds keys or signs.
 *
 * The underlying packages are imported dynamically (see lazy.ts) so the Worker
 * can boot — a static import would initialize crypto in global scope and crash.
 */

const queryClients = new Map<string, Promise<QueryClient>>();
const stargateClients = new Map<string, Promise<StargateClient>>();

export function getQueryClient(rpcUrl: string): Promise<QueryClient> {
  let client = queryClients.get(rpcUrl);
  if (!client) {
    client = (async () => {
      const { createQueryClient } = await loadSdk();
      return createQueryClient(rpcUrl);
    })().catch((err) => {
      queryClients.delete(rpcUrl);
      throw err;
    });
    queryClients.set(rpcUrl, client);
  }
  return client;
}

export function getStargateClient(rpcUrl: string): Promise<StargateClient> {
  let client = stargateClients.get(rpcUrl);
  if (!client) {
    client = (async () => {
      const { StargateClient } = await loadStargate();
      return StargateClient.connect(rpcUrl);
    })().catch((err) => {
      stargateClients.delete(rpcUrl);
      throw err;
    });
    stargateClients.set(rpcUrl, client);
  }
  return client;
}

/**
 * Drop cached clients for an RPC URL so the next call reconnects. Call this when
 * a request against a cached client fails, in case the cached connection went
 * bad (the RPC transport is HTTP/fetch-based, so this is belt-and-suspenders).
 */
export function invalidateClients(rpcUrl: string): void {
  queryClients.delete(rpcUrl);
  stargateClients.delete(rpcUrl);
}
