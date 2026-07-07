import * as _2 from "./cellnode";
export declare namespace customQueries {
    const currency: {
        findTokenFromDenom: (denom: string) => import("./currency.types").TokenAsset | undefined;
        findIbcTokenFromHash: (queryClient: import("..").QueryClient, ibcHash: string) => Promise<import("./currency.types").IbcTokenAsset | undefined>;
        findIbcTokensFromHashes: (queryClient: import("..").QueryClient, ibcHashes: string[]) => Promise<Array<import("./currency.types").IbcTokenAsset | undefined>>;
        findTokenInfoFromDenom: (denom: string, cacheResult?: boolean, baseUrl?: string) => Promise<import("./currency.types").TokenAssetInfo | undefined>;
        findTokensInfoFromDenoms: (denoms: string[]) => Promise<Array<import("./currency.types").TokenAssetInfo | undefined>>;
        findTokenHistoryFromDenom: (denom: string, startDate: string, endDate: string, samples?: number, cacheResult?: boolean, baseUrl?: string) => Promise<import("./currency.types").TokenAssetHistory | undefined>;
        findTokensHistoryFromDenoms: (denoms: string[], startDate: string, endDate: string, samples?: number, cacheResult?: boolean) => Promise<Array<import("./currency.types").TokenAssetHistory | undefined>>;
    };
    const cellnode: {
        cellNodeChainMapping: { [network in import("./chain.types").ChainNetwork]: string; };
        getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_2.CellnodePublicResource>;
        getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<any>;
        uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: import("./chain.types").ChainNetwork) => Promise<_2.CellnodeWeb3Resource>;
    };
    const contract: {
        getContractCodes: (chainNetwork: import("./chain.types").ChainNetwork, category?: "ixo" | "daodao") => {
            name: string;
            code?: number;
        }[];
        getContractCode: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => number | undefined;
        getContractAddress: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => string | undefined;
        getContractData: (chainNetwork: import("./chain.types").ChainNetwork, contractName: string) => {
            code: number;
            address: string;
            name: string;
            path: string[];
            category: string;
        };
    };
    const comet: {
        blockResults: (height: number, endpoint: string, includeResults?: boolean) => Promise<import("../utils/tendermintClientHelpers").BlockResultsResponse>;
    };
}
