/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.26.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, PreProposeInfo, VotingStrategy, Uint64, MultipleChoiceOptions, Coin, MultipleChoiceVote, Addr, Config, VoteResponse, InfoResponse, ProposalListResponse, ProposalResponse, VoteListResponse, ProposalCreationPolicy, HooksResponse } from "./DaoProposalMultiple.types";
export interface DaoProposalMultipleReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<Config>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ProposalListResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ProposalListResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<VoteListResponse>;
    proposalCount: () => Promise<Uint64>;
    proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
    proposalHooks: () => Promise<HooksResponse>;
    voteHooks: () => Promise<HooksResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
    nextProposalId: () => Promise<Uint64>;
}
export declare class DaoProposalMultipleQueryClient implements DaoProposalMultipleReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<Config>;
    proposal: ({ proposalId }: {
        proposalId: number;
    }) => Promise<ProposalResponse>;
    listProposals: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: number;
    }) => Promise<ProposalListResponse>;
    reverseProposals: ({ limit, startBefore }: {
        limit?: number;
        startBefore?: number;
    }) => Promise<ProposalListResponse>;
    getVote: ({ proposalId, voter }: {
        proposalId: number;
        voter: string;
    }) => Promise<VoteResponse>;
    listVotes: ({ limit, proposalId, startAfter }: {
        limit?: number;
        proposalId: number;
        startAfter?: string;
    }) => Promise<VoteListResponse>;
    proposalCount: () => Promise<Uint64>;
    proposalCreationPolicy: () => Promise<ProposalCreationPolicy>;
    proposalHooks: () => Promise<HooksResponse>;
    voteHooks: () => Promise<HooksResponse>;
    dao: () => Promise<Addr>;
    info: () => Promise<InfoResponse>;
    nextProposalId: () => Promise<Uint64>;
}
export interface DaoProposalMultipleInterface extends DaoProposalMultipleReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ choices, description, proposer, title }: {
        choices: MultipleChoiceOptions;
        description: string;
        proposer?: string;
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, rationale, vote }: {
        proposalId: number;
        rationale?: string;
        vote: MultipleChoiceVote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, votingStrategy }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        votingStrategy: VotingStrategy;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateRationale: ({ proposalId, rationale }: {
        proposalId: number;
        rationale?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updatePreProposeInfo: ({ info }: {
        info: PreProposeInfo;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class DaoProposalMultipleClient extends DaoProposalMultipleQueryClient implements DaoProposalMultipleInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ choices, description, proposer, title }: {
        choices: MultipleChoiceOptions;
        description: string;
        proposer?: string;
        title: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    vote: ({ proposalId, rationale, vote }: {
        proposalId: number;
        rationale?: string;
        vote: MultipleChoiceVote;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    execute: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    close: ({ proposalId }: {
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ allowRevoting, closeProposalOnExecutionFailure, dao, maxVotingPeriod, minVotingPeriod, onlyMembersExecute, votingStrategy }: {
        allowRevoting: boolean;
        closeProposalOnExecutionFailure: boolean;
        dao: string;
        maxVotingPeriod: Duration;
        minVotingPeriod?: Duration;
        onlyMembersExecute: boolean;
        votingStrategy: VotingStrategy;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateRationale: ({ proposalId, rationale }: {
        proposalId: number;
        rationale?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updatePreProposeInfo: ({ info }: {
        info: PreProposeInfo;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeVoteHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
