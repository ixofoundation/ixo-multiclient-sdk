import * as _m0 from "protobufjs/minimal";
/** EventSend is emitted on Msg/Send */
export interface EventSend {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** sender is the address of the owner of nft */
    sender: string;
    /** receiver is the receiver address of nft */
    receiver: string;
}
/** EventSend is emitted on Msg/Send */
export interface EventSendSDKType {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
}
/** EventMint is emitted on Mint */
export interface EventMint {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** owner is the owner address of the nft */
    owner: string;
}
/** EventMint is emitted on Mint */
export interface EventMintSDKType {
    class_id: string;
    id: string;
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurn {
    /** class_id associated with the nft */
    classId: string;
    /** id is a unique identifier of the nft */
    id: string;
    /** owner is the owner address of the nft */
    owner: string;
}
/** EventBurn is emitted on Burn */
export interface EventBurnSDKType {
    class_id: string;
    id: string;
    owner: string;
}
export declare const EventSend: {
    encode(message: EventSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSend;
    fromJSON(object: any): EventSend;
    toJSON(message: EventSend): unknown;
    fromPartial(object: Partial<EventSend>): EventSend;
};
export declare const EventMint: {
    encode(message: EventMint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMint;
    fromJSON(object: any): EventMint;
    toJSON(message: EventMint): unknown;
    fromPartial(object: Partial<EventMint>): EventMint;
};
export declare const EventBurn: {
    encode(message: EventBurn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurn;
    fromJSON(object: any): EventBurn;
    toJSON(message: EventBurn): unknown;
    fromPartial(object: Partial<EventBurn>): EventBurn;
};
