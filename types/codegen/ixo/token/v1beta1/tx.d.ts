import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
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
export interface SetupCw20 {
    symbol: string;
    decimals: number;
    cap: Long;
}
export interface SetupCw20SDKType {
    symbol: string;
    decimals: number;
    cap: Long;
}
export interface SetupCw721 {
    symbol: string;
}
export interface SetupCw721SDKType {
    symbol: string;
}
export interface SetupCw1155 {
}
export interface SetupCw1155SDKType {
}
export interface MsgSetupMinter {
    minterDid: string;
    minterAddress: string;
    name: string;
    description: string;
    cw20?: SetupCw20;
    cw721?: SetupCw721;
    cw1155?: SetupCw1155;
}
export interface MsgSetupMinterSDKType {
    minterDid: string;
    minterAddress: string;
    name: string;
    description: string;
    cw20?: SetupCw20SDKType;
    cw721?: SetupCw721SDKType;
    cw1155?: SetupCw1155SDKType;
}
export interface MsgSetupMinterResponse {
}
export interface MsgSetupMinterResponseSDKType {
}
export interface MintCw20 {
    amount: Long;
}
export interface MintCw20SDKType {
    amount: Long;
}
export interface MintCw721 {
    /** An IID that identifies the asset that this token represents */
    id: string;
    /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */
    image?: string;
    /** Uri */
    uri?: string;
    /** "Arbitrary properties. Values may be strings, numbers, object or arrays."]; */
    properties: Uint8Array;
}
export interface MintCw721SDKType {
    /** An IID that identifies the asset that this token represents */
    id: string;
    /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */
    image?: string;
    /** Uri */
    uri?: string;
    /** "Arbitrary properties. Values may be strings, numbers, object or arrays."]; */
    properties: Uint8Array;
}
export interface MintCw1155 {
    /** An IID that identifies the asset that this token represents */
    id: string;
    /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */
    image?: string;
    /** Uri */
    uri?: string;
    value: Long;
}
export interface MintCw1155SDKType {
    /** An IID that identifies the asset that this token represents */
    id: string;
    /** A URI pointing to a resource with media type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive. */
    image?: string;
    /** Uri */
    uri?: string;
    value: Long;
}
export interface MsgMint {
    minterDid: string;
    minterAddress: string;
    contractAddress: string;
    ownerDid: string;
    cw20?: MintCw20;
    cw721?: MintCw721;
    cw1155?: MintCw1155;
}
export interface MsgMintSDKType {
    minterDid: string;
    minterAddress: string;
    contractAddress: string;
    ownerDid: string;
    cw20?: MintCw20SDKType;
    cw721?: MintCw721SDKType;
    cw1155?: MintCw1155SDKType;
}
export interface MsgMintResponse {
}
export interface MsgMintResponseSDKType {
}
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
export declare const SetupCw20: {
    encode(message: SetupCw20, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw20;
    fromJSON(object: any): SetupCw20;
    toJSON(message: SetupCw20): unknown;
    fromPartial(object: Partial<SetupCw20>): SetupCw20;
};
export declare const SetupCw721: {
    encode(message: SetupCw721, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw721;
    fromJSON(object: any): SetupCw721;
    toJSON(message: SetupCw721): unknown;
    fromPartial(object: Partial<SetupCw721>): SetupCw721;
};
export declare const SetupCw1155: {
    encode(_: SetupCw1155, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetupCw1155;
    fromJSON(_: any): SetupCw1155;
    toJSON(_: SetupCw1155): unknown;
    fromPartial(_: Partial<SetupCw1155>): SetupCw1155;
};
export declare const MsgSetupMinter: {
    encode(message: MsgSetupMinter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetupMinter;
    fromJSON(object: any): MsgSetupMinter;
    toJSON(message: MsgSetupMinter): unknown;
    fromPartial(object: Partial<MsgSetupMinter>): MsgSetupMinter;
};
export declare const MsgSetupMinterResponse: {
    encode(_: MsgSetupMinterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetupMinterResponse;
    fromJSON(_: any): MsgSetupMinterResponse;
    toJSON(_: MsgSetupMinterResponse): unknown;
    fromPartial(_: Partial<MsgSetupMinterResponse>): MsgSetupMinterResponse;
};
export declare const MintCw20: {
    encode(message: MintCw20, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintCw20;
    fromJSON(object: any): MintCw20;
    toJSON(message: MintCw20): unknown;
    fromPartial(object: Partial<MintCw20>): MintCw20;
};
export declare const MintCw721: {
    encode(message: MintCw721, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintCw721;
    fromJSON(object: any): MintCw721;
    toJSON(message: MintCw721): unknown;
    fromPartial(object: Partial<MintCw721>): MintCw721;
};
export declare const MintCw1155: {
    encode(message: MintCw1155, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintCw1155;
    fromJSON(object: any): MintCw1155;
    toJSON(message: MintCw1155): unknown;
    fromPartial(object: Partial<MintCw1155>): MintCw1155;
};
export declare const MsgMint: {
    encode(message: MsgMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMint;
    fromJSON(object: any): MsgMint;
    toJSON(message: MsgMint): unknown;
    fromPartial(object: Partial<MsgMint>): MsgMint;
};
export declare const MsgMintResponse: {
    encode(_: MsgMintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintResponse;
    fromJSON(_: any): MsgMintResponse;
    toJSON(_: MsgMintResponse): unknown;
    fromPartial(_: Partial<MsgMintResponse>): MsgMintResponse;
};
