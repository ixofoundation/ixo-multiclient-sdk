import {
  generateNewWallet,
  sendFromFaucet,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as IidMain from "../../modules/Iid";
import { setup_class_constants } from "./constants";
import * as Entity from "../Entity";
import { chainNetwork } from "../index.setup.spec";

export const classesFlow = () =>
  describe("Flow for creating classes", () => {
    // ===============================================================
    // Set Testers mnemonic to env variable and ledger root user did
    // ===============================================================

    // below test can fail as user might already be ledgered, that is ok
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.TESTER_MNEMONIC)
    );

    // @ts-ignore
    if (chainNetwork != "mainnet") {
      // Send from faucet for devnet/testnet
      sendFromFaucet(WalletUsers.tester);
    }
    testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
      IidMain.CreateIidDoc(WalletUsers.tester)
    );

    // ===============================================================
    // Create Entities
    // ===============================================================
    // Creating the parent classes here that will be in context of all following entities

    testMsg("/ixo.entity.v1beta1.MsgCreateEntity classes", async () => {
      for (const c of Object.keys(setup_class_constants)) {
        const res = await Entity.CreateEntityBasic(setup_class_constants[c]);
        if (res.code != 0) throw new Error(res.rawLog);
        const did = utils.common.getValueFromEvents(res, "wasm", "token_id");
        console.log({ [c]: did });
      }

      return true as any;
    });
  });
