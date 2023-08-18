import * as _144 from "./bonds/v1beta1/bonds";
import * as _145 from "./bonds/v1beta1/event";
import * as _146 from "./bonds/v1beta1/genesis";
import * as _147 from "./bonds/v1beta1/query";
import * as _148 from "./bonds/v1beta1/tx";
import * as _149 from "./claims/v1beta1/authz";
import * as _150 from "./claims/v1beta1/claims";
import * as _151 from "./claims/v1beta1/cosmos";
import * as _152 from "./claims/v1beta1/event";
import * as _153 from "./claims/v1beta1/genesis";
import * as _154 from "./claims/v1beta1/query";
import * as _155 from "./claims/v1beta1/tx";
import * as _156 from "./entity/v1beta1/cosmos";
import * as _157 from "./entity/v1beta1/entity";
import * as _158 from "./entity/v1beta1/event";
import * as _159 from "./entity/v1beta1/genesis";
import * as _160 from "./entity/v1beta1/proposal";
import * as _161 from "./entity/v1beta1/query";
import * as _162 from "./entity/v1beta1/tx";
import * as _163 from "./iid/v1beta1/event";
import * as _164 from "./iid/v1beta1/genesis";
import * as _165 from "./iid/v1beta1/iid";
import * as _166 from "./iid/v1beta1/query";
import * as _167 from "./iid/v1beta1/tx";
import * as _168 from "./iid/v1beta1/types";
import * as _169 from "./token/v1beta1/authz";
import * as _170 from "./token/v1beta1/event";
import * as _171 from "./token/v1beta1/genesis";
import * as _172 from "./token/v1beta1/proposal";
import * as _173 from "./token/v1beta1/query";
import * as _174 from "./token/v1beta1/token";
import * as _175 from "./token/v1beta1/tx";
import * as _235 from "./bonds/v1beta1/query.rpc.Query";
import * as _236 from "./claims/v1beta1/query.rpc.Query";
import * as _237 from "./entity/v1beta1/query.rpc.Query";
import * as _238 from "./iid/v1beta1/query.rpc.Query";
import * as _239 from "./token/v1beta1/query.rpc.Query";
import * as _240 from "./bonds/v1beta1/tx.rpc.msg";
import * as _241 from "./claims/v1beta1/tx.rpc.msg";
import * as _242 from "./entity/v1beta1/tx.rpc.msg";
import * as _243 from "./iid/v1beta1/tx.rpc.msg";
import * as _244 from "./token/v1beta1/tx.rpc.msg";
import * as _253 from "./rpc.query";
import * as _254 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = {
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._235,
      ..._240
    };
  }
  export namespace claims {
    export const v1beta1 = {
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._236,
      ..._241
    };
  }
  export namespace entity {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._237,
      ..._242
    };
  }
  export namespace iid {
    export const v1beta1 = {
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._238,
      ..._243
    };
  }
  export namespace token {
    export const v1beta1 = {
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._239,
      ..._244
    };
  }
  export const ClientFactory = {
    ..._253,
    ..._254
  };
}