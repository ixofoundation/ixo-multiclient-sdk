import { Rpc } from "../../../helpers";
import { MsgAddAuthenticator, MsgAddAuthenticatorResponse, MsgRemoveAuthenticator, MsgRemoveAuthenticatorResponse, MsgSetActiveState, MsgSetActiveStateResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    addAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    removeAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    /**
     * SetActiveState sets the active state of the authenticator.
     * Primarily used for circuit breaking.
     */
    setActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addAuthenticator(request: MsgAddAuthenticator): Promise<MsgAddAuthenticatorResponse>;
    removeAuthenticator(request: MsgRemoveAuthenticator): Promise<MsgRemoveAuthenticatorResponse>;
    setActiveState(request: MsgSetActiveState): Promise<MsgSetActiveStateResponse>;
}
