import * as _3 from "./cellnode";
export declare namespace customQueries {
    const chain: {
        getRegistryChainInfo: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").RegistryChainInfo>;
        getActiveRpcFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => Promise<string>;
        getActiveRpcFromChainName: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<string>;
        getKeplrChainInfoFromRegistryChainInfo: (chainInfo: import("./chain.types").RegistryChainInfo) => Promise<import("./chain.types").KeplrChainInfo>;
        getKeplrChainInfo: (chainName: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<import("./chain.types").KeplrChainInfo>;
    };
    const currency: {
        prepareKeplrChainInfoTokenAssets: (chainInfo: import("./chain.types").KeplrChainInfo) => import("./chain.types").KeplrChainInfo;
        findTokenFromDenom: (denom: string) => import("./currency.types").TokenAsset;
    };
    const cellnode: {
        cellNodeChainMapping: {
            testnet: string;
            devnet: string;
            mainnet: string;
        };
        getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodePublicResource>;
        getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_3.CellnodeWeb3Resource>;
    };
    const contract: {
        getContractCodes: (chainNetwork: import("./chain.types").ChainNetwork, category?: "ixo" | "daodao") => {
            name: string;
            code: any;
        }[];
    };
}
