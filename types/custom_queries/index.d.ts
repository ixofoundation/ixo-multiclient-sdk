export declare namespace customQueries {
    const chain: {
        getChainInfoFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").RegistryChainInfo>;
        getActiveRpcFromChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getActiveRestFromChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRestFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getKeplrChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => import("./chain.types").KeplrChainInfo;
    };
}
