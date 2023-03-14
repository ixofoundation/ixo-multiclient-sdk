import * as _109 from "./applications/fee/v1/ack";
import * as _110 from "./applications/fee/v1/fee";
import * as _111 from "./applications/fee/v1/genesis";
import * as _112 from "./applications/fee/v1/metadata";
import * as _113 from "./applications/fee/v1/query";
import * as _114 from "./applications/fee/v1/tx";
import * as _115 from "./applications/interchain_accounts/controller/v1/controller";
import * as _116 from "./applications/interchain_accounts/controller/v1/query";
import * as _117 from "./applications/interchain_accounts/host/v1/host";
import * as _118 from "./applications/interchain_accounts/host/v1/query";
import * as _119 from "./applications/interchain_accounts/v1/account";
import * as _120 from "./applications/interchain_accounts/v1/genesis";
import * as _121 from "./applications/interchain_accounts/v1/metadata";
import * as _122 from "./applications/interchain_accounts/v1/packet";
import * as _123 from "./applications/transfer/v1/genesis";
import * as _124 from "./applications/transfer/v1/query";
import * as _125 from "./applications/transfer/v1/transfer";
import * as _126 from "./applications/transfer/v1/tx";
import * as _127 from "./applications/transfer/v2/packet";
import * as _128 from "./core/channel/v1/channel";
import * as _129 from "./core/channel/v1/genesis";
import * as _130 from "./core/channel/v1/query";
import * as _131 from "./core/channel/v1/tx";
import * as _132 from "./core/client/v1/client";
import * as _133 from "./core/client/v1/genesis";
import * as _134 from "./core/client/v1/query";
import * as _135 from "./core/client/v1/tx";
import * as _136 from "./core/commitment/v1/commitment";
import * as _137 from "./core/connection/v1/connection";
import * as _138 from "./core/connection/v1/genesis";
import * as _139 from "./core/connection/v1/query";
import * as _140 from "./core/connection/v1/tx";
import * as _141 from "./core/types/v1/genesis";
import * as _220 from "./applications/fee/v1/query.rpc.Query";
import * as _221 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _222 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _223 from "./applications/transfer/v1/query.rpc.Query";
import * as _224 from "./core/channel/v1/query.rpc.Query";
import * as _225 from "./core/client/v1/query.rpc.Query";
import * as _226 from "./core/connection/v1/query.rpc.Query";
import * as _227 from "./applications/fee/v1/tx.rpc.msg";
import * as _228 from "./applications/transfer/v1/tx.rpc.msg";
import * as _229 from "./core/channel/v1/tx.rpc.msg";
import * as _230 from "./core/client/v1/tx.rpc.msg";
import * as _231 from "./core/connection/v1/tx.rpc.msg";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = { ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._220,
        ..._227
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._115,
          ..._116,
          ..._221
        };
      }
      export namespace host {
        export const v1 = { ..._117,
          ..._118,
          ..._222
        };
      }
      export const v1 = { ..._119,
        ..._120,
        ..._121,
        ..._122
      };
    }
    export namespace transfer {
      export const v1 = { ..._123,
        ..._124,
        ..._125,
        ..._126,
        ..._223,
        ..._228
      };
      export const v2 = { ..._127
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._128,
        ..._129,
        ..._130,
        ..._131,
        ..._224,
        ..._229
      };
    }
    export namespace client {
      export const v1 = { ..._132,
        ..._133,
        ..._134,
        ..._135,
        ..._225,
        ..._230
      };
    }
    export namespace commitment {
      export const v1 = { ..._136
      };
    }
    export namespace connection {
      export const v1 = { ..._137,
        ..._138,
        ..._139,
        ..._140,
        ..._226,
        ..._231
      };
    }
    export namespace types {
      export const v1 = { ..._141
      };
    }
  }
  export const ClientFactory = { ..._248,
    ..._249
  };
}