import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface InitializeTokenContract {
    NftContractCodeId: Long;
    NftMinterAddress: string;
}
export interface InitializeTokenContractSDKType {
    NftContractCodeId: Long;
    NftMinterAddress: string;
}
export declare const InitializeTokenContract: {
    encode(message: InitializeTokenContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InitializeTokenContract;
    fromJSON(object: any): InitializeTokenContract;
    toJSON(message: InitializeTokenContract): unknown;
    fromPartial(object: Partial<InitializeTokenContract>): InitializeTokenContract;
};
