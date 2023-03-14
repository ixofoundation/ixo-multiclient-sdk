import * as _144 from "./bonds/v1beta1/bonds";
import * as _145 from "./bonds/v1beta1/genesis";
import * as _146 from "./bonds/v1beta1/query";
import * as _147 from "./bonds/v1beta1/tx";
import * as _148 from "./claims/v1beta1/authz";
import * as _149 from "./claims/v1beta1/claims";
import * as _150 from "./claims/v1beta1/cosmos";
import * as _151 from "./claims/v1beta1/event";
import * as _152 from "./claims/v1beta1/genesis";
import * as _153 from "./claims/v1beta1/query";
import * as _154 from "./claims/v1beta1/tx";
import * as _155 from "./entity/v1beta1/cosmos";
import * as _156 from "./entity/v1beta1/entity";
import * as _157 from "./entity/v1beta1/event";
import * as _158 from "./entity/v1beta1/genesis";
import * as _159 from "./entity/v1beta1/proposal";
import * as _160 from "./entity/v1beta1/query";
import * as _161 from "./entity/v1beta1/tx";
import * as _162 from "./iid/v1beta1/event";
import * as _163 from "./iid/v1beta1/genesis";
import * as _164 from "./iid/v1beta1/iid";
import * as _165 from "./iid/v1beta1/query";
import * as _166 from "./iid/v1beta1/tx";
import * as _167 from "./iid/v1beta1/types";
import * as _168 from "./token/v1beta1/authz";
import * as _169 from "./token/v1beta1/event";
import * as _170 from "./token/v1beta1/genesis";
import * as _171 from "./token/v1beta1/proposal";
import * as _172 from "./token/v1beta1/query";
import * as _173 from "./token/v1beta1/token";
import * as _174 from "./token/v1beta1/tx";
import * as _234 from "./bonds/v1beta1/query.rpc.Query";
import * as _235 from "./claims/v1beta1/query.rpc.Query";
import * as _236 from "./entity/v1beta1/query.rpc.Query";
import * as _237 from "./iid/v1beta1/query.rpc.Query";
import * as _238 from "./token/v1beta1/query.rpc.Query";
import * as _239 from "./bonds/v1beta1/tx.rpc.msg";
import * as _240 from "./claims/v1beta1/tx.rpc.msg";
import * as _241 from "./entity/v1beta1/tx.rpc.msg";
import * as _242 from "./iid/v1beta1/tx.rpc.msg";
import * as _243 from "./token/v1beta1/tx.rpc.msg";
import * as _252 from "./rpc.query";
import * as _253 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._234,
      ..._239
    };
  }
  export namespace claims {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._235,
      ..._240
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._236,
      ..._241
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._237,
      ..._242
    };
  }
  export namespace token {
    export const v1beta1 = { ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._238,
      ..._243
    };
  }
  export const ClientFactory = { ..._252,
    ..._253
  };
}