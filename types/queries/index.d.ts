/**
 * Creates a new QueryClient with all the modules and custom queries
 */
export declare const createQueryClient: (rpcEndpoint: string) => Promise<{
    ixo: {
        bonds: {
            v1beta1: import("../codegen/ixo/bonds/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        claims: {
            v1beta1: import("../codegen/ixo/claims/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        entity: {
            v1beta1: import("../codegen/ixo/entity/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        epochs: {
            v1beta1: import("../codegen/ixo/epochs/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        iid: {
            v1beta1: import("../codegen/ixo/iid/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../codegen/ixo/mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        smartaccount: {
            v1beta1: import("../codegen/ixo/smartaccount/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        token: {
            v1beta1: import("../codegen/ixo/token/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
    ibc: {
        applications: {
            fee: {
                v1: import("../codegen/ibc/applications/fee/v1/query.rpc.Query").QueryClientImpl;
            };
            interchain_accounts: {
                controller: {
                    v1: import("../codegen/ibc/applications/interchain_accounts/controller/v1/query.rpc.Query").QueryClientImpl;
                };
                host: {
                    v1: import("../codegen/ibc/applications/interchain_accounts/host/v1/query.rpc.Query").QueryClientImpl;
                };
            };
            transfer: {
                v1: import("../codegen/ibc/applications/transfer/v1/query.rpc.Query").QueryClientImpl;
            };
        };
        core: {
            channel: {
                v1: import("../codegen/ibc/core/channel/v1/query.rpc.Query").QueryClientImpl;
            };
            client: {
                v1: import("../codegen/ibc/core/client/v1/query.rpc.Query").QueryClientImpl;
            };
            connection: {
                v1: import("../codegen/ibc/core/connection/v1/query.rpc.Query").QueryClientImpl;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: import("../codegen/cosmwasm/wasm/v1/query.rpc.Query").QueryClientImpl;
        };
    };
    cosmos: {
        app: {
            v1alpha1: import("../codegen/cosmos/app/v1alpha1/query.rpc.Query").QueryClientImpl;
        };
        auth: {
            v1beta1: import("../codegen/cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        authz: {
            v1beta1: import("../codegen/cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        bank: {
            v1beta1: import("../codegen/cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        base: {
            tendermint: {
                v1beta1: import("../codegen/cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
            node: {
                v1beta1: import("../codegen/cosmos/base/node/v1beta1/query.rpc.Service").ServiceClientImpl;
            };
        };
        circuit: {
            v1: import("../codegen/cosmos/circuit/v1/query.rpc.Query").QueryClientImpl;
        };
        consensus: {
            v1: import("../codegen/cosmos/consensus/v1/query.rpc.Query").QueryClientImpl;
        };
        distribution: {
            v1beta1: import("../codegen/cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        evidence: {
            v1beta1: import("../codegen/cosmos/evidence/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        feegrant: {
            v1beta1: import("../codegen/cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        gov: {
            v1: import("../codegen/cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
            v1beta1: import("../codegen/cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        mint: {
            v1beta1: import("../codegen/cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        params: {
            v1beta1: import("../codegen/cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        slashing: {
            v1beta1: import("../codegen/cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        staking: {
            v1beta1: import("../codegen/cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
        };
        tx: {
            v1beta1: import("../codegen/cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
        };
        upgrade: {
            v1beta1: import("../codegen/cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
        };
    };
}>;
export declare type QueryClient = Awaited<ReturnType<typeof createQueryClient>>;
