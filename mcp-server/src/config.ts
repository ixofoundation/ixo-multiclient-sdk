import { isNetworkName, NETWORKS, NetworkName } from "./networks";

/**
 * Worker environment bindings. On Cloudflare these come from `wrangler.jsonc`
 * `vars` (and secrets/dashboard) and are passed in per-request — never from
 * `process.env`. No signing key lives here: this server is non-custodial.
 */
export interface Env {
  IXO_NETWORK?: string;
  IXO_RPC_URL?: string;
  IXO_CHAIN_ID?: string;
  IXO_GAS_PRICE?: string;
  /** Durable Object binding backing the MCP agent (see wrangler.jsonc). */
  MCP_OBJECT: DurableObjectNamespace;
}

export interface IxoConfig {
  network: NetworkName;
  rpcUrl: string;
  chainId: string;
  denom: string;
  prefix: string;
  gasPrice: string;
  explorer?: string;
}

export function resolveConfig(env: Env): IxoConfig {
  const requested = (env.IXO_NETWORK || "mainnet").toLowerCase();
  const network: NetworkName = isNetworkName(requested) ? requested : "mainnet";
  const preset = NETWORKS[network];
  return {
    network,
    rpcUrl: env.IXO_RPC_URL || preset.rpcUrl,
    chainId: env.IXO_CHAIN_ID || preset.chainId,
    denom: preset.denom,
    prefix: preset.prefix,
    gasPrice: env.IXO_GAS_PRICE || preset.gasPrice,
    explorer: preset.explorer,
  };
}
