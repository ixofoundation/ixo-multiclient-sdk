export declare type KeyTypes = "ed" | "secp";
/**
 * Only use SECP generated creds!!!
 */
export declare const createVerificationMethod: (did: string, pubkey: Uint8Array, controller: string, type?: KeyTypes) => import("../codegen/ixo/iid/v1beta1/types").VerificationMethod;
declare type createIidVerificationMethodsProps = {
    did: string;
    pubkey: Uint8Array;
    address: string;
    controller: string;
    type?: KeyTypes;
};
/**
 * Only use SECP generated user creds!!!
 */
export declare const createIidVerificationMethods: ({ did, pubkey, controller, address, type, }: createIidVerificationMethodsProps) => import("../codegen/ixo/iid/v1beta1/tx").Verification[];
export declare const createAgentIidContext: (contexts?: [{
    key: string;
    val: string;
}]) => import("../codegen/ixo/iid/v1beta1/iid").Context[];
export {};
