import { Rpc } from "../../../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgRemoveChecksum, MsgRemoveChecksumResponse, MsgMigrateContract, MsgMigrateContractResponse } from "./tx";
/** Msg defines the ibc/08-wasm Msg service. */
export interface Msg {
    /** StoreCode defines a rpc handler method for MsgStoreCode. */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** RemoveChecksum defines a rpc handler method for MsgRemoveChecksum. */
    removeChecksum(request: MsgRemoveChecksum): Promise<MsgRemoveChecksumResponse>;
    /** MigrateContract defines a rpc handler method for MsgMigrateContract. */
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    removeChecksum(request: MsgRemoveChecksum): Promise<MsgRemoveChecksumResponse>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
}
