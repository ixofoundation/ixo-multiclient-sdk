/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export declare type Admin = {
    address: {
        addr: string;
    };
} | {
    core_module: {};
};
export declare type Duration = {
    height: number;
} | {
    time: number;
};
export interface InstantiateMsg {
    denom: string;
    manager?: string | null;
    owner?: Admin | null;
    unstaking_duration?: Duration | null;
}
export declare type ExecuteMsg = {
    stake: {};
} | {
    unstake: {
        amount: Uint128;
    };
} | {
    update_config: {
        duration?: Duration | null;
        manager?: string | null;
        owner?: string | null;
    };
} | {
    claim: {};
};
export declare type Uint128 = string;
export declare type QueryMsg = {
    get_config: {};
} | {
    claims: {
        address: string;
    };
} | {
    list_stakers: {
        limit?: number | null;
        start_after?: string | null;
    };
} | {
    voting_power_at_height: {
        address: string;
        height?: number | null;
    };
} | {
    total_power_at_height: {
        height?: number | null;
    };
} | {
    dao: {};
} | {
    info: {};
};
export interface MigrateMsg {
}
export declare type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {};
};
export declare type Timestamp = Uint64;
export declare type Uint64 = string;
export interface ClaimsResponse {
    claims: Claim[];
}
export interface Claim {
    amount: Uint128;
    release_at: Expiration;
}
export declare type Addr = string;
export interface Config {
    denom: string;
    manager?: Addr | null;
    owner?: Addr | null;
    unstaking_duration?: Duration | null;
}
export interface InfoResponse {
    info: ContractVersion;
}
export interface ContractVersion {
    contract: string;
    version: string;
}
export interface ListStakersResponse {
    stakers: StakerBalanceResponse[];
}
export interface StakerBalanceResponse {
    address: string;
    balance: Uint128;
}
export interface TotalPowerAtHeightResponse {
    height: number;
    power: Uint128;
}
export interface VotingPowerAtHeightResponse {
    height: number;
    power: Uint128;
}