import * as _132 from "./bonds/v1beta1/bonds";
import * as _133 from "./bonds/v1beta1/genesis";
import * as _134 from "./bonds/v1beta1/query";
import * as _135 from "./bonds/v1beta1/tx";
import * as _136 from "./entity/v1beta1/entity";
import * as _137 from "./entity/v1beta1/event";
import * as _138 from "./entity/v1beta1/genesis";
import * as _139 from "./entity/v1beta1/proposal";
import * as _140 from "./entity/v1beta1/query";
import * as _141 from "./entity/v1beta1/tx";
import * as _142 from "./iid/v1beta1/event";
import * as _143 from "./iid/v1beta1/genesis";
import * as _144 from "./iid/v1beta1/iid";
import * as _145 from "./iid/v1beta1/query";
import * as _146 from "./iid/v1beta1/tx";
import * as _147 from "./payments/v1/genesis";
import * as _148 from "./payments/v1/payments";
import * as _149 from "./payments/v1/query";
import * as _150 from "./payments/v1/tx";
import * as _151 from "./project/v1/genesis";
import * as _152 from "./project/v1/project";
import * as _153 from "./project/v1/query";
import * as _154 from "./project/v1/tx";
import * as _155 from "./token/v1beta1/authz";
import * as _156 from "./token/v1beta1/event";
import * as _157 from "./token/v1beta1/genesis";
import * as _158 from "./token/v1beta1/proposal";
import * as _159 from "./token/v1beta1/query";
import * as _160 from "./token/v1beta1/token";
import * as _161 from "./token/v1beta1/tx";
import * as _218 from "./bonds/v1beta1/query.rpc.Query";
import * as _219 from "./entity/v1beta1/query.rpc.Query";
import * as _220 from "./iid/v1beta1/query.rpc.Query";
import * as _221 from "./payments/v1/query.rpc.Query";
import * as _222 from "./project/v1/query.rpc.Query";
import * as _223 from "./token/v1beta1/query.rpc.Query";
import * as _224 from "./bonds/v1beta1/tx.rpc.msg";
import * as _225 from "./entity/v1beta1/tx.rpc.msg";
import * as _226 from "./iid/v1beta1/tx.rpc.msg";
import * as _227 from "./payments/v1/tx.rpc.msg";
import * as _228 from "./project/v1/tx.rpc.msg";
import * as _229 from "./token/v1beta1/tx.rpc.msg";
import * as _236 from "./rpc.query";
import * as _237 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._218,
      ..._224
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._219,
      ..._225
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._220,
      ..._226
    };
  }
  export namespace payments {
    export const v1 = { ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._221,
      ..._227
    };
  }
  export namespace project {
    export const v1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._222,
      ..._228
    };
  }
  export namespace token {
    export const v1beta1 = { ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._159,
      ..._160,
      ..._161,
      ..._223,
      ..._229
    };
  }
  export const ClientFactory = { ..._236,
    ..._237
  };
}