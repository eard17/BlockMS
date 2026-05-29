import {
  AuthService
} from "./chunk-GI5KRBG6.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-J2YUU2QC.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// src/app/services/sync.ts
var _SyncService = class _SyncService {
  constructor() {
    this.auth = inject(AuthService);
  }
  submitScore(score, mode, elapsedSeconds) {
    return __async(this, null, function* () {
      const db = this.auth.getClient();
      const userId = this.auth.user()?.id;
      if (!db || !userId)
        return;
      try {
        yield db.from("scores").insert({ user_id: userId, score, mode, elapsed_seconds: elapsedSeconds });
      } catch {
      }
    });
  }
  fetchChallengeRanking(code) {
    return __async(this, null, function* () {
      const db = this.auth.getClient();
      if (!db)
        return [];
      try {
        const { data } = yield db.from("challenge_scores").select("username, score").eq("challenge_code", code).order("score", { ascending: false }).limit(20);
        return data ?? [];
      } catch {
        return [];
      }
    });
  }
};
_SyncService.\u0275fac = function SyncService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SyncService)();
};
_SyncService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SyncService, factory: _SyncService.\u0275fac, providedIn: "root" });
var SyncService = _SyncService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SyncService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SyncService
};
//# sourceMappingURL=chunk-TVPQJG2C.js.map
