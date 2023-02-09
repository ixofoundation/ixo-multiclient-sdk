import { Rpc } from "../../../helpers";
import { MsgSetupMinter, MsgSetupMinterResponse, MsgMintToken, MsgMintTokenResponse, MsgTransferToken, MsgTransferTokenResponse } from "./tx";
/** Msg defines the project Msg service. */
export interface Msg {
    /** SetupMinter defines a method for setting up a minter */
    setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    /** Transfers a token and its nft to the recipient */
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    setupMinter(request: MsgSetupMinter): Promise<MsgSetupMinterResponse>;
    mintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    transferToken(request: MsgTransferToken): Promise<MsgTransferTokenResponse>;
}
