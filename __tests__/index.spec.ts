require("dotenv").config();

import {
  createQueryClient,
  generateNewWallet,
  generateWallets,
  utils,
  queryClient,
  sendFromFaucet,
  testMsg,
  testQry,
} from "./helpers/common";
import {
  generateConstants,
  generateNewConstant,
  WalletUsers,
} from "./helpers/constants";
import * as Bond from "./modules/Bond";
import * as Cosmos from "./modules/Cosmos";
import * as Gov from "./modules/Gov";
import * as Ibc from "./modules/Ibc";
import * as Entity from "./modules/Entity";
import * as Iid from "./modules/Iid";
import * as Payments from "./modules/Payments";
import * as Projects from "./modules/Projects";
import * as Token from "./modules/Token";
import * as Authz from "./modules/Authz";

beforeAll(() => {
  generateConstants();
  return Promise.all([createQueryClient(), generateWallets()]);
});

describe("Testing the iid module", () => {
  sendFromFaucet(WalletUsers.tester);
  testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () => Iid.CreateIidDoc());
  // sendFromFaucet(WalletUsers.alice);
  // testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
  //   Iid.CreateIidDoc(WalletUsers.alice)
  // );
  // sendFromFaucet(WalletUsers.bob);
  // testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
  //   Iid.CreateIidDoc(WalletUsers.bob)
  // );
  // testQry(
  //   "test query",
  //   () => queryClient.ixo.bonds.v1beta1.bond({ bondDid: "adsf" }),
  //   {
  //     bonds: [],
  //   }
  // );

  // testMsg("/ixo.iid.v1beta1.MsgUpdateIidDocument", () => Iid.UpdateIidDoc());
  // testMsg("/ixo.iid.v1beta1.MsgUpdateIidMeta", () => Iid.UpdateIidMeta());
  // testMsg("/ixo.iid.v1beta1.MsgAddIidContext", () => Iid.AddIidContext());
  // testMsg("/ixo.iid.v1beta1.MsgDeleteIidContext", () => Iid.DeleteIidContext());
  // testMsg("/ixo.iid.v1beta1.MsgAddVerification", () => Iid.AddVerification());
  // testMsg("/ixo.iid.v1beta1.MsgSetVerificationRelationships", () =>
  //   Iid.SetVerificationRelationships()
  // );
  // testMsg("/ixo.iid.v1beta1.MsgRevokeVerification", () =>
  //   Iid.RevokeVerification()
  // );
  // sendFromFaucet(WalletUsers.accordedRight);
  // testMsg("/ixo.iid.v1beta1.MsgCreateIidDocument", () =>
  //   Iid.CreateIidDoc(WalletUsers.accordedRight, WalletUsers.tester)
  // );
  // testMsg("/ixo.iid.v1beta1.MsgAddAccordedRight", () => Iid.AddAccordedRight());
  // testMsg("/ixo.iid.v1beta1.MsgDeleteAccordedRight", () =>
  //   Iid.DeleteAccordedRight()
  // );
  // testMsg("/ixo.iid.v1beta1.MsgAddController", () => Iid.AddController());
  // testMsg("/ixo.iid.v1beta1.MsgDeleteController", () => Iid.DeleteController());
  // testMsg("/ixo.iid.v1beta1.MsgAddLinkedEntity", () => Iid.AddLinkedEntity());
  // testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedEntity", () =>
  //   Iid.DeleteLinkedEntity()
  // );
  // testMsg("/ixo.iid.v1beta1.MsgAddLinkedResource", () =>
  //   Iid.AddLinkedResource()
  // );
  // testMsg("/ixo.iid.v1beta1.MsgDeleteLinkedResource", () =>
  //   Iid.DeleteLinkedResource()
  // );
  // testMsg("/ixo.iid.v1beta1.MsgAddService", () => Iid.AddService());
  // testMsg("/ixo.iid.v1beta1.MsgDeleteService", () => Iid.DeleteService());
});

describe("Testing the gov module", () => {
  // testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal", () =>
  //   Gov.MsgSubmitProposal()
  // );
});

