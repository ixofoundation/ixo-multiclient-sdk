/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Binary } from "./CwAdminFactory.types";
export interface CwAdminFactoryReadOnlyInterface {
    contractAddress: string;
}
export declare class CwAdminFactoryQueryClient implements CwAdminFactoryReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
}
export interface CwAdminFactoryInterface extends CwAdminFactoryReadOnlyInterface {
    contractAddress: string;
    sender: string;
    instantiateContractWithSelfAdmin: ({ codeId, instantiateMsg, label }: {
        codeId: number;
        instantiateMsg: Binary;
        label: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class CwAdminFactoryClient extends CwAdminFactoryQueryClient implements CwAdminFactoryInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    instantiateContractWithSelfAdmin: ({ codeId, instantiateMsg, label }: {
        codeId: number;
        instantiateMsg: Binary;
        label: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}