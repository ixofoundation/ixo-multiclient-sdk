import { ChainNetwork } from "./chain.types";
export declare const getContractCodes: (chainNetwork: ChainNetwork, category?: "ixo" | "daodao") => {
    name: string;
    code: any;
}[];
