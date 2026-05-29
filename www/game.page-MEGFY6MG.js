import {
  ChildModeService,
  addIcons,
  arrowBackOutline
} from "./chunk-ZMWEGD7V.js";
import {
  SettingsService
} from "./chunk-P4ZHY7RL.js";
import {
  SyncService
} from "./chunk-E6SPTQM2.js";
import {
  GameStateService
} from "./chunk-DCU74AHR.js";
import "./chunk-GH4SA4BM.js";
import {
  SaveProgressService
} from "./chunk-TNBBNTNJ.js";
import {
  AlertController,
  CommonModule,
  Component,
  IonButton,
  IonContent,
  IonIcon,
  Output,
  Router,
  ViewChild,
  computed,
  effect,
  inject,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VDRMO2DQ.js";
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

// src/app/components/score-bar/score-bar.component.ts
function ScoreBarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xD7", ctx_r0.gameState.comboCount(), " COMBO");
  }
}
function ScoreBarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275element(4, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.childMode.timeDisplay());
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.timerClass());
    \u0275\u0275styleProp("width", ctx_r0.timerPct(), "%");
  }
}
var _ScoreBarComponent = class _ScoreBarComponent {
  constructor() {
    this.gameState = inject(GameStateService);
    this.childMode = inject(ChildModeService);
    this.backClicked = output();
    this.timerPct = computed(() => {
      const dur = this.childMode.sessionDurationMs();
      return dur === 0 ? 0 : Math.round(this.childMode.timeRemainingMs() / dur * 100);
    }, ...ngDevMode ? [{ debugName: "timerPct" }] : []);
    this.timerClass = computed(() => {
      const p = this.timerPct();
      return p > 50 ? "high" : p > 25 ? "mid" : "low";
    }, ...ngDevMode ? [{ debugName: "timerClass" }] : []);
    addIcons({ arrowBackOutline });
  }
};
_ScoreBarComponent.\u0275fac = function ScoreBarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScoreBarComponent)();
};
_ScoreBarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScoreBarComponent, selectors: [["app-score-bar"]], outputs: { backClicked: "backClicked" }, decls: 10, vars: 3, consts: [[1, "score-bar"], ["aria-label", "Salir", 1, "back-btn", 3, "click"], ["name", "arrow-back-outline"], [1, "score-section"], [1, "score-label"], [1, "score-value"], [1, "combo"], [1, "timer-bar"], [1, "timer-display"], [1, "timer-track"], [1, "timer-fill"]], template: function ScoreBarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function ScoreBarComponent_Template_button_click_1_listener() {
      return ctx.backClicked.emit();
    });
    \u0275\u0275element(2, "ion-icon", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
    \u0275\u0275text(5, "SCORE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, ScoreBarComponent_Conditional_8_Template, 2, 1, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ScoreBarComponent_Conditional_9_Template, 5, 5, "div", 7);
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.gameState.score());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.gameState.comboCount() > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.childMode.isChildMode() ? 9 : -1);
  }
}, dependencies: [CommonModule, IonIcon], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: rgba(31, 36, 46, 0.7019607843);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid hsla(220, 15%, 25%, 0.4);\n  padding-top: var(--ion-safe-area-top, env(safe-area-inset-top, 0px));\n}\n.score-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n  height: 52px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: #8899bb;\n  font-size: 1.25rem;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.back-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.88);\n  background: rgba(41, 48, 61, 0.6);\n}\n.score-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #5973a6;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.score-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #d6ebff;\n  font-variant-numeric: tabular-nums;\n}\n.combo[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.75rem;\n  background: rgba(94, 213, 237, 0.2);\n  border: 1px solid hsla(190, 80%, 65%, 0.5);\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #5ed5ed;\n}\n.timer-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.3rem 1rem;\n  background: rgba(24, 29, 37, 0.8);\n  border-bottom: 1px solid hsla(220, 15%, 25%, 0.3);\n}\n.timer-display[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #8899bb;\n  min-width: 4ch;\n}\n.timer-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: rgba(54, 61, 73, 0.6);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.timer-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 1s linear, background-color 0.5s ease;\n}\n.timer-fill.high[_ngcontent-%COMP%] {\n  background: #42d78c;\n}\n.timer-fill.mid[_ngcontent-%COMP%] {\n  background: #f4ca25;\n}\n.timer-fill.low[_ngcontent-%COMP%] {\n  background: #f05142;\n}\n/*# sourceMappingURL=score-bar.component.css.map */"] });
var ScoreBarComponent = _ScoreBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScoreBarComponent, [{
    type: Component,
    args: [{ selector: "app-score-bar", standalone: true, imports: [CommonModule, IonIcon], template: '<div class="score-bar">\n  <button class="back-btn" (click)="backClicked.emit()" aria-label="Salir">\n    <ion-icon name="arrow-back-outline"></ion-icon>\n  </button>\n  <div class="score-section">\n    <span class="score-label">SCORE</span>\n    <span class="score-value">{{ gameState.score() }}</span>\n  </div>\n  @if (gameState.comboCount() > 0) {\n    <span class="combo">\xD7{{ gameState.comboCount() }} COMBO</span>\n  }\n</div>\n@if (childMode.isChildMode()) {\n  <div class="timer-bar">\n    <span class="timer-display">{{ childMode.timeDisplay() }}</span>\n    <div class="timer-track">\n      <div class="timer-fill" [class]="timerClass()" [style.width.%]="timerPct()"></div>\n    </div>\n  </div>\n}\n', styles: ["/* src/app/components/score-bar/score-bar.component.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  background: rgba(31, 36, 46, 0.7019607843);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid hsla(220, 15%, 25%, 0.4);\n  padding-top: var(--ion-safe-area-top, env(safe-area-inset-top, 0px));\n}\n.score-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 1rem;\n  height: 52px;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: transparent;\n  border: none;\n  border-radius: 50%;\n  color: #8899bb;\n  font-size: 1.25rem;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.back-btn:active {\n  transform: scale(0.88);\n  background: rgba(41, 48, 61, 0.6);\n}\n.score-section {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n}\n.score-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #5973a6;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n.score-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #d6ebff;\n  font-variant-numeric: tabular-nums;\n}\n.combo {\n  padding: 0.2rem 0.75rem;\n  background: rgba(94, 213, 237, 0.2);\n  border: 1px solid hsla(190, 80%, 65%, 0.5);\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #5ed5ed;\n}\n.timer-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.3rem 1rem;\n  background: rgba(24, 29, 37, 0.8);\n  border-bottom: 1px solid hsla(220, 15%, 25%, 0.3);\n}\n.timer-display {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #8899bb;\n  min-width: 4ch;\n}\n.timer-track {\n  flex: 1;\n  height: 6px;\n  background: rgba(54, 61, 73, 0.6);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.timer-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 1s linear, background-color 0.5s ease;\n}\n.timer-fill.high {\n  background: #42d78c;\n}\n.timer-fill.mid {\n  background: #f4ca25;\n}\n.timer-fill.low {\n  background: #f05142;\n}\n/*# sourceMappingURL=score-bar.component.css.map */\n"] }]
  }], () => [], { backClicked: [{ type: Output, args: ["backClicked"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScoreBarComponent, { className: "ScoreBarComponent", filePath: "src/app/components/score-bar/score-bar.component.ts", lineNumber: 16 });
})();

// src/app/components/sleep-overlay/sleep-overlay.component.ts
var _SleepOverlayComponent = class _SleepOverlayComponent {
  constructor() {
    this.openGate = output();
  }
};
_SleepOverlayComponent.\u0275fac = function SleepOverlayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SleepOverlayComponent)();
};
_SleepOverlayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SleepOverlayComponent, selectors: [["app-sleep-overlay"]], outputs: { openGate: "openGate" }, decls: 25, vars: 0, consts: [[1, "sleep-overlay"], [1, "sleep-overlay__content"], ["aria-hidden", "true", 1, "sleep-overlay__pieces"], [1, "piece", "piece--1"], [1, "piece", "piece--2"], [1, "piece", "piece--3"], ["aria-hidden", "true", 1, "sleep-overlay__stars"], [1, "star", "star--1"], [1, "star", "star--2"], [1, "star", "star--3"], [1, "sleep-overlay__title"], [1, "sleep-overlay__subtitle"], [1, "sleep-overlay__adult-section"], ["fill", "outline", "color", "light", "size", "small", 1, "sleep-overlay__btn", 3, "click"]], template: function SleepOverlayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4, "\u{1F7E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 4);
    \u0275\u0275text(6, "\u{1F7EA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 5);
    \u0275\u0275text(8, "\u{1F7E9}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
    \u0275\u0275text(11, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15, "\u2726");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "h1", 10);
    \u0275\u0275text(17, "\xA1Las piezas se van a dormir!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 11);
    \u0275\u0275text(19, "Ha llegado la hora del descanso.");
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21, "\xA1Hasta ma\xF1ana, campe\xF3n!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "ion-button", 13);
    \u0275\u0275listener("click", function SleepOverlayComponent_Template_ion_button_click_23_listener() {
      return ctx.openGate.emit();
    });
    \u0275\u0275text(24, " Soy un adulto ");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [IonButton], styles: ["\n\n.sleep-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      160deg,\n      #0c1231,\n      #1d1547,\n      #09142a);\n}\n.sleep-overlay__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 2.5rem 2rem;\n  background: rgba(25, 25, 77, 0.5490196078);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid hsla(240, 80%, 80%, 0.15);\n  border-radius: 2rem;\n  max-width: 340px;\n  text-align: center;\n}\n.sleep-overlay__pieces[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  font-size: 2.5rem;\n}\n.piece[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_piece-float 3s ease-in-out infinite;\n}\n.piece--1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.piece--2[_ngcontent-%COMP%] {\n  animation-delay: 0.6s;\n}\n.piece--3[_ngcontent-%COMP%] {\n  animation-delay: 1.2s;\n}\n.sleep-overlay__stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: #ffe;\n  font-size: 1.25rem;\n}\n.star[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_star-twinkle 2s ease-in-out infinite;\n}\n.star--1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n}\n.star--2[_ngcontent-%COMP%] {\n  animation-delay: 0.7s;\n}\n.star--3[_ngcontent-%COMP%] {\n  animation-delay: 1.4s;\n}\n.sleep-overlay__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #d6ebff;\n  line-height: 1.2;\n}\n.sleep-overlay__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #99b2e6;\n  line-height: 1.5;\n}\n.sleep-overlay__adult-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.sleep-overlay__btn[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  font-size: 0.8rem;\n}\n.sleep-overlay__btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_piece-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_star-twinkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.6);\n  }\n}\n/*# sourceMappingURL=sleep-overlay.component.css.map */"] });
