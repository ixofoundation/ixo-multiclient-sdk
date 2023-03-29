import * as _3 from "./fromMm";
import * as _6 from "./proto";
export declare namespace utils {
    const conversions: {
        Uint8ArrayToJS(data: Uint8Array): string;
        JsonToArray: (json: string) => Uint8Array;
        concatArrayBuffers: (...bufs: Uint8Array[]) => Uint8Array;
        jsonStringToBase64: (jsonString: string) => string;
        jsonToBase64: (json: unknown) => string;
    };
    const did: {
        generateSecpDid(pubkey: string | Uint8Array, prefix?: string): string;
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
        getValueFromEvents: (res: import("@cosmjs/stargate").DeliverTxResponse, event: string, attribute: string, filterFunc?: (s: any) => any, logError?: boolean, throwError?: boolean) => any;
    };
    const proto: {
        toDuration(duration: string): _6.Duration;
        fromDuration(duration: _6.Duration): string;
        toTimestamp(date: Date): _6.Timestamp;
        fromTimestamp(t: _6.Timestamp): Date;
        numberToLong(number: number): import("long");
    };
}
