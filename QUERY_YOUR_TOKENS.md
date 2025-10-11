# Query Your Bean Tokens - Quick Reference

This guide shows you how to query the tokens that were just created in the test run.

## Your Token Information

**Minter Address**: `ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8`  
**Contract Address**: `ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3`  
**Token Name**: `DRY_BEANS_1760076920`  
**Network**: Testnet  
**RPC Endpoint**: `https://testnet.ixo.earth/rpc/`

---

## Quick Start - Query Your Token

### Option 1: Using the SDK (Recommended)

Create a file `query-my-tokens.ts`:

```typescript
import { createQueryClient } from "@ixo/impactxclient-sdk";

async function queryMyTokens() {
  // Connect to testnet
  const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");
  
  const minterAddress = "ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8";
  const contractAddress = "ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3";
  
  // Query the token document
  const tokenDoc = await queryClient.ixo.token.v1beta1.tokenDoc({
    minter: minterAddress,
    contractAddress: contractAddress
  });
  
  console.log("=".repeat(60));
  console.log("TOKEN INFORMATION");
  console.log("=".repeat(60));
  console.log("Name:", tokenDoc.tokenDoc.name);
  console.log("Description:", tokenDoc.tokenDoc.description);
  console.log("Contract Address:", tokenDoc.tokenDoc.contractAddress);
  console.log("Minter:", tokenDoc.tokenDoc.minter);
  console.log("Type:", tokenDoc.tokenDoc.type);
  console.log("Supply:", tokenDoc.tokenDoc.supply);
  console.log("Cap:", tokenDoc.tokenDoc.cap);
  console.log("Paused:", tokenDoc.tokenDoc.paused);
  console.log("Stopped:", tokenDoc.tokenDoc.stopped);
  console.log("=".repeat(60));
  
  // Query all tokens by this minter
  const allTokens = await queryClient.ixo.token.v1beta1.tokenList({
    minter: minterAddress
  });
  
  console.log("\nALL TOKENS BY THIS MINTER:");
  console.log("Total:", allTokens.tokenDocs.length);
  allTokens.tokenDocs.forEach((token, index) => {
    console.log(`\n${index + 1}. ${token.name}`);
    console.log(`   Contract: ${token.contractAddress}`);
    console.log(`   Supply: ${token.supply}`);
    console.log(`   Stopped: ${token.stopped}`);
  });
}

queryMyTokens().catch(console.error);
```

Run it:
```bash
npx ts-node query-my-tokens.ts
```

### Option 2: Using REST API

Query via HTTP:

```bash
# Query token document
curl "https://testnet.ixo.earth/ixo/token/minter/ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8/ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3"

# Query all tokens by minter
curl "https://testnet.ixo.earth/ixo/token/minter/ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8"
```

---

## Query Token Metadata

### Query Specific Token Metadata

```typescript
import { createQueryClient } from "@ixo/impactxclient-sdk";

async function queryTokenMetadata() {
  const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");
  
  // Token ID from the first minted batch
  const tokenId = "3f229af73c7aea0da63befd258b4d43a";
  
  const metadata = await queryClient.ixo.token.v1beta1.tokenMetadata({
    id: tokenId
  });
  
  console.log("=".repeat(60));
  console.log("TOKEN METADATA");
  console.log("=".repeat(60));
  console.log("Name:", metadata.name);
  console.log("Description:", metadata.description);
  console.log("Image:", metadata.image);
  console.log("Index:", metadata.index);
  console.log("\nProperties:");
  console.log("  Class:", metadata.properties.class);
  console.log("  Collection:", metadata.properties.collection);
  console.log("  Cap:", metadata.properties.cap);
  console.log("\nLinked Resources:");
  metadata.properties.linkedResources.forEach((resource, index) => {
    console.log(`\n  ${index + 1}. ${resource.type}`);
    console.log(`     URI: ${resource.uri}`);
    console.log(`     Proof: ${resource.proof}`);
    console.log(`     ID: ${resource.id}`);
  });
  console.log("=".repeat(60));
}

queryTokenMetadata().catch(console.error);
```

### View Bean Attributes on IPFS

The metadata for each token batch is stored on IPFS. You can view it directly in your browser:

**Batch 1**: https://bafkreihols4llhbxvrdwyvcw46ziuqbdvx3z7oesffo4alnpiv3mdg35cq.ipfs.w3s.link

This will show JSON like:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "productName": "Dry beans",
  "intendedUse": "Cooking (not seed)",
  "grade": "Food grade",
  "moisture": "Not known",
  "foreignMatter": "Cleaned",
  "odorCheck": "Normal",
  "processingFacility": "Not known",
  "bestBeforeDate": "Not known",
  "storageInstructions": "Cool, dry, off floor",
  "country": "Zambia",
  "province": "Lusaka",
  "lotBatchId": "BATCH001",
  "productionDate": "Not known",
  "packingDate": "2025-01-15",
  "netWeight": "1 kg",
  "grossWeight": "Not known",
  "packagingType": "Not known",
  "numberOfUnits": "Not known",
  "unitOfMeasure": "kg",
  "supplierName": "Not known",
  "supplierContact": "Not known",
  "buyerName": "Not known",
  "buyerContact": "Not known",
  "transportMethod": "Not known",
  "vehicleRegistration": "Not known",
  "driverName": "Not known",
  "driverContact": "Not known",
  "departureDate": "Not known",
  "arrivalDate": "Not known",
  "inspectionDate": "Not known",
  "inspectorName": "Not known",
  "qualityStatus": "Not known",
  "remarks": "Not known"
}
```

---

## Query Token Balances (Smart Contract)

To query how many tokens are owned by an address, you need to query the smart contract directly:

```typescript
import { createQueryClient } from "@ixo/impactxclient-sdk";
import { utils } from "@ixo/impactxclient-sdk";

