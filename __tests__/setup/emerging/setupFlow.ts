import { testMsg, utils } from "../../helpers/common";
import {
  setup_dao_constants,
  setup_oracle_carbon_constants,
  setup_protocol_clean_cooking_constants,
} from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";

export const emergingDaoFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
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
  });

export const emergingOraclesFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_EMERGING!, process.env.ROOT_ED_EMERGING!);

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
  });

export const emergingProtocolsFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
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
