import * as _3 from "./fromMm";
export declare namespace utils {
    const conversions: {
        Uint8ArrayToJS(data: Uint8Array): string;
        JsonToArray: (json: string) => Uint8Array;
    };
    const did: {
        generateSecpDid(pubkey: string, prefix?: string): string;
    };
    const mnemonic: {
        Bip39: typeof _3.Bip39;
        EnglishMnemonic: typeof _3.EnglishMnemonic;
        generateMnemonic: (length?: 12 | 15 | 18 | 21 | 24) => string;
    };
}
