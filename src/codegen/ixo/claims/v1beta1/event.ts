import { Collection, CollectionSDKType, Claim, ClaimSDKType, Evaluation, EvaluationSDKType, Dispute, DisputeSDKType } from "./claims";
import { WithdrawPaymentConstraints, WithdrawPaymentConstraintsSDKType } from "./authz";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** CollectionCreatedEvent is an event triggered on a Collection creation */

export interface CollectionCreatedEvent {
  /** CollectionCreatedEvent is an event triggered on a Collection creation */
  collection?: Collection;
}
/** CollectionCreatedEvent is an event triggered on a Collection creation */

export interface CollectionCreatedEventSDKType {
  /** CollectionCreatedEvent is an event triggered on a Collection creation */
  collection?: CollectionSDKType;
}
/** CollectionUpdatedEvent is an event triggered on a Collection update */

export interface CollectionUpdatedEvent {
  /** CollectionUpdatedEvent is an event triggered on a Collection update */
  collection?: Collection;
}
/** CollectionUpdatedEvent is an event triggered on a Collection update */

export interface CollectionUpdatedEventSDKType {
  /** CollectionUpdatedEvent is an event triggered on a Collection update */
  collection?: CollectionSDKType;
}
/** CollectionCreatedEvent is an event triggered on a Claim submission */

export interface ClaimSubmittedEvent {
  /** CollectionCreatedEvent is an event triggered on a Claim submission */
  claim?: Claim;
}
/** CollectionCreatedEvent is an event triggered on a Claim submission */

export interface ClaimSubmittedEventSDKType {
  /** CollectionCreatedEvent is an event triggered on a Claim submission */
  claim?: ClaimSDKType;
}
/** ClaimUpdatedEvent is an event triggered on a Claim update */

export interface ClaimUpdatedEvent {
  /** ClaimUpdatedEvent is an event triggered on a Claim update */
  claim?: Claim;
}
/** ClaimUpdatedEvent is an event triggered on a Claim update */

export interface ClaimUpdatedEventSDKType {
  /** ClaimUpdatedEvent is an event triggered on a Claim update */
  claim?: ClaimSDKType;
}
/** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */

export interface ClaimEvaluatedEvent {
  /** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */
  evaluation?: Evaluation;
}
/** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */

