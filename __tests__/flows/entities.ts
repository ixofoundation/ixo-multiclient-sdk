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

    let recipient = "did:x:zQ3shdfEnNGfFwdbT8ATxHYVpmYLFxEPCne6tu73KL79NewAA";
    let entities = [
      "did:ixo:entity:02f1939d7054b5b0df3e5a0d9cc2c8bf",
      "did:ixo:entity:0978400d4375110e22228ecdbb5e8d73",
      "did:ixo:entity:09fb798bed0d1df22827efea0f94bcfd",
    ];

    testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
      Entity.TransferEntity(WalletUsers.tester, entities, recipient)
    );
  });

// ------------------------------------------------------------
// flow to verify all entities for a specific relayer
// ------------------------------------------------------------
export const relayerVerifyAllEntities = (
  mnemonic?: string,
  relayerNodeDid?: string,
  chainNetworkParam?: ChainNetwork
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

      // adding 8seconds timeout for blocksyn to catch up before querying entities
      await timeout(8000);

      const entitiesRes = await axios.get(`${blocksyncUrl}/api/entity/all`);
      const chunkSize = 200;
      let index = 0;

      for (const entities of chunkArray(entitiesRes.data, chunkSize)) {
        const verifyBatches: string[] = [];

        for (const entity of entities as any) {
          index++;
          // if (index > 7) break;
          // console.log("verifying for entity", index);

          if (
            entity.relayerNode === relayerDid &&
            entity.entityVerified === false
          ) {
            verifyBatches.push(entity.id);
          }
        }

        if (verifyBatches.length != 0) {
          try {
            console.log("verifyBatches length", verifyBatches.length);
            // console.dir(verifyBatches, { depth: null });
            const res = await Entity.UpdateEntityVerified(
              undefined,
              verifyBatches,
              relayerDid
            );
            if (res.code != 0) throw new Error(res.rawLog);
          } catch (error) {
            console.log("verifyBatches error", error.message);
          }
        }
      }
      return true as any;
    });
  });

// Helper to update entity status
export const enititiesSetStatus = () =>
  describe("Testing the entities module", () => {
    let entityDid = "did:ixo:entity:3e7253499daf46aab546ab7d2b884bde";
    let status = 1;

    testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () =>
      Entity.UpdateEntity({ id: entityDid, entityStatus: status })
    );
  });
