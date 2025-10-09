# CSV to JSON Metadata Mapping

## Complete Attribute Mapping from bean-token-attributes.csv

This document shows how each field from the CSV is mapped to the JSON metadata structure.

## JSON Metadata Structure

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
  "bagMaterial": "PE-plastic",
  
  "nutritionFacts": {
    "per100g": {
      "energy": "Not known",
      "protein": "Not known",
      "carbohydrate": "Not known",
      "fat": "Not known",
      "dietaryFiber": "Not known",
      "sodium": "Not known"
    },
    "perServing": {
      "servingSize": "Not known",
      "energy": "Not known",
      "protein": "Not known",
      "carbohydrate": "Not known",
      "fat": "Not known",
      "dietaryFiber": "Not known",
      "sodium": "Not known"
    }
  },
  
  "shelfLife": "12 months",
  
  "schemaVersion": "1.0",
  "timestamp": "2025-01-08T12:00:00.000Z"
}
```

## Field-by-Field Mapping

### Product Identity
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Product name | Dry beans | productName | "Dry beans" |
| Intended use | Cooking (not seed) | intendedUse | "Cooking (not seed)" |

### Quality & Grading
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Grade | Food grade | grade | "Food grade" |
| Moisture (%) | Not known | moisture | "Not known" |
| Foreign matter (%) | Cleaned | foreignMatter | "Cleaned" |
| Odor check | Normal | odorCheck | "Normal" |

### Food Safety & Compliance
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Processing facility name | Not known | processingFacility | "Not known" |
| Best-before date | Not known | bestBeforeDate | "Not known" |
| Storage instructions | Cool, dry, off floor | storageInstructions | "Cool, dry, off floor" |

### Origin & Traceability
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Country | Zambia | country | "Zambia" |
| Province | Not known | province | "Not known" (or batch-specific) |
| Lot/Batch ID | Id of wholesaler | lotBatchId | "Id of wholesaler" (or batch-specific) |
| Production date | Not known | productionDate | "Not known" |
| Packing date | YYYY-MM-DD | packingDate | "YYYY-MM-DD" (or batch-specific) |

### Packaging & Presentation
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Net weight | 1 kg | netWeight | "1 kg" (or batch-specific) |
| Bag material | PE-plastic | bagMaterial | "PE-plastic" |

### Nutrition Facts (Per 100g)
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Energy per 100 g | Not known | nutritionFacts.per100g.energy | "Not known" |
| Protein per 100 g | Not known | nutritionFacts.per100g.protein | "Not known" |
| Carbohydrate per 100 g | Not known | nutritionFacts.per100g.carbohydrate | "Not known" |
| Fat per 100 g | Not known | nutritionFacts.per100g.fat | "Not known" |
| Dietary fiber per 100 g | Not known | nutritionFacts.per100g.dietaryFiber | "Not known" |
| Sodium per 100 g | Not known | nutritionFacts.per100g.sodium | "Not known" |

### Nutrition Facts (Per Serving)
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Serving size | Not known | nutritionFacts.perServing.servingSize | "Not known" |
| Energy per serving | Not known | nutritionFacts.perServing.energy | "Not known" |
| Protein per serving | Not known | nutritionFacts.perServing.protein | "Not known" |
| Carbohydrate per serving | Not known | nutritionFacts.perServing.carbohydrate | "Not known" |
| Fat per serving | Not known | nutritionFacts.perServing.fat | "Not known" |
| Dietary fiber per serving | Not known | nutritionFacts.perServing.dietaryFiber | "Not known" |
| Sodium per serving | Not known | nutritionFacts.perServing.sodium | "Not known" |

### Handling & Storage
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Shelf life | 12 months | shelfLife | "12 months" |

### Data & Schema (Auto-generated)
| CSV Field | CSV Value | JSON Field | JSON Value |
|-----------|-----------|------------|------------|
| Schema version | - | schemaVersion | "1.0" |
| - | - | timestamp | ISO 8601 timestamp |

## Batch-Specific Overrides

The implementation allows certain fields to be customized per batch:

```typescript
createBeanTokenMetadata({
  lotBatchId: "BATCH001",      // Overrides default
  packingDate: "2025-01-15",   // Overrides default
  netWeight: "1 kg",           // Overrides default
  province: "Lusaka"           // Overrides default
})
```

### Example Batch Variations in Tests

| Batch | lotBatchId | packingDate | netWeight | province |
|-------|-----------|-------------|-----------|----------|
| 1 | BATCH001 | 2025-01-15 | 1 kg | Lusaka |
| 2 | BATCH002 | 2025-01-16 | 1 kg | Lusaka |
| 3 | BATCH003 | 2025-01-17 | 2.5 kg | Copperbelt |
| 4 | BATCH004 | 2025-01-18 | 1 kg | Southern |
| 5 | BATCH005 | 2025-01-19 | 2.5 kg | Lusaka |
| 6 | BATCH006 | 2025-01-20 | 1 kg | Copperbelt |
| 7 | BATCH007 | 2025-01-21 | 2.5 kg | Southern |
| 8 | BATCH008 | 2025-01-22 | 1 kg | Lusaka |

## Updating Values

To update the CSV values in the code:

1. Open `__tests__/flows/tokens.ts`
2. Find the `createBeanTokenMetadata()` function
3. Update the return object with new values from your CSV

Example:
```typescript
// Change this:
"moisture": "Not known",

// To this (if you have actual data):
"moisture": "12%",
```

## Adding New Fields

To add new fields from the CSV:

1. Add to the JSON structure in `createBeanTokenMetadata()`:
```typescript
return {
  // ... existing fields ...
  
  // New field
  "certificationStatus": "Organic certified",
  "certificationBody": "Zambia Organic Producers Association",
};
```

2. The field will automatically be included in the IPFS metadata for all tokens.

## Querying Metadata

After tokens are minted, retrieve metadata:

```typescript
// Get token properties from blockchain
const tokenProps = await queryClient.ixo.token.v1beta1.tokenProperties({
  id: "db03fa33c1e2ca35794adbb14aebb153"
});

// Fetch metadata from IPFS
const response = await fetch(tokenProps.tokenData[0].uri);
const metadata = await response.json();

// Access specific fields
console.log(metadata.productName);      // "Dry beans"
console.log(metadata.country);          // "Zambia"
console.log(metadata.lotBatchId);       // "BATCH001"
console.log(metadata.netWeight);        // "1 kg"
console.log(metadata.shelfLife);        // "12 months"
```

## Notes

- **"Not known" values**: These are placeholders from the CSV. Replace with actual data when available.
- **Date format**: Use ISO 8601 format (YYYY-MM-DD) for dates
- **Numeric values**: Can be stored as strings or numbers depending on use case
- **Schema.org**: Using standard vocabulary improves interoperability
- **Extensibility**: Easy to add new fields without breaking existing structure

