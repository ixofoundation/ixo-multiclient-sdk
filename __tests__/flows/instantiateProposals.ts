import { DeliverTxResponse } from "@cosmjs/stargate";
import { contracts } from "../../src/custom_queries/contract.constants";
import { cosmwasm, testMsg, timeout, utils } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Cosmos from "../modules/Cosmos";

export const instantiateModulesProposals = () =>
  describe("Testing the gov module", () => {
    let proposalId: number;

    // to run all contracts proposals synchronously
    contracts.map((c, i) => [
      testMsg(
        `/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract ${
          i + 1
        } of ${contracts.length}`,
        async () => {
          const res = await Cosmos.MsgSubmitProposalStoreCWOld(c.name, c.path);
          // const res = await Cosmos.MsgSubmitProposalStoreCW(c.name, c.path);
          proposalId = utils.common.getValueFromEvents(
            res,
            "submit_proposal",
            "proposal_id"
          );
          console.log({ proposalId });
          return res;
        }
      ),
      testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId)),
    ]);

    // NOTE: 721 and 1155 is in contract list above and follows the constants contract codes
    // Upload cw721 for entity module nfts
    // testMsg(
    //   "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
    //   async () => {
    //     const res = await Cosmos.MsgSubmitProposalStoreCW(
    //       "cw721"
    //       // cosmwasm.wasm.v1.AccessType.ACCESS_TYPE_NOBODY
    //     );
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

    // // Upload ixo1155 for token module
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

// ------------------------------------------------------------
// flow to run after devnet was reset, please dont change
// ------------------------------------------------------------
export const devnetProposals = () =>
  describe("Testing the gov module", () => {
    const contractPaths = contracts.map((c) => ({
      name: c.name,
      path: c.path,
    }));

    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
      async () => {
        const groups = [
          contractPaths.slice(0, 4),
          contractPaths.slice(4, 8),
          contractPaths.slice(8, 12),
          contractPaths.slice(12, 16),
          contractPaths.slice(16, 20),
          contractPaths.slice(20, 24),
          contractPaths.slice(24, 28),
          contractPaths.slice(28),
        ];

        let i: number;
        let j = groups.length;
        let res: DeliverTxResponse[];
        for (i = 0; i < j; i++) {
          console.log(`running group ${i + 1} of ${j}`);
          console.log(groups[i]);
          res = await Promise.all(
            groups[i].map((c, ii) => {
              const signer =
                ii == 0
                  ? WalletUsers.tester
                  : ii == 1
                  ? WalletUsers.alice
                  : ii == 2
                  ? WalletUsers.bob
                  : WalletUsers.charlie;
              return Cosmos.MsgSubmitProposalStoreCW(
                c.name,
                c.path,
                signer,
                ii * 0.75
              );
            })
          );
          console.log(res!.map((r) => r.rawLog));
        }

        return res![0];
      }
    );
  });

// ------------------------------------------------------------
// flow to upload a cw smart contract, then need to vote on it
// ------------------------------------------------------------
export const cwUploadProposal = () =>
  describe("Testing the gov module", () => {
    let proposalId: number;

    testMsg(
      "/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract",
      async () => {
        const name = "ixoswap";
        const res = await Cosmos.MsgSubmitProposalStoreCWOld(`custom ${name}`, [
          "contracts",
          "ixo",
          `${name}.wasm`,
        ]);
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
  });
