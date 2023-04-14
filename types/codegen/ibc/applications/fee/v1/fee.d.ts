import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface FeeSDKType {
    recv_fee: CoinSDKType[];
    ack_fee: CoinSDKType[];
    timeout_fee: CoinSDKType[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the refund address for unspent fees */
    refundAddress: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFeeSDKType {
    fee?: FeeSDKType;
    refund_address: string;
    relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
    /** list of packet fees */
    packetFees: PacketFee[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFeesSDKType {
    packet_fees: PacketFeeSDKType[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
    /** list of packet fees */
    packetFees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFeesSDKType {
    packet_id?: PacketIdSDKType;
    packet_fees: PacketFeeSDKType[];
}
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    fromPartial(object: Partial<Fee>): Fee;
};
export declare const PacketFee: {
    encode(message: PacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFee;
    fromJSON(object: any): PacketFee;
    toJSON(message: PacketFee): unknown;
    fromPartial(object: Partial<PacketFee>): PacketFee;
};
export declare const PacketFees: {
    encode(message: PacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketFees;
    fromJSON(object: any): PacketFees;
    toJSON(message: PacketFees): unknown;
    fromPartial(object: Partial<PacketFees>): PacketFees;
};
export declare const IdentifiedPacketFees: {
    encode(message: IdentifiedPacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedPacketFees;
    fromJSON(object: any): IdentifiedPacketFees;
    toJSON(message: IdentifiedPacketFees): unknown;
    fromPartial(object: Partial<IdentifiedPacketFees>): IdentifiedPacketFees;
};
