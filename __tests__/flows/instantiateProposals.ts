import { DeliverTxResponse } from "@cosmjs/stargate";
import { contracts } from "../../src/custom_queries/contract.constants";
import { cosmwasm, testMsg, timeout, utils } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Cosmos from "../modules/Cosmos";

export const instantiateModulesProposals = () =>
  describe("Testing the gov module", () => {
    let proposalId: number;

    const daodaocontracts = contracts.slice(0, 29);
    // to run all contracts proposals synchronously
    daodaocontracts.map((c, i) => [
      testMsg(
        `/cosmos.gov.v1beta1.MsgSubmitProposal store wasm contract ${
          i + 1
        } of ${daodaocontracts.length}`,
        async () => {
          // const res = await Cosmos.MsgSubmitProposalStoreCWOld(c.name, c.path);
          const res = await Cosmos.MsgSubmitProposalStoreCW(c.name, c.path);
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

    // // NOTE: 721 and 1155 is in contract list above and follows the constants contract codes
    // // Upload cw721 for entity module nfts
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

// ------------------------------------------------------------
// flow to upload all the hyperlane contracts
// ------------------------------------------------------------
export const uploadHyperlaneProposals = () =>
  describe("Uploading Hyperlane cosmwasm contracts", () => {
    let proposalId: number;

    // to run all contracts proposals synchronously
    const proposals = [
      {
        title: "Hyperlane: Upload hpl_hook_aggregate (1 of 20)",
        summary:
          "This proposal uploads the hpl_hook_aggregate contract, which aggregates hook signals to streamline cross-chain interactions and ensure efficient data handling within the Hyperlane protocol.",
        contract: "hpl_hook_aggregate",
      },
      {
        title: "Hyperlane: Upload hpl_hook_fee (2 of 20)",
        summary:
          "This proposal uploads the hpl_hook_fee contract, responsible for managing fee calculations and allocations, ensuring cost efficiency in hook-based transactions across chains.",
        contract: "hpl_hook_fee",
      },
      {
        title: "Hyperlane: Upload hpl_hook_merkle (3 of 20)",
        summary:
          "This proposal uploads the hpl_hook_merkle contract, designed to verify Merkle proofs and secure data integrity for cross-chain message exchanges within the Hyperlane ecosystem.",
        contract: "hpl_hook_merkle",
      },
      {
        title: "Hyperlane: Upload hpl_hook_pausable (4 of 20)",
        summary:
          "This proposal uploads the hpl_hook_pausable contract, which introduces pausing functionality to hook operations, enabling quick responses during emergencies to safeguard network integrity.",
        contract: "hpl_hook_pausable",
      },
      {
        title: "Hyperlane: Upload hpl_hook_routing_custom (5 of 20)",
        summary:
          "This proposal uploads the hpl_hook_routing_custom contract, enabling customizable routing logic to meet specific cross-chain communication requirements within the Hyperlane framework.",
        contract: "hpl_hook_routing_custom",
      },
      {
        title: "Hyperlane: Upload hpl_hook_routing_fallback (6 of 20)",
        summary:
          "This proposal uploads the hpl_hook_routing_fallback contract, providing a robust fallback mechanism to ensure reliable message delivery when primary routing paths are unavailable.",
        contract: "hpl_hook_routing_fallback",
      },
      {
        title: "Hyperlane: Upload hpl_hook_routing (7 of 20)",
        summary:
          "This proposal uploads the hpl_hook_routing contract, which directs hook messages accurately across chains to facilitate seamless and efficient interchain connectivity.",
        contract: "hpl_hook_routing",
      },
      {
        title: "Hyperlane: Upload hpl_ism_pausable (8 of 20)",
        summary:
          "This proposal uploads the hpl_ism_pausable contract, adding the ability to pause operations within the interchain security module, enhancing control during critical or unexpected conditions.",
        contract: "hpl_ism_pausable",
      },
      {
        title: "Hyperlane: Upload hpl_validator_announce (9 of 20)",
        summary:
          "This proposal uploads the hpl_validator_announce contract, designed to facilitate the synchronization and announcement of validator set updates across the Hyperlane network.",
        contract: "hpl_validator_announce",
      },
      {
        title: "Hyperlane: Upload hpl_igp_oracle (10 of 20)",
        summary:
          "This proposal uploads the hpl_igp_oracle contract, which functions as a reliable oracle delivering real-time interchain gas price data essential for effective transaction fee management.",
        contract: "hpl_igp_oracle",
      },
      {
        title: "Hyperlane: Upload hpl_ism_aggregate (11 of 20)",
        summary:
          "This proposal uploads the hpl_ism_aggregate contract, aggregating data from various interchain security modules to provide robust oversight and enhance the resilience of cross-chain operations.",
        contract: "hpl_ism_aggregate",
      },
      {
        title: "Hyperlane: Upload hpl_ism_multisig (12 of 20)",
        summary:
          "This proposal uploads the hpl_ism_multisig contract, enforcing a multisignature process for critical actions and ensuring added security and trust within the Hyperlane framework.",
        contract: "hpl_ism_multisig",
      },
      {
        title: "Hyperlane: Upload hpl_ism_routing (13 of 20)",
        summary:
          "This proposal uploads the hpl_ism_routing contract, responsible for orchestrating the routing of security module messages to optimize and secure cross-chain communication flows.",
        contract: "hpl_ism_routing",
      },
      {
        title: "Hyperlane: Upload hpl_mailbox (14 of 20)",
        summary:
          "This proposal uploads the hpl_mailbox contract, serving as the central conduit for sending and receiving cross-chain messages, a key element in the Hyperlane messaging architecture.",
        contract: "hpl_mailbox",
      },
      {
        title: "Hyperlane: Upload hpl_test_mock_hook (15 of 20)",
        summary:
          "This proposal uploads the hpl_test_mock_hook contract, a testing tool crafted to simulate hook behavior and validate the functionality of Hyperlane components in a controlled environment.",
        contract: "hpl_test_mock_hook",
      },
      {
        title: "Hyperlane: Upload hpl_test_mock_ism (16 of 20)",
        summary:
          "This proposal uploads the hpl_test_mock_ism contract, a mock version of the interchain security module used to test and ensure the resilience and reliability of the Hyperlane protocol.",
        contract: "hpl_test_mock_ism",
      },
      {
        title: "Hyperlane: Upload hpl_test_mock_msg_receiver (17 of 20)",
        summary:
          "This proposal uploads the hpl_test_mock_msg_receiver contract, simulating message reception to validate the efficiency and accuracy of cross-chain communication during testing phases.",
        contract: "hpl_test_mock_msg_receiver",
      },
      {
        title: "Hyperlane: Upload hpl_warp_native (18 of 20)",
        summary:
          "This proposal uploads the hpl_warp_native contract, enabling the wrapping of native assets to support seamless cross-chain transfers and interoperability within the Hyperlane ecosystem.",
        contract: "hpl_warp_native",
      },
      {
        title: "Hyperlane: Upload hpl_warp_cw20 (19 of 20)",
        summary:
          "This proposal uploads the hpl_warp_cw20 contract, which facilitates the wrapping and interoperability of CW20 tokens, ensuring secure and efficient token transfers across chains.",
        contract: "hpl_warp_cw20",
      },
      {
        title: "Hyperlane: Upload hpl_igp (20 of 20)",
        summary:
          "This proposal uploads the hpl_igp contract, responsible for managing interchain gas payments, thereby supporting efficient and cost-effective processing of cross-chain transactions.",
        contract: "hpl_igp",
      },
    ];

    proposals.map((proposal, i) => [
      testMsg(
        `/cosmos.gov.v1beta1.MsgSubmitProposal store hyperlane wasm contract ${
          i + 1
        } of ${proposals.length}`,
        async () => {
          const res = await Cosmos.MsgSubmitHyperlaneProposalStoreCW(
            proposal,
            WalletUsers.tester,
            60
          );
          proposalId = utils.common.getValueFromEvents(
            res,
            "submit_proposal",
            "proposal_id"
          );
          console.log({ proposalId });
          return res;
        }
      ),
      // testMsg("/cosmos.gov.v1beta1.MsgVote", () => Cosmos.MsgVote(proposalId)),
    ]);
  });
