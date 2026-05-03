//@ts-nocheck
import * as _247 from "./abci/types";
import * as _248 from "./crypto/keys";
import * as _249 from "./crypto/proof";
import * as _250 from "./libs/bits/types";
import * as _251 from "./p2p/types";
import * as _252 from "./types/block";
import * as _253 from "./types/evidence";
import * as _254 from "./types/params";
import * as _255 from "./types/types";
import * as _256 from "./types/validator";
import * as _257 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._247
  };
  export const crypto = {
    ..._248,
    ..._249
  };
  export namespace libs {
    export const bits = {
      ..._250
    };
  }
  export const p2p = {
    ..._251
  };
  export const types = {
    ..._252,
    ..._253,
    ..._254,
    ..._255,
    ..._256
  };
  export const version = {
    ..._257
  };
}