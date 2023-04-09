import {
  customQueries,
  generateNewWallet,
  sendFromFaucet,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as IidMain from "../../modules/Iid";
import { setup_dao_constants } from "./constants";
import * as Entity from "../Entity";
import { chainNetwork } from "../index.setup.spec";
import { LinkedResourcesUploaded } from "../constants";

export const ecsFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
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
    // You can create all your entities below, you can just copy a whole entity creation and make
    // as many as you want, just ensure you have all the groups needed that will be used and that for each
    // entity there is a corresponding exported setup_{name}_constants that you can use for the entity

    // =============================== START
    let daoDid: string;
    let adminAccount: string;
    let linkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_dao_constants();

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: cellnode.key,
            type,
            storage,
          });
        } else if (storage === "ipfs") {
          const web3 = await customQueries.cellnode.uploadWeb3Doc(
            utils.common.generateId(12),
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ daoDid, adminAccount });

      return res;
    });
    // =============================== END
  });
