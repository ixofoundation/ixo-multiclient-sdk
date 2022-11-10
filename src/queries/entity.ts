export const createRpcQueryExtension = async (rpcEndpoint: string) => {
  const ixoQuery = await (
    await import("../codegen_ixo_helpers")
  ).ixo.ClientFactory.createRPCQueryClient({ rpcEndpoint });

  const getEntityContext = async ({ entityDid }: { entityDid: string }) => {
    return await ixoQuery.ixo.entity.entityDoc({ entityDid });
  };

  return {
    entity: {
      getEntityContext,
    },
  };
};
