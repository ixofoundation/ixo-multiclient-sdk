import { Rpc } from "../../../helpers";
import { MsgSetupMinter, MsgSetupMinterResponse, MsgMint, MsgMintResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    /** CreateProject defines a method for creating a project. */
    setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
    mintToken(request: MsgMint): Promise<MsgMintResponse>;
    /** Transfers an token and its nft to the recipient */
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
    mintToken(request: MsgMint): Promise<MsgMintResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
