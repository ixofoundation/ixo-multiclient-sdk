import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identifiedFees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** list of registered payees */
    registeredPayees: RegisteredPayee[];
    /** list of registered counterparty payees */
    registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
    /** list of forward relayer addresses */
    forwardRelayers: ForwardRelayerAddress[];
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
    identified_fees: IdentifiedPacketFeesSDKType[];
    fee_enabled_channels: FeeEnabledChannelSDKType[];
    registered_payees: RegisteredPayeeSDKType[];
    registered_counterparty_payees: RegisteredCounterpartyPayeeSDKType[];
    forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
    port_id: string;
    channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeSDKType {
    channel_id: string;
    relayer: string;
    payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterpartyPayee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeSDKType {
    channel_id: string;
    relayer: string;
    counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packetId?: PacketId;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
    address: string;
    packet_id?: PacketIdSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const FeeEnabledChannel: {
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeEnabledChannel;
    fromJSON(object: any): FeeEnabledChannel;
    toJSON(message: FeeEnabledChannel): unknown;
    fromPartial(object: Partial<FeeEnabledChannel>): FeeEnabledChannel;
};
export declare const RegisteredPayee: {
    encode(message: RegisteredPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredPayee;
    fromJSON(object: any): RegisteredPayee;
    toJSON(message: RegisteredPayee): unknown;
    fromPartial(object: Partial<RegisteredPayee>): RegisteredPayee;
};
export declare const RegisteredCounterpartyPayee: {
    encode(message: RegisteredCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisteredCounterpartyPayee;
    fromJSON(object: any): RegisteredCounterpartyPayee;
    toJSON(message: RegisteredCounterpartyPayee): unknown;
    fromPartial(object: Partial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee;
};
export declare const ForwardRelayerAddress: {
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ForwardRelayerAddress;
    fromJSON(object: any): ForwardRelayerAddress;
    toJSON(message: ForwardRelayerAddress): unknown;
    fromPartial(object: Partial<ForwardRelayerAddress>): ForwardRelayerAddress;
};
