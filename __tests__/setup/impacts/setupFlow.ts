import { testMsg, utils } from "../../helpers/common";
import { setup_dao_constants } from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";

export const impactsFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
    setAndLedgerUser(process.env.ROOT_IMPACTS!);

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
