import {
  ChildModeService
} from "./chunk-WP7LD4FI.js";
import {
  GameStateService
} from "./chunk-EHMPXUI6.js";
import {
  AuthService
} from "./chunk-GI5KRBG6.js";
import {
  SaveProgressService
} from "./chunk-EY4MWF2Q.js";
import {
  addIcons,
  personCircleOutline,
  settingsOutline,
  trophyOutline
} from "./chunk-BTWVIJVU.js";
import {
  AlertController,
  CommonModule,
  Component,
  IonContent,
  IonIcon,
  Router,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
  __async
} from "./chunk-5K356HEJ.js";

// src/app/pages/home/home.page.ts
function HomePageComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.auth.avatarUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r0.auth.displayName());
  }
}
function HomePageComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 40);
  }
}
function HomePageComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, HomePageComponent_Conditional_3_Conditional_1_Template, 1, 2, "img", 39)(2, HomePageComponent_Conditional_3_Conditional_2_Template, 1, 0, "ion-icon", 40);
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.avatarUrl() ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.auth.displayName());
  }
}
function HomePageComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function HomePageComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goToAuth());
    });
    \u0275\u0275element(1, "ion-icon", 43);
    \u0275\u0275text(2, " Iniciar sesi\xF3n ");
    \u0275\u0275elementEnd();
  }
}
function HomePageComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3C6} ", ctx_r0.save.progress().highScores["classic"].toLocaleString());
  }
}
function HomePageComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3C6} ", ctx_r0.save.progress().highScores["child-1"].toLocaleString());
  }
}
function HomePageComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3C6} ", ctx_r0.save.progress().highScores["child-2"].toLocaleString());
  }
}
function HomePageComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3C6} ", ctx_r0.save.progress().highScores["child-3"].toLocaleString());
  }
}
var DEFAULT_MINUTES = { 1: 5, 2: 10, 3: 15 };
var DURATION_OPTIONS = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
var _HomePageComponent = class _HomePageComponent {
  constructor() {
    this.save = inject(SaveProgressService);
    this.auth = inject(AuthService);
    this.childMode = inject(ChildModeService);
    this.gameState = inject(GameStateService);
    this.router = inject(Router);
    this.alertCtrl = inject(AlertController);
    addIcons({ settingsOutline, trophyOutline, personCircleOutline });
  }
  playClassic() {
    this.childMode.stopSession();
    this.gameState.setMode("classic");
    this.router.navigate(["/game"]);
  }
  playChild(level) {
    return __async(this, null, function* () {
      const defaultMin = DEFAULT_MINUTES[level];
      const alert = yield this.alertCtrl.create({
        header: "Duraci\xF3n de sesi\xF3n",
        message: "\xBFCu\xE1nto tiempo quieres jugar?",
        inputs: DURATION_OPTIONS.map((m) => ({
          name: "minutes",
          type: "radio",
          label: m < 60 ? `${m} minutos` : "1 hora",
          value: m,
          checked: m === defaultMin
        })),
        buttons: [
          { text: "Cancelar", role: "cancel" },
          { text: "Jugar", handler: (mins) => {
            this.childMode.startSession(level, mins);
            this.gameState.setMode(`child-${level}`);
            this.router.navigate(["/game"]);
          } }
        ]
      });
      yield alert.present();
    });
  }
  goToSettings() {
    this.router.navigate(["/settings"]);
  }
  goToChallenge() {
    this.router.navigate(["/challenge"]);
  }
  goToLeaderboard() {
    this.router.navigate(["/leaderboard"]);
  }
  goToAuth() {
    this.router.navigate(["/auth"]);
  }
};
_HomePageComponent.\u0275fac = function HomePageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomePageComponent)();
};
_HomePageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePageComponent, selectors: [["app-home-page"]], decls: 96, vars: 7, consts: [[3, "fullscreen"], [1, "home"], [1, "home__auth-bar"], [1, "home__auth-user"], [1, "home__auth-login-btn"], [1, "home__header"], ["aria-hidden", "true", 1, "home__logo"], [1, "home__logo-block", "home__logo-block--1"], [1, "home__logo-block", "home__logo-block--2"], [1, "home__logo-block", "home__logo-block--3"], [1, "home__logo-block", "home__logo-block--4"], [1, "home__title"], [1, "home__title-accent"], [1, "home__subtitle"], ["aria-label", "R\xE9cord personal modo cl\xE1sico", 1, "home__score-card"], ["name", "trophy-outline", "aria-hidden", "true", 1, "home__score-icon"], [1, "home__score-label"], [1, "home__score-value"], ["aria-label", "Modos de juego", 1, "home__section"], [1, "home__section-title"], [1, "home__mode-card", "home__mode-card--classic", 3, "click"], ["aria-hidden", "true", 1, "home__mode-icon"], [1, "home__mode-info"], [1, "home__mode-header"], [1, "home__mode-name"], [1, "home__mode-badge"], [1, "home__mode-desc"], ["aria-hidden", "true", 1, "home__mode-arrow"], [1, "home__mode-card", "home__mode-card--challenge", 3, "click"], [1, "home__section"], [1, "home__section-title", "home__section-title--child"], [1, "home__mode-card", "home__mode-card--child-1", 3, "click"], [1, "home__mode-card", "home__mode-card--child-2", 3, "click"], [1, "home__mode-card", "home__mode-card--child-3", 3, "click"], [1, "home__footer"], ["aria-label", "Ajustes", 1, "home__settings-btn", 3, "click"], ["name", "settings-outline"], ["aria-label", "Ver ranking global", 1, "home__ranking-btn", 3, "click"], ["name", "trophy-outline"], [1, "home__auth-avatar", 3, "src", "alt"], ["name", "person-circle-outline", 1, "home__auth-avatar-icon"], [1, "home__auth-name"], [1, "home__auth-login-btn", 3, "click"], ["name", "person-circle-outline"]], template: function HomePageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275conditionalCreate(3, HomePageComponent_Conditional_3_Template, 5, 2, "div", 3)(4, HomePageComponent_Conditional_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 5)(6, "div", 6);
    \u0275\u0275element(7, "span", 7)(8, "span", 8)(9, "span", 9)(10, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 11);
    \u0275\u0275text(12, "Block");
    \u0275\u0275elementStart(13, "span", 12);
    \u0275\u0275text(14, " MS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p", 13);
    \u0275\u0275text(16, "Rompecabezas de bloques");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 14);
    \u0275\u0275element(18, "ion-icon", 15);
    \u0275\u0275elementStart(19, "div")(20, "span", 16);
    \u0275\u0275text(21, "R\xE9cord");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "section", 18)(25, "h2", 19);
    \u0275\u0275text(26, "Modo Cl\xE1sico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_27_listener() {
      return ctx.playClassic();
    });
    \u0275\u0275elementStart(28, "span", 21);
    \u0275\u0275text(29, "\u{1F3AE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 22)(31, "div", 23)(32, "span", 24);
    \u0275\u0275text(33, "Cl\xE1sico");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(34, HomePageComponent_Conditional_34_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span", 26);
    \u0275\u0275text(36, "Tablero 8\xD78 \xB7 Sin l\xEDmite de tiempo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "span", 27);
    \u0275\u0275text(38, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 28);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_39_listener() {
      return ctx.goToChallenge();
    });
    \u0275\u0275elementStart(40, "span", 21);
    \u0275\u0275text(41, "\u2694\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 22)(43, "div", 23)(44, "span", 24);
    \u0275\u0275text(45, "Modo Duelo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "span", 26);
    \u0275\u0275text(47, "Comparte tu reto con un c\xF3digo BMS");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "span", 27);
    \u0275\u0275text(49, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "section", 29)(51, "h2", 30);
    \u0275\u0275text(52, "Modo Infantil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 31);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_53_listener() {
      return ctx.playChild(1);
    });
    \u0275\u0275elementStart(54, "span", 21);
    \u0275\u0275text(55, "\u{1F331}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 22)(57, "div", 23)(58, "span", 24);
    \u0275\u0275text(59, "Nivel 1 \u2014 Exploradores");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(60, HomePageComponent_Conditional_60_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 26);
    \u0275\u0275text(62, "Tablero 5\xD75 \xB7 5 minutos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "span", 27);
    \u0275\u0275text(64, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "button", 32);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_65_listener() {
      return ctx.playChild(2);
    });
    \u0275\u0275elementStart(66, "span", 21);
    \u0275\u0275text(67, "\u{1F3D7}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 22)(69, "div", 23)(70, "span", 24);
    \u0275\u0275text(71, "Nivel 2 \u2014 Constructores");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(72, HomePageComponent_Conditional_72_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 26);
    \u0275\u0275text(74, "Tablero 6\xD76 \xB7 10 minutos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "span", 27);
    \u0275\u0275text(76, "\u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "button", 33);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_77_listener() {
      return ctx.playChild(3);
    });
    \u0275\u0275elementStart(78, "span", 21);
    \u0275\u0275text(79, "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 22)(81, "div", 23)(82, "span", 24);
    \u0275\u0275text(83, "Nivel 3 \u2014 Familiar");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(84, HomePageComponent_Conditional_84_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span", 26);
    \u0275\u0275text(86, "Tablero 8\xD78 \xB7 15 minutos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "span", 27);
    \u0275\u0275text(88, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "footer", 34)(90, "button", 35);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_90_listener() {
      return ctx.goToSettings();
    });
    \u0275\u0275element(91, "ion-icon", 36);
    \u0275\u0275text(92, " Ajustes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 37);
    \u0275\u0275listener("click", function HomePageComponent_Template_button_click_93_listener() {
      return ctx.goToLeaderboard();
    });
    \u0275\u0275element(94, "ion-icon", 38);
    \u0275\u0275text(95, " Ranking ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("fullscreen", true);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 3 : 4);
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx.save.progress().highScore.toLocaleString());
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx.save.progress().highScores["classic"] > 0 ? 34 : -1);
    \u0275\u0275advance(26);
    \u0275\u0275conditional(ctx.save.progress().highScores["child-1"] > 0 ? 60 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx.save.progress().highScores["child-2"] > 0 ? 72 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx.save.progress().highScores["child-3"] > 0 ? 84 : -1);
  }
}, dependencies: [CommonModule, IonContent, IonIcon], styles: ["\n\nion-content[_ngcontent-%COMP%] {\n  --padding-top:0;\n  --padding-bottom:0;\n  --padding-start:0;\n  --padding-end:0;\n}\n.home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100%;\n  position: relative;\n  padding: calc(2rem + var(--ion-safe-area-top, env(safe-area-inset-top, 0px))) 1.25rem calc(2rem + var(--ion-safe-area-bottom, env(safe-area-inset-bottom, 0px)));\n  background: var(--color-background);\n  gap: 1.5rem;\n}\n.home__auth-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(0.75rem + var(--ion-safe-area-top, env(safe-area-inset-top, 0px)));\n  right: 1rem;\n  z-index: 10;\n}\n.home__auth-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.home__auth-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid hsla(190, 70%, 65%, 0.4);\n}\n.home__auth-avatar-icon[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  color: var(--color-text-secondary);\n}\n.home__auth-name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.home__auth-login-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.4rem 0.8rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: 2rem;\n  font-family: inherit;\n  font-size: 0.75rem;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  appearance: none;\n}\n.home__auth-login-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.home__auth-login-btn[_ngcontent-%COMP%]:hover {\n  color: #7dd6e8;\n  border-color: rgba(60, 194, 221, 0.4);\n}\n.home__header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n}\n.home__logo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 18px);\n  grid-template-rows: repeat(2, 18px);\n  gap: 4px;\n  margin-bottom: 0.5rem;\n}\n.home__logo-block[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.home__logo-block--1[_ngcontent-%COMP%] {\n  background: #5ed5ed;\n}\n.home__logo-block--2[_ngcontent-%COMP%] {\n  background: #bf8fef;\n}\n.home__logo-block--3[_ngcontent-%COMP%] {\n  background: #f28cbf;\n}\n.home__logo-block--4[_ngcontent-%COMP%] {\n  background: #67e4a6;\n}\n.home__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Outfit, sans-serif;\n  font-size: 2.4rem;\n  font-weight: 800;\n  color: var(--color-text-primary);\n  letter-spacing: -0.02em;\n}\n.home__title-accent[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n.home__subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-text-secondary);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.home__score-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1.5rem;\n  background: var(--color-surface);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--color-border);\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n.home__score-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: #f6ce55;\n}\n.home__score-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-secondary);\n}\n.home__score-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family: Outfit, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #f9dc86;\n}\n.home__section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n  max-width: 420px;\n}\n.home__section-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-text-muted);\n}\n.home__section-title--child[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #2eb873;\n}\n.home__mode-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  background: var(--color-surface);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--color-border);\n  border-radius: 1rem;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n  color: inherit;\n  box-shadow: var(--card-shadow);\n  appearance: none;\n  transition:\n    transform 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n}\n.home__mode-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n.home__mode-card--classic[_ngcontent-%COMP%] {\n  border-color: rgba(94, 213, 237, 0.2509803922);\n}\n.home__mode-card--classic[_ngcontent-%COMP%]:hover {\n  background: rgba(20, 71, 82, 0.5019607843);\n  border-color: #5ed5ed;\n}\n.home__mode-card--challenge[_ngcontent-%COMP%] {\n  border-color: rgba(246, 206, 85, 0.2);\n}\n.home__mode-card--challenge[_ngcontent-%COMP%]:hover {\n  background: rgba(61, 50, 15, 0.5019607843);\n  border-color: #f6ce55;\n}\n.home__mode-card--child-1[_ngcontent-%COMP%] {\n  border-color: rgba(60, 221, 140, 0.2);\n}\n.home__mode-card--child-1[_ngcontent-%COMP%]:hover {\n  background: rgba(15, 61, 38, 0.5019607843);\n  border-color: #3cdd8c;\n}\n.home__mode-card--child-2[_ngcontent-%COMP%] {\n  border-color: rgba(166, 99, 233, 0.2);\n}\n.home__mode-card--child-2[_ngcontent-%COMP%]:hover {\n  background: rgba(46, 23, 69, 0.5019607843);\n  border-color: #a663e9;\n}\n.home__mode-card--child-3[_ngcontent-%COMP%] {\n  border-color: rgba(237, 94, 166, 0.2);\n}\n.home__mode-card--child-3[_ngcontent-%COMP%]:hover {\n  background: rgba(69, 23, 46, 0.5019607843);\n  border-color: #ed5ea6;\n}\n.home__mode-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  flex-shrink: 0;\n}\n.home__mode-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.home__mode-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  gap: 0.5rem;\n}\n.home__mode-name[_ngcontent-%COMP%] {\n  font-family: Outfit, sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n.home__mode-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1rem 0.5rem;\n  background: rgba(246, 206, 85, 0.1215686275);\n  border: 1px solid hsla(45, 90%, 65%, 0.3);\n  border-radius: 999px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #f3d068;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.home__mode-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6a81af;\n}\n.home__mode-arrow[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #475c85;\n  line-height: 1;\n}\n.home__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: auto;\n}\n.home__settings-btn[_ngcontent-%COMP%], \n.home__ranking-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.2rem;\n  background: transparent;\n  border: 1px solid hsla(210, 40%, 40%, 0.2);\n  border-radius: 2rem;\n  font-family: inherit;\n  font-size: 0.85rem;\n  color: #5973a6;\n  cursor: pointer;\n  appearance: none;\n}\n.home__settings-btn[_ngcontent-%COMP%]:hover {\n  color: #85a3e0;\n  border-color: rgba(92, 153, 214, 0.3490196078);\n}\n.home__ranking-btn[_ngcontent-%COMP%] {\n  color: #ddb43c;\n  border-color: rgba(217, 172, 38, 0.2);\n}\n.home__ranking-btn[_ngcontent-%COMP%]:hover {\n  color: #f6ce55;\n  border-color: rgba(235, 194, 71, 0.4);\n}\n/*# sourceMappingURL=home.page.css.map */"] });
var HomePageComponent = _HomePageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePageComponent, [{
    type: Component,
    args: [{ selector: "app-home-page", standalone: true, imports: [CommonModule, IonContent, IonIcon], template: `<ion-content [fullscreen]="true">
  <div class="home">

    <!-- Auth bar -->
    <div class="home__auth-bar">
      @if (auth.isAuthenticated()) {
        <div class="home__auth-user">
          @if (auth.avatarUrl()) {
            <img class="home__auth-avatar" [src]="auth.avatarUrl()!" [alt]="auth.displayName()" />
          } @else {
            <ion-icon name="person-circle-outline" class="home__auth-avatar-icon"></ion-icon>
          }
          <span class="home__auth-name">{{ auth.displayName() }}</span>
        </div>
      } @else {
        <button class="home__auth-login-btn" (click)="goToAuth()">
          <ion-icon name="person-circle-outline"></ion-icon>
          Iniciar sesi\xF3n
        </button>
      }
    </div>

    <!-- Header -->
    <header class="home__header">
      <div class="home__logo" aria-hidden="true">
        <span class="home__logo-block home__logo-block--1"></span>
        <span class="home__logo-block home__logo-block--2"></span>
        <span class="home__logo-block home__logo-block--3"></span>
        <span class="home__logo-block home__logo-block--4"></span>
      </div>
      <h1 class="home__title">Block<span class="home__title-accent"> MS</span></h1>
      <p class="home__subtitle">Rompecabezas de bloques</p>
    </header>

    <!-- Global high score -->
    <div class="home__score-card" aria-label="R\xE9cord personal modo cl\xE1sico">
      <ion-icon name="trophy-outline" class="home__score-icon" aria-hidden="true"></ion-icon>
      <div>
        <span class="home__score-label">R\xE9cord</span>
        <span class="home__score-value">{{ save.progress().highScore.toLocaleString() }}</span>
      </div>
    </div>

    <!-- Classic & Challenge -->
    <section class="home__section" aria-label="Modos de juego">
      <h2 class="home__section-title">Modo Cl\xE1sico</h2>

      <button class="home__mode-card home__mode-card--classic" (click)="playClassic()">
        <span class="home__mode-icon" aria-hidden="true">\u{1F3AE}</span>
        <div class="home__mode-info">
          <div class="home__mode-header">
            <span class="home__mode-name">Cl\xE1sico</span>
            @if (save.progress().highScores['classic'] > 0) {
              <span class="home__mode-badge">\u{1F3C6} {{ save.progress().highScores['classic'].toLocaleString() }}</span>
            }
          </div>
          <span class="home__mode-desc">Tablero 8\xD78 \xB7 Sin l\xEDmite de tiempo</span>
        </div>
        <span class="home__mode-arrow" aria-hidden="true">\u203A</span>
      </button>

      <button class="home__mode-card home__mode-card--challenge" (click)="goToChallenge()">
        <span class="home__mode-icon" aria-hidden="true">\u2694\uFE0F</span>
        <div class="home__mode-info">
          <div class="home__mode-header">
            <span class="home__mode-name">Modo Duelo</span>
          </div>
          <span class="home__mode-desc">Comparte tu reto con un c\xF3digo BMS</span>
        </div>
        <span class="home__mode-arrow" aria-hidden="true">\u203A</span>
      </button>
    </section>

    <!-- Child modes -->
    <section class="home__section">
      <h2 class="home__section-title home__section-title--child">Modo Infantil</h2>

      <button class="home__mode-card home__mode-card--child-1" (click)="playChild(1)">
        <span class="home__mode-icon" aria-hidden="true">\u{1F331}</span>
        <div class="home__mode-info">
          <div class="home__mode-header">
            <span class="home__mode-name">Nivel 1 \u2014 Exploradores</span>
            @if (save.progress().highScores['child-1'] > 0) {
              <span class="home__mode-badge">\u{1F3C6} {{ save.progress().highScores['child-1'].toLocaleString() }}</span>
            }
          </div>
          <span class="home__mode-desc">Tablero 5\xD75 \xB7 5 minutos</span>
        </div>
        <span class="home__mode-arrow" aria-hidden="true">\u203A</span>
      </button>

      <button class="home__mode-card home__mode-card--child-2" (click)="playChild(2)">
        <span class="home__mode-icon" aria-hidden="true">\u{1F3D7}\uFE0F</span>
        <div class="home__mode-info">
          <div class="home__mode-header">
            <span class="home__mode-name">Nivel 2 \u2014 Constructores</span>
            @if (save.progress().highScores['child-2'] > 0) {
              <span class="home__mode-badge">\u{1F3C6} {{ save.progress().highScores['child-2'].toLocaleString() }}</span>
            }
          </div>
          <span class="home__mode-desc">Tablero 6\xD76 \xB7 10 minutos</span>
        </div>
        <span class="home__mode-arrow" aria-hidden="true">\u203A</span>
      </button>

      <button class="home__mode-card home__mode-card--child-3" (click)="playChild(3)">
        <span class="home__mode-icon" aria-hidden="true">\u{1F468}\u200D\u{1F469}\u200D\u{1F467}</span>
        <div class="home__mode-info">
          <div class="home__mode-header">
            <span class="home__mode-name">Nivel 3 \u2014 Familiar</span>
            @if (save.progress().highScores['child-3'] > 0) {
              <span class="home__mode-badge">\u{1F3C6} {{ save.progress().highScores['child-3'].toLocaleString() }}</span>
            }
          </div>
          <span class="home__mode-desc">Tablero 8\xD78 \xB7 15 minutos</span>
        </div>
        <span class="home__mode-arrow" aria-hidden="true">\u203A</span>
      </button>
    </section>

    <!-- Footer -->
    <footer class="home__footer">
      <button class="home__settings-btn" (click)="goToSettings()" aria-label="Ajustes">
        <ion-icon name="settings-outline"></ion-icon> Ajustes
      </button>
      <button class="home__ranking-btn" (click)="goToLeaderboard()" aria-label="Ver ranking global">
        <ion-icon name="trophy-outline"></ion-icon> Ranking
      </button>
    </footer>

  </div>
</ion-content>
`, styles: ["/* src/app/pages/home/home.page.scss */\nion-content {\n  --padding-top:0;\n  --padding-bottom:0;\n  --padding-start:0;\n  --padding-end:0;\n}\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100%;\n  position: relative;\n  padding: calc(2rem + var(--ion-safe-area-top, env(safe-area-inset-top, 0px))) 1.25rem calc(2rem + var(--ion-safe-area-bottom, env(safe-area-inset-bottom, 0px)));\n  background: var(--color-background);\n  gap: 1.5rem;\n}\n.home__auth-bar {\n  position: absolute;\n  top: calc(0.75rem + var(--ion-safe-area-top, env(safe-area-inset-top, 0px)));\n  right: 1rem;\n  z-index: 10;\n}\n.home__auth-user {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.home__auth-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid hsla(190, 70%, 65%, 0.4);\n}\n.home__auth-avatar-icon {\n  font-size: 1.9rem;\n  color: var(--color-text-secondary);\n}\n.home__auth-name {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.home__auth-login-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.4rem 0.8rem;\n  background: var(--color-surface);\n  border: 1px solid var(--color-border);\n  border-radius: 2rem;\n  font-family: inherit;\n  font-size: 0.75rem;\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  appearance: none;\n}\n.home__auth-login-btn ion-icon {\n  font-size: 0.9rem;\n}\n.home__auth-login-btn:hover {\n  color: #7dd6e8;\n  border-color: rgba(60, 194, 221, 0.4);\n}\n.home__header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n}\n.home__logo {\n  display: grid;\n  grid-template-columns: repeat(2, 18px);\n  grid-template-rows: repeat(2, 18px);\n  gap: 4px;\n  margin-bottom: 0.5rem;\n}\n.home__logo-block {\n  border-radius: 4px;\n}\n.home__logo-block--1 {\n  background: #5ed5ed;\n}\n.home__logo-block--2 {\n  background: #bf8fef;\n}\n.home__logo-block--3 {\n  background: #f28cbf;\n}\n.home__logo-block--4 {\n  background: #67e4a6;\n}\n.home__title {\n  margin: 0;\n  font-family: Outfit, sans-serif;\n  font-size: 2.4rem;\n  font-weight: 800;\n  color: var(--color-text-primary);\n  letter-spacing: -0.02em;\n}\n.home__title-accent {\n  color: var(--color-primary);\n}\n.home__subtitle {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-text-secondary);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n.home__score-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1.5rem;\n  background: var(--color-surface);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--color-border);\n  border-radius: 1rem;\n  box-shadow: var(--card-shadow);\n}\n.home__score-icon {\n  font-size: 1.4rem;\n  color: #f6ce55;\n}\n.home__score-label {\n  display: block;\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--color-text-secondary);\n}\n.home__score-value {\n  display: block;\n  font-family: Outfit, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #f9dc86;\n}\n.home__section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  width: 100%;\n  max-width: 420px;\n}\n.home__section-title {\n  margin: 0 0 0.1rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-text-muted);\n}\n.home__section-title--child {\n  margin-top: 0.5rem;\n  color: #2eb873;\n}\n.home__mode-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.1rem;\n  background: var(--color-surface);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid var(--color-border);\n  border-radius: 1rem;\n  cursor: pointer;\n  text-align: left;\n  font-family: inherit;\n  color: inherit;\n  box-shadow: var(--card-shadow);\n  appearance: none;\n  transition:\n    transform 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n}\n.home__mode-card:active {\n  transform: scale(0.97);\n}\n.home__mode-card--classic {\n  border-color: rgba(94, 213, 237, 0.2509803922);\n}\n.home__mode-card--classic:hover {\n  background: rgba(20, 71, 82, 0.5019607843);\n  border-color: #5ed5ed;\n}\n.home__mode-card--challenge {\n  border-color: rgba(246, 206, 85, 0.2);\n}\n.home__mode-card--challenge:hover {\n  background: rgba(61, 50, 15, 0.5019607843);\n  border-color: #f6ce55;\n}\n.home__mode-card--child-1 {\n  border-color: rgba(60, 221, 140, 0.2);\n}\n.home__mode-card--child-1:hover {\n  background: rgba(15, 61, 38, 0.5019607843);\n  border-color: #3cdd8c;\n}\n.home__mode-card--child-2 {\n  border-color: rgba(166, 99, 233, 0.2);\n}\n.home__mode-card--child-2:hover {\n  background: rgba(46, 23, 69, 0.5019607843);\n  border-color: #a663e9;\n}\n.home__mode-card--child-3 {\n  border-color: rgba(237, 94, 166, 0.2);\n}\n.home__mode-card--child-3:hover {\n  background: rgba(69, 23, 46, 0.5019607843);\n  border-color: #ed5ea6;\n}\n.home__mode-icon {\n  font-size: 1.75rem;\n  flex-shrink: 0;\n}\n.home__mode-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  min-width: 0;\n}\n.home__mode-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  gap: 0.5rem;\n}\n.home__mode-name {\n  font-family: Outfit, sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text-primary);\n}\n.home__mode-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1rem 0.5rem;\n  background: rgba(246, 206, 85, 0.1215686275);\n  border: 1px solid hsla(45, 90%, 65%, 0.3);\n  border-radius: 999px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  color: #f3d068;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.home__mode-desc {\n  font-size: 0.8rem;\n  color: #6a81af;\n}\n.home__mode-arrow {\n  font-size: 1.5rem;\n  color: #475c85;\n  line-height: 1;\n}\n.home__footer {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: auto;\n}\n.home__settings-btn,\n.home__ranking-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.2rem;\n  background: transparent;\n  border: 1px solid hsla(210, 40%, 40%, 0.2);\n  border-radius: 2rem;\n  font-family: inherit;\n  font-size: 0.85rem;\n  color: #5973a6;\n  cursor: pointer;\n  appearance: none;\n}\n.home__settings-btn:hover {\n  color: #85a3e0;\n  border-color: rgba(92, 153, 214, 0.3490196078);\n}\n.home__ranking-btn {\n  color: #ddb43c;\n  border-color: rgba(217, 172, 38, 0.2);\n}\n.home__ranking-btn:hover {\n  color: #f6ce55;\n  border-color: rgba(235, 194, 71, 0.4);\n}\n/*# sourceMappingURL=home.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/pages/home/home.page.ts", lineNumber: 22 });
})();
export {
  HomePageComponent
};
//# sourceMappingURL=home.page-U7RJECNJ.js.map
