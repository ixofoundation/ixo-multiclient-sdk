import { fromBase64, toBase64, toUtf8 } from "@cosmjs/encoding";
import { customMessages, utils } from "@ixo/impactxclient-sdk";
import { z } from "zod";
import { errorResult, textResult } from "../utils/format";
import { defineTool } from "../utils/tool";
import { getRegistry } from "../utils/tx";

const coin = z.object({ denom: z.string(), amount: z.string() });

/**
 * Compose tools return a `{ typeUrl, value }` message (JSON-safe) for the agent
 * to collect (one or many) and pass into `ixo_build_transaction`. They never
 * sign or broadcast — they just shape correct proto values so the agent does
 * not need to know field layouts.
 */
export const composeTools = [
  defineTool({
    name: "ixo_compose_send",
    description:
      "Compose a bank MsgSend message (transfer tokens). Amounts are in base denom (e.g. uixo; 1 IXO = 1000000 uixo).",
    inputSchema: {
      fromAddress: z.string(),
      toAddress: z.string(),
      amount: z.array(coin).min(1),
    },
    handler: ({ fromAddress, toAddress, amount }) =>
      textResult({
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: { fromAddress, toAddress, amount },
      }),
  }),

  defineTool({
    name: "ixo_compose_delegate",
    description: "Compose a staking MsgDelegate message (delegate tokens to a validator).",
    inputSchema: {
      delegatorAddress: z.string(),
      validatorAddress: z.string(),
      amount: coin,
    },
    handler: ({ delegatorAddress, validatorAddress, amount }) =>
      textResult({
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: { delegatorAddress, validatorAddress, amount },
      }),
  }),

  defineTool({
    name: "ixo_compose_undelegate",
    description: "Compose a staking MsgUndelegate message (begin unbonding from a validator).",
    inputSchema: {
      delegatorAddress: z.string(),
      validatorAddress: z.string(),
      amount: coin,
    },
    handler: ({ delegatorAddress, validatorAddress, amount }) =>
      textResult({
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: { delegatorAddress, validatorAddress, amount },
      }),
  }),

  defineTool({
    name: "ixo_compose_redelegate",
    description: "Compose a staking MsgBeginRedelegate message (move delegation between validators).",
    inputSchema: {
      delegatorAddress: z.string(),
      validatorSrcAddress: z.string(),
      validatorDstAddress: z.string(),
      amount: coin,
    },
    handler: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }) =>
      textResult({
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: { delegatorAddress, validatorSrcAddress, validatorDstAddress, amount },
      }),
  }),

  defineTool({
    name: "ixo_compose_withdraw_rewards",
    description:
      "Compose a distribution MsgWithdrawDelegatorReward message (claim staking rewards from one validator).",
    inputSchema: { delegatorAddress: z.string(), validatorAddress: z.string() },
    handler: ({ delegatorAddress, validatorAddress }) =>
      textResult({
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: { delegatorAddress, validatorAddress },
      }),
  }),

  defineTool({
    name: "ixo_compose_vote",
    description:
      "Compose a gov MsgVote message. option: 1=Yes, 2=Abstain, 3=No, 4=NoWithVeto.",
    inputSchema: {
      proposalId: z.union([z.string(), z.number()]),
      voter: z.string(),
      option: z.number().int().min(1).max(4),
    },
    handler: ({ proposalId, voter, option }) =>
      textResult({
        typeUrl: "/cosmos.gov.v1.MsgVote",
        value: { proposalId: String(proposalId), voter, option, metadata: "" },
      }),
  }),

  defineTool({
    name: "ixo_compose_wasm_execute",
    description:
      "Compose a CosmWasm MsgExecuteContract message. `msg` is the JSON execute message; it is base64-encoded for transport and decoded at build time.",
    inputSchema: {
      sender: z.string(),
      contract: z.string(),
      msg: z.record(z.string(), z.any()).describe("JSON execute message for the contract"),
      funds: z.array(coin).optional(),
    },
    handler: ({ sender, contract, msg, funds }) =>
      textResult({
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: {
          sender,
          contract,
          msg: toBase64(toUtf8(JSON.stringify(msg))),
          funds: funds ?? [],
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_create_iid",
    description:
      "Compose an IID MsgCreateIidDocument (create a DID document) for a secp256k1 account. Provide the address and its base64 compressed public key; the did defaults to did:ixo:<address>.",
    inputSchema: {
      address: z.string().describe("Bech32 ixo address that owns the key"),
      pubKey: z.string().describe("base64 secp256k1 compressed public key"),
      did: z.string().optional().describe("Override did (default did:ixo:<address>)"),
      controller: z.string().optional().describe("Override controller did"),
    },
    handler: ({ address, pubKey, did, controller }) => {
      const documentDid = did ?? utils.did.generateSecpDid(address);
      const controllerDid = controller ?? documentDid;
      const verifications = customMessages.iid.createIidVerificationMethods({
        did: documentDid,
        pubkey: fromBase64(pubKey),
        address,
        controller: controllerDid,
      });
      return textResult({
        typeUrl: "/ixo.iid.v1beta1.MsgCreateIidDocument",
        value: {
          id: documentDid,
          controllers: [controllerDid],
          verifications,
          signer: address,
          context: [{ key: "ixo", val: "https://w3id.org/ixo/context/v1" }],
        },
      });
    },
  }),

  defineTool({
    name: "ixo_compose_message",
    description:
      "Generic message composer / validator: returns the given {typeUrl, value} after confirming the typeUrl is a registered IXO/Cosmos message type. Use for any module not covered by a dedicated compose tool. Byte fields must be base64 strings.",
    inputSchema: {
      typeUrl: z.string().describe("Proto type URL, e.g. /cosmos.bank.v1beta1.MsgSend"),
      value: z.record(z.string(), z.any()).describe("Message fields (camelCase, JSON-safe)"),
    },
    handler: ({ typeUrl, value }) => {
      const known = getRegistry().lookupType(typeUrl);
      if (!known) {
        return errorResult(
          `Unknown message typeUrl '${typeUrl}'. It is not in the IXO/Cosmos registry.`,
        );
      }
      return textResult({ typeUrl, value });
    },
  }),
];
