require("dotenv").config();

import { relayerVerifyAllEntities } from "../../flows/entities";
import { createQueryClient, generateWallets } from "../../helpers/common";
import { dids } from "../../setup/constants";
import { chainNetwork } from "../../setup/constants";
import * as Aquaminer from "../../setup/aquaminer/setupFlow";
import { aquaminerAssets } from "../../setup/aquaminer/assets";

beforeAll(() => Promise.all([createQueryClient(), generateWallets(false)]));

// ------------------------------------------
// AQUAMINER
// ------------------------------------------
// create cellnode assets
// Aquaminer.uploadCellnodeData();

// only need to create the assets
// Aquaminer.assetsFlow();

// verify all entities created (get list of dids to verify from assets/aquaminer/asset_dids.json)
// relayerVerifyAllEntities(
//   process.env.ROOT_IMPACTS,
//   dids.impactsDao,
//   chainNetwork,
//   aquaminerAssets.map((e) => e.did),
//   true
// );
