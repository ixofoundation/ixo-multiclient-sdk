export const dids = {
  daoClass: "",
  oracleClass: "",
  protocolClass: "",
  assetClass: "",
  impactsDao: "",
  emergingDao: "",
  cookstoveAssetProtocol: "",
  prospectOracle: "",
  scalnyxOracle: "",
};

export type LinkedResourcesUploaded = {
  name: string;
  cid: string;
  type: string;
  storage: "cellnode" | "ipfs";
}[];
