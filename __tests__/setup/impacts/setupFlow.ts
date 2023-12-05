import { generateNewWallet, testMsg, utils } from "../../helpers/common";
import {
  setup_dao_constants,
  setup_protocol_claim_form_object_constants,
} from "./constants";
import * as Entity from "../Entity";
import { setAndLedgerUser, uploadAllToCellnodeWeb3 } from "../helpers";
import { WalletUsers } from "../../helpers/constants";

export const impactsFlow = () =>
  describe("Flow for creating Impacts entities (dao/protocol/oracle)", () => {
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

export const claimFormObjectsProtocol = () =>
  describe("Flow for creating Claim Form Object Protocol", () => {
    setAndLedgerUser(
      process.env.ROOT_CLAIM_FORM_OBJECT_PROTOCOL!,
      process.env.ROOT_ED_CLAIM_FORM_OBJECT_PROTOCOL!
    );

    // =============================== START
    let protDid: string;
    testMsg("Create legacy cooking protocol", async () => {
      const daoConst = setup_protocol_claim_form_object_constants();

      let protLinkedResourcesUploaded = await uploadAllToCellnodeWeb3(
        daoConst.linkedResources
      );
      console.log({ protLinkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        protLinkedResourcesUploaded,
        true
      );
      protDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ protDid });

      return res;
    });
    // =============================== END
  });
