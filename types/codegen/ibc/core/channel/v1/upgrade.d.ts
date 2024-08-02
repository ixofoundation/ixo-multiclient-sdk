import { Timeout, TimeoutSDKType, Order } from "./channel";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
    fields?: UpgradeFields;
    timeout?: Timeout;
    nextSequenceSend: Long;
}
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface UpgradeSDKType {
    fields?: UpgradeFieldsSDKType;
    timeout?: TimeoutSDKType;
    next_sequence_send: Long;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
    ordering: Order;
    connectionHops: string[];
    version: string;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFieldsSDKType {
    ordering: Order;
    connection_hops: string[];
    version: string;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
    /** the channel upgrade sequence */
    sequence: Long;
    /** the error message detailing the cause of failure */
    message: string;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceiptSDKType {
    sequence: Long;
    message: string;
}
export declare const Upgrade: {
    encode(message: Upgrade, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Upgrade;
    fromJSON(object: any): Upgrade;
    toJSON(message: Upgrade): unknown;
    fromPartial(object: Partial<Upgrade>): Upgrade;
};
export declare const UpgradeFields: {
    encode(message: UpgradeFields, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeFields;
    fromJSON(object: any): UpgradeFields;
    toJSON(message: UpgradeFields): unknown;
    fromPartial(object: Partial<UpgradeFields>): UpgradeFields;
};
export declare const ErrorReceipt: {
    encode(message: ErrorReceipt, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorReceipt;
    fromJSON(object: any): ErrorReceipt;
    toJSON(message: ErrorReceipt): unknown;
    fromPartial(object: Partial<ErrorReceipt>): ErrorReceipt;
};
