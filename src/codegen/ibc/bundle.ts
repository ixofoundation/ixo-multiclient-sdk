//@ts-nocheck
import * as _147 from "./applications/fee/v1/ack";
import * as _148 from "./applications/fee/v1/fee";
import * as _149 from "./applications/fee/v1/genesis";
import * as _150 from "./applications/fee/v1/metadata";
import * as _151 from "./applications/fee/v1/query";
import * as _152 from "./applications/fee/v1/tx";
import * as _153 from "./applications/interchain_accounts/controller/v1/controller";
import * as _154 from "./applications/interchain_accounts/controller/v1/query";
import * as _155 from "./applications/interchain_accounts/controller/v1/tx";
import * as _156 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _157 from "./applications/interchain_accounts/host/v1/host";
import * as _158 from "./applications/interchain_accounts/host/v1/query";
import * as _159 from "./applications/interchain_accounts/host/v1/tx";
import * as _160 from "./applications/interchain_accounts/v1/account";
import * as _161 from "./applications/interchain_accounts/v1/metadata";
import * as _162 from "./applications/interchain_accounts/v1/packet";
import * as _163 from "./applications/transfer/v1/authz";
import * as _164 from "./applications/transfer/v1/genesis";
import * as _165 from "./applications/transfer/v1/query";
import * as _166 from "./applications/transfer/v1/transfer";
import * as _167 from "./applications/transfer/v1/tx";
import * as _168 from "./applications/transfer/v2/packet";
import * as _169 from "./core/channel/v1/channel";
import * as _170 from "./core/channel/v1/genesis";
import * as _171 from "./core/channel/v1/query";
import * as _172 from "./core/channel/v1/tx";
import * as _173 from "./core/channel/v1/upgrade";
import * as _174 from "./core/client/v1/client";
import * as _175 from "./core/client/v1/genesis";
import * as _176 from "./core/client/v1/query";
import * as _177 from "./core/client/v1/tx";
import * as _178 from "./core/commitment/v1/commitment";
import * as _179 from "./core/connection/v1/connection";
import * as _180 from "./core/connection/v1/genesis";
import * as _181 from "./core/connection/v1/query";
import * as _182 from "./core/connection/v1/tx";
import * as _183 from "./core/types/v1/genesis";
import * as _184 from "./lightclients/localhost/v2/localhost";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/solomachine/v3/solomachine";
import * as _187 from "./lightclients/tendermint/v1/tendermint";
import * as _188 from "./lightclients/wasm/v1/genesis";
import * as _189 from "./lightclients/wasm/v1/query";
import * as _190 from "./lightclients/wasm/v1/tx";
import * as _191 from "./lightclients/wasm/v1/wasm";
import * as _289 from "./applications/fee/v1/query.rpc.Query";
import * as _290 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _291 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _292 from "./applications/transfer/v1/query.rpc.Query";
import * as _293 from "./core/channel/v1/query.rpc.Query";
import * as _294 from "./core/client/v1/query.rpc.Query";
import * as _295 from "./core/connection/v1/query.rpc.Query";
import * as _296 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _297 from "./applications/fee/v1/tx.rpc.msg";
import * as _298 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _299 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _300 from "./applications/transfer/v1/tx.rpc.msg";
import * as _301 from "./core/channel/v1/tx.rpc.msg";
import * as _302 from "./core/client/v1/tx.rpc.msg";
import * as _303 from "./core/connection/v1/tx.rpc.msg";
import * as _304 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _323 from "./rpc.query";
import * as _324 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._147,
        ..._148,
        ..._149,
        ..._150,
        ..._151,
        ..._152,
        ..._289,
        ..._297
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._153,
          ..._154,
          ..._155,
          ..._290,
          ..._298
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._156
        };
      }
      export namespace host {
        export const v1 = {
          ..._157,
          ..._158,
          ..._159,
          ..._291,
          ..._299
        };
      }
      export const v1 = {
        ..._160,
        ..._161,
        ..._162
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._167,
        ..._292,
        ..._300
      };
      export const v2 = {
        ..._168
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._293,
        ..._301
      };
    }
    export namespace client {
      export const v1 = {
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._294,
        ..._302
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._178
      };
    }
    export namespace connection {
      export const v1 = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._295,
        ..._303
      };
    }
    export namespace types {
      export const v1 = {
        ..._183
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._184
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._185
      };
      export const v3 = {
        ..._186
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._187
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._188,
        ..._189,
        ..._190,
        ..._191,
        ..._296,
        ..._304
      };
    }
  }
  export const ClientFactory = {
    ..._323,
    ..._324
  };
}