async function queryTokenBalance() {
  const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");
  
  const contractAddress = "ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3";
  const ownerAddress = "ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8";
  const tokenId = "3f229af73c7aea0da63befd258b4d43a";
  
  // Query smart contract for balance
  const queryMsg = {
    balance_of: {
      owner: ownerAddress,
      token_id: tokenId
    }
  };
  
  const result = await queryClient.cosmwasm.wasm.v1.smartContractState({
    address: contractAddress,
    queryData: utils.conversions.JsonToArray(JSON.stringify(queryMsg))
  });
  
  const balance = JSON.parse(utils.conversions.Uint8ArrayToJS(result.data));
  console.log(`Balance of ${tokenId}:`, balance);
}

queryTokenBalance().catch(console.error);
```

---

## All IPFS Metadata Links

Here are all the IPFS links for the token batches created:

| Batch | IPFS Link |
|-------|-----------|
| 1 | https://bafkreihols4llhbxvrdwyvcw46ziuqbdvx3z7oesffo4alnpiv3mdg35cq.ipfs.w3s.link |
| 3 | https://bafkreihrerxb3arqqz7goaptelwcifzbhfsfabknbg2szjrnaukeueezfq.ipfs.w3s.link |
| 4 | https://bafkreifmlmr4723oixvofipuhwbftp7kdos246umq5dkclofsc7fqqo3cu.ipfs.w3s.link |
| 5 | https://bafkreid3kqrzizwauyw2dbouwwsgwymxj525hwsme5smwrnc2mdmaxebqy.ipfs.w3s.link |
| 6 | https://bafkreihi52dfkngewkyj7hzrn6pdericnkdqjuttpqlh62fkqrtz5bmq4i.ipfs.w3s.link |
| 7 | https://bafkreigeb3ekdkvlj52v3nkum3oh4wjarcpgwbvjfiqo5zc7mk32b6ifxq.ipfs.w3s.link |
| 8 | https://bafkreiaymzfy3gi3fkyvu2ufjevuggsixlrxoqgo5ydtuvirjn3fq3rtha.ipfs.w3s.link |
| 9 | https://bafkreig5ojyiqjbljguqca7qwkulx3572kpwefn2ehgk5jikc3bvv5m6pa.ipfs.w3s.link |

---

## Blockchain Explorers

You can also view your tokens on blockchain explorers:

### IXO Block Explorer (if available)
- Search for your address: `ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8`
- Search for contract: `ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3`

### Mintscan (if IXO is supported)
- https://www.mintscan.io/ixo

---

## Common Queries

### Get All Token IDs for a Contract

```typescript
async function getAllTokenIds() {
  const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");
  
  const contractAddress = "ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3";
  
  const queryMsg = {
    tokens: {
      owner: "ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8",
      limit: 100
    }
  };
  
  const result = await queryClient.cosmwasm.wasm.v1.smartContractState({
    address: contractAddress,
    queryData: utils.conversions.JsonToArray(JSON.stringify(queryMsg))
  });
  
  const tokens = JSON.parse(utils.conversions.Uint8ArrayToJS(result.data));
  console.log("Token IDs:", tokens);
}
```

### Check Token Supply

```typescript
async function checkSupply() {
  const queryClient = await createQueryClient("https://testnet.ixo.earth/rpc/");
  
  const tokenDoc = await queryClient.ixo.token.v1beta1.tokenDoc({
    minter: "ixo1gncytttq9htr9f2xyff6dnx447h4wmvr5gdce8",
    contractAddress: "ixo1jk2ahu7dxl94px73u0hjc2q7s993dl7pc2uka485te53hzftadqsr8zjp3"
  });
  
  console.log("Current Supply:", tokenDoc.tokenDoc.supply);
  console.log("Maximum Cap:", tokenDoc.tokenDoc.cap);
  console.log("Tokens Retired:", tokenDoc.tokenDoc.retired.length);
  console.log("Tokens Cancelled:", tokenDoc.tokenDoc.cancelled.length);
}
```

---

## Troubleshooting

### "Token not found"
- Make sure you're querying the correct network (testnet)
- Verify the contract address is correct
- Check that the token hasn't been deleted

### "Invalid address"
- Ensure addresses start with `ixo1`
- Check for typos in the address
- Verify you're using the correct network prefix

### "RPC endpoint not responding"
- Try a different RPC endpoint
- Check your internet connection
- The network might be experiencing issues

---

## Next Steps

1. **Create a new token** (without stopping it) so you can continue minting
2. **Integrate queries into your application**
3. **Build a UI** to display token information
4. **Implement token transfers** to other addresses
5. **Add more bean attributes** to the metadata

---

## Related Files

- [TEST_RESULTS_SUMMARY.md](./TEST_RESULTS_SUMMARY.md) - Full test results
- [BEAN_TOKEN_MINTER_SETUP.md](./BEAN_TOKEN_MINTER_SETUP.md) - Setup guide
- [BEAN_TOKEN_IMPLEMENTATION.md](./BEAN_TOKEN_IMPLEMENTATION.md) - Implementation details

