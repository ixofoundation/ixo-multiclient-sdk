import { testMsg, utils } from "../../helpers/common";
import {
  setup_carbon_asset_constants,
  setup_dao_constants,
  setup_oracle_carbon_constants,
  setup_protocol_clean_cooking_constants,
} from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";
import { WalletUsers } from "../../helpers/constants";

export const emergingDaoFlow = () =>
  describe("Flow for creating Emerging Dao (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_EMERGING!);

    // =============================== START
    let daoDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_dao_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        daoConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ daoDid });

      return res;
    });
    // =============================== END

    // Create oracle revenue entity account
    let accountAddress: string;
    testMsg(
      "/ixo.entity.v1beta1.MsgCreateEntityAccount oracle revenue",
      async () => {
        const res = await Entity.CreateEntityAccount(daoDid, "oracle revenue");
        accountAddress = utils.common.getValueFromEvents(
          res,
          "ixo.entity.v1beta1.EntityAccountCreatedEvent",
          "account_address"
        );
        console.log({ accountAddress });

        return res;
      }
    );
    // add oracle revenue entity account to verification methods with entity did as id for relayerNode payments
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddVerification(daoDid, accountAddress)
    );
  });

export const emergingOraclesFlow = () =>
  describe("Flow for creating Emerging Oracle (dao/protocol/oracle)", () => {
    setAndLedgerUser(
      process.env.ROOT_EMERGING!,
      process.env.ROOT_ED_EMERGING!,
      process.env.ASSERT_USER_CARBON_ORACLE!
    );

    // =============================== START
    let oracleDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_oracle_carbon_constants();

      let oracleLinkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        daoConst.linkedResources
      );
      console.log({ oracleLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        oracleLinkedResourcesUploaded,
        true
      );
      oracleDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ oracleDid });

      return res;
    });
    // =============================== END

    // Add Assertion Method user to Oracle for claims
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddVerification(oracleDid, "", WalletUsers.oracle)
    );
  });

export const emergingProtocolsFlow = () =>
  describe("Flow for creating Emerging Protocol (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_EMERGING!, process.env.ROOT_ED_EMERGING!);

    // =============================== START
    let protCleanCookingDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_protocol_clean_cooking_constants();

      let protCleanCookingLinkedResourcesUploaded =
        await uploadAllToCellnodeWeb3(daoConst.linkedResources);
      console.log({ protCleanCookingLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        protCleanCookingLinkedResourcesUploaded,
        true
      );
      protCleanCookingDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ protCleanCookingDid });

      return res;
    });
    // =============================== END
  });

export const emergingAssetsFlow = () =>
  describe("Flow for creating Emerging Protocol (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_EMERGING!);

    // =============================== START
    let carbonAssetDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity carbon asset", async () => {
      const assetConst = setup_carbon_asset_constants();

      let assetLinkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        assetConst.linkedResources
      );
      console.log({ assetLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        assetConst.entity,
        assetLinkedResourcesUploaded
      );
      carbonAssetDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ carbonAssetDid });

      return res;
    });
    // =============================== END
  });
