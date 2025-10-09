# Bean Token Attributes Implementation

## Overview
The token test has been updated to include bean token attributes from `bean-token-attributes.csv` when minting tokens on the IXO blockchain.

## Changes Made

### 1. Updated File: `__tests__/flows/tokens.ts`

#### Added Helper Functions

**`createBeanTokenMetadata()`** - Creates structured JSON metadata from CSV attributes
- Takes optional batch-specific parameters (lotBatchId, packingDate, netWeight, province)
- Returns a complete metadata object with all CSV attributes organized by category:
  - Product identity (productName, intendedUse)
  - Quality & grading (grade, moisture, foreignMatter, odorCheck)
  - Food safety & compliance (processingFacility, bestBeforeDate, storageInstructions)
  - Origin & traceability (country, province, lotBatchId, productionDate, packingDate)
  - Packaging & presentation (netWeight, bagMaterial)
  - Nutrition facts (per 100g and per serving)
  - Handling & storage (shelfLife)
  - Schema metadata (schemaVersion, timestamp)

**`createTokenDataWithMetadata()`** - Uploads metadata to IPFS and creates TokenData
- Uploads JSON metadata to IPFS via Web3 Storage (cellnode)
- Returns TokenData array with IPFS URI, CID, and proof
- Logs upload details for verification

#### Updated Test Cases

**Token Creation**
- Changed token name from "TEST" to "Dry beans"
- Updated description to "Zambian dry beans for cooking"
- Test suite renamed to "Testing the Token module with bean attributes"

**First Token Mint** (`/ixo.token.v1beta1.MsgMintToken with bean attributes`)
- Creates metadata with specific batch info:
  - Lot Batch ID: "BATCH001"
  - Packing Date: "2025-01-15"
  - Net Weight: "1 kg"
  - Province: "Lusaka"
- Uploads metadata to IPFS
- Mints token with metadata attached

**Additional Token Mints** (7 tokens with indices 3-9)
- Each token gets unique metadata with:
  - Sequential batch IDs (BATCH002-BATCH008)
  - Different packing dates (incremented by day)
  - Alternating weights (1 kg or 2.5 kg)
  - Rotating provinces (Lusaka, Copperbelt, Southern)
- Each batch uploads its own metadata to IPFS

**Authz Grant Test** (`/cosmos.authz.v1beta1.MsgGrant mint token with attributes`)
- Creates metadata for authorization grant:
  - Lot Batch ID: "AUTHZ_BATCH"
  - Net Weight: "5 kg"
  - Province: "Central"

**Authz Execute Test** (`/cosmos.authz.v1beta1.MsgExec mint token with attributes`)
- Creates metadata for authorization execution:
  - Lot Batch ID: "EXEC_BATCH"
  - Net Weight: "10 kg"
  - Province: "Eastern"

## How It Works

### Metadata Flow
1. **Create Metadata** → `createBeanTokenMetadata()` generates JSON with CSV attributes
2. **Upload to IPFS** → `createTokenDataWithMetadata()` uploads via cellnode Web3 Storage
3. **Get IPFS CID** → Receives content identifier (CID) for the uploaded metadata
4. **Create TokenData** → Wraps IPFS URI and CID in TokenData structure
5. **Mint Token** → Token is minted with tokenData pointing to IPFS metadata

### Metadata Storage
- **Location**: IPFS (InterPlanetary File System) via Web3 Storage
- **Format**: JSON with schema.org context
- **Access**: Publicly accessible via IPFS CID
- **Immutability**: Once uploaded, metadata cannot be changed (blockchain principle)

### Token Structure
Each minted token has:
- **On-chain data**: name, index, amount, collection DID, contract address
- **Off-chain metadata**: Full attribute set stored on IPFS, referenced by URI

## CSV Attributes Mapping

| CSV Section | JSON Field | Example Value |
|-------------|-----------|---------------|
| Product identity | productName | "Dry beans" |
| Product identity | intendedUse | "Cooking (not seed)" |
| Quality & grading | grade | "Food grade" |
| Quality & grading | odorCheck | "Normal" |
| Food safety | storageInstructions | "Cool, dry, off floor" |
| Origin & traceability | country | "Zambia" |
| Origin & traceability | province | "Lusaka" (varies by batch) |
| Origin & traceability | lotBatchId | "BATCH001" (varies by batch) |
| Origin & traceability | packingDate | "2025-01-15" (varies by batch) |
| Packaging | netWeight | "1 kg" (varies by batch) |
| Packaging | bagMaterial | "PE-plastic" |
| Handling & storage | shelfLife | "12 months" |

## Running the Test

```bash
# Ensure .env file has RPC_URL set
echo "RPC_URL=https://devnet.ixo.earth/rpc/" > .env

# Install dependencies
yarn install

# Run the token test
yarn test
```

## Expected Output

The test will:
1. ✅ Create a token class for "Dry beans"
2. ✅ Mint first token with BATCH001 metadata → uploads to IPFS
3. ✅ Mint 7 additional tokens (BATCH002-BATCH008) → each uploads unique metadata
4. ✅ Cancel a token
5. ✅ Retire a token
6. ✅ Transfer credit
7. ✅ Pause token contract
8. ✅ Stop token contract
9. ✅ Grant authorization with AUTHZ_BATCH metadata
10. ✅ Execute via authorization with EXEC_BATCH metadata
11. ✅ Revoke authorization

### Console Output Example
```
Metadata uploaded to IPFS: https://bafkreixxx...ipfs.w3s.link
IPFS CID: bafkreixxx...
{ contractAddress1155: 'ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c' }
{ tokenId: 'db03fa33c1e2ca35794adbb14aebb153' }
```

## Querying Token Metadata

After tokens are minted, you can query their metadata:

```typescript
// Query token properties
const tokenProps = await queryClient.ixo.token.v1beta1.tokenProperties({
  id: tokenId
});

// The tokenData array contains IPFS URIs
console.log(tokenProps.tokenData);
// [{ uri: "https://bafkreixxx.ipfs.w3s.link", ... }]

// Fetch the actual metadata from IPFS
const metadata = await axios.get(tokenProps.tokenData[0].uri);
console.log(metadata.data);
// { productName: "Dry beans", country: "Zambia", ... }
```

## Benefits

✅ **Structured Data**: All CSV attributes organized in standard JSON format  
✅ **Immutable**: Metadata stored on IPFS cannot be altered  
✅ **Verifiable**: IPFS CID serves as cryptographic proof of metadata  
✅ **Scalable**: Each token can have unique attributes without bloating blockchain  
✅ **Queryable**: Metadata can be retrieved and parsed programmatically  
✅ **Standards-Compliant**: Uses schema.org vocabulary for interoperability  

## Next Steps

To customize for production:
1. Update CSV values in `createBeanTokenMetadata()` with actual data
2. Add more fields from CSV as needed
3. Consider reading from actual CSV file for batch processing
4. Implement validation for required fields
5. Add error handling for IPFS upload failures
6. Store IPFS CIDs for later reference/verification

