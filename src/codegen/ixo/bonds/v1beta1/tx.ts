//@ts-nocheck
import { FunctionParam, FunctionParamSDKType } from "./bonds";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgCreateBond defines a message for creating a new bond. */
export interface MsgCreateBond {
  bondDid: string;
  token: string;
  name: string;
  description: string;
  functionType: string;
  functionParameters: FunctionParam[];
  creatorDid: string;
  controllerDid: string;
  oracleDid: string;
  reserveTokens: string[];
  txFeePercentage: string;
  exitFeePercentage: string;
  feeAddress: string;
  reserveWithdrawalAddress: string;
  maxSupply?: Coin;
  orderQuantityLimits: Coin[];
  sanityRate: string;
  sanityMarginPercentage: string;
  allowSells: boolean;
  allowReserveWithdrawals: boolean;
  alphaBond: boolean;
  batchBlocks: string;
  outcomePayment: string;
  creatorAddress: string;
}
/** MsgCreateBond defines a message for creating a new bond. */
export interface MsgCreateBondSDKType {
  bond_did: string;
  token: string;
  name: string;
  description: string;
  function_type: string;
  function_parameters: FunctionParamSDKType[];
  creator_did: string;
  controller_did: string;
  oracle_did: string;
  reserve_tokens: string[];
  tx_fee_percentage: string;
  exit_fee_percentage: string;
  fee_address: string;
  reserve_withdrawal_address: string;
  max_supply?: CoinSDKType;
  order_quantity_limits: CoinSDKType[];
  sanity_rate: string;
  sanity_margin_percentage: string;
  allow_sells: boolean;
  allow_reserve_withdrawals: boolean;
  alpha_bond: boolean;
  batch_blocks: string;
  outcome_payment: string;
  creator_address: string;
}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */
export interface MsgCreateBondResponse {}
/** MsgCreateBondResponse defines the Msg/CreateBond response type. */
export interface MsgCreateBondResponseSDKType {}
/** MsgEditBond defines a message for editing an existing bond. */
export interface MsgEditBond {
  bondDid: string;
  name: string;
  description: string;
  orderQuantityLimits: string;
  sanityRate: string;
  sanityMarginPercentage: string;
  editorDid: string;
  editorAddress: string;
}
/** MsgEditBond defines a message for editing an existing bond. */
export interface MsgEditBondSDKType {
  bond_did: string;
  name: string;
  description: string;
  order_quantity_limits: string;
  sanity_rate: string;
  sanity_margin_percentage: string;
  editor_did: string;
  editor_address: string;
}
/** MsgEditBondResponse defines the Msg/EditBond response type. */
export interface MsgEditBondResponse {}
/** MsgEditBondResponse defines the Msg/EditBond response type. */
export interface MsgEditBondResponseSDKType {}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */
export interface MsgSetNextAlpha {
  bondDid: string;
  alpha: string;
  delta: string;
  oracleDid: string;
  oracleAddress: string;
}
/** MsgSetNextAlpha defines a message for editing a bond's alpha parameter. */
export interface MsgSetNextAlphaSDKType {
  bond_did: string;
  alpha: string;
  delta: string;
  oracle_did: string;
  oracle_address: string;
}
export interface MsgSetNextAlphaResponse {}
export interface MsgSetNextAlphaResponseSDKType {}
/** MsgUpdateBondState defines a message for updating a bond's current state. */
export interface MsgUpdateBondState {
  bondDid: string;
  state: string;
  editorDid: string;
  editorAddress: string;
}
/** MsgUpdateBondState defines a message for updating a bond's current state. */
export interface MsgUpdateBondStateSDKType {
  bond_did: string;
  state: string;
  editor_did: string;
  editor_address: string;
}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */
export interface MsgUpdateBondStateResponse {}
/** MsgUpdateBondStateResponse defines the Msg/UpdateBondState response type. */
export interface MsgUpdateBondStateResponseSDKType {}
/** MsgBuy defines a message for buying from a bond. */
export interface MsgBuy {
  buyerDid: string;
  amount?: Coin;
  maxPrices: Coin[];
  bondDid: string;
  buyerAddress: string;
}
/** MsgBuy defines a message for buying from a bond. */
export interface MsgBuySDKType {
  buyer_did: string;
  amount?: CoinSDKType;
  max_prices: CoinSDKType[];
  bond_did: string;
  buyer_address: string;
}
/** MsgBuyResponse defines the Msg/Buy response type. */
export interface MsgBuyResponse {}
/** MsgBuyResponse defines the Msg/Buy response type. */
export interface MsgBuyResponseSDKType {}
/** MsgSell defines a message for selling from a bond. */
export interface MsgSell {
  sellerDid: string;
  amount?: Coin;
  bondDid: string;
  sellerAddress: string;
}
/** MsgSell defines a message for selling from a bond. */
export interface MsgSellSDKType {
  seller_did: string;
  amount?: CoinSDKType;
  bond_did: string;
  seller_address: string;
}
/** MsgSellResponse defines the Msg/Sell response type. */
export interface MsgSellResponse {}
/** MsgSellResponse defines the Msg/Sell response type. */
export interface MsgSellResponseSDKType {}
/**
 * MsgSwap defines a message for swapping from one reserve bond token to
 * another.
 */
