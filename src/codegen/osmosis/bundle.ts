import * as _102 from "./downtime-detector/v1beta1/downtime_duration";
import * as _103 from "./downtime-detector/v1beta1/genesis";
import * as _104 from "./downtime-detector/v1beta1/query";
import * as _105 from "./epochs/genesis";
import * as _106 from "./epochs/query";
import * as _107 from "./gamm/pool-models/balancer/balancerPool";
import * as _108 from "./gamm/v1beta1/genesis";
import * as _109 from "./gamm/v1beta1/query";
import * as _110 from "./gamm/v1beta1/tx";
import * as _111 from "./gamm/pool-models/balancer/tx/tx";
import * as _112 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _113 from "./gamm/pool-models/stableswap/tx";
import * as _114 from "./gamm/v2/query";
import * as _115 from "./ibc-rate-limit/v1beta1/params";
import * as _116 from "./ibc-rate-limit/v1beta1/query";
import * as _117 from "./incentives/gauge";
import * as _118 from "./incentives/genesis";
import * as _119 from "./incentives/params";
import * as _120 from "./incentives/query";
import * as _121 from "./incentives/tx";
import * as _122 from "./lockup/genesis";
import * as _123 from "./lockup/lock";
import * as _124 from "./lockup/params";
import * as _125 from "./lockup/query";
import * as _126 from "./lockup/tx";
import * as _127 from "./mint/v1beta1/genesis";
import * as _128 from "./mint/v1beta1/mint";
import * as _129 from "./mint/v1beta1/query";
import * as _130 from "./pool-incentives/v1beta1/genesis";
import * as _131 from "./pool-incentives/v1beta1/gov";
import * as _132 from "./pool-incentives/v1beta1/incentives";
import * as _133 from "./pool-incentives/v1beta1/query";
import * as _134 from "./protorev/v1beta1/genesis";
import * as _135 from "./protorev/v1beta1/gov";
import * as _136 from "./protorev/v1beta1/params";
import * as _137 from "./protorev/v1beta1/protorev";
import * as _138 from "./protorev/v1beta1/query";
import * as _139 from "./protorev/v1beta1/tx";
import * as _140 from "./sumtree/v1beta1/tree";
import * as _141 from "./superfluid/genesis";
import * as _142 from "./superfluid/params";
import * as _143 from "./superfluid/query";
import * as _144 from "./superfluid/superfluid";
import * as _145 from "./superfluid/tx";
import * as _146 from "./swaprouter/v1beta1/genesis";
import * as _147 from "./swaprouter/v1beta1/module_route";
import * as _148 from "./swaprouter/v1beta1/query";
import * as _149 from "./swaprouter/v1beta1/swap_route";
import * as _150 from "./swaprouter/v1beta1/tx";
import * as _151 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _152 from "./tokenfactory/v1beta1/genesis";
import * as _153 from "./tokenfactory/v1beta1/params";
import * as _154 from "./tokenfactory/v1beta1/query";
import * as _155 from "./tokenfactory/v1beta1/tx";
import * as _156 from "./twap/v1beta1/genesis";
import * as _157 from "./twap/v1beta1/query";
import * as _158 from "./twap/v1beta1/twap_record";
import * as _159 from "./txfees/v1beta1/feetoken";
import * as _160 from "./txfees/v1beta1/genesis";
import * as _161 from "./txfees/v1beta1/gov";
import * as _162 from "./txfees/v1beta1/query";
import * as _163 from "./valset-pref/v1beta1/query";
import * as _164 from "./valset-pref/v1beta1/state";
import * as _165 from "./valset-pref/v1beta1/tx";
import * as _254 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _255 from "./gamm/pool-models/stableswap/tx.amino";
import * as _256 from "./gamm/v1beta1/tx.amino";
import * as _257 from "./incentives/tx.amino";
import * as _258 from "./lockup/tx.amino";
import * as _259 from "./protorev/v1beta1/tx.amino";
import * as _260 from "./superfluid/tx.amino";
import * as _261 from "./swaprouter/v1beta1/tx.amino";
import * as _262 from "./tokenfactory/v1beta1/tx.amino";
import * as _263 from "./valset-pref/v1beta1/tx.amino";
import * as _264 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _265 from "./gamm/pool-models/stableswap/tx.registry";
import * as _266 from "./gamm/v1beta1/tx.registry";
import * as _267 from "./incentives/tx.registry";
import * as _268 from "./lockup/tx.registry";
import * as _269 from "./protorev/v1beta1/tx.registry";
import * as _270 from "./superfluid/tx.registry";
import * as _271 from "./swaprouter/v1beta1/tx.registry";
import * as _272 from "./tokenfactory/v1beta1/tx.registry";
import * as _273 from "./valset-pref/v1beta1/tx.registry";
import * as _274 from "./downtime-detector/v1beta1/query.lcd";
import * as _275 from "./epochs/query.lcd";
import * as _276 from "./gamm/v1beta1/query.lcd";
import * as _277 from "./gamm/v2/query.lcd";
import * as _278 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _279 from "./incentives/query.lcd";
import * as _280 from "./lockup/query.lcd";
import * as _281 from "./mint/v1beta1/query.lcd";
import * as _282 from "./pool-incentives/v1beta1/query.lcd";
import * as _283 from "./protorev/v1beta1/query.lcd";
import * as _284 from "./superfluid/query.lcd";
import * as _285 from "./swaprouter/v1beta1/query.lcd";
import * as _286 from "./tokenfactory/v1beta1/query.lcd";
import * as _287 from "./twap/v1beta1/query.lcd";
import * as _288 from "./txfees/v1beta1/query.lcd";
import * as _289 from "./valset-pref/v1beta1/query.lcd";
import * as _290 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _291 from "./epochs/query.rpc.Query";
import * as _292 from "./gamm/v1beta1/query.rpc.Query";
import * as _293 from "./gamm/v2/query.rpc.Query";
import * as _294 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _295 from "./incentives/query.rpc.Query";
import * as _296 from "./lockup/query.rpc.Query";
import * as _297 from "./mint/v1beta1/query.rpc.Query";
import * as _298 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _299 from "./protorev/v1beta1/query.rpc.Query";
import * as _300 from "./superfluid/query.rpc.Query";
import * as _301 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _302 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _303 from "./twap/v1beta1/query.rpc.Query";
import * as _304 from "./txfees/v1beta1/query.rpc.Query";
import * as _305 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _306 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _307 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _308 from "./gamm/v1beta1/tx.rpc.msg";
import * as _309 from "./incentives/tx.rpc.msg";
import * as _310 from "./lockup/tx.rpc.msg";
import * as _311 from "./protorev/v1beta1/tx.rpc.msg";
import * as _312 from "./superfluid/tx.rpc.msg";
import * as _313 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _314 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _315 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _319 from "./lcd";
import * as _320 from "./rpc.query";
import * as _321 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._102,
      ..._103,
      ..._104,
      ..._274,
      ..._290
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._105,
      ..._106,
      ..._275,
      ..._291
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
      ..._256,
      ..._266,
      ..._276,
      ..._292,
      ..._308
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._111,
          ..._254,
          ..._264,
          ..._306
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._112,
          ..._113,
          ..._255,
          ..._265,
          ..._307
        };
      }
    }
    export const v2 = {
      ..._114,
      ..._277,
      ..._293
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._278,
      ..._294
    };
  }
  export const incentives = {
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._257,
    ..._267,
    ..._279,
    ..._295,
    ..._309
  };
  export const lockup = {
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126,
    ..._258,
    ..._268,
    ..._280,
    ..._296,
    ..._310
  };
  export namespace mint {
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
      ..._281,
      ..._297
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._282,
      ..._298
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._139,
      ..._259,
      ..._269,
      ..._283,
      ..._299,
      ..._311
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._140
    };
  }
  export const superfluid = {
    ..._141,
    ..._142,
    ..._143,
    ..._144,
    ..._145,
    ..._260,
    ..._270,
    ..._284,
    ..._300,
    ..._312
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._146,
      ..._147,
      ..._148,
      ..._149,
      ..._150,
      ..._261,
      ..._271,
      ..._285,
      ..._301,
      ..._313
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._262,
      ..._272,
      ..._286,
      ..._302,
      ..._314
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._156,
      ..._157,
      ..._158,
      ..._287,
      ..._303
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._288,
      ..._304
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._163,
      ..._164,
      ..._165,
      ..._263,
      ..._273,
      ..._289,
      ..._305,
      ..._315
    };
  }
  export const ClientFactory = {
    ..._319,
    ..._320,
    ..._321
  };
}