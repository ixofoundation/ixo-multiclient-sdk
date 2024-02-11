import * as _2 from "./cellnode";
export declare namespace customQueries {
    const currency: {
        findTokenFromDenom: (denom: string) => import("./currency.types").TokenAsset;
        findIbcTokenFromHash: (queryClient: {
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
                iid: {
                    v1beta1: import("../codegen/ixo/iid/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                token: {
                    v1beta1: import("../codegen/ixo/token/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            ica: {
                intertx: import("../codegen/ica/intertx/query.rpc.Query").QueryClientImpl;
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
                group: {
                    v1: import("../codegen/cosmos/group/v1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../codegen/cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../codegen/cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
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
        }, ibcHash: string) => Promise<import("./currency.types").IbcTokenAsset>;
        findIbcTokensFromHashes: (queryClient: {
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
                iid: {
                    v1beta1: import("../codegen/ixo/iid/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                token: {
                    v1beta1: import("../codegen/ixo/token/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            ica: {
                intertx: import("../codegen/ica/intertx/query.rpc.Query").QueryClientImpl;
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
                group: {
                    v1: import("../codegen/cosmos/group/v1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../codegen/cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../codegen/cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
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
        }, ibcHashes: string[]) => Promise<import("./currency.types").IbcTokenAsset[]>;
        findTokenInfoFromDenom: (denom: string, cacheResult?: boolean, baseUrl?: string) => Promise<import("./currency.types").TokenAssetInfo>;
        findTokensInfoFromDenoms: (denoms: string[]) => Promise<import("./currency.types").TokenAssetInfo[]>;
        findTokenHistoryFromDenom: (denom: string, startDate: string, endDate: string, samples?: number, cacheResult?: boolean, baseUrl?: string) => Promise<import("./currency.types").TokenAssetHistory>;
        findTokensHistoryFromDenoms: (denoms: string[], startDate: string, endDate: string, samples?: number, cacheResult?: boolean) => Promise<import("./currency.types").TokenAssetHistory[]>;
    };
    const cellnode: {
        cellNodeChainMapping: {
            mainnet: string;
            testnet: string;
            devnet: string;
        };
        getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_2.CellnodePublicResource>;
        getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_2.CellnodeWeb3Resource>;
    };
    const contract: {
        getContractCodes: (chainNetwork: import("./chain.types").ChainNetwork, category?: "ixo" | "daodao") => {
            name: string;
            code?: number;
        }[];
        getContractCode: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => number;
        getContractAddress: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => string;
        getContractData: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => {
            code: number;
            address: string;
            name: string;
            path: string[];
            category: string;
        };
    };
}
