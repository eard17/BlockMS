import {
  SyncService
} from "./chunk-E6SPTQM2.js";
import {
  GameStateService
} from "./chunk-DCU74AHR.js";
import "./chunk-GH4SA4BM.js";
import {
  CommonModule,
  Component,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
  __async
} from "./chunk-5K356HEJ.js";

// src/app/pages/leaderboard/leaderboard.page.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.username;
function LeaderboardPageComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LeaderboardPageComponent_For_9_Template_button_click_0_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMode(m_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("lb-tab--active", ctx_r2.selectedMode() === m_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r2.label, " ");
  }
}
function LeaderboardPageComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Cargando\u2026");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardPageComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Sin datos a\xFAn.");
    \u0275\u0275elementEnd();
  }
}
function LeaderboardPageComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 11)(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    const \u0275$index_31_r5 = ctx.$index;
    \u0275\u0275classProp("lb-row--top", \u0275$index_31_r5 < 3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_31_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r4.score.toLocaleString());
  }
}
function LeaderboardPageComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 6);
    \u0275\u0275repeaterCreate(1, LeaderboardPageComponent_Conditional_12_For_2_Template, 7, 5, "li", 10, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.entries());
  }
}
var _LeaderboardPageComponent = class _LeaderboardPageComponent {
  constructor() {
    this.sync = inject(SyncService);
    this.gameState = inject(GameStateService);
    this.entries = signal([], ...ngDevMode ? [{ debugName: "entries" }] : []);
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.selectedMode = signal("classic", ...ngDevMode ? [{ debugName: "selectedMode" }] : []);
    this.modes = [
      { key: "classic", label: "Cl\xE1sico" },
      { key: "child-1", label: "Exploradores" },
      { key: "child-2", label: "Constructores" },
      { key: "child-3", label: "Familiar" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    return __async(this, null, function* () {
      this.loading.set(true);
      const data = yield this.sync.fetchChallengeRanking(`global-${this.selectedMode()}`);
      this.entries.set(data);
      this.loading.set(false);
    });
  }
  selectMode(mode) {
    this.selectedMode.set(mode);
    this.load();
  }
};
_LeaderboardPageComponent.\u0275fac = function LeaderboardPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeaderboardPageComponent)();
};
_LeaderboardPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaderboardPageComponent, selectors: [["app-leaderboard-page"]], decls: 16, vars: 1, consts: [["slot", "start"], ["defaultHref", "/home"], [1, "lb-content"], [1, "lb-tabs"], [1, "lb-tab", 3, "lb-tab--active"], [1, "lb-empty"], [1, "lb-list"], [1, "lb-refresh"], ["fill", "outline", "size", "small", 3, "click"], [1, "lb-tab", 3, "click"], [1, "lb-row", 3, "lb-row--top"], [1, "lb-row"], [1, "lb-pos"], [1, "lb-name"], [1, "lb-score"]], template: function LeaderboardPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
    \u0275\u0275element(3, "ion-back-button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "Ranking Global");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content", 2)(7, "div", 3);
    \u0275\u0275repeaterCreate(8, LeaderboardPageComponent_For_9_Template, 2, 3, "button", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, LeaderboardPageComponent_Conditional_10_Template, 2, 0, "p", 5)(11, LeaderboardPageComponent_Conditional_11_Template, 2, 0, "p", 5)(12, LeaderboardPageComponent_Conditional_12_Template, 3, 0, "ol", 6);
    \u0275\u0275elementStart(13, "div", 7)(14, "ion-button", 8);
    \u0275\u0275listener("click", function LeaderboardPageComponent_Template_ion_button_click_14_listener() {
      return ctx.load();
    });
    \u0275\u0275text(15, "Actualizar");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.modes);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading() ? 10 : ctx.entries().length === 0 ? 11 : 12);
  }
}, dependencies: [
  CommonModule,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton
], styles: ["\n\n.lb-content[_ngcontent-%COMP%] {\n  --background:#0d1117;\n  --padding-start:1rem;\n  --padding-end:1rem;\n  --padding-top:1rem;\n}\n.lb-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.lb-tab[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  background: #1b1f2d;\n  border: 1px solid #2a3040;\n  border-radius: 999px;\n  color: #8899bb;\n  font-size: 0.8rem;\n  cursor: pointer;\n  font-family: inherit;\n}\n.lb-tab--active[_ngcontent-%COMP%] {\n  background: #29303d;\n  border-color: #5ed5ed;\n  color: #5ed5ed;\n}\n.lb-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.lb-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n  background: #1b1f28;\n  border: 1px solid #2a3040;\n  border-radius: 0.75rem;\n}\n.lb-row--top[_ngcontent-%COMP%] {\n  border-color: rgba(244, 192, 37, 0.4);\n  background: #251f0d;\n}\n.lb-pos[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #56698f;\n  min-width: 1.5rem;\n}\n.lb-name[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #d6ebff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lb-score[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #52e099;\n}\n.lb-empty[_ngcontent-%COMP%] {\n  color: #5973a6;\n  text-align: center;\n  margin-top: 2rem;\n}\n.lb-refresh[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=leaderboard.page.css.map */"] });
var LeaderboardPageComponent = _LeaderboardPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaderboardPageComponent, [{
    type: Component,
    args: [{ selector: "app-leaderboard-page", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonBackButton,
      IonButton
    ], template: '<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons>\n    <ion-title>Ranking Global</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="lb-content">\n  <div class="lb-tabs">\n    @for (m of modes; track m.key) {\n      <button class="lb-tab" [class.lb-tab--active]="selectedMode() === m.key" (click)="selectMode(m.key)">\n        {{ m.label }}\n      </button>\n    }\n  </div>\n  @if (loading()) {\n    <p class="lb-empty">Cargando\u2026</p>\n  } @else if (entries().length === 0) {\n    <p class="lb-empty">Sin datos a\xFAn.</p>\n  } @else {\n    <ol class="lb-list">\n      @for (e of entries(); track e.username; let i = $index) {\n        <li class="lb-row" [class.lb-row--top]="i < 3">\n          <span class="lb-pos">{{ i + 1 }}</span>\n          <span class="lb-name">{{ e.username }}</span>\n          <span class="lb-score">{{ e.score.toLocaleString() }}</span>\n        </li>\n      }\n    </ol>\n  }\n  <div class="lb-refresh">\n    <ion-button fill="outline" size="small" (click)="load()">Actualizar</ion-button>\n  </div>\n</ion-content>\n', styles: ["/* src/app/pages/leaderboard/leaderboard.page.scss */\n.lb-content {\n  --background:#0d1117;\n  --padding-start:1rem;\n  --padding-end:1rem;\n  --padding-top:1rem;\n}\n.lb-tabs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.lb-tab {\n  padding: 0.4rem 0.9rem;\n  background: #1b1f2d;\n  border: 1px solid #2a3040;\n  border-radius: 999px;\n  color: #8899bb;\n  font-size: 0.8rem;\n  cursor: pointer;\n  font-family: inherit;\n}\n.lb-tab--active {\n  background: #29303d;\n  border-color: #5ed5ed;\n  color: #5ed5ed;\n}\n.lb-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.lb-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n  background: #1b1f28;\n  border: 1px solid #2a3040;\n  border-radius: 0.75rem;\n}\n.lb-row--top {\n  border-color: rgba(244, 192, 37, 0.4);\n  background: #251f0d;\n}\n.lb-pos {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #56698f;\n  min-width: 1.5rem;\n}\n.lb-name {\n  flex: 1;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #d6ebff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.lb-score {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #52e099;\n}\n.lb-empty {\n  color: #5973a6;\n  text-align: center;\n  margin-top: 2rem;\n}\n.lb-refresh {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=leaderboard.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaderboardPageComponent, { className: "LeaderboardPageComponent", filePath: "src/app/pages/leaderboard/leaderboard.page.ts", lineNumber: 16 });
})();
export {
  LeaderboardPageComponent
};
//# sourceMappingURL=leaderboard.page-B73OJH2O.js.map
