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
import * as _219 from "./liquidstake/v1beta1/genesis";
import * as _220 from "./liquidstake/v1beta1/liquidstake";
import * as _221 from "./liquidstake/v1beta1/query";
import * as _222 from "./liquidstake/v1beta1/tx";
import * as _223 from "./mint/v1beta1/genesis";
import * as _224 from "./mint/v1beta1/mint";
import * as _225 from "./mint/v1beta1/query";
import * as _226 from "./smartaccount/crypto/crypto";
import * as _227 from "./smartaccount/v1beta1/event";
import * as _228 from "./smartaccount/v1beta1/genesis";
import * as _229 from "./smartaccount/v1beta1/models";
import * as _230 from "./smartaccount/v1beta1/params";
import * as _231 from "./smartaccount/v1beta1/query";
import * as _232 from "./smartaccount/v1beta1/tx";
import * as _233 from "./token/v1beta1/authz";
import * as _234 from "./token/v1beta1/event";
import * as _235 from "./token/v1beta1/genesis";
import * as _236 from "./token/v1beta1/proposal";
import * as _237 from "./token/v1beta1/query";
import * as _238 from "./token/v1beta1/token";
import * as _239 from "./token/v1beta1/tx";
import * as _310 from "./bonds/v1beta1/query.rpc.Query";
import * as _311 from "./claims/v1beta1/query.rpc.Query";
import * as _312 from "./entity/v1beta1/query.rpc.Query";
import * as _313 from "./epochs/v1beta1/query.rpc.Query";
import * as _314 from "./iid/v1beta1/query.rpc.Query";
import * as _315 from "./liquidstake/v1beta1/query.rpc.Query";
import * as _316 from "./mint/v1beta1/query.rpc.Query";
import * as _317 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _318 from "./token/v1beta1/query.rpc.Query";
import * as _319 from "./bonds/v1beta1/tx.rpc.msg";
import * as _320 from "./claims/v1beta1/tx.rpc.msg";
import * as _321 from "./entity/v1beta1/tx.rpc.msg";
import * as _322 from "./iid/v1beta1/tx.rpc.msg";
import * as _323 from "./liquidstake/v1beta1/tx.rpc.msg";
import * as _324 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _325 from "./token/v1beta1/tx.rpc.msg";
import * as _332 from "./rpc.query";
import * as _333 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._310,
      ..._319
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
      ..._311,
      ..._320
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
      ..._312,
      ..._321
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._313
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
      ..._314,
      ..._322
    };
  }
  export namespace liquidstake {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._315,
      ..._323
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._223,
      ..._224,
      ..._225,
      ..._316
    };
  }
  export namespace smartaccount {
    export const crypto = {
      ..._226
    };
    export const v1beta1 = {
      ..._227,
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._317,
      ..._324
    };
  }
  export namespace token {
    export const v1beta1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._318,
      ..._325
    };
  }
  export const ClientFactory = {
    ..._332,
    ..._333
  };
}