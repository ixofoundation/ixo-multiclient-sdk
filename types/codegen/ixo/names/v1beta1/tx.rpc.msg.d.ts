import { Rpc } from "../../../helpers";
import { MsgCreateNamespace, MsgCreateNamespaceResponse, MsgUpdateNamespace, MsgUpdateNamespaceResponse, MsgRegisterName, MsgRegisterNameResponse, MsgRegisterNameByRegistrar, MsgRegisterNameByRegistrarResponse, MsgUpdateNameByRegistrar, MsgUpdateNameByRegistrarResponse, MsgTransferName, MsgTransferNameResponse, MsgSetNameStatus, MsgSetNameStatusResponse } from "./tx";
/** Msg defines the names module Msg service. */
export interface Msg {
    /** CreateNamespace creates a new namespace. Authority-only (gov). */
    createNamespace(request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse>;
    /**
     * UpdateNamespace replaces an existing namespace's configuration.
     * Authority-only (gov). All Namespace fields supplied in the message become
     * the new state.
     */
    updateNamespace(request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse>;
    /**
     * RegisterName lets a user register a name in a namespace that allows
     * self-registration. The signer must control owner_did.
     */
    registerName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
    /**
     * RegisterNameByRegistrar lets a registrar register a name on behalf of
     * owner_did. The signer must be a registrar of the namespace.
     */
    registerNameByRegistrar(request: MsgRegisterNameByRegistrar): Promise<MsgRegisterNameByRegistrarResponse>;
    /**
     * UpdateNameByRegistrar lets a registrar update the verification metadata
     * (verified flag, verified_by, evidence_hash, source) of an existing record.
     * The signer must be a registrar of the namespace. Owner DID is not
     * changed by this message; use TransferName for that.
     */
    updateNameByRegistrar(request: MsgUpdateNameByRegistrar): Promise<MsgUpdateNameByRegistrarResponse>;
    /**
     * TransferName transfers ownership of a name to another DID. Permitted for
     * the current owner; permitted for a registrar when the namespace has
     * allow_registrar_override = true.
     */
    transferName(request: MsgTransferName): Promise<MsgTransferNameResponse>;
    /**
     * SetNameStatus changes the lifecycle status of a name (suspend, revoke,
     * tombstone, or restore to active). Permitted for registrars and the
     * governance authority.
     */
    setNameStatus(request: MsgSetNameStatus): Promise<MsgSetNameStatusResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createNamespace(request: MsgCreateNamespace): Promise<MsgCreateNamespaceResponse>;
    updateNamespace(request: MsgUpdateNamespace): Promise<MsgUpdateNamespaceResponse>;
    registerName(request: MsgRegisterName): Promise<MsgRegisterNameResponse>;
    registerNameByRegistrar(request: MsgRegisterNameByRegistrar): Promise<MsgRegisterNameByRegistrarResponse>;
    updateNameByRegistrar(request: MsgUpdateNameByRegistrar): Promise<MsgUpdateNameByRegistrarResponse>;
    transferName(request: MsgTransferName): Promise<MsgTransferNameResponse>;
    setNameStatus(request: MsgSetNameStatus): Promise<MsgSetNameStatusResponse>;
}
