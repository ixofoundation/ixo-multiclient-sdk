require("dotenv").config();

import { createQueryClient, generateWallets, ixo } from "../../helpers/common";
import {
  idccDaoFlows,
  idccDAOPagesFlows,
  idccDAOprofilesFlows,
  idccDAOtagsFlows,
  idccDAOUpdateFlows,
  idccProjectsFlows,
} from "../../setup/idcc/setupFlows";
import { idcc_constants } from "../../setup/idcc/creds";
import { relayerVerifyAllEntities } from "../../flows/entities";
import { chainNetwork } from "../../setup/constants";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(true)]));

// Setup flow for dao and group creations
// ------------------------------------------
// idccDaoFlows();
// idccDAOprofilesFlows();
// idccDAOtagsFlows();
// idccDAOPagesFlows();
// idccDAOUpdateFlows();
// idccProjectsFlows();

// next verify all entities created
relayerVerifyAllEntities(
  process.env.ROOT_EMERGING,
  // "did:ixo:entity:2f22535f8b179a51d77a0e302e68d35d", // mainnet impacts dao relayer
  // "did:ixo:entity:72a27013b1d2f9c3561145e4a424778a", // mainnet emerging dao relayer
  "did:ixo:entity:a1fcead81eab2f1158a726597d872413", // mainnet ecs dao relayer
  // "did:ixo:entity:3d079ebc0b332aad3305bb4a51c72edb", // testnet relayer
  // "did:ixo:entity:47d9c64891e77cb8e588d33b83ab3042", // mainnet qi space dao relayer
  chainNetwork,
  [
    "did:ixo:entity:5763555c83aa9ad82c48aa06fbac551f",
    "did:ixo:entity:d60a50a13d84e21509f15fc2499e7adb",
    "did:ixo:entity:dea3d47bb4c85733b71a94c8b4097192",
    "did:ixo:entity:eab37fcfacbba21636359a22fc00a473",
    "did:ixo:entity:111b423e79823ac580130dc288c8e7b1",
    "did:ixo:entity:37817889be5c76e69e45af46b2027e7f",
    "did:ixo:entity:1c488c7dd6f749a44f6f45247c5e9bfc",
    "did:ixo:entity:114d3232ad6d4a0b6ea4c5fa9c0a646e",
    "did:ixo:entity:f776cfa20a3a9daf50d9b9656472b241",
    "did:ixo:entity:d0cb514eb9df4f49e4a3fed005b89841",
    "did:ixo:entity:10c2bc772d3be8134ce99ee82b55d44e",
    "did:ixo:entity:e72278cb4984b66beabc95516c0fea6e",
    "did:ixo:entity:de87018e89e0f9447b8df48f1a55de51",
    "did:ixo:entity:f5bca1fa471f77ec323d1b3fe928bd64",
    "did:ixo:entity:35da20812dfe4e20e367705a01dbd4ad",
    "did:ixo:entity:ff4f5e453eafa5c87427b31952b17567",
    "did:ixo:entity:3bf50a24fec5f7cd72b9d0f1e488982d",
    "did:ixo:entity:ea038661a8ac1cd906b445f5918b564f",
    "did:ixo:entity:eaddb109d36c552b472bb38ec339dc10",
    "did:ixo:entity:51ed95f2aca4bf8d9e1c8a962577de65",
    "did:ixo:entity:ddf9014d2e8fbdce726b73df5a6e5b27",
    "did:ixo:entity:b4f476deb7acb008a0e8a4d050152edf",
  ],
  true
);
