export * from "./codegen"; // export cosmos(namespace)for proto encoded types and queries
export * from "./codegen_ixo_helpers"; // export impact(namespace)for proto encoded types and queries
export * as utils from "./utils"; // export util helpers like generateSecpDid function or generateMnemonic function
export * from "./stargate_client"; //export createSigningClient customized for ed key handling and all ixo registries added

import { cosmos } from "./codegen";
import { ixo } from "./codegen_ixo_helpers";

export const createQueryClient = async (rpcEndpoint: string) => {
  const queryCosmos = await cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryIxo = await ixo.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  return { ...queryCosmos, ...queryIxo };
};
