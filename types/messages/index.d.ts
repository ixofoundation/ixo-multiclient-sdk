import * as _1 from "./iid";
export declare namespace customMessages {
    const iid: {
        createVerificationMethod: (did: string, pubkey: Uint8Array, controller: string, type?: _1.KeyTypes) => import("../codegen/ixo/iid/v1beta1/types").VerificationMethod;
        createIidVerificationMethods: ({ did, pubkey, controller, address, type, }: {
            did: string;
            pubkey: Uint8Array;
            address: string;
            controller: string;
            type?: _1.KeyTypes;
        }) => import("../codegen/ixo/iid/v1beta1/tx").Verification[];
        createAgentIidContext: (contexts?: [{
            key: string;
            val: string;
        }]) => import("../codegen/ixo/iid/v1beta1/types").Context[];
    };
}
