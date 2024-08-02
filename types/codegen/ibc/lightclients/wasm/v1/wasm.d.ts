import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
/** Wasm light client's Client state */
export interface ClientState {
    /**
     * bytes encoding the client state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
    checksum: Uint8Array;
    latestHeight?: Height;
}
/** Wasm light client's Client state */
export interface ClientStateSDKType {
    data: Uint8Array;
    checksum: Uint8Array;
    latest_height?: HeightSDKType;
}
/** Wasm light client's ConsensusState */
export interface ConsensusState {
    /**
     * bytes encoding the consensus state of the underlying light client
     * implemented as a Wasm contract.
     */
    data: Uint8Array;
}
/** Wasm light client's ConsensusState */
export interface ConsensusStateSDKType {
    data: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessage {
    data: Uint8Array;
}
/** Wasm light client message (either header(s) or misbehaviour) */
export interface ClientMessageSDKType {
    data: Uint8Array;
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface Checksums {
    checksums: Uint8Array[];
}
/**
 * Checksums defines a list of all checksums that are stored
 *
 * Deprecated: This message is deprecated in favor of storing the checksums
 * using a Collections.KeySet.
 */
/** @deprecated */
export interface ChecksumsSDKType {
    checksums: Uint8Array[];
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: Partial<ClientState>): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial(object: Partial<ConsensusState>): ConsensusState;
};
export declare const ClientMessage: {
    encode(message: ClientMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientMessage;
    fromJSON(object: any): ClientMessage;
    toJSON(message: ClientMessage): unknown;
    fromPartial(object: Partial<ClientMessage>): ClientMessage;
};
export declare const Checksums: {
    encode(message: Checksums, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Checksums;
    fromJSON(object: any): Checksums;
    toJSON(message: Checksums): unknown;
    fromPartial(object: Partial<Checksums>): Checksums;
};
