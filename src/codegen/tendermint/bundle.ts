//@ts-nocheck
import * as _227 from "./abci/types";
import * as _228 from "./crypto/keys";
import * as _229 from "./crypto/proof";
import * as _230 from "./libs/bits/types";
import * as _231 from "./p2p/types";
import * as _232 from "./types/block";
import * as _233 from "./types/evidence";
import * as _234 from "./types/params";
import * as _235 from "./types/types";
import * as _236 from "./types/validator";
import * as _237 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._227
  };
  export const crypto = {
    ..._228,
    ..._229
  };
  export namespace libs {
    export const bits = {
      ..._230
    };
  }
  export const p2p = {
    ..._231
  };
  export const types = {
    ..._232,
    ..._233,
    ..._234,
    ..._235,
    ..._236
  };
  export const version = {
    ..._237
  };
}