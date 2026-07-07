import { connectComet } from "@cosmjs/tendermint-rpc";
// Query client modules are imported per-file (NOT via the ../codegen
// namespace objects) so bundlers only include the query implementations,
// not every tx/genesis/event module of the chain.
import * as _cosmos_app_v1alpha1_query_rpc_Query from "../codegen/cosmos/app/v1alpha1/query.rpc.Query";
import * as _cosmos_auth_v1beta1_query_rpc_Query from "../codegen/cosmos/auth/v1beta1/query.rpc.Query";
import * as _cosmos_authz_v1beta1_query_rpc_Query from "../codegen/cosmos/authz/v1beta1/query.rpc.Query";
import * as _cosmos_bank_v1beta1_query_rpc_Query from "../codegen/cosmos/bank/v1beta1/query.rpc.Query";
import * as _cosmos_base_node_v1beta1_query_rpc_Service from "../codegen/cosmos/base/node/v1beta1/query.rpc.Service";
import * as _cosmos_base_tendermint_v1beta1_query_rpc_Service from "../codegen/cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _cosmos_circuit_v1_query_rpc_Query from "../codegen/cosmos/circuit/v1/query.rpc.Query";
import * as _cosmos_consensus_v1_query_rpc_Query from "../codegen/cosmos/consensus/v1/query.rpc.Query";
import * as _cosmos_distribution_v1beta1_query_rpc_Query from "../codegen/cosmos/distribution/v1beta1/query.rpc.Query";
import * as _cosmos_evidence_v1beta1_query_rpc_Query from "../codegen/cosmos/evidence/v1beta1/query.rpc.Query";
import * as _cosmos_feegrant_v1beta1_query_rpc_Query from "../codegen/cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _cosmos_gov_v1_query_rpc_Query from "../codegen/cosmos/gov/v1/query.rpc.Query";
import * as _cosmos_gov_v1beta1_query_rpc_Query from "../codegen/cosmos/gov/v1beta1/query.rpc.Query";
import * as _cosmos_params_v1beta1_query_rpc_Query from "../codegen/cosmos/params/v1beta1/query.rpc.Query";
import * as _cosmos_slashing_v1beta1_query_rpc_Query from "../codegen/cosmos/slashing/v1beta1/query.rpc.Query";
import * as _cosmos_staking_v1beta1_query_rpc_Query from "../codegen/cosmos/staking/v1beta1/query.rpc.Query";
import * as _cosmos_tx_v1beta1_service_rpc_Service from "../codegen/cosmos/tx/v1beta1/service.rpc.Service";
import * as _cosmos_upgrade_v1beta1_query_rpc_Query from "../codegen/cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _cosmwasm_wasm_v1_query_rpc_Query from "../codegen/cosmwasm/wasm/v1/query.rpc.Query";
import * as _ibc_applications_fee_v1_query_rpc_Query from "../codegen/ibc/applications/fee/v1/query.rpc.Query";
import * as _ibc_applications_interchain_accounts_controller_v1_query_rpc_Query from "../codegen/ibc/applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _ibc_applications_interchain_accounts_host_v1_query_rpc_Query from "../codegen/ibc/applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _ibc_applications_transfer_v1_query_rpc_Query from "../codegen/ibc/applications/transfer/v1/query.rpc.Query";
import * as _ibc_core_channel_v1_query_rpc_Query from "../codegen/ibc/core/channel/v1/query.rpc.Query";
import * as _ibc_core_client_v1_query_rpc_Query from "../codegen/ibc/core/client/v1/query.rpc.Query";
import * as _ibc_core_connection_v1_query_rpc_Query from "../codegen/ibc/core/connection/v1/query.rpc.Query";
import * as _ixo_bonds_v1beta1_query_rpc_Query from "../codegen/ixo/bonds/v1beta1/query.rpc.Query";
import * as _ixo_claims_v1beta1_query_rpc_Query from "../codegen/ixo/claims/v1beta1/query.rpc.Query";
import * as _ixo_entity_v1beta1_query_rpc_Query from "../codegen/ixo/entity/v1beta1/query.rpc.Query";
import * as _ixo_epochs_v1beta1_query_rpc_Query from "../codegen/ixo/epochs/v1beta1/query.rpc.Query";
import * as _ixo_iid_v1beta1_query_rpc_Query from "../codegen/ixo/iid/v1beta1/query.rpc.Query";
import * as _ixo_liquidstake_v1beta1_query_rpc_Query from "../codegen/ixo/liquidstake/v1beta1/query.rpc.Query";
import * as _ixo_mint_v1beta1_query_rpc_Query from "../codegen/ixo/mint/v1beta1/query.rpc.Query";
import * as _ixo_names_v1beta1_query_rpc_Query from "../codegen/ixo/names/v1beta1/query.rpc.Query";
import * as _ixo_smartaccount_v1beta1_query_rpc_Query from "../codegen/ixo/smartaccount/v1beta1/query.rpc.Query";
import * as _ixo_token_v1beta1_query_rpc_Query from "../codegen/ixo/token/v1beta1/query.rpc.Query";
// type-only: erased at compile time, so @cosmjs/stargate (and the ~900 KB of
// cosmjs-types its barrel drags in) stays OUT of query-only bundles
import type { ProtobufRpcClient } from "@cosmjs/stargate";

