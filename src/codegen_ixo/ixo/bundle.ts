import * as _20 from "./bonds/v1beta1/bonds";
import * as _21 from "./bonds/v1beta1/genesis";
import * as _22 from "./bonds/v1beta1/query";
import * as _23 from "./bonds/v1beta1/tx";
import * as _24 from "./entity/v1beta1/entity";
import * as _25 from "./entity/v1beta1/genesis";
import * as _26 from "./entity/v1beta1/proposal";
import * as _27 from "./entity/v1beta1/query";
import * as _28 from "./entity/v1beta1/tx";
import * as _29 from "./iid/v1beta1/event";
import * as _30 from "./iid/v1beta1/genesis";
import * as _31 from "./iid/v1beta1/iid";
import * as _32 from "./iid/v1beta1/query";
import * as _33 from "./iid/v1beta1/tx";
import * as _34 from "./payments/v1/genesis";
import * as _35 from "./payments/v1/payments";
import * as _36 from "./payments/v1/query";
import * as _37 from "./payments/v1/tx";
import * as _38 from "./project/v1/genesis";
import * as _39 from "./project/v1/project";
import * as _40 from "./project/v1/query";
import * as _41 from "./project/v1/tx";
import * as _42 from "./token/v1beta1/genesis";
import * as _43 from "./token/v1beta1/proposal";
import * as _44 from "./token/v1beta1/query";
import * as _45 from "./token/v1beta1/token";
import * as _46 from "./token/v1beta1/tx";
import * as _61 from "./bonds/v1beta1/query.rpc.Query";
import * as _62 from "./entity/v1beta1/query.rpc.Query";
import * as _63 from "./iid/v1beta1/query.rpc.Query";
import * as _64 from "./payments/v1/query.rpc.Query";
import * as _65 from "./project/v1/query.rpc.Query";
import * as _66 from "./token/v1beta1/query.rpc.Query";
import * as _67 from "./bonds/v1beta1/tx.rpc.msg";
import * as _68 from "./entity/v1beta1/tx.rpc.msg";
import * as _69 from "./iid/v1beta1/tx.rpc.msg";
import * as _70 from "./payments/v1/tx.rpc.msg";
import * as _71 from "./project/v1/tx.rpc.msg";
import * as _72 from "./token/v1beta1/tx.rpc.msg";
import * as _74 from "./rpc.query";
import * as _75 from "./rpc.tx";
export namespace ixo {
  export namespace bonds {
    export const v1beta1 = { ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._61,
      ..._67
    };
  }
  export namespace entity {
    export const v1beta1 = { ..._24,
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._62,
      ..._68
    };
  }
  export namespace iid {
    export const v1beta1 = { ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._33,
      ..._63,
      ..._69
    };
  }
  export namespace payments {
    export const v1 = { ..._34,
      ..._35,
      ..._36,
      ..._37,
      ..._64,
      ..._70
    };
  }
  export namespace project {
    export const v1 = { ..._38,
      ..._39,
      ..._40,
      ..._41,
      ..._65,
      ..._71
    };
  }
  export namespace token {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._66,
      ..._72
    };
  }
  export const ClientFactory = { ..._74,
    ..._75
  };
}