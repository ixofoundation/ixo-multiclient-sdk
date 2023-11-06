import { ChainNetwork } from "./chain.types";
export declare const getContractCodes: (chainNetwork: ChainNetwork, category?: "ixo" | "daodao") => {
    name: string;
    code?: number;
}[];
export declare const getContractCode: (chainNetwork: ChainNetwork, contractName: string) => number | undefined;
export declare const getContractAddress: (chainNetwork: ChainNetwork, contractName: string) => string | undefined;
export declare const getContractData: (chainNetwork: ChainNetwork, contractName: string) => {
    code: number;
    address: string;
    name: string;
    path: string[];
    category: string;
};
