import { testMsg } from "../../helpers/common";
import * as Entity from "../Entity";
import { setAndLedgerUser } from "../helpers";
import { dids } from "../constants";

// helper to add edKeys to the entity
export const didOracleFlow = () =>
  describe("Flow to add edKeys to DidOracle (dao/protocol/oracle)", () => {
    setAndLedgerUser(
      process.env.ROOT_EMERGING!,
      process.env.ROOT_ED_DID_ORACLE!
    );

    // =============================== START
    let oracleDid = dids.didOracle;
    testMsg("/ixo.iid.v1beta1.MsgAddVerification", () =>
      Entity.AddEdKeysVerification(oracleDid)
    );
    // =============================== END
  });
