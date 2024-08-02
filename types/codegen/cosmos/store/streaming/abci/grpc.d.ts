import { RequestFinalizeBlock, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockSDKType, ResponseCommit, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairSDKType } from "../../v1beta1/listening";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
    req?: RequestFinalizeBlock;
    res?: ResponseFinalizeBlock;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequestSDKType {
    req?: RequestFinalizeBlockSDKType;
    res?: ResponseFinalizeBlockSDKType;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponseSDKType {
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
    /** explicitly pass in block height as ResponseCommit does not contain this info */
    blockHeight: Long;
    res?: ResponseCommit;
    changeSet: StoreKVPair[];
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequestSDKType {
    block_height: Long;
    res?: ResponseCommitSDKType;
    change_set: StoreKVPairSDKType[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponseSDKType {
}
export declare const ListenFinalizeBlockRequest: {
    encode(message: ListenFinalizeBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenFinalizeBlockRequest;
    fromJSON(object: any): ListenFinalizeBlockRequest;
    toJSON(message: ListenFinalizeBlockRequest): unknown;
    fromPartial(object: Partial<ListenFinalizeBlockRequest>): ListenFinalizeBlockRequest;
};
export declare const ListenFinalizeBlockResponse: {
    encode(_: ListenFinalizeBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenFinalizeBlockResponse;
    fromJSON(_: any): ListenFinalizeBlockResponse;
    toJSON(_: ListenFinalizeBlockResponse): unknown;
    fromPartial(_: Partial<ListenFinalizeBlockResponse>): ListenFinalizeBlockResponse;
};
export declare const ListenCommitRequest: {
    encode(message: ListenCommitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitRequest;
    fromJSON(object: any): ListenCommitRequest;
    toJSON(message: ListenCommitRequest): unknown;
    fromPartial(object: Partial<ListenCommitRequest>): ListenCommitRequest;
};
export declare const ListenCommitResponse: {
    encode(_: ListenCommitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListenCommitResponse;
    fromJSON(_: any): ListenCommitResponse;
    toJSON(_: ListenCommitResponse): unknown;
    fromPartial(_: Partial<ListenCommitResponse>): ListenCommitResponse;
};
