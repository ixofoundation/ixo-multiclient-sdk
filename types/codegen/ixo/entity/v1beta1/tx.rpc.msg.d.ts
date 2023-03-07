import { Rpc } from "../../../helpers";
import { MsgCreateEntity, MsgCreateEntityResponse, MsgUpdateEntity, MsgUpdateEntityResponse, MsgUpdateEntityVerified, MsgUpdateEntityVerifiedResponse, MsgTransferEntity, MsgTransferEntityResponse, MsgCreateEntityAccount, MsgCreateEntityAccountResponse, MsgGrantEntityAccountAuthz, MsgGrantEntityAccountAuthzResponse } from "./tx";
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
    /** Create a authz grant from entity account */
    grantEntityAccountAuthz(request: MsgGrantEntityAccountAuthz): Promise<MsgGrantEntityAccountAuthzResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
    updateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
    updateEntityVerified(request: MsgUpdateEntityVerified): Promise<MsgUpdateEntityVerifiedResponse>;
    transferEntity(request: MsgTransferEntity): Promise<MsgTransferEntityResponse>;
    createEntityAccount(request: MsgCreateEntityAccount): Promise<MsgCreateEntityAccountResponse>;
    grantEntityAccountAuthz(request: MsgGrantEntityAccountAuthz): Promise<MsgGrantEntityAccountAuthzResponse>;
}
