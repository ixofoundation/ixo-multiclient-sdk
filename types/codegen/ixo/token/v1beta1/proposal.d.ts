import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../helpers";
export interface SetTokenContractCodes {
    cw20ContractCode: Long;
    cw721ContractCode: Long;
    ixo1155ContractCode: Long;
}
export interface SetTokenContractCodesSDKType {
    cw20ContractCode: Long;
    cw721ContractCode: Long;
    ixo1155ContractCode: Long;
}
export declare const SetTokenContractCodes: {
    encode(message: SetTokenContractCodes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetTokenContractCodes;
    fromJSON(object: any): SetTokenContractCodes;
    toJSON(message: SetTokenContractCodes): unknown;
    fromPartial(object: Partial<SetTokenContractCodes>): SetTokenContractCodes;
};
