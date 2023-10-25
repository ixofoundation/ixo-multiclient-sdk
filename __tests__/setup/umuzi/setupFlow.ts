import { testMsg, utils, ixo } from "../../helpers/common";
import {
  setup_yoma_dao_constants,
  setup_umuzi_dao_constants,
  setup_asset_collection_wafundaisa2023_constants,
  setup_education_asset_constants,
  setup_project_constants,
  setup_protocol_learnership_constants,
} from "./constants";
import * as Entity from "../Entity";
import * as Iid from "../../modules/Iid";
import {
  setAndLedgerUser,
  uploadAllToCellnodeWeb3,
  uploadAllToCellnodeWeb3Claims,
} from "../helpers";
import { WalletUsers } from "../../helpers/constants";

export const yomaDaoFlow = () =>
  describe("Flow for creating Yoma Dao (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_YOMA!);

    // =============================== START
    let daoDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_yoma_dao_constants();

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
      console.log({ yomaDao: daoDid });

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

export const umuziDaoFlow = () =>
  describe("Flow for creating Umuzi Dao (dao/protocol/oracle)", () => {
    setAndLedgerUser(
      process.env.ROOT_UMUZI!,
      process.env.ROOT_ED_UMUZI!,
      process.env.ASSERT_USER_UMUZI!
    );

    // =============================== START
    let daoDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_umuzi_dao_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        daoConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded,
        true
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ umuziDao: daoDid });

      return res;
    });
    // =============================== END

    // Add Assertion Method user to Umuzi for claims
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddVerification(daoDid, "", WalletUsers.oracle)
    );
  });

export const umuziFlow = () =>
  describe("Flow for creating Umuzi entities (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!);

    // =============================== START
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const collectionConst = setup_asset_collection_wafundaisa2023_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        collectionConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      let linkedClaimsUploaded = await uploadAllToCellnodeWeb3Claims(
        collectionConst.linkedClaims
      );
      console.log({ linkedClaimsUploaded });

      // Create the Entity
      // TODO update the function CreateUmuziAssetCollection with correct values
      const res = await Entity.CreateUmuziAssetCollection(
        collectionConst.entity,
        linkedResourcesUploaded,
        linkedClaimsUploaded
      );
      assetCollectionDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ assetCollectionDid });

      return res;
    });
    // =============================== END

    // Add the web dashboard linkedResource as need did
    testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
      Iid.AddLinkedResource(
        assetCollectionDid,
        ixo.iid.v1beta1.LinkedResource.fromPartial({
          id: "{id}#collectionDashboard",
          type: "WebDashboard",
          description: "Collection Dashboard",
          mediaType: "application/html",
          serviceEndpoint: "emerging:/collections/" + assetCollectionDid,
          proof: "",
          encrypted: "false",
          right: "#apitoken",
        })
      )
    );
  });

export const umuziAssetsFlow = () =>
  describe("Flow for creating Umuzi Protocol (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!);

    // =============================== START
    let educationAssetDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity education asset", async () => {
      const assetConst = setup_education_asset_constants();

      let assetLinkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        assetConst.linkedResources
      );
      console.log({ assetLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        assetConst.entity,
        assetLinkedResourcesUploaded
      );
      educationAssetDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ educationAssetDid });

      return res;
    });
    // =============================== END
  });

export const umuziProjectFlow = () =>
  describe("Flow for creating Umuzi entities (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!);

    // =============================== START
    let umuziProjectDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const projectConst = setup_project_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        projectConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        projectConst.entity,
        linkedResourcesUploaded
      );
      umuziProjectDid = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ umuziProjectDid });

      return res;
    });
    // =============================== END
  });

export const umuziProtocolsFlow = () =>
  describe("Flow for creating Umuzi Protocol (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_UMUZI!, process.env.ROOT_ED_UMUZI!);

    // =============================== START
    let learnershipProtocol: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_protocol_learnership_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        daoConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded,
        true
      );
      learnershipProtocol = utils.common.getValueFromEvents(
        res,
        "wasm",
        "token_id"
      );
      console.log({ learnershipProtocol });

      return res;
    });
    // =============================== END
  });
