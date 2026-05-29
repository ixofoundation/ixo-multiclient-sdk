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
  /**
   * OPTIONAL server-signing mode (custodial). When set, the server can sign and
   * broadcast on its own behalf via the ixo_server_* tools. Leave unset for the
   * default non-custodial mode. Configure as a secret (`wrangler secret put`).
   */
  IXO_MNEMONIC?: string;
  /**
   * Bearer token gating the /mcp and /sse endpoints. REQUIRED to enable
   * server-signing (custodial) tools — they will not be registered without it.
   * When set, every /mcp and /sse request must send `Authorization: Bearer <token>`
   * (or `X-API-Key: <token>`). Configure as a secret. Leave unset for a public,
   * read-only/non-custodial deployment.
   */
  IXO_MCP_AUTH_TOKEN?: string;
  /** Durable Object binding backing the MCP agent (see wrangler.jsonc). */
  MCP_OBJECT: DurableObjectNamespace;
  /**
   * Optional Durable Object for atomic sequence allocation when server-signing
   * concurrently (from @ixo/impactxclient-sdk/cloudflare). Safe to leave unbound.
   */
  SEQUENCE_MANAGER?: DurableObjectNamespace;
}

/** Whether a mnemonic is present (a prerequisite for custodial server-signing). */
export function isServerSigningEnabled(env: Env): boolean {
  return typeof env.IXO_MNEMONIC === "string" && env.IXO_MNEMONIC.trim().length > 0;
}

/** Whether an endpoint auth token is configured. */
export function hasAuthToken(env: Env): boolean {
  return (
    typeof env.IXO_MCP_AUTH_TOKEN === "string" && env.IXO_MCP_AUTH_TOKEN.trim().length > 0
  );
}

/**
 * Server-signing tools are only exposed when BOTH a mnemonic AND an auth token
 * are configured. This guarantees a custodial wallet is never reachable on an
 * unauthenticated public endpoint.
 */
export function canServerSign(env: Env): boolean {
  return isServerSigningEnabled(env) && hasAuthToken(env);
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
