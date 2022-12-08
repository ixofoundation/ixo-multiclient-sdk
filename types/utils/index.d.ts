import * as _3 from "./fromMm";
export declare namespace utils {
    const conversions: {
        Uint8ArrayToJS(data: Uint8Array): string;
        JsonToArray: (json: string) => Uint8Array;
        concatArrayBuffers: (...bufs: Uint8Array[]) => Uint8Array;
    };
    const did: {
        generateSecpDid(pubkey: string, prefix?: string): string;
    };
    const mnemonic: {
        Bip39: typeof _3.Bip39;
        EnglishMnemonic: typeof _3.EnglishMnemonic;
        generateMnemonic: (length?: 12 | 15 | 18 | 21 | 24) => string;
    };
    const address: {
        pubKeyToAddress: (type: "ed25519" | "secp256k1", pubKey: string | Uint8Array, prefix?: string) => string;
    };
    const common: {
        generateId: (length?: number) => string;
        getValueFromEvents: (res: import("@cosmjs/stargate").DeliverTxResponse, event: string, attribute: string, logError?: boolean, throwError?: boolean) => any;
    };
}
