import Long from "long";
import { createRegistry } from "../../src";
import { OrderBy } from "../../src/codegen/cosmos/tx/v1beta1/service";
import { getUser, queryClient, testMsg, utils } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Wasm from "../modules/CosmWasm";
import * as Cosmos from "../modules/Cosmos";

export const wasmBasic = () =>
  describe("Testing the wasmd module", () => {
    let contractAddress: string;
    contractAddress =
      "ixo1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqvg5w3c";
    testMsg("/cosmwasm.wasm.v1.MsgInstantiateContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const msg = { minter: tester };

      const res = await Wasm.WasmInstantiateTrx(2, JSON.stringify(msg));
      console.log({ res });
      contractAddress = utils.common.getValueFromEvents(
        res,
        "instantiate",
        "_contract_address"
      );
      console.log({ contractAddress });
      return res;
    });

    const tokenId1 =
      "CARBON:bafybeib22s3lyz3guicawoboeieltpyewkdnuuheklpeu3zbrwekmpdew4";
    const tokenId2 =
      "CARBON:bafybeib22s3lyz3guicawoboeieltpyewkdnuuheklpeu3zbrwekmpdew5";

    testMsg("/cosmwasm.wasm.v1.MsgExecuteContract", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;
      const bob = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        // mint: {
        //   to: alice,
        //   token_id: tokenId2,
        //   value: "5000",
        //   uri: "did:ixo:entity:eaff254f2fc62aefca0d831bc7361c14",
        // },
        batch_mint: {
          to: tester,
          batch: [[tokenId2, "5000", "uri"]],
        },
        // send_from: {
        //   from: tester,
        //   to: alice,
        //   token_id: tokenId1,
        //   value: "3",
        // },
        // batch_send_from: {
        //   from: alice,
        //   to: bob,
        //   batch: [
        //     [tokenId1, "3", ""],
        //     [tokenId2, "1000", ""],
        //   ],
        // },
      };

      const res = await Wasm.WasmExecuteTrx(
        contractAddress,
        JSON.stringify(msg),
        WalletUsers.tester
      );
      console.log(res);
      console.log(JSON.parse(res.rawLog!)[0].events);
      return res;
    });

    test("query wasm state", async () => {
      const tester = (await getUser().getAccounts())[0].address;
      const alice = (await getUser(WalletUsers.alice).getAccounts())[0].address;
      const bob = (await getUser(WalletUsers.bob).getAccounts())[0].address;
      const msg = {
        // balance: {
        //   owner: alice,
        //   token_id: tokenId,
        // },
        batch_balance: {
          owner: alice,
          token_ids: [tokenId1, tokenId2],
        },
        // token_info: {
        //   token_id: tokenId2,
        // },
      };
      const res = await queryClient.cosmwasm.wasm.v1.smartContractState({
        address: contractAddress,
        queryData: utils.conversions.JsonToArray(JSON.stringify(msg)),
      });
      console.log(utils.conversions.Uint8ArrayToJS(res.data));
      expect(res).toBeTruthy();
    });
  });

export const daoDao = () =>
  describe("Testing the DaoDao contracts upload", () => {
    test("query wasm store codes", async () => {
      const res = await queryClient.cosmwasm.wasm.v1.codes();
      console.log(res.codeInfos);
      expect(res).toBeTruthy();
    });

    const contracts = [
      {
        name: "dao_core",
        path: ["contracts", "daodao", "dao_core.wasm"],
      },
      {
        name: "cw_admin_factory",
        path: ["contracts", "daodao", "cw_admin_factory.wasm"],
      },
      {
        name: "cw_fund_distributor",
        path: ["contracts", "daodao", "cw_fund_distributor.wasm"],
      },
      {
        name: "cw_payroll_factory",
        path: ["contracts", "daodao", "cw_payroll_factory.wasm"],
      },
      {
        name: "cw_token_swap",
        path: ["contracts", "daodao", "cw_token_swap.wasm"],
      },
      {
        name: "cw_vesting",
        path: ["contracts", "daodao", "cw_vesting.wasm"],
      },
      {
        name: "dao_migrator",
        path: ["contracts", "daodao", "dao_migrator.wasm"],
      },
      {
        name: "dao_pre_propose_approval_single",
        path: ['contracts", "daodao", "dao_pre_propose_approval_singl.wasme'],
      },
      {
        name: "dao_pre_propose_approver",
        path: ["contracts", "daodao", "dao_pre_propose_approver.wasm"],
      },
      {
        name: "dao_pre_propose_multiple",
        path: ["contracts", "daodao", "dao_pre_propose_multiple.wasm"],
      },
      {
        name: "dao_pre_propose_single",
        path: ["contracts", "daodao", "dao_pre_propose_single.wasm"],
      },
      {
        name: "dao_proposal_condorcet",
        path: ["contracts", "daodao", "dao_proposal_condorcet.wasm"],
      },
      {
        name: "dao_proposal_multiple",
        path: ["contracts", "daodao", "dao_proposal_multiple.wasm"],
      },
      {
        name: "dao_proposal_single",
        path: ["contracts", "daodao", "dao_proposal_single.wasm"],
      },
      {
        name: "cw20_stake",
        path: ["contracts", "daodao", "cw20_stake.wasm"],
      },
      {
        name: "cw20_stake_external_rewards",
        path: ["contracts", "daodao", "cw20_stake_external_rewards.wasm"],
      },
      {
        name: "cw20_stake_reward_distributor",
        path: ['contracts", "daodao", "cw20_stake_reward_distributor.wasm'],
      },
      {
        name: "dao_voting_cw4",
        path: ["contracts", "daodao", "dao_voting_cw4.wasm"],
      },
      {
        name: "dao_voting_cw20_staked",
        path: ["contracts", "daodao", "dao_voting_cw20_staked.wasm"],
      },
      {
        name: "dao_voting_cw721_staked",
        path: ["contracts", "daodao", "dao_voting_cw721_staked.wasm"],
      },
      {
        name: "dao_voting_native_staked",
        path: ["contracts", "daodao", "dao_voting_native_staked.wasm"],
      },
      {
        name: "cw4_group",
        path: ["contracts", "cosmwasm", "cw4_group.wasm"],
      },
      {
        name: "cw20_base",
        path: ["contracts", "cosmwasm", "cw20_base.wasm"],
      },
      {
        name: "cw721_base",
        path: ["contracts", "cosmwasm", "cw721_base.wasm"],
      },
      {
        name: "wasmswap",
        path: ["contracts", "wasmswap", "wasmswap.wasm"],
      },
    ];

    for (const contract of contracts) {
      let proposalId: number;
      testMsg(
        `/cosmos.gov.v1beta1.MsgSubmitProposal store ${contract.name} contract`,
        async () => {
          const res = await Cosmos.MsgSubmitProposalStoreCW(
            contract.name,
            contract.path
          );
          proposalId = utils.common.getValueFromEvents(
            res,
            "submit_proposal",
            "proposal_id"
          );
          console.log({ ...contract, proposalId });
          return res;
        }
      );
      testMsg(
        `/cosmos.gov.v1beta1.MsgVote vote ${contract.name} contract proposal`,
        () => Cosmos.MsgVote(proposalId)
      );
    }
  });
