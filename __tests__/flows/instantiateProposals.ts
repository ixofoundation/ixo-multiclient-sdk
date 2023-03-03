import { testMsg, timeout, utils } from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";

export const instantiateModulesProposals = () =>
  describe("Testing the gov module", () => {
    let proposalId: number;
    // Upload cw721 for entity module nfts
    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
      async () => {
        const res = await Cosmos.MsgSubmitProposalStoreCW("cw721");
        proposalId = utils.common.getValueFromEvents(
          res,
          "submit_proposal",
          "proposal_id"
        );
        console.log({ proposalId });
        return res;
      }
    );
    testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId));

    // Upload ixo1155 for token module
    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
      async () => {
        const res = await Cosmos.MsgSubmitProposalStoreCW("ixo1155");
        proposalId = utils.common.getValueFromEvents(
          res,
          "submit_proposal",
          "proposal_id"
        );
        console.log({ proposalId });
        return res;
      }
    );
    testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId));

    test("timeout", async () => {
      console.log(
        "Waiting 90 second for previous proposal to pass (local chain)"
      );
      await timeout(90 * 1000);
      expect(true).toBeTruthy();
    });

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

    test("timeout", async () => {
      console.log(
        "Waiting 90 second for previous proposal to pass (local chain)"
      );
      await timeout(90 * 1000);
      console.log("Entity and Token modules initiated, continue hacking away");
      expect(true).toBeTruthy();
    });
  });
