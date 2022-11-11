export declare const createRpcQueryExtension: (rpcEndpoint: string) => Promise<{
    entity: {
        getEntityContext: ({ entityDid }: {
            entityDid: string;
        }) => Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityDocResponse>;
    };
}>;
