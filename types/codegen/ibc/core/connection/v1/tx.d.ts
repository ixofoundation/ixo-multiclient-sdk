import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, Params, ParamsSDKType } from "../../client/v1/client";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
    clientId: string;
    counterparty?: Counterparty;
    version?: Version;
    delayPeriod: Long;
    signer: string;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInitSDKType {
    client_id: string;
    counterparty?: CounterpartySDKType;
    version?: VersionSDKType;
    delay_period: Long;
    signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponseSDKType {
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
    clientId: string;
    /** Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC. */
    /** @deprecated */
    previousConnectionId: string;
    clientState?: Any;
    counterparty?: Counterparty;
    delayPeriod: Long;
    counterpartyVersions: Version[];
    proofHeight?: Height;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proofInit: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight?: Height;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    hostConsensusStateProof: Uint8Array;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTrySDKType {
    client_id: string;
    /** @deprecated */
    previous_connection_id: string;
    client_state?: AnySDKType;
    counterparty?: CounterpartySDKType;
    delay_period: Long;
    counterparty_versions: VersionSDKType[];
    proof_height?: HeightSDKType;
    proof_init: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height?: HeightSDKType;
    signer: string;
    host_consensus_state_proof: Uint8Array;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponseSDKType {
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
    connectionId: string;
    counterpartyConnectionId: string;
    version?: Version;
    clientState?: Any;
    proofHeight?: Height;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proofTry: Uint8Array;
    /** proof of client state included in message */
    proofClient: Uint8Array;
    /** proof of client consensus state */
    proofConsensus: Uint8Array;
    consensusHeight?: Height;
    signer: string;
    /** optional proof data for host state machines that are unable to introspect their own consensus state */
    hostConsensusStateProof: Uint8Array;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAckSDKType {
    connection_id: string;
    counterparty_connection_id: string;
    version?: VersionSDKType;
    client_state?: AnySDKType;
    proof_height?: HeightSDKType;
    proof_try: Uint8Array;
    proof_client: Uint8Array;
    proof_consensus: Uint8Array;
    consensus_height?: HeightSDKType;
    signer: string;
    host_consensus_state_proof: Uint8Array;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponseSDKType {
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
    connectionId: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proofAck: Uint8Array;
    proofHeight?: Height;
    signer: string;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirmSDKType {
    connection_id: string;
    proof_ack: Uint8Array;
    proof_height?: HeightSDKType;
    signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponseSDKType {
}
/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the connection parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: Params;
}
/** MsgUpdateParams defines the sdk.Msg type to update the connection parameters. */
export interface MsgUpdateParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgConnectionOpenInit: {
    encode(message: MsgConnectionOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit;
    fromJSON(object: any): MsgConnectionOpenInit;
    toJSON(message: MsgConnectionOpenInit): unknown;
    fromPartial(object: Partial<MsgConnectionOpenInit>): MsgConnectionOpenInit;
};
export declare const MsgConnectionOpenInitResponse: {
    encode(_: MsgConnectionOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponse;
    fromJSON(_: any): MsgConnectionOpenInitResponse;
    toJSON(_: MsgConnectionOpenInitResponse): unknown;
    fromPartial(_: Partial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse;
};
export declare const MsgConnectionOpenTry: {
    encode(message: MsgConnectionOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry;
    fromJSON(object: any): MsgConnectionOpenTry;
    toJSON(message: MsgConnectionOpenTry): unknown;
    fromPartial(object: Partial<MsgConnectionOpenTry>): MsgConnectionOpenTry;
};
export declare const MsgConnectionOpenTryResponse: {
    encode(_: MsgConnectionOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponse;
    fromJSON(_: any): MsgConnectionOpenTryResponse;
    toJSON(_: MsgConnectionOpenTryResponse): unknown;
    fromPartial(_: Partial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse;
};
export declare const MsgConnectionOpenAck: {
    encode(message: MsgConnectionOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck;
    fromJSON(object: any): MsgConnectionOpenAck;
    toJSON(message: MsgConnectionOpenAck): unknown;
    fromPartial(object: Partial<MsgConnectionOpenAck>): MsgConnectionOpenAck;
};
export declare const MsgConnectionOpenAckResponse: {
    encode(_: MsgConnectionOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponse;
    fromJSON(_: any): MsgConnectionOpenAckResponse;
    toJSON(_: MsgConnectionOpenAckResponse): unknown;
    fromPartial(_: Partial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse;
};
export declare const MsgConnectionOpenConfirm: {
    encode(message: MsgConnectionOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm;
    fromJSON(object: any): MsgConnectionOpenConfirm;
    toJSON(message: MsgConnectionOpenConfirm): unknown;
    fromPartial(object: Partial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm;
};
export declare const MsgConnectionOpenConfirmResponse: {
    encode(_: MsgConnectionOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse;
    fromJSON(_: any): MsgConnectionOpenConfirmResponse;
    toJSON(_: MsgConnectionOpenConfirmResponse): unknown;
    fromPartial(_: Partial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
