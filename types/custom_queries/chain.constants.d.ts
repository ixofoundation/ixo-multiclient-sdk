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
export declare const mainnetChainExplorers: {
    acrechain: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    agoric: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    aioz: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    akash: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    arkh: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    assetmantle: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    axelar: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    bandchain: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    beezee: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    bitcanna: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    bitsong: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    bluzelle: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    bostrom: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    canto: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    carbon: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cerberus: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    chain4energy: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cheqd: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    chihuahua: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    chimba: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    chronicnetwork: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    comdex: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    commercionetwork: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cosmoshub: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    crescent: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    cronos: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cryptoorgchain: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    cudos: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    decentr: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    desmos: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    dig: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    dyson: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    echelon: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    emoney: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    evmos: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    fetchhub: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    firmachain: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    galaxy: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    genesisl1: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    gravitybridge: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    idep: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    impacthub: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    imversed: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    injective: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    irisnet: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    jackal: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    juno: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    kava: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    kichain: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    konstellation: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    kujira: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    lambda: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    likecoin: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page?: undefined;
        account_page?: undefined;
    })[];
    loyal: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    lumenx: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    lumnetwork: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    mars: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    medasdigital: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    meme: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    microtick: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    migaloo: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    mises: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    nyx: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page?: undefined;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    octa: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    odin: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    okexchain: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    omniflixhub: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    onomy: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    oraichain: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    osmosis: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    panacea: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    passage: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    persistence: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    planq: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    point: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    provenance: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    quicksilver: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    rebus: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    regen: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    rizon: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    secretnetwork: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    sentinel: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    shareledger: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    shentu: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    sifchain: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    sommelier: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    stafihub: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    stargaze: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    starname: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    stride: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    teritori: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    terra: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    terra2: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    tgrade: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    thorchain: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    umee: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    unification: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    vidulum: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
};
export declare const testnetChainExplorers: {
    axelar: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    cheqd: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cosmoshub: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    cudos: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    evmos: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    impacthub: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    imversed: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    jackal: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    juno: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    })[];
    kichain: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    kujira: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    mars: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    persistence: ({
        kind: string;
        url: string;
        tx_page: string;
        account_page?: undefined;
    } | {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    })[];
    quicksilver: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
    secretnetwork: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    stargaze: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
    stride: {
        kind: string;
        url: string;
        tx_page: string;
    }[];
};
export declare const devnetChainExplorers: {
    impacthub: {
        kind: string;
        url: string;
        tx_page: string;
        account_page: string;
    }[];
};
