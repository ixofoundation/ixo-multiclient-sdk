// IMPORTANT! If you change these please revert before commiting, these are constants that is
// repeatedly used for devnet reset.

import { ChainNetwork } from "../../src/custom_queries/chain.types";

// DEVNET
// ========================================
export const chainNetwork: ChainNetwork = "devnet";

export const dids = {
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
  carbonAsset: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
  ecsProject: "did:ixo:entity:29198b8a823e183a5e84d7ebf2f0febd",
  legacyCookingProtocol: "did:ixo:entity:8ad0c5568aea9632db56a846a7112353",
  legacyCollection: "did:ixo:entity:f645a3221d05eba19fefb31f1025f3af",
  yomaDao: "did:ixo:entity:50a7d92f449ab5752f63c64521adb3cc",
  coderByteDao: "did:ixo:entity:8abd3503cbf6717393478117b8df4e6e",
  coderByteOracle: "did:ixo:entity:23bc6e04fea6d884b4efc8a0f31bb740",
  learnershipProtocol: "did:ixo:entity:0c12012217e08d3da96d33c85e09b9ad",
  umuziDao: "did:ixo:entity:0fb18fbac5f4e18c75ced2f23a021fe9",
  umuziProjectDid: "did:ixo:entity:b3104e1a5ffcbee06007d29525f3e07b",
  umuziAssetCollection: "did:ixo:entity:3e7253499daf46aab546ab7d2b884bde",
  educationAssetDid: "did:ixo:entity:4af7faf72e47f4b91a38750cb6e359a7",
  ai4gCollection: "",
  didOracle: "",
  aquaminerCollection: "did:ixo:entity:323dd1f9999c20142789010dae287a65",
};

export const adminEntityAccounts = {
  assetCollection: "ixo19e74tjy6gdwt0hjj6ph6xgtjhuulgqkzk8xaj4",
  legacyCollection: "ixo1kaluffrp0ncy3dlrerla3nd8v6zxwzmega3v7g",
  ai4gCollection: "",
};

// export const EcsCredentialsWorkerUrl = "http://localhost:3000/";
export const EcsCredentialsWorkerUrl =
  "https://ecs.credentials.devnet.ixo.earth/";
export const ProspectCredentialsWorkerUrl =
  "https://prospect.credentials.devnet.ixo.earth/";
export const CarbonCredentialsWorkerUrl =
  "https://carbon.credentials.devnet.ixo.earth/";
export const UmuziCredentialsWorkerUrl =
  "https://umuzi.credentials.devnet.ixo.earth/";

// TESTNET
// ========================================
// export const chainNetwork: ChainNetwork = "testnet";

// export const dids = {
//   impactsRootUserDid: "did:x:zQ3shj4dPHhbsSXYcmsZLoDkiPJxkHhWYZpihWSQn95fuos2y",
//   daoClass: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
//   oracleClass: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
//   protocolClass: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
//   assetClass: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
//   impactsDao: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
//   emergingDao: "did:ixo:entity:29198b8a823e183a5e84d7ebf2f0febd",
//   carbonOracle: "did:ixo:entity:75d738bbf9a61ec05acc16625d70a82c",
//   cleanCookingProtocol: "did:ixo:entity:32a5a11ebf1ce614a6eb8ef874898eee",
//   prospectDao: "did:ixo:entity:7b40f2500d4c89997f8389c5f2318cdb",
//   prospectOracle: "did:ixo:entity:eb260ac6137fa9a7600ee7239e3e1fb1",
//   ecsDao: "did:ixo:entity:237cb945b1368ed450ec67c7c4ac56ac",
//   assetCollection: "did:ixo:entity:7f0cc7a072d514b38cb90bdf2e215901",
//   carbonAsset: "did:ixo:entity:af96d8449eb5297a8b0812844374e0e2",
//   ecsProject: "did:ixo:entity:d9de4952c41124e453f260cfd2c7774a",
//   legacyCookingProtocol: "did:ixo:entity:9dc2f06bf379c922d2aa8703ba276bc3",
//   legacyCollection: "did:ixo:entity:314d8d02428debb5584d975910797121",
//   ai4gCollection: "did:ixo:entity:4ce80421effb121662866edf66d1cc21",
//   didOracle: "did:ixo:entity:504a8255ca35e103bc8e3e78f62a5231",
//   aquaminerCollection: "",
// };

