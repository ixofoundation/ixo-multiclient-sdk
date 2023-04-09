import {
  customQueries,
  generateNewWallet,
  sendFromFaucet,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as IidMain from "../../modules/Iid";
import {
  setup_dao_constants,
  setup_protocol_cooking_constants,
  setup_protocol_fuel_constants,
  setup_protocol_ver_claims_constants,
} from "./constants";
import * as Entity from "../Entity";
import * as Entity1 from "../../modules/Entity";
import { chainNetwork } from "../index.setup.spec";
import { LinkedResourcesUploaded, dids } from "../constants";

export const emergingDaoFlow = () =>
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

export const emergingProtocolsFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
    // ===============================================================
    // Set Testers mnemonic to env variable and ledger root user did
    // ===============================================================

    // below test can fail as user might already be ledgered, that is ok
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.TESTER_MNEMONIC),
        generateNewWallet(WalletUsers.alice, process.env.ED_KEYS_MNEMONIC),
      ])
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
    let protVerClaimsDid: string;
    let protVerClaimsAdminAccount: string;
    let protVerClaimsLinkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_protocol_ver_claims_constants();

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          protVerClaimsLinkedResourcesUploaded.push({
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
          protVerClaimsLinkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ protVerClaimsLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        protVerClaimsLinkedResourcesUploaded
      );
      protVerClaimsDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      protVerClaimsAdminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ protVerClaimsDid, protVerClaimsAdminAccount });

      return res;
    });
    // =============================== END

    // =============================== START
    let protCookingDid: string;
    let protCookingAdminAccount: string;
    let protCookingLinkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_protocol_cooking_constants();

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          protCookingLinkedResourcesUploaded.push({
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
          protCookingLinkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ protCookingLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        protCookingLinkedResourcesUploaded
      );
      protCookingDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      protCookingAdminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ protCookingDid, protCookingAdminAccount });

      return res;
    });
    // =============================== END

    // =============================== START
    let protFuelDid: string;
    let protFuelAdminAccount: string;
    let protFuelLinkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_protocol_fuel_constants();

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          protFuelLinkedResourcesUploaded.push({
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
          protFuelLinkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ protFuelLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        protFuelLinkedResourcesUploaded
      );
      protFuelDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      protFuelAdminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ protFuelDid, protFuelAdminAccount });

      return res;
    });
    // =============================== END

    // Create cookstove-asset-protocol
    // =========================================
    let cookstoveAssetProtocolDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity protocol", async () => {
      const res = await Entity1.CreateEntity(
        "protocol/asset",
        [{ key: "class", val: dids.protocolClass }],
        dids.emergingDao
      );
      cookstoveAssetProtocolDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ cookstoveAssetProtocolDid });
      return res;
    });
  });
