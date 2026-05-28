//@ts-nocheck
import * as _192 from "./bonds/v1beta1/bonds";
import * as _193 from "./bonds/v1beta1/event";
import * as _194 from "./bonds/v1beta1/genesis";
import * as _195 from "./bonds/v1beta1/query";
import * as _196 from "./bonds/v1beta1/tx";
import * as _197 from "./claims/v1beta1/authz";
import * as _198 from "./claims/v1beta1/claims";
import * as _199 from "./claims/v1beta1/event";
import * as _200 from "./claims/v1beta1/genesis";
import * as _201 from "./claims/v1beta1/query";
import * as _202 from "./claims/v1beta1/tx";
import * as _203 from "./entity/v1beta1/entity";
import * as _204 from "./entity/v1beta1/event";
import * as _205 from "./entity/v1beta1/genesis";
import * as _206 from "./entity/v1beta1/proposal";
import * as _207 from "./entity/v1beta1/query";
import * as _208 from "./entity/v1beta1/tx";
import * as _209 from "./epochs/v1beta1/epoch";
import * as _210 from "./epochs/v1beta1/event";
import * as _211 from "./epochs/v1beta1/genesis";
import * as _212 from "./epochs/v1beta1/query";
import * as _213 from "./iid/v1beta1/event";
import * as _214 from "./iid/v1beta1/genesis";
import * as _215 from "./iid/v1beta1/iid";
import * as _216 from "./iid/v1beta1/query";
import * as _217 from "./iid/v1beta1/tx";
import * as _218 from "./iid/v1beta1/types";
import * as _219 from "./liquidstake/v1beta1/event";
import * as _220 from "./liquidstake/v1beta1/genesis";
import * as _221 from "./liquidstake/v1beta1/liquidstake";
import * as _222 from "./liquidstake/v1beta1/query";
import * as _223 from "./liquidstake/v1beta1/tx";
import * as _224 from "./mint/v1beta1/event";
import * as _225 from "./mint/v1beta1/genesis";
import * as _226 from "./mint/v1beta1/mint";
import * as _227 from "./mint/v1beta1/query";
import * as _228 from "./names/v1beta1/event";
import * as _229 from "./names/v1beta1/genesis";
import * as _230 from "./names/v1beta1/names";
import * as _231 from "./names/v1beta1/query";
import * as _232 from "./names/v1beta1/tx";
import * as _233 from "./smartaccount/crypto/crypto";
import * as _234 from "./smartaccount/v1beta1/event";
import * as _235 from "./smartaccount/v1beta1/genesis";
import * as _236 from "./smartaccount/v1beta1/models";
import * as _237 from "./smartaccount/v1beta1/params";
import * as _238 from "./smartaccount/v1beta1/query";
import * as _239 from "./smartaccount/v1beta1/tx";
import * as _240 from "./token/v1beta1/authz";
import * as _241 from "./token/v1beta1/event";
import * as _242 from "./token/v1beta1/genesis";
import * as _243 from "./token/v1beta1/proposal";
import * as _244 from "./token/v1beta1/query";
import * as _245 from "./token/v1beta1/token";
import * as _246 from "./token/v1beta1/tx";
import * as _317 from "./bonds/v1beta1/query.rpc.Query";
import * as _318 from "./claims/v1beta1/query.rpc.Query";
import * as _319 from "./entity/v1beta1/query.rpc.Query";
import * as _320 from "./epochs/v1beta1/query.rpc.Query";
import * as _321 from "./iid/v1beta1/query.rpc.Query";
import * as _322 from "./liquidstake/v1beta1/query.rpc.Query";
import * as _323 from "./mint/v1beta1/query.rpc.Query";
import * as _324 from "./names/v1beta1/query.rpc.Query";
import * as _325 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _326 from "./token/v1beta1/query.rpc.Query";
import * as _327 from "./bonds/v1beta1/tx.rpc.msg";
import * as _328 from "./claims/v1beta1/tx.rpc.msg";
import * as _329 from "./entity/v1beta1/tx.rpc.msg";
import * as _330 from "./iid/v1beta1/tx.rpc.msg";
import * as _331 from "./liquidstake/v1beta1/tx.rpc.msg";
import * as _332 from "./names/v1beta1/tx.rpc.msg";
import * as _333 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _334 from "./token/v1beta1/tx.rpc.msg";
import * as _341 from "./rpc.query";
import * as _342 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._317,
      ..._327
    };
  }
  export namespace claims {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._318,
      ..._328
    };
  }
  export namespace entity {
    export const v1beta1 = {
      ..._203,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._319,
      ..._329
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._320
    };
  }
  export namespace iid {
    export const v1beta1 = {
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._321,
      ..._330
    };
  }
  export namespace liquidstake {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._322,
      ..._331
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._323
    };
  }
  export namespace names {
    export const v1beta1 = {
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._324,
      ..._332
    };
  }
  export namespace smartaccount {
    export const crypto = {
      ..._233
    };
    export const v1beta1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._325,
      ..._333
    };
  }
  export namespace token {
    export const v1beta1 = {
      ..._240,
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._326,
      ..._334
    };
  }
  export const ClientFactory = {
    ..._341,
    ..._342
  };
}