// export const adminEntityAccounts = {
//   assetCollection: "ixo1rm68f38tv9dl2gne6599y3vz4hfa6f74tgcnha",
//   legacyCollection: "ixo1xwc3mty6jyqrzfjpqsrhtpcfz57798phfg8y6s",
//   ai4gCollection: "ixo1e466zhjtprtap545tj88uv8zjcc9768dfk97fl",
// };

// export const EcsCredentialsWorkerUrl =
//   "https://ecs.credentials.testnet.ixo.earth/";
// export const ProspectCredentialsWorkerUrl =
//   "https://prospect.credentials.testnet.ixo.earth/";
// export const CarbonCredentialsWorkerUrl =
//   "https://carbon.credentials.testnet.ixo.earth/";

// MAINNET
// ========================================
// export const chainNetwork: ChainNetwork = "mainnet";

// export const dids = {
//   impactsRootUserDid: "did:x:zQ3shdTvZuRtsRbdUY1ocoRJ6tSUqQGVFgwhpGApkEs3T3G9M",
//   daoClass: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
//   oracleClass: "did:ixo:entity:065ba0b99948e2e8ff3228836dee423b",
//   protocolClass: "did:ixo:entity:61392c571ef644d54d77e4daf611bf89",
//   assetClass: "did:ixo:entity:4d94f9b6078432648a755203eed50644",
//   impactsDao: "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d",
//   emergingDao: "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a",
//   carbonOracle: "did:ixo:entity:7889238a0a6a68554f65f5c7da96f13b",
//   cleanCookingProtocol: "did:ixo:entity:8fcbc757e75c120dd4beae0e5696fd38",
//   prospectDao: "did:ixo:entity:8e8fc81e088154de379474db2f0aa2a9",
//   prospectOracle: "did:ixo:entity:f2235630689d4b54a561ca3de57494f6",
//   ecsDao: "did:ixo:entity:a1fcead81eab2f1158a726597d872413",
//   assetCollection: "did:ixo:entity:eb98bb2c92a62557b6c88c6f80e8d258",
//   carbonAsset: "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb",
//   ecsProject: "did:ixo:entity:b3839c8bccf7ecff3cb6822869bb0d81",
//   legacyCookingProtocol: "did:ixo:entity:f4427ae632de60a6f7ed47f46da32fa2",
//   legacyCollection: "did:ixo:entity:9f8749d749af260d185f3df6f2206b63",
//   claimFormObjectsProtocol: "did:ixo:entity:c781ca0a76beae419441dbe27881e44e",
//   ai4gCollection: "did:ixo:entity:3448d91ccb919450342958bb187f7eee",
//   didOracle: "did:ixo:entity:a6e2f215dcfa4131dd299c958fdf1a03",
//   aquaminerCollection: "",
//   fairClimateCollection: "did:ixo:entity:9cb39e47f2ef26d3dd1c4e53c35e58a5",
// };

// export const adminEntityAccounts = {
//   assetCollection: "ixo19e74tjy6gdwt0hjj6ph6xgtjhuulgqkzk8xaj4",
//   legacyCollection: "ixo14x5r6stdxua49tc90jngj7k7xuwhgp9vlm5tc8",
//   ai4gCollection: "ixo1atkdpd2cmh7tfehvsafpk6f6a0rq74ykekr4j9",
//   fairClimateCollection: "ixo123zjnqt9cv6q8rm8lhl872l7qeuq4ugum4ykkz",
// };

// // export const EcsCredentialsWorkerUrl = "http://localhost:3006/";
// export const EcsCredentialsWorkerUrl = "https://ecs.credentials.ixo.world/";
// export const ProspectCredentialsWorkerUrl = "";
// export const CarbonCredentialsWorkerUrl =
//   "https://carbon.credentials.ixo.world/";
// export const ClaimFormCedentialsWorkerUrl =
//   "https://claimformobjects.credentials.ixo.world/";
