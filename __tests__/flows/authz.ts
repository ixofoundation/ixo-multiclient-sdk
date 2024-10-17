import { generateNewWallet, testMsg, utils } from "../helpers/common";
import * as Authz from "../modules/Authz";
import * as Entity from "../modules/Entity";
import * as Claims from "../modules/Claims";
import { WalletUsers } from "../helpers/constants";

export const authzBasic = () =>
  describe("Testing the cosmos authz module", () => {
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS),
    //   ])
    // );

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

    // tester create claim collection
    let collectionId = "";
    testMsg("/ixo.claims.v1beta1.MsgCreateCollection", async () => {
      const res = await Claims.CreateCollection(
        entityDid,
        entityDid,
        adminAccount
      );
      collectionId = utils.common.getValueFromEvents(
        res,
        "ixo.claims.v1beta1.CollectionCreatedEvent",
        "collection",
        (c) => c.id
      );
      console.log({ collectionId });
      return res;
    });

    // tester grants alice authz to be able to execute MsgGrantEntityAccountAuthz on behalf of tester
    testMsg("test Grant Authz Authz", async () =>
      Authz.MsgGrantAuthz("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz")
    );

    // alice executes MsgGrantEntityAccountAuthz on behalf of tester,
    // granting bob authz SubmitClaimAuthorization on behalf of entity admin account
    testMsg("test Exec Authz Authz", () =>
      Authz.MsgExecAuthz(entityDid, collectionId)
    );
  });
