import { generateNewWallet, testMsg } from "../helpers/common";
import { WalletUsers } from "../helpers/constants";
import * as Ibc from "../modules/Ibc";

export const ibcBasic = () =>
  describe("Testing the ibc transfer module", () => {
    // ibc trasnfer can only be tested on main net, thus need a main net user mnemonic with funds to test the ibc transfer
    beforeAll(() =>
      generateNewWallet(WalletUsers.tester, process.env.IBC_FROM_MNEMONIC)
    );
    testMsg("/ibc.applications.transfer.v1.MsgTransfer", () =>
      Ibc.IbcTransferTrx(process.env.IBC_TO_ADDRESS!)
    );
  });
