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

    let recipient = "did:x:zQ3shgFA5dLwVfoZKzjk8DkBeF8YDjh7ny9q3MW225828zJno";
    let entities = [
      "did:ixo:entity:091ffc2c61e589f3a6c67f68e9b6919d",
      "did:ixo:entity:0be051e4cc6b5bfcf3ff9def61ed456a",
      "did:ixo:entity:114d77d59451dc34656f369af5b6413d",
      "did:ixo:entity:135834ccc5f22aa54dcb4febffb90cea",
      "did:ixo:entity:15d00c57dc5893ec9824666ac87112bd",
      "did:ixo:entity:1603997de440933e0303b52417e1789f",
      "did:ixo:entity:1643556ec26f1a14e1091028f1261482",
      "did:ixo:entity:182c9d25687433d93ea435af565a526e",
      "did:ixo:entity:1a88c9837ede30f623cb50e622063603",
      "did:ixo:entity:2069414197644729f4dc8849e416787d",
    ];

    // const entitiesToTransfer = usersEntities
    //   .map((e) => {
    //     const isGood = goodEntities.includes(e.externalId);
    //     return !isGood ? e.id : null;
    //   })
    //   .filter((e) => e);
    // console.log("entitiesToTransfer", entitiesToTransfer.length);

    testMsg("/ixo.entity.v1beta1.MsgTransferEntity", async () => {
      const res = await Entity.TransferEntity(
        WalletUsers.tester,
        entities as any,
        recipient
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

      // adding 8seconds timeout for blocksync to catch up before querying entities
      await timeout(8000);

      // if entityIds are passed in, use those, otherwise get all entities
      const entitiesRes = entityIds?.length
        ? { data: entityIds.map((id) => ({ id })) }
        : await axios.get(`${blocksyncUrl}/api/entity/all`);
      const chunkSize = 200;
      let index = 0;
      // console.log("entitiesRes length", entitiesRes.data.length);

      for (const entities of chunkArray(entitiesRes.data, chunkSize)) {
        const verifyBatches: string[] = [];

        for (const entity of entities as any) {
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
            // console.dir(verifyBatches, { depth: null });
            const res = await Entity.UpdateEntityVerified(
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
      return true as any;
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
