import { Rpc } from "../../../helpers";
import { MsgCreateBond, MsgCreateBondResponse, MsgEditBond, MsgEditBondResponse, MsgSetNextAlpha, MsgSetNextAlphaResponse, MsgUpdateBondState, MsgUpdateBondStateResponse, MsgBuy, MsgBuyResponse, MsgSell, MsgSellResponse, MsgSwap, MsgSwapResponse, MsgMakeOutcomePayment, MsgMakeOutcomePaymentResponse, MsgWithdrawShare, MsgWithdrawShareResponse, MsgWithdrawReserve, MsgWithdrawReserveResponse } from "./tx";
/** Msg defines the bonds Msg service. */
export interface Msg {
    /** CreateBond defines a method for creating a bond. */
    createBond(request: MsgCreateBond): Promise<MsgCreateBondResponse>;
    /** EditBond defines a method for editing a bond. */
    editBond(request: MsgEditBond): Promise<MsgEditBondResponse>;
    /** SetNextAlpha defines a method for editing a bond's alpha parameter. */
    setNextAlpha(request: MsgSetNextAlpha): Promise<MsgSetNextAlphaResponse>;
    /** UpdateBondState defines a method for updating a bond's current state. */
    updateBondState(request: MsgUpdateBondState): Promise<MsgUpdateBondStateResponse>;
    /** Buy defines a method for buying from a bond. */
    buy(request: MsgBuy): Promise<MsgBuyResponse>;
    /** Sell defines a method for selling from a bond. */
    sell(request: MsgSell): Promise<MsgSellResponse>;
    /** Swap defines a method for swapping from one reserve bond token to another. */
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    /**
     * MakeOutcomePayment defines a method for making an outcome payment to a
     * bond.
     */
    makeOutcomePayment(request: MsgMakeOutcomePayment): Promise<MsgMakeOutcomePaymentResponse>;
    /**
     * WithdrawShare defines a method for withdrawing a share from a bond that is
     * in the SETTLE stage.
     */
    withdrawShare(request: MsgWithdrawShare): Promise<MsgWithdrawShareResponse>;
    /** WithdrawReserve defines a method for withdrawing reserve from a bond. */
    withdrawReserve(request: MsgWithdrawReserve): Promise<MsgWithdrawReserveResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBond(request: MsgCreateBond): Promise<MsgCreateBondResponse>;
    editBond(request: MsgEditBond): Promise<MsgEditBondResponse>;
    setNextAlpha(request: MsgSetNextAlpha): Promise<MsgSetNextAlphaResponse>;
    updateBondState(request: MsgUpdateBondState): Promise<MsgUpdateBondStateResponse>;
    buy(request: MsgBuy): Promise<MsgBuyResponse>;
    sell(request: MsgSell): Promise<MsgSellResponse>;
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    makeOutcomePayment(request: MsgMakeOutcomePayment): Promise<MsgMakeOutcomePaymentResponse>;
    withdrawShare(request: MsgWithdrawShare): Promise<MsgWithdrawShareResponse>;
    withdrawReserve(request: MsgWithdrawReserve): Promise<MsgWithdrawReserveResponse>;
}
