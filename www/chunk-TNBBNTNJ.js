import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-VDRMO2DQ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// src/app/services/save-progress.ts
var STORAGE_KEY = "bms_save_v1";
var DEFAULT_HIGH_SCORES = {
  classic: 0,
  "child-1": 0,
  "child-2": 0,
  "child-3": 0,
  challenge: 0
};
var DEFAULT_SAVE = {
  highScore: 0,
  highScores: __spreadValues({}, DEFAULT_HIGH_SCORES),
  completedStarsCount: 0,
  unlockedSkins: ["default"],
  activeSkin: "default"
};
var _SaveProgressService = class _SaveProgressService {
  constructor() {
    this._progress = signal(this.load(), ...ngDevMode ? [{ debugName: "_progress" }] : []);
    this.progress = this._progress.asReadonly();
  }
  updateHighScore(mode, score) {
    const current = this._progress();
    const modeKey = mode;
    const modeScore = current.highScores[modeKey] ?? 0;
    if (score <= modeScore)
      return;
    const newHighScores = __spreadProps(__spreadValues({}, current.highScores), { [modeKey]: score });
    const globalHigh = Math.max(current.highScore, score);
    this.save(__spreadProps(__spreadValues({}, current), { highScore: globalHigh, highScores: newHighScores }));
  }
  recordGameEnd(elapsedSeconds) {
    const current = this._progress();
    const stars = Math.min(3, Math.floor(elapsedSeconds / 60));
    if (stars <= 0)
      return;
    this.save(__spreadProps(__spreadValues({}, current), { completedStarsCount: current.completedStarsCount + stars }));
  }
  unlockSkin(skinId, cost) {
    const current = this._progress();
    if (current.unlockedSkins.includes(skinId))
      return;
    if (current.completedStarsCount < cost)
      return;
    this.save(__spreadProps(__spreadValues({}, current), {
      unlockedSkins: [...current.unlockedSkins, skinId],
      completedStarsCount: current.completedStarsCount - cost
    }));
  }
  setActiveSkin(skinId) {
    this.save(__spreadProps(__spreadValues({}, this._progress()), { activeSkin: skinId }));
  }
  resetHighScores() {
    this.save(__spreadProps(__spreadValues({}, this._progress()), { highScore: 0, highScores: __spreadValues({}, DEFAULT_HIGH_SCORES) }));
  }
  save(data) {
    this._progress.set(data);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
    }
  }
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw)
        return __spreadProps(__spreadValues({}, DEFAULT_SAVE), { highScores: __spreadValues({}, DEFAULT_HIGH_SCORES) });
      const parsed = JSON.parse(raw);
      return __spreadProps(__spreadValues(__spreadValues({}, DEFAULT_SAVE), parsed), {
        highScores: __spreadValues(__spreadValues({}, DEFAULT_HIGH_SCORES), parsed.highScores ?? {})
      });
    } catch {
      return __spreadProps(__spreadValues({}, DEFAULT_SAVE), { highScores: __spreadValues({}, DEFAULT_HIGH_SCORES) });
    }
  }
};
_SaveProgressService.\u0275fac = function SaveProgressService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SaveProgressService)();
};
_SaveProgressService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SaveProgressService, factory: _SaveProgressService.\u0275fac, providedIn: "root" });
var SaveProgressService = _SaveProgressService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveProgressService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SaveProgressService
};
//# sourceMappingURL=chunk-TNBBNTNJ.js.map
