//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DisputeTargetRole, Params, ParamsSDKType, Collection, CollectionSDKType, Claim, ClaimSDKType, Dispute, DisputeSDKType, Intent, IntentSDKType, MemberBudget, MemberBudgetSDKType, AgentDepositBalance, AgentDepositBalanceSDKType, disputeTargetRoleFromJSON, disputeTargetRoleToJSON } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryCollectionRequest {
  id: string;
}
export interface QueryCollectionRequestSDKType {
  id: string;
}
export interface QueryCollectionResponse {
  collection?: Collection;
}
export interface QueryCollectionResponseSDKType {
  collection?: CollectionSDKType;
}
export interface QueryCollectionListRequest {
  pagination?: PageRequest;
}
export interface QueryCollectionListRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryCollectionListResponse {
  collections: Collection[];
  pagination?: PageResponse;
}
export interface QueryCollectionListResponseSDKType {
  collections: CollectionSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryClaimRequest {
  id: string;
}
export interface QueryClaimRequestSDKType {
  id: string;
}
export interface QueryClaimResponse {
  claim?: Claim;
}
export interface QueryClaimResponseSDKType {
  claim?: ClaimSDKType;
}
export interface QueryClaimListRequest {
  pagination?: PageRequest;
}
export interface QueryClaimListRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryClaimListResponse {
  claims: Claim[];
  pagination?: PageResponse;
}
export interface QueryClaimListResponseSDKType {
  claims: ClaimSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDisputeRequest {
  proof: string;
}
export interface QueryDisputeRequestSDKType {
  proof: string;
}
export interface QueryDisputeResponse {
  dispute?: Dispute;
}
export interface QueryDisputeResponseSDKType {
  dispute?: DisputeSDKType;
}
export interface QueryDisputeListRequest {
  pagination?: PageRequest;
}
export interface QueryDisputeListRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryDisputeListResponse {
  disputes: Dispute[];
  pagination?: PageResponse;
}
export interface QueryDisputeListResponseSDKType {
  disputes: DisputeSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryIntentRequest {
  id: string;
  agentAddress: string;
  collectionId: string;
}
export interface QueryIntentRequestSDKType {
  id: string;
  agentAddress: string;
  collectionId: string;
}
export interface QueryIntentResponse {
  intent?: Intent;
}
export interface QueryIntentResponseSDKType {
  intent?: IntentSDKType;
}
export interface QueryIntentListRequest {
  pagination?: PageRequest;
}
export interface QueryIntentListRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryIntentListResponse {
  intents: Intent[];
  pagination?: PageResponse;
}
export interface QueryIntentListResponseSDKType {
  intents: IntentSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryCollectionMemberRequest {
  collectionId: string;
  memberAddress: string;
}
export interface QueryCollectionMemberRequestSDKType {
  collectionId: string;
  memberAddress: string;
}
export interface QueryCollectionMemberResponse {
  memberBudget?: MemberBudget;
}
export interface QueryCollectionMemberResponseSDKType {
  member_budget?: MemberBudgetSDKType;
}
export interface QueryCollectionMemberListRequest {
  collectionId: string;
  pagination?: PageRequest;
}
export interface QueryCollectionMemberListRequestSDKType {
  collectionId: string;
  pagination?: PageRequestSDKType;
}
export interface QueryCollectionMemberListResponse {
  memberBudgets: MemberBudget[];
  pagination?: PageResponse;
}
export interface QueryCollectionMemberListResponseSDKType {
  member_budgets: MemberBudgetSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDisputeBySubjectRequest {
  subjectId: string;
  targetRole: DisputeTargetRole;
}
export interface QueryDisputeBySubjectRequestSDKType {
  subjectId: string;
  targetRole: DisputeTargetRole;
}
export interface QueryDisputeBySubjectResponse {
  dispute?: Dispute;
}
export interface QueryDisputeBySubjectResponseSDKType {
  dispute?: DisputeSDKType;
}
export interface QueryDisputeListForSubjectRequest {
  subjectId: string;
}
export interface QueryDisputeListForSubjectRequestSDKType {
  subjectId: string;
}
export interface QueryDisputeListForSubjectResponse {
  disputes: Dispute[];
}
export interface QueryDisputeListForSubjectResponseSDKType {
  disputes: DisputeSDKType[];
}
export interface QueryAgentDepositBalanceRequest {
  collectionId: string;
  agentAddress: string;
}
export interface QueryAgentDepositBalanceRequestSDKType {
  collectionId: string;
  agentAddress: string;
}
export interface QueryAgentDepositBalanceResponse {
  balance?: AgentDepositBalance;
}
export interface QueryAgentDepositBalanceResponseSDKType {
  balance?: AgentDepositBalanceSDKType;
}
export interface QueryAgentDepositBalanceListRequest {
  collectionId: string;
  pagination?: PageRequest;
}
export interface QueryAgentDepositBalanceListRequestSDKType {
  collectionId: string;
  pagination?: PageRequestSDKType;
}
export interface QueryAgentDepositBalanceListResponse {
  balances: AgentDepositBalance[];
  pagination?: PageResponse;
}
export interface QueryAgentDepositBalanceListResponseSDKType {
  balances: AgentDepositBalanceSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return {
    id: ""
  };
}
export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionRequest>): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return {
    collection: undefined
  };
}
export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionResponse {
    return {
      collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined
    };
  },
  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionResponse>): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    return message;
  }
};
function createBaseQueryCollectionListRequest(): QueryCollectionListRequest {
  return {
    pagination: undefined
  };
}
export const QueryCollectionListRequest = {
  encode(message: QueryCollectionListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCollectionListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionListRequest>): QueryCollectionListRequest {
    const message = createBaseQueryCollectionListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCollectionListResponse(): QueryCollectionListResponse {
  return {
    collections: [],
    pagination: undefined
  };
}
export const QueryCollectionListResponse = {
  encode(message: QueryCollectionListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionListResponse {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCollectionListResponse): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map(e => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionListResponse>): QueryCollectionListResponse {
    const message = createBaseQueryCollectionListResponse();
    message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClaimRequest(): QueryClaimRequest {
  return {
    id: ""
  };
}
export const QueryClaimRequest = {
  encode(message: QueryClaimRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  toJSON(message: QueryClaimRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimRequest>): QueryClaimRequest {
    const message = createBaseQueryClaimRequest();
    message.id = object.id ?? "";
    return message;
  }
};
function createBaseQueryClaimResponse(): QueryClaimResponse {
  return {
    claim: undefined
  };
}
export const QueryClaimResponse = {
  encode(message: QueryClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claim = Claim.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimResponse {
    return {
      claim: isSet(object.claim) ? Claim.fromJSON(object.claim) : undefined
    };
  },
  toJSON(message: QueryClaimResponse): unknown {
    const obj: any = {};
    message.claim !== undefined && (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimResponse>): QueryClaimResponse {
    const message = createBaseQueryClaimResponse();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  }
};
function createBaseQueryClaimListRequest(): QueryClaimListRequest {
  return {
    pagination: undefined
  };
}
export const QueryClaimListRequest = {
  encode(message: QueryClaimListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClaimListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimListRequest>): QueryClaimListRequest {
    const message = createBaseQueryClaimListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryClaimListResponse(): QueryClaimListResponse {
  return {
    claims: [],
    pagination: undefined
  };
}
export const QueryClaimListResponse = {
  encode(message: QueryClaimListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      Claim.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClaimListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claims.push(Claim.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClaimListResponse {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => Claim.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClaimListResponse): unknown {
    const obj: any = {};
    if (message.claims) {
      obj.claims = message.claims.map(e => e ? Claim.toJSON(e) : undefined);
    } else {
      obj.claims = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClaimListResponse>): QueryClaimListResponse {
    const message = createBaseQueryClaimListResponse();
    message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDisputeRequest(): QueryDisputeRequest {
  return {
    proof: ""
  };
}
export const QueryDisputeRequest = {
  encode(message: QueryDisputeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proof !== "") {
      writer.uint32(10).string(message.proof);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeRequest {
    return {
      proof: isSet(object.proof) ? String(object.proof) : ""
    };
  },
  toJSON(message: QueryDisputeRequest): unknown {
    const obj: any = {};
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeRequest>): QueryDisputeRequest {
    const message = createBaseQueryDisputeRequest();
    message.proof = object.proof ?? "";
    return message;
  }
};
function createBaseQueryDisputeResponse(): QueryDisputeResponse {
  return {
    dispute: undefined
  };
}
export const QueryDisputeResponse = {
  encode(message: QueryDisputeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeResponse {
    return {
      dispute: isSet(object.dispute) ? Dispute.fromJSON(object.dispute) : undefined
    };
  },
  toJSON(message: QueryDisputeResponse): unknown {
    const obj: any = {};
    message.dispute !== undefined && (obj.dispute = message.dispute ? Dispute.toJSON(message.dispute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeResponse>): QueryDisputeResponse {
    const message = createBaseQueryDisputeResponse();
    message.dispute = object.dispute !== undefined && object.dispute !== null ? Dispute.fromPartial(object.dispute) : undefined;
    return message;
  }
};
function createBaseQueryDisputeListRequest(): QueryDisputeListRequest {
  return {
    pagination: undefined
  };
}
export const QueryDisputeListRequest = {
  encode(message: QueryDisputeListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDisputeListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeListRequest>): QueryDisputeListRequest {
    const message = createBaseQueryDisputeListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDisputeListResponse(): QueryDisputeListResponse {
  return {
    disputes: [],
    pagination: undefined
  };
}
export const QueryDisputeListResponse = {
  encode(message: QueryDisputeListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.disputes) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputes.push(Dispute.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeListResponse {
    return {
      disputes: Array.isArray(object?.disputes) ? object.disputes.map((e: any) => Dispute.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDisputeListResponse): unknown {
    const obj: any = {};
    if (message.disputes) {
      obj.disputes = message.disputes.map(e => e ? Dispute.toJSON(e) : undefined);
    } else {
      obj.disputes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeListResponse>): QueryDisputeListResponse {
    const message = createBaseQueryDisputeListResponse();
    message.disputes = object.disputes?.map(e => Dispute.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIntentRequest(): QueryIntentRequest {
  return {
    id: "",
    agentAddress: "",
    collectionId: ""
  };
}
export const QueryIntentRequest = {
  encode(message: QueryIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    if (message.collectionId !== "") {
      writer.uint32(26).string(message.collectionId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        case 3:
          message.collectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIntentRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : "",
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : ""
    };
  },
  toJSON(message: QueryIntentRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    return obj;
  },
  fromPartial(object: Partial<QueryIntentRequest>): QueryIntentRequest {
    const message = createBaseQueryIntentRequest();
    message.id = object.id ?? "";
    message.agentAddress = object.agentAddress ?? "";
    message.collectionId = object.collectionId ?? "";
    return message;
  }
};
function createBaseQueryIntentResponse(): QueryIntentResponse {
  return {
    intent: undefined
  };
}
export const QueryIntentResponse = {
  encode(message: QueryIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intent !== undefined) {
      Intent.encode(message.intent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intent = Intent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIntentResponse {
    return {
      intent: isSet(object.intent) ? Intent.fromJSON(object.intent) : undefined
    };
  },
  toJSON(message: QueryIntentResponse): unknown {
    const obj: any = {};
    message.intent !== undefined && (obj.intent = message.intent ? Intent.toJSON(message.intent) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIntentResponse>): QueryIntentResponse {
    const message = createBaseQueryIntentResponse();
    message.intent = object.intent !== undefined && object.intent !== null ? Intent.fromPartial(object.intent) : undefined;
    return message;
  }
};
function createBaseQueryIntentListRequest(): QueryIntentListRequest {
  return {
    pagination: undefined
  };
}
export const QueryIntentListRequest = {
  encode(message: QueryIntentListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIntentListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIntentListRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIntentListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIntentListRequest>): QueryIntentListRequest {
    const message = createBaseQueryIntentListRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryIntentListResponse(): QueryIntentListResponse {
  return {
    intents: [],
    pagination: undefined
  };
}
export const QueryIntentListResponse = {
  encode(message: QueryIntentListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.intents) {
      Intent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIntentListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intents.push(Intent.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIntentListResponse {
    return {
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => Intent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryIntentListResponse): unknown {
    const obj: any = {};
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? Intent.toJSON(e) : undefined);
    } else {
      obj.intents = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryIntentListResponse>): QueryIntentListResponse {
    const message = createBaseQueryIntentListResponse();
    message.intents = object.intents?.map(e => Intent.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCollectionMemberRequest(): QueryCollectionMemberRequest {
  return {
    collectionId: "",
    memberAddress: ""
  };
}
export const QueryCollectionMemberRequest = {
  encode(message: QueryCollectionMemberRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.memberAddress !== "") {
      writer.uint32(18).string(message.memberAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionMemberRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.memberAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionMemberRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      memberAddress: isSet(object.memberAddress) ? String(object.memberAddress) : ""
    };
  },
  toJSON(message: QueryCollectionMemberRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.memberAddress !== undefined && (obj.memberAddress = message.memberAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionMemberRequest>): QueryCollectionMemberRequest {
    const message = createBaseQueryCollectionMemberRequest();
    message.collectionId = object.collectionId ?? "";
    message.memberAddress = object.memberAddress ?? "";
    return message;
  }
};
function createBaseQueryCollectionMemberResponse(): QueryCollectionMemberResponse {
  return {
    memberBudget: undefined
  };
}
export const QueryCollectionMemberResponse = {
  encode(message: QueryCollectionMemberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.memberBudget !== undefined) {
      MemberBudget.encode(message.memberBudget, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionMemberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberBudget = MemberBudget.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionMemberResponse {
    return {
      memberBudget: isSet(object.memberBudget) ? MemberBudget.fromJSON(object.memberBudget) : undefined
    };
  },
  toJSON(message: QueryCollectionMemberResponse): unknown {
    const obj: any = {};
    message.memberBudget !== undefined && (obj.memberBudget = message.memberBudget ? MemberBudget.toJSON(message.memberBudget) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionMemberResponse>): QueryCollectionMemberResponse {
    const message = createBaseQueryCollectionMemberResponse();
    message.memberBudget = object.memberBudget !== undefined && object.memberBudget !== null ? MemberBudget.fromPartial(object.memberBudget) : undefined;
    return message;
  }
};
function createBaseQueryCollectionMemberListRequest(): QueryCollectionMemberListRequest {
  return {
    collectionId: "",
    pagination: undefined
  };
}
export const QueryCollectionMemberListRequest = {
  encode(message: QueryCollectionMemberListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionMemberListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionMemberListRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCollectionMemberListRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionMemberListRequest>): QueryCollectionMemberListRequest {
    const message = createBaseQueryCollectionMemberListRequest();
    message.collectionId = object.collectionId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryCollectionMemberListResponse(): QueryCollectionMemberListResponse {
  return {
    memberBudgets: [],
    pagination: undefined
  };
}
export const QueryCollectionMemberListResponse = {
  encode(message: QueryCollectionMemberListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.memberBudgets) {
      MemberBudget.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionMemberListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionMemberListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.memberBudgets.push(MemberBudget.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCollectionMemberListResponse {
    return {
      memberBudgets: Array.isArray(object?.memberBudgets) ? object.memberBudgets.map((e: any) => MemberBudget.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryCollectionMemberListResponse): unknown {
    const obj: any = {};
    if (message.memberBudgets) {
      obj.memberBudgets = message.memberBudgets.map(e => e ? MemberBudget.toJSON(e) : undefined);
    } else {
      obj.memberBudgets = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCollectionMemberListResponse>): QueryCollectionMemberListResponse {
    const message = createBaseQueryCollectionMemberListResponse();
    message.memberBudgets = object.memberBudgets?.map(e => MemberBudget.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryDisputeBySubjectRequest(): QueryDisputeBySubjectRequest {
  return {
    subjectId: "",
    targetRole: 0
  };
}
export const QueryDisputeBySubjectRequest = {
  encode(message: QueryDisputeBySubjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    if (message.targetRole !== 0) {
      writer.uint32(16).int32(message.targetRole);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeBySubjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeBySubjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        case 2:
          message.targetRole = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeBySubjectRequest {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : "",
      targetRole: isSet(object.targetRole) ? disputeTargetRoleFromJSON(object.targetRole) : 0
    };
  },
  toJSON(message: QueryDisputeBySubjectRequest): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    message.targetRole !== undefined && (obj.targetRole = disputeTargetRoleToJSON(message.targetRole));
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeBySubjectRequest>): QueryDisputeBySubjectRequest {
    const message = createBaseQueryDisputeBySubjectRequest();
    message.subjectId = object.subjectId ?? "";
    message.targetRole = object.targetRole ?? 0;
    return message;
  }
};
function createBaseQueryDisputeBySubjectResponse(): QueryDisputeBySubjectResponse {
  return {
    dispute: undefined
  };
}
export const QueryDisputeBySubjectResponse = {
  encode(message: QueryDisputeBySubjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeBySubjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeBySubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dispute = Dispute.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeBySubjectResponse {
    return {
      dispute: isSet(object.dispute) ? Dispute.fromJSON(object.dispute) : undefined
    };
  },
  toJSON(message: QueryDisputeBySubjectResponse): unknown {
    const obj: any = {};
    message.dispute !== undefined && (obj.dispute = message.dispute ? Dispute.toJSON(message.dispute) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeBySubjectResponse>): QueryDisputeBySubjectResponse {
    const message = createBaseQueryDisputeBySubjectResponse();
    message.dispute = object.dispute !== undefined && object.dispute !== null ? Dispute.fromPartial(object.dispute) : undefined;
    return message;
  }
};
function createBaseQueryDisputeListForSubjectRequest(): QueryDisputeListForSubjectRequest {
  return {
    subjectId: ""
  };
}
export const QueryDisputeListForSubjectRequest = {
  encode(message: QueryDisputeListForSubjectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subjectId !== "") {
      writer.uint32(10).string(message.subjectId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListForSubjectRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeListForSubjectRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeListForSubjectRequest {
    return {
      subjectId: isSet(object.subjectId) ? String(object.subjectId) : ""
    };
  },
  toJSON(message: QueryDisputeListForSubjectRequest): unknown {
    const obj: any = {};
    message.subjectId !== undefined && (obj.subjectId = message.subjectId);
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeListForSubjectRequest>): QueryDisputeListForSubjectRequest {
    const message = createBaseQueryDisputeListForSubjectRequest();
    message.subjectId = object.subjectId ?? "";
    return message;
  }
};
function createBaseQueryDisputeListForSubjectResponse(): QueryDisputeListForSubjectResponse {
  return {
    disputes: []
  };
}
export const QueryDisputeListForSubjectResponse = {
  encode(message: QueryDisputeListForSubjectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.disputes) {
      Dispute.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDisputeListForSubjectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisputeListForSubjectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disputes.push(Dispute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDisputeListForSubjectResponse {
    return {
      disputes: Array.isArray(object?.disputes) ? object.disputes.map((e: any) => Dispute.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDisputeListForSubjectResponse): unknown {
    const obj: any = {};
    if (message.disputes) {
      obj.disputes = message.disputes.map(e => e ? Dispute.toJSON(e) : undefined);
    } else {
      obj.disputes = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryDisputeListForSubjectResponse>): QueryDisputeListForSubjectResponse {
    const message = createBaseQueryDisputeListForSubjectResponse();
    message.disputes = object.disputes?.map(e => Dispute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryAgentDepositBalanceRequest(): QueryAgentDepositBalanceRequest {
  return {
    collectionId: "",
    agentAddress: ""
  };
}
export const QueryAgentDepositBalanceRequest = {
  encode(message: QueryAgentDepositBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.agentAddress !== "") {
      writer.uint32(18).string(message.agentAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentDepositBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.agentAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentDepositBalanceRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      agentAddress: isSet(object.agentAddress) ? String(object.agentAddress) : ""
    };
  },
  toJSON(message: QueryAgentDepositBalanceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.agentAddress !== undefined && (obj.agentAddress = message.agentAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryAgentDepositBalanceRequest>): QueryAgentDepositBalanceRequest {
    const message = createBaseQueryAgentDepositBalanceRequest();
    message.collectionId = object.collectionId ?? "";
    message.agentAddress = object.agentAddress ?? "";
    return message;
  }
};
function createBaseQueryAgentDepositBalanceResponse(): QueryAgentDepositBalanceResponse {
  return {
    balance: undefined
  };
}
export const QueryAgentDepositBalanceResponse = {
  encode(message: QueryAgentDepositBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      AgentDepositBalance.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentDepositBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = AgentDepositBalance.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentDepositBalanceResponse {
    return {
      balance: isSet(object.balance) ? AgentDepositBalance.fromJSON(object.balance) : undefined
    };
  },
  toJSON(message: QueryAgentDepositBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? AgentDepositBalance.toJSON(message.balance) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAgentDepositBalanceResponse>): QueryAgentDepositBalanceResponse {
    const message = createBaseQueryAgentDepositBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? AgentDepositBalance.fromPartial(object.balance) : undefined;
    return message;
  }
};
function createBaseQueryAgentDepositBalanceListRequest(): QueryAgentDepositBalanceListRequest {
  return {
    collectionId: "",
    pagination: undefined
  };
}
export const QueryAgentDepositBalanceListRequest = {
  encode(message: QueryAgentDepositBalanceListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentDepositBalanceListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentDepositBalanceListRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAgentDepositBalanceListRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAgentDepositBalanceListRequest>): QueryAgentDepositBalanceListRequest {
    const message = createBaseQueryAgentDepositBalanceListRequest();
    message.collectionId = object.collectionId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseQueryAgentDepositBalanceListResponse(): QueryAgentDepositBalanceListResponse {
  return {
    balances: [],
    pagination: undefined
  };
}
export const QueryAgentDepositBalanceListResponse = {
  encode(message: QueryAgentDepositBalanceListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      AgentDepositBalance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAgentDepositBalanceListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAgentDepositBalanceListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balances.push(AgentDepositBalance.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAgentDepositBalanceListResponse {
    return {
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => AgentDepositBalance.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAgentDepositBalanceListResponse): unknown {
    const obj: any = {};
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? AgentDepositBalance.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAgentDepositBalanceListResponse>): QueryAgentDepositBalanceListResponse {
    const message = createBaseQueryAgentDepositBalanceListResponse();
    message.balances = object.balances?.map(e => AgentDepositBalance.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};