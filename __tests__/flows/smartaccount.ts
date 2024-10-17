import { testMsg } from "../helpers/common";
import * as Smartaccount from "../modules/Smartaccount";

export const smartaccountBasic = () =>
  describe("Testing the cosmos bank module", () => {
    testMsg("/ixo.smartaccount.v1beta1.MsgAddAuthenticator", async () =>
      Smartaccount.MsgAddAuthenticator()
    );
    testMsg("/ixo.smartaccount.v1beta1.MsgSendWithAuthenticator", async () =>
      Smartaccount.MsgSendWithAuthenticator()
    );
    testMsg("/ixo.smartaccount.v1beta1.MsgRemoveAuthenticator", async () =>
      Smartaccount.MsgRemoveAuthenticator()
    );
  });
