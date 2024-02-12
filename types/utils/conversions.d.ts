export declare const b64toUint8Array: (b64: string) => Uint8Array;
export declare const b64toJson: (b64: string) => any;
export declare const Uint8ArrayTob64: (u8: Uint8Array) => string;
export declare const JsonToArray: (json: string) => Uint8Array;
export declare function Uint8ArrayToJS(data: Uint8Array): string;
export declare const concatArrayBuffers: (...bufs: Uint8Array[]) => Uint8Array;
export declare const jsonStringToBase64: (jsonString: string) => string;
export declare const jsonToBase64: (json: unknown) => string;
/**
 * encode a multibase base58-btc multicodec key
 *
 * @param header Uint8Array header for multicodec encoding
 * @param key Uint8Array of key encoding
 */
export declare const encodeMbKey: (header: Uint8Array, key: Uint8Array) => string;
