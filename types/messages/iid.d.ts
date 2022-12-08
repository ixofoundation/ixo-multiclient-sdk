/**
 * Only use SECP generated creds!!!
 */
export declare const createVerificationMethod: (did: string, pubkey: Uint8Array, controller: string) => import("../codegen/ixo/iid/v1beta1/iid").VerificationMethod;
declare type createIidVerificationMethodsProps = {
    did: string;
    pubkey: Uint8Array;
    address: string;
    controller: string;
};
/**
 * Only use SECP generated user creds!!!
 */
export declare const createIidVerificationMethods: ({ did, pubkey, controller, address, }: createIidVerificationMethodsProps) => import("../codegen/ixo/iid/v1beta1/tx").Verification[];
export declare const createAgentIidContext: () => import("../codegen/ixo/iid/v1beta1/iid").Context[];
export {};
