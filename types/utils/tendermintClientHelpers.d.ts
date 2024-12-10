import { JsonRpcRequest } from "@cosmjs/json-rpc";
/** Creates a JSON-RPC request with random ID */
export declare const createJsonRpcRequest: (method: string, params?: {}) => JsonRpcRequest;
export declare function may<T, U>(transform: (val: T) => U, value: T | null | undefined): U | undefined;
interface HeightParam {
    readonly height?: number;
}
interface RpcHeightParam {
    readonly height?: string;
}
export declare const encodeHeightParam: (param: HeightParam) => RpcHeightParam;
/**
 * Takes an integer in the safe integer range and returns
 * a string representation to be used in the Tendermint RPC API.
 */
export declare function smallIntToApi(num: number): string;
/**
 * Takes an integer value from the Tendermint RPC API and
 * returns it as number.
 *
 * Only works within the safe integer range.
 */
export declare function apiToSmallInt(input: string | number): number;
export interface BlockResultsResponse {
    readonly height: number;
    readonly results: readonly TxData[];
    readonly beginBlockEvents: readonly RpcEvent[];
    readonly endBlockEvents: readonly RpcEvent[];
    readonly finalizeBlockEvents: readonly RpcEvent[];
}
export declare const decodeBlockResults: (data: any, includeResults?: boolean) => BlockResultsResponse;
export declare function decodeEvent(event: RpcEvent): RpcEvent;
/**
 * EventAttribute from Tendermint. In 0.35 the type of key and value was changed
 * from bytes to string, such that no base64 encoding is used anymore.
 */
interface RpcEventAttribute {
    readonly key: string;
    readonly value?: string;
}
interface RpcEvent {
    readonly type: string;
    /** Can be omitted (see https://github.com/cosmos/cosmjs/pull/1198) */
    readonly attributes?: readonly RpcEventAttribute[];
}
export interface TxData {
    readonly code: number;
    readonly codespace?: string;
    readonly log?: string;
    readonly data?: Uint8Array;
    readonly events: readonly RpcEvent[];
    readonly gasWanted: bigint;
    readonly gasUsed: bigint;
}
/**
 * Takes an integer value from the Tendermint RPC API and
 * returns it as BigInt.
 *
 * This supports the full uint64 and int64 ranges.
 */
export declare function apiToBigInt(input: string): bigint;
export {};
