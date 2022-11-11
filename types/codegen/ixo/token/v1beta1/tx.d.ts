import * as _m0 from "protobufjs/minimal";
/** MsgCreateToken defines a message for creating a project. */
export interface MsgCreateToken {
    /** An Token Type as defined by the implementer */
    ownerDid: string;
    /** The ownersdid address used to sign this transaction. */
    ownerAddress: string;
}
/** MsgCreateToken defines a message for creating a project. */
export interface MsgCreateTokenSDKType {
    /** An Token Type as defined by the implementer */
    ownerDid: string;
    /** The ownersdid address used to sign this transaction. */
    ownerAddress: string;
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateTokenResponse {
}
/** MsgCreateProjectResponse defines the Msg/CreateProject response type. */
export interface MsgCreateTokenResponseSDKType {
}
export interface MsgTransferToken {
    tokenDid: string;
    /** The ownersdid used to sign this transaction. */
    ownerDid: string;
    /** The ownersdid used to sign this transaction. */
    ownerAddress: string;
    recipientDid: string;
}
export interface MsgTransferTokenSDKType {
    tokenDid: string;
    /** The ownersdid used to sign this transaction. */
    ownerDid: string;
    /** The ownersdid used to sign this transaction. */
    ownerAddress: string;
    recipientDid: string;
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateTokenStatus response type. */
export interface MsgTransferTokenResponse {
}
/** MsgUpdateProjectStatusResponse defines the Msg/UpdateTokenStatus response type. */
export interface MsgTransferTokenResponseSDKType {
}
export declare const MsgCreateToken: {
    encode(message: MsgCreateToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateToken;
    fromJSON(object: any): MsgCreateToken;
    toJSON(message: MsgCreateToken): unknown;
    fromPartial(object: Partial<MsgCreateToken>): MsgCreateToken;
};
export declare const MsgCreateTokenResponse: {
    encode(_: MsgCreateTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTokenResponse;
    fromJSON(_: any): MsgCreateTokenResponse;
    toJSON(_: MsgCreateTokenResponse): unknown;
    fromPartial(_: Partial<MsgCreateTokenResponse>): MsgCreateTokenResponse;
};
export declare const MsgTransferToken: {
    encode(message: MsgTransferToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferToken;
    fromJSON(object: any): MsgTransferToken;
    toJSON(message: MsgTransferToken): unknown;
    fromPartial(object: Partial<MsgTransferToken>): MsgTransferToken;
};
export declare const MsgTransferTokenResponse: {
    encode(_: MsgTransferTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenResponse;
    fromJSON(_: any): MsgTransferTokenResponse;
    toJSON(_: MsgTransferTokenResponse): unknown;
    fromPartial(_: Partial<MsgTransferTokenResponse>): MsgTransferTokenResponse;
};
