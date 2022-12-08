export declare namespace customMessages {
    const iid: {
        createVerificationMethod: (did: string, pubkey: Uint8Array, controller: string) => import("../codegen/ixo/iid/v1beta1/iid").VerificationMethod;
        createIidVerificationMethods: ({ did, pubkey, controller, address, }: {
            did: string;
            pubkey: Uint8Array;
            address: string;
            controller: string;
        }) => import("../codegen/ixo/iid/v1beta1/tx").Verification[];
        createAgentIidContext: () => import("../codegen/ixo/iid/v1beta1/iid").Context[];
    };
}
