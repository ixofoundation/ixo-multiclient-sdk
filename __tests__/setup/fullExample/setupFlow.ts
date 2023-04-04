import {
  customQueries,
  generateNewWallet,
  sendFromFaucet,
  testMsg,
  utils,
} from "../../helpers/common";
import { WalletUsers } from "../../helpers/constants";
import * as Iid from "../Iid";
import * as IidMain from "../../modules/Iid";
import * as Wasm from "../../modules/CosmWasm";
import { createGroupMsg } from "../Groups";
import {
  chainNetwork,
  LinkedResourcesUploaded,
  SetupGroupConstantKeys,
  setup_dao_constants,
} from "./constants";
import * as Entity from "../Entity";

export const impactsFlow = () =>
  describe("Flow for creating a Entity (dao/protocol/oracle)", () => {
    // ===============================================================
    // Set Testers mnemonic to env variable and ledger root user did
    // ===============================================================

    // below test can fail as user might already be ledgered, that is ok
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.TESTER_MNEMONIC)
    );

    // @ts-ignore
    if (chainNetwork != "mainnet") {
      // Send from faucet for devnet/testnet
      sendFromFaucet(WalletUsers.tester);
    }
    testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
      IidMain.CreateIidDoc(WalletUsers.tester)
    );

    // ===============================================================
    // Create dao dao groups
    // ===============================================================
    let groupFromConstants: SetupGroupConstantKeys;

    // below is a generic function, you can copy it to make more groups, you only need to:
    // 1 - ensure to have created a correlating constant group in setup_group_constants() function
    //     in the constants.ts file
    // 2 - define the variable as below to save the group address and change it in function
    // 3 - change the groupFromConstants to the one you want to use
    // =============================== START
    let management_group: string;
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract dao core", async () => {
      groupFromConstants = "management_group";
      const res = await Wasm.WasmInstantiateTrx(
        customQueries.contract.getContractCode(chainNetwork, "dao_core")!,
        JSON.stringify(createGroupMsg(chainNetwork, groupFromConstants))
      );
      management_group = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      if (res.code != 0 || !management_group) {
        console.log(res);
        throw new Error(res.rawLog);
      }
      console.log({ management_group });
      const didRes = await Iid.CreateIidDocForGroup(management_group);
      return didRes;
    });
    // =============================== END

    // =============================== START
    let members_group: string;
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract dao core", async () => {
      groupFromConstants = "members_group";
      const res = await Wasm.WasmInstantiateTrx(
        customQueries.contract.getContractCode(chainNetwork, "dao_core")!,
        JSON.stringify(createGroupMsg(chainNetwork, groupFromConstants))
      );
      members_group = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      if (res.code != 0 || !members_group) {
        console.log(res);
        throw new Error(res.rawLog);
      }
      console.log({ members_group });
      const didRes = await Iid.CreateIidDocForGroup(members_group);
      return didRes;
    });
    // =============================== END

    // ===============================================================
    // Create Entities
    // ===============================================================
    // You can create all your entities below, you can just copy a whole entity creation and make
    // as many as you want, just ensure you have all the groups needed that will be used and that for each
    // entity there is a corresponding exported setup_{name}_constants that you can use for the entity

    // you can customize a few things below as follows:
    // 1 - choose which group is the management group, which will be added to the entities verification methods
    // 2 - add more groups to groupAddresses and they will be added as linkedEntities
    // =============================== START
    let daoDid: string;
    let adminAccount: string;
    let linkedResourcesUploaded: LinkedResourcesUploaded = [];
    testMsg("/ixo.entity.v1beta1.MsgCreateEntity dao", async () => {
      const daoConst = setup_dao_constants({
        management: management_group,
        groupAddresses: [management_group, members_group],
      });

      // Uploading linkedResources
      for (const { name, type, storage, json } of daoConst.linkedResources) {
        if (storage === "cellnode") {
          const cellnode = await customQueries.cellnode.uploadPublicDoc(
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: cellnode.key,
            type,
            storage,
          });
        } else if (storage === "ipfs") {
          const web3 = await customQueries.cellnode.uploadWeb3Doc(
            utils.common.generateId(12),
            "application/ld+json",
            Buffer.from(JSON.stringify(json)).toString("base64"),
            undefined,
            chainNetwork
          );
          linkedResourcesUploaded.push({
            name,
            cid: web3.cid,
            type,
            storage,
          });
        }
      }
      console.log({ linkedResourcesUploaded });

      // Create the Entity
      const res = await Entity.CreateEntity(
        daoConst.entity,
        linkedResourcesUploaded
      );
      daoDid = utils.common.getValueFromEvents(res, "wasm", "token_id");
      adminAccount = utils.common.getValueFromEvents(
        res,
        "ixo.entity.v1beta1.EntityCreatedEvent",
        "entity",
        (s) => s.accounts.find((a) => a.name === "admin").address
      );
      console.log({ daoDid, adminAccount });

      // Transfer Entity to group
      // choose inside generateCosmwasmDid() function which group
      // is the owner group, to which the dao will be transfered to
      const resTransfer = await Entity.TransferEntity(
        daoDid,
        utils.did.generateCosmwasmDid(members_group)
      );
      return resTransfer;
    });
    // =============================== END
  });
