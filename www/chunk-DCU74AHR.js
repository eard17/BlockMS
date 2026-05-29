import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VDRMO2DQ.js";

// src/app/services/game-state.ts
var _GameStateService = class _GameStateService {
  constructor() {
    this._score = signal(0, ...ngDevMode ? [{ debugName: "_score" }] : []);
    this._comboCount = signal(0, ...ngDevMode ? [{ debugName: "_comboCount" }] : []);
    this._mode = signal("classic", ...ngDevMode ? [{ debugName: "_mode" }] : []);
    this._elapsedTime = signal(0, ...ngDevMode ? [{ debugName: "_elapsedTime" }] : []);
    this._sessionSeed = signal("", ...ngDevMode ? [{ debugName: "_sessionSeed" }] : []);
    this._targetScore = signal(0, ...ngDevMode ? [{ debugName: "_targetScore" }] : []);
    this.score = this._score.asReadonly();
    this.comboCount = this._comboCount.asReadonly();
    this.mode = this._mode.asReadonly();
    this.elapsedTime = this._elapsedTime.asReadonly();
    this.sessionSeed = this._sessionSeed.asReadonly();
    this.targetScore = this._targetScore.asReadonly();
    this.displayScore = computed(() => this._score() * Math.max(1, this._comboCount()), ...ngDevMode ? [{ debugName: "displayScore" }] : []);
  }
  addScore(pts) {
    this._score.update((s) => s + pts);
  }
  incrementCombo() {
    this._comboCount.update((c) => c + 1);
  }
  resetCombo() {
    this._comboCount.set(0);
  }
  setMode(m) {
    this._mode.set(m);
  }
  setTargetScore(t) {
    this._targetScore.set(t);
  }
  updateElapsedTime(t) {
    this._elapsedTime.set(t);
  }
  resetSession(keepSeed = false) {
    this._score.set(0);
    this._comboCount.set(0);
    this._elapsedTime.set(0);
    if (!keepSeed) {
      this._sessionSeed.set(Math.random().toString(36).substring(2, 10));
      this._targetScore.set(0);
    }
  }
};
_GameStateService.\u0275fac = function GameStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GameStateService)();
};
_GameStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GameStateService, factory: _GameStateService.\u0275fac, providedIn: "root" });
var GameStateService = _GameStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GameStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  GameStateService
};
//# sourceMappingURL=chunk-DCU74AHR.js.map
