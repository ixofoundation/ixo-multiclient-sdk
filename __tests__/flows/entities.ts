import axios from "axios";
import {
  chunkArray,
  generateNewWallet,
  getUser,
  testMsg,
  timeout,
  utils,
} from "../helpers/common";
import { BlocksyncUrls, WalletUsers } from "../helpers/constants";
import * as Entity from "../modules/Entity";
import * as Cosmos from "../modules/Cosmos";
import { dids } from "../setup/constants";
import { ChainNetwork } from "../../src/custom_queries/chain.types";
import { setAndLedgerUser } from "../setup/helpers";

export const enititiesBasic = () =>
  describe("Testing the entities module", () => {
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS),
    //   ])
    // );

    let entityDid = "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14"; // admin account ixo1kqmtxkggcqa9u34lnr6shy0euvclgatw4f9zz5
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
      const res = await Entity.CreateEntity();
      entityDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      console.log({ entityDid });
      return res;
    });

    testMsg("/ixo.entity.v1beta1.MsgUpdateEntityVerified", () =>
      Entity.UpdateEntityVerified(undefined, [entityDid])
    );

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

    testMsg("/ixo.entity.v1beta1.MsgGrantEntityAccountAuthz", () =>
      Entity.GrantEntityAccountAuthz(entityDid, name)
    );

    testMsg("/ixo.entity.v1beta1.MsgRevokeEntityAccountAuthz", () =>
      Entity.MsgRevokeEntityAccountAuthz(entityDid, name)
    );

    testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
      Entity.TransferEntity(
        WalletUsers.tester,
        [entityDid]
        // "did:x:zQ3shQ3FDm5NaUfDNUuTexmWNBLAYMDo8fwLVPMfpVV2FUzub"
      )
    );
  });

export const transferEntities = (mnemonic?: string) =>
  describe("Testing the entities module", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, mnemonic || process.env.ROOT_ECS),
      ])
    );

    const recipient = "did:x:zQ3shtUckPKEBN6fWWRTWViBFPpVtCce6DTWPrWHTSwczyLJN";

    // can provide static dids of entities to transfer
    let entities = [
      "did:ixo:entity:e0f8c06a5d2798e4c5f461e386de8396",
      "did:ixo:entity:56d1ea4062745f04706e38f495e2482e",
    ];

    // // or provide static ids of stoves to transfer, if this list is empty then will use the dids above
    // // the stoves here must be from the stovesCollection imported above
    // const stovesCollection = require("../../assets/documents/emerging/stoves_genesis_collection.json");
    // const stoveIds = ["310025325"];
    // if (stoveIds?.length) {
    //   entities = stoveIds
    //     .map((id) => stovesCollection.find((e) => e.externalId === id)?.id)
    //     ?.filter((e) => !!e);
    // }

    // // paste all dids of entites belonging to user here, so can filter out entities not belonging to user
    // const entitiesBelongingToUser: string[] = [];
    // if (entitiesBelongingToUser?.length) {
    //   entities = entities.filter((e) => entitiesBelongingToUser.includes(e));
    // }

    // const entitiesToTransfer = usersEntities
    //   .map((e) => {
    //     const isGood = goodEntities.includes(e.externalId);
    //     return !isGood ? e.id : null;
    //   })
    //   .filter((e) => e);
    // console.log("entitiesToTransfer", entitiesToTransfer.length);

    testMsg("/ixo.entity.v1beta1.MsgTransferEntity", async () => {
      // console.log(stoveIds.length);
      // console.log(entities.length);
      // return true as any;
      const res = await Entity.TransferEntity(
        WalletUsers.tester,
        entities as any,
        recipient,
        "ECS to Dormant Account"
      );
      return res;
    });
  });

// ------------------------------------------------------------
// flow to verify all entities for a specific relayer
// ------------------------------------------------------------
export const relayerVerifyAllEntities = (
  mnemonic?: string,
  relayerNodeDid?: string,
  chainNetworkParam?: ChainNetwork,
  entityIds?: string[],
  entityVerified = true
) =>
  describe("Verifying all entities under a relayer", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(
          WalletUsers.tester,
          mnemonic || process.env.ROOT_IMPACTS
        ),
      ])
    );

    // helper to send funds to tester to update entity verified fields
    // testMsg("test Bank Send to tester for funds", () =>
    //   Cosmos.BankSendTrx(100000000, WalletUsers.alice)
    // );

    const blocksyncUrl = BlocksyncUrls[chainNetworkParam || "devnet"];

    testMsg("Verifying", async () => {
      const tester = getUser(WalletUsers.tester);
      const relayerDid = relayerNodeDid || tester.did;
      console.log(blocksyncUrl);

      // adding 8seconds timeout for blocksync to catch up before querying entities
      await timeout(8000);

      // if entityIds are passed in, use those, otherwise get all entities
      const entitiesRes = entityIds?.length
        ? { data: entityIds.map((id) => ({ id })) }
        : await axios.get(`${blocksyncUrl}/api/entity/all`);
      const chunkSize = 200;
      let index = 0;
      // console.log("entitiesRes length", entitiesRes.data.length);

      let res;

      for (const entities of chunkArray(entitiesRes.data, chunkSize)) {
        const verifyBatches: string[] = [];

        for (const entity of entities as any) {
          console.log(entity.id);
          index++;
          // if (index > 7) break;
          // console.log("verifying for entity", index);

          if (
            entityIds?.length ||
            (entity.relayerNode === relayerDid &&
              entity.entityVerified === false)
          ) {
            verifyBatches.push(entity.id);
          }
        }

        if (verifyBatches.length != 0) {
          try {
            console.log("verifyBatches length", verifyBatches.length);
            console.log(entityVerified);
            // console.dir(verifyBatches, { depth: null });
            res = await Entity.UpdateEntityVerified(
              undefined,
              verifyBatches,
              relayerDid,
              entityVerified
            );
            if (res.code != 0) throw new Error(res.rawLog);
          } catch (error) {
            console.log("verifyBatches error", error.message);
          }
        }
      }
      return res as any;
    });
  });

// Helper to update entity status
export const enititiesSetStatus = () =>
  describe("Testing the entities module", () => {
    beforeAll(() =>
      Promise.all([
        // generateNewWallet(WalletUsers.tester, process.env.ROOT_EMERGING!),
        generateNewWallet(WalletUsers.tester, process.env.ROOT_ED_EMERGING!),
      ])
    );

    let entityDid = "did:ixo:entity:17fe01b2d77fa6f3d646ba1871432fbd";
    let status = 1;

    testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () =>
      Entity.UpdateEntity({ id: entityDid, entityStatus: status })
    );
  });
