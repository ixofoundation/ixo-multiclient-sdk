export declare const contracts: ({
    name: string;
    path: string[];
    category: string;
    code: {
        devnet: number;
        testnet: number;
        mainnet: number;
    };
    address?: undefined;
} | {
    name: string;
    path: string[];
    category: string;
    code: {
        devnet: number;
        testnet: number;
        mainnet: number;
    };
    address: {
        devnet: string;
        testnet: string;
        mainnet: string;
    };
})[];
