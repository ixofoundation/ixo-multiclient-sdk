import { Rpc } from "../../../helpers";
import { MsgCreateToken, MsgCreateTokenResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    /** CreateProject defines a method for creating a project. */
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    /** Transfers an token and its nft to the recipient */
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
