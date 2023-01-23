require("dotenv").config();

import { createQueryClient, generateWallets } from "./helpers/common";
import { generateConstants } from "./helpers/constants";
import {
  bondsBasic,
  bondsSellsDisabled,
  bondsSellsEnabled,
} from "./flows/bonds";
import { iidsBasic, registerIids } from "./flows/iids";
import { enititiesBasic, supamotoFlow } from "./flows/entities";
import { paymentsBasic } from "./flows/payments";
import { ibcBasic } from "./flows/ibc";
import { bankBasic, govBasic } from "./flows/cosmos";
import { tokenBasic } from "./flows/tokens";
import { projectsBasic } from "./flows/projects";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

registerIids();
// iidsBasic();
// paymentsBasic();
// projectsBasic();
// bondsBasic();
// bondsSellsDisabled();
// bondsSellsEnabled();
// enititiesBasic();
// supamotoFlow();
// tokenBasic();
// ibcBasic();
// bankBasic();
// govBasic();
