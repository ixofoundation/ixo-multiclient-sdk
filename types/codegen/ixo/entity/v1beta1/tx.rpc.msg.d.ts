import { Rpc } from "../../../helpers";
import { MsgCreateEntity, MsgCreateEntityResponse, MsgUpdateEntity, MsgUpdateEntityResponse, MsgTransferEntity, MsgTransferEntityResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    /** CreateProject defines a method for creating a project. */
    createEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
    /** UpdateEntityStatus defines a method for updating a entity's current status. */
    updateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
    /** Transfers an entity and its nft to the recipient */
    transferEntity(request: MsgTransferEntity): Promise<MsgTransferEntityResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
    updateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
    transferEntity(request: MsgTransferEntity): Promise<MsgTransferEntityResponse>;
}
