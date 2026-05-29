import {
  Injectable,
  computed,
  effect,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-J2YUU2QC.js";

// src/app/services/theme.ts
var STORAGE_KEY = "bms_theme";
var DARK_CLASS = "ion-palette-dark";
var _ThemeService = class _ThemeService {
  constructor() {
    this.mq = window.matchMedia("(prefers-color-scheme: dark)");
    this._preference = signal(localStorage.getItem(STORAGE_KEY) ?? "system", ...ngDevMode ? [{ debugName: "_preference" }] : []);
    this.preference = this._preference.asReadonly();
    this.isDark = computed(() => {
      const p = this._preference();
      if (p === "dark")
        return true;
      if (p === "light")
        return false;
      return this.mq.matches;
    }, ...ngDevMode ? [{ debugName: "isDark" }] : []);
    effect(() => this.applyToDOM(this.isDark()));
    this.mq.addEventListener("change", () => {
      if (this._preference() === "system")
        this.applyToDOM(this.mq.matches);
    });
  }
  set(preference) {
    this._preference.set(preference);
    localStorage.setItem(STORAGE_KEY, preference);
  }
  applyToDOM(dark) {
    document.documentElement.classList.toggle(DARK_CLASS, dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }
};
_ThemeService.\u0275fac = function ThemeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeService)();
};
_ThemeService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
var ThemeService = _ThemeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  ThemeService
};
//# sourceMappingURL=chunk-TAHALNNJ.js.map
