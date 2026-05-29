import { fromBase64, toBase64, toUtf8 } from "@cosmjs/encoding";
import { z } from "zod";
import { loadSdk } from "../lazy";
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
    handler: async ({ address, pubKey, did, controller }) => {
      const { utils, customMessages } = await loadSdk();
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
    name: "ixo_compose_create_entity",
    description:
      "Compose an IXO MsgCreateEntity (create an entity / digital twin). Provide ownerAddress, ownerDid, entityType and relayerNode; array fields default to empty and additional fields (linkedResource, accordedRight, startDate, …) can be supplied via `extra`. Optional `data` is base64-encoded bytes.",
    inputSchema: {
      entityType: z.string().describe("e.g. 'protocol', 'asset', 'project', 'oracle', 'investment'"),
      ownerAddress: z.string(),
      ownerDid: z.string(),
      relayerNode: z.string().describe("did of the relayer node creating the entity"),
      entityStatus: z.number().int().optional(),
      controller: z.array(z.string()).optional(),
      verification: z.array(z.record(z.string(), z.any())).optional(),
      service: z.array(z.record(z.string(), z.any())).optional(),
      context: z.array(z.record(z.string(), z.any())).optional(),
      data: z.string().optional().describe("base64-encoded entity data bytes"),
      extra: z
        .record(z.string(), z.any())
        .optional()
        .describe("Additional MsgCreateEntity fields (linkedResource, accordedRight, startDate, …)"),
    },
    handler: (a) =>
      textResult({
        typeUrl: "/ixo.entity.v1beta1.MsgCreateEntity",
        value: {
          entityType: a.entityType,
          entityStatus: a.entityStatus ?? 0,
          ownerAddress: a.ownerAddress,
          ownerDid: a.ownerDid,
          relayerNode: a.relayerNode,
          controller: a.controller ?? [],
          verification: a.verification ?? [],
          service: a.service ?? [],
          context: a.context ?? [],
          ...(a.data ? { data: a.data } : {}),
          ...(a.extra ?? {}),
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_transfer_entity",
    description: "Compose an IXO MsgTransferEntity (transfer entity ownership to a new owner did).",
    inputSchema: {
      id: z.string().describe("entity did"),
      ownerDid: z.string(),
      ownerAddress: z.string(),
      recipientDid: z.string(),
    },
    handler: ({ id, ownerDid, ownerAddress, recipientDid }) =>
      textResult({
        typeUrl: "/ixo.entity.v1beta1.MsgTransferEntity",
        value: { id, ownerDid, ownerAddress, recipientDid },
      }),
  }),

  defineTool({
    name: "ixo_compose_create_claim_collection",
    description:
      "Compose an IXO claims MsgCreateCollection (open a claims collection on an entity). `state`: 0=OPEN, 1=PAUSED, 2=CLOSED. Payment/date fields can be supplied via `extra`.",
    inputSchema: {
      entity: z.string().describe("entity did the collection belongs to"),
      signer: z.string(),
      protocol: z.string().describe("protocol did defining the claim schema"),
      quota: z.union([z.string(), z.number()]).optional().describe("max claims (0 = unlimited)"),
      state: z.number().int().min(0).max(2).optional(),
      extra: z
        .record(z.string(), z.any())
        .optional()
        .describe("Additional MsgCreateCollection fields (payments, startDate, endDate, …)"),
    },
    handler: ({ entity, signer, protocol, quota, state, extra }) =>
      textResult({
        typeUrl: "/ixo.claims.v1beta1.MsgCreateCollection",
        value: {
          entity,
          signer,
          protocol,
          quota: String(quota ?? "0"),
          state: state ?? 0,
          ...(extra ?? {}),
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_submit_claim",
    description:
      "Compose an IXO claims MsgSubmitClaim (submit a claim into a collection for evaluation).",
    inputSchema: {
      collectionId: z.string(),
      claimId: z.string().describe("the claim id (typically the claim's did/hash)"),
      agentDid: z.string(),
      agentAddress: z.string(),
      adminAddress: z.string(),
      useIntent: z.boolean().optional(),
      amount: z.array(coin).optional(),
      extra: z.record(z.string(), z.any()).optional().describe("e.g. cw20Payment"),
    },
    handler: ({ collectionId, claimId, agentDid, agentAddress, adminAddress, useIntent, amount, extra }) =>
      textResult({
        typeUrl: "/ixo.claims.v1beta1.MsgSubmitClaim",
        value: {
          collectionId,
          claimId,
          agentDid,
          agentAddress,
          adminAddress,
          useIntent: useIntent ?? false,
          amount: amount ?? [],
          cw20Payment: [],
          ...(extra ?? {}),
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_evaluate_claim",
    description:
      "Compose an IXO claims MsgEvaluateClaim (an oracle/agent evaluates a submitted claim). `status`: 1=approved, 2=rejected, 3=disputed.",
    inputSchema: {
      claimId: z.string(),
      collectionId: z.string(),
      oracle: z.string().describe("oracle entity did"),
      agentDid: z.string(),
      agentAddress: z.string(),
      adminAddress: z.string(),
      status: z.number().int().describe("EvaluationStatus: 1=approved, 2=rejected, 3=disputed"),
      reason: z.number().int().optional(),
      verificationProof: z.string().optional().describe("CID / proof of the evaluation"),
      amount: z.array(coin).optional(),
      extra: z.record(z.string(), z.any()).optional(),
    },
    handler: (a) =>
      textResult({
        typeUrl: "/ixo.claims.v1beta1.MsgEvaluateClaim",
        value: {
          claimId: a.claimId,
          collectionId: a.collectionId,
          oracle: a.oracle,
          agentDid: a.agentDid,
          agentAddress: a.agentAddress,
          adminAddress: a.adminAddress,
          status: a.status,
          reason: a.reason ?? 0,
          verificationProof: a.verificationProof ?? "",
          amount: a.amount ?? [],
          ...(a.extra ?? {}),
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_create_token",
    description:
      "Compose an IXO token MsgCreateToken (create a token class, e.g. for carbon/impact credits).",
    inputSchema: {
      minter: z.string(),
      tokenClass: z.string().describe("the token class / contract address (proto field `class`)"),
      name: z.string(),
      description: z.string().optional(),
      image: z.string().optional(),
      tokenType: z.string().optional(),
      cap: z.union([z.string(), z.number()]).optional().describe("max supply cap (0 = uncapped)"),
      extra: z.record(z.string(), z.any()).optional().describe("Additional MsgCreateToken fields (properties, …)"),
    },
    handler: (a) =>
      textResult({
        typeUrl: "/ixo.token.v1beta1.MsgCreateToken",
        value: {
          minter: a.minter,
          class: a.tokenClass,
          name: a.name,
          description: a.description ?? "",
          image: a.image ?? "",
          tokenType: a.tokenType ?? "",
          cap: String(a.cap ?? "0"),
          ...(a.extra ?? {}),
        },
      }),
  }),

  defineTool({
    name: "ixo_compose_message",
    description:
      "Generic message composer / validator: returns the given {typeUrl, value} after confirming the typeUrl is a registered IXO/Cosmos message type. Use for any module not covered by a dedicated compose tool. Byte fields must be base64 strings.",
    inputSchema: {
      typeUrl: z.string().describe("Proto type URL, e.g. /cosmos.bank.v1beta1.MsgSend"),
      value: z.record(z.string(), z.any()).describe("Message fields (camelCase, JSON-safe)"),
    },
    handler: async ({ typeUrl, value }) => {
      const known = (await getRegistry()).lookupType(typeUrl);
      if (!known) {
        return errorResult(
          `Unknown message typeUrl '${typeUrl}'. It is not in the IXO/Cosmos registry.`,
        );
      }
      return textResult({ typeUrl, value });
    },
  }),
];
