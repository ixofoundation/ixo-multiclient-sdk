import * as _3 from "./cellnode";
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
    const cellnode: {
        cellNodeChainMapping: {
            testnet: string;
            devnet: string;
            mainnet: string;
        };
        getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodePublicResource>;
        uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodePublicResource>;
        getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodeWeb3Resource>;
        uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodeWeb3Resource>;
    };
}
