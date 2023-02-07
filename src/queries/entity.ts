export const createRpcQueryExtension = async (rpcEndpoint: string) => {
  const ixoQuery = await (
    await import("../codegen")
  ).ixo.ClientFactory.createRPCQueryClient({ rpcEndpoint });

  const getEntityContext = async ({ id }: { id: string }) => {
    return await ixoQuery.ixo.entity.v1beta1.entity({ id });
  };

  return {
    entity: {
      getEntityContext,
    },
  };
};