export interface ClaimEvaluatedEventSDKType {
  /** ClaimEvaluatedEvent is an event triggered on a Claim evaluation */
  evaluation?: EvaluationSDKType;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface ClaimDisputedEvent {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  dispute?: Dispute;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface ClaimDisputedEventSDKType {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  dispute?: DisputeSDKType;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface PaymentWithdrawnEvent {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  withdraw?: WithdrawPaymentConstraints;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface PaymentWithdrawnEventSDKType {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  withdraw?: WithdrawPaymentConstraintsSDKType;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface PaymentWithdrawCreatedEvent {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  withdraw?: WithdrawPaymentConstraints;
}
/** ClaimDisputedEvent is an event triggered on a Claim dispute */

export interface PaymentWithdrawCreatedEventSDKType {
  /** ClaimDisputedEvent is an event triggered on a Claim dispute */
  withdraw?: WithdrawPaymentConstraintsSDKType;
}

function createBaseCollectionCreatedEvent(): CollectionCreatedEvent {
  return {
    collection: undefined
  };
}

export const CollectionCreatedEvent = {
  encode(message: CollectionCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionCreatedEvent();

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

  fromJSON(object: any): CollectionCreatedEvent {
    return {
      collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined
    };
  },

  toJSON(message: CollectionCreatedEvent): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CollectionCreatedEvent>): CollectionCreatedEvent {
    const message = createBaseCollectionCreatedEvent();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    return message;
  }

};

function createBaseCollectionUpdatedEvent(): CollectionUpdatedEvent {
  return {
    collection: undefined
  };
}

export const CollectionUpdatedEvent = {
  encode(message: CollectionUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionUpdatedEvent();

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

  fromJSON(object: any): CollectionUpdatedEvent {
    return {
      collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined
    };
  },

  toJSON(message: CollectionUpdatedEvent): unknown {
    const obj: any = {};
    message.collection !== undefined && (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    return obj;
  },

  fromPartial(object: Partial<CollectionUpdatedEvent>): CollectionUpdatedEvent {
    const message = createBaseCollectionUpdatedEvent();
    message.collection = object.collection !== undefined && object.collection !== null ? Collection.fromPartial(object.collection) : undefined;
    return message;
  }

};

function createBaseClaimSubmittedEvent(): ClaimSubmittedEvent {
  return {
    claim: undefined
  };
}

export const ClaimSubmittedEvent = {
  encode(message: ClaimSubmittedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimSubmittedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimSubmittedEvent();

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

  fromJSON(object: any): ClaimSubmittedEvent {
    return {
      claim: isSet(object.claim) ? Claim.fromJSON(object.claim) : undefined
    };
  },

  toJSON(message: ClaimSubmittedEvent): unknown {
    const obj: any = {};
    message.claim !== undefined && (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClaimSubmittedEvent>): ClaimSubmittedEvent {
    const message = createBaseClaimSubmittedEvent();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  }

};

function createBaseClaimUpdatedEvent(): ClaimUpdatedEvent {
  return {
    claim: undefined
  };
}

export const ClaimUpdatedEvent = {
  encode(message: ClaimUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.claim !== undefined) {
      Claim.encode(message.claim, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimUpdatedEvent();

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

  fromJSON(object: any): ClaimUpdatedEvent {
    return {
      claim: isSet(object.claim) ? Claim.fromJSON(object.claim) : undefined
    };
  },

  toJSON(message: ClaimUpdatedEvent): unknown {
    const obj: any = {};
    message.claim !== undefined && (obj.claim = message.claim ? Claim.toJSON(message.claim) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClaimUpdatedEvent>): ClaimUpdatedEvent {
    const message = createBaseClaimUpdatedEvent();
    message.claim = object.claim !== undefined && object.claim !== null ? Claim.fromPartial(object.claim) : undefined;
    return message;
  }

};

function createBaseClaimEvaluatedEvent(): ClaimEvaluatedEvent {
  return {
    evaluation: undefined
  };
}

export const ClaimEvaluatedEvent = {
  encode(message: ClaimEvaluatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.evaluation !== undefined) {
      Evaluation.encode(message.evaluation, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimEvaluatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimEvaluatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.evaluation = Evaluation.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClaimEvaluatedEvent {
    return {
      evaluation: isSet(object.evaluation) ? Evaluation.fromJSON(object.evaluation) : undefined
    };
  },

  toJSON(message: ClaimEvaluatedEvent): unknown {
    const obj: any = {};
    message.evaluation !== undefined && (obj.evaluation = message.evaluation ? Evaluation.toJSON(message.evaluation) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClaimEvaluatedEvent>): ClaimEvaluatedEvent {
    const message = createBaseClaimEvaluatedEvent();
    message.evaluation = object.evaluation !== undefined && object.evaluation !== null ? Evaluation.fromPartial(object.evaluation) : undefined;
    return message;
  }

};

function createBaseClaimDisputedEvent(): ClaimDisputedEvent {
  return {
    dispute: undefined
  };
}

export const ClaimDisputedEvent = {
  encode(message: ClaimDisputedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dispute !== undefined) {
      Dispute.encode(message.dispute, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimDisputedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimDisputedEvent();

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

  fromJSON(object: any): ClaimDisputedEvent {
    return {
      dispute: isSet(object.dispute) ? Dispute.fromJSON(object.dispute) : undefined
    };
  },

  toJSON(message: ClaimDisputedEvent): unknown {
    const obj: any = {};
    message.dispute !== undefined && (obj.dispute = message.dispute ? Dispute.toJSON(message.dispute) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClaimDisputedEvent>): ClaimDisputedEvent {
    const message = createBaseClaimDisputedEvent();
    message.dispute = object.dispute !== undefined && object.dispute !== null ? Dispute.fromPartial(object.dispute) : undefined;
    return message;
  }

};

function createBasePaymentWithdrawnEvent(): PaymentWithdrawnEvent {
  return {
    withdraw: undefined
  };
}

export const PaymentWithdrawnEvent = {
  encode(message: PaymentWithdrawnEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdraw !== undefined) {
      WithdrawPaymentConstraints.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentWithdrawnEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentWithdrawnEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdraw = WithdrawPaymentConstraints.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PaymentWithdrawnEvent {
    return {
      withdraw: isSet(object.withdraw) ? WithdrawPaymentConstraints.fromJSON(object.withdraw) : undefined
    };
  },

  toJSON(message: PaymentWithdrawnEvent): unknown {
    const obj: any = {};
    message.withdraw !== undefined && (obj.withdraw = message.withdraw ? WithdrawPaymentConstraints.toJSON(message.withdraw) : undefined);
    return obj;
  },

  fromPartial(object: Partial<PaymentWithdrawnEvent>): PaymentWithdrawnEvent {
    const message = createBasePaymentWithdrawnEvent();
    message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? WithdrawPaymentConstraints.fromPartial(object.withdraw) : undefined;
    return message;
  }

};

function createBasePaymentWithdrawCreatedEvent(): PaymentWithdrawCreatedEvent {
  return {
    withdraw: undefined
  };
}

export const PaymentWithdrawCreatedEvent = {
  encode(message: PaymentWithdrawCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdraw !== undefined) {
      WithdrawPaymentConstraints.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PaymentWithdrawCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentWithdrawCreatedEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.withdraw = WithdrawPaymentConstraints.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PaymentWithdrawCreatedEvent {
    return {
      withdraw: isSet(object.withdraw) ? WithdrawPaymentConstraints.fromJSON(object.withdraw) : undefined
    };
  },

  toJSON(message: PaymentWithdrawCreatedEvent): unknown {
    const obj: any = {};
    message.withdraw !== undefined && (obj.withdraw = message.withdraw ? WithdrawPaymentConstraints.toJSON(message.withdraw) : undefined);
    return obj;
  },

  fromPartial(object: Partial<PaymentWithdrawCreatedEvent>): PaymentWithdrawCreatedEvent {
    const message = createBasePaymentWithdrawCreatedEvent();
    message.withdraw = object.withdraw !== undefined && object.withdraw !== null ? WithdrawPaymentConstraints.fromPartial(object.withdraw) : undefined;
    return message;
  }

};