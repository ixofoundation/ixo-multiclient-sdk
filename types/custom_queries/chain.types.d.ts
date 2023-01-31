export declare type ChainNetwork = "mainnet" | "testnet" | "devnet";
export declare type Endpoint = {
    address: string;
    provider: string;
};
export declare type ChainInfo = {
    $schema?: string;
    chain_name: string;
    status: string;
    website: string;
    network_type: string;
    pretty_name: string;
    chain_id: string;
    bech32_prefix: string;
    daemon_name?: string;
    node_home?: string;
    key_algos: string[];
    slip44: number;
    fees: {
        fee_tokens?: {
            denom?: string;
            fixed_min_gas_price?: number;
            low_gas_price?: number;
            average_gas_price?: number;
            high_gas_price?: number;
        }[];
    };
    staking?: {
        staking_tokens?: {
            denom?: string;
        }[];
        lock_duration?: {
            time?: string;
        };
    };
    codebase: {
        git_repo?: string;
        recommended_version?: string;
        compatible_versions?: string[];
        cosmos_sdk_version?: string;
        tendermint_version?: string;
        cosmwasm_version?: string;
        cosmwasm_enabled?: boolean;
        ibc_go_version?: string;
        ics_enabled?: string[];
        genesis?: {
            name?: string;
            genesis_url?: string;
        };
        versions?: {
            name?: string;
            tag?: string;
            height?: number;
            next_version_name?: string;
        }[];
    };
    logo_URIs?: {
        png?: string;
        svg?: string;
    };
    peers: {
        seeds: {
            id: string;
            address: string;
            provider?: string;
        }[];
        persistent_peers: {
            id: string;
            address: string;
            provider?: string;
        }[];
    };
    apis: {
        rpc: Endpoint[];
        rest: Endpoint[];
        grpc?: Endpoint[];
    };
    explorers?: {
        kind: string;
        url: string;
        tx_page?: string;
        account_page?: string;
    }[];
    keywords?: string[];
};
