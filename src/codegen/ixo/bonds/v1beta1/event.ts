import { Bond, BondSDKType, BuyOrder, BuyOrderSDKType, SellOrder, SellOrderSDKType, SwapOrder, SwapOrderSDKType } from "./bonds";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** BondCreatedEvent is an event triggered on a Bond creation */
export interface BondCreatedEvent {
  /** BondCreatedEvent is an event triggered on a Bond creation */
  bond?: Bond;
}
/** BondCreatedEvent is an event triggered on a Bond creation */
export interface BondCreatedEventSDKType {
  bond?: BondSDKType;
}
/** BondUpdatedEvent is an event triggered on a Bond update */
export interface BondUpdatedEvent {
  /** BondUpdatedEvent is an event triggered on a Bond update */
  bond?: Bond;
}
/** BondUpdatedEvent is an event triggered on a Bond update */
export interface BondUpdatedEventSDKType {
  bond?: BondSDKType;
}
/** BondSetNextAlphaEvent is an event triggered when next batch alpha is set */
export interface BondSetNextAlphaEvent {
  bondDid: string;
  nextAlpha: string;
  signer: string;
}
/** BondSetNextAlphaEvent is an event triggered when next batch alpha is set */
export interface BondSetNextAlphaEventSDKType {
  bond_did: string;
  next_alpha: string;
  signer: string;
}
/** BondBuyOrderEvent is an event triggered on a Bond buy order */
export interface BondBuyOrderEvent {
  order?: BuyOrder;
  bondDid: string;
}
/** BondBuyOrderEvent is an event triggered on a Bond buy order */
export interface BondBuyOrderEventSDKType {
  order?: BuyOrderSDKType;
  bond_did: string;
}
/** BondSellOrderEvent is an event triggered on a Bond sell order */
export interface BondSellOrderEvent {
  order?: SellOrder;
  bondDid: string;
}
/** BondSellOrderEvent is an event triggered on a Bond sell order */
export interface BondSellOrderEventSDKType {
  order?: SellOrderSDKType;
  bond_did: string;
}
/** BondSwapOrderEvent is an event triggered on a Bond swap order */
export interface BondSwapOrderEvent {
  order?: SwapOrder;
  bondDid: string;
}
/** BondSwapOrderEvent is an event triggered on a Bond swap order */
export interface BondSwapOrderEventSDKType {
  order?: SwapOrderSDKType;
  bond_did: string;
}
/**
 * BondMakeOutcomePaymentEvent is an event triggered on a Bond make outcome
 * payment
 */
export interface BondMakeOutcomePaymentEvent {
  bondDid: string;
  outcomePayment: Coin[];
  senderDid: string;
  senderAddress: string;
}
/**
 * BondMakeOutcomePaymentEvent is an event triggered on a Bond make outcome
 * payment
 */
export interface BondMakeOutcomePaymentEventSDKType {
  bond_did: string;
  outcome_payment: CoinSDKType[];
  sender_did: string;
  sender_address: string;
}
/** BondWithdrawShareEvent is an event triggered on a Bond share withdrawal */
export interface BondWithdrawShareEvent {
  bondDid: string;
  withdrawPayment: Coin[];
  recipientDid: string;
  recipientAddress: string;
}
/** BondWithdrawShareEvent is an event triggered on a Bond share withdrawal */
export interface BondWithdrawShareEventSDKType {
  bond_did: string;
  withdraw_payment: CoinSDKType[];
  recipient_did: string;
  recipient_address: string;
}
/** BondWithdrawReserveEvent is an event triggered on a Bond reserve withdrawal */
export interface BondWithdrawReserveEvent {
  bondDid: string;
  withdrawAmount: Coin[];
  withdrawerDid: string;
  withdrawerAddress: string;
  reserveWithdrawalAddress: string;
}
/** BondWithdrawReserveEvent is an event triggered on a Bond reserve withdrawal */
export interface BondWithdrawReserveEventSDKType {
  bond_did: string;
  withdraw_amount: CoinSDKType[];
  withdrawer_did: string;
  withdrawer_address: string;
  reserve_withdrawal_address: string;
}
/**
 * BondEditAlphaSuccessEvent is an event triggered on a successful edit of Bond
 * alpha value
 */
