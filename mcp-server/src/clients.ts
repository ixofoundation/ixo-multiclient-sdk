import { StargateClient } from "@cosmjs/stargate";
import { createQueryClient, QueryClient } from "@ixo/impactxclient-sdk";

/**
 * Lazily-created, memoized chain clients keyed by RPC URL. Both are read-only
 * from the Worker's perspective:
 *  - the IXO query client serves module reads + tx simulate/getTx, and
 *  - the Stargate client serves account/balance reads and broadcasts the
 *    already-signed transactions the agent returns (`broadcastTx`).
 * The server never holds keys or signs.
 */

const queryClients = new Map<string, Promise<QueryClient>>();
const stargateClients = new Map<string, Promise<StargateClient>>();

export function getQueryClient(rpcUrl: string): Promise<QueryClient> {
  let client = queryClients.get(rpcUrl);
  if (!client) {
    client = createQueryClient(rpcUrl).catch((err) => {
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
    client = StargateClient.connect(rpcUrl).catch((err) => {
      stargateClients.delete(rpcUrl);
      throw err;
    });
    stargateClients.set(rpcUrl, client);
  }
  return client;
}
