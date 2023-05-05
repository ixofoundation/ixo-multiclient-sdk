import { testMsg, utils } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Entity from "../modules/Entity";

export const enititiesBasic = () =>
  describe("Testing the entities module", () => {
    let entityDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // admin account ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity();
      entityDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ entityDid });
      return res;
    });

    testMsg("/ixo.entity.v1beta1.MsgUpdateEntityVerified", () =>
      Entity.UpdateEntityVerified(undefined, entityDid)
    );

    // testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
    //   Entity.TransferEntity(undefined, entityDid)
    // );

    // testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () => Entity.UpdateEntity());

    let accountAddress = "ixo1syjk0qh59vxz3zk776m5vrzvyv4nwpvh57yps2";
    let name = "name";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntityAccount", async () => {
      const res = await Entity.CreateEntityAccount(entityDid, name);
      accountAddress = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityAccountCreatedEvent",
        "account_address"
      );
      console.log({ accountAddress });
      return res;
    });

    testMsg(
      "/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz",
      () => Entity.GrantEntityAccountAuthz(entityDid, name),
      true
    );
  });
