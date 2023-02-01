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
export declare const testnetRegistry: {
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
export declare const devnetRegistry: {
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
export declare const keplrChainInfos: {
    agoric: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
            coinGeckoId?: undefined;
        })[];
        feeCurrencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
            coinGeckoId?: undefined;
        })[];
        features: string[];
        chainSymbolImageUrl: string;
        walletUrl: string;
        walletUrlForStaking: string;
    };
    akash: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    axelar: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
        chainSymbolImageUrl: string;
        walletUrl: string;
        walletUrlForStaking: string;
    };
    bitcanna: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
    };
    bitsong: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        features: string[];
    };
    bostrom: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl?: undefined;
        })[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    cheqd: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    chihuahua: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    comdex: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        features: string[];
    };
    cosmoshub: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        coinType: number;
        features: string[];
        chainSymbolImageUrl: string;
        txExplorer: {
            name: string;
            txUrl: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
    };
    cryptoorgchain: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    desmos: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
    };
    dig: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    emoney: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId?: undefined;
            coinImageUrl?: undefined;
        })[];
        feeCurrencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
            coinGeckoId?: undefined;
        })[];
        chainSymbolImageUrl: string;
        features: string[];
    };
    evmos: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    gravitybridge: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep?: undefined;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        })[];
        features: string[];
        chainSymbolImageUrl: string;
        walletUrl: string;
        walletUrlForStaking: string;
    };
    impacthub: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        chainSymbolImageUrl: string;
        features: string[];
    };
    injective: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    irisnet: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        alternativeBIP44s: {
            coinType: number;
        }[];
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    juno: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
            coinGeckoId?: undefined;
        })[];
        features: string[];
        chainSymbolImageUrl: string;
        txExplorer: {
            name: string;
            txUrl: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
    };
    kava: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        alternativeBIP44s: {
            coinType: number;
        }[];
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
            coinGeckoId?: undefined;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId?: undefined;
            coinImageUrl?: undefined;
        })[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
    };
    kichain: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        features: string[];
    };
    likecoin: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
    };
    lumnetwork: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        features: string[];
    };
    mars: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        alternativeBIP44s: {
            coinType: number;
        }[];
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: any[];
    };
    microtick: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        features: string[];
    };
    osmosis: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        coinType: number;
        features: string[];
        chainSymbolImageUrl: string;
        txExplorer: {
            name: string;
            txUrl: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
    };
    panacea: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    Persistence: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        alternativeBIP44s: {
            coinType: number;
        }[];
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId?: undefined;
            coinImageUrl?: undefined;
        })[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    quicksilver: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: any[];
    };
    regen: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    secretnetwork: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        alternativeBIP44s: {
            coinType: number;
        }[];
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        coinType: number;
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    sentinel: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
    };
    shentu: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    sifchain: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId?: undefined;
            coinImageUrl?: undefined;
        })[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: any[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    sommelier: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
        chainSymbolImageUrl: string;
        walletUrl: string;
        walletUrlForStaking: string;
    };
    stargaze: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
        chainSymbolImageUrl: string;
        txExplorer: {
            name: string;
            txUrl: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
    };
    starname: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        chainSymbolImageUrl: string;
        features: string[];
        walletUrl: string;
        walletUrlForStaking: string;
    };
    stride: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        walletUrl: string;
        walletUrlForStaking: string;
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: ({
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        } | {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
            coinGeckoId?: undefined;
        })[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    terra: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    terra2: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: any[];
        walletUrlForStaking: string;
    };
    tgrade: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
    };
    umee: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            gasPriceStep: {
                low: number;
                average: number;
                high: number;
            };
        }[];
        features: string[];
        chainSymbolImageUrl: string;
        walletUrl: string;
        walletUrlForStaking: string;
    };
    vidulum: {
        rpc: string;
        rest: string;
        chainId: string;
        chainName: string;
        stakeCurrency: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        };
        bip44: {
            coinType: number;
        };
        bech32Config: {
            bech32PrefixAccAddr: string;
            bech32PrefixAccPub: string;
            bech32PrefixValAddr: string;
            bech32PrefixValPub: string;
            bech32PrefixConsAddr: string;
            bech32PrefixConsPub: string;
        };
        currencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
            coinImageUrl: string;
        }[];
        feeCurrencies: {
            coinDenom: string;
            coinMinimalDenom: string;
            coinDecimals: number;
            coinGeckoId: string;
        }[];
        features: string[];
    };
};
