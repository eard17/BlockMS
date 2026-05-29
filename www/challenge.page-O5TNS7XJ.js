import {
  SyncService
} from "./chunk-TVPQJG2C.js";
import {
  GameStateService
} from "./chunk-EHMPXUI6.js";
import "./chunk-GI5KRBG6.js";
import {
  SaveProgressService
} from "./chunk-LI3CZENV.js";
import {
  addIcons,
  arrowBackOutline
} from "./chunk-BTWVIJVU.js";
import {
  CommonModule,
  Component,
  Injectable,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonTitle,
  IonToolbar,
  NavController,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-J2YUU2QC.js";
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// src/app/services/challenge-codec.ts
var PREFIX = "BMS";
var _ChallengeCodecService = class _ChallengeCodecService {
  encodeChallenge(seed, targetScore, creatorName) {
    const s = seed.toLowerCase();
    const t = targetScore.toString(36).toLowerCase();
    const n = btoa(encodeURIComponent(creatorName));
    return [PREFIX, s, t, n].join("-");
  }
  decodeChallenge(code) {
    const parts = code.split("-");
    if (parts.length < 4 || parts[0] !== PREFIX)
      throw new Error(`C\xF3digo de reto inv\xE1lido: "${code}"`);
    const [, seed, scoreB36, nameB64] = parts;
    return {
      seed,
      targetScore: parseInt(scoreB36, 36),
      creatorName: decodeURIComponent(atob(nameB64))
    };
  }
};
_ChallengeCodecService.\u0275fac = function ChallengeCodecService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChallengeCodecService)();
};
_ChallengeCodecService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChallengeCodecService, factory: _ChallengeCodecService.\u0275fac, providedIn: "root" });
var ChallengeCodecService = _ChallengeCodecService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChallengeCodecService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/challenge/challenge.page.ts
var _forTrack0 = ($index, $item) => $item.username;
function ChallengePageComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.validationErr());
  }
}
function ChallengePageComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3, "Creador");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "span", 16);
    \u0275\u0275text(8, "Puntuaci\xF3n objetivo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-button", 19);
    \u0275\u0275listener("click", function ChallengePageComponent_Conditional_18_Template_ion_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPlayChallenge());
    });
    \u0275\u0275text(12, "\u25B6 Jugar este Reto");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r3 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r3.creatorName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", d_r3.targetScore.toLocaleString(), " ");
  }
}
function ChallengePageComponent_Conditional_19_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 22)(1, "span", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    const \u0275$index_74_r6 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_74_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r5.score.toLocaleString());
  }
}
function ChallengePageComponent_Conditional_19_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 21);
    \u0275\u0275repeaterCreate(1, ChallengePageComponent_Conditional_19_Conditional_8_For_2_Template, 7, 3, "li", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.ranking());
  }
}
function ChallengePageComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 12);
    \u0275\u0275elementStart(1, "section", 4)(2, "h2", 5);
    \u0275\u0275text(3, "\u{1F310} Ranking Online");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 6);
    \u0275\u0275text(5, "Participantes que jugaron este reto.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-button", 20);
    \u0275\u0275listener("click", function ChallengePageComponent_Conditional_19_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLoadRanking());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ChallengePageComponent_Conditional_19_Conditional_8_Template, 3, 0, "ol", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.rankingLoading() ? "Cargando\u2026" : "Ver ranking", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ranking().length > 0 ? 8 : -1);
  }
}
function ChallengePageComponent_Conditional_24_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "code", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-button", 34);
    \u0275\u0275listener("click", function ChallengePageComponent_Conditional_24_Conditional_16_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCopy());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.generatedCode());
    \u0275\u0275advance();
    \u0275\u0275property("fill", ctx_r0.copied() ? "solid" : "outline")("color", ctx_r0.copied() ? "success" : "primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.copied() ? "\u2713 Copiado" : "\u{1F4CB} Copiar");
  }
}
function ChallengePageComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "p", 6);
    \u0275\u0275text(2, "Comparte tu r\xE9cord y reta a otros jugadores.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "span", 27);
    \u0275\u0275text(5, "Semilla de sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "span", 27);
    \u0275\u0275text(10, "Tu r\xE9cord");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-input", 30);
    \u0275\u0275listener("ionInput", function ChallengePageComponent_Conditional_24_Template_ion_input_ionInput_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCreatorNameInput($event.target.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-button", 31);
    \u0275\u0275listener("click", function ChallengePageComponent_Conditional_24_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onGenerateCode());
    });
    \u0275\u0275text(15, "Generar C\xF3digo BMS");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ChallengePageComponent_Conditional_24_Conditional_16_Template, 5, 4, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r0.gameState.sessionSeed() || "\u2014", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.save.progress().highScores["classic"].toLocaleString(), " pts");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.creatorName());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.generatedCode() ? 16 : -1);
  }
}
function ChallengePageComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1, " Juega una partida en Modo Cl\xE1sico para generar tu primer reto. ");
    \u0275\u0275elementEnd();
  }
}
var CODE_RE = /^BMS-[a-z0-9]+-[a-z0-9]+-[a-zA-Z0-9+/]+=*$/;
var _ChallengePageComponent = class _ChallengePageComponent {
  constructor() {
    this.codec = inject(ChallengeCodecService);
    this.sync = inject(SyncService);
    this.save = inject(SaveProgressService);
    this.gameState = inject(GameStateService);
    this.nav = inject(NavController);
    this.codeInput = signal("", ...ngDevMode ? [{ debugName: "codeInput" }] : []);
    this.validationErr = signal(null, ...ngDevMode ? [{ debugName: "validationErr" }] : []);
    this.decoded = signal(null, ...ngDevMode ? [{ debugName: "decoded" }] : []);
    this.ranking = signal([], ...ngDevMode ? [{ debugName: "ranking" }] : []);
    this.rankingLoading = signal(false, ...ngDevMode ? [{ debugName: "rankingLoading" }] : []);
    this.creatorName = signal("", ...ngDevMode ? [{ debugName: "creatorName" }] : []);
    this.generatedCode = signal(null, ...ngDevMode ? [{ debugName: "generatedCode" }] : []);
    this.copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : []);
    this.canGenerate = computed(() => this.save.progress().highScores["classic"] > 0, ...ngDevMode ? [{ debugName: "canGenerate" }] : []);
    addIcons({ arrowBackOutline });
  }
  goBack() {
    this.nav.back();
  }
  onCodeInput(v) {
    this.codeInput.set(v);
    this.decoded.set(null);
    this.validationErr.set(null);
  }
  onValidateCode() {
    const code = this.codeInput().trim();
    if (!CODE_RE.test(code)) {
      this.validationErr.set("C\xF3digo inv\xE1lido. Aseg\xFArate de copiarlo completo.");
      return;
    }
    try {
      const d = this.codec.decodeChallenge(code);
      const score = Math.max(0, Math.min(1e6, d.targetScore));
      if (!isFinite(score)) {
        this.validationErr.set("El c\xF3digo contiene una puntuaci\xF3n inv\xE1lida.");
        return;
      }
      const name = d.creatorName.replace(/[<>&"']/g, "").substring(0, 8);
      this.decoded.set(__spreadProps(__spreadValues({}, d), { targetScore: score, creatorName: name }));
      this.validationErr.set(null);
    } catch {
      this.validationErr.set("No se pudo leer el c\xF3digo. Verifica que est\xE9 completo.");
    }
  }
  onPlayChallenge() {
    const d = this.decoded();
    if (!d)
      return;
    this.nav.navigateForward("/game", { state: { challengeSeed: d.seed, targetScore: d.targetScore } });
  }
  onLoadRanking() {
    return __async(this, null, function* () {
      const code = this.codeInput().trim();
      if (!code)
        return;
      this.rankingLoading.set(true);
      this.ranking.set(yield this.sync.fetchChallengeRanking(code));
      this.rankingLoading.set(false);
    });
  }
  onCreatorNameInput(v) {
    this.creatorName.set(v.replace(/[<>&"']/g, "").substring(0, 8));
    this.generatedCode.set(null);
  }
  onGenerateCode() {
    const name = this.creatorName().trim() || "An\xF3n";
    const seed = this.gameState.sessionSeed();
    const score = this.save.progress().highScores["classic"];
    this.generatedCode.set(this.codec.encodeChallenge(seed, score, name));
    this.copied.set(false);
  }
  onCopy() {
    return __async(this, null, function* () {
      const code = this.generatedCode();
      if (!code)
        return;
      yield navigator.clipboard.writeText(code);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2e3);
    });
  }
};
_ChallengePageComponent.\u0275fac = function ChallengePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChallengePageComponent)();
};
_ChallengePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChallengePageComponent, selectors: [["app-challenge-page"]], decls: 26, vars: 5, consts: [["slot", "start"], [3, "click"], ["slot", "icon-only", "name", "arrow-back-outline"], [1, "challenge-content"], [1, "challenge-section"], [1, "challenge-section__title"], [1, "challenge-section__desc"], [1, "challenge-input-group"], ["placeholder", "BMS-abc123-7ps-SohnSm9z", "autocomplete", "off", "autocapitalize", "off", 1, "challenge-input", 3, "ionInput", "value"], ["expand", "block", 3, "click"], [1, "challenge-error"], ["role", "status", 1, "challenge-decoded-card"], [1, "challenge-divider"], [1, "challenge-generate"], [1, "challenge-section__desc", "challenge-section__desc--muted"], [1, "challenge-decoded-card__row"], [1, "challenge-decoded-card__label"], [1, "challenge-decoded-card__value"], [1, "challenge-decoded-card__value", "challenge-decoded-card__value--score"], ["expand", "block", "color", "primary", 1, "challenge-decoded-card__play-btn", 3, "click"], ["expand", "block", "fill", "outline", "size", "small", 3, "click"], [1, "challenge-ranking"], [1, "challenge-ranking__row"], [1, "challenge-ranking__pos"], [1, "challenge-ranking__name"], [1, "challenge-ranking__score"], [1, "challenge-generate__meta"], [1, "challenge-generate__label"], [1, "challenge-generate__value", "challenge-generate__value--seed"], [1, "challenge-generate__value"], ["placeholder", "Tu nombre (m\xE1x. 8 caracteres)", "maxlength", "8", "autocomplete", "off", 1, "challenge-input", 3, "ionInput", "value"], ["expand", "block", "fill", "outline", 3, "click"], [1, "challenge-code-card"], [1, "challenge-code-card__code"], ["size", "small", 3, "click", "fill", "color"]], template: function ChallengePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0)(3, "ion-button", 1);
    \u0275\u0275listener("click", function ChallengePageComponent_Template_ion_button_click_3_listener() {
      return ctx.goBack();
    });
    \u0275\u0275element(4, "ion-icon", 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-title");
    \u0275\u0275text(6, "Modo Duelo");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ion-content", 3)(8, "section", 4)(9, "h2", 5);
    \u0275\u0275text(10, "\u2694\uFE0F Jugar un Reto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 6);
    \u0275\u0275text(12, "Ingresa el c\xF3digo BMS que recibiste.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 7)(14, "ion-input", 8);
    \u0275\u0275listener("ionInput", function ChallengePageComponent_Template_ion_input_ionInput_14_listener($event) {
      return ctx.onCodeInput($event.target.value);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-button", 9);
    \u0275\u0275listener("click", function ChallengePageComponent_Template_ion_button_click_15_listener() {
      return ctx.onValidateCode();
    });
    \u0275\u0275text(16, "Verificar C\xF3digo");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, ChallengePageComponent_Conditional_17_Template, 2, 1, "p", 10);
    \u0275\u0275conditionalCreate(18, ChallengePageComponent_Conditional_18_Template, 13, 2, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ChallengePageComponent_Conditional_19_Template, 9, 2);
    \u0275\u0275element(20, "div", 12);
    \u0275\u0275elementStart(21, "section", 4)(22, "h2", 5);
    \u0275\u0275text(23, "\u{1F3C6} Generar Tu Reto");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, ChallengePageComponent_Conditional_24_Template, 17, 4, "div", 13)(25, ChallengePageComponent_Conditional_25_Template, 2, 0, "p", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(14);
    \u0275\u0275property("value", ctx.codeInput());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.validationErr() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.decoded()) ? 18 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.decoded() ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.canGenerate() ? 24 : 25);
  }
}, dependencies: [
  CommonModule,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonIcon,
  IonButton,
  IonInput
], styles: ["\n\n.challenge-content[_ngcontent-%COMP%] {\n  --background:var(--color-background,#0d1117);\n  --padding-start:1.25rem;\n  --padding-end:1.25rem;\n  --padding-top:1.25rem;\n  --padding-bottom:2rem;\n}\n.challenge-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.challenge-section__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #d6ebff;\n}\n.challenge-section__desc[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 0.82rem;\n  color: #8899bb;\n}\n.challenge-section__desc--muted[_ngcontent-%COMP%] {\n  color: #576175;\n  font-style: italic;\n}\n.challenge-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #303541;\n  margin: 1.5rem 0;\n}\n.challenge-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.challenge-input[_ngcontent-%COMP%] {\n  --background:hsl(220,20%,14%);\n  --border-radius:.75rem;\n  --padding-start:1rem;\n  --color:#d6ebff;\n  border: 1px solid hsl(220, 15%, 28%);\n  border-radius: 0.75rem;\n  font-size: 0.85rem;\n}\n.challenge-error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: #eb5547;\n}\n.challenge-decoded-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #1b1f28;\n  border: 1px solid hsla(150, 60%, 45%, 0.3);\n  border-radius: 1rem;\n  margin-top: 0.75rem;\n}\n.challenge-decoded-card__row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.challenge-decoded-card__label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8899bb;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.challenge-decoded-card__value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #d6ebff;\n}\n.challenge-decoded-card__value--score[_ngcontent-%COMP%] {\n  color: #52e099;\n  font-size: 1.1rem;\n}\n.challenge-decoded-card__play-btn[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.challenge-ranking[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.6rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.challenge-ranking__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.5rem 0.75rem;\n  background: #1b1f28;\n  border: 1px solid hsl(220, 15%, 22%);\n  border-radius: 0.6rem;\n}\n.challenge-ranking__pos[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #56698f;\n  min-width: 1.2rem;\n}\n.challenge-ranking__name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #d6ebff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.challenge-ranking__score[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #52e099;\n}\n.challenge-generate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.challenge-generate__meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid hsl(220, 15%, 20%);\n}\n.challenge-generate__label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8899bb;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.challenge-generate__value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #d6ebff;\n}\n.challenge-generate__value--seed[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #67cfe4;\n}\n.challenge-code-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #181d25;\n  border: 1px solid hsla(45, 80%, 55%, 0.25);\n  border-radius: 0.75rem;\n}\n.challenge-code-card__code[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: clamp(0.65rem, 2vw, 0.75rem);\n  color: #edc95e;\n  word-break: break-all;\n  flex: 1;\n  min-width: 0;\n}\n/*# sourceMappingURL=challenge.page.css.map */"] });
var ChallengePageComponent = _ChallengePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChallengePageComponent, [{
    type: Component,
    args: [{ selector: "app-challenge-page", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonIcon,
      IonButton,
      IonInput
    ], template: `<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-button (click)="goBack()"><ion-icon slot="icon-only" name="arrow-back-outline"></ion-icon></ion-button>
    </ion-buttons>
    <ion-title>Modo Duelo</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="challenge-content">

  <section class="challenge-section">
    <h2 class="challenge-section__title">\u2694\uFE0F Jugar un Reto</h2>
    <p class="challenge-section__desc">Ingresa el c\xF3digo BMS que recibiste.</p>
    <div class="challenge-input-group">
      <ion-input placeholder="BMS-abc123-7ps-SohnSm9z" autocomplete="off" autocapitalize="off"
        class="challenge-input" [value]="codeInput()"
        (ionInput)="onCodeInput($any($event).target.value)"></ion-input>
      <ion-button expand="block" (click)="onValidateCode()">Verificar C\xF3digo</ion-button>
    </div>
    @if (validationErr()) {
      <p class="challenge-error">{{ validationErr() }}</p>
    }
    @if (decoded(); as d) {
      <div class="challenge-decoded-card" role="status">
        <div class="challenge-decoded-card__row">
          <span class="challenge-decoded-card__label">Creador</span>
          <span class="challenge-decoded-card__value">{{ d.creatorName || '\u2014' }}</span>
        </div>
        <div class="challenge-decoded-card__row">
          <span class="challenge-decoded-card__label">Puntuaci\xF3n objetivo</span>
          <span class="challenge-decoded-card__value challenge-decoded-card__value--score">
            {{ d.targetScore.toLocaleString() }}
          </span>
        </div>
        <ion-button expand="block" color="primary" class="challenge-decoded-card__play-btn"
          (click)="onPlayChallenge()">\u25B6 Jugar este Reto</ion-button>
      </div>
    }
  </section>

  @if (decoded()) {
    <div class="challenge-divider"></div>
    <section class="challenge-section">
      <h2 class="challenge-section__title">\u{1F310} Ranking Online</h2>
      <p class="challenge-section__desc">Participantes que jugaron este reto.</p>
      <ion-button expand="block" fill="outline" size="small" (click)="onLoadRanking()">
        {{ rankingLoading() ? 'Cargando\u2026' : 'Ver ranking' }}
      </ion-button>
      @if (ranking().length > 0) {
        <ol class="challenge-ranking">
          @for (entry of ranking(); track entry.username; let i = $index) {
            <li class="challenge-ranking__row">
              <span class="challenge-ranking__pos">{{ i + 1 }}</span>
              <span class="challenge-ranking__name">{{ entry.username }}</span>
              <span class="challenge-ranking__score">{{ entry.score.toLocaleString() }}</span>
            </li>
          }
        </ol>
      }
    </section>
  }

  <div class="challenge-divider"></div>

  <section class="challenge-section">
    <h2 class="challenge-section__title">\u{1F3C6} Generar Tu Reto</h2>
    @if (canGenerate()) {
      <div class="challenge-generate">
        <p class="challenge-section__desc">Comparte tu r\xE9cord y reta a otros jugadores.</p>
        <div class="challenge-generate__meta">
          <span class="challenge-generate__label">Semilla de sesi\xF3n</span>
          <span class="challenge-generate__value challenge-generate__value--seed">
            {{ gameState.sessionSeed() || '\u2014' }}
          </span>
        </div>
        <div class="challenge-generate__meta">
          <span class="challenge-generate__label">Tu r\xE9cord</span>
          <span class="challenge-generate__value">{{ save.progress().highScores['classic'].toLocaleString() }} pts</span>
        </div>
        <ion-input placeholder="Tu nombre (m\xE1x. 8 caracteres)" maxlength="8" autocomplete="off"
          class="challenge-input" [value]="creatorName()"
          (ionInput)="onCreatorNameInput($any($event).target.value)"></ion-input>
        <ion-button expand="block" fill="outline" (click)="onGenerateCode()">Generar C\xF3digo BMS</ion-button>
        @if (generatedCode()) {
          <div class="challenge-code-card">
            <code class="challenge-code-card__code">{{ generatedCode() }}</code>
            <ion-button size="small" [fill]="copied() ? 'solid' : 'outline'" [color]="copied() ? 'success' : 'primary'"
              (click)="onCopy()">{{ copied() ? '\u2713 Copiado' : '\u{1F4CB} Copiar' }}</ion-button>
          </div>
        }
      </div>
    } @else {
      <p class="challenge-section__desc challenge-section__desc--muted">
        Juega una partida en Modo Cl\xE1sico para generar tu primer reto.
      </p>
    }
  </section>

</ion-content>
`, styles: ["/* src/app/pages/challenge/challenge.page.scss */\n.challenge-content {\n  --background:var(--color-background,#0d1117);\n  --padding-start:1.25rem;\n  --padding-end:1.25rem;\n  --padding-top:1.25rem;\n  --padding-bottom:2rem;\n}\n.challenge-section {\n  margin-bottom: 1.25rem;\n}\n.challenge-section__title {\n  margin: 0 0 0.35rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #d6ebff;\n}\n.challenge-section__desc {\n  margin: 0 0 0.85rem;\n  font-size: 0.82rem;\n  color: #8899bb;\n}\n.challenge-section__desc--muted {\n  color: #576175;\n  font-style: italic;\n}\n.challenge-divider {\n  height: 1px;\n  background: #303541;\n  margin: 1.5rem 0;\n}\n.challenge-input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.challenge-input {\n  --background:hsl(220,20%,14%);\n  --border-radius:.75rem;\n  --padding-start:1rem;\n  --color:#d6ebff;\n  border: 1px solid hsl(220, 15%, 28%);\n  border-radius: 0.75rem;\n  font-size: 0.85rem;\n}\n.challenge-error {\n  margin: 0;\n  font-size: 0.78rem;\n  color: #eb5547;\n}\n.challenge-decoded-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 1rem;\n  background: #1b1f28;\n  border: 1px solid hsla(150, 60%, 45%, 0.3);\n  border-radius: 1rem;\n  margin-top: 0.75rem;\n}\n.challenge-decoded-card__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.challenge-decoded-card__label {\n  font-size: 0.72rem;\n  color: #8899bb;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.challenge-decoded-card__value {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #d6ebff;\n}\n.challenge-decoded-card__value--score {\n  color: #52e099;\n  font-size: 1.1rem;\n}\n.challenge-decoded-card__play-btn {\n  margin-top: 0.25rem;\n}\n.challenge-ranking {\n  list-style: none;\n  margin: 0.6rem 0 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.challenge-ranking__row {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.5rem 0.75rem;\n  background: #1b1f28;\n  border: 1px solid hsl(220, 15%, 22%);\n  border-radius: 0.6rem;\n}\n.challenge-ranking__pos {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #56698f;\n  min-width: 1.2rem;\n}\n.challenge-ranking__name {\n  flex: 1;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #d6ebff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.challenge-ranking__score {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #52e099;\n}\n.challenge-generate {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n}\n.challenge-generate__meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.4rem 0;\n  border-bottom: 1px solid hsl(220, 15%, 20%);\n}\n.challenge-generate__label {\n  font-size: 0.72rem;\n  color: #8899bb;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.challenge-generate__value {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #d6ebff;\n}\n.challenge-generate__value--seed {\n  font-family: monospace;\n  color: #67cfe4;\n}\n.challenge-code-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #181d25;\n  border: 1px solid hsla(45, 80%, 55%, 0.25);\n  border-radius: 0.75rem;\n}\n.challenge-code-card__code {\n  font-family: monospace;\n  font-size: clamp(0.65rem, 2vw, 0.75rem);\n  color: #edc95e;\n  word-break: break-all;\n  flex: 1;\n  min-width: 0;\n}\n/*# sourceMappingURL=challenge.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChallengePageComponent, { className: "ChallengePageComponent", filePath: "src/app/pages/challenge/challenge.page.ts", lineNumber: 22 });
})();
export {
  ChallengePageComponent
};
//# sourceMappingURL=challenge.page-O5TNS7XJ.js.map
