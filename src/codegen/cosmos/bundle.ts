//@ts-nocheck
import * as _3 from "./app/runtime/v1alpha1/module";
import * as _4 from "./app/v1alpha1/config";
import * as _5 from "./app/v1alpha1/module";
import * as _6 from "./app/v1alpha1/query";
import * as _7 from "./auth/module/v1/module";
import * as _8 from "./auth/v1beta1/auth";
import * as _9 from "./auth/v1beta1/genesis";
import * as _10 from "./auth/v1beta1/query";
import * as _11 from "./auth/v1beta1/tx";
import * as _12 from "./authz/module/v1/module";
import * as _13 from "./authz/v1beta1/authz";
import * as _14 from "./authz/v1beta1/event";
import * as _15 from "./authz/v1beta1/genesis";
import * as _16 from "./authz/v1beta1/query";
import * as _17 from "./authz/v1beta1/tx";
import * as _18 from "./autocli/v1/options";
import * as _19 from "./autocli/v1/query";
import * as _20 from "./bank/module/v1/module";
import * as _21 from "./bank/v1beta1/authz";
import * as _22 from "./bank/v1beta1/bank";
import * as _23 from "./bank/v1beta1/genesis";
import * as _24 from "./bank/v1beta1/query";
import * as _25 from "./bank/v1beta1/tx";
import * as _26 from "./base/abci/v1beta1/abci";
import * as _27 from "./base/node/v1beta1/query";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v1beta1/reflection";
import * as _30 from "./base/reflection/v2alpha1/reflection";
import * as _31 from "./base/tendermint/v1beta1/query";
import * as _32 from "./base/tendermint/v1beta1/types";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./circuit/module/v1/module";
import * as _35 from "./circuit/v1/query";
import * as _36 from "./circuit/v1/tx";
import * as _37 from "./circuit/v1/types";
import * as _38 from "./consensus/module/v1/module";
import * as _39 from "./consensus/v1/query";
import * as _40 from "./consensus/v1/tx";
import * as _41 from "./crisis/module/v1/module";
import * as _42 from "./crisis/v1beta1/genesis";
import * as _43 from "./crisis/v1beta1/tx";
import * as _44 from "./crypto/ed25519/keys";
import * as _45 from "./crypto/hd/v1/hd";
import * as _46 from "./crypto/keyring/v1/record";
import * as _47 from "./crypto/multisig/keys";
import * as _48 from "./crypto/secp256k1/keys";
import * as _49 from "./crypto/secp256r1/keys";
import * as _50 from "./distribution/module/v1/module";
import * as _51 from "./distribution/v1beta1/distribution";
import * as _52 from "./distribution/v1beta1/genesis";
import * as _53 from "./distribution/v1beta1/query";
import * as _54 from "./distribution/v1beta1/tx";
import * as _55 from "./evidence/module/v1/module";
import * as _56 from "./evidence/v1beta1/evidence";
import * as _57 from "./evidence/v1beta1/genesis";
import * as _58 from "./evidence/v1beta1/query";
import * as _59 from "./evidence/v1beta1/tx";
import * as _60 from "./feegrant/module/v1/module";
import * as _61 from "./feegrant/v1beta1/feegrant";
import * as _62 from "./feegrant/v1beta1/genesis";
import * as _63 from "./feegrant/v1beta1/query";
import * as _64 from "./feegrant/v1beta1/tx";
import * as _65 from "./genutil/module/v1/module";
import * as _66 from "./genutil/v1beta1/genesis";
import * as _67 from "./gov/module/v1/module";
import * as _68 from "./gov/v1/genesis";
import * as _69 from "./gov/v1/gov";
import * as _70 from "./gov/v1/query";
import * as _71 from "./gov/v1/tx";
import * as _72 from "./gov/v1beta1/genesis";
import * as _73 from "./gov/v1beta1/gov";
import * as _74 from "./gov/v1beta1/query";
import * as _75 from "./gov/v1beta1/tx";
import * as _76 from "./group/module/v1/module";
import * as _77 from "./group/v1/events";
import * as _78 from "./group/v1/genesis";
import * as _79 from "./group/v1/query";
import * as _80 from "./group/v1/tx";
import * as _81 from "./group/v1/types";
import * as _82 from "./ics23/v1/proofs";
import * as _83 from "./mint/module/v1/module";
import * as _84 from "./mint/v1beta1/genesis";
import * as _85 from "./mint/v1beta1/mint";
import * as _86 from "./mint/v1beta1/query";
import * as _87 from "./mint/v1beta1/tx";
import * as _88 from "./msg/textual/v1/textual";
import * as _89 from "./msg/v1/msg";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./orm/v1/orm";
import * as _99 from "./orm/v1alpha1/schema";
import * as _100 from "./params/module/v1/module";
import * as _101 from "./params/v1beta1/params";
import * as _102 from "./params/v1beta1/query";
import * as _103 from "./query/v1/query";
import * as _104 from "./reflection/v1/reflection";
import * as _105 from "./slashing/module/v1/module";
import * as _106 from "./slashing/v1beta1/genesis";
import * as _107 from "./slashing/v1beta1/query";
import * as _108 from "./slashing/v1beta1/slashing";
import * as _109 from "./slashing/v1beta1/tx";
import * as _110 from "./staking/module/v1/module";
import * as _111 from "./staking/v1beta1/authz";
import * as _112 from "./staking/v1beta1/genesis";
import * as _113 from "./staking/v1beta1/query";
import * as _114 from "./staking/v1beta1/staking";
import * as _115 from "./staking/v1beta1/tx";
import * as _116 from "./store/internal/kv/v1beta1/kv";
import * as _117 from "./store/snapshots/v1/snapshot";
import * as _118 from "./store/streaming/abci/grpc";
import * as _119 from "./store/v1beta1/commit_info";
import * as _120 from "./store/v1beta1/listening";
import * as _121 from "./tx/config/v1/config";
import * as _122 from "./tx/signing/v1beta1/signing";
import * as _123 from "./tx/v1beta1/service";
import * as _124 from "./tx/v1beta1/tx";
import * as _125 from "./upgrade/module/v1/module";
import * as _126 from "./upgrade/v1beta1/query";
import * as _127 from "./upgrade/v1beta1/tx";
import * as _128 from "./upgrade/v1beta1/upgrade";
import * as _129 from "./vesting/module/v1/module";
import * as _130 from "./vesting/v1beta1/tx";
import * as _131 from "./vesting/v1beta1/vesting";
import * as _251 from "./app/v1alpha1/query.rpc.Query";
import * as _252 from "./auth/v1beta1/query.rpc.Query";
import * as _253 from "./authz/v1beta1/query.rpc.Query";
import * as _254 from "./autocli/v1/query.rpc.Query";
import * as _255 from "./bank/v1beta1/query.rpc.Query";
import * as _256 from "./base/node/v1beta1/query.rpc.Service";
import * as _257 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _258 from "./circuit/v1/query.rpc.Query";
import * as _259 from "./consensus/v1/query.rpc.Query";
import * as _260 from "./distribution/v1beta1/query.rpc.Query";
import * as _261 from "./evidence/v1beta1/query.rpc.Query";
import * as _262 from "./feegrant/v1beta1/query.rpc.Query";
import * as _263 from "./gov/v1/query.rpc.Query";
import * as _264 from "./gov/v1beta1/query.rpc.Query";
import * as _265 from "./group/v1/query.rpc.Query";
import * as _266 from "./mint/v1beta1/query.rpc.Query";
import * as _267 from "./nft/v1beta1/query.rpc.Query";
import * as _268 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _269 from "./params/v1beta1/query.rpc.Query";
import * as _270 from "./slashing/v1beta1/query.rpc.Query";
import * as _271 from "./staking/v1beta1/query.rpc.Query";
import * as _272 from "./tx/v1beta1/service.rpc.Service";
import * as _273 from "./upgrade/v1beta1/query.rpc.Query";
import * as _274 from "./auth/v1beta1/tx.rpc.msg";
import * as _275 from "./authz/v1beta1/tx.rpc.msg";
import * as _276 from "./bank/v1beta1/tx.rpc.msg";
import * as _277 from "./circuit/v1/tx.rpc.msg";
import * as _278 from "./consensus/v1/tx.rpc.msg";
import * as _279 from "./crisis/v1beta1/tx.rpc.msg";
import * as _280 from "./distribution/v1beta1/tx.rpc.msg";
import * as _281 from "./evidence/v1beta1/tx.rpc.msg";
import * as _282 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _283 from "./gov/v1/tx.rpc.msg";
import * as _284 from "./gov/v1beta1/tx.rpc.msg";
import * as _285 from "./group/v1/tx.rpc.msg";
import * as _286 from "./mint/v1beta1/tx.rpc.msg";
import * as _287 from "./nft/v1beta1/tx.rpc.msg";
import * as _288 from "./slashing/v1beta1/tx.rpc.msg";
import * as _289 from "./staking/v1beta1/tx.rpc.msg";
import * as _290 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _291 from "./vesting/v1beta1/tx.rpc.msg";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._3
      };
    }
    export const v1alpha1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._251
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._7
      };
    }
    export const v1beta1 = {
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._252,
      ..._274
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._12
      };
    }
    export const v1beta1 = {
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._253,
      ..._275
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._18,
      ..._19,
      ..._254
    };
  }
  export namespace bank {
    export namespace module {
      export const v1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._255,
      ..._276
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._26
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._27,
        ..._256
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._28
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._29
      };
      export const v2alpha1 = {
        ..._30
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._31,
        ..._32,
        ..._257
      };
    }
    export const v1beta1 = {
      ..._33
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._34
      };
    }
    export const v1 = {
      ..._35,
      ..._36,
      ..._37,
      ..._258,
      ..._277
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._38
      };
    }
    export const v1 = {
      ..._39,
      ..._40,
      ..._259,
      ..._278
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._41
      };
    }
    export const v1beta1 = {
      ..._42,
      ..._43,
      ..._279
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._44
    };
    export namespace hd {
      export const v1 = {
        ..._45
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._46
      };
    }
    export const multisig = {
      ..._47
    };
    export const secp256k1 = {
      ..._48
    };
    export const secp256r1 = {
      ..._49
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._50
      };
    }
    export const v1beta1 = {
      ..._51,
      ..._52,
      ..._53,
      ..._54,
      ..._260,
      ..._280
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._55
      };
    }
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._261,
      ..._281
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._60
      };
    }
    export const v1beta1 = {
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._262,
      ..._282
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._65
      };
    }
    export const v1beta1 = {
      ..._66
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._67
      };
    }
    export const v1 = {
      ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._263,
      ..._283
    };
    export const v1beta1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
      ..._264,
      ..._284
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._76
      };
    }
    export const v1 = {
      ..._77,
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._265,
      ..._285
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._82
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._83
      };
    }
    export const v1beta1 = {
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._266,
      ..._286
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._88
      };
    }
    export const v1 = {
      ..._89
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._90
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._267,
      ..._287
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._96
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._97,
        ..._268
      };
    }
    export const v1 = {
      ..._98
    };
    export const v1alpha1 = {
      ..._99
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._100
      };
    }
    export const v1beta1 = {
      ..._101,
      ..._102,
      ..._269
    };
  }
  export namespace query {
    export const v1 = {
      ..._103
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._104
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._105
      };
    }
    export const v1beta1 = {
      ..._106,
      ..._107,
      ..._108,
      ..._109,
      ..._270,
      ..._288
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._110
      };
    }
    export const v1beta1 = {
      ..._111,
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._271,
      ..._289
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._116
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._117
      };
    }
    export namespace streaming {
      export const abci = {
        ..._118
      };
    }
    export const v1beta1 = {
      ..._119,
      ..._120
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._121
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._122
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._272
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._125
      };
    }
    export const v1beta1 = {
      ..._126,
      ..._127,
      ..._128,
      ..._273,
      ..._290
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._129
      };
    }
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._291
    };
  }
  export const ClientFactory = {
    ..._326,
    ..._327
  };
}