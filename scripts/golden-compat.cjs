/**
 * Golden compatibility check for dependency upgrades.
 *
 * Derives a set of deterministic cryptographic values (addresses, seeds,
 * signatures, proto encodings) from a fixed PUBLIC test mnemonic using the
 * built SDK (main/) and its installed dependencies.
 *
 * Usage:
 *   node scripts/golden-compat.cjs capture <file.json>   # write current values
 *   node scripts/golden-compat.cjs compare <file.json>   # diff current values against file
 *
 * If `compare` reports any difference after a dependency upgrade, the upgrade
 * CHANGED CRYPTOGRAPHIC BEHAVIOR (addresses/signatures) and must not ship.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

// public test mnemonic from .env.example — never use with real funds
const MNEMONIC =
  "mango tattoo civil foam frog wheat venue rebuild cloth example alien taste";

async function main() {
  const sdk = require(path.join(__dirname, "..", "main"));
  const { DirectSecp256k1HdWallet } = require("@cosmjs/proto-signing");
  const { Secp256k1HdWallet, serializeSignDoc, makeSignDoc: makeSignDocAmino } = require("@cosmjs/amino");
  const { makeAuthInfoBytes, makeSignDoc, encodePubkey } = require("@cosmjs/proto-signing");
  const { Ed25519, Secp256k1, sha256 } = require("@cosmjs/crypto");
  const { toHex, toBase64, toBech32, fromHex } = require("@cosmjs/encoding");

  const out = {};

  // 1. BIP39: mnemonic -> seed & entropy (bip39-light vs @scure/bip39)
  const mnemonicObj = new sdk.utils.mnemonic.EnglishMnemonic(MNEMONIC);
  out.bip39_seed = toHex(await sdk.utils.mnemonic.Bip39.mnemonicToSeed(mnemonicObj));
  out.bip39_seed_with_password = toHex(
    await sdk.utils.mnemonic.Bip39.mnemonicToSeed(mnemonicObj, "test-passphrase")
  );
  out.bip39_entropy = toHex(sdk.utils.mnemonic.Bip39.decode(mnemonicObj));
  out.bip39_reencoded = sdk.utils.mnemonic.Bip39.encode(
    fromHex(out.bip39_entropy)
  ).toString();

  // 2. secp256k1 HD wallet: mnemonic -> ixo address + pubkey (direct + amino wallets)
  const directWallet = await DirectSecp256k1HdWallet.fromMnemonic(MNEMONIC, { prefix: "ixo" });
  const [directAccount] = await directWallet.getAccounts();
  out.secp_address = directAccount.address;
  out.secp_pubkey = toBase64(directAccount.pubkey);

  const aminoWallet = await Secp256k1HdWallet.fromMnemonic(MNEMONIC, { prefix: "ixo" });
  const [aminoAccount] = await aminoWallet.getAccounts();
  out.secp_address_amino = aminoAccount.address;

  // 3. DIDs from utils
  out.did_secp = sdk.utils.did.generateSecpDid(directAccount.address);
  out.did_secp_legacy = sdk.utils.did.generateSecpDidLegacy(directAccount.pubkey, "ixo");

  // 4. ed25519: fixed seed -> pubkey + deterministic signature
  const edSeed = sha256(new TextEncoder().encode("ixo-golden-ed25519-seed"));
  const edKeypair = await Ed25519.makeKeypair(edSeed);
  out.ed25519_pubkey = toHex(edKeypair.pubkey);
  const edMsg = new TextEncoder().encode("ixo golden message");
  out.ed25519_signature = toHex(await Ed25519.createSignature(edMsg, edKeypair));

  // 5. secp256k1 low-level deterministic signature (RFC 6979)
  const secpPrivkey = sha256(new TextEncoder().encode("ixo-golden-secp-key"));
  const msgHash = sha256(new TextEncoder().encode("ixo golden tx"));
  const secpSig = await Secp256k1.createSignature(msgHash, secpPrivkey);
  out.secp_signature_fixed = toHex(secpSig.toFixedLength());

  // 6. proto encoding via SDK registry (telescope codegen + protobufjs)
  const registry = sdk.createRegistry();
  const msgAddController = {
    typeUrl: "/ixo.iid.v1beta1.MsgAddController",
    value: sdk.ixo.iid.v1beta1.MsgAddController.fromPartial({
      id: "did:ixo:entity:abc123",
      controllerDid: "did:ixo:wxyz",
      signer: directAccount.address,
    }),
  };
  out.proto_msg_add_controller = toHex(registry.encode(msgAddController));

  const msgSend = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: sdk.cosmos.bank.v1beta1.MsgSend.fromPartial({
      fromAddress: directAccount.address,
      toAddress: "ixo1tumrhpa5tpegdcs2nhwzft8maprttz66pvntc9",
      amount: [{ denom: "uixo", amount: "1000000" }],
    }),
  };
  out.proto_msg_send = toHex(registry.encode(msgSend));

  // 7. full direct-sign flow with fixed signer data (registry txBody + authInfo + signDirect)
  const bodyBytes = registry.encodeTxBody({
    messages: [msgAddController, msgSend],
    memo: "golden memo",
  });
  out.proto_tx_body = toHex(bodyBytes);

  const pubkeyAny = encodePubkey({
    type: "tendermint/PubKeySecp256k1",
    value: toBase64(directAccount.pubkey),
  });
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey: pubkeyAny, sequence: 7 }],
    [{ denom: "uixo", amount: "5000" }],
    200000,
    undefined,
    undefined
  );
  out.proto_auth_info = toHex(authInfoBytes);

  const signDoc = makeSignDoc(bodyBytes, authInfoBytes, "ixo-5", 12345);
  const { signature: directSig } = await directWallet.signDirect(directAccount.address, signDoc);
  out.direct_signature = directSig.signature;

  // 8. amino sign flow (StdSignDoc serialization + signature)
  const aminoSignDoc = makeSignDocAmino(
    [
      {
        type: "cosmos-sdk/MsgSend",
        value: {
          from_address: directAccount.address,
          to_address: "ixo1tumrhpa5tpegdcs2nhwzft8maprttz66pvntc9",
          amount: [{ denom: "uixo", amount: "1000000" }],
        },
      },
    ],
    { amount: [{ denom: "uixo", amount: "5000" }], gas: "200000" },
    "ixo-5",
    "golden memo",
    12345,
    7
  );
  out.amino_sign_doc_bytes = toHex(serializeSignDoc(aminoSignDoc));
  const { signature: aminoSig } = await aminoWallet.signAmino(aminoAccount.address, aminoSignDoc);
  out.amino_signature = aminoSig.signature;

  // 9. bech32 + conversions from utils
  out.bech32_roundtrip = toBech32("ixo", sha256(new TextEncoder().encode("addr")).slice(0, 20));
  out.utils_b58_to_b64 = sdk.utils.conversions.base58ToBase64
    ? sdk.utils.conversions.base58ToBase64("2NEpo7TZRRrLZSi2U")
    : "(n/a)";
  out.sha256_fixed = toHex(sha256(new TextEncoder().encode("ixo")));

  // ---- capture / compare ----
  const [mode, file] = process.argv.slice(2);
  if (!mode || !file) {
    console.log(JSON.stringify(out, null, 2));
    return;
  }
  if (mode === "capture") {
    fs.writeFileSync(file, JSON.stringify(out, null, 2) + "\n");
    console.log(`captured ${Object.keys(out).length} golden values -> ${file}`);
  } else if (mode === "compare") {
    const expected = JSON.parse(fs.readFileSync(file, "utf8"));
    let failures = 0;
    for (const [key, value] of Object.entries(expected)) {
      if (out[key] !== value) {
        failures++;
        console.error(`MISMATCH ${key}\n  expected: ${value}\n  actual:   ${out[key]}`);
      }
    }
    const newKeys = Object.keys(out).filter((k) => !(k in expected));
    if (newKeys.length) console.log(`(new keys not in baseline: ${newKeys.join(", ")})`);
    if (failures) {
      console.error(`\n${failures} golden value(s) CHANGED — cryptographic behavior differs!`);
      process.exit(1);
    }
    console.log(`all ${Object.keys(expected).length} golden values match ✔`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
