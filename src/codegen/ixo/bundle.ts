import * as _126 from "./bonds/v1beta1/bonds";
import * as _127 from "./bonds/v1beta1/genesis";
import * as _128 from "./bonds/v1beta1/query";
import * as _129 from "./bonds/v1beta1/tx";
import * as _130 from "./entity/v1beta1/entity";
import * as _131 from "./entity/v1beta1/genesis";
import * as _132 from "./entity/v1beta1/proposal";
import * as _133 from "./entity/v1beta1/query";
import * as _134 from "./entity/v1beta1/tx";
import * as _135 from "./iid/v1beta1/event";
import * as _136 from "./iid/v1beta1/genesis";
import * as _137 from "./iid/v1beta1/iid";
import * as _138 from "./iid/v1beta1/query";
import * as _139 from "./iid/v1beta1/tx";
import * as _140 from "./payments/v1/genesis";
import * as _141 from "./payments/v1/payments";
import * as _142 from "./payments/v1/query";
import * as _143 from "./payments/v1/tx";
import * as _144 from "./project/v1/genesis";
import * as _145 from "./project/v1/project";
import * as _146 from "./project/v1/query";
import * as _147 from "./project/v1/tx";
import * as _148 from "./token/v1beta1/genesis";
import * as _149 from "./token/v1beta1/proposal";
import * as _150 from "./token/v1beta1/query";
import * as _151 from "./token/v1beta1/token";
import * as _152 from "./token/v1beta1/tx";
import * as _207 from "./bonds/v1beta1/query.rpc.Query";
import * as _208 from "./entity/v1beta1/query.rpc.Query";
import * as _209 from "./iid/v1beta1/query.rpc.Query";
import * as _210 from "./payments/v1/query.rpc.Query";
import * as _211 from "./project/v1/query.rpc.Query";
import * as _212 from "./token/v1beta1/query.rpc.Query";
import * as _213 from "./bonds/v1beta1/tx.rpc.msg";
import * as _214 from "./entity/v1beta1/tx.rpc.msg";
import * as _215 from "./iid/v1beta1/tx.rpc.msg";
import * as _216 from "./payments/v1/tx.rpc.msg";
import * as _217 from "./project/v1/tx.rpc.msg";
import * as _218 from "./token/v1beta1/tx.rpc.msg";
import * as _223 from "./rpc.query";
import * as _224 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._207,
      ..._213
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._208,
      ..._214
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._209,
      ..._215
    };
  }
  export namespace payments {
    export const v1 = { ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._210,
      ..._216
    };
  }
  export namespace project {
    export const v1 = { ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._211,
      ..._217
    };
  }
  export namespace token {
    export const v1beta1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._212,
      ..._218
    };
  }
  export const ClientFactory = { ..._223,
    ..._224
  };
}