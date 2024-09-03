import { generateNewWallet, testMsg, timeout } from "../helpers/common";
import { generateNewConstant, WalletUsers } from "../helpers/constants";
import * as Bond from "../modules/Bond";

export const bondsBasic = () =>
  describe("Testing the Bonds module", () => {
    beforeAll(() => {
      generateNewConstant("bondToken");
      return generateNewWallet(WalletUsers.bond);
    });

    testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(false));
    testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    testMsg("/ixo.bonds.v1beta1.MsgBuy", async () => {
      const res = await Bond.Buy(WalletUsers.tester, 1000);
      // console.dir(res, { depth: null });
      return res;
    }); // Buy 1000 token first to hatch bond
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", async () => {
      console.log(
        "waiting 8 seconds to ensure 1 batchBlocks bonds has passed 1 block to change state from HATCH to OPEN"
      );
      await timeout(1000 * 8);
      return await Bond.SetNextAlpha("510000000000000000");
    });
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
      Bond.Buy(WalletUsers.tester, 1000)
    );
    testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
      Bond.MakeOutcomePayment(900)
    );
    testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
      Bond.UpdateBondState("SETTLE")
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () => Bond.WithdrawShare());
  });

export const bondsSellsDisabled = () =>
  describe("Testing the Bonds module sells disabled", () => {
    beforeAll(() => {
      generateNewConstant("bondToken");
      return generateNewWallet(WalletUsers.bond);
    });
    testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(false));
    testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
      Bond.Buy(WalletUsers.tester, 500)
    );
    // Withdrawing of reserve during HATCH state not possible...
    testMsg(
      "/ixo.bonds.v1beta1.MsgWithdrawReserve",
      () => Bond.WithdrawReserve(WalletUsers.alice, 10),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
      Bond.Buy(WalletUsers.alice, 400)
    );
    // Cannot buy 101 as d0 is 1000 and must buy exact amount to hatch bond
    testMsg(
      "/ixo.bonds.v1beta1.MsgBuy",
      () => Bond.Buy(WalletUsers.bob, 101),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.bob, 100));
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawReserve", async () => {
      console.log(
        "waiting 8 seconds to ensure 1 batchBlocks bonds has passed 1 block to change state from HATCH to OPEN"
      );
      await timeout(1000 * 8);
      return await Bond.WithdrawReserve(WalletUsers.tester, 400);
    });
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
      Bond.SetNextAlpha("510000000000000000")
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawReserve", () =>
      Bond.WithdrawReserve(WalletUsers.tester, 500)
    );
    // Cannot withdraw 595001res due to insufficient funds...
    testMsg(
      "/ixo.bonds.v1beta1.MsgWithdrawReserve",
      () => Bond.WithdrawReserve(WalletUsers.tester, 595001),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
      Bond.SetNextAlpha("400000000000000000")
    );
    // Cannot change public alpha 0.4->0.6...
    testMsg(
      "/ixo.bonds.v1beta1.MsgSetNextAlpha",
      () => Bond.SetNextAlpha("600000000000000000"),
      false,
      false
    );
    // Cannot sell because sells are disabled...
    testMsg(
      "/ixo.bonds.v1beta1.MsgSell",
      () => Bond.Sell(WalletUsers.alice, 10),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
      Bond.MakeOutcomePayment(800)
    );
    testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
      Bond.UpdateBondState("SETTLE")
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
      Bond.WithdrawShare(WalletUsers.alice)
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
      Bond.WithdrawShare(WalletUsers.bob)
    );
  });

export const bondsSellsEnabled = () =>
  describe("Testing the Bonds module sells enabled", () => {
    beforeAll(() => {
      generateNewConstant("bondToken");
      return generateNewWallet(WalletUsers.bond);
    });
    testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(true));
    testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
      Bond.Buy(WalletUsers.tester, 500)
    );
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () =>
      Bond.Buy(WalletUsers.alice, 400)
    );
    // Cannot buy 101 as d0 is 1000 and must buy exact amount to hatch bond
    testMsg(
      "/ixo.bonds.v1beta1.MsgBuy",
      () => Bond.Buy(WalletUsers.bob, 101),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.bob, 100));
    // Cannot withdraw reserve as disabled
    testMsg(
      "/ixo.bonds.v1beta1.MsgWithdrawReserve",
      () => Bond.WithdrawReserve(WalletUsers.tester, 200),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
      Bond.SetNextAlpha("510000000000000000")
    );
    testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
      Bond.SetNextAlpha("400000000000000000")
    );
    // Cannot change public alpha 0.4->0.6...
    testMsg(
      "/ixo.bonds.v1beta1.MsgSetNextAlpha",
      () => Bond.SetNextAlpha("600000000000000000"),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgSell", () =>
      Bond.Sell(WalletUsers.alice, 400)
    );
    testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
      Bond.MakeOutcomePayment(300)
    );
    testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
      Bond.UpdateBondState("SETTLE")
    );
    // Cannot withdraw share as sold all tokens
    testMsg(
      "/ixo.bonds.v1beta1.MsgWithdrawShare",
      () => Bond.WithdrawShare(WalletUsers.alice),
      false,
      false
    );
    testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () =>
      Bond.WithdrawShare(WalletUsers.bob)
    );
  });
