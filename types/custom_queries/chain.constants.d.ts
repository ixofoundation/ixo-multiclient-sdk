export declare const preferredEndpoints: {
    agoric: {
        rpc: string[];
        rest: string[];
    };
    akash: {
        rpc: string[];
        rest: string[];
    };
    assetmantle: {
        rpc: string[];
        rest: string[];
    };
    bandchain: {
        rpc: string[];
        rest: string[];
    };
    bitcanna: {
        rpc: string[];
        rest: string[];
    };
    bitsong: {
        rpc: string[];
        rest: string[];
    };
    bostrom: {
        rpc: string[];
        rest: string[];
    };
    carbon: {
        rpc: string[];
        rest: string[];
    };
    cerberus: {
        rpc: string[];
        rest: string[];
    };
    cheqd: {
        rpc: string[];
        rest: string[];
    };
    chihuahua: {
        rpc: string[];
        rest: string[];
    };
    comdex: {
        rpc: string[];
        rest: string[];
    };
    cosmoshub: {
        rpc: string[];
        rest: string[];
    };
    crescent: {
        rpc: string[];
        rest: string[];
    };
    cryptoorgchain: {
        rpc: string[];
        rest: string[];
    };
    cudos: {
        rpc: string[];
        rest: string[];
    };
    decentr: {
        rpc: string[];
        rest: string[];
    };
    desmos: {
        rpc: string[];
        rest: string[];
    };
    dig: {
        rpc: string[];
        rest: string[];
    };
    echelon: {
        rpc: string[];
        rest: string[];
    };
    emoney: {
        rpc: string[];
        rest: string[];
    };
    evmos: {
        rpc: string[];
        rest: string[];
    };
    fetchhub: {
        rpc: string[];
        rest: string[];
    };
    galaxy: {
        rpc: string[];
        rest: string[];
    };
    genesisl1: {
        rpc: string[];
        rest: string[];
    };
    gravitybridge: {
        rpc: string[];
        rest: string[];
    };
    impacthub: {
        rpc: string[];
        rest: string[];
    };
    injective: {
        rpc: string[];
        rest: string[];
    };
    irisnet: {
        rpc: string[];
        rest: string[];
    };
    jackal: {
        rpc: string[];
        rest: string[];
    };
    juno: {
        rpc: string[];
        rest: string[];
    };
    kava: {
        rpc: string[];
        rest: string[];
    };
    kichain: {
        rpc: string[];
        rest: string[];
    };
    konstellation: {
        rpc: string[];
        rest: string[];
    };
    kujira: {
        rpc: string[];
        rest: string[];
    };
    lambda: {
        rpc: string[];
        rest: string[];
    };
    likecoin: {
        rpc: string[];
        rest: string[];
    };
    lumenx: {
        rpc: string[];
        rest: string[];
    };
    lumnetwork: {
        rpc: string[];
        rest: string[];
    };
    meme: {
        rpc: string[];
        rest: string[];
    };
    microtick: {
        rpc: string[];
        rest: string[];
    };
    odin: {
        rpc: string[];
        rest: string[];
    };
    oraichain: {
        rpc: string[];
        rest: string[];
    };
    osmosis: {
        rpc: string[];
        rest: string[];
    };
    persistence: {
        rpc: string[];
        rest: string[];
    };
    provenance: {
        rpc: string[];
        rest: string[];
    };
    rebus: {
        rpc: string[];
        rest: string[];
    };
    regen: {
        rpc: string[];
        rest: string[];
    };
    rizon: {
        rpc: string[];
        rest: string[];
    };
    secretnetwork: {
        rpc: string[];
        rest: string[];
    };
    sentinel: {
        rpc: string[];
        rest: string[];
    };
    sifchain: {
        rpc: string[];
        rest: string[];
    };
    sommelier: {
        rpc: string[];
        rest: string[];
    };
    stargaze: {
        rpc: string[];
        rest: string[];
    };
    starname: {
        rpc: string[];
        rest: string[];
    };
    stride: {
        rpc: string[];
        rest: string[];
    };
    teritori: {
        rpc: string[];
        rest: string[];
    };
    terra: {
        rpc: string[];
        rest: string[];
    };
    terra2: {
        rpc: string[];
        rest: string[];
    };
    tgrade: {
        rpc: string[];
        rest: string[];
    };
    umee: {
        rpc: string[];
        rest: string[];
    };
    unification: {
        rpc: string[];
        rest: string[];
    };
    vidulum: {
        rpc: string[];
        rest: string[];
    };
};
export declare const localTestnetRegistry: {
    impacthub: {
        chain_name: string;
        status: string;
        network_type: string;
        website: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            genesis: {
                genesis_url: string;
            };
        };
        peers: {
            seeds: any[];
            persistent_peers: any[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: any[];
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        }[];
    };
};
export declare const localDevnetRegistry: {
    impacthub: {
        chain_name: string;
        status: string;
        network_type: string;
        website: string;
        pretty_name: string;
        chain_id: string;
        bech32_prefix: string;
        key_algos: string[];
        slip44: number;
        fees: {
            fee_tokens: {
                denom: string;
                fixed_min_gas_price: number;
            }[];
        };
        codebase: {
            git_repo: string;
            recommended_version: string;
            compatible_versions: string[];
            genesis: {
                genesis_url: string;
            };
        };
        peers: {
            seeds: any[];
            persistent_peers: any[];
        };
        apis: {
            rpc: {
                address: string;
                provider: string;
            }[];
            rest: {
                address: string;
                provider: string;
            }[];
            grpc: any[];
        };
        explorers: {
            kind: string;
            url: string;
            tx_page: string;
            account_page: string;
        }[];
    };
};
/**
 * Registry chain names defined in Cosmos chain registry:
 * https://github.com/cosmos/chain-registry/blob/master/${chainName}/chain.json
 * Keplr chain names defined in Keplr (chainapsis) chain registry:
 * KEPLR: https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/cosmos/${chainName}.json
 */
export declare const registryChainNamesToKeplrChainNames: {
    agoric: string;
    akash: string;
    axelar: string;
    bitcanna: string;
    bostrom: string;
    carbon: string;
    chihuahua: string;
    comdex: string;
    cosmoshub: string;
    crescent: string;
    cryptoorgchain: string;
    desmos: string;
    emoney: string;
    evmos: string;
    firmachain: string;
    gravitybridge: string;
    impacthub: string;
    injective: string;
    irisnet: string;
    jackal: string;
    juno: string;
    kava: string;
    likecoin: string;
    lumnetwork: string;
    mars: string;
    medasdigital: string;
    meme: string;
    nyx: string;
    omniflixhub: string;
    osmosis: string;
    persistence: string;
    provenance: string;
    quicksilver: string;
    regen: string;
    secretnetwork: string;
    sentinel: string;
    shentu: string;
    sifchain: string;
    sommelier: string;
    stafihub: string;
    stargaze: string;
    starname: string;
    stride: string;
    terra: string;
    terra2: string;
    tgrade: string;
    umee: string;
    unification: string;
};
export declare const registryChainNames: string[];
export declare const keplrChainNames: string[];
export declare const keplrChainNamesToRegistryChainNames: {};
