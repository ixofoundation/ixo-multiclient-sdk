import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint,
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    ixo: {
      bonds: (
        await import("../codegen_ixo/bonds/query.rpc.Query")
      ).createRpcQueryExtension(client),
      entity: (
        await import("../codegen_ixo/entity/query.rpc.Query")
      ).createRpcQueryExtension(client),
      iid: (
        await import("../codegen_ixo/iid/query.rpc.Query")
      ).createRpcQueryExtension(client),
      payments: (
        await import("../codegen_ixo/payments/query.rpc.Query")
      ).createRpcQueryExtension(client),
      project: (
        await import("../codegen_ixo/project/query.rpc.Query")
      ).createRpcQueryExtension(client),
    },
  };
};