var SleepOverlayComponent = _SleepOverlayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SleepOverlayComponent, [{
    type: Component,
    args: [{ selector: "app-sleep-overlay", standalone: true, imports: [IonButton], template: '<div class="sleep-overlay">\n  <div class="sleep-overlay__content">\n    <div class="sleep-overlay__pieces" aria-hidden="true">\n      <span class="piece piece--1">\u{1F7E6}</span>\n      <span class="piece piece--2">\u{1F7EA}</span>\n      <span class="piece piece--3">\u{1F7E9}</span>\n    </div>\n    <div class="sleep-overlay__stars" aria-hidden="true">\n      <span class="star star--1">\u2726</span>\n      <span class="star star--2">\u2726</span>\n      <span class="star star--3">\u2726</span>\n    </div>\n    <h1 class="sleep-overlay__title">\xA1Las piezas se van a dormir!</h1>\n    <p class="sleep-overlay__subtitle">Ha llegado la hora del descanso.<br>\xA1Hasta ma\xF1ana, campe\xF3n!</p>\n    <div class="sleep-overlay__adult-section">\n      <ion-button fill="outline" color="light" size="small" class="sleep-overlay__btn"\n        (click)="openGate.emit()">\n        Soy un adulto\n      </ion-button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/components/sleep-overlay/sleep-overlay.component.scss */\n.sleep-overlay {\n  position: absolute;\n  inset: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      160deg,\n      #0c1231,\n      #1d1547,\n      #09142a);\n}\n.sleep-overlay__content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 2.5rem 2rem;\n  background: rgba(25, 25, 77, 0.5490196078);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid hsla(240, 80%, 80%, 0.15);\n  border-radius: 2rem;\n  max-width: 340px;\n  text-align: center;\n}\n.sleep-overlay__pieces {\n  display: flex;\n  gap: 1rem;\n  font-size: 2.5rem;\n}\n.piece {\n  animation: piece-float 3s ease-in-out infinite;\n}\n.piece--1 {\n  animation-delay: 0s;\n}\n.piece--2 {\n  animation-delay: 0.6s;\n}\n.piece--3 {\n  animation-delay: 1.2s;\n}\n.sleep-overlay__stars {\n  display: flex;\n  gap: 0.75rem;\n  color: #ffe;\n  font-size: 1.25rem;\n}\n.star {\n  animation: star-twinkle 2s ease-in-out infinite;\n}\n.star--1 {\n  animation-delay: 0s;\n}\n.star--2 {\n  animation-delay: 0.7s;\n}\n.star--3 {\n  animation-delay: 1.4s;\n}\n.sleep-overlay__title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #d6ebff;\n  line-height: 1.2;\n}\n.sleep-overlay__subtitle {\n  margin: 0;\n  font-size: 1rem;\n  color: #99b2e6;\n  line-height: 1.5;\n}\n.sleep-overlay__adult-section {\n  margin-top: 0.5rem;\n}\n.sleep-overlay__btn {\n  opacity: 0.6;\n  font-size: 0.8rem;\n}\n.sleep-overlay__btn:hover {\n  opacity: 1;\n}\n@keyframes piece-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes star-twinkle {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.2;\n    transform: scale(0.6);\n  }\n}\n/*# sourceMappingURL=sleep-overlay.component.css.map */\n"] }]
  }], null, { openGate: [{ type: Output, args: ["openGate"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SleepOverlayComponent, { className: "SleepOverlayComponent", filePath: "src/app/components/sleep-overlay/sleep-overlay.component.ts", lineNumber: 11 });
})();

// src/app/components/parental-gate/parental-gate.component.ts
function ParentalGateComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 9);
    \u0275\u0275listener("click", function ParentalGateComponent_Conditional_6_For_4_Template_ion_button_click_0_listener() {
      const opt_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(opt_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r2, " ");
  }
}
function ParentalGateComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Respuesta incorrecta. Intenta de nuevo.");
    \u0275\u0275elementEnd();
  }
}
function ParentalGateComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275repeaterCreate(3, ParentalGateComponent_Conditional_6_For_4_Template, 2, 1, "ion-button", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParentalGateComponent_Conditional_6_Conditional_5_Template, 2, 0, "p", 8);
  }
  if (rf & 2) {
    const c_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r4.questionText, " = ?");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r4.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.feedback() === "wrong" ? 5 : -1);
  }
}
var WORDS = [
  "cero",
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "diez",
  "once",
  "doce",
  "trece",
  "catorce",
  "quince"
];
var _ParentalGateComponent = class _ParentalGateComponent {
  constructor() {
    this.unlocked = output();
    this.dismissed = output();
    this.challenge = signal(null, ...ngDevMode ? [{ debugName: "challenge" }] : []);
    this.feedback = signal("idle", ...ngDevMode ? [{ debugName: "feedback" }] : []);
  }
  ngOnInit() {
    this.generate();
  }
  select(answer) {
    const c = this.challenge();
    if (!c)
      return;
    if (answer === c.correctAnswer) {
      this.unlocked.emit();
      return;
    }
    this.feedback.set("wrong");
    setTimeout(() => {
      this.feedback.set("idle");
      this.generate();
    }, 800);
  }
  generate() {
    const ops = [
      { label: "m\xE1s", fn: (a2, b2) => a2 + b2 },
      { label: "menos", fn: (a2, b2) => a2 - b2 }
    ];
    let a, b, result, op;
    do {
      op = ops[Math.floor(Math.random() * ops.length)];
      a = Math.floor(Math.random() * 8) + 2;
      b = Math.floor(Math.random() * 6) + 1;
      result = op.fn(a, b);
    } while (result < 1 || result > 15 || result === a || result === b);
    const text = `${WORDS[a] ?? a} ${op.label} ${WORDS[b] ?? b}`;
    this.challenge.set({ questionText: text, correctAnswer: result, options: this.buildOptions(result) });
  }
  buildOptions(correct) {
    const set = /* @__PURE__ */ new Set([correct]);
    const deltas = [-3, -2, -1, 1, 2, 3].sort(() => Math.random() - 0.5);
    for (const d of deltas) {
      if (set.size >= 4)
        break;
      const v = correct + d;
      if (v >= 1 && v <= 15)
        set.add(v);
    }
    for (let i = 1; set.size < 4 && i <= 15; i++)
      set.add(i);
    return [...set].sort(() => Math.random() - 0.5);
  }
};
_ParentalGateComponent.\u0275fac = function ParentalGateComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParentalGateComponent)();
};
_ParentalGateComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParentalGateComponent, selectors: [["app-parental-gate"]], outputs: { unlocked: "unlocked", dismissed: "dismissed" }, decls: 9, vars: 3, consts: [[1, "parental-gate"], [1, "gate-card"], [1, "gate-card__heading"], [1, "gate-card__instruction"], ["fill", "clear", "color", "medium", "size", "small", 1, "gate-card__cancel", 3, "click"], [1, "gate-card__question"], [1, "gate-card__options"], ["expand", "block", "fill", "outline", "color", "primary"], ["role", "alert", 1, "gate-card__error"], ["expand", "block", "fill", "outline", "color", "primary", 3, "click"]], template: function ParentalGateComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
    \u0275\u0275text(3, "Verificaci\xF3n de adulto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5, "Resuelve el problema para continuar:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParentalGateComponent_Conditional_6_Template, 6, 2);
    \u0275\u0275elementStart(7, "ion-button", 4);
    \u0275\u0275listener("click", function ParentalGateComponent_Template_ion_button_click_7_listener() {
      return ctx.dismissed.emit();
    });
    \u0275\u0275text(8, " Cancelar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275classProp("gate-card--wrong", ctx.feedback() === "wrong");
    \u0275\u0275advance(5);
    \u0275\u0275conditional((tmp_1_0 = ctx.challenge()) ? 6 : -1, tmp_1_0);
  }
}, dependencies: [CommonModule, IonButton], styles: ["\n\n.parental-gate[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 110;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.gate-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem 1.75rem;\n  background: #222639;\n  border: 1px solid hsla(210, 80%, 70%, 0.25);\n  border-radius: 1.5rem;\n  width: min(360px, 90vw);\n  text-align: center;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.gate-card--wrong[_ngcontent-%COMP%] {\n  border-color: #e23636;\n  box-shadow: 0 0 16px rgba(226, 54, 54, 0.3490196078);\n}\n.gate-card__heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #cce6ff;\n}\n.gate-card__instruction[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #8b9dc1;\n}\n.gate-card__question[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 1.45rem;\n  font-weight: 600;\n  color: #8ce1f2;\n}\n.gate-card__error[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #e96363;\n  font-weight: 500;\n}\n.gate-card__options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.6rem;\n  width: 100%;\n}\n.gate-card__cancel[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  opacity: 0.55;\n  font-size: 0.85rem;\n}\n.gate-card__cancel[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=parental-gate.component.css.map */"] });
var ParentalGateComponent = _ParentalGateComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParentalGateComponent, [{
    type: Component,
    args: [{ selector: "app-parental-gate", standalone: true, imports: [CommonModule, IonButton], template: `<div class="parental-gate">
  <div class="gate-card" [class.gate-card--wrong]="feedback() === 'wrong'">
    <h2 class="gate-card__heading">Verificaci\xF3n de adulto</h2>
    <p class="gate-card__instruction">Resuelve el problema para continuar:</p>
    @if (challenge(); as c) {
      <p class="gate-card__question">{{ c.questionText }} = ?</p>
      <div class="gate-card__options">
        @for (opt of c.options; track opt) {
          <ion-button expand="block" fill="outline" color="primary" (click)="select(opt)">
            {{ opt }}
          </ion-button>
        }
      </div>
      @if (feedback() === 'wrong') {
        <p class="gate-card__error" role="alert">Respuesta incorrecta. Intenta de nuevo.</p>
      }
    }
    <ion-button fill="clear" color="medium" size="small" class="gate-card__cancel"
      (click)="dismissed.emit()">
      Cancelar
    </ion-button>
  </div>
</div>
`, styles: ["/* src/app/components/parental-gate/parental-gate.component.scss */\n.parental-gate {\n  position: absolute;\n  inset: 0;\n  z-index: 110;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.gate-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem 1.75rem;\n  background: #222639;\n  border: 1px solid hsla(210, 80%, 70%, 0.25);\n  border-radius: 1.5rem;\n  width: min(360px, 90vw);\n  text-align: center;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.gate-card--wrong {\n  border-color: #e23636;\n  box-shadow: 0 0 16px rgba(226, 54, 54, 0.3490196078);\n}\n.gate-card__heading {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #cce6ff;\n}\n.gate-card__instruction {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #8b9dc1;\n}\n.gate-card__question {\n  margin: 0.25rem 0 0;\n  font-size: 1.45rem;\n  font-weight: 600;\n  color: #8ce1f2;\n}\n.gate-card__error {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #e96363;\n  font-weight: 500;\n}\n.gate-card__options {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.6rem;\n  width: 100%;\n}\n.gate-card__cancel {\n  margin-top: 0.25rem;\n  opacity: 0.55;\n  font-size: 0.85rem;\n}\n.gate-card__cancel:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=parental-gate.component.css.map */\n"] }]
  }], null, { unlocked: [{ type: Output, args: ["unlocked"] }], dismissed: [{ type: Output, args: ["dismissed"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParentalGateComponent, { className: "ParentalGateComponent", filePath: "src/app/components/parental-gate/parental-gate.component.ts", lineNumber: 17 });
})();

// src/app/pages/game/game.page.ts
var _c0 = ["phaserContainer"];
function GamePageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-sleep-overlay", 6);
    \u0275\u0275listener("openGate", function GamePageComponent_Conditional_4_Template_app_sleep_overlay_openGate_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOpenGate());
    });
    \u0275\u0275elementEnd();
  }
}
function GamePageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-parental-gate", 7);
    \u0275\u0275listener("unlocked", function GamePageComponent_Conditional_5_Template_app_parental_gate_unlocked_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUnlocked());
    })("dismissed", function GamePageComponent_Conditional_5_Template_app_parental_gate_dismissed_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onGateDismissed());
    });
    \u0275\u0275elementEnd();
  }
}
function GamePageComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 13);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_6_Conditional_6_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onExtendSession());
    });
    \u0275\u0275text(1, "\u25B6 Extender sesi\xF3n (+15 min)");
    \u0275\u0275elementEnd();
  }
}
function GamePageComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 13);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_6_Conditional_7_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onResumeGame());
    });
    \u0275\u0275text(1, "\u25B6 Reanudar partida");
    \u0275\u0275elementEnd();
  }
}
function GamePageComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 8)(2, "h2", 9);
    \u0275\u0275text(3, "\xBFQu\xE9 deseas hacer?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 10);
    \u0275\u0275text(5, "Verificaci\xF3n completada con \xE9xito");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, GamePageComponent_Conditional_6_Conditional_6_Template, 2, 0, "ion-button", 11)(7, GamePageComponent_Conditional_6_Conditional_7_Template, 2, 0, "ion-button", 11);
    \u0275\u0275elementStart(8, "ion-button", 12);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_6_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReturnToMenu());
    });
    \u0275\u0275text(9, "\u2302 Volver al men\xFA principal");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r2.childMode.isSleeping() ? 6 : 7);
  }
}
function GamePageComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "\xA1NUEVO R\xC9CORD!");
    \u0275\u0275elementEnd();
  }
}
function GamePageComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, GamePageComponent_Conditional_7_Conditional_2_Template, 2, 0, "div", 15);
    \u0275\u0275elementStart(3, "h1", 16);
    \u0275\u0275text(4, "FIN DE LA PARTIDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "span", 18);
    \u0275\u0275text(7, "Puntuaci\xF3n final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 20)(11, "span", 18);
    \u0275\u0275text(12, "R\xE9cord personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-button", 13);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_7_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewFinalBoard());
    });
    \u0275\u0275text(16, "\u{1F441} Ver tablero final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-button", 13);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_7_Template_ion_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRestartGame());
    });
    \u0275\u0275text(18, "Jugar de Nuevo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-button", 12);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_7_Template_ion_button_click_19_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReturnToMenu());
    });
    \u0275\u0275text(20, "Volver al Men\xFA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isNewRecord() ? 2 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.gameState.score().toLocaleString());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.currentRecord().toLocaleString());
  }
}
function GamePageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, " Solo lectura \u2014 ");
    \u0275\u0275elementStart(2, "button", 22);
    \u0275\u0275listener("click", function GamePageComponent_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onReturnToMenu());
    });
    \u0275\u0275text(3, "Volver al men\xFA");
    \u0275\u0275elementEnd()();
  }
}
var _GamePageComponent = class _GamePageComponent {
  constructor() {
    this.gameState = inject(GameStateService);
    this.childMode = inject(ChildModeService);
    this.save = inject(SaveProgressService);
    this.settings = inject(SettingsService);
    this.router = inject(Router);
    this.alertCtrl = inject(AlertController);
    this.sync = inject(SyncService);
    this.phaserGame = null;
    this.challengeSeed = null;
    this.showGate = signal(false, ...ngDevMode ? [{ debugName: "showGate" }] : []);
    this.showUnlockChoice = signal(false, ...ngDevMode ? [{ debugName: "showUnlockChoice" }] : []);
    this.isGameOver = signal(false, ...ngDevMode ? [{ debugName: "isGameOver" }] : []);
    this.isNewRecord = signal(false, ...ngDevMode ? [{ debugName: "isNewRecord" }] : []);
    this.isReadOnly = signal(false, ...ngDevMode ? [{ debugName: "isReadOnly" }] : []);
    this.currentRecord = computed(() => this.save.progress().highScores[this.gameState.mode()] ?? 0, ...ngDevMode ? [{ debugName: "currentRecord" }] : []);
    effect(() => {
      if (this.childMode.isSleepPending() && this.phaserGame)
        this.phaserGame.events.emit("bms:sleep-pending");
    });
    effect(() => {
      const s = this.settings.settings();
      if (this.phaserGame)
        this.phaserGame.events.emit("bms:settings-volume", { music: s.musicVolume, sfx: s.sfxVolume });
    });
  }
  ngAfterViewInit() {
    return __async(this, null, function* () {
      const state = history.state;
      if (state?.challengeSeed) {
        this.challengeSeed = state.challengeSeed;
        this.gameState.setMode("challenge");
        this.gameState.setTargetScore(state.targetScore ?? 0);
      } else {
        this.gameState.resetSession();
      }
      yield this.initPhaserGame();
    });
  }
  ngOnDestroy() {
    this.save.updateHighScore(this.gameState.mode(), this.gameState.score());
    this.phaserGame?.destroy(true);
    this.phaserGame = null;
    this.childMode.stopSession();
  }
  initPhaserGame() {
    return __async(this, null, function* () {
      const { createPhaserGame } = yield import("./game-CMCXYVMK.js");
      const s = this.settings.settings();
      const config = __spreadProps(__spreadValues({}, this.childMode.isChildMode() ? { boardDimension: this.childMode.boardDimension(), pieceSet: this.childMode.pieceSet() } : {}), {
        seed: this.challengeSeed ?? this.gameState.sessionSeed(),
        activeSkin: this.save.progress().activeSkin,
        smilingFacesEnabled: s.smilingFacesEnabled,
        musicVolume: s.musicVolume,
        sfxVolume: s.sfxVolume,
        difficulty: s.difficulty
      });
      this.phaserGame = createPhaserGame(this.phaserContainer.nativeElement, this.gameState, config);
      this.phaserGame.events.on("bms:tray-empty", () => this.childMode.onTrayEmptyWhilePending());
      this.phaserGame.events.on("bms:game-over", () => {
        const score = this.gameState.score();
        const mode = this.gameState.mode();
        const elapsed = this.gameState.elapsedTime();
        const isNew = score > (this.save.progress().highScores[mode] ?? 0);
        this.save.updateHighScore(mode, score);
        this.save.recordGameEnd(elapsed);
        this.isNewRecord.set(isNew);
        this.isGameOver.set(true);
        this.sync.submitScore(score, mode, elapsed);
      });
    });
  }
  onOpenGate() {
    this.showGate.set(true);
  }
  onUnlocked() {
    this.showGate.set(false);
    this.showUnlockChoice.set(true);
  }
  onGateDismissed() {
    this.showGate.set(false);
  }
  onBackClick() {
    return __async(this, null, function* () {
      if (this.childMode.isChildMode()) {
        this.showGate.set(true);
        return;
      }
      const alert = yield this.alertCtrl.create({
        header: "Salir del juego",
        message: "\xBFDeseas salir? Perder\xE1s el progreso de la partida actual.",
        buttons: [
          { text: "Cancelar", role: "cancel" },
          { text: "Salir", handler: () => this.onReturnToMenu() }
        ]
      });
      yield alert.present();
    });
  }
  onResumeGame() {
    this.showUnlockChoice.set(false);
    this.phaserGame?.events.emit("bms:resume");
  }
  onExtendSession() {
    this.showUnlockChoice.set(false);
    this.childMode.extendSession(15);
    this.phaserGame?.events.emit("bms:resume");
  }
  onRestartGame() {
    return __async(this, null, function* () {
      this.isGameOver.set(false);
      this.isNewRecord.set(false);
      this.isReadOnly.set(false);
      this.challengeSeed = null;
      this.phaserGame?.destroy(true);
      this.phaserGame = null;
      this.gameState.resetSession();
      yield this.initPhaserGame();
    });
  }
  onViewFinalBoard() {
    this.isReadOnly.set(true);
    this.isGameOver.set(false);
    this.phaserGame?.events.emit("bms:readonly");
  }
  onReturnToMenu() {
    this.save.updateHighScore(this.gameState.mode(), this.gameState.score());
    this.childMode.unlock();
    this.router.navigate(["/home"]);
  }
};
_GamePageComponent.\u0275fac = function GamePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GamePageComponent)();
};
_GamePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GamePageComponent, selectors: [["app-game-page"]], viewQuery: function GamePageComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.phaserContainer = _t.first);
  }
}, decls: 9, vars: 6, consts: [["phaserContainer", ""], [3, "backClicked"], [3, "fullscreen"], [1, "phaser-host"], ["role", "dialog", 1, "overlay-dialog"], [1, "readonly-banner"], [3, "openGate"], [3, "unlocked", "dismissed"], [1, "dialog-card"], [1, "dialog-title"], [1, "dialog-subtitle"], ["expand", "block", "color", "primary"], ["expand", "block", "fill", "outline", "color", "medium", 3, "click"], ["expand", "block", "color", "primary", 3, "click"], [1, "gameover-card"], ["aria-live", "polite", 1, "record-badge"], [1, "gameover-title"], [1, "score-section"], [1, "score-label"], [1, "score-value"], [1, "hiscore-section"], [1, "hiscore-value"], [1, "readonly-back", 3, "click"]], template: function GamePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-score-bar", 1);
    \u0275\u0275listener("backClicked", function GamePageComponent_Template_app_score_bar_backClicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onBackClick());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ion-content", 2);
    \u0275\u0275element(2, "div", 3, 0);
    \u0275\u0275conditionalCreate(4, GamePageComponent_Conditional_4_Template, 1, 0, "app-sleep-overlay");
    \u0275\u0275conditionalCreate(5, GamePageComponent_Conditional_5_Template, 1, 0, "app-parental-gate");
    \u0275\u0275conditionalCreate(6, GamePageComponent_Conditional_6_Template, 10, 1, "div", 4);
    \u0275\u0275conditionalCreate(7, GamePageComponent_Conditional_7_Template, 21, 3, "div", 4);
    \u0275\u0275conditionalCreate(8, GamePageComponent_Conditional_8_Template, 4, 0, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.childMode.isSleeping() && !ctx.showUnlockChoice() && !ctx.isGameOver() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showGate() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.showUnlockChoice() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isGameOver() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.isReadOnly() ? 8 : -1);
  }
}, dependencies: [CommonModule, IonContent, IonButton, ScoreBarComponent, SleepOverlayComponent, ParentalGateComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-background, #0d1117);\n  padding-bottom: var(--ion-safe-area-bottom, env(safe-area-inset-bottom, 0px));\n  padding-left: var(--ion-safe-area-left, env(safe-area-inset-left, 0px));\n  padding-right: var(--ion-safe-area-right, env(safe-area-inset-right, 0px));\n}\nion-content[_ngcontent-%COMP%] {\n  --background:transparent;\n  flex: 1;\n  min-height: 0;\n}\n.phaser-host[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n}\n.phaser-host[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  display: block;\n  width: 100% !important;\n  height: 100% !important;\n}\n.overlay-dialog[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 120;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6509803922);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.dialog-card[_ngcontent-%COMP%], \n.gameover-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  padding: 2rem 1.75rem;\n  border-radius: 1.5rem;\n  width: min(380px, 92vw);\n  text-align: center;\n}\n.dialog-card[_ngcontent-%COMP%] {\n  background: #1b1f2d;\n  border: 1px solid hsla(150, 70%, 55%, 0.3);\n}\n.gameover-card[_ngcontent-%COMP%] {\n  background: #14181f;\n  border: 1px solid hsla(0, 70%, 45%, 0.4);\n  position: relative;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #cce6ff;\n}\n.dialog-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #47d18c;\n}\n.record-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1.1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f4c025,\n      #f99406);\n  color: #3d260f;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  border-radius: 2rem;\n  animation: _ngcontent-%COMP%_badge-pulse 1.2s ease-in-out infinite;\n  box-shadow: 0 0 16px rgba(244, 192, 37, 0.6);\n}\n.gameover-title[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #df3a3a;\n  text-transform: uppercase;\n}\n.score-section[_ngcontent-%COMP%], \n.hiscore-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #5973a6;\n}\n.score-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #c2e0ff;\n  font-variant-numeric: tabular-nums;\n}\n.hiscore-value[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #edc95e;\n  font-variant-numeric: tabular-nums;\n}\n.readonly-banner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 130;\n  padding: 0.75rem 1rem;\n  background: #1a1a2e;\n  border-top: 1px solid #333;\n  text-align: center;\n  font-size: 0.85rem;\n  color: #aaa;\n}\n.readonly-back[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5ed5ed;\n  cursor: pointer;\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_badge-pulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    transform: translateX(-50%) scale(1.06);\n  }\n}\n/*# sourceMappingURL=game.page.css.map */"] });
var GamePageComponent = _GamePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GamePageComponent, [{
    type: Component,
    args: [{ selector: "app-game-page", standalone: true, imports: [CommonModule, IonContent, IonButton, ScoreBarComponent, SleepOverlayComponent, ParentalGateComponent], template: '<app-score-bar (backClicked)="onBackClick()"></app-score-bar>\n\n<ion-content [fullscreen]="true">\n  <div #phaserContainer class="phaser-host"></div>\n\n  <!-- Sleep overlay (child mode) -->\n  @if (childMode.isSleeping() && !showUnlockChoice() && !isGameOver()) {\n    <app-sleep-overlay (openGate)="onOpenGate()"></app-sleep-overlay>\n  }\n\n  <!-- Parental gate -->\n  @if (showGate()) {\n    <app-parental-gate (unlocked)="onUnlocked()" (dismissed)="onGateDismissed()"></app-parental-gate>\n  }\n\n  <!-- Unlock choice (after parental gate passes) -->\n  @if (showUnlockChoice()) {\n    <div class="overlay-dialog" role="dialog">\n      <div class="dialog-card">\n        <h2 class="dialog-title">\xBFQu\xE9 deseas hacer?</h2>\n        <p class="dialog-subtitle">Verificaci\xF3n completada con \xE9xito</p>\n        @if (childMode.isSleeping()) {\n          <ion-button expand="block" color="primary" (click)="onExtendSession()">\u25B6 Extender sesi\xF3n (+15 min)</ion-button>\n        } @else {\n          <ion-button expand="block" color="primary" (click)="onResumeGame()">\u25B6 Reanudar partida</ion-button>\n        }\n        <ion-button expand="block" fill="outline" color="medium" (click)="onReturnToMenu()">\u2302 Volver al men\xFA principal</ion-button>\n      </div>\n    </div>\n  }\n\n  <!-- Game over -->\n  @if (isGameOver()) {\n    <div class="overlay-dialog" role="dialog">\n      <div class="gameover-card">\n        @if (isNewRecord()) {\n          <div class="record-badge" aria-live="polite">\xA1NUEVO R\xC9CORD!</div>\n        }\n        <h1 class="gameover-title">FIN DE LA PARTIDA</h1>\n        <div class="score-section">\n          <span class="score-label">Puntuaci\xF3n final</span>\n          <span class="score-value">{{ gameState.score().toLocaleString() }}</span>\n        </div>\n        <div class="hiscore-section">\n          <span class="score-label">R\xE9cord personal</span>\n          <span class="hiscore-value">{{ currentRecord().toLocaleString() }}</span>\n        </div>\n        <ion-button expand="block" color="primary" (click)="onViewFinalBoard()">\u{1F441} Ver tablero final</ion-button>\n        <ion-button expand="block" color="primary" (click)="onRestartGame()">Jugar de Nuevo</ion-button>\n        <ion-button expand="block" fill="outline" color="medium" (click)="onReturnToMenu()">Volver al Men\xFA</ion-button>\n      </div>\n    </div>\n  }\n\n  <!-- Read-only banner -->\n  @if (isReadOnly()) {\n    <div class="readonly-banner">\n      Solo lectura \u2014 <button class="readonly-back" (click)="onReturnToMenu()">Volver al men\xFA</button>\n    </div>\n  }\n\n</ion-content>\n', styles: ["/* src/app/pages/game/game.page.scss */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--color-background, #0d1117);\n  padding-bottom: var(--ion-safe-area-bottom, env(safe-area-inset-bottom, 0px));\n  padding-left: var(--ion-safe-area-left, env(safe-area-inset-left, 0px));\n  padding-right: var(--ion-safe-area-right, env(safe-area-inset-right, 0px));\n}\nion-content {\n  --background:transparent;\n  flex: 1;\n  min-height: 0;\n}\n.phaser-host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n}\n.phaser-host canvas {\n  display: block;\n  width: 100% !important;\n  height: 100% !important;\n}\n.overlay-dialog {\n  position: absolute;\n  inset: 0;\n  z-index: 120;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6509803922);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.dialog-card,\n.gameover-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  padding: 2rem 1.75rem;\n  border-radius: 1.5rem;\n  width: min(380px, 92vw);\n  text-align: center;\n}\n.dialog-card {\n  background: #1b1f2d;\n  border: 1px solid hsla(150, 70%, 55%, 0.3);\n}\n.gameover-card {\n  background: #14181f;\n  border: 1px solid hsla(0, 70%, 45%, 0.4);\n  position: relative;\n}\n.dialog-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #cce6ff;\n}\n.dialog-subtitle {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #47d18c;\n}\n.record-badge {\n  position: absolute;\n  top: -1.1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f4c025,\n      #f99406);\n  color: #3d260f;\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  border-radius: 2rem;\n  animation: badge-pulse 1.2s ease-in-out infinite;\n  box-shadow: 0 0 16px rgba(244, 192, 37, 0.6);\n}\n.gameover-title {\n  margin: 0.5rem 0 0;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #df3a3a;\n  text-transform: uppercase;\n}\n.score-section,\n.hiscore-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.score-label {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #5973a6;\n}\n.score-value {\n  font-size: 2rem;\n  font-weight: 700;\n  color: #c2e0ff;\n  font-variant-numeric: tabular-nums;\n}\n.hiscore-value {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #edc95e;\n  font-variant-numeric: tabular-nums;\n}\n.readonly-banner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 130;\n  padding: 0.75rem 1rem;\n  background: #1a1a2e;\n  border-top: 1px solid #333;\n  text-align: center;\n  font-size: 0.85rem;\n  color: #aaa;\n}\n.readonly-back {\n  background: none;\n  border: none;\n  color: #5ed5ed;\n  cursor: pointer;\n  text-decoration: underline;\n}\n@keyframes badge-pulse {\n  0%, 100% {\n    transform: translateX(-50%) scale(1);\n  }\n  50% {\n    transform: translateX(-50%) scale(1.06);\n  }\n}\n/*# sourceMappingURL=game.page.css.map */\n"] }]
  }], () => [], { phaserContainer: [{
    type: ViewChild,
    args: ["phaserContainer"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GamePageComponent, { className: "GamePageComponent", filePath: "src/app/pages/game/game.page.ts", lineNumber: 22 });
})();
export {
  GamePageComponent
};
//# sourceMappingURL=game.page-MEGFY6MG.js.map