export interface BondEditAlphaSuccessEvent {
  bondDid: string;
  token: string;
  publicAlpha: string;
  systemAlpha: string;
}
/**
 * BondEditAlphaSuccessEvent is an event triggered on a successful edit of Bond
 * alpha value
 */
export interface BondEditAlphaSuccessEventSDKType {
  bond_did: string;
  token: string;
  public_alpha: string;
  system_alpha: string;
}
/**
 * BondEditAlphaFailedEvent is an event triggered on a failed attempt to edit of
 * Bond alpha value
 */
export interface BondEditAlphaFailedEvent {
  bondDid: string;
  token: string;
  cancelReason: string;
}
/**
 * BondEditAlphaFailedEvent is an event triggered on a failed attempt to edit of
 * Bond alpha value
 */
export interface BondEditAlphaFailedEventSDKType {
  bond_did: string;
  token: string;
  cancel_reason: string;
}
/**
 * BondBuyOrderFulfilledEvent is an event triggered on a Bond buy order
 * fullfillment
 */
export interface BondBuyOrderFulfilledEvent {
  bondDid: string;
  order?: BuyOrder;
  chargedPrices: Coin[];
  chargedFees: Coin[];
  returnedToAddress: Coin[];
  newBondTokenBalance: string;
  chargedPricesOfWhichReserve: string;
  chargedPricesOfWhichFunding: Coin[];
}
/**
 * BondBuyOrderFulfilledEvent is an event triggered on a Bond buy order
 * fullfillment
 */
export interface BondBuyOrderFulfilledEventSDKType {
  bond_did: string;
  order?: BuyOrderSDKType;
  charged_prices: CoinSDKType[];
  charged_fees: CoinSDKType[];
  returned_to_address: CoinSDKType[];
  new_bond_token_balance: string;
  charged_prices_of_which_reserve: string;
  charged_prices_of_which_funding: CoinSDKType[];
}
/**
 * BondSellOrderFulfilledEvent is an event triggered on a Bond sell order
 * fullfillment
 */
export interface BondSellOrderFulfilledEvent {
  bondDid: string;
  order?: SellOrder;
  chargedFees: Coin[];
  returnedToAddress: Coin[];
  newBondTokenBalance: string;
}
/**
 * BondSellOrderFulfilledEvent is an event triggered on a Bond sell order
 * fullfillment
 */
export interface BondSellOrderFulfilledEventSDKType {
  bond_did: string;
  order?: SellOrderSDKType;
  charged_fees: CoinSDKType[];
  returned_to_address: CoinSDKType[];
  new_bond_token_balance: string;
}
/**
 * BondSwapOrderFulfilledEvent is an event triggered on a Bond swap order
 * fullfillment
 */
export interface BondSwapOrderFulfilledEvent {
  bondDid: string;
  order?: SwapOrder;
  chargedFee?: Coin;
  returnedToAddress: Coin[];
  tokensSwapped?: Coin;
}
/**
 * BondSwapOrderFulfilledEvent is an event triggered on a Bond swap order
 * fullfillment
 */
export interface BondSwapOrderFulfilledEventSDKType {
  bond_did: string;
  order?: SwapOrderSDKType;
  charged_fee?: CoinSDKType;
  returned_to_address: CoinSDKType[];
  tokens_swapped?: CoinSDKType;
}
/**
 * BondBuyOrderCancelledEvent is an event triggered on a Bond buy order
 * cancellation
 */
export interface BondBuyOrderCancelledEvent {
  bondDid: string;
  order?: BuyOrder;
}
/**
 * BondBuyOrderCancelledEvent is an event triggered on a Bond buy order
 * cancellation
 */
