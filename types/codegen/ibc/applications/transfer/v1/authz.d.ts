import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** Allocation defines the spend limit for a particular port and channel */
export interface Allocation {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** spend limitation on the channel */
    spendLimit: Coin[];
    /** allow list of receivers, an empty allow list permits any receiver address */
    allowList: string[];
    /**
     * allow list of memo strings, an empty list prohibits all memo strings;
     * a list only with "*" permits any memo string
     */
    allowedPacketData: string[];
}
/** Allocation defines the spend limit for a particular port and channel */
export interface AllocationSDKType {
    source_port: string;
    source_channel: string;
    spend_limit: CoinSDKType[];
    allow_list: string[];
    allowed_packet_data: string[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorization {
    /** port and channel amounts */
    allocations: Allocation[];
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 */
export interface TransferAuthorizationSDKType {
    allocations: AllocationSDKType[];
}
export declare const Allocation: {
    encode(message: Allocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Allocation;
    fromJSON(object: any): Allocation;
    toJSON(message: Allocation): unknown;
    fromPartial(object: Partial<Allocation>): Allocation;
};
export declare const TransferAuthorization: {
    encode(message: TransferAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransferAuthorization;
    fromJSON(object: any): TransferAuthorization;
    toJSON(message: TransferAuthorization): unknown;
    fromPartial(object: Partial<TransferAuthorization>): TransferAuthorization;
};
