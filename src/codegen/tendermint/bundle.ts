//@ts-nocheck
import * as _240 from "./abci/types";
import * as _241 from "./crypto/keys";
import * as _242 from "./crypto/proof";
import * as _243 from "./libs/bits/types";
import * as _244 from "./p2p/types";
import * as _245 from "./types/block";
import * as _246 from "./types/evidence";
import * as _247 from "./types/params";
import * as _248 from "./types/types";
import * as _249 from "./types/validator";
import * as _250 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._240
  };
  export const crypto = {
    ..._241,
    ..._242
  };
  export namespace libs {
    export const bits = {
      ..._243
    };
  }
  export const p2p = {
    ..._244
  };
  export const types = {
    ..._245,
    ..._246,
    ..._247,
    ..._248,
    ..._249
  };
  export const version = {
    ..._250
  };
}