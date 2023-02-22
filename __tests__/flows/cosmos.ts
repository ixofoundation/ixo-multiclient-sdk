import { testMsg, utils } from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";
import * as Authz from "../modules/Authz";

export const bankBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSend", () => Cosmos.BankSendTrx());
  });

export const govBasic = () =>
  describe("Testing the gov module", () => {
    // let proposalId: number;
    // testMsg(
    //   "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
    //   async () => {
    //     const res = await Cosmos.MsgSubmitProposalStoreCW("ixo1155");
    //     proposalId = utils.common.getValueFromEvents(
    //       res,
    //       "submit_proposal",
    //       "proposal_id"
    //     );
    //     console.log({ proposalId });
    //     return res;
    //   }
    // );
    // testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId));

    let proposalIdUpdateEntityParams: number;
    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal update entity params",
      async () => {
        const res = await Cosmos.MsgSubmitProposalUpdateEntityParams(1);
        proposalIdUpdateEntityParams = utils.common.getValueFromEvents(
          res,
          "submit_proposal",
          "proposal_id"
        );
        console.log({ proposalIdUpdateEntityParams });
        return res;
      }
    );
    testMsg("/cosmos.gov.v1beta1.MsgVote", () =>
      Cosmos.MsgVote(proposalIdUpdateEntityParams)
    );

    let proposalIdUpdateTokenParams: number;
    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal update token params",
      async () => {
        const res = await Cosmos.MsgSubmitProposalUpdateTokenParams(2);
        proposalIdUpdateTokenParams = utils.common.getValueFromEvents(
          res,
          "submit_proposal",
          "proposal_id"
        );
        console.log({ proposalIdUpdateTokenParams });
        return res;
      }
    );
    testMsg("/cosmos.gov.v1beta1.MsgVote", () =>
      Cosmos.MsgVote(proposalIdUpdateTokenParams)
    );
  });

export const authzBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("test Grant Send", async () => {
      const res = await Authz.MsgGrantSend();
      console.log(res);
      return res;
    });

    testMsg("test Exec Send", async () => {
      const res = await Authz.MsgExecSend();
      console.log(res);
      return res;
    });
  });
