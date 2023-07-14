import { generateNewWallet, sendFromFaucet, testMsg } from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";
import * as Authz from "../modules/Authz";
import { WalletUsers } from "../helpers/constants";

export const bankBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSend", async () => {
      const res = await Cosmos.BankSendTrx(
        undefined,
        WalletUsers.tester,
        WalletUsers.alice,
        "secp",
        "secp"
      );
      return res;
    });
  });

export const authzBasic = () =>
  describe("Testing the cosmos bank module", () => {
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
          WalletUsers.tester
        );
        return res;
      });
    })
  );

export const govDeposit = () =>
  describe("Testing deposit funds into proposals", () => {
    testMsg("/cosmos.bank.v1beta1.MsgDeposit", () => Cosmos.MsgDeposit(434));
  });

export const feegrantBasic = () =>
  describe("Testing feegrant for user", () => {
    testMsg("/cosmos.feegrant.v1beta1.MsgGrantAllowance", () =>
      Authz.MsgGrantAllowance()
    );
  });
