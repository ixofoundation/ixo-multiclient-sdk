import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export declare enum ContractType {
    CW20 = 0,
    CW721 = 1,
    IXO1155 = 2,
    UNRECOGNIZED = -1
}
export declare enum ContractTypeSDKType {
    CW20 = 0,
    CW721 = 1,
    IXO1155 = 2,
    UNRECOGNIZED = -1
}
export declare function contractTypeFromJSON(object: any): ContractType;
export declare function contractTypeToJSON(object: ContractType): string;
export interface Contract {
    id: string;
    address: string;
}
export interface ContractSDKType {
    id: string;
    address: string;
}
export interface Params {
    cw20ContractCode: Long;
    cw721ContractCode: Long;
    ixo1155ContractCode: Long;
}
export interface ParamsSDKType {
    cw20_contract_code: Long;
    cw721_contract_code: Long;
    ixo1155_contract_code: Long;
}
export interface TokenMinter {
    minterDid: string;
    minterAddress: string;
    contractAddress: string;
    contractType: ContractType;
    name: string;
    description: string;
}
export interface TokenMinterSDKType {
    minter_did: string;
    minter_address: string;
    contract_address: string;
    contract_type: ContractTypeSDKType;
    name: string;
    description: string;
}
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: Partial<Contract>): Contract;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
};
export declare const TokenMinter: {
    encode(message: TokenMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenMinter;
    fromJSON(object: any): TokenMinter;
    toJSON(message: TokenMinter): unknown;
    fromPartial(object: Partial<TokenMinter>): TokenMinter;
};
