import { testMsg, utils } from "../../helpers/common";
import { setup_dao_constants } from "./constants";
import * as Entity from "../Entity";
import { setup_asset_collection_constants } from "../supamoto/constants";
import {
  setAndLedgerUser,
  uploadAllToCellnodeWeb3,
  uploadAllToCellnodeWeb3Claims,
} from "../helpers";
import { WalletUsers } from "../../helpers/constants";

export const ecsDaoFlow = () =>
  describe("Flow for creating ECS entities (dao/protocol/oracle)", () => {
    setAndLedgerUser(
      process.env.ROOT_ECS!,
      process.env.ROOT_ED_ECS!,
      process.env.ASSERT_USER_ECS!
    );

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
        linkedResourcesUploaded,
        true
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ daoDid });

      return res;
    });
    // =============================== END

    // Add Assertion Method user to ECS for claims
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddVerification(daoDid, "", WalletUsers.oracle)
    );
  });

export const ecsFlow = () =>
  describe("Flow for creating ECS entities (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_ECS!);

    // =============================== START
    let assetCollectionDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const collectionConst = setup_asset_collection_constants();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        collectionConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      let linkedClaimsUploaded = await uploadAllToCellnodeWeb3Claims(
        collectionConst.linkedClaims
      );
      console.log({ linkedClaimsUploaded });

      // Create the Entity
      const res = await Entity.CreateSupamotoAssetCollection(
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
  });
