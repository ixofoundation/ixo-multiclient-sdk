/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.26.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Duration, Uint128, ClaimsResponse, Addr, Config, InfoResponse, ListStakersResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoVotingNativeStaked.types";
export interface DaoVotingNativeStakedReadOnlyInterface {
    contractAddress: string;
    getConfig: () => Promise<Config>;
    claims: ({ address }: {
        address: string;
    }) => Promise<ClaimsResponse>;
    listStakers: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ListStakersResponse>;
    votingPowerAtHeight: ({ address, height }: {
        address: string;
        height?: number;
    }) => Promise<VotingPowerAtHeightResponse>;
    totalPowerAtHeight: ({ height }: {
        height?: number;
    }) => Promise<TotalPowerAtHeightResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
}
export declare class DaoVotingNativeStakedQueryClient implements DaoVotingNativeStakedReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    getConfig: () => Promise<Config>;
    claims: ({ address }: {
        address: string;
    }) => Promise<ClaimsResponse>;
    listStakers: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ListStakersResponse>;
    votingPowerAtHeight: ({ address, height }: {
        address: string;
        height?: number;
    }) => Promise<VotingPowerAtHeightResponse>;
    totalPowerAtHeight: ({ height }: {
        height?: number;
    }) => Promise<TotalPowerAtHeightResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
}
export interface DaoVotingNativeStakedInterface extends DaoVotingNativeStakedReadOnlyInterface {
    contractAddress: string;
    sender: string;
    stake: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    unstake: ({ amount }: {
        amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ duration, manager, owner }: {
        duration?: Duration;
        manager?: string;
        owner?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claim: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class DaoVotingNativeStakedClient extends DaoVotingNativeStakedQueryClient implements DaoVotingNativeStakedInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    stake: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    unstake: ({ amount }: {
        amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ duration, manager, owner }: {
        duration?: Duration;
        manager?: string;
        owner?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    claim: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
