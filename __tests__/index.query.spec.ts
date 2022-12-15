require("dotenv").config();

import { createQueryClient, runQry } from "./helpers/common";
import * as Queries from "./modules/Queries";

beforeAll(() => {
  return Promise.all([createQueryClient()]);
});

describe("Running queries", () => {
  runQry("AllBonds", () => Queries.AllBonds());
  // runQry("ProjectDoc", () => Queries.ProjectDoc("did:ixo:"));
});
