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
import * as _209 from "./iid/v1beta1/event";
import * as _210 from "./iid/v1beta1/genesis";
import * as _211 from "./iid/v1beta1/iid";
import * as _212 from "./iid/v1beta1/query";
import * as _213 from "./iid/v1beta1/tx";
import * as _214 from "./iid/v1beta1/types";
import * as _215 from "./token/v1beta1/authz";
import * as _216 from "./token/v1beta1/event";
import * as _217 from "./token/v1beta1/genesis";
import * as _218 from "./token/v1beta1/proposal";
import * as _219 from "./token/v1beta1/query";
import * as _220 from "./token/v1beta1/token";
import * as _221 from "./token/v1beta1/tx";
import * as _292 from "./bonds/v1beta1/query.rpc.Query";
import * as _293 from "./claims/v1beta1/query.rpc.Query";
import * as _294 from "./entity/v1beta1/query.rpc.Query";
import * as _295 from "./iid/v1beta1/query.rpc.Query";
import * as _296 from "./token/v1beta1/query.rpc.Query";
import * as _297 from "./bonds/v1beta1/tx.rpc.msg";
import * as _298 from "./claims/v1beta1/tx.rpc.msg";
import * as _299 from "./entity/v1beta1/tx.rpc.msg";
import * as _300 from "./iid/v1beta1/tx.rpc.msg";
import * as _301 from "./token/v1beta1/tx.rpc.msg";
import * as _308 from "./rpc.query";
import * as _309 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = {
      ..._192,
      ..._193,
      ..._194,
      ..._195,
      ..._196,
      ..._292,
      ..._297
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
      ..._293,
      ..._298
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
      ..._294,
      ..._299
    };
  }
  export namespace iid {
    export const v1beta1 = {
      ..._209,
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._295,
      ..._300
    };
  }
  export namespace token {
    export const v1beta1 = {
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._296,
      ..._301
    };
  }
  export const ClientFactory = {
    ..._308,
    ..._309
  };
}