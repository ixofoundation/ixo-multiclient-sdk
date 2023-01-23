import { testMsg } from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";

export const bankBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/cosmos.bank.v1beta1.MsgSend", () => Cosmos.BankSendTrx());
  });

export const govBasic = () =>
  describe("Testing the gov module", () => {
    testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal", () =>
      Cosmos.MsgSubmitProposal()
    );
  });
