import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NetAddress {
    id: string;
    ip: string;
    port: number;
}
export interface NetAddressSDKType {
    id: string;
    ip: string;
    port: number;
}
export interface ProtocolVersion {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface ProtocolVersionSDKType {
    p2p: Long;
    block: Long;
    app: Long;
}
export interface DefaultNodeInfo {
    protocolVersion?: ProtocolVersion;
    defaultNodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoSDKType {
    protocol_version?: ProtocolVersionSDKType;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOtherSDKType;
}
export interface DefaultNodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface DefaultNodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export declare const NetAddress: {
    encode(message: NetAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NetAddress;
    fromJSON(object: any): NetAddress;
    toJSON(message: NetAddress): unknown;
    fromPartial(object: Partial<NetAddress>): NetAddress;
};
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial(object: Partial<ProtocolVersion>): ProtocolVersion;
};
export declare const DefaultNodeInfo: {
    encode(message: DefaultNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfo;
    fromJSON(object: any): DefaultNodeInfo;
    toJSON(message: DefaultNodeInfo): unknown;
    fromPartial(object: Partial<DefaultNodeInfo>): DefaultNodeInfo;
};
export declare const DefaultNodeInfoOther: {
    encode(message: DefaultNodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultNodeInfoOther;
    fromJSON(object: any): DefaultNodeInfoOther;
    toJSON(message: DefaultNodeInfoOther): unknown;
    fromPartial(object: Partial<DefaultNodeInfoOther>): DefaultNodeInfoOther;
};
