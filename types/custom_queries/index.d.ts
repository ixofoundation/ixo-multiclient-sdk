export declare namespace customQueries {
    const chain: {
        getRegistryChainInfo: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").RegistryChainInfo>;
        getActiveRpcFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => Promise<string>;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getKeplrChainInfoFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => Promise<import("./chain.types").KeplrChainInfo>;
        getKeplrChainInfoFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").KeplrChainInfo>;
    };
    const currency: {
        findTokenFromDenom: (denom: string) => import("./chain.types").TokenAsset;
    };
}
