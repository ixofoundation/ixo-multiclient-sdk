/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Binary, ModuleInstantiateInfo, CosmosMsgForEmpty, Uint128, Duration, Coin, Config, SubDao, Addr, ArrayOfProposalModule, AdminNominationResponse, Cw20BalanceResponse, ArrayOfAddr, DaoURIResponse, PauseInfoResponse, DumpStateResponse, GetItemResponse, InfoResponse, ArrayOfString, ArrayOfSubDao, ProposalModuleCountResponse, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoCore.types";
export interface DaoCoreReadOnlyInterface {
    contractAddress: string;
    admin: () => Promise<Addr>;
    adminNomination: () => Promise<AdminNominationResponse>;
    config: () => Promise<Config>;
    cw20Balances: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<Cw20BalanceResponse>;
    cw20TokenList: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfAddr>;
    cw721TokenList: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfAddr>;
    dumpState: () => Promise<DumpStateResponse>;
    getItem: ({ key }: {
        key: string;
    }) => Promise<GetItemResponse>;
    listItems: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfString>;
    info: () => Promise<InfoResponse>;
    proposalModules: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfProposalModule>;
    activeProposalModules: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfProposalModule>;
    proposalModuleCount: () => Promise<ProposalModuleCountResponse>;
    pauseInfo: () => Promise<PauseInfoResponse>;
    votingModule: () => Promise<Addr>;
    listSubDaos: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfSubDao>;
    daoURI: () => Promise<DaoURIResponse>;
    votingPowerAtHeight: ({ address, height }: {
        address: string;
        height?: number;
    }) => Promise<VotingPowerAtHeightResponse>;
    totalPowerAtHeight: ({ height }: {
        height?: number;
    }) => Promise<TotalPowerAtHeightResponse>;
}
export declare class DaoCoreQueryClient implements DaoCoreReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    admin: () => Promise<Addr>;
    adminNomination: () => Promise<AdminNominationResponse>;
    config: () => Promise<Config>;
    cw20Balances: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<Cw20BalanceResponse>;
    cw20TokenList: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfAddr>;
    cw721TokenList: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfAddr>;
    dumpState: () => Promise<DumpStateResponse>;
    getItem: ({ key }: {
        key: string;
    }) => Promise<GetItemResponse>;
    listItems: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfString>;
    info: () => Promise<InfoResponse>;
    proposalModules: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfProposalModule>;
    activeProposalModules: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfProposalModule>;
    proposalModuleCount: () => Promise<ProposalModuleCountResponse>;
    pauseInfo: () => Promise<PauseInfoResponse>;
    votingModule: () => Promise<Addr>;
    listSubDaos: ({ limit, startAfter }: {
        limit?: number;
        startAfter?: string;
    }) => Promise<ArrayOfSubDao>;
    daoURI: () => Promise<DaoURIResponse>;
    votingPowerAtHeight: ({ address, height }: {
        address: string;
        height?: number;
    }) => Promise<VotingPowerAtHeightResponse>;
    totalPowerAtHeight: ({ height }: {
        height?: number;
    }) => Promise<TotalPowerAtHeightResponse>;
}
export interface DaoCoreInterface extends DaoCoreReadOnlyInterface {
    contractAddress: string;
    sender: string;
    executeAdminMsgs: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    executeProposalHook: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    pause: ({ duration }: {
        duration: Duration;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receiveNft: ({ msg, sender, tokenId }: {
        msg: Binary;
        sender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeItem: ({ key }: {
        key: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setItem: ({ key, value }: {
        key: string;
        value: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    nominateAdmin: ({ admin }: {
        admin?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    acceptAdminNomination: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawAdminNomination: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ config }: {
        config: Config;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateCw20List: ({ toAdd, toRemove }: {
        toAdd: string[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateCw721List: ({ toAdd, toRemove }: {
        toAdd: string[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateProposalModules: ({ toAdd, toDisable }: {
        toAdd: ModuleInstantiateInfo[];
        toDisable: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateVotingModule: ({ module }: {
        module: ModuleInstantiateInfo;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateSubDaos: ({ toAdd, toRemove }: {
        toAdd: SubDao[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class DaoCoreClient extends DaoCoreQueryClient implements DaoCoreInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    executeAdminMsgs: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    executeProposalHook: ({ msgs }: {
        msgs: CosmosMsgForEmpty[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    pause: ({ duration }: {
        duration: Duration;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    receiveNft: ({ msg, sender, tokenId }: {
        msg: Binary;
        sender: string;
        tokenId: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeItem: ({ key }: {
        key: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    setItem: ({ key, value }: {
        key: string;
        value: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    nominateAdmin: ({ admin }: {
        admin?: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    acceptAdminNomination: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawAdminNomination: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ config }: {
        config: Config;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateCw20List: ({ toAdd, toRemove }: {
        toAdd: string[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateCw721List: ({ toAdd, toRemove }: {
        toAdd: string[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateProposalModules: ({ toAdd, toDisable }: {
        toAdd: ModuleInstantiateInfo[];
        toDisable: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateVotingModule: ({ module }: {
        module: ModuleInstantiateInfo;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateSubDaos: ({ toAdd, toRemove }: {
        toAdd: SubDao[];
        toRemove: string[];
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}