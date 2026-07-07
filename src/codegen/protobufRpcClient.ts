import type { ProtobufRpcClient } from "@cosmjs/stargate";

/**
 * Minimal structural view of @cosmjs/stargate's QueryClient: the only part
 * the generated query extensions actually use.
 */
export interface AbciQueryClient {
  queryAbci(
    path: string,
    request: Uint8Array,
    desiredHeight?: number
  ): Promise<{ readonly value: Uint8Array; readonly height: number }>;
}

/**
 * Drop-in local replacement for @cosmjs/stargate's createProtobufRpcClient.
 * Behaves identically (same path format, same queryAbci delegation), but lives
 * here so that importing a single generated query client does not pull the
 * whole @cosmjs/stargate CJS barrel (and with it ~900 KB of cosmjs-types)
 * into bundles.
 */
export const createProtobufRpcClient = (
  base: AbciQueryClient
): ProtobufRpcClient => {
  return {
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      const path = `/${service}/${method}`;
      const response = await base.queryAbci(path, data, undefined);
      return response.value;
    },
  };
};
