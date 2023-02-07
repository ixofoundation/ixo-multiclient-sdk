export declare const createRpcQueryExtension: (rpcEndpoint: string) => Promise<{
    entity: {
        getEntityContext: ({ id }: {
            id: string;
        }) => Promise<import("../codegen/ixo/entity/v1beta1/query").QueryEntityResponse>;
    };
}>;