/**
 * Creates a ProtobufRpcClient for the given RPC endpoint.
 *
 * Implemented directly on @cosmjs/tendermint-rpc, mirroring the behavior of
 * @cosmjs/stargate's QueryClient.queryAbci + createProtobufRpcClient (same
 * abci_query call, same error messages) without importing its CJS barrel,
 * which would pull all of cosmjs-types into the bundle.
 *
 * Use this to compose a minimal query client from the granular subpaths when
 * you only need a few modules (much smaller bundles than createQueryClient):
 *
 * ```ts
 * import { createRpc } from "@ixo/impactxclient-sdk/queries";
 * import { QueryClientImpl } from "@ixo/impactxclient-sdk/codegen/ixo/iid/v1beta1/query.rpc.Query";
 *
 * const rpc = await createRpc(RPC_URL);
 * const iid = new QueryClientImpl(rpc);
 * const doc = await iid.iidDocument({ id });
 * ```
 */
export const createRpc = async (
  rpcEndpoint: string
): Promise<ProtobufRpcClient> => {
  // connectComet auto-detects the RPC backend version (Tendermint 0.37 /
  // CometBFT 0.38 / 1.x); Tendermint34Client was removed in cosmjs 0.38
  const tmClient = await connectComet(rpcEndpoint);
  return {
    request: async (
      service: string,
      method: string,
      data: Uint8Array
    ): Promise<Uint8Array> => {
      const response = await tmClient.abciQuery({
        path: `/${service}/${method}`,
        data,
        prove: false,
      });
      if (response.code) {
        throw new Error(
          `Query failed with (${response.code}): ${response.log}`
        );
      }
      if (!response.height) {
        throw new Error("No query height returned");
      }
      return response.value;
    },
  };
};

/**
 * Creates a new QueryClient with all the modules and custom queries
 */
export const createQueryClient = async (rpcEndpoint: string) => {
  const rpc = await createRpc(rpcEndpoint);

  // Manually create the QueryClient with all the modules and custom queries
  return {
    // Ixo custom modules
    // ================================================
    ixo: {
      bonds: {
        v1beta1: new _ixo_bonds_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      claims: {
        v1beta1: new _ixo_claims_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      entity: {
        v1beta1: new _ixo_entity_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      epochs: {
        v1beta1: new _ixo_epochs_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      iid: {
        v1beta1: new _ixo_iid_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      liquidstake: {
        v1beta1: new _ixo_liquidstake_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      mint: {
        v1beta1: new _ixo_mint_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      names: {
        v1beta1: new _ixo_names_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      smartaccount: {
        v1beta1: new _ixo_smartaccount_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      token: {
        v1beta1: new _ixo_token_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
    },
    // IBC modules
    // ================================================
    ibc: {
      applications: {
        fee: {
          v1: new _ibc_applications_fee_v1_query_rpc_Query.QueryClientImpl(rpc),
        },
        interchain_accounts: {
          controller: {
            v1: new _ibc_applications_interchain_accounts_controller_v1_query_rpc_Query.QueryClientImpl(
              rpc
            ),
          },
          host: {
            v1: new _ibc_applications_interchain_accounts_host_v1_query_rpc_Query.QueryClientImpl(
              rpc
            ),
          },
        },
        transfer: {
          v1: new _ibc_applications_transfer_v1_query_rpc_Query.QueryClientImpl(
            rpc
          ),
        },
      },
      core: {
        channel: {
          v1: new _ibc_core_channel_v1_query_rpc_Query.QueryClientImpl(rpc),
        },
        client: {
          v1: new _ibc_core_client_v1_query_rpc_Query.QueryClientImpl(rpc),
        },
        connection: {
          v1: new _ibc_core_connection_v1_query_rpc_Query.QueryClientImpl(rpc),
        },
      },
    },
    // Cosmwasm modules
    // ================================================
    cosmwasm: {
      wasm: {
        v1: new _cosmwasm_wasm_v1_query_rpc_Query.QueryClientImpl(rpc),
      },
    },
    // Cosmos modules
    // ================================================
    cosmos: {
      app: {
        v1alpha1: new _cosmos_app_v1alpha1_query_rpc_Query.QueryClientImpl(rpc),
      },
      auth: {
        v1beta1: new _cosmos_auth_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      authz: {
        v1beta1: new _cosmos_authz_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      bank: {
        v1beta1: new _cosmos_bank_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      base: {
        tendermint: {
          v1beta1:
            new _cosmos_base_tendermint_v1beta1_query_rpc_Service.ServiceClientImpl(
              rpc
            ),
        },
        node: {
          v1beta1:
            new _cosmos_base_node_v1beta1_query_rpc_Service.ServiceClientImpl(
              rpc
            ),
        },
      },
      circuit: {
        v1: new _cosmos_circuit_v1_query_rpc_Query.QueryClientImpl(rpc),
      },
      consensus: {
        v1: new _cosmos_consensus_v1_query_rpc_Query.QueryClientImpl(rpc),
      },
      distribution: {
        v1beta1:
          new _cosmos_distribution_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      evidence: {
        v1beta1: new _cosmos_evidence_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      feegrant: {
        v1beta1: new _cosmos_feegrant_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      gov: {
        v1: new _cosmos_gov_v1_query_rpc_Query.QueryClientImpl(rpc),
        v1beta1: new _cosmos_gov_v1beta1_query_rpc_Query.QueryClientImpl(rpc),
      },
      params: {
        v1beta1: new _cosmos_params_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      slashing: {
        v1beta1: new _cosmos_slashing_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      staking: {
        v1beta1: new _cosmos_staking_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
      tx: {
        v1beta1: new _cosmos_tx_v1beta1_service_rpc_Service.ServiceClientImpl(
          rpc
        ),
      },
      upgrade: {
        v1beta1: new _cosmos_upgrade_v1beta1_query_rpc_Query.QueryClientImpl(
          rpc
        ),
      },
    },
  };
};

export type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