export interface MsgSwap {
  swapperDid: string;
  bondDid: string;
  from?: Coin;
  toToken: string;
  swapperAddress: string;
}
/**
 * MsgSwap defines a message for swapping from one reserve bond token to
 * another.
 */
export interface MsgSwapSDKType {
  swapper_did: string;
  bond_did: string;
  from?: CoinSDKType;
  to_token: string;
  swapper_address: string;
}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {}
/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponseSDKType {}
/**
 * MsgMakeOutcomePayment defines a message for making an outcome payment to a
 * bond.
 */
export interface MsgMakeOutcomePayment {
  senderDid: string;
  amount: string;
  bondDid: string;
  senderAddress: string;
}
/**
 * MsgMakeOutcomePayment defines a message for making an outcome payment to a
 * bond.
 */
export interface MsgMakeOutcomePaymentSDKType {
  sender_did: string;
  amount: string;
  bond_did: string;
  sender_address: string;
}
/**
 * MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response
 * type.
 */
export interface MsgMakeOutcomePaymentResponse {}
/**
 * MsgMakeOutcomePaymentResponse defines the Msg/MakeOutcomePayment response
 * type.
 */
export interface MsgMakeOutcomePaymentResponseSDKType {}
/**
 * MsgWithdrawShare defines a message for withdrawing a share from a bond that
 * is in the SETTLE stage.
 */
export interface MsgWithdrawShare {
  recipientDid: string;
  bondDid: string;
  recipientAddress: string;
}
/**
 * MsgWithdrawShare defines a message for withdrawing a share from a bond that
 * is in the SETTLE stage.
 */
