import { Rpc } from "../../../helpers";
import { MsgCreateToken, MsgCreateTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
