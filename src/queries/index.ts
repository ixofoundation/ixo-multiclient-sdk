import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { ixo, ibc, cosmwasm, cosmos } from "../codegen";
import {
  QueryClient as QueryClientStargate,
  createProtobufRpcClient,
} from "@cosmjs/stargate";

/**
 * Creates a new QueryClient with all the modules and custom queries
 */
export const createQueryClient = async (rpcEndpoint: string) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClientStargate(tmClient);
  const rpc = createProtobufRpcClient(client);

  // Manually create the QueryClient with all the modules and custom queries
  return {
    // Ixo custom modules
    // ================================================
    ixo: {
      bonds: {
        v1beta1: new ixo.bonds.v1beta1.QueryClientImpl(rpc),
      },
      claims: {
        v1beta1: new ixo.claims.v1beta1.QueryClientImpl(rpc),
      },
      entity: {
        v1beta1: new ixo.entity.v1beta1.QueryClientImpl(rpc),
      },
      epochs: {
        v1beta1: new ixo.epochs.v1beta1.QueryClientImpl(rpc),
      },
      iid: {
        v1beta1: new ixo.iid.v1beta1.QueryClientImpl(rpc),
      },
      mint: {
        v1beta1: new ixo.mint.v1beta1.QueryClientImpl(rpc),
      },
      smartaccount: {
        v1beta1: new ixo.smartaccount.v1beta1.QueryClientImpl(rpc),
      },
      token: {
        v1beta1: new ixo.token.v1beta1.QueryClientImpl(rpc),
      },
    },
    // IBC modules
    // ================================================
    ibc: {
      applications: {
        fee: {
          v1: new ibc.applications.fee.v1.QueryClientImpl(rpc),
        },
        interchain_accounts: {
          controller: {
            v1: new ibc.applications.interchain_accounts.controller.v1.QueryClientImpl(
              rpc
            ),
          },
          host: {
            v1: new ibc.applications.interchain_accounts.host.v1.QueryClientImpl(
              rpc
            ),
          },
        },
        transfer: {
          v1: new ibc.applications.transfer.v1.QueryClientImpl(rpc),
        },
      },
      core: {
        channel: {
          v1: new ibc.core.channel.v1.QueryClientImpl(rpc),
        },
        client: {
          v1: new ibc.core.client.v1.QueryClientImpl(rpc),
        },
        connection: {
          v1: new ibc.core.connection.v1.QueryClientImpl(rpc),
        },
      },
    },
    // Cosmwasm modules
    // ================================================
    cosmwasm: {
      wasm: {
        v1: new cosmwasm.wasm.v1.QueryClientImpl(rpc),
      },
    },
    // Cosmos modules
    // ================================================
    cosmos: {
      app: {
        v1alpha1: new cosmos.app.v1alpha1.QueryClientImpl(rpc),
      },
      auth: {
        v1beta1: new cosmos.auth.v1beta1.QueryClientImpl(rpc),
      },
      authz: {
        v1beta1: new cosmos.authz.v1beta1.QueryClientImpl(rpc),
      },
      bank: {
        v1beta1: new cosmos.bank.v1beta1.QueryClientImpl(rpc),
      },
      base: {
        tendermint: {
          v1beta1: new cosmos.base.tendermint.v1beta1.ServiceClientImpl(rpc),
        },
        node: {
          v1beta1: new cosmos.base.node.v1beta1.ServiceClientImpl(rpc),
        },
      },
      circuit: {
        v1: new cosmos.circuit.v1.QueryClientImpl(rpc),
      },
      consensus: {
        v1: new cosmos.consensus.v1.QueryClientImpl(rpc),
      },
      distribution: {
        v1beta1: new cosmos.distribution.v1beta1.QueryClientImpl(rpc),
      },
      evidence: {
        v1beta1: new cosmos.evidence.v1beta1.QueryClientImpl(rpc),
      },
      feegrant: {
        v1beta1: new cosmos.feegrant.v1beta1.QueryClientImpl(rpc),
      },
      gov: {
        v1: new cosmos.gov.v1.QueryClientImpl(rpc),
        v1beta1: new cosmos.gov.v1beta1.QueryClientImpl(rpc),
      },
      mint: {
        v1beta1: new cosmos.mint.v1beta1.QueryClientImpl(rpc),
      },
      params: {
        v1beta1: new cosmos.params.v1beta1.QueryClientImpl(rpc),
      },
      slashing: {
        v1beta1: new cosmos.slashing.v1beta1.QueryClientImpl(rpc),
      },
      staking: {
        v1beta1: new cosmos.staking.v1beta1.QueryClientImpl(rpc),
      },
      tx: {
        v1beta1: new cosmos.tx.v1beta1.ServiceClientImpl(rpc),
      },
      upgrade: {
        v1beta1: new cosmos.upgrade.v1beta1.QueryClientImpl(rpc),
      },
    },
  };
};

export type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
