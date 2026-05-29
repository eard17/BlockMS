import {
  SKINS_CATALOG
} from "./chunk-ZF7BTS2H.js";
import {
  SettingsService
} from "./chunk-MRZ2SKTP.js";
import {
  SaveProgressService
} from "./chunk-WCWHQ4VL.js";
import {
  AlertController,
  CommonModule,
  Component,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
  Router,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-S6JIF2OI.js";
import "./chunk-7R2BI4JM.js";
import "./chunk-ZANXXOCD.js";
import "./chunk-4NMFU3W6.js";
import "./chunk-3SMUFDO7.js";
import "./chunk-FTLLAM4J.js";
import "./chunk-D4MZ4YTG.js";
import "./chunk-6GY55RSK.js";
import "./chunk-7D2IXJO2.js";
import "./chunk-FZZSIR43.js";
import "./chunk-X4NBNE3H.js";
import "./chunk-U6ZKHTY7.js";
import "./chunk-NMVUKZ3A.js";
import "./chunk-YAS4LRVC.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// src/app/pages/settings/settings.page.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.hsl;
function SettingsPageComponent_Conditional_46_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 20);
    \u0275\u0275listener("click", function SettingsPageComponent_Conditional_46_Conditional_3_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onClearPin());
    });
    \u0275\u0275text(1, " Eliminar PIN ");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-button", 18);
    \u0275\u0275listener("click", function SettingsPageComponent_Conditional_46_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onShowPinForm());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SettingsPageComponent_Conditional_46_Conditional_3_Template, 2, 0, "ion-button", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.hasPin() ? "Cambiar PIN" : "Establecer PIN", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasPin() ? 3 : -1);
  }
}
function SettingsPageComponent_Conditional_47_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pinError());
  }
}
function SettingsPageComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 11)(1, "div", 21)(2, "ion-input", 22);
    \u0275\u0275listener("ionInput", function SettingsPageComponent_Conditional_47_Template_ion_input_ionInput_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pinInput.set($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, SettingsPageComponent_Conditional_47_Conditional_3_Template, 2, 1, "p", 23);
    \u0275\u0275elementStart(4, "div", 24)(5, "ion-button", 25);
    \u0275\u0275listener("click", function SettingsPageComponent_Conditional_47_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSavePin());
    });
    \u0275\u0275text(6, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 26);
    \u0275\u0275listener("click", function SettingsPageComponent_Conditional_47_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancelPin());
    });
    \u0275\u0275text(8, "Cancelar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.pinInput());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pinError() ? 3 : -1);
  }
}
function SettingsPageComponent_For_60_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 37);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275styleProp("background", c_r5.hsl);
  }
}
function SettingsPageComponent_For_60_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skin_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", skin_r6.starCost, " \u2B50");
  }
}
function SettingsPageComponent_For_60_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "Gratis");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_For_60_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-button", 33);
    \u0275\u0275text(1, "Activa \u2713");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_For_60_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 38);
    \u0275\u0275listener("click", function SettingsPageComponent_For_60_Conditional_9_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const skin_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActivateSkin(skin_r6.id));
    });
    \u0275\u0275text(1, "Activar");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_For_60_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 25);
    \u0275\u0275listener("click", function SettingsPageComponent_For_60_Conditional_10_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const skin_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onUnlockSkin(skin_r6.id, skin_r6.starCost));
    });
    \u0275\u0275text(1, "Desbloquear");
    \u0275\u0275elementEnd();
  }
}
function SettingsPageComponent_For_60_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-button", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skin_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u{1F512} ", skin_r6.starCost, " \u2B50 ");
  }
}
function SettingsPageComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275repeaterCreate(2, SettingsPageComponent_For_60_For_3_Template, 1, 2, "div", 29, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SettingsPageComponent_For_60_Conditional_6_Template, 2, 1, "span", 31)(7, SettingsPageComponent_For_60_Conditional_7_Template, 2, 0, "span", 32);
    \u0275\u0275conditionalCreate(8, SettingsPageComponent_For_60_Conditional_8_Template, 2, 0, "ion-button", 33)(9, SettingsPageComponent_For_60_Conditional_9_Template, 2, 0, "ion-button", 34)(10, SettingsPageComponent_For_60_Conditional_10_Template, 2, 0, "ion-button", 35)(11, SettingsPageComponent_For_60_Conditional_11_Template, 2, 1, "ion-button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skin_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("skin-card--active", ctx_r1.activeSkinId() === skin_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(skin_r6.colors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skin_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(skin_r6.starCost > 0 ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.activeSkinId() === skin_r6.id ? 8 : ctx_r1.unlockedSkins().includes(skin_r6.id) ? 9 : ctx_r1.availableStars() >= skin_r6.starCost ? 10 : 11);
  }
}
var _SettingsPageComponent = class _SettingsPageComponent {
  constructor() {
    this.settings = inject(SettingsService);
    this.save = inject(SaveProgressService);
    this.alertCtrl = inject(AlertController);
    this.router = inject(Router);
    this.skinsCatalog = SKINS_CATALOG;
    this.showPinForm = signal(false, ...ngDevMode ? [{ debugName: "showPinForm" }] : []);
    this.pinInput = signal("", ...ngDevMode ? [{ debugName: "pinInput" }] : []);
    this.pinError = signal(null, ...ngDevMode ? [{ debugName: "pinError" }] : []);
    this.hasPin = computed(() => this.settings.settings().childLockPin !== null, ...ngDevMode ? [{ debugName: "hasPin" }] : []);
    this.activeSkinId = computed(() => this.save.progress().activeSkin, ...ngDevMode ? [{ debugName: "activeSkinId" }] : []);
    this.unlockedSkins = computed(() => this.save.progress().unlockedSkins, ...ngDevMode ? [{ debugName: "unlockedSkins" }] : []);
    this.availableStars = computed(() => this.save.progress().completedStarsCount, ...ngDevMode ? [{ debugName: "availableStars" }] : []);
  }
  onMusicVolumeChange(e) {
    this.settings.setMusicVolume(e.detail.value);
  }
  onSfxVolumeChange(e) {
    this.settings.setSfxVolume(e.detail.value);
  }
  onToggleSmilingFaces() {
    this.settings.toggleSmilingFaces();
  }
  onDifficultyChange(e) {
    this.settings.setDifficulty(e.detail.value);
  }
  onShowPinForm() {
    this.pinInput.set("");
    this.pinError.set(null);
    this.showPinForm.set(true);
  }
  onCancelPin() {
    this.showPinForm.set(false);
    this.pinInput.set("");
    this.pinError.set(null);
  }
  onClearPin() {
    this.settings.clearPin();
  }
  onSavePin() {
    const pin = this.pinInput().trim();
    if (/^\d{4}$/.test(pin)) {
      this.settings.setPin(pin);
      this.showPinForm.set(false);
      this.pinInput.set("");
      this.pinError.set(null);
    } else {
      this.pinError.set("El PIN debe ser exactamente 4 d\xEDgitos num\xE9ricos.");
    }
  }
  onUnlockSkin(id, cost) {
    this.save.unlockSkin(id, cost);
  }
  onActivateSkin(id) {
    this.save.setActiveSkin(id);
  }
  onResetRecord() {
    return __async(this, null, function* () {
      const alert = yield this.alertCtrl.create({
        header: "Confirmar",
        message: "\xBFRestablecer todos los r\xE9cords? Esta acci\xF3n no se puede deshacer.",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          { text: "Restablecer", role: "destructive", handler: () => this.save.resetHighScores() }
        ]
      });
      yield alert.present();
    });
  }
};
_SettingsPageComponent.\u0275fac = function SettingsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsPageComponent)();
};
_SettingsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPageComponent, selectors: [["app-settings-page"]], decls: 68, vars: 13, consts: [["slot", "start"], ["defaultHref", "/home"], [1, "settings-content"], [1, "settings-section"], [1, "settings-section__header"], ["slot", "end", 1, "settings-range", 3, "ionChange", "min", "max", "step", "value"], ["slot", "end", 3, "ionChange", "checked"], ["slot", "end", 3, "ionChange", "value"], ["value", "easy"], ["value", "medium"], ["value", "hard"], [1, "pin-form"], [1, "skins-stars-item"], [1, "skins-grid"], [1, "skin-card", 3, "skin-card--active"], [1, "settings-section", "settings-section--danger"], [1, "settings-section__header", "settings-section__header--danger"], ["expand", "block", "fill", "outline", "color", "danger", 1, "danger-btn", 3, "click"], ["fill", "outline", "size", "small", 3, "click"], ["fill", "clear", "color", "danger", "size", "small", 1, "pin-clear-btn"], ["fill", "clear", "color", "danger", "size", "small", 1, "pin-clear-btn", 3, "click"], [1, "pin-form__body"], ["type", "password", "inputmode", "numeric", "placeholder", "4 d\xEDgitos", "maxlength", "4", 1, "pin-form__input", 3, "ionInput", "value"], [1, "pin-form__error"], [1, "pin-form__actions"], ["size", "small", 3, "click"], ["size", "small", "fill", "outline", "color", "medium", 3, "click"], [1, "skin-card"], [1, "skin-card__palette"], [1, "skin-card__swatch", 3, "background"], [1, "skin-card__name"], [1, "skin-card__cost"], [1, "skin-card__cost", "skin-card__cost--free"], ["size", "small", "fill", "solid", "color", "success", "disabled", ""], ["size", "small", "fill", "outline"], ["size", "small"], ["size", "small", "fill", "outline", "color", "medium", "disabled", ""], [1, "skin-card__swatch"], ["size", "small", "fill", "outline", 3, "click"]], template: function SettingsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
    \u0275\u0275element(3, "ion-back-button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "Configuraci\xF3n");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content", 2)(7, "ion-list", 3)(8, "ion-list-header", 4)(9, "ion-label");
    \u0275\u0275text(10, "\u{1F3B5} Audio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-item")(12, "ion-label");
    \u0275\u0275text(13, "M\xFAsica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-range", 5);
    \u0275\u0275listener("ionChange", function SettingsPageComponent_Template_ion_range_ionChange_14_listener($event) {
      return ctx.onMusicVolumeChange($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-item")(16, "ion-label");
    \u0275\u0275text(17, "Efectos de sonido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-range", 5);
    \u0275\u0275listener("ionChange", function SettingsPageComponent_Template_ion_range_ionChange_18_listener($event) {
      return ctx.onSfxVolumeChange($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "ion-list", 3)(20, "ion-list-header", 4)(21, "ion-label");
    \u0275\u0275text(22, "\u{1F3AE} Gameplay");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-item")(24, "ion-label");
    \u0275\u0275text(25, "Caritas sonrientes en piezas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-toggle", 6);
    \u0275\u0275listener("ionChange", function SettingsPageComponent_Template_ion_toggle_ionChange_26_listener() {
      return ctx.onToggleSmilingFaces();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-item")(28, "ion-label");
    \u0275\u0275text(29, "Dificultad (Cl\xE1sico)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-select", 7);
    \u0275\u0275listener("ionChange", function SettingsPageComponent_Template_ion_select_ionChange_30_listener($event) {
      return ctx.onDifficultyChange($event);
    });
    \u0275\u0275elementStart(31, "ion-select-option", 8);
    \u0275\u0275text(32, "F\xE1cil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "ion-select-option", 9);
    \u0275\u0275text(34, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ion-select-option", 10);
    \u0275\u0275text(36, "Dif\xEDcil");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "ion-list", 3)(38, "ion-list-header", 4)(39, "ion-label");
    \u0275\u0275text(40, "\u{1F512} Control Parental");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ion-item")(42, "ion-label");
    \u0275\u0275text(43, "PIN activo: ");
    \u0275\u0275elementStart(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(46, SettingsPageComponent_Conditional_46_Template, 4, 2, "ion-item")(47, SettingsPageComponent_Conditional_47_Template, 9, 2, "ion-item", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ion-list", 3)(49, "ion-list-header", 4)(50, "ion-label");
    \u0275\u0275text(51, "\u{1F3A8} Apariencia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "ion-item", 12)(53, "ion-label");
    \u0275\u0275text(54, "\u2B50 ");
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, " estrellas disponibles");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 13);
    \u0275\u0275repeaterCreate(59, SettingsPageComponent_For_60_Template, 12, 5, "div", 14, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "ion-list", 15)(62, "ion-list-header", 16)(63, "ion-label");
    \u0275\u0275text(64, "\u26A0\uFE0F Zona de Peligro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "ion-item")(66, "ion-button", 17);
    \u0275\u0275listener("click", function SettingsPageComponent_Template_ion_button_click_66_listener() {
      return ctx.onResetRecord();
    });
    \u0275\u0275text(67, " Restablecer R\xE9cords ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("min", 0)("max", 1)("step", 0.05)("value", ctx.settings.settings().musicVolume);
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("max", 1)("step", 0.05)("value", ctx.settings.settings().sfxVolume);
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", ctx.settings.settings().smilingFacesEnabled);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.settings.settings().difficulty);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(ctx.hasPin() ? "S\xCD" : "NO");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.showPinForm() ? 46 : 47);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.availableStars());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.skinsCatalog);
  }
}, dependencies: [
  CommonModule,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRange,
  IonToggle,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption
], styles: ["\n\n.settings-content[_ngcontent-%COMP%] {\n  --background:var(--color-background,#0d1117);\n  --padding-bottom:calc(var(--ion-safe-area-bottom,env(safe-area-inset-bottom,0px)) + 2.5rem);\n}\n.settings-section[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-bottom: 1.5rem;\n}\n.settings-section__header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem !important;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: var(--color-text-secondary, #5973a6) !important;\n  text-transform: uppercase;\n}\n.settings-section--danger[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.settings-section__header--danger[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: #eb5547 !important;\n}\n.settings-range[_ngcontent-%COMP%] {\n  max-width: 180px;\n}\n.pin-clear-btn[_ngcontent-%COMP%] {\n  margin-inline-start: 0.5rem;\n}\n.pin-form[_ngcontent-%COMP%] {\n  --inner-padding-top:.75rem;\n  --inner-padding-bottom:.75rem;\n}\n.pin-form__body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.pin-form__input[_ngcontent-%COMP%] {\n  --background:hsl(220,20%,18%);\n  --border-radius:.5rem;\n  --padding-start:.75rem;\n  border: 1px solid hsl(220, 15%, 30%);\n  border-radius: 0.5rem;\n}\n.pin-form__error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #eb5547;\n}\n.pin-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.skins-stars-item[_ngcontent-%COMP%] {\n  --background:transparent;\n}\n.skins-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem 1rem 1rem;\n}\n.skin-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.85rem 0.6rem;\n  background: #1d212b;\n  border: 1px solid hsl(220, 15%, 25%);\n  border-radius: 1rem;\n  transition: border-color 0.2s;\n}\n.skin-card--active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary, #5ed5ed);\n  background: #252b37;\n}\n.skin-card__palette[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.skin-card__swatch[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.skin-card__name[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--color-text-primary, #d6ebff);\n}\n.skin-card__cost[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #ebc247;\n}\n.skin-card__cost--free[_ngcontent-%COMP%] {\n  color: #47d18c;\n}\n.danger-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=settings.page.css.map */"] });
var SettingsPageComponent = _SettingsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPageComponent, [{
    type: Component,
    args: [{ selector: "app-settings-page", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonBackButton,
      IonList,
      IonListHeader,
      IonLabel,
      IonItem,
      IonRange,
      IonToggle,
      IonButton,
      IonInput,
      IonSelect,
      IonSelectOption
    ], template: `<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons>
    <ion-title>Configuraci\xF3n</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="settings-content">

  <!-- Audio -->
  <ion-list class="settings-section">
    <ion-list-header class="settings-section__header"><ion-label>\u{1F3B5} Audio</ion-label></ion-list-header>
    <ion-item>
      <ion-label>M\xFAsica</ion-label>
      <ion-range slot="end" class="settings-range" [min]="0" [max]="1" [step]="0.05"
        [value]="settings.settings().musicVolume" (ionChange)="onMusicVolumeChange($event)"></ion-range>
    </ion-item>
    <ion-item>
      <ion-label>Efectos de sonido</ion-label>
      <ion-range slot="end" class="settings-range" [min]="0" [max]="1" [step]="0.05"
        [value]="settings.settings().sfxVolume" (ionChange)="onSfxVolumeChange($event)"></ion-range>
    </ion-item>
  </ion-list>

  <!-- Gameplay -->
  <ion-list class="settings-section">
    <ion-list-header class="settings-section__header"><ion-label>\u{1F3AE} Gameplay</ion-label></ion-list-header>
    <ion-item>
      <ion-label>Caritas sonrientes en piezas</ion-label>
      <ion-toggle slot="end" [checked]="settings.settings().smilingFacesEnabled"
        (ionChange)="onToggleSmilingFaces()"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>Dificultad (Cl\xE1sico)</ion-label>
      <ion-select slot="end" [value]="settings.settings().difficulty" (ionChange)="onDifficultyChange($event)">
        <ion-select-option value="easy">F\xE1cil</ion-select-option>
        <ion-select-option value="medium">Media</ion-select-option>
        <ion-select-option value="hard">Dif\xEDcil</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>

  <!-- Parental control -->
  <ion-list class="settings-section">
    <ion-list-header class="settings-section__header"><ion-label>\u{1F512} Control Parental</ion-label></ion-list-header>
    <ion-item>
      <ion-label>PIN activo: <strong>{{ hasPin() ? 'S\xCD' : 'NO' }}</strong></ion-label>
    </ion-item>
    @if (!showPinForm()) {
      <ion-item>
        <ion-button fill="outline" size="small" (click)="onShowPinForm()">
          {{ hasPin() ? 'Cambiar PIN' : 'Establecer PIN' }}
        </ion-button>
        @if (hasPin()) {
          <ion-button fill="clear" color="danger" size="small" class="pin-clear-btn" (click)="onClearPin()">
            Eliminar PIN
          </ion-button>
        }
      </ion-item>
    } @else {
      <ion-item class="pin-form">
        <div class="pin-form__body">
          <ion-input type="password" inputmode="numeric" placeholder="4 d\xEDgitos" maxlength="4"
            class="pin-form__input" [value]="pinInput()"
            (ionInput)="pinInput.set($any($event).target.value)"></ion-input>
          @if (pinError()) {
            <p class="pin-form__error">{{ pinError() }}</p>
          }
          <div class="pin-form__actions">
            <ion-button size="small" (click)="onSavePin()">Guardar</ion-button>
            <ion-button size="small" fill="outline" color="medium" (click)="onCancelPin()">Cancelar</ion-button>
          </div>
        </div>
      </ion-item>
    }
  </ion-list>

  <!-- Skins -->
  <ion-list class="settings-section">
    <ion-list-header class="settings-section__header"><ion-label>\u{1F3A8} Apariencia</ion-label></ion-list-header>
    <ion-item class="skins-stars-item">
      <ion-label>\u2B50 <strong>{{ availableStars() }}</strong> estrellas disponibles</ion-label>
    </ion-item>
    <div class="skins-grid">
      @for (skin of skinsCatalog; track skin.id) {
        <div class="skin-card" [class.skin-card--active]="activeSkinId() === skin.id">
          <div class="skin-card__palette">
            @for (c of skin.colors; track c.hsl) {
              <div class="skin-card__swatch" [style.background]="c.hsl"></div>
            }
          </div>
          <span class="skin-card__name">{{ skin.name }}</span>
          @if (skin.starCost > 0) {
            <span class="skin-card__cost">{{ skin.starCost }} \u2B50</span>
          } @else {
            <span class="skin-card__cost skin-card__cost--free">Gratis</span>
          }
          @if (activeSkinId() === skin.id) {
            <ion-button size="small" fill="solid" color="success" disabled>Activa \u2713</ion-button>
          } @else if (unlockedSkins().includes(skin.id)) {
            <ion-button size="small" fill="outline" (click)="onActivateSkin(skin.id)">Activar</ion-button>
          } @else if (availableStars() >= skin.starCost) {
            <ion-button size="small" (click)="onUnlockSkin(skin.id, skin.starCost)">Desbloquear</ion-button>
          } @else {
            <ion-button size="small" fill="outline" color="medium" disabled>
              \u{1F512} {{ skin.starCost }} \u2B50
            </ion-button>
          }
        </div>
      }
    </div>
  </ion-list>

  <!-- Danger zone -->
  <ion-list class="settings-section settings-section--danger">
    <ion-list-header class="settings-section__header settings-section__header--danger">
      <ion-label>\u26A0\uFE0F Zona de Peligro</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-button expand="block" fill="outline" color="danger" class="danger-btn" (click)="onResetRecord()">
        Restablecer R\xE9cords
      </ion-button>
    </ion-item>
  </ion-list>

</ion-content>
`, styles: ["/* src/app/pages/settings/settings.page.scss */\n.settings-content {\n  --background:var(--color-background,#0d1117);\n  --padding-bottom:calc(var(--ion-safe-area-bottom,env(safe-area-inset-bottom,0px)) + 2.5rem);\n}\n.settings-section {\n  background: transparent;\n  margin-bottom: 1.5rem;\n}\n.settings-section__header ion-label {\n  font-size: 0.75rem !important;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  color: var(--color-text-secondary, #5973a6) !important;\n  text-transform: uppercase;\n}\n.settings-section--danger {\n  margin-top: 1rem;\n}\n.settings-section__header--danger ion-label {\n  color: #eb5547 !important;\n}\n.settings-range {\n  max-width: 180px;\n}\n.pin-clear-btn {\n  margin-inline-start: 0.5rem;\n}\n.pin-form {\n  --inner-padding-top:.75rem;\n  --inner-padding-bottom:.75rem;\n}\n.pin-form__body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.pin-form__input {\n  --background:hsl(220,20%,18%);\n  --border-radius:.5rem;\n  --padding-start:.75rem;\n  border: 1px solid hsl(220, 15%, 30%);\n  border-radius: 0.5rem;\n}\n.pin-form__error {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #eb5547;\n}\n.pin-form__actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.skins-stars-item {\n  --background:transparent;\n}\n.skins-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 0.75rem;\n  padding: 0.75rem 1rem 1rem;\n}\n.skin-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.85rem 0.6rem;\n  background: #1d212b;\n  border: 1px solid hsl(220, 15%, 25%);\n  border-radius: 1rem;\n  transition: border-color 0.2s;\n}\n.skin-card--active {\n  border-color: var(--ion-color-primary, #5ed5ed);\n  background: #252b37;\n}\n.skin-card__palette {\n  display: flex;\n  gap: 4px;\n}\n.skin-card__swatch {\n  width: 18px;\n  height: 18px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.skin-card__name {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--color-text-primary, #d6ebff);\n}\n.skin-card__cost {\n  font-size: 0.7rem;\n  color: #ebc247;\n}\n.skin-card__cost--free {\n  color: #47d18c;\n}\n.danger-btn {\n  width: 100%;\n}\n/*# sourceMappingURL=settings.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPageComponent, { className: "SettingsPageComponent", filePath: "src/app/pages/settings/settings.page.ts", lineNumber: 20 });
})();
export {
  SettingsPageComponent
};
//# sourceMappingURL=settings.page-NDGBSUDF.js.map
