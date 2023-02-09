import { testMsg, utils } from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";

export const bankBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSend", () => Cosmos.BankSendTrx());
  });

export const govBasic = () =>
  describe("Testing the gov module", () => {
    // let proposalIdStoreCW721: number;
    // testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal store cw721", async () => {
    //   const res = await Cosmos.MsgSubmitProposalStoreCW721();
    //   proposalIdStoreCW721 = utils.common.getValueFromEvents(
    //     res,
    //     "submit_proposal",
    //     "proposal_id"
    //   );
    //   console.log({ proposalIdStoreCW721 });
    //   return res;
    // });
    // testMsg("/cosmos.gov.v1beta1.MsgVote", () =>
    //   Cosmos.MsgVote(proposalIdStoreCW721)
    // );
    // let proposalIdUpdateEntityParams: number;
    // testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal update entity params", async () => {
    //   const res = await Cosmos.MsgSubmitProposalUpdateEntityParams(1);
    //   proposalIdUpdateEntityParams = utils.common.getValueFromEvents(
    //     res,
    //     "submit_proposal",
    //     "proposal_id"
    //   );
    //   console.log({ proposalIdUpdateEntityParams });
    //   return res;
    // });
    // testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal", () =>
    //   Cosmos.MsgVote(proposalIdUpdateEntityParams)
    // );
  });
