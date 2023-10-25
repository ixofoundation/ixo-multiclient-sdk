require("dotenv").config();

import { createQueryClient, runQry } from "../../helpers/common";
import * as Queries from "../../modules/Queries";

beforeAll(() => {
  return Promise.all([createQueryClient()]);
});

describe("Running queries", () => {
  runQry("AllAccounts", () => Queries.AllAccounts());

  // const did: string = "did:sov:LRGVKuk1Lmi16SUBWyXPAC";
  // runQry("IidDocument = " + did, () => Queries.IidDocument(did));
  // runQry("AllIidDocuments", () => Queries.AllIidDocuments());
  // runQry("AllEntities", () => Queries.AllEntities());
  // runQry("AllBonds", () => Queries.AllBonds());

  // let didArray: string[] = [
  //   //testnet
  //   "did:ixo:11tDn1YdnJFdHknkrDJJL",
  //   "did:ixo:12tuBY6jNAYtG3PXKY4sNM",
  //   "did:ixo:16mPo8yfvTeEQqgPYGPhXZ",
  //   "did:ixo:21ZesJAXrHuS7ozrP2skuv",
  //   "did:ixo:227o5CCCobibDhxqrfrtwE",
  //   "did:ixo:24K6czM2YBSEn6aQf2SSUT",
  //   "did:ixo:259znQFAbF4Mha3S32AdTe",
  //   "did:ixo:25Qrqmd5fTNQdDEHKY59Tc",
  //   "did:ixo:26DbMsSR2HoPKHYYqsCZX6"
  //   //mainnet
  //   // "did:ixo:3toYaoMnRyMBvHreQmYrwo",
  //   // "did:ixo:5eQoGgsK6vdB6q6LJSsugj",
  //   // "did:ixo:5jG8QeRMLjNzhQiKhmWRS6",
  //   // "did:ixo:6hp9VcESiDjV4vZMpBTv53",
  //   // "did:ixo:Djti3NtQZMB2iSRHuv5LC",
  //   // "did:ixo:GVgihwzun5CeVvn14Fe3Td",
  //   // "did:ixo:GtJsnN7P5oEe3QSLt2fFQj",
  //   // "did:ixo:PhdCb2FzeEn8VavqNA5Sqk"
  // ];
  // didArray.forEach(element => {
  //   runQry("ProjectDoc = " + element, () => Queries.ProjectDoc(element));
  //   // runQry("ProjectTx = " + element, () => Queries.ProjectTx(element));
  //   // runQry("ProjectAccounts = " + element, () => Queries.ProjectAccounts(element));
  // });
});
