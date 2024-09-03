//@ts-nocheck
import * as _222 from "./abci/types";
import * as _223 from "./crypto/keys";
import * as _224 from "./crypto/proof";
import * as _225 from "./libs/bits/types";
import * as _226 from "./p2p/types";
import * as _227 from "./types/block";
import * as _228 from "./types/evidence";
import * as _229 from "./types/params";
import * as _230 from "./types/types";
import * as _231 from "./types/validator";
import * as _232 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._222
  };
  export const crypto = {
    ..._223,
    ..._224
  };
  export namespace libs {
    export const bits = {
      ..._225
    };
  }
  export const p2p = {
    ..._226
  };
  export const types = {
    ..._227,
    ..._228,
    ..._229,
    ..._230,
    ..._231
  };
  export const version = {
    ..._232
  };
}