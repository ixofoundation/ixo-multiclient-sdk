export declare namespace customQueries {
    const chain: {
        getChainRegistryInfo: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").RegistryChainInfo>;
        getActiveRpcFromChainRegistryInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getActiveRestFromChainRegistryInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRestFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getChainKeplrInfoFromChainRegistryInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => import("./chain.types").KeplrChainInfo;
        getKeplrChainInfoFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").KeplrChainInfo>;
    };
}
