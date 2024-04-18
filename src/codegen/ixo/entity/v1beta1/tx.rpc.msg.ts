import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateEntity, MsgCreateEntityResponse, MsgUpdateEntity, MsgUpdateEntityResponse, MsgUpdateEntityVerified, MsgUpdateEntityVerifiedResponse, MsgTransferEntity, MsgTransferEntityResponse, MsgCreateEntityAccount, MsgCreateEntityAccountResponse, MsgGrantEntityAccountAuthz, MsgGrantEntityAccountAuthzResponse, MsgRevokeEntityAccountAuthz, MsgRevokeEntityAccountAuthzResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
  /** CreateEntity defines a method for creating a entity. */
  createEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
  /** UpdateEntity defines a method for updating a entity */
  updateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
  /** UpdateEntityVerified defines a method for updating if an entity is verified */
  updateEntityVerified(request: MsgUpdateEntityVerified): Promise<MsgUpdateEntityVerifiedResponse>;
  /** Transfers an entity and its nft to the recipient */
  transferEntity(request: MsgTransferEntity): Promise<MsgTransferEntityResponse>;
  /** Create a module account for an entity, */
  createEntityAccount(request: MsgCreateEntityAccount): Promise<MsgCreateEntityAccountResponse>;
  /** Create an authz grant from entity account */
  grantEntityAccountAuthz(request: MsgGrantEntityAccountAuthz): Promise<MsgGrantEntityAccountAuthzResponse>;
  /** Revoke an authz grant from entity account */
  revokeEntityAccountAuthz(request: MsgRevokeEntityAccountAuthz): Promise<MsgRevokeEntityAccountAuthzResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createEntity = this.createEntity.bind(this);
    this.updateEntity = this.updateEntity.bind(this);
    this.updateEntityVerified = this.updateEntityVerified.bind(this);
    this.transferEntity = this.transferEntity.bind(this);
    this.createEntityAccount = this.createEntityAccount.bind(this);
    this.grantEntityAccountAuthz = this.grantEntityAccountAuthz.bind(this);
    this.revokeEntityAccountAuthz = this.revokeEntityAccountAuthz.bind(this);
  }
  createEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse> {
    const data = MsgCreateEntity.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "CreateEntity", data);
    return promise.then(data => MsgCreateEntityResponse.decode(new _m0.Reader(data)));
  }
  updateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse> {
    const data = MsgUpdateEntity.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "UpdateEntity", data);
    return promise.then(data => MsgUpdateEntityResponse.decode(new _m0.Reader(data)));
  }
  updateEntityVerified(request: MsgUpdateEntityVerified): Promise<MsgUpdateEntityVerifiedResponse> {
    const data = MsgUpdateEntityVerified.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "UpdateEntityVerified", data);
    return promise.then(data => MsgUpdateEntityVerifiedResponse.decode(new _m0.Reader(data)));
  }
  transferEntity(request: MsgTransferEntity): Promise<MsgTransferEntityResponse> {
    const data = MsgTransferEntity.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "TransferEntity", data);
    return promise.then(data => MsgTransferEntityResponse.decode(new _m0.Reader(data)));
  }
  createEntityAccount(request: MsgCreateEntityAccount): Promise<MsgCreateEntityAccountResponse> {
    const data = MsgCreateEntityAccount.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "CreateEntityAccount", data);
    return promise.then(data => MsgCreateEntityAccountResponse.decode(new _m0.Reader(data)));
  }
  grantEntityAccountAuthz(request: MsgGrantEntityAccountAuthz): Promise<MsgGrantEntityAccountAuthzResponse> {
    const data = MsgGrantEntityAccountAuthz.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "GrantEntityAccountAuthz", data);
    return promise.then(data => MsgGrantEntityAccountAuthzResponse.decode(new _m0.Reader(data)));
  }
  revokeEntityAccountAuthz(request: MsgRevokeEntityAccountAuthz): Promise<MsgRevokeEntityAccountAuthzResponse> {
    const data = MsgRevokeEntityAccountAuthz.encode(request).finish();
    const promise = this.rpc.request("ixo.entity.v1beta1.Msg", "RevokeEntityAccountAuthz", data);
    return promise.then(data => MsgRevokeEntityAccountAuthzResponse.decode(new _m0.Reader(data)));
  }
}