import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    cosmos: {
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      }
    },
    ixo: {
      bonds: {
        v1beta1: (await import("./bonds/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      entity: {
        v1beta1: (await import("./entity/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      iid: {
        v1beta1: (await import("./iid/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      payments: {
        v1: (await import("./payments/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      project: {
        v1: (await import("./project/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      token: {
        v1beta1: (await import("./token/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};