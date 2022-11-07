import * as _m0 from "protobufjs/minimal";
import { Long } from "../helpers";
export interface InitializeNftContract {
    NftContractCodeId: Long;
    NftMinterAddress: string;
}
export interface InitializeNftContractSDKType {
    NftContractCodeId: Long;
    NftMinterAddress: string;
}
export declare const InitializeNftContract: {
    encode(message: InitializeNftContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitializeNftContract;
    fromJSON(object: any): InitializeNftContract;
    toJSON(message: InitializeNftContract): unknown;
    fromPartial(object: Partial<InitializeNftContract>): InitializeNftContract;
};
