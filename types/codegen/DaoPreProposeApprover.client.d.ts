/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { ApproverProposeMessage, UncheckedDenom, Status, UncheckedDepositInfo, Empty, QueryExt, Addr, Config, DepositInfoResponse, HooksResponse, Binary } from "./DaoPreProposeApprover.types";
export interface DaoPreProposeApproverReadOnlyInterface {
    contractAddress: string;
    proposalModule: () => Promise<Addr>;
    dao: () => Promise<Addr>;
    config: () => Promise<Config>;
    depositInfo: ({ proposalId }: {
        proposalId: number;
    }) => Promise<DepositInfoResponse>;
    proposalSubmittedHooks: () => Promise<HooksResponse>;
    queryExtension: ({ msg }: {
        msg: QueryExt;
    }) => Promise<Binary>;
}
export declare class DaoPreProposeApproverQueryClient implements DaoPreProposeApproverReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    proposalModule: () => Promise<Addr>;
    dao: () => Promise<Addr>;
    config: () => Promise<Config>;
    depositInfo: ({ proposalId }: {
        proposalId: number;
    }) => Promise<DepositInfoResponse>;
    proposalSubmittedHooks: () => Promise<HooksResponse>;
    queryExtension: ({ msg }: {
        msg: QueryExt;
    }) => Promise<Binary>;
}
export interface DaoPreProposeApproverInterface extends DaoPreProposeApproverReadOnlyInterface {
    contractAddress: string;
    sender: string;
    propose: ({ msg }: {
        msg: ApproverProposeMessage;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ depositInfo, openProposalSubmission }: {
        depositInfo?: UncheckedDepositInfo;
        openProposalSubmission: boolean;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ denom }: {
        denom?: UncheckedDenom;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    extension: ({ msg }: {
        msg: Empty;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalSubmittedHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalSubmittedHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    proposalCompletedHook: ({ newStatus, proposalId }: {
        newStatus: Status;
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class DaoPreProposeApproverClient extends DaoPreProposeApproverQueryClient implements DaoPreProposeApproverInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    propose: ({ msg }: {
        msg: ApproverProposeMessage;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ depositInfo, openProposalSubmission }: {
        depositInfo?: UncheckedDepositInfo;
        openProposalSubmission: boolean;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdraw: ({ denom }: {
        denom?: UncheckedDenom;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    extension: ({ msg }: {
        msg: Empty;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    addProposalSubmittedHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeProposalSubmittedHook: ({ address }: {
        address: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    proposalCompletedHook: ({ newStatus, proposalId }: {
        newStatus: Status;
        proposalId: number;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}