//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateNamespace, MsgCreateNamespaceResponse, MsgUpdateNamespace, MsgUpdateNamespaceResponse, MsgRegisterName, MsgRegisterNameResponse, MsgRegisterNameByRegistrar, MsgRegisterNameByRegistrarResponse, MsgUpdateNameByRegistrar, MsgUpdateNameByRegistrarResponse, MsgTransferName, MsgTransferNameResponse, MsgSetNameStatus, MsgSetNameStatusResponse } from "./tx";
/** Msg defines the names module Msg service. */
export interface Msg {
  /** CreateNamespace creates a new namespace. Authority-only (gov). */
  createNamespace(request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse>;
  /**
   * UpdateNamespace replaces an existing namespace's configuration.
   * Authority-only (gov). All Namespace fields supplied in the message become
   * the new state.
   */
  updateNamespace(request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse>;
  /**
   * RegisterName lets a user register a name in a namespace that allows
   * self-registration. The signer must control owner_did.
   */
  registerName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
  /**
   * RegisterNameByRegistrar lets a registrar register a name on behalf of
   * owner_did. The signer must be a registrar of the namespace.
   */
  registerNameByRegistrar(request: MsgRegisterNameByRegistrar): Promise<MsgRegisterNameByRegistrarResponse>;
  /**
   * UpdateNameByRegistrar lets a registrar update the verification metadata
   * (verified flag, verified_by, evidence_hash, source) of an existing record.
   * The signer must be a registrar of the namespace. Owner DID is not
   * changed by this message; use TransferName for that.
   */
  updateNameByRegistrar(request: MsgUpdateNameByRegistrar): Promise<MsgUpdateNameByRegistrarResponse>;
  /**
   * TransferName transfers ownership of a name to another DID. Permitted for
   * the current owner; permitted for a registrar when the namespace has
   * allow_registrar_override = true.
   */
  transferName(request: MsgTransferName): Promise<MsgTransferNameResponse>;
  /**
   * SetNameStatus changes the lifecycle status of a name (suspend, revoke,
   * tombstone, or restore to active). Permitted for registrars and the
   * governance authority.
   */
  setNameStatus(request: MsgSetNameStatus): Promise<MsgSetNameStatusResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createNamespace = this.createNamespace.bind(this);
    this.updateNamespace = this.updateNamespace.bind(this);
    this.registerName = this.registerName.bind(this);
    this.registerNameByRegistrar = this.registerNameByRegistrar.bind(this);
    this.updateNameByRegistrar = this.updateNameByRegistrar.bind(this);
    this.transferName = this.transferName.bind(this);
    this.setNameStatus = this.setNameStatus.bind(this);
  }
  createNamespace(request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse> {
    const data = MsgCreateNamespace.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "CreateNamespace", data);
    return promise.then(data => MsgCreateNamespaceResponse.decode(new _m0.Reader(data)));
  }
  updateNamespace(request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse> {
    const data = MsgUpdateNamespace.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "UpdateNamespace", data);
    return promise.then(data => MsgUpdateNamespaceResponse.decode(new _m0.Reader(data)));
  }
  registerName(request: MsgRegisterName): Promise<MsgRegisterNameResponse> {
    const data = MsgRegisterName.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "RegisterName", data);
    return promise.then(data => MsgRegisterNameResponse.decode(new _m0.Reader(data)));
  }
  registerNameByRegistrar(request: MsgRegisterNameByRegistrar): Promise<MsgRegisterNameByRegistrarResponse> {
    const data = MsgRegisterNameByRegistrar.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "RegisterNameByRegistrar", data);
    return promise.then(data => MsgRegisterNameByRegistrarResponse.decode(new _m0.Reader(data)));
  }
  updateNameByRegistrar(request: MsgUpdateNameByRegistrar): Promise<MsgUpdateNameByRegistrarResponse> {
    const data = MsgUpdateNameByRegistrar.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "UpdateNameByRegistrar", data);
    return promise.then(data => MsgUpdateNameByRegistrarResponse.decode(new _m0.Reader(data)));
  }
  transferName(request: MsgTransferName): Promise<MsgTransferNameResponse> {
    const data = MsgTransferName.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "TransferName", data);
    return promise.then(data => MsgTransferNameResponse.decode(new _m0.Reader(data)));
  }
  setNameStatus(request: MsgSetNameStatus): Promise<MsgSetNameStatusResponse> {
    const data = MsgSetNameStatus.encode(request).finish();
    const promise = this.rpc.request("ixo.names.v1beta1.Msg", "SetNameStatus", data);
    return promise.then(data => MsgSetNameStatusResponse.decode(new _m0.Reader(data)));
  }
}