export interface MsgWithdrawShareSDKType {
  recipient_did: string;
  bond_did: string;
  recipient_address: string;
}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */
export interface MsgWithdrawShareResponse {}
/** MsgWithdrawShareResponse defines the Msg/WithdrawShare response type. */
export interface MsgWithdrawShareResponseSDKType {}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */
export interface MsgWithdrawReserve {
  withdrawerDid: string;
  amount: Coin[];
  bondDid: string;
  withdrawerAddress: string;
}
/** MsgWithdrawReserve defines a message for withdrawing reserve from a bond. */
export interface MsgWithdrawReserveSDKType {
  withdrawer_did: string;
  amount: CoinSDKType[];
  bond_did: string;
  withdrawer_address: string;
}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */
export interface MsgWithdrawReserveResponse {}
/** MsgWithdrawReserveResponse defines the Msg/WithdrawReserve response type. */
export interface MsgWithdrawReserveResponseSDKType {}
function createBaseMsgCreateBond(): MsgCreateBond {
  return {
    bondDid: "",
    token: "",
    name: "",
    description: "",
    functionType: "",
    functionParameters: [],
    creatorDid: "",
    controllerDid: "",
    oracleDid: "",
    reserveTokens: [],
    txFeePercentage: "",
    exitFeePercentage: "",
    feeAddress: "",
    reserveWithdrawalAddress: "",
    maxSupply: undefined,
    orderQuantityLimits: [],
    sanityRate: "",
    sanityMarginPercentage: "",
    allowSells: false,
    allowReserveWithdrawals: false,
    alphaBond: false,
    batchBlocks: "",
    outcomePayment: "",
    creatorAddress: ""
  };
}
export const MsgCreateBond = {
  encode(message: MsgCreateBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.functionType !== "") {
      writer.uint32(42).string(message.functionType);
    }
    for (const v of message.functionParameters) {
      FunctionParam.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.creatorDid !== "") {
      writer.uint32(58).string(message.creatorDid);
    }
    if (message.controllerDid !== "") {
      writer.uint32(66).string(message.controllerDid);
    }
    if (message.oracleDid !== "") {
      writer.uint32(74).string(message.oracleDid);
    }
    for (const v of message.reserveTokens) {
      writer.uint32(82).string(v!);
    }
    if (message.txFeePercentage !== "") {
      writer.uint32(90).string(message.txFeePercentage);
    }
    if (message.exitFeePercentage !== "") {
      writer.uint32(98).string(message.exitFeePercentage);
    }
    if (message.feeAddress !== "") {
      writer.uint32(106).string(message.feeAddress);
    }
    if (message.reserveWithdrawalAddress !== "") {
      writer.uint32(114).string(message.reserveWithdrawalAddress);
    }
    if (message.maxSupply !== undefined) {
      Coin.encode(message.maxSupply, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.orderQuantityLimits) {
      Coin.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    if (message.sanityRate !== "") {
      writer.uint32(138).string(message.sanityRate);
    }
    if (message.sanityMarginPercentage !== "") {
      writer.uint32(146).string(message.sanityMarginPercentage);
    }
    if (message.allowSells === true) {
      writer.uint32(152).bool(message.allowSells);
    }
    if (message.allowReserveWithdrawals === true) {
      writer.uint32(160).bool(message.allowReserveWithdrawals);
    }
    if (message.alphaBond === true) {
      writer.uint32(168).bool(message.alphaBond);
    }
    if (message.batchBlocks !== "") {
      writer.uint32(178).string(message.batchBlocks);
    }
    if (message.outcomePayment !== "") {
      writer.uint32(186).string(message.outcomePayment);
    }
    if (message.creatorAddress !== "") {
      writer.uint32(194).string(message.creatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBond();
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
          message.name = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.functionType = reader.string();
          break;
        case 6:
          message.functionParameters.push(FunctionParam.decode(reader, reader.uint32()));
          break;
        case 7:
          message.creatorDid = reader.string();
          break;
        case 8:
          message.controllerDid = reader.string();
          break;
        case 9:
          message.oracleDid = reader.string();
          break;
        case 10:
          message.reserveTokens.push(reader.string());
          break;
        case 11:
          message.txFeePercentage = reader.string();
          break;
        case 12:
          message.exitFeePercentage = reader.string();
          break;
        case 13:
          message.feeAddress = reader.string();
          break;
        case 14:
          message.reserveWithdrawalAddress = reader.string();
          break;
        case 15:
          message.maxSupply = Coin.decode(reader, reader.uint32());
          break;
        case 16:
          message.orderQuantityLimits.push(Coin.decode(reader, reader.uint32()));
          break;
        case 17:
          message.sanityRate = reader.string();
          break;
        case 18:
          message.sanityMarginPercentage = reader.string();
          break;
        case 19:
          message.allowSells = reader.bool();
          break;
        case 20:
          message.allowReserveWithdrawals = reader.bool();
          break;
        case 21:
          message.alphaBond = reader.bool();
          break;
        case 22:
          message.batchBlocks = reader.string();
          break;
        case 23:
          message.outcomePayment = reader.string();
          break;
        case 24:
          message.creatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBond {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      token: isSet(object.token) ? String(object.token) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      functionType: isSet(object.functionType) ? String(object.functionType) : "",
      functionParameters: Array.isArray(object?.functionParameters) ? object.functionParameters.map((e: any) => FunctionParam.fromJSON(e)) : [],
      creatorDid: isSet(object.creatorDid) ? String(object.creatorDid) : "",
      controllerDid: isSet(object.controllerDid) ? String(object.controllerDid) : "",
      oracleDid: isSet(object.oracleDid) ? String(object.oracleDid) : "",
      reserveTokens: Array.isArray(object?.reserveTokens) ? object.reserveTokens.map((e: any) => String(e)) : [],
      txFeePercentage: isSet(object.txFeePercentage) ? String(object.txFeePercentage) : "",
      exitFeePercentage: isSet(object.exitFeePercentage) ? String(object.exitFeePercentage) : "",
      feeAddress: isSet(object.feeAddress) ? String(object.feeAddress) : "",
      reserveWithdrawalAddress: isSet(object.reserveWithdrawalAddress) ? String(object.reserveWithdrawalAddress) : "",
      maxSupply: isSet(object.maxSupply) ? Coin.fromJSON(object.maxSupply) : undefined,
      orderQuantityLimits: Array.isArray(object?.orderQuantityLimits) ? object.orderQuantityLimits.map((e: any) => Coin.fromJSON(e)) : [],
      sanityRate: isSet(object.sanityRate) ? String(object.sanityRate) : "",
      sanityMarginPercentage: isSet(object.sanityMarginPercentage) ? String(object.sanityMarginPercentage) : "",
      allowSells: isSet(object.allowSells) ? Boolean(object.allowSells) : false,
      allowReserveWithdrawals: isSet(object.allowReserveWithdrawals) ? Boolean(object.allowReserveWithdrawals) : false,
      alphaBond: isSet(object.alphaBond) ? Boolean(object.alphaBond) : false,
      batchBlocks: isSet(object.batchBlocks) ? String(object.batchBlocks) : "",
      outcomePayment: isSet(object.outcomePayment) ? String(object.outcomePayment) : "",
      creatorAddress: isSet(object.creatorAddress) ? String(object.creatorAddress) : ""
    };
  },
  toJSON(message: MsgCreateBond): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.token !== undefined && (obj.token = message.token);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.functionType !== undefined && (obj.functionType = message.functionType);
    if (message.functionParameters) {
      obj.functionParameters = message.functionParameters.map(e => e ? FunctionParam.toJSON(e) : undefined);
    } else {
      obj.functionParameters = [];
    }
    message.creatorDid !== undefined && (obj.creatorDid = message.creatorDid);
    message.controllerDid !== undefined && (obj.controllerDid = message.controllerDid);
    message.oracleDid !== undefined && (obj.oracleDid = message.oracleDid);
    if (message.reserveTokens) {
      obj.reserveTokens = message.reserveTokens.map(e => e);
    } else {
      obj.reserveTokens = [];
    }
    message.txFeePercentage !== undefined && (obj.txFeePercentage = message.txFeePercentage);
    message.exitFeePercentage !== undefined && (obj.exitFeePercentage = message.exitFeePercentage);
    message.feeAddress !== undefined && (obj.feeAddress = message.feeAddress);
    message.reserveWithdrawalAddress !== undefined && (obj.reserveWithdrawalAddress = message.reserveWithdrawalAddress);
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply ? Coin.toJSON(message.maxSupply) : undefined);
    if (message.orderQuantityLimits) {
      obj.orderQuantityLimits = message.orderQuantityLimits.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.orderQuantityLimits = [];
    }
    message.sanityRate !== undefined && (obj.sanityRate = message.sanityRate);
    message.sanityMarginPercentage !== undefined && (obj.sanityMarginPercentage = message.sanityMarginPercentage);
    message.allowSells !== undefined && (obj.allowSells = message.allowSells);
    message.allowReserveWithdrawals !== undefined && (obj.allowReserveWithdrawals = message.allowReserveWithdrawals);
    message.alphaBond !== undefined && (obj.alphaBond = message.alphaBond);
    message.batchBlocks !== undefined && (obj.batchBlocks = message.batchBlocks);
    message.outcomePayment !== undefined && (obj.outcomePayment = message.outcomePayment);
    message.creatorAddress !== undefined && (obj.creatorAddress = message.creatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateBond>): MsgCreateBond {
    const message = createBaseMsgCreateBond();
    message.bondDid = object.bondDid ?? "";
    message.token = object.token ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.functionType = object.functionType ?? "";
    message.functionParameters = object.functionParameters?.map(e => FunctionParam.fromPartial(e)) || [];
    message.creatorDid = object.creatorDid ?? "";
    message.controllerDid = object.controllerDid ?? "";
    message.oracleDid = object.oracleDid ?? "";
    message.reserveTokens = object.reserveTokens?.map(e => e) || [];
    message.txFeePercentage = object.txFeePercentage ?? "";
    message.exitFeePercentage = object.exitFeePercentage ?? "";
    message.feeAddress = object.feeAddress ?? "";
    message.reserveWithdrawalAddress = object.reserveWithdrawalAddress ?? "";
    message.maxSupply = object.maxSupply !== undefined && object.maxSupply !== null ? Coin.fromPartial(object.maxSupply) : undefined;
    message.orderQuantityLimits = object.orderQuantityLimits?.map(e => Coin.fromPartial(e)) || [];
    message.sanityRate = object.sanityRate ?? "";
    message.sanityMarginPercentage = object.sanityMarginPercentage ?? "";
    message.allowSells = object.allowSells ?? false;
    message.allowReserveWithdrawals = object.allowReserveWithdrawals ?? false;
    message.alphaBond = object.alphaBond ?? false;
    message.batchBlocks = object.batchBlocks ?? "";
    message.outcomePayment = object.outcomePayment ?? "";
    message.creatorAddress = object.creatorAddress ?? "";
    return message;
  }
};
function createBaseMsgCreateBondResponse(): MsgCreateBondResponse {
  return {};
}
export const MsgCreateBondResponse = {
  encode(_: MsgCreateBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBondResponse();
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
  fromJSON(_: any): MsgCreateBondResponse {
    return {};
  },
  toJSON(_: MsgCreateBondResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateBondResponse>): MsgCreateBondResponse {
    const message = createBaseMsgCreateBondResponse();
    return message;
  }
};
function createBaseMsgEditBond(): MsgEditBond {
  return {
    bondDid: "",
    name: "",
    description: "",
    orderQuantityLimits: "",
    sanityRate: "",
    sanityMarginPercentage: "",
    editorDid: "",
    editorAddress: ""
  };
}
export const MsgEditBond = {
  encode(message: MsgEditBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.orderQuantityLimits !== "") {
      writer.uint32(34).string(message.orderQuantityLimits);
    }
    if (message.sanityRate !== "") {
      writer.uint32(42).string(message.sanityRate);
    }
    if (message.sanityMarginPercentage !== "") {
      writer.uint32(50).string(message.sanityMarginPercentage);
    }
    if (message.editorDid !== "") {
      writer.uint32(58).string(message.editorDid);
    }
    if (message.editorAddress !== "") {
      writer.uint32(66).string(message.editorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.orderQuantityLimits = reader.string();
          break;
        case 5:
          message.sanityRate = reader.string();
          break;
        case 6:
          message.sanityMarginPercentage = reader.string();
          break;
        case 7:
          message.editorDid = reader.string();
          break;
        case 8:
          message.editorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditBond {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      orderQuantityLimits: isSet(object.orderQuantityLimits) ? String(object.orderQuantityLimits) : "",
      sanityRate: isSet(object.sanityRate) ? String(object.sanityRate) : "",
      sanityMarginPercentage: isSet(object.sanityMarginPercentage) ? String(object.sanityMarginPercentage) : "",
      editorDid: isSet(object.editorDid) ? String(object.editorDid) : "",
      editorAddress: isSet(object.editorAddress) ? String(object.editorAddress) : ""
    };
  },
  toJSON(message: MsgEditBond): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.orderQuantityLimits !== undefined && (obj.orderQuantityLimits = message.orderQuantityLimits);
    message.sanityRate !== undefined && (obj.sanityRate = message.sanityRate);
    message.sanityMarginPercentage !== undefined && (obj.sanityMarginPercentage = message.sanityMarginPercentage);
    message.editorDid !== undefined && (obj.editorDid = message.editorDid);
    message.editorAddress !== undefined && (obj.editorAddress = message.editorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgEditBond>): MsgEditBond {
    const message = createBaseMsgEditBond();
    message.bondDid = object.bondDid ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.orderQuantityLimits = object.orderQuantityLimits ?? "";
    message.sanityRate = object.sanityRate ?? "";
    message.sanityMarginPercentage = object.sanityMarginPercentage ?? "";
    message.editorDid = object.editorDid ?? "";
    message.editorAddress = object.editorAddress ?? "";
    return message;
  }
};
function createBaseMsgEditBondResponse(): MsgEditBondResponse {
  return {};
}
export const MsgEditBondResponse = {
  encode(_: MsgEditBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditBondResponse();
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
  fromJSON(_: any): MsgEditBondResponse {
    return {};
  },
  toJSON(_: MsgEditBondResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgEditBondResponse>): MsgEditBondResponse {
    const message = createBaseMsgEditBondResponse();
    return message;
  }
};
function createBaseMsgSetNextAlpha(): MsgSetNextAlpha {
  return {
    bondDid: "",
    alpha: "",
    delta: undefined,
    oracleDid: "",
    oracleAddress: ""
  };
}
export const MsgSetNextAlpha = {
  encode(message: MsgSetNextAlpha, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.alpha !== "") {
      writer.uint32(18).string(message.alpha);
    }
    if (message.delta !== undefined) {
      writer.uint32(26).string(message.delta);
    }
    if (message.oracleDid !== "") {
      writer.uint32(34).string(message.oracleDid);
    }
    if (message.oracleAddress !== "") {
      writer.uint32(42).string(message.oracleAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlpha {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextAlpha();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.alpha = reader.string();
          break;
        case 3:
          message.delta = reader.string();
          break;
        case 4:
          message.oracleDid = reader.string();
          break;
        case 5:
          message.oracleAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetNextAlpha {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      alpha: isSet(object.alpha) ? String(object.alpha) : "",
      delta: isSet(object.delta) ? String(object.delta) : undefined,
      oracleDid: isSet(object.oracleDid) ? String(object.oracleDid) : "",
      oracleAddress: isSet(object.oracleAddress) ? String(object.oracleAddress) : ""
    };
  },
  toJSON(message: MsgSetNextAlpha): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.delta !== undefined && (obj.delta = message.delta);
    message.oracleDid !== undefined && (obj.oracleDid = message.oracleDid);
    message.oracleAddress !== undefined && (obj.oracleAddress = message.oracleAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSetNextAlpha>): MsgSetNextAlpha {
    const message = createBaseMsgSetNextAlpha();
    message.bondDid = object.bondDid ?? "";
    message.alpha = object.alpha ?? "";
    message.delta = object.delta ?? undefined;
    message.oracleDid = object.oracleDid ?? "";
    message.oracleAddress = object.oracleAddress ?? "";
    return message;
  }
};
function createBaseMsgSetNextAlphaResponse(): MsgSetNextAlphaResponse {
  return {};
}
export const MsgSetNextAlphaResponse = {
  encode(_: MsgSetNextAlphaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetNextAlphaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetNextAlphaResponse();
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
  fromJSON(_: any): MsgSetNextAlphaResponse {
    return {};
  },
  toJSON(_: MsgSetNextAlphaResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetNextAlphaResponse>): MsgSetNextAlphaResponse {
    const message = createBaseMsgSetNextAlphaResponse();
    return message;
  }
};
function createBaseMsgUpdateBondState(): MsgUpdateBondState {
  return {
    bondDid: "",
    state: "",
    editorDid: "",
    editorAddress: ""
  };
}
export const MsgUpdateBondState = {
  encode(message: MsgUpdateBondState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bondDid !== "") {
      writer.uint32(10).string(message.bondDid);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.editorDid !== "") {
      writer.uint32(26).string(message.editorDid);
    }
    if (message.editorAddress !== "") {
      writer.uint32(34).string(message.editorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBondState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bondDid = reader.string();
          break;
        case 2:
          message.state = reader.string();
          break;
        case 3:
          message.editorDid = reader.string();
          break;
        case 4:
          message.editorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateBondState {
    return {
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      state: isSet(object.state) ? String(object.state) : "",
      editorDid: isSet(object.editorDid) ? String(object.editorDid) : "",
      editorAddress: isSet(object.editorAddress) ? String(object.editorAddress) : ""
    };
  },
  toJSON(message: MsgUpdateBondState): unknown {
    const obj: any = {};
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.state !== undefined && (obj.state = message.state);
    message.editorDid !== undefined && (obj.editorDid = message.editorDid);
    message.editorAddress !== undefined && (obj.editorAddress = message.editorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateBondState>): MsgUpdateBondState {
    const message = createBaseMsgUpdateBondState();
    message.bondDid = object.bondDid ?? "";
    message.state = object.state ?? "";
    message.editorDid = object.editorDid ?? "";
    message.editorAddress = object.editorAddress ?? "";
    return message;
  }
};
function createBaseMsgUpdateBondStateResponse(): MsgUpdateBondStateResponse {
  return {};
}
export const MsgUpdateBondStateResponse = {
  encode(_: MsgUpdateBondStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBondStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBondStateResponse();
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
  fromJSON(_: any): MsgUpdateBondStateResponse {
    return {};
  },
  toJSON(_: MsgUpdateBondStateResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateBondStateResponse>): MsgUpdateBondStateResponse {
    const message = createBaseMsgUpdateBondStateResponse();
    return message;
  }
};
function createBaseMsgBuy(): MsgBuy {
  return {
    buyerDid: "",
    amount: undefined,
    maxPrices: [],
    bondDid: "",
    buyerAddress: ""
  };
}
export const MsgBuy = {
  encode(message: MsgBuy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyerDid !== "") {
      writer.uint32(10).string(message.buyerDid);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.maxPrices) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(34).string(message.bondDid);
    }
    if (message.buyerAddress !== "") {
      writer.uint32(42).string(message.buyerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buyerDid = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxPrices.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.bondDid = reader.string();
          break;
        case 5:
          message.buyerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBuy {
    return {
      buyerDid: isSet(object.buyerDid) ? String(object.buyerDid) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      maxPrices: Array.isArray(object?.maxPrices) ? object.maxPrices.map((e: any) => Coin.fromJSON(e)) : [],
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      buyerAddress: isSet(object.buyerAddress) ? String(object.buyerAddress) : ""
    };
  },
  toJSON(message: MsgBuy): unknown {
    const obj: any = {};
    message.buyerDid !== undefined && (obj.buyerDid = message.buyerDid);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    if (message.maxPrices) {
      obj.maxPrices = message.maxPrices.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.maxPrices = [];
    }
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.buyerAddress !== undefined && (obj.buyerAddress = message.buyerAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgBuy>): MsgBuy {
    const message = createBaseMsgBuy();
    message.buyerDid = object.buyerDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.maxPrices = object.maxPrices?.map(e => Coin.fromPartial(e)) || [];
    message.bondDid = object.bondDid ?? "";
    message.buyerAddress = object.buyerAddress ?? "";
    return message;
  }
};
function createBaseMsgBuyResponse(): MsgBuyResponse {
  return {};
}
export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyResponse();
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
  fromJSON(_: any): MsgBuyResponse {
    return {};
  },
  toJSON(_: MsgBuyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBuyResponse>): MsgBuyResponse {
    const message = createBaseMsgBuyResponse();
    return message;
  }
};
function createBaseMsgSell(): MsgSell {
  return {
    sellerDid: "",
    amount: undefined,
    bondDid: "",
    sellerAddress: ""
  };
}
export const MsgSell = {
  encode(message: MsgSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellerDid !== "") {
      writer.uint32(10).string(message.sellerDid);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }
    if (message.sellerAddress !== "") {
      writer.uint32(34).string(message.sellerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellerDid = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.bondDid = reader.string();
          break;
        case 4:
          message.sellerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSell {
    return {
      sellerDid: isSet(object.sellerDid) ? String(object.sellerDid) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      sellerAddress: isSet(object.sellerAddress) ? String(object.sellerAddress) : ""
    };
  },
  toJSON(message: MsgSell): unknown {
    const obj: any = {};
    message.sellerDid !== undefined && (obj.sellerDid = message.sellerDid);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.sellerAddress !== undefined && (obj.sellerAddress = message.sellerAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSell>): MsgSell {
    const message = createBaseMsgSell();
    message.sellerDid = object.sellerDid ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.bondDid = object.bondDid ?? "";
    message.sellerAddress = object.sellerAddress ?? "";
    return message;
  }
};
function createBaseMsgSellResponse(): MsgSellResponse {
  return {};
}
export const MsgSellResponse = {
  encode(_: MsgSellResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellResponse();
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
  fromJSON(_: any): MsgSellResponse {
    return {};
  },
  toJSON(_: MsgSellResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSellResponse>): MsgSellResponse {
    const message = createBaseMsgSellResponse();
    return message;
  }
};
function createBaseMsgSwap(): MsgSwap {
  return {
    swapperDid: "",
    bondDid: "",
    from: undefined,
    toToken: "",
    swapperAddress: ""
  };
}
export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapperDid !== "") {
      writer.uint32(10).string(message.swapperDid);
    }
    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }
    if (message.from !== undefined) {
      Coin.encode(message.from, writer.uint32(26).fork()).ldelim();
    }
    if (message.toToken !== "") {
      writer.uint32(34).string(message.toToken);
    }
    if (message.swapperAddress !== "") {
      writer.uint32(42).string(message.swapperAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swapperDid = reader.string();
          break;
        case 2:
          message.bondDid = reader.string();
          break;
        case 3:
          message.from = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.toToken = reader.string();
          break;
        case 5:
          message.swapperAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwap {
    return {
      swapperDid: isSet(object.swapperDid) ? String(object.swapperDid) : "",
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      from: isSet(object.from) ? Coin.fromJSON(object.from) : undefined,
      toToken: isSet(object.toToken) ? String(object.toToken) : "",
      swapperAddress: isSet(object.swapperAddress) ? String(object.swapperAddress) : ""
    };
  },
  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.swapperDid !== undefined && (obj.swapperDid = message.swapperDid);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.from !== undefined && (obj.from = message.from ? Coin.toJSON(message.from) : undefined);
    message.toToken !== undefined && (obj.toToken = message.toToken);
    message.swapperAddress !== undefined && (obj.swapperAddress = message.swapperAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.swapperDid = object.swapperDid ?? "";
    message.bondDid = object.bondDid ?? "";
    message.from = object.from !== undefined && object.from !== null ? Coin.fromPartial(object.from) : undefined;
    message.toToken = object.toToken ?? "";
    message.swapperAddress = object.swapperAddress ?? "";
    return message;
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}
export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
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
  fromJSON(_: any): MsgSwapResponse {
    return {};
  },
  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }
};
function createBaseMsgMakeOutcomePayment(): MsgMakeOutcomePayment {
  return {
    senderDid: "",
    amount: "",
    bondDid: "",
    senderAddress: ""
  };
}
export const MsgMakeOutcomePayment = {
  encode(message: MsgMakeOutcomePayment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDid !== "") {
      writer.uint32(10).string(message.senderDid);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }
    if (message.senderAddress !== "") {
      writer.uint32(34).string(message.senderAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePayment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOutcomePayment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderDid = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.bondDid = reader.string();
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
  fromJSON(object: any): MsgMakeOutcomePayment {
    return {
      senderDid: isSet(object.senderDid) ? String(object.senderDid) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : ""
    };
  },
  toJSON(message: MsgMakeOutcomePayment): unknown {
    const obj: any = {};
    message.senderDid !== undefined && (obj.senderDid = message.senderDid);
    message.amount !== undefined && (obj.amount = message.amount);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgMakeOutcomePayment>): MsgMakeOutcomePayment {
    const message = createBaseMsgMakeOutcomePayment();
    message.senderDid = object.senderDid ?? "";
    message.amount = object.amount ?? "";
    message.bondDid = object.bondDid ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  }
};
function createBaseMsgMakeOutcomePaymentResponse(): MsgMakeOutcomePaymentResponse {
  return {};
}
export const MsgMakeOutcomePaymentResponse = {
  encode(_: MsgMakeOutcomePaymentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMakeOutcomePaymentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMakeOutcomePaymentResponse();
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
  fromJSON(_: any): MsgMakeOutcomePaymentResponse {
    return {};
  },
  toJSON(_: MsgMakeOutcomePaymentResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgMakeOutcomePaymentResponse>): MsgMakeOutcomePaymentResponse {
    const message = createBaseMsgMakeOutcomePaymentResponse();
    return message;
  }
};
function createBaseMsgWithdrawShare(): MsgWithdrawShare {
  return {
    recipientDid: "",
    bondDid: "",
    recipientAddress: ""
  };
}
export const MsgWithdrawShare = {
  encode(message: MsgWithdrawShare, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipientDid !== "") {
      writer.uint32(10).string(message.recipientDid);
    }
    if (message.bondDid !== "") {
      writer.uint32(18).string(message.bondDid);
    }
    if (message.recipientAddress !== "") {
      writer.uint32(26).string(message.recipientAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipientDid = reader.string();
          break;
        case 2:
          message.bondDid = reader.string();
          break;
        case 3:
          message.recipientAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawShare {
    return {
      recipientDid: isSet(object.recipientDid) ? String(object.recipientDid) : "",
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      recipientAddress: isSet(object.recipientAddress) ? String(object.recipientAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawShare): unknown {
    const obj: any = {};
    message.recipientDid !== undefined && (obj.recipientDid = message.recipientDid);
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.recipientAddress !== undefined && (obj.recipientAddress = message.recipientAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawShare>): MsgWithdrawShare {
    const message = createBaseMsgWithdrawShare();
    message.recipientDid = object.recipientDid ?? "";
    message.bondDid = object.bondDid ?? "";
    message.recipientAddress = object.recipientAddress ?? "";
    return message;
  }
};
function createBaseMsgWithdrawShareResponse(): MsgWithdrawShareResponse {
  return {};
}
export const MsgWithdrawShareResponse = {
  encode(_: MsgWithdrawShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawShareResponse();
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
  fromJSON(_: any): MsgWithdrawShareResponse {
    return {};
  },
  toJSON(_: MsgWithdrawShareResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawShareResponse>): MsgWithdrawShareResponse {
    const message = createBaseMsgWithdrawShareResponse();
    return message;
  }
};
function createBaseMsgWithdrawReserve(): MsgWithdrawReserve {
  return {
    withdrawerDid: "",
    amount: [],
    bondDid: "",
    withdrawerAddress: ""
  };
}
export const MsgWithdrawReserve = {
  encode(message: MsgWithdrawReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.withdrawerDid !== "") {
      writer.uint32(10).string(message.withdrawerDid);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.bondDid !== "") {
      writer.uint32(26).string(message.bondDid);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(34).string(message.withdrawerAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawerDid = reader.string();
          break;
        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.bondDid = reader.string();
          break;
        case 4:
          message.withdrawerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawReserve {
    return {
      withdrawerDid: isSet(object.withdrawerDid) ? String(object.withdrawerDid) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      bondDid: isSet(object.bondDid) ? String(object.bondDid) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawReserve): unknown {
    const obj: any = {};
    message.withdrawerDid !== undefined && (obj.withdrawerDid = message.withdrawerDid);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.bondDid !== undefined && (obj.bondDid = message.bondDid);
    message.withdrawerAddress !== undefined && (obj.withdrawerAddress = message.withdrawerAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawReserve>): MsgWithdrawReserve {
    const message = createBaseMsgWithdrawReserve();
    message.withdrawerDid = object.withdrawerDid ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.bondDid = object.bondDid ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  }
};
function createBaseMsgWithdrawReserveResponse(): MsgWithdrawReserveResponse {
  return {};
}
export const MsgWithdrawReserveResponse = {
  encode(_: MsgWithdrawReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReserveResponse();
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
  fromJSON(_: any): MsgWithdrawReserveResponse {
    return {};
  },
  toJSON(_: MsgWithdrawReserveResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawReserveResponse>): MsgWithdrawReserveResponse {
    const message = createBaseMsgWithdrawReserveResponse();
    return message;
  }
};