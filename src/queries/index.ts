export const createQueryClient = async (rpcEndpoint: string) => {
  const queryCosmos = await (
    await import("../codegen")
  ).cosmos.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryIxo = await (
    await import("../codegen")
  ).ixo.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryIbc = await (
    await import("../codegen")
  ).ibc.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryCosmWasm = await (
    await import("../codegen")
  ).cosmwasm.ClientFactory.createRPCQueryClient({
    rpcEndpoint,
  });
  const queryEntity = await (
    await import("./entity")
  ).createRpcQueryExtension(rpcEndpoint);

  return {
    // add queryIxo and queryIbc first as it has base cosmos module and cosmos namespace needs to be overridden by queryCosmos
    ...queryIxo,
    ...queryIbc,
    ...queryCosmos,
    ...queryCosmWasm,
    custom: {
      ...queryEntity,
    },
  };
};

export type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
