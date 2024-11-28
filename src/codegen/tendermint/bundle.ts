//@ts-nocheck
import * as _242 from "./abci/types";
import * as _243 from "./crypto/keys";
import * as _244 from "./crypto/proof";
import * as _245 from "./libs/bits/types";
import * as _246 from "./p2p/types";
import * as _247 from "./types/block";
import * as _248 from "./types/evidence";
import * as _249 from "./types/params";
import * as _250 from "./types/types";
import * as _251 from "./types/validator";
import * as _252 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._242
  };
  export const crypto = {
    ..._243,
    ..._244
  };
  export namespace libs {
    export const bits = {
      ..._245
    };
  }
  export const p2p = {
    ..._246
  };
  export const types = {
    ..._247,
    ..._248,
    ..._249,
    ..._250,
    ..._251
  };
  export const version = {
    ..._252
  };
}