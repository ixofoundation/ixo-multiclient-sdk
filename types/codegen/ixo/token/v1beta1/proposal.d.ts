import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SetTokenContractCodes {
    ixo1155ContractCode: Long;
}
export interface SetTokenContractCodesSDKType {
    ixo1155_contract_code: Long;
}
export declare const SetTokenContractCodes: {
    encode(message: SetTokenContractCodes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTokenContractCodes;
    fromJSON(object: any): SetTokenContractCodes;
    toJSON(message: SetTokenContractCodes): unknown;
    fromPartial(object: Partial<SetTokenContractCodes>): SetTokenContractCodes;
};
