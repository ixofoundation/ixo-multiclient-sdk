import { ChainNetwork } from "./chain.types";
export declare type CellnodePublicResource = {
    key: string;
    contentType: string;
    data: string;
    url: string;
};
export declare type CellnodeWeb3Resource = {
    cid: string;
    name: string;
    ipfs: string;
    url: string;
};
export declare const cellNodeChainMapping: {
    [network in ChainNetwork]: string;
};
export declare const getPublicDoc: (cid: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<any>;
export declare const uploadPublicDoc: (contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<CellnodePublicResource>;
export declare const getWeb3Doc: (cid: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<any>;
export declare const uploadWeb3Doc: (name: string, contentType: string, data: string, cellnodeUrl?: string, chainNetwork?: ChainNetwork) => Promise<CellnodeWeb3Resource>;
