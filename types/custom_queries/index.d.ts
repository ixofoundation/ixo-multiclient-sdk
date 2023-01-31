export declare namespace customQueries {
    const chain: {
        getChainInfoFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").ChainInfo>;
        getActiveRpcFromChainInfo: (chainInfo: import("./chain.types").ChainInfo) => string;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
    };
}
