import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-J2YUU2QC.js";

// src/app/services/child-mode.ts
var _ChildModeService = class _ChildModeService {
  constructor() {
    this._level = signal(null, ...ngDevMode ? [{ debugName: "_level" }] : []);
    this._timeRemainingMs = signal(0, ...ngDevMode ? [{ debugName: "_timeRemainingMs" }] : []);
    this._sessionDurationMs = signal(0, ...ngDevMode ? [{ debugName: "_sessionDurationMs" }] : []);
    this._isSleepPending = signal(false, ...ngDevMode ? [{ debugName: "_isSleepPending" }] : []);
    this._isSleeping = signal(false, ...ngDevMode ? [{ debugName: "_isSleeping" }] : []);
    this.timerHandle = null;
    this.level = this._level.asReadonly();
    this.timeRemainingMs = this._timeRemainingMs.asReadonly();
    this.sessionDurationMs = this._sessionDurationMs.asReadonly();
    this.isSleepPending = this._isSleepPending.asReadonly();
    this.isSleeping = this._isSleeping.asReadonly();
    this.isChildMode = computed(() => this._level() !== null, ...ngDevMode ? [{ debugName: "isChildMode" }] : []);
    this.boardDimension = computed(() => {
      const l = this._level();
      return l !== null ? _ChildModeService.BOARD_DIM[l] : 8;
    }, ...ngDevMode ? [{ debugName: "boardDimension" }] : []);
    this.pieceSet = computed(() => {
      const l = this._level();
      return l !== null ? _ChildModeService.PIECE_SETS[l] : "classic";
    }, ...ngDevMode ? [{ debugName: "pieceSet" }] : []);
    this.timeDisplay = computed(() => {
      const ms = this._timeRemainingMs();
      const m = Math.floor(ms / 6e4);
      const s = Math.floor(ms % 6e4 / 1e3);
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }, ...ngDevMode ? [{ debugName: "timeDisplay" }] : []);
  }
  startSession(level, durationMinutes) {
    let ms;
    if (durationMinutes !== void 0) {
      if (durationMinutes < 5 || durationMinutes > 60 || durationMinutes % 5 !== 0)
        throw new Error("Invalid duration setting");
      ms = durationMinutes * 60 * 1e3;
    } else {
      ms = _ChildModeService.SESSION_MS[level];
    }
    this.stopSession();
    this._level.set(level);
    this._sessionDurationMs.set(ms);
    this._timeRemainingMs.set(ms);
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
    this.timerHandle = setInterval(() => this.tick(), _ChildModeService.TICK_MS);
  }
  stopSession() {
    if (this.timerHandle !== null) {
      clearInterval(this.timerHandle);
      this.timerHandle = null;
    }
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
  }
  extendSession(minutes) {
    this._timeRemainingMs.update((t) => t + minutes * 60 * 1e3);
    this._isSleepPending.set(false);
    this._isSleeping.set(false);
    if (this.timerHandle === null)
      this.timerHandle = setInterval(() => this.tick(), _ChildModeService.TICK_MS);
  }
  unlock() {
    this._isSleeping.set(false);
    this._level.set(null);
    this.stopSession();
  }
  onTrayEmptyWhilePending() {
    if (this._isSleepPending()) {
      this._isSleepPending.set(false);
      this._isSleeping.set(true);
    }
  }
  tick() {
    const remaining = this._timeRemainingMs() - _ChildModeService.TICK_MS;
    if (remaining <= 0) {
      this._timeRemainingMs.set(0);
      this._isSleepPending.set(true);
      if (this.timerHandle !== null) {
        clearInterval(this.timerHandle);
        this.timerHandle = null;
      }
    } else {
      this._timeRemainingMs.set(remaining);
    }
  }
};
_ChildModeService.SESSION_MS = { 1: 3e5, 2: 6e5, 3: 9e5 };
_ChildModeService.BOARD_DIM = { 1: 5, 2: 6, 3: 8 };
_ChildModeService.PIECE_SETS = { 1: "simple", 2: "classic", 3: "classic" };
_ChildModeService.TICK_MS = 1e3;
_ChildModeService.\u0275fac = function ChildModeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChildModeService)();
};
_ChildModeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChildModeService, factory: _ChildModeService.\u0275fac, providedIn: "root" });
var ChildModeService = _ChildModeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChildModeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ChildModeService
};
//# sourceMappingURL=chunk-WP7LD4FI.js.map
