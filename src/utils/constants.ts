// multibase base58-btc header
export const MULTIBASE_BASE58BTC_HEADER = "z";
// multicodec ed25519-pub header as varint
export const MULTICODEC_ED25519_PUB_HEADER = new Uint8Array([0xed, 0x01]);
// multicodec ed25519-priv header as varint
export const MULTICODEC_ED25519_PRIV_HEADER = new Uint8Array([0x80, 0x26]);
// multicodec secp256k1-pub header as varint
export const MULTICODEC_SECP256K1_PUB_HEADER = new Uint8Array([0xe7, 0x01]);
// multicodec secp256k1-priv header as varint
export const MULTICODEC_SECP256K1_PRIV_HEADER = new Uint8Array([0xe7, 0x01]);
