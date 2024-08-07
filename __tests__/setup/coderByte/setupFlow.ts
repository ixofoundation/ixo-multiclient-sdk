import { testMsg, utils } from "../../helpers/common";
import {
  setup_dao_constants,
  setup_oracle_education_constants,
} from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";
import { WalletUsers } from "../../helpers/constants";

export const coderbyteFlow = () =>
  describe("Flow for creating CoderByte entities (dao/protocol/oracle)", () => {
    setAndLedgerUser(
      process.env.ROOT_CODER_BYTE!,
      process.env.ROOT_ED_CODER_BYTE!,
      process.env.ASSERT_USER_CODER_BYTE_ORACLE!
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
        linkedResourcesUploaded
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ daoDid });

      return res;
    });
    // =============================== END

    // =============================== START
    let oracleDid: string;
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_oracle_education_constants();

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
    // Add Assertion Method user to Oracle for claims
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddVerification(oracleDid, "", WalletUsers.oracle)
    );
    // =============================== END
  });
