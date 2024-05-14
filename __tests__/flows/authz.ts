import { testMsg, utils } from "../helpers/common";
import * as Authz from "../modules/Authz";
import * as Entity from "../modules/Entity";

export const authzBasic = () =>
  describe("Testing the cosmos authz module", () => {
    // tester creates entity
    let entityDid = "";
    let adminAccount = "";
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity();
      entityDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (e) => e.accounts?.find((a) => a.name === "admin")?.address
      );
      console.log({ entityDid, adminAccount });
      return res;
    });

    // tester grants alice authz to be able to execute MsgGrantEntityAccountAuthz on behalf of tester
    testMsg("test Grant Authz Authz", async () =>
      Authz.MsgGrantAuthz("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz")
    );

    // alice executes MsgGrantEntityAccountAuthz on behalf of tester,
    // granting bob authz SubmitClaimAuthorization on behalf of entity admin account
    testMsg("test Exec Authz Authz", () => Authz.MsgExecAuthz(entityDid));
  });