describe("Testing the entity module", () => {
  // let assetDid: string;
  // testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
  //   const res = await Entity.CreateEntityAsset();
  //   console.log({ res });
  //   assetDid = utils.common.getValueFromEvents(
  //     res,
  //     "ixo.iid.v1beta1.IidDocumentCreatedEvent",
  //     "did"
  //   );
  //   console.log({ assetDid });
  //   return res;
  // });
  // let assetSupamotoDid: string;
  // testMsg(
  //   "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto",
  //   async () => {
  //     const res = await Entity.CreateEntityAssetSupamoto(assetDid);
  //     assetSupamotoDid = utils.common.getValueFromEvents(
  //       res,
  //       "ixo.iid.v1beta1.IidDocumentCreatedEvent",
  //       "did"
  //     );
  //     console.log({ assetSupamotoDid });
  //     return res;
  //   }
  // );
  // let assetSupamotoInstanceDid: string;
  // testMsg(
  //   "/ixo.entity.v1beta1.MsgCreateEntity asset class supamoto instance",
  //   async () => {
  //     const res = await Entity.CreateEntityAssetSupamotoInstance(
  //       assetSupamotoDid
  //     );
  //     assetSupamotoInstanceDid = utils.common.getValueFromEvents(
  //       res,
  //       "ixo.iid.v1beta1.IidDocumentCreatedEvent",
  //       "did"
  //     );
  //     console.log({ assetSupamotoInstanceDid });
  //     return res;
  //   }
  // );
  // testMsg("/ixo.entity.v1beta1.MsgTransferEntity", () =>
  //   Entity.TransferEntity(assetSupamotoInstanceDid)
  // );
  // testMsg("/ixo.entity.v1beta1.MsgUpdateEntity", () => Entity.UpdateEntity());
});

describe("Testing the Payments module", () => {
  // testMsg("/ixo.payments.v1.MsgCreatePaymentTemplate", () =>
  //   Payments.CreatePaymentTemplate()
  // );
  // testMsg("/ixo.payments.v1.MsgCreatePaymentContract", () =>
  //   Payments.CreatePaymentContract()
  // );
  // testMsg("/ixo.payments.v1.MsgSetPaymentContractAuthorisation", () =>
  //   Payments.SetPaymentContractAuthorization()
  // );
  // testMsg("/ixo.payments.v1.MsgCreateSubscription", () =>
  //   Payments.CreateSubscription()
  // );
  // testMsg("/ixo.payments.v1.MsgGrantDiscount", () => Payments.GrantDiscount());
  // testMsg("/ixo.payments.v1.MsgRevokeDiscount", () =>
  //   Payments.RevokeDiscount()
  // );
  // testMsg("/ixo.payments.v1.MsgEffectPayment", () => Payments.EffectPayment());
});

describe("Testing entity projects flow", () => {
  // sendFromFaucet(WalletUsers.project);
  // let assetDid: string;
  // testMsg("/ixo.entity.v1beta1.MsgCreateEntity asset", async () => {
  //   const res = await Entity.CreateEntityAsset();
  //   assetDid = utils.common.getValueFromEvents(
  //     res,
  //     "ixo.iid.v1beta1.IidDocumentCreatedEvent",
  //     "did"
  //   );
  //   console.log({ assetDid });
  //   return res;
  // });
  // testMsg("/ixo.project.v1.MsgCreateAgent", () =>
  //   Projects.CreateAgent(undefined, assetDid)
  // );
});

describe("Testing the Projects module", () => {
  // testMsg("/ixo.project.v1.MsgCreateProject", () => Projects.CreateProject());
  // testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
  //   Projects.UpdateProjectStatus("CREATED")
  // );
  // testMsg("/ixo.project.v1.MsgUpdateProjectStatus", () =>
  //   Projects.UpdateProjectStatus("PENDING")
  // );
  // testMsg("/ixo.project.v1.MsgUpdateProjectDoc", () =>
  //   Projects.UpdateProjectDoc()
  // );
  // sendFromFaucet(WalletUsers.project); // Need to fecth other addresses for project to fund
  // testMsg('/ixo.project.v1.MsgCreateAgent', () => Projects.CreateAgent());
  // testMsg('/ixo.project.v1.MsgUpdateAgent', () => Projects.UpdateAgent());
  // testMsg('/ixo.project.v1.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('FUNDED'));
  // testMsg('/ixo.project.v1.MsgUpdateProjectStatus', () => Projects.UpdateProjectStatus('STARTED'));
  // testMsg('/ixo.project.v1.MsgCreateClaim', () => Projects.CreateClaim());
  // testMsg('/ixo.project.v1.MsgCreateEvaluation', () => Projects.CreateEvaluation());
  // testMsg('/ixo.project.v1.MsgWithdrawFunds', () => Projects.WithdrawFunds());
});

