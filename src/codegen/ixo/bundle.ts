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
import * as _219 from "./mint/v1beta1/genesis";
import * as _220 from "./mint/v1beta1/mint";
import * as _221 from "./mint/v1beta1/query";
import * as _222 from "./smartaccount/v1beta1/event";
import * as _223 from "./smartaccount/v1beta1/genesis";
import * as _224 from "./smartaccount/v1beta1/models";
import * as _225 from "./smartaccount/v1beta1/params";
import * as _226 from "./smartaccount/v1beta1/query";
import * as _227 from "./smartaccount/v1beta1/tx";
import * as _228 from "./token/v1beta1/authz";
import * as _229 from "./token/v1beta1/event";
import * as _230 from "./token/v1beta1/genesis";
import * as _231 from "./token/v1beta1/proposal";
import * as _232 from "./token/v1beta1/query";
import * as _233 from "./token/v1beta1/token";
import * as _234 from "./token/v1beta1/tx";
import * as _305 from "./bonds/v1beta1/query.rpc.Query";
import * as _306 from "./claims/v1beta1/query.rpc.Query";
import * as _307 from "./entity/v1beta1/query.rpc.Query";
import * as _308 from "./epochs/v1beta1/query.rpc.Query";
import * as _309 from "./iid/v1beta1/query.rpc.Query";
import * as _310 from "./mint/v1beta1/query.rpc.Query";
import * as _311 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _312 from "./token/v1beta1/query.rpc.Query";
import * as _313 from "./bonds/v1beta1/tx.rpc.msg";
import * as _314 from "./claims/v1beta1/tx.rpc.msg";
import * as _315 from "./entity/v1beta1/tx.rpc.msg";
import * as _316 from "./iid/v1beta1/tx.rpc.msg";
import * as _317 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _318 from "./token/v1beta1/tx.rpc.msg";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._305,
      ..._313
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
      ..._306,
      ..._314
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
      ..._307,
      ..._315
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._308
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
      ..._309,
      ..._316
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._219,
      ..._220,
      ..._221,
      ..._310
    };
  }
  export namespace smartaccount {
    export const v1beta1 = {
      ..._222,
      ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._311,
      ..._317
    };
  }
  export namespace token {
    export const v1beta1 = {
      ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._312,
      ..._318
    };
  }
  export const ClientFactory = {
    ..._325,
    ..._326
  };
}