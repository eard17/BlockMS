import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-S6JIF2OI.js";
import {
  __spreadValues
} from "./chunk-5K356HEJ.js";

// src/app/services/settings.ts
var STORAGE_KEY = "bms_settings_v1";
var DEFAULTS = {
  musicVolume: 0.7,
  sfxVolume: 0.8,
  smilingFacesEnabled: true,
  childLockPin: null,
  difficulty: "medium"
};
var _SettingsService = class _SettingsService {
  constructor() {
    this._settings = signal(this.load(), ...ngDevMode ? [{ debugName: "_settings" }] : []);
    this.settings = this._settings.asReadonly();
  }
  setMusicVolume(v) {
    this.patch({ musicVolume: v });
  }
  setSfxVolume(v) {
    this.patch({ sfxVolume: v });
  }
  toggleSmilingFaces() {
    this.patch({ smilingFacesEnabled: !this._settings().smilingFacesEnabled });
  }
  setPin(pin) {
    this.patch({ childLockPin: pin });
  }
  clearPin() {
    this.patch({ childLockPin: null });
  }
  setDifficulty(d) {
    this.patch({ difficulty: d });
  }
  patch(partial) {
    const next = __spreadValues(__spreadValues({}, this._settings()), partial);
    this._settings.set(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
    }
  }
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw)
        return __spreadValues({}, DEFAULTS);
      return __spreadValues(__spreadValues({}, DEFAULTS), JSON.parse(raw));
    } catch {
      return __spreadValues({}, DEFAULTS);
    }
  }
};
_SettingsService.\u0275fac = function SettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsService)();
};
_SettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
var SettingsService = _SettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  SettingsService
};
//# sourceMappingURL=chunk-MRZ2SKTP.js.map
