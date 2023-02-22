import { Rpc } from "../../../helpers";
import { MsgCreateToken, MsgCreateTokenResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse, MsgRetireToken, MsgRetireTokenResponse, MsgCancelToken, MsgCancelTokenResponse, MsgPauseToken, MsgPauseTokenResponse, MsgStopToken, MsgStopTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
    retireToken(request: MsgRetireToken): Promise<MsgRetireTokenResponse>;
    cancelToken(request: MsgCancelToken): Promise<MsgCancelTokenResponse>;
    pauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse>;
    stopToken(request: MsgStopToken): Promise<MsgStopTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createToken(request: MsgCreateToken): Promise<MsgCreateTokenResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
    retireToken(request: MsgRetireToken): Promise<MsgRetireTokenResponse>;
    cancelToken(request: MsgCancelToken): Promise<MsgCancelTokenResponse>;
    pauseToken(request: MsgPauseToken): Promise<MsgPauseTokenResponse>;
    stopToken(request: MsgStopToken): Promise<MsgStopTokenResponse>;
}
