import * as _m0 from "protobufjs/minimal";
/**
 * MintEpochProvisionsMintedEvent is triggered after a epoch is triggered
 * minting module for inflation.
 */
export interface MintEpochProvisionsMintedEvent {
    epochNumber: string;
    epochProvisions: string;
    amount: string;
}
/**
 * MintEpochProvisionsMintedEvent is triggered after a epoch is triggered
 * minting module for inflation.
 */
export interface MintEpochProvisionsMintedEventSDKType {
    epoch_number: string;
    epoch_provisions: string;
    amount: string;
}
export declare const MintEpochProvisionsMintedEvent: {
    encode(message: MintEpochProvisionsMintedEvent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintEpochProvisionsMintedEvent;
    fromJSON(object: any): MintEpochProvisionsMintedEvent;
    toJSON(message: MintEpochProvisionsMintedEvent): unknown;
    fromPartial(object: Partial<MintEpochProvisionsMintedEvent>): MintEpochProvisionsMintedEvent;
};
