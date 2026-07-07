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
export declare const createRpc: (rpcEndpoint: string) => Promise<ProtobufRpcClient>;
/**
 * Creates a new QueryClient with all the modules and custom queries
 */
export declare const createQueryClient: (rpcEndpoint: string) => Promise<{
    ixo: {
        bonds: {
            v1beta1: _ixo_bonds_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        claims: {
            v1beta1: _ixo_claims_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        entity: {
            v1beta1: _ixo_entity_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        epochs: {
            v1beta1: _ixo_epochs_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        iid: {
            v1beta1: _ixo_iid_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        liquidstake: {
            v1beta1: _ixo_liquidstake_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        mint: {
            v1beta1: _ixo_mint_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        names: {
            v1beta1: _ixo_names_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        smartaccount: {
            v1beta1: _ixo_smartaccount_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        token: {
            v1beta1: _ixo_token_v1beta1_query_rpc_Query.QueryClientImpl;
        };
    };
    ibc: {
        applications: {
            fee: {
                v1: _ibc_applications_fee_v1_query_rpc_Query.QueryClientImpl;
            };
            interchain_accounts: {
                controller: {
                    v1: _ibc_applications_interchain_accounts_controller_v1_query_rpc_Query.QueryClientImpl;
                };
                host: {
                    v1: _ibc_applications_interchain_accounts_host_v1_query_rpc_Query.QueryClientImpl;
                };
            };
            transfer: {
                v1: _ibc_applications_transfer_v1_query_rpc_Query.QueryClientImpl;
            };
        };
        core: {
            channel: {
                v1: _ibc_core_channel_v1_query_rpc_Query.QueryClientImpl;
            };
            client: {
                v1: _ibc_core_client_v1_query_rpc_Query.QueryClientImpl;
            };
            connection: {
                v1: _ibc_core_connection_v1_query_rpc_Query.QueryClientImpl;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: _cosmwasm_wasm_v1_query_rpc_Query.QueryClientImpl;
        };
    };
    cosmos: {
        app: {
            v1alpha1: _cosmos_app_v1alpha1_query_rpc_Query.QueryClientImpl;
        };
        auth: {
            v1beta1: _cosmos_auth_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        authz: {
            v1beta1: _cosmos_authz_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        bank: {
            v1beta1: _cosmos_bank_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        base: {
            tendermint: {
                v1beta1: _cosmos_base_tendermint_v1beta1_query_rpc_Service.ServiceClientImpl;
            };
            node: {
                v1beta1: _cosmos_base_node_v1beta1_query_rpc_Service.ServiceClientImpl;
            };
        };
        circuit: {
            v1: _cosmos_circuit_v1_query_rpc_Query.QueryClientImpl;
        };
        consensus: {
            v1: _cosmos_consensus_v1_query_rpc_Query.QueryClientImpl;
        };
        distribution: {
            v1beta1: _cosmos_distribution_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        evidence: {
            v1beta1: _cosmos_evidence_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        feegrant: {
            v1beta1: _cosmos_feegrant_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        gov: {
            v1: _cosmos_gov_v1_query_rpc_Query.QueryClientImpl;
            v1beta1: _cosmos_gov_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        params: {
            v1beta1: _cosmos_params_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        slashing: {
            v1beta1: _cosmos_slashing_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        staking: {
            v1beta1: _cosmos_staking_v1beta1_query_rpc_Query.QueryClientImpl;
        };
        tx: {
            v1beta1: _cosmos_tx_v1beta1_service_rpc_Service.ServiceClientImpl;
        };
        upgrade: {
            v1beta1: _cosmos_upgrade_v1beta1_query_rpc_Query.QueryClientImpl;
        };
    };
}>;
export type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
