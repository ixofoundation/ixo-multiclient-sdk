import { generateNewWallet, testMsg } from "../helpers/common";
import { generateNewConstant, WalletUsers } from "../helpers/constants";
import * as Bond from "../modules/Bond";

export const bondsBasic = () =>
  describe("Testing the Bonds module", () => {
    testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(false));
    testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.tester, 1)); // Buy one token first to hatch bond
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(undefined, 20000));
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
      Bond.SetNextAlpha("520000000000000000")
    );
    testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
      Bond.MakeOutcomePayment(1000)
    );
    testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
      Bond.UpdateBondState("SETTLE")
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () => Bond.WithdrawShare());
  });

export const bondsSellsDisabled = () =>
  describe("Testing the Bonds module sells disabled", () => {
    // beforeAll(() => {
    //   generateNewConstant("bondToken");
    //   return generateNewWallet(WalletUsers.bond);
    // });
    // testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(false));
    // testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
    //   Bond.Buy(WalletUsers.tester, 400000)
    // );
    // // Withdrawing of reserve during HATCH state not possible...
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    //   () => Bond.WithdrawReserve(WalletUsers.alice, 10),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
    //   Bond.Buy(WalletUsers.alice, 400000)
    // );
    // // Cannot buy 200001 as d0 is 1mil and must buy exact amount to hatch bond
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgBuy",
    //   () => Bond.Buy(WalletUsers.bob, 200001),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.bob, 200000));
    // testMsg("/ixo.bonds.v1beta1.MsgWithdrawReserve", () =>
    //   Bond.WithdrawReserve(WalletUsers.tester, 400000)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
    //   Bond.SetNextAlpha("510000000000000000")
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgWithdrawReserve", () =>
    //   Bond.WithdrawReserve(WalletUsers.tester, 5000)
    // );
    // // Cannot withdraw 595001res due to insufficient funds...
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    //   () => Bond.WithdrawReserve(WalletUsers.tester, 595001),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
    //   Bond.SetNextAlpha("400000000000000000")
    // );
    // // Cannot change public alpha 0.4->0.6...
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    //   () => Bond.SetNextAlpha("600000000000000000"),
    //   false
    // );
    // // Cannot sell because sells are disabled...
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgSell",
    //   () => Bond.Sell(WalletUsers.alice, 10),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
    //   Bond.MakeOutcomePayment(8000000)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
    //   Bond.UpdateBondState("SETTLE")
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
    //   Bond.WithdrawShare(WalletUsers.alice)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
    //   Bond.WithdrawShare(WalletUsers.bob)
    // );
  });

export const bondsSellsEnabled = () =>
  describe("Testing the Bonds module sells enabled", () => {
    // beforeAll(() => {
    //   generateNewConstant("bondToken");
    //   return generateNewWallet(WalletUsers.bond);
    // });
    // testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(true));
    // testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
    //   Bond.Buy(WalletUsers.tester, 400000)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
    //   Bond.Buy(WalletUsers.alice, 400000)
    // );
    // // Cannot buy 200001 as d0 is 1mil and must buy exact amount to hatch bond
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgBuy",
    //   () => Bond.Buy(WalletUsers.bob, 200001),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.bob, 200000));
    // // Cannot withdraw reserve as disabled
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgWithdrawReserve",
    //   () => Bond.WithdrawReserve(WalletUsers.tester, 400000),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
    //   Bond.SetNextAlpha("510000000000000000")
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
    //   Bond.SetNextAlpha("400000000000000000")
    // );
    // // Cannot change public alpha 0.4->0.6...
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgSetNextAlpha",
    //   () => Bond.SetNextAlpha("600000000000000000"),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgSell", () =>
    //   Bond.Sell(WalletUsers.alice, 400000)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
    //   Bond.MakeOutcomePayment(8000000)
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
    //   Bond.UpdateBondState("SETTLE")
    // );
    // // Cannot withdraw sahre as sold all tokens
    // testMsg(
    //   "/ixo.bonds.v1beta1.MsgWithdrawShare",
    //   () => Bond.WithdrawShare(WalletUsers.alice),
    //   false
    // );
    // testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
    //   Bond.WithdrawShare(WalletUsers.bob)
    // );
  });
