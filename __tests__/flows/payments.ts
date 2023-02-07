import { testMsg } from "../helpers/common";
import * as Payments from "../modules/Payments";

export const paymentsBasic = () =>
  describe("Testing the Payments module", () => {
    testMsg("/ixo.payments.v1.MsgCreatePaymentTemplate", () =>
      Payments.CreatePaymentTemplate()
    );
    testMsg("/ixo.payments.v1.MsgCreatePaymentContract", () =>
      Payments.CreatePaymentContract()
    );
    testMsg("/ixo.payments.v1.MsgSetPaymentContractAuthorisation", () =>
      Payments.SetPaymentContractAuthorization()
    );
    testMsg("/ixo.payments.v1.MsgCreateSubscription", () =>
      Payments.CreateSubscription()
    );
    testMsg("/ixo.payments.v1.MsgGrantDiscount", () =>
      Payments.GrantDiscount()
    );
    testMsg("/ixo.payments.v1.MsgRevokeDiscount", () =>
      Payments.RevokeDiscount()
    );
    testMsg("/ixo.payments.v1.MsgEffectPayment", () =>
      Payments.EffectPayment()
    );
  });
