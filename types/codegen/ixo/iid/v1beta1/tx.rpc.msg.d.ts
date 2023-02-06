import { Rpc } from "../../../helpers";
import { MsgCreateIidDocument, MsgCreateIidDocumentResponse, MsgUpdateIidDocument, MsgUpdateIidDocumentResponse, MsgAddVerification, MsgAddVerificationResponse, MsgRevokeVerification, MsgRevokeVerificationResponse, MsgSetVerificationRelationships, MsgSetVerificationRelationshipsResponse, MsgAddService, MsgAddServiceResponse, MsgDeleteService, MsgDeleteServiceResponse, MsgAddController, MsgAddControllerResponse, MsgDeleteController, MsgDeleteControllerResponse, MsgAddLinkedResource, MsgAddLinkedResourceResponse, MsgDeleteLinkedResource, MsgDeleteLinkedResourceResponse, MsgAddLinkedEntity, MsgAddLinkedEntityResponse, MsgDeleteLinkedEntity, MsgDeleteLinkedEntityResponse, MsgAddAccordedRight, MsgAddAccordedRightResponse, MsgDeleteAccordedRight, MsgDeleteAccordedRightResponse, MsgAddIidContext, MsgAddIidContextResponse, MsgDeactivateIID, MsgDeactivateIIDResponse, MsgDeleteIidContext, MsgDeleteIidContextResponse } from "./tx";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createIidDocument(request: MsgCreateIidDocument): Promise<MsgCreateIidDocumentResponse>;
    updateIidDocument(request: MsgUpdateIidDocument): Promise<MsgUpdateIidDocumentResponse>;
    addVerification(request: MsgAddVerification): Promise<MsgAddVerificationResponse>;
    revokeVerification(request: MsgRevokeVerification): Promise<MsgRevokeVerificationResponse>;
    setVerificationRelationships(request: MsgSetVerificationRelationships): Promise<MsgSetVerificationRelationshipsResponse>;
    addService(request: MsgAddService): Promise<MsgAddServiceResponse>;
    deleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
    addController(request: MsgAddController): Promise<MsgAddControllerResponse>;
    deleteController(request: MsgDeleteController): Promise<MsgDeleteControllerResponse>;
    addLinkedResource(request: MsgAddLinkedResource): Promise<MsgAddLinkedResourceResponse>;
    deleteLinkedResource(request: MsgDeleteLinkedResource): Promise<MsgDeleteLinkedResourceResponse>;
    addLinkedEntity(request: MsgAddLinkedEntity): Promise<MsgAddLinkedEntityResponse>;
    deleteLinkedEntity(request: MsgDeleteLinkedEntity): Promise<MsgDeleteLinkedEntityResponse>;
    addAccordedRight(request: MsgAddAccordedRight): Promise<MsgAddAccordedRightResponse>;
    deleteAccordedRight(request: MsgDeleteAccordedRight): Promise<MsgDeleteAccordedRightResponse>;
    addIidContext(request: MsgAddIidContext): Promise<MsgAddIidContextResponse>;
    deactivateIID(request: MsgDeactivateIID): Promise<MsgDeactivateIIDResponse>;
    deleteIidContext(request: MsgDeleteIidContext): Promise<MsgDeleteIidContextResponse>;
}
