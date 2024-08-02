//@ts-nocheck
import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.removeChecksum = this.removeChecksum.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
  }
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }
  removeChecksum(request: MsgRemoveChecksum): Promise<MsgRemoveChecksumResponse> {
    const data = MsgRemoveChecksum.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "RemoveChecksum", data);
    return promise.then(data => MsgRemoveChecksumResponse.decode(new _m0.Reader(data)));
  }
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  }
}