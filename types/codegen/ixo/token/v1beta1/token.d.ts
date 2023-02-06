import * as _m0 from "protobufjs/minimal";
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
    cw20ContractCode: string;
    cw721ContractCode: string;
    ixo1155ContractCode: string;
}
export interface ParamsSDKType {
    cw20ContractCode: string;
    cw721ContractCode: string;
    ixo1155ContractCode: string;
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
    minterDid: string;
    minterAddress: string;
    contractAddress: string;
    contractType: ContractTypeSDKType;
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
