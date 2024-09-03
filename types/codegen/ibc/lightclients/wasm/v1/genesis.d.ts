import * as _m0 from "protobufjs/minimal";
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisState {
    /** uploaded light client wasm contracts */
    contracts: Contract[];
}
/** GenesisState defines 08-wasm's keeper genesis state */
export interface GenesisStateSDKType {
    contracts: ContractSDKType[];
}
/** Contract stores contract code */
export interface Contract {
    /** contract byte code */
    codeBytes: Uint8Array;
}
/** Contract stores contract code */
export interface ContractSDKType {
    code_bytes: Uint8Array;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial(object: Partial<Contract>): Contract;
};
