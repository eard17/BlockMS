import {
  AuthService
} from "./chunk-GH4SA4BM.js";
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
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

// src/app/pages/auth/auth.page.ts
function AuthPageComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-button", 5);
    \u0275\u0275listener("click", function AuthPageComponent_Conditional_8_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signOut());
    });
    \u0275\u0275text(3, "Cerrar sesi\xF3n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auth.displayName());
  }
}
function AuthPageComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2", 6);
    \u0275\u0275text(1, "Iniciar sesi\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 7);
    \u0275\u0275text(3, "Guarda tus r\xE9cords en la nube y participa en rankings globales.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-button", 8);
    \u0275\u0275listener("click", function AuthPageComponent_Conditional_9_Template_ion_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.signIn());
    });
    \u0275\u0275text(5, "Continuar con Google");
    \u0275\u0275elementEnd();
  }
}
var _AuthPageComponent = class _AuthPageComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
  }
  signIn() {
    return __async(this, null, function* () {
      yield this.auth.signInWithGoogle();
    });
  }
  signOut() {
    return __async(this, null, function* () {
      yield this.auth.signOut();
      this.router.navigate(["/home"]);
    });
  }
};
_AuthPageComponent.\u0275fac = function AuthPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthPageComponent)();
};
_AuthPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthPageComponent, selectors: [["app-auth-page"]], decls: 10, vars: 1, consts: [["slot", "start"], ["defaultHref", "/home"], [1, "auth-content"], [1, "auth-card"], [1, "auth-name"], ["expand", "block", "fill", "outline", "color", "danger", 3, "click"], [1, "auth-title"], [1, "auth-sub"], ["expand", "block", 3, "click"]], template: function AuthPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
    \u0275\u0275element(3, "ion-back-button", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "Cuenta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-content", 2)(7, "div", 3);
    \u0275\u0275conditionalCreate(8, AuthPageComponent_Conditional_8_Template, 4, 1)(9, AuthPageComponent_Conditional_9_Template, 6, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.auth.isAuthenticated() ? 8 : 9);
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
], styles: ["\n\n.auth-content[_ngcontent-%COMP%] {\n  --background:#0d1117;\n}\n.auth-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 2rem 1.5rem;\n  max-width: 380px;\n  margin: 2rem auto;\n  background: #1b1f2d;\n  border: 1px solid #2a3040;\n  border-radius: 1.5rem;\n}\n.auth-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #d6ebff;\n}\n.auth-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #8899bb;\n}\n.auth-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #d6ebff;\n}\n/*# sourceMappingURL=auth.page.css.map */"] });
var AuthPageComponent = _AuthPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthPageComponent, [{
    type: Component,
    args: [{ selector: "app-auth-page", standalone: true, imports: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonButtons,
      IonBackButton,
      IonButton
    ], template: '<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot="start"><ion-back-button defaultHref="/home"></ion-back-button></ion-buttons>\n    <ion-title>Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class="auth-content">\n  <div class="auth-card">\n    @if (auth.isAuthenticated()) {\n      <p class="auth-name">{{ auth.displayName() }}</p>\n      <ion-button expand="block" fill="outline" color="danger" (click)="signOut()">Cerrar sesi\xF3n</ion-button>\n    } @else {\n      <h2 class="auth-title">Iniciar sesi\xF3n</h2>\n      <p class="auth-sub">Guarda tus r\xE9cords en la nube y participa en rankings globales.</p>\n      <ion-button expand="block" (click)="signIn()">Continuar con Google</ion-button>\n    }\n  </div>\n</ion-content>\n', styles: ["/* src/app/pages/auth/auth.page.scss */\n.auth-content {\n  --background:#0d1117;\n}\n.auth-card {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 2rem 1.5rem;\n  max-width: 380px;\n  margin: 2rem auto;\n  background: #1b1f2d;\n  border: 1px solid #2a3040;\n  border-radius: 1.5rem;\n}\n.auth-title {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: #d6ebff;\n}\n.auth-sub {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #8899bb;\n}\n.auth-name {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #d6ebff;\n}\n/*# sourceMappingURL=auth.page.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthPageComponent, { className: "AuthPageComponent", filePath: "src/app/pages/auth/auth.page.ts", lineNumber: 16 });
})();
export {
  AuthPageComponent
};
//# sourceMappingURL=auth.page-GRPVFEQK.js.map
