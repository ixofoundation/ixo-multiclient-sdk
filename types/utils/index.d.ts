import * as _3 from "./fromMm";
import * as _6 from "./proto";
export declare namespace utils {
    const conversions: {
        Uint8ArrayToJS(data: Uint8Array): string;
        b64toUint8Array: (b64: string) => Uint8Array<ArrayBuffer>;
        b64toJson: (b64: string) => any;
        Uint8ArrayTob64: (u8: Uint8Array) => string;
        JsonToArray: (json: string) => Uint8Array<ArrayBuffer>;
        concatArrayBuffers: (...bufs: Uint8Array[]) => Uint8Array<ArrayBuffer>;
        jsonStringToBase64: (jsonString: string) => string;
        jsonToBase64: (json: unknown) => string;
        encodeMbKey: (header: Uint8Array, key: Uint8Array) => string;
        decodeMbKey: (header: Uint8Array, mbKey: string) => Uint8Array<ArrayBuffer>;
    };
    const did: {
        generateSecpDid(address: string): string;
        generateSecpDidLegacy(pubkey: string | Uint8Array, prefix?: string): string;
        extractPubkeyFromDid(did: string): string;
        generateWasmDid(address: string): string;
    };
    const mnemonic: {
        Bip39: typeof _3.Bip39;
        EnglishMnemonic: typeof _3.EnglishMnemonic;
        generateMnemonic: (length?: 12 | 15 | 18 | 21 | 24) => string;
    };
    const address: {
        pubKeyToAddress: (type: "ed25519" | "secp256k1", pubKey: Uint8Array | string, prefix?: string) => string;
        didToAddress: (did: string, prefix?: string) => string;
        didToAddressDid: (did: string, prefix?: string) => string;
    };
    const common: {
        generateId: (length?: number) => string;
        getValueFromEvents: (res: import("@cosmjs/stargate").DeliverTxResponse, event: string, attribute: string, filterFunc?: (s: any) => any, logError?: boolean, throwError?: boolean, messageIndex?: number) => any;
        getValuesFromEvents: (res: import("@cosmjs/stargate").DeliverTxResponse, event: string, attribute: string, filterFunc?: (s: any) => any, logError?: boolean, throwError?: boolean) => any[];
    };
    const proto: {
        toDuration(duration: string): _6.Duration;
        fromDuration(duration: _6.Duration): string;
        toTimestamp(date: Date): _6.Timestamp;
        fromTimestamp(t: _6.Timestamp): Date;
        numberToLong(number: number): import("long");
    };
    const constants: {
        MULTIBASE_BASE58BTC_HEADER: "z";
        MULTICODEC_ED25519_PUB_HEADER: Uint8Array<ArrayBuffer>;
        MULTICODEC_ED25519_PRIV_HEADER: Uint8Array<ArrayBuffer>;
        MULTICODEC_SECP256K1_PUB_HEADER: Uint8Array<ArrayBuffer>;
        MULTICODEC_SECP256K1_PRIV_HEADER: Uint8Array<ArrayBuffer>;
    };
}
