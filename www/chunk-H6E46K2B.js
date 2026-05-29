import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-S6JIF2OI.js";

// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach((function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  }));
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var arrowBackOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
var personCircleOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z'/><path d='M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z'/></svg>";
var settingsOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var trophyOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z' class='ionicon-fill-none ionicon-stroke-width'/><path d='M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";

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
  addIcons,
  arrowBackOutline,
  personCircleOutline,
  settingsOutline,
  trophyOutline,
  ChildModeService
};
//# sourceMappingURL=chunk-H6E46K2B.js.map
