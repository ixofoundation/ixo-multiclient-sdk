export declare namespace customQueries {
    const chain: {
        getRegistryChainInfo: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").RegistryChainInfo>;
        getActiveRpcFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getActiveRestFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => string;
        getActiveRestFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getKeplrChainInfoFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => import("./chain.types").KeplrChainInfo;
        getKeplrChainInfoFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").KeplrChainInfo>;
    };
}