describe("Testing the Bonds module", () => {
  // testMsg("/ixo.bonds.v1beta1.MsgCreateBond", () => Bond.CreateBond(false));
  // testMsg("/ixo.bonds.v1beta1.MsgEditBond", () => Bond.EditBond());
  // testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(WalletUsers.tester, 1)); // Buy one token first to hatch bond
  // testMsg("/ixo.bonds.v1beta1.MsgBuy", () => Bond.Buy(undefined, 20000));
  // testMsg("/ixo.bonds.v1beta1.MsgSetNextAlpha", () =>
  //   Bond.SetNextAlpha("520000000000000000")
  // );
  // testMsg("/ixo.bonds.v1beta1.MsgMakeOutcomePayment", () =>
  //   Bond.MakeOutcomePayment(1000)
  // );
  // testMsg("/ixo.bonds.v1beta1.MsgUpdateBondState", () =>
  //   Bond.UpdateBondState("SETTLE")
  // );
  // testMsg("/ixo.bonds.v1beta1.MsgWithdrawShare", () => Bond.WithdrawShare());
  // testMsg('/ixo.bonds.v1beta1.MsgWithdrawReserve', () => Bond.WithdrawReserve(10)); // Not tested
  // testMsg('/ixo.bonds.v1beta1.MsgSell', () => Bond.Sell(10)); // Not tested
  // testMsg('/ixo.bonds.v1beta1.MsgSwap', () => Bond.Swap()); // Not tested
});

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

describe("Testing the Token module", () => {
  let contractAddress20: string;
  let contractAddress721: string;
  let contractAddress1155: string;

  // testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
  //   const res = await Token.SetupMinter();
  //   contractAddress20 = utils.common.getValueFromEvents(
  //     res,
  //     "ixo.token.v1beta1.TokenMinter",
  //     "contractAddress"
  //   );
  //   console.log({ contractAddress20 });
  //   return res;
  // });
  // testMsg("/ixo.token.v1beta1.MsgMint", () =>
  //   Token.MintToken(contractAddress20, "cw20")
  // );

  // testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
  //   const res = await Token.SetupMinter(undefined, "cw721");
  //   contractAddress721 = utils.common.getValueFromEvents(
  //     res,
  //     "ixo.token.v1beta1.TokenMinter",
  //     "contractAddress"
  //   );
  //   console.log({ contractAddress721 });
  //   return res;
  // });
  // testMsg("/ixo.token.v1beta1.MsgMint", () =>
  //   Token.MintToken(contractAddress721, "cw721")
  // );

  // testMsg("/ixo.token.v1beta1.MsgSetupMinter", async () => {
  //   const res = await Token.SetupMinter(undefined, "cw1155");
  //   contractAddress1155 = utils.common.getValueFromEvents(
  //     res,
  //     "ixo.token.v1beta1.TokenMinter",
  //     "contractAddress"
  //   );
  //   console.log({ contractAddress1155 });
  //   return res;
  // });
  // testMsg("/ixo.token.v1beta1.MsgMint", () =>
  //   Token.MintToken(contractAddress1155, "cw1155")
  // );
  // testMsg("/cosmos.authz.v1beta1.MsgGrant", () =>
  //   Authz.MsgGrantContract(
  //     undefined,
  //     WalletUsers.alice,
  //     contractAddress1155,
  //     "cw1155"
  //   )
  // );
  // testMsg("/cosmos.authz.v1beta1.MsgExec", () =>
  //   Authz.MsgExecContract(undefined, contractAddress1155, "cw1155")
  // );
  // testMsg("/cosmos.authz.v1beta1.MsgRevoke", () => Authz.MsgRevokeContract());

  // testMsg("/ixo.token.v1beta1.MsgTransferToken", () => Token.TransferToken());
});

describe("Testing the cosmos bank module", () => {
  // testMsg("/cosmos.bank.v1beta1.MsgSend", () => Cosmos.BankSendTrx());
});

describe("Testing the ibc transfer module", () => {
  // ibc trasnfer can only be tested on main net, thus need a main net user mnemonic with funds to test the ibc transfer
  // beforeAll(() =>
  //   generateNewWallet(WalletUsers.tester, process.env.IBC_FROM_MNEMONIC)
  // );
  // testMsg("/ibc.applications.transfer.v1.MsgTransfer", () =>
  //   Ibc.IbcTransferTrx(process.env.IBC_TO_ADDRESS!)
  // );
});
