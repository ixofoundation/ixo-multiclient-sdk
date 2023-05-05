// IMPORTANT! If you change these please revert before commiting, these are constants that is
// repeatedly used for devnet reset.
export const dids = {
  // impactsRootUserDid: "did:x:zQ3shoiydFD6jdTdXLPProPZWL6igg9bCyaJY6zEKqQoNE96C", // chain tester user for local testing
  impactsRootUserDid: "did:x:zQ3shj4dPHhbsSXYcmsZLoDkiPJxkHhWYZpihWSQn95fuos2y",
  daoClass: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
  oracleClass: "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b",
  protocolClass: "did:ixo:entity:61392c571ef644d54d77e4daf611bf89",
  assetClass: "did:ixo:entity:4d94f9b6078432648a755203eed50644",
  impactsDao: "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d",
  emergingDao: "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a",
  carbonOracle: "did:ixo:entity:7889238a0a6a68554f65f5c7da96f13b",
  cleanCookingProtocol: "did:ixo:entity:8fcbc757e75c120dd4beae0e5696fd38",
  prospectDao: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
  prospectOracle: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
  ecsDao: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
  assetCollection: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
};

export const EcsCredentialsWorkerUrl =
  "https://45zt3i0456.execute-api.us-east-1.amazonaws.com/dev/";

export type LinkedResourcesUploaded = {
  name: string;
  cid: string;
  type: string;
  storage: "cellnode" | "ipfs";
}[];

export type LinkedClaimUploaded = {
  name: string;
  description: string;
  cid: string;
  type: string;
  storage: "cellnode" | "ipfs";
}[];
