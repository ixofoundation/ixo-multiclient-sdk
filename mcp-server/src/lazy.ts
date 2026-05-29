/**
 * Lazy, memoized loaders for dependencies that initialize crypto at module-eval
 * time (CosmJS pulls in `elliptic`, which seeds an RNG on load). The Cloudflare
 * Workers runtime forbids crypto during top-level/global-scope evaluation, so a
 * STATIC import of these would crash the Worker at startup with
 * "No secure random number generator found". Importing them dynamically inside
 * request handlers defers evaluation to request time, where crypto is allowed.
 *
 * Keep `@cosmjs/encoding`, `cosmjs-types/*` and `@ixo/impactxclient-sdk/cloudflare`
 * as normal static imports — they do not touch crypto on load.
 */

function once<T>(fn: () => Promise<T>): () => Promise<T> {
  let p: Promise<T> | undefined;
  return () =>
    (p ??= fn().catch((err) => {
      p = undefined; // allow retry on transient import failure
      throw err;
    }));
}

export const loadSdk = once(() => import("@ixo/impactxclient-sdk"));
export const loadProtoSigning = once(() => import("@cosmjs/proto-signing"));
export const loadStargate = once(() => import("@cosmjs/stargate"));
export const loadAmino = once(() => import("@cosmjs/amino"));
