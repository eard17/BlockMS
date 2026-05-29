import {
  Component,
  IonApp,
  IonRouterOutlet,
  IonicRouteStrategy,
  PreloadAllModules,
  RouteReuseStrategy,
  bootstrapApplication,
  provideIonicAngular,
  provideRouter,
  setClassMetadata,
  withHashLocation,
  withPreloading,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
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
import "./chunk-5K356HEJ.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadComponent: () => import("./home.page-SCZ72NXR.js").then((m) => m.HomePageComponent)
  },
  {
    path: "game",
    loadComponent: () => import("./game.page-MEGFY6MG.js").then((m) => m.GamePageComponent)
  },
  {
    path: "settings",
    loadComponent: () => import("./settings.page-6EDS6NG5.js").then((m) => m.SettingsPageComponent)
  },
  {
    path: "challenge",
    loadComponent: () => import("./challenge.page-PBCFANBR.js").then((m) => m.ChallengePageComponent)
  },
  {
    path: "leaderboard",
    loadComponent: () => import("./leaderboard.page-B73OJH2O.js").then((m) => m.LeaderboardPageComponent)
  },
  {
    path: "auth",
    loadComponent: () => import("./auth.page-GRPVFEQK.js").then((m) => m.AuthPageComponent)
  }
];

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app");
    \u0275\u0275element(1, "ion-router-outlet");
    \u0275\u0275elementEnd();
  }
}, dependencies: [IonApp, IonRouterOutlet], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [IonApp, IonRouterOutlet], template: "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation())
  ]
});
//# sourceMappingURL=main.js.map
