import { testMsg, utils } from "../../helpers/common";
import {
  setup_coin_asset_protocol,
  setup_impact_credit_asset_protocol,
} from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";

export const impactCreditProtocol = () =>
  describe("Flow for creating Impact credit asset protocol", () => {
    setAndLedgerUser(process.env.ROOT_IMPACTS!);

    // =============================== START
    let protDid: string;
    testMsg("Creating impact credit protocol", async () => {
      const protConst = setup_impact_credit_asset_protocol();

      let linkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        protConst.linkedResources
      );
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        protConst.entity,
        linkedResourcesUploaded
      );
      protDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ protDid });

      return res;
    });
    // =============================== END
  });

export const coinProtocol = () =>
  describe("Flow for creating coin asset protocol", () => {
    setAndLedgerUser(process.env.ROOT_IMPACTS!);

    // =============================== START
    let protDid: string;
    testMsg("Creating coin protocol", async () => {
      const protConst = setup_coin_asset_protocol();

      let protLinkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        protConst.linkedResources
      );
      console.log({ protLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        protConst.entity,
        protLinkedResourcesUploaded,
        true
      );
      protDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ protDid });

      return res;
    });
    // =============================== END
  });
