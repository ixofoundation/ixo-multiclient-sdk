import {
  chunkArray,
  generateNewWallet,
  getFileFromPath,
  getUser,
  queryClient,
  saveFileToPath,
  sendFromFaucet,
  testMsg,
  timeout,
} from "../helpers/common";
import * as Cosmos from "../modules/Cosmos";
import * as LiquidStake from "../modules/LiquidStake";
import { WalletUsers } from "../helpers/constants";
// @ts-ignore
import Long from "long";
import { Grant } from "../../src/codegen/cosmos/feegrant/v1beta1/feegrant";
import { createRegistry, utils } from "../../src";
import { fromTimestamp } from "../../src/codegen/helpers";

export const prepareModuleWithProposals = () =>
  describe("Preparing Liquid Stake Module with proposals", () => {
    // First updatre params by making tester the whitelistAdminAddress
    let proposalId: number;
    testMsg("/cosmos.gov.v1beta1.MsgSubmitProposal update params", async () => {
      const res = await LiquidStake.MsgSubmitProposalUpdateLiquidStakeParams();
      proposalId = utils.common.getValueFromEvents(
        res,
        "submit_proposal",
        "proposal_id"
      );
      console.log({ proposalId });
      return res;
    });
    testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId));

    // Second update validator whitelist
    testMsg(
      "/ixo.liquidstake.v1beta1.MsgUpdateWhitelistedValidators",
      async () => {
        // wait for proposal to pass
        await timeout(1000 * 100);
        const res = await LiquidStake.MsgUpdateLiquidStakeWhitelist();
        await timeout(1000 * 10);
        return res;
      }
    );

    testMsg("/ixo.liquidstake.v1beta1.MsgLiquidStake", () =>
      LiquidStake.MsgLiquidStake("10000000000")
    );

    testMsg("/ixo.liquidstake.v1beta1.MsgLiquidUnstake", () =>
      LiquidStake.MsgLiquidUnstake("1000000000")
    );
  });