export interface BondBuyOrderCancelledEventSDKType {
  bond_did: string;
  order?: BuyOrderSDKType;
}
function createBaseBondCreatedEvent(): BondCreatedEvent {
  return {
    bond: undefined
  };
}
export const BondCreatedEvent = {
  encode(message: BondCreatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondCreatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondCreatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondCreatedEvent {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: BondCreatedEvent): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BondCreatedEvent>): BondCreatedEvent {
    const message = createBaseBondCreatedEvent();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }
};
function createBaseBondUpdatedEvent(): BondUpdatedEvent {
  return {
    bond: undefined
  };
}
export const BondUpdatedEvent = {
  encode(message: BondUpdatedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bond !== undefined) {
      Bond.encode(message.bond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondUpdatedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bond = Bond.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondUpdatedEvent {
    return {
      bond: isSet(object.bond) ? Bond.fromJSON(object.bond) : undefined
    };
  },
  toJSON(message: BondUpdatedEvent): unknown {
    const obj: any = {};
    message.bond !== undefined && (obj.bond = message.bond ? Bond.toJSON(message.bond) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BondUpdatedEvent>): BondUpdatedEvent {
    const message = createBaseBondUpdatedEvent();
    message.bond = object.bond !== undefined && object.bond !== null ? Bond.fromPartial(object.bond) : undefined;
    return message;
  }
};
function createBaseBondSetNextAlphaEvent(): BondSetNextAlphaEvent {
  return {
    bondDid: "",
    nextAlpha: "",
    signer: ""
  };
}
export const BondSetNextAlphaEvent = {
  encode(message: BondSetNextAlphaEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.nextAlpha !== "") {
      writer.uint32(18).string(message.nextAlpha);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondSetNextAlphaEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSetNextAlphaEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.nextAlpha = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondSetNextAlphaEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      nextAlpha: isSet(object.nextAlpha) ? String(object.nextAlpha) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: BondSetNextAlphaEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.nextAlpha !== undefined && (obj.nextAlpha = message.nextAlpha);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<BondSetNextAlphaEvent>): BondSetNextAlphaEvent {
    const message = createBaseBondSetNextAlphaEvent();
    message.bondDid = object.bondDid ?? "";
    message.nextAlpha = object.nextAlpha ?? "";
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseBondBuyOrderEvent(): BondBuyOrderEvent {
  return {
    order: undefined,
    bondDid: ""
  };
}
export const BondBuyOrderEvent = {
  encode(message: BondBuyOrderEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      BuyOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondBuyOrderEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = BuyOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.bondDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondBuyOrderEvent {
    return {
      order: isSet(object.order) ? BuyOrder.fromJSON(object.order) : undefined,
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : ""
    };
  },
  toJSON(message: BondBuyOrderEvent): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? BuyOrder.toJSON(message.order) : undefined);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    return obj;
  },
  fromPartial(object: Partial<BondBuyOrderEvent>): BondBuyOrderEvent {
    const message = createBaseBondBuyOrderEvent();
    message.order = object.order !== undefined && object.order !== null ? BuyOrder.fromPartial(object.order) : undefined;
    message.bondDid = object.bondDid ?? "";
    return message;
  }
};
function createBaseBondSellOrderEvent(): BondSellOrderEvent {
  return {
    order: undefined,
    bondDid: ""
  };
}
export const BondSellOrderEvent = {
  encode(message: BondSellOrderEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      SellOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondSellOrderEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSellOrderEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = SellOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.bondDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondSellOrderEvent {
    return {
      order: isSet(object.order) ? SellOrder.fromJSON(object.order) : undefined,
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : ""
    };
  },
  toJSON(message: BondSellOrderEvent): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? SellOrder.toJSON(message.order) : undefined);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    return obj;
  },
  fromPartial(object: Partial<BondSellOrderEvent>): BondSellOrderEvent {
    const message = createBaseBondSellOrderEvent();
    message.order = object.order !== undefined && object.order !== null ? SellOrder.fromPartial(object.order) : undefined;
    message.bondDid = object.bondDid ?? "";
    return message;
  }
};
function createBaseBondSwapOrderEvent(): BondSwapOrderEvent {
  return {
    order: undefined,
    bondDid: ""
  };
}
export const BondSwapOrderEvent = {
  encode(message: BondSwapOrderEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      SwapOrder.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondSwapOrderEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSwapOrderEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = SwapOrder.decode(reader, reader.uint32());
          break;
        case 2:
          message.bondDid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondSwapOrderEvent {
    return {
      order: isSet(object.order) ? SwapOrder.fromJSON(object.order) : undefined,
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : ""
    };
  },
  toJSON(message: BondSwapOrderEvent): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? SwapOrder.toJSON(message.order) : undefined);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    return obj;
  },
  fromPartial(object: Partial<BondSwapOrderEvent>): BondSwapOrderEvent {
    const message = createBaseBondSwapOrderEvent();
    message.order = object.order !== undefined && object.order !== null ? SwapOrder.fromPartial(object.order) : undefined;
    message.bondDid = object.bondDid ?? "";
    return message;
  }
};
function createBaseBondMakeOutcomePaymentEvent(): BondMakeOutcomePaymentEvent {
  return {
    bondDid: "",
    outcomePayment: [],
    senderDid: "",
    senderAddress: ""
  };
}
export const BondMakeOutcomePaymentEvent = {
  encode(message: BondMakeOutcomePaymentEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    for (const v of message.outcomePayment) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.senderDid !== "") {
      writer.uint32(26).string(message.senderDid);
    }
    if (message.senderAddress !== "") {
      writer.uint32(34).string(message.senderAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondMakeOutcomePaymentEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondMakeOutcomePaymentEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.outcomePayment.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.senderDid = reader.string();
          break;
        case 4:
          message.senderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondMakeOutcomePaymentEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      outcomePayment: Array.isArray(object?.outcomePayment) ? object.outcomePayment.map((e: any) => Coin.fromJSON(e)) : [],
      senderDid: isSet(object.senderDid) ? String(object.senderDid) : "",
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : ""
    };
  },
  toJSON(message: BondMakeOutcomePaymentEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    if (message.outcomePayment) {
      obj.outcomePayment = message.outcomePayment.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.outcomePayment = [];
    }
    message.senderDid !== undefined && (obj.senderDid = message.senderDid);
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },
  fromPartial(object: Partial<BondMakeOutcomePaymentEvent>): BondMakeOutcomePaymentEvent {
    const message = createBaseBondMakeOutcomePaymentEvent();
    message.bondDid = object.bondDid ?? "";
    message.outcomePayment = object.outcomePayment?.map(e => Coin.fromPartial(e)) || [];
    message.senderDid = object.senderDid ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }
};
function createBaseBondWithdrawShareEvent(): BondWithdrawShareEvent {
  return {
    bondDid: "",
    withdrawPayment: [],
    recipientDid: "",
    recipientAddress: ""
  };
}
export const BondWithdrawShareEvent = {
  encode(message: BondWithdrawShareEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    for (const v of message.withdrawPayment) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.recipientDid !== "") {
      writer.uint32(26).string(message.recipientDid);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(34).string(message.recipientAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondWithdrawShareEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondWithdrawShareEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.withdrawPayment.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.recipientDid = reader.string();
          break;
        case 4:
          message.recipientAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondWithdrawShareEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      withdrawPayment: Array.isArray(object?.withdrawPayment) ? object.withdrawPayment.map((e: any) => Coin.fromJSON(e)) : [],
      recipientDid: isSet(object.recipientDid) ? String(object.recipientDid) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : ""
    };
  },
  toJSON(message: BondWithdrawShareEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    if (message.withdrawPayment) {
      obj.withdrawPayment = message.withdrawPayment.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.withdrawPayment = [];
    }
    message.recipientDid !== undefined && (obj.recipientDid = message.recipientDid);
    message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
    return obj;
  },
  fromPartial(object: Partial<BondWithdrawShareEvent>): BondWithdrawShareEvent {
    const message = createBaseBondWithdrawShareEvent();
    message.bondDid = object.bondDid ?? "";
    message.withdrawPayment = object.withdrawPayment?.map(e => Coin.fromPartial(e)) || [];
    message.recipientDid = object.recipientDid ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    return message;
  }
};
function createBaseBondWithdrawReserveEvent(): BondWithdrawReserveEvent {
  return {
    bondDid: "",
    withdrawAmount: [],
    withdrawerDid: "",
    withdrawerAddress: "",
    reserveWithdrawalAddress: ""
  };
}
export const BondWithdrawReserveEvent = {
  encode(message: BondWithdrawReserveEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    for (const v of message.withdrawAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.withdrawerDid !== "") {
      writer.uint32(26).string(message.withdrawerDid);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(34).string(message.withdrawerAddress);
    }
    if (message.reserveWithdrawalAddress !== "") {
      writer.uint32(42).string(message.reserveWithdrawalAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondWithdrawReserveEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondWithdrawReserveEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.withdrawAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.withdrawerDid = reader.string();
          break;
        case 4:
          message.withdrawerAddress = reader.string();
          break;
        case 5:
          message.reserveWithdrawalAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondWithdrawReserveEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      withdrawAmount: Array.isArray(object?.withdrawAmount) ? object.withdrawAmount.map((e: any) => Coin.fromJSON(e)) : [],
      withdrawerDid: isSet(object.withdrawerDid) ? String(object.withdrawerDid) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      reserveWithdrawalAddress: isSet(object.reserveWithdrawalAddress) ? String(object.reserveWithdrawalAddress) : ""
    };
  },
  toJSON(message: BondWithdrawReserveEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    if (message.withdrawAmount) {
      obj.withdrawAmount = message.withdrawAmount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.withdrawAmount = [];
    }
    message.withdrawerDid !== undefined && (obj.withdrawerDid = message.withdrawerDid);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    message.reserveWithdrawalAddress !== undefined && (obj.reserveWithdrawalAddress = message.reserveWithdrawalAddress);
    return obj;
  },
  fromPartial(object: Partial<BondWithdrawReserveEvent>): BondWithdrawReserveEvent {
    const message = createBaseBondWithdrawReserveEvent();
    message.bondDid = object.bondDid ?? "";
    message.withdrawAmount = object.withdrawAmount?.map(e => Coin.fromPartial(e)) || [];
    message.withdrawerDid = object.withdrawerDid ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.reserveWithdrawalAddress = object.reserveWithdrawalAddress ?? "";
    return message;
  }
};
function createBaseBondEditAlphaSuccessEvent(): BondEditAlphaSuccessEvent {
  return {
    bondDid: "",
    token: "",
    publicAlpha: "",
    systemAlpha: ""
  };
}
export const BondEditAlphaSuccessEvent = {
  encode(message: BondEditAlphaSuccessEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.publicAlpha !== "") {
      writer.uint32(26).string(message.publicAlpha);
    }
    if (message.systemAlpha !== "") {
      writer.uint32(34).string(message.systemAlpha);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondEditAlphaSuccessEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondEditAlphaSuccessEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.publicAlpha = reader.string();
          break;
        case 4:
          message.systemAlpha = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondEditAlphaSuccessEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      token: isSet(object.token) ? String(object.token) : "",
      publicAlpha: isSet(object.publicAlpha) ? String(object.publicAlpha) : "",
      systemAlpha: isSet(object.systemAlpha) ? String(object.systemAlpha) : ""
    };
  },
  toJSON(message: BondEditAlphaSuccessEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.token !== undefined && (obj.token = message.token);
    message.publicAlpha !== undefined && (obj.publicAlpha = message.publicAlpha);
    message.systemAlpha !== undefined && (obj.systemAlpha = message.systemAlpha);
    return obj;
  },
  fromPartial(object: Partial<BondEditAlphaSuccessEvent>): BondEditAlphaSuccessEvent {
    const message = createBaseBondEditAlphaSuccessEvent();
    message.bondDid = object.bondDid ?? "";
    message.token = object.token ?? "";
    message.publicAlpha = object.publicAlpha ?? "";
    message.systemAlpha = object.systemAlpha ?? "";
    return message;
  }
};
function createBaseBondEditAlphaFailedEvent(): BondEditAlphaFailedEvent {
  return {
    bondDid: "",
    token: "",
    cancelReason: ""
  };
}
export const BondEditAlphaFailedEvent = {
  encode(message: BondEditAlphaFailedEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.cancelReason !== "") {
      writer.uint32(26).string(message.cancelReason);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondEditAlphaFailedEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondEditAlphaFailedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.token = reader.string();
          break;
        case 3:
          message.cancelReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondEditAlphaFailedEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      token: isSet(object.token) ? String(object.token) : "",
      cancelReason: isSet(object.cancelReason) ? String(object.cancelReason) : ""
    };
  },
  toJSON(message: BondEditAlphaFailedEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.token !== undefined && (obj.token = message.token);
    message.cancelReason !== undefined && (obj.cancelReason = message.cancelReason);
    return obj;
  },
  fromPartial(object: Partial<BondEditAlphaFailedEvent>): BondEditAlphaFailedEvent {
    const message = createBaseBondEditAlphaFailedEvent();
    message.bondDid = object.bondDid ?? "";
    message.token = object.token ?? "";
    message.cancelReason = object.cancelReason ?? "";
    return message;
  }
};
function createBaseBondBuyOrderFulfilledEvent(): BondBuyOrderFulfilledEvent {
  return {
    bondDid: "",
    order: undefined,
    chargedPrices: [],
    chargedFees: [],
    returnedToAddress: [],
    newBondTokenBalance: "",
    chargedPricesOfWhichReserve: undefined,
    chargedPricesOfWhichFunding: []
  };
}
export const BondBuyOrderFulfilledEvent = {
  encode(message: BondBuyOrderFulfilledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.order !== undefined) {
      BuyOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.chargedPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.chargedFees) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.returnedToAddress) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.newBondTokenBalance !== "") {
      writer.uint32(50).string(message.newBondTokenBalance);
    }
    if (message.chargedPricesOfWhichReserve !== undefined) {
      writer.uint32(58).string(message.chargedPricesOfWhichReserve);
    }
    for (const v of message.chargedPricesOfWhichFunding) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderFulfilledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondBuyOrderFulfilledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.order = BuyOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.chargedPrices.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.chargedFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.returnedToAddress.push(Coin.decode(reader, reader.uint32()));
          break;
        case 6:
          message.newBondTokenBalance = reader.string();
          break;
        case 7:
          message.chargedPricesOfWhichReserve = reader.string();
          break;
        case 8:
          message.chargedPricesOfWhichFunding.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondBuyOrderFulfilledEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      order: isSet(object.order) ? BuyOrder.fromJSON(object.order) : undefined,
      chargedPrices: Array.isArray(object?.chargedPrices) ? object.chargedPrices.map((e: any) => Coin.fromJSON(e)) : [],
      chargedFees: Array.isArray(object?.chargedFees) ? object.chargedFees.map((e: any) => Coin.fromJSON(e)) : [],
      returnedToAddress: Array.isArray(object?.returnedToAddress) ? object.returnedToAddress.map((e: any) => Coin.fromJSON(e)) : [],
      newBondTokenBalance: isSet(object.newBondTokenBalance) ? String(object.newBondTokenBalance) : "",
      chargedPricesOfWhichReserve: isSet(object.chargedPricesOfWhichReserve) ? String(object.chargedPricesOfWhichReserve) : undefined,
      chargedPricesOfWhichFunding: Array.isArray(object?.chargedPricesOfWhichFunding) ? object.chargedPricesOfWhichFunding.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: BondBuyOrderFulfilledEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.order !== undefined && (obj.order = message.order ? BuyOrder.toJSON(message.order) : undefined);
    if (message.chargedPrices) {
      obj.chargedPrices = message.chargedPrices.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.chargedPrices = [];
    }
    if (message.chargedFees) {
      obj.chargedFees = message.chargedFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.chargedFees = [];
    }
    if (message.returnedToAddress) {
      obj.returnedToAddress = message.returnedToAddress.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.returnedToAddress = [];
    }
    message.newBondTokenBalance !== undefined && (obj.newBondTokenBalance = message.newBondTokenBalance);
    message.chargedPricesOfWhichReserve !== undefined && (obj.chargedPricesOfWhichReserve = message.chargedPricesOfWhichReserve);
    if (message.chargedPricesOfWhichFunding) {
      obj.chargedPricesOfWhichFunding = message.chargedPricesOfWhichFunding.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.chargedPricesOfWhichFunding = [];
    }
    return obj;
  },
  fromPartial(object: Partial<BondBuyOrderFulfilledEvent>): BondBuyOrderFulfilledEvent {
    const message = createBaseBondBuyOrderFulfilledEvent();
    message.bondDid = object.bondDid ?? "";
    message.order = object.order !== undefined && object.order !== null ? BuyOrder.fromPartial(object.order) : undefined;
    message.chargedPrices = object.chargedPrices?.map(e => Coin.fromPartial(e)) || [];
    message.chargedFees = object.chargedFees?.map(e => Coin.fromPartial(e)) || [];
    message.returnedToAddress = object.returnedToAddress?.map(e => Coin.fromPartial(e)) || [];
    message.newBondTokenBalance = object.newBondTokenBalance ?? "";
    message.chargedPricesOfWhichReserve = object.chargedPricesOfWhichReserve ?? undefined;
    message.chargedPricesOfWhichFunding = object.chargedPricesOfWhichFunding?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBondSellOrderFulfilledEvent(): BondSellOrderFulfilledEvent {
  return {
    bondDid: "",
    order: undefined,
    chargedFees: [],
    returnedToAddress: [],
    newBondTokenBalance: ""
  };
}
export const BondSellOrderFulfilledEvent = {
  encode(message: BondSellOrderFulfilledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.order !== undefined) {
      SellOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.chargedFees) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.returnedToAddress) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.newBondTokenBalance !== "") {
      writer.uint32(42).string(message.newBondTokenBalance);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondSellOrderFulfilledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSellOrderFulfilledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.order = SellOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.chargedFees.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.returnedToAddress.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.newBondTokenBalance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondSellOrderFulfilledEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      order: isSet(object.order) ? SellOrder.fromJSON(object.order) : undefined,
      chargedFees: Array.isArray(object?.chargedFees) ? object.chargedFees.map((e: any) => Coin.fromJSON(e)) : [],
      returnedToAddress: Array.isArray(object?.returnedToAddress) ? object.returnedToAddress.map((e: any) => Coin.fromJSON(e)) : [],
      newBondTokenBalance: isSet(object.newBondTokenBalance) ? String(object.newBondTokenBalance) : ""
    };
  },
  toJSON(message: BondSellOrderFulfilledEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.order !== undefined && (obj.order = message.order ? SellOrder.toJSON(message.order) : undefined);
    if (message.chargedFees) {
      obj.chargedFees = message.chargedFees.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.chargedFees = [];
    }
    if (message.returnedToAddress) {
      obj.returnedToAddress = message.returnedToAddress.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.returnedToAddress = [];
    }
    message.newBondTokenBalance !== undefined && (obj.newBondTokenBalance = message.newBondTokenBalance);
    return obj;
  },
  fromPartial(object: Partial<BondSellOrderFulfilledEvent>): BondSellOrderFulfilledEvent {
    const message = createBaseBondSellOrderFulfilledEvent();
    message.bondDid = object.bondDid ?? "";
    message.order = object.order !== undefined && object.order !== null ? SellOrder.fromPartial(object.order) : undefined;
    message.chargedFees = object.chargedFees?.map(e => Coin.fromPartial(e)) || [];
    message.returnedToAddress = object.returnedToAddress?.map(e => Coin.fromPartial(e)) || [];
    message.newBondTokenBalance = object.newBondTokenBalance ?? "";
    return message;
  }
};
function createBaseBondSwapOrderFulfilledEvent(): BondSwapOrderFulfilledEvent {
  return {
    bondDid: "",
    order: undefined,
    chargedFee: undefined,
    returnedToAddress: [],
    tokensSwapped: undefined
  };
}
export const BondSwapOrderFulfilledEvent = {
  encode(message: BondSwapOrderFulfilledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.order !== undefined) {
      SwapOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    if (message.chargedFee !== undefined) {
      Coin.encode(message.chargedFee, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.returnedToAddress) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.tokensSwapped !== undefined) {
      Coin.encode(message.tokensSwapped, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondSwapOrderFulfilledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondSwapOrderFulfilledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.order = SwapOrder.decode(reader, reader.uint32());
          break;
        case 3:
          message.chargedFee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.returnedToAddress.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.tokensSwapped = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondSwapOrderFulfilledEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      order: isSet(object.order) ? SwapOrder.fromJSON(object.order) : undefined,
      chargedFee: isSet(object.chargedFee) ? Coin.fromJSON(object.chargedFee) : undefined,
      returnedToAddress: Array.isArray(object?.returnedToAddress) ? object.returnedToAddress.map((e: any) => Coin.fromJSON(e)) : [],
      tokensSwapped: isSet(object.tokensSwapped) ? Coin.fromJSON(object.tokensSwapped) : undefined
    };
  },
  toJSON(message: BondSwapOrderFulfilledEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.order !== undefined && (obj.order = message.order ? SwapOrder.toJSON(message.order) : undefined);
    message.chargedFee !== undefined && (obj.chargedFee = message.chargedFee ? Coin.toJSON(message.chargedFee) : undefined);
    if (message.returnedToAddress) {
      obj.returnedToAddress = message.returnedToAddress.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.returnedToAddress = [];
    }
    message.tokensSwapped !== undefined && (obj.tokensSwapped = message.tokensSwapped ? Coin.toJSON(message.tokensSwapped) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BondSwapOrderFulfilledEvent>): BondSwapOrderFulfilledEvent {
    const message = createBaseBondSwapOrderFulfilledEvent();
    message.bondDid = object.bondDid ?? "";
    message.order = object.order !== undefined && object.order !== null ? SwapOrder.fromPartial(object.order) : undefined;
    message.chargedFee = object.chargedFee !== undefined && object.chargedFee !== null ? Coin.fromPartial(object.chargedFee) : undefined;
    message.returnedToAddress = object.returnedToAddress?.map(e => Coin.fromPartial(e)) || [];
    message.tokensSwapped = object.tokensSwapped !== undefined && object.tokensSwapped !== null ? Coin.fromPartial(object.tokensSwapped) : undefined;
    return message;
  }
};
function createBaseBondBuyOrderCancelledEvent(): BondBuyOrderCancelledEvent {
  return {
    bondDid: "",
    order: undefined
  };
}
export const BondBuyOrderCancelledEvent = {
  encode(message: BondBuyOrderCancelledEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.order !== undefined) {
      BuyOrder.encode(message.order, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BondBuyOrderCancelledEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondBuyOrderCancelledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.order = BuyOrder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BondBuyOrderCancelledEvent {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      order: isSet(object.order) ? BuyOrder.fromJSON(object.order) : undefined
    };
  },
  toJSON(message: BondBuyOrderCancelledEvent): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.order !== undefined && (obj.order = message.order ? BuyOrder.toJSON(message.order) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BondBuyOrderCancelledEvent>): BondBuyOrderCancelledEvent {
    const message = createBaseBondBuyOrderCancelledEvent();
    message.bondDid = object.bondDid ?? "";
    message.order = object.order !== undefined && object.order !== null ? BuyOrder.fromPartial(object.order) : undefined;
    return message;
  }
};