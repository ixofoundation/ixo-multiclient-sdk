//@ts-nocheck
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateIidDocument, MsgCreateIidDocumentResponse, MsgUpdateIidDocument, MsgUpdateIidDocumentResponse, MsgAddVerification, MsgAddVerificationResponse, MsgRevokeVerification, MsgRevokeVerificationResponse, MsgSetVerificationRelationships, MsgSetVerificationRelationshipsResponse, MsgAddService, MsgAddServiceResponse, MsgDeleteService, MsgDeleteServiceResponse, MsgAddController, MsgAddControllerResponse, MsgDeleteController, MsgDeleteControllerResponse, MsgAddLinkedResource, MsgAddLinkedResourceResponse, MsgDeleteLinkedResource, MsgDeleteLinkedResourceResponse, MsgAddLinkedClaim, MsgAddLinkedClaimResponse, MsgDeleteLinkedClaim, MsgDeleteLinkedClaimResponse, MsgAddLinkedEntity, MsgAddLinkedEntityResponse, MsgDeleteLinkedEntity, MsgDeleteLinkedEntityResponse, MsgAddAccordedRight, MsgAddAccordedRightResponse, MsgDeleteAccordedRight, MsgDeleteAccordedRightResponse, MsgAddIidContext, MsgAddIidContextResponse, MsgDeactivateIID, MsgDeactivateIIDResponse, MsgDeleteIidContext, MsgDeleteIidContextResponse } from "./tx";
/** Msg defines the identity Msg service. */
export interface Msg {
  /** CreateDidDocument defines a method for creating a new identity. */
  createIidDocument(request: MsgCreateIidDocument): Promise<MsgCreateIidDocumentResponse>;
  /** UpdateDidDocument defines a method for updating an identity. */
  updateIidDocument(request: MsgUpdateIidDocument): Promise<MsgUpdateIidDocumentResponse>;
  /** AddVerificationMethod adds a new verification method */
  addVerification(request: MsgAddVerification): Promise<MsgAddVerificationResponse>;
  /**
   * RevokeVerification remove the verification method and all associated
   * verification Relations
   */
  revokeVerification(request: MsgRevokeVerification): Promise<MsgRevokeVerificationResponse>;
  /** SetVerificationRelationships overwrite current verification relationships */
  setVerificationRelationships(request: MsgSetVerificationRelationships): Promise<MsgSetVerificationRelationshipsResponse>;
  /** AddService add a new service */
  addService(request: MsgAddService): Promise<MsgAddServiceResponse>;
  /** DeleteService delete an existing service */
  deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
  /** AddService add a new service */
  addController(request: MsgAddController): Promise<MsgAddControllerResponse>;
  /** DeleteService delete an existing service */
  deleteController(request: MsgDeleteController): Promise<MsgDeleteControllerResponse>;
  /** Add / Delete Linked Resource */
  addLinkedResource(request: MsgAddLinkedResource): Promise<MsgAddLinkedResourceResponse>;
  deleteLinkedResource(request: MsgDeleteLinkedResource): Promise<MsgDeleteLinkedResourceResponse>;
  /** Add / Delete Linked Claims */
  addLinkedClaim(request: MsgAddLinkedClaim): Promise<MsgAddLinkedClaimResponse>;
  deleteLinkedClaim(request: MsgDeleteLinkedClaim): Promise<MsgDeleteLinkedClaimResponse>;
  /** Add / Delete Linked Entity */
  addLinkedEntity(request: MsgAddLinkedEntity): Promise<MsgAddLinkedEntityResponse>;
  deleteLinkedEntity(request: MsgDeleteLinkedEntity): Promise<MsgDeleteLinkedEntityResponse>;
  /** Add / Delete Accorded Right */
  addAccordedRight(request: MsgAddAccordedRight): Promise<MsgAddAccordedRightResponse>;
  deleteAccordedRight(request: MsgDeleteAccordedRight): Promise<MsgDeleteAccordedRightResponse>;
  /** Add / Delete Context */
  addIidContext(request: MsgAddIidContext): Promise<MsgAddIidContextResponse>;
  deactivateIID(request: MsgDeactivateIID): Promise<MsgDeactivateIIDResponse>;
  deleteIidContext(request: MsgDeleteIidContext): Promise<MsgDeleteIidContextResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createIidDocument = this.createIidDocument.bind(this);
    this.updateIidDocument = this.updateIidDocument.bind(this);
    this.addVerification = this.addVerification.bind(this);
    this.revokeVerification = this.revokeVerification.bind(this);
    this.setVerificationRelationships = this.setVerificationRelationships.bind(this);
    this.addService = this.addService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    this.addController = this.addController.bind(this);
    this.deleteController = this.deleteController.bind(this);
    this.addLinkedResource = this.addLinkedResource.bind(this);
    this.deleteLinkedResource = this.deleteLinkedResource.bind(this);
    this.addLinkedClaim = this.addLinkedClaim.bind(this);
    this.deleteLinkedClaim = this.deleteLinkedClaim.bind(this);
    this.addLinkedEntity = this.addLinkedEntity.bind(this);
    this.deleteLinkedEntity = this.deleteLinkedEntity.bind(this);
    this.addAccordedRight = this.addAccordedRight.bind(this);
    this.deleteAccordedRight = this.deleteAccordedRight.bind(this);
    this.addIidContext = this.addIidContext.bind(this);
    this.deactivateIID = this.deactivateIID.bind(this);
    this.deleteIidContext = this.deleteIidContext.bind(this);
  }
  createIidDocument(request: MsgCreateIidDocument): Promise<MsgCreateIidDocumentResponse> {
    const data = MsgCreateIidDocument.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "CreateIidDocument", data);
    return promise.then(data => MsgCreateIidDocumentResponse.decode(new _m0.Reader(data)));
  }
  updateIidDocument(request: MsgUpdateIidDocument): Promise<MsgUpdateIidDocumentResponse> {
    const data = MsgUpdateIidDocument.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "UpdateIidDocument", data);
    return promise.then(data => MsgUpdateIidDocumentResponse.decode(new _m0.Reader(data)));
  }
  addVerification(request: MsgAddVerification): Promise<MsgAddVerificationResponse> {
    const data = MsgAddVerification.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddVerification", data);
    return promise.then(data => MsgAddVerificationResponse.decode(new _m0.Reader(data)));
  }
  revokeVerification(request: MsgRevokeVerification): Promise<MsgRevokeVerificationResponse> {
    const data = MsgRevokeVerification.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "RevokeVerification", data);
    return promise.then(data => MsgRevokeVerificationResponse.decode(new _m0.Reader(data)));
  }
  setVerificationRelationships(request: MsgSetVerificationRelationships): Promise<MsgSetVerificationRelationshipsResponse> {
    const data = MsgSetVerificationRelationships.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "SetVerificationRelationships", data);
    return promise.then(data => MsgSetVerificationRelationshipsResponse.decode(new _m0.Reader(data)));
  }
  addService(request: MsgAddService): Promise<MsgAddServiceResponse> {
    const data = MsgAddService.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddService", data);
    return promise.then(data => MsgAddServiceResponse.decode(new _m0.Reader(data)));
  }
  deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse> {
    const data = MsgDeleteService.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteService", data);
    return promise.then(data => MsgDeleteServiceResponse.decode(new _m0.Reader(data)));
  }
  addController(request: MsgAddController): Promise<MsgAddControllerResponse> {
    const data = MsgAddController.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddController", data);
    return promise.then(data => MsgAddControllerResponse.decode(new _m0.Reader(data)));
  }
  deleteController(request: MsgDeleteController): Promise<MsgDeleteControllerResponse> {
    const data = MsgDeleteController.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteController", data);
    return promise.then(data => MsgDeleteControllerResponse.decode(new _m0.Reader(data)));
  }
  addLinkedResource(request: MsgAddLinkedResource): Promise<MsgAddLinkedResourceResponse> {
    const data = MsgAddLinkedResource.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddLinkedResource", data);
    return promise.then(data => MsgAddLinkedResourceResponse.decode(new _m0.Reader(data)));
  }
  deleteLinkedResource(request: MsgDeleteLinkedResource): Promise<MsgDeleteLinkedResourceResponse> {
    const data = MsgDeleteLinkedResource.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteLinkedResource", data);
    return promise.then(data => MsgDeleteLinkedResourceResponse.decode(new _m0.Reader(data)));
  }
  addLinkedClaim(request: MsgAddLinkedClaim): Promise<MsgAddLinkedClaimResponse> {
    const data = MsgAddLinkedClaim.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddLinkedClaim", data);
    return promise.then(data => MsgAddLinkedClaimResponse.decode(new _m0.Reader(data)));
  }
  deleteLinkedClaim(request: MsgDeleteLinkedClaim): Promise<MsgDeleteLinkedClaimResponse> {
    const data = MsgDeleteLinkedClaim.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteLinkedClaim", data);
    return promise.then(data => MsgDeleteLinkedClaimResponse.decode(new _m0.Reader(data)));
  }
  addLinkedEntity(request: MsgAddLinkedEntity): Promise<MsgAddLinkedEntityResponse> {
    const data = MsgAddLinkedEntity.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddLinkedEntity", data);
    return promise.then(data => MsgAddLinkedEntityResponse.decode(new _m0.Reader(data)));
  }
  deleteLinkedEntity(request: MsgDeleteLinkedEntity): Promise<MsgDeleteLinkedEntityResponse> {
    const data = MsgDeleteLinkedEntity.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteLinkedEntity", data);
    return promise.then(data => MsgDeleteLinkedEntityResponse.decode(new _m0.Reader(data)));
  }
  addAccordedRight(request: MsgAddAccordedRight): Promise<MsgAddAccordedRightResponse> {
    const data = MsgAddAccordedRight.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddAccordedRight", data);
    return promise.then(data => MsgAddAccordedRightResponse.decode(new _m0.Reader(data)));
  }
  deleteAccordedRight(request: MsgDeleteAccordedRight): Promise<MsgDeleteAccordedRightResponse> {
    const data = MsgDeleteAccordedRight.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteAccordedRight", data);
    return promise.then(data => MsgDeleteAccordedRightResponse.decode(new _m0.Reader(data)));
  }
  addIidContext(request: MsgAddIidContext): Promise<MsgAddIidContextResponse> {
    const data = MsgAddIidContext.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "AddIidContext", data);
    return promise.then(data => MsgAddIidContextResponse.decode(new _m0.Reader(data)));
  }
  deactivateIID(request: MsgDeactivateIID): Promise<MsgDeactivateIIDResponse> {
    const data = MsgDeactivateIID.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeactivateIID", data);
    return promise.then(data => MsgDeactivateIIDResponse.decode(new _m0.Reader(data)));
  }
  deleteIidContext(request: MsgDeleteIidContext): Promise<MsgDeleteIidContextResponse> {
    const data = MsgDeleteIidContext.encode(request).finish();
    const promise = this.rpc.request("ixo.iid.v1beta1.Msg", "DeleteIidContext", data);
    return promise.then(data => MsgDeleteIidContextResponse.decode(new _m0.Reader(data)));
  }
}