import {
  chunkArray,
  generateNewWallet,
  getFileFromPath,
  getUser,
  queryClient,
  saveFileToPath,
  sendFromFaucet,
  testMsg,
} from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";
import * as Authz from "../modules/Authz";
import { WalletUsers } from "../helpers/constants";
// @ts-ignore
import Long from "long";
import { Grant } from "../../src/codegen/cosmos/feegrant/v1beta1/feegrant";
import { createRegistry, utils } from "../../src";
import { fromTimestamp } from "../../src/codegen/helpers";

export const bankBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSend", async () => {
      const res = await Cosmos.BankSendTrx(
        undefined,
        WalletUsers.tester,
        WalletUsers.alice,
        "secp",
        "ed",
        "ixo1y6lumtueege99zacvjhzdw39kh8rtas27c0kxl"
      );
      return res;
    });
    // testMsg("/cosmos.bank.v1beta1.MsgSend", async () => {
    //   const res = await Cosmos.BankSendTrx(
    //     10000,
    //     WalletUsers.alice,
    //     WalletUsers.alice,
    //     "ed",
    //     "secp"
    //     // "ixo1kaluffrp0ncy3dlrerla3nd8v6zxwzmega3v7g"
    //   );
    //   return res;
    // });
  });

export const textProposalBasic = () =>
  describe("Testing the cosmos gov module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSubmitProposal", async () => {
      const res = await Cosmos.MsgProposalText();
      return res;
    });
  });

export const authzBasic = () =>
  describe("Testing the cosmos bank module", () => {
    // beforeAll(() =>
    //   Promise.all([
    //     generateNewWallet(WalletUsers.tester, process.env.ROOT_IMPACTS),
    //   ])
    // );

    testMsg("test Grant Send", async () => {
      const res = await Authz.MsgGrantSend();
      console.log(res);
      return res;
    });

    // quick helper to send funds to an address
    // testMsg("test Bank Send", () =>
    //   Cosmos.BankSendTrx(
    //     1000000000,
    //     WalletUsers.tester,
    //     undefined,
    //     "ixo1syjk0qh59vxz3zk776m5vrzvyv4nwpvh57yps2"
    //   )
    // );

    testMsg("test Exec Send", () => Authz.MsgExecSend(1000000));
    // testMsg("test Exec Send", () => Authz.MsgExecSendIbc());
  });

export const sendTokens = (rounds = 1) =>
  new Array(rounds).fill(0).map(() =>
    describe("Testing the cosmos bank module: send", () => {
      beforeAll(() => generateNewWallet(WalletUsers.random));

      sendFromFaucet(WalletUsers.random);

      testMsg("Test send", async () => {
        const ixo = 9;
        const res = await Cosmos.BankSendTrx(
          ixo * Math.pow(10, 6),
          WalletUsers.random,
          WalletUsers.tester,
          undefined,
          undefined
          // "ixo1mgwecafj48kuu0jawyw5emsqgpu36vthpph6d8"
        );
        return res;
      });
    })
  );

export const govDeposit = () =>
  describe("Testing deposit funds into proposals", () => {
    testMsg("/cosmos.bank.v1beta1.MsgDeposit", () => Cosmos.MsgDeposit(446));
  });

export const feegrantBasic = () =>
  describe("Testing feegrant for user", () => {
    testMsg("/cosmos.feegrant.v1beta1.MsgGrantAllowance", () =>
      Authz.MsgGrantAllowance()
    );
  });

export const feegrantAllCurrentUsers = () =>
  describe("Refreshing feegrant for all current users", () => {
    beforeAll(() =>
      Promise.all([
        generateNewWallet(WalletUsers.tester, process.env.ROOT_FEEGRANT),
      ])
    );

    testMsg("/cosmos.feegrant.v1beta1.MsgGrantAllowance", async () => {
      const address = (await getUser(WalletUsers.tester).getAccounts())[0]
        .address;

      let allowances: Grant[] = [];
      const query = async (key?: Uint8Array) =>
        await queryClient.cosmos.feegrant.v1beta1.allowancesByGranter({
          granter: address,
          pagination: {
            // @ts-ignore
            key: key || [],
            limit: Long.fromNumber(1000),
            offset: Long.fromNumber(0),
          },
        });

      let key: Uint8Array | undefined;
      while (true) {
        const res = await query(key);
        allowances = [...allowances, ...res.allowances];
        key = res.pagination?.nextKey || undefined;
        if (!key?.length) break;
      }

      // // optionally allow allowances to be fetched from saved file
      // // then comment out save to file below if use this
      // allowances = JSON.parse(
      //   getFileFromPath(
      //     ["documents", "random", "mainnet_feegrant_addresses.json"],
      //     "ascii"
      //   )
      // );
      // // allowances fro file is string[], first turn into set to remove duplicates
      // const allowancesSet = new Set(allowances);
      // allowances = Array.from(allowancesSet).map((a) => ({
      //   grantee: a,
      // })) as any;

      // divide grantees into chunks of 200
      let granteesChunks = chunkArray<string>(
        allowances.map((a) => a.grantee),
        180
      );

      console.log(allowances.length);
      // to save current grantee addresses incase something goes wrong
      saveFileToPath(
        ["documents", "random", "mainnet_feegrant_addresses.json"],
        JSON.stringify(
          allowances.map((a) => a.grantee),
          null,
          2
        )
      );

      let revokeCount = 0;
      // first revoke all current feegrants
      for (const grantees of granteesChunks) {
        revokeCount++;
        console.log(
          `revoking batch ${revokeCount} of ${granteesChunks.length}`
        );
        const ress = await Authz.MsgRevokeAllowance(
          WalletUsers.tester,
          grantees
        );
        if (ress.code != 0) throw new Error(ress.rawLog);
      }

      let grantCount = 0;
      // then grant all current users new feegrants
      for (const grantees of granteesChunks) {
        grantCount++;
        console.log(`granting batch ${grantCount} of ${granteesChunks.length}`);
        const ress = await Authz.MsgGrantAllowanceFeegrant(
          WalletUsers.tester,
          grantees
        );
        if (ress.code != 0) throw new Error(ress.rawLog);
      }

      return true as any;
    });
  });

export const stakeBasic = () =>
  describe("Testing stake funds and rewards", () => {
    testMsg("/cosmos.staking.v1beta1.MsgDelegate", () => Cosmos.MsgStake());
    // testMsg("/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation", () =>
    //   Cosmos.MsgCancelUnbondingDelegation()
    // );
  });

// ------------------------------------------------------------
// flow to update a modules params, then need to vote on it
// ------------------------------------------------------------
export const updateParamsProposal = () =>
  describe("Testing the gov module", () => {
    let proposalId: number;

    testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal update params", async () => {
      const res = await Cosmos.MsgSubmitProposalUpdateParams();
      proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ proposalId });
      return res;
    });
    testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId));
  });
