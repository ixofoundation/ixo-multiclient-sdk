export const createQueryClient = async (rpcEndpoint: string) => {
  const queryCosmos = await (
    await import("../codegen")
  ).cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryIxo = await (
    await import("../codegen_ixo_helpers")
  ).ixo.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryCustom = await (
    await import("./entity")
  ).createRpcQueryExtension(rpcEndpoint);

  return {
    ...queryCosmos,
    ...queryIxo,
    custom: {
      ...queryCustom,
    },
  };
};
