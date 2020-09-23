(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/figurecard/figurecard.component */ "./src/app/shared/figurecard/figurecard.component.ts");
/* harmony import */ var _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/imagecard/imagecard.component */ "./src/app/shared/imagecard/imagecard.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/msgiconbtn/msgiconbtn.component */ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_13__["FigurecardComponent"],
                _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_14__["ImagecardComponent"],
                _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
                _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_17__["MsgIconBtnComponent"],
                _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_18__["SweetAlertComponent"],
                _page_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_20__["RootComponent"],
                _page_register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
                _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_25__["PriceTableComponent"],
                _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_26__["PanelsComponent"],
                _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_28__["WizardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"]
            ],
            providers: [_services_settings_service__WEBPACK_IMPORTED_MODULE_27__["SettingsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _page_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page/register/register.component */ "./src/app/page/register/register.component.ts");
/**
 * Created by wangdi on 26/5/17.
 */













var routes = [
    { path: '', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _page_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'dashboard', component: _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"], children: [
            { path: '', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
            { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
            { path: 'table', component: _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"] },
            { path: 'notification', component: _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"] },
            { path: 'alert', component: _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_5__["SweetAlertComponent"] },
            { path: 'settings', component: _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"] },
            { path: 'components/price-table', component: _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_7__["PriceTableComponent"] },
            { path: 'components/panels', component: _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"] },
            { path: 'components/wizard', component: _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_9__["WizardComponent"] }
        ] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 20px 20px 15px 20px;\n}\n\n.card small{\n  font-weight: 300;\n}\n\n.h-tab{\n  margin-top: 35px;\n}\n\n.tab-content{\n  display: none;\n}\n\n.h-tab .tab-link.active{\n  background-color: #ff9800 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2) !important;\n}\n\n.v-tab .tab-link.active{\n  background-color: #00bcd4 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2) !important;\n}\n\n.v-tab .tab-link{\n  margin-bottom: 10px;\n}\n\n.h-tab .tab-link, .v-tab .tab-link{\n  box-shadow: none !important;\n  background-color: transparent !important;\n  color: #555 !important;\n}\n\n.h-tab .tab-link:hover, .v-tab .tab-link:hover{\n  background-color: rgba(200, 200, 200, 0.2) !important;\n}\n\n.h-tab .tab-link.active:hover{\n  background-color: #ff9800 !important;\n}\n\n.v-tab .tab-link.active:hover{\n  background-color: #00bcd4 !important;\n}\n\n.h-tab .tab-content{\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC9wYW5lbHMvcGFuZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsdUJBQXVCO0VBQ3ZCLDZJQUE2STtDQUM5STs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsNklBQTZJO0NBQzlJOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLHlDQUF5QztFQUN6Qyx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxzREFBc0Q7Q0FDdkQ7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50L3BhbmVscy9wYW5lbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTVweCAyMHB4O1xufVxuXG4uY2FyZCBzbWFsbHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmgtdGFie1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4udGFiLWNvbnRlbnR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oLXRhYiAudGFiLWxpbmsuYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKSAhaW1wb3J0YW50O1xufVxuXG4udi10YWIgLnRhYi1saW5rLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjZweCAtMTJweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLnYtdGFiIC50YWItbGlua3tcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmgtdGFiIC50YWItbGluaywgLnYtdGFiIC50YWItbGlua3tcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xufVxuXG4uaC10YWIgLnRhYi1saW5rOmhvdmVyLCAudi10YWIgLnRhYi1saW5rOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLmgtdGFiIC50YWItbGluay5hY3RpdmU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDAgIWltcG9ydGFudDtcbn1cblxuLnYtdGFiIC50YWItbGluay5hY3RpdmU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcbn1cblxuLmgtdGFiIC50YWItY29udGVudHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Panels\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Horizontal Tabs</small></h4>\n        <div class=\"h-tab\">\n          <div class=\"tab\">\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link default-active\" (click)=\"tabClick($event, 'profile')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'settings')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'options')\">OPTIONS</button>\n          </div>\n          <div id=\"profile\" class=\"tab-content\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget vestibulum tellus. Pellentesque et massa ac tellus tincidunt luctus. Sed ac quam vitae ante tincidunt fringilla nec nec elit. Mauris elementum elit tellus, quis sodales nulla facilisis vel. Donec porta posuere velit ac malesuada. \n            <br/><br/>\n            Donec suscipit tortor lorem, vitae mollis urna rhoncus ac. Praesent convallis mauris turpis, quis mollis magna maximus ut. Aenean vel magna vitae est vulputate lobortis quis vitae lectus. Curabitur non eros tincidunt, feugiat ex sed.\n          </div>\n          <div id=\"settings\" class=\"tab-content\">\n            Curabitur non eros tincidunt, feugiat ex sed, accumsan nunc. Aenean interdum, sem nec ultricies luctus, ligula elit convallis nisi, auctor lacinia ante leo quis mi. Vivamus viverra libero sit amet quam venenatis vestibulum. Fusce interdum sapien id dui sollicitudin condimentum .\n\n            <br/><br/>\n            Proin mattis nec urna in placerat. Vivamus pretium leo vel diam tempor, nec tincidunt felis convallis. Ut auctor mauris nec quam eleifend volutpat. Sed leo mi, pulvinar sed eleifend in, consectetur in purus.\n          </div>\n          <div id=\"options\" class=\"tab-content\">\n            Ut venenatis magna nisl, sit amet convallis est aliquet nec. Curabitur blandit elementum suscipit. Ut ac odio sapien. Donec dapibus, urna id fermentum sagittis, purus turpis consequat massa, et efficitur lacus mi rutrum arcu. Nullam et scelerisque velit.<br/><br/> Sed tellus turpis, facilisis eget convallis id, euismod et diam. Aliquam ultricies, quam eu scelerisque posuere, lorem justo consectetur orci, ut sagittis eros dolor sit amet justo. Praesent interdum, magna a sagittis vulputate, magna felis commodo quam, sed tristique nisi est vitae mauris.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Vertical Tabs</small></h4>\n        <div class=\"row v-tab page-title\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link default-active\" (click)=\"vTabClick($event, 'one')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'two')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'three')\">OPTIONS</button>\n          </div>\n          <div class=\"col-md-8\">\n            <div id=\"one\" class=\"tab-content\">\n              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              This is very nice.\n            </div>\n            <div id=\"two\" class=\"tab-content\">\n              Fusce congue aliquet dui, ut efficitur augue gravida id. Quisque faucibus egestas ligula, a condimentum dolor fringilla nec. Aenean finibus augue dictum nisi semper commodo. Fusce commodo dapibus velit, ut congue felis eleifend quis. Nulla convallis, arcu sit amet vehicula facilisis, metus nisi convallis ante, id faucibus turpis odio non lacus. <br/><br/>\n              Fusce commodo dapibus velit, ut congue felis eleifend quis. Nulla convallis, arcu sit amet vehicula facilisis, metus nisi convallis ante, id faucibus turpis odio non lacus. \n            </div>\n            <div id=\"three\" class=\"tab-content\">\n              Donec suscipit tortor lorem, vitae mollis urna rhoncus ac. Praesent convallis mauris turpis, quis mollis magna maximus ut. Aenean vel magna vitae est vulputate lobortis quis vitae lectus. Curabitur non eros tincidunt, feugiat ex sed, accumsan nunc. Aenean interdum, sem nec ultricies luctus, ligula elit convallis nisi, auctor lacinia ante leo quis mi. <br/><br/>\n              Vivamus viverra libero sit amet quam venenatis vestibulum. Fusce interdum sapien id dui sollicitudin condimentum gravida quis velit. \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.ts ***!
  \****************************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent.prototype.ngOnInit = function () {
    };
    PanelsComponent.prototype.ngAfterViewInit = function () {
        var activeTabs = document.getElementsByClassName('default-active');
        for (var i = 0; i < activeTabs.length; i++) {
            activeTabs[i].click();
        }
    };
    PanelsComponent.prototype.tabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.h-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.h-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent.prototype.vTabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.v-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.v-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/dashboard/component/panels/panels.component.html"),
            styles: [__webpack_require__(/*! ./panels.component.css */ "./src/app/dashboard/component/panels/panels.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 25px 20px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card h6, p {\n  color: #999;\n}\n\n.icon{\n  margin-top: 20px;\n  width: 130px;\n  height: 130px;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon i{\n  font-size: 55px;\n  color: #e91e63;\n}\n\n.card-title{\n  margin-top: 30px;\n  margin-bottom: 3px;\n}\n\n.card-description{\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC9wcmljZXRhYmxlL3ByaWNldGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50L3ByaWNldGFibGUvcHJpY2V0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gIHBhZGRpbmc6IDI1cHggMjBweCAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIGg2LCBwIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5pY29ue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIGl7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICNlOTFlNjM7XG59XG5cbi5jYXJkLXRpdGxle1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5jYXJkLWRlc2NyaXB0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Price Table\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"row\">\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Individual</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">person</i>\n            </div>\n            <h3 class=\"card-title\">Free</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Small Company</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">weekend</i>\n            </div>\n            <h3 class=\"card-title\">Rs.59 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Enterprise</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">home</i>\n            </div>\n            <h3 class=\"card-title\">Rs.109 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.ts ***!
  \************************************************************************/
/*! exports provided: PriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTableComponent", function() { return PriceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceTableComponent = /** @class */ (function () {
    function PriceTableComponent() {
    }
    PriceTableComponent.prototype.ngOnInit = function () {
    };
    PriceTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricetable',
            template: __webpack_require__(/*! ./pricetable.component.html */ "./src/app/dashboard/component/pricetable/pricetable.component.html"),
            styles: [__webpack_require__(/*! ./pricetable.component.css */ "./src/app/dashboard/component/pricetable/pricetable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PriceTableComponent);
    return PriceTableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wizard-panel{\n\n}\n\n.wizard-header{\n  padding: 25px 0 35px;\n}\n\n.wizard-navigation{\n  position: relative;\n}\n\n.nav-pills{\n  background-color: rgba(200, 200, 200, 0.2);\n  width: 100%;\n}\n\n.nav-pills li{\n  width: 33.3333%;\n  float: left;\n  margin-left: 0;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  color: #555;\n  padding: 10px 0;\n}\n\n.move-tab{\n  position: absolute;\n  background-color: #f44336;\n  box-shadow: 0 16px 26px -10px rgba(244, 67, 54, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n  font-weight: 500;\n  border-radius: 4px;\n  color: #fff;\n  top: -2px;\n  left: -1vw;\n  width: calc((100% - 260px) / 2);\n  height: 114%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 500ms cubic-bezier(0.29, 1.42, 0.79, 1);\n}\n\n.wizard-body{\n  min-height: 350px;\n  padding: 15px;\n}\n\n.wizard-footer{\n  display: flex;\n  padding: 10px;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7RUFDRSxxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSwyQ0FBMkM7RUFDM0MsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0lBQWtJO0VBQ2xJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix3REFBd0Q7Q0FDekQ7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCwrQkFBK0I7Q0FDaEMiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50L3dpemFyZC93aXphcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXphcmQtcGFuZWx7XG5cbn1cblxuLndpemFyZC1oZWFkZXJ7XG4gIHBhZGRpbmc6IDI1cHggMCAzNXB4O1xufVxuXG4ud2l6YXJkLW5hdmlnYXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1waWxsc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1waWxscyBsaXtcbiAgd2lkdGg6IDMzLjMzMzMlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgY29sb3I6ICM1NTU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLm1vdmUtdGFie1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyNnB4IC0xMHB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTYpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNDQsIDY3LCA1NCwgMC4yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAtMXZ3O1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDI2MHB4KSAvIDIpO1xuICBoZWlnaHQ6IDExNCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgY3ViaWMtYmV6aWVyKDAuMjksIDEuNDIsIDAuNzksIDEpO1xufVxuXG4ud2l6YXJkLWJvZHl7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ud2l6YXJkLWZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Wizard\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <div class=\"wizard-panel card\">\n        <div class=\"wizard-header\">\n          <h3 class=\"text-center\">Build Your Profile</h3>\n          <h5 class=\"text-center\" style=\"margin-top: 5px; padding: 0 20px;\">This information will let us know more about you.</h5>\n        </div>\n        <div class=\"wizard-navigation\">\n          <ul class=\"nav nav-pills\">\n            <li class=\"text-uppercase text-center\">About</li>\n            <li class=\"text-uppercase text-center\">Account</li>\n            <li class=\"text-uppercase text-center\">Address</li>\n          </ul>\n          <div class=\"move-tab text-center text-uppercase\">About</div>\n        </div>\n        <div class=\"wizard-body\">\n          <div class=\"wizard-tab\">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget vestibulum tellus. Pellentesque et massa ac tellus tincidunt luctus. Sed ac quam vitae ante tincidunt fringilla nec nec elit. Mauris elementum elit tellus, quis sodales nulla facilisis vel. Donec porta posuere velit ac malesuada. In iaculis tincidunt consectetur. Pellentesque quis risus vel libero varius ultrices non at turpis.\n\n            Donec suscipit tortor lorem, vitae mollis urna rhoncus ac. Praesent convallis mauris turpis, quis mollis magna maximus ut. Aenean vel magna vitae est vulputate lobortis quis vitae lectus. Curabitur non eros tincidunt, feugiat ex sed, accumsan nunc. Aenean interdum, sem nec ultricies luctus, ligula elit convallis nisi, auctor lacinia ante leo quis mi. Vivamus viverra libero sit amet quam venenatis vestibulum. Fusce interdum sapien id dui sollicitudin condimentum gravida quis velit. Nam sollicitudin tempus urna vel ultricies. Vestibulum aliquet ante ut arcu tristique mattis. Pellentesque neque justo, scelerisque nec nisl ac, fringilla auctor tellus. Vestibulum a venenatis sem.\n          </div>\n          <div class=\"wizard-tab\">\n            Donec suscipit tortor lorem, vitae mollis urna rhoncus ac. Praesent convallis mauris turpis, quis mollis magna maximus ut. Aenean vel magna vitae est vulputate lobortis quis vitae lectus. Curabitur non eros tincidunt, feugiat ex sed, accumsan nunc. Aenean interdum, sem nec ultricies luctus, ligula elit convallis nisi, auctor lacinia ante leo quis mi. Vivamus viverra libero sit amet quam venenatis vestibulum. Fusce interdum sapien id dui sollicitudin condimentum gravida quis velit. Nam sollicitudin tempus urna vel ultricies. Vestibulum aliquet ante ut arcu tristique mattis. Pellentesque neque justo, scelerisque nec nisl ac, fringilla auctor tellus. Vestibulum a venenatis sem.\n\n            Proin mattis nec urna in placerat. Vivamus pretium leo vel diam tempor, nec tincidunt felis convallis. Ut auctor mauris nec quam eleifend volutpat. Sed leo mi, pulvinar sed eleifend in, consectetur in purus. Etiam ultrices leo tellus, eu accumsan nisi aliquam in. Praesent vestibulum enim ac nisi sagittis ullamcorper. Ut vitae lectus bibendum, ornare metus non, sollicitudin ante.\n          </div>\n          <div class=\"wizard-tab\">\n            Proin mattis nec urna in placerat. Vivamus pretium leo vel diam tempor, nec tincidunt felis convallis. Ut auctor mauris nec quam eleifend volutpat. Sed leo mi, pulvinar sed eleifend in, consectetur in purus. Etiam ultrices leo tellus, eu accumsan nisi aliquam in. Praesent vestibulum enim ac nisi sagittis ullamcorper. Ut vitae lectus bibendum, ornare metus non, sollicitudin ante.\n\n            Ut venenatis magna nisl, sit amet convallis est aliquet nec. Curabitur blandit elementum suscipit. Ut ac odio sapien. Donec dapibus, urna id fermentum sagittis, purus turpis consequat massa, et efficitur lacus mi rutrum arcu. Nullam et scelerisque velit. Sed tellus turpis, facilisis eget convallis id, euismod et diam. Aliquam ultricies, quam eu scelerisque posuere, lorem justo consectetur orci, ut sagittis eros dolor sit amet justo. Praesent interdum, magna a sagittis vulputate, magna felis commodo quam, sed tristique nisi est vitae mauris.\n          </div>\n        </div>\n        <div class=\"wizard-footer\">\n          <button id=\"preBtn\" class=\"btn btn-danger\" (click)=\"preOnClick()\">Previous</button>\n          <button id=\"nextBtn\" class=\"btn btn-success\" (click)=\"nextOnClick()\">Click me to navigate</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.ts ***!
  \****************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this.tabIndex = 0;
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var preBtn = document.getElementById('preBtn');
        var moveTab = document.querySelector('.move-tab');
        preBtn.style.visibility = 'hidden';
        // to ensure moveTab can stay correct position
        $(window).resize(function () {
            var screenWidth = document.body.clientWidth;
            if (screenWidth > 990) {
                moveTab.style.width = 'calc((100% - 260px) / 2)';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '20vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '42vw';
                }
            }
            else {
                moveTab.style.width = '34%';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '30vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '61.5vw';
                }
            }
        });
        var tabs = document.getElementsByClassName('wizard-tab');
        for (var i = 1; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
    };
    WizardComponent.prototype.preOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 2) {
            this.tabIndex--;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            nextBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex--;
            moveTab.style.left = '-1vw';
            preBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'About';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent.prototype.nextOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 0) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            preBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '42vw' : '61.5vw';
            nextBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'Address';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/dashboard/component/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/dashboard/component/wizard/wizard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Dashboard\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"98\"\n        headerIcon=\"weekend\"\n        category=\"Bookings\"\n        footContent=\"Get More Space...\"\n        footerIcon=\"warning\"\n        linearColor=\"linear-gradient(60deg, #ffa726, #fb8c00)\"\n        boxShadow=\"0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"8607\"\n        headerIcon=\"equalizer\"\n        category=\"Views\"\n        footContent=\"Google Analytics\"\n        footerIcon=\"local_offer\"\n        linearColor=\"linear-gradient(60deg, #ef5350, #e53935)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"Rs.13,155\"\n        headerIcon=\"store\"\n        category=\"Revenue\"\n        footContent=\"Last 24 Hours\"\n        footerIcon=\"date_range\"\n        linearColor=\"linear-gradient(60deg, #66bb6a, #43a047)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"+564\"\n        headerIcon=\"mic\"\n        category=\"Followers\"\n        footContent=\"Few Seconds ago\"\n        footerIcon=\"update\"\n        linearColor=\"linear-gradient(60deg, #26c6da, #00acc1)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)\">\n      </app-figurecard>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 10px\">\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-2.jpg\"\n        title=\"Cozy luxury Apartment\"\n        desc=\"The place is close to Besant Nagar Beach and bus stop just few min by walk and...\"\n        footerTitle=\"Rs.999/night\"\n        position=\"Thiruvanmiyur, Chennai\">\n      </app-imagecard>\n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-3.jpg\"\n        title=\"Office Studio\"\n        desc=\"The place is close to Metro Station and bus stop just few min by walk and near...\"\n        footerTitle=\"Rs.1,550/night\"\n        position=\"Madhavaram, Chennai\">\n      </app-imagecard>\n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-1.jpg\"\n        title=\"Beautiful 4BHK apartment\"\n        desc=\"The place is close to Metro Station and bus stop just 2 min by walk and near...\"\n        footerTitle=\"Rs.1,200/night\"\n        position=\"Guindy, Chennai\">\n      </app-imagecard>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-card{\n  padding: 23px 20px 18px 20px;\n}\n\n.notification-card h4{\n  margin-bottom: 15px;\n}\n\n.place{\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtDQUM5Qjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNhcmR7XG4gIHBhZGRpbmc6IDIzcHggMjBweCAxOHB4IDIwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tY2FyZCBoNHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnBsYWNle1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Notification\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Notifications</h3>\n  </div>\n  <div class=\"row\">\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notifications Style</h4>\n        <div class=\"alert alert-info\">\n          <span>This is a simple notification</span>\n        </div>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a simple notification</span>\n        </div>\n        <div class=\"alert alert-info alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a notification with close button and icon. It can have many lines.\n             You can see that the icon and the close button are always vertically aligned.\n              This is a pretty notification. So you don't have to worry about the style.</span>\n        </div>\n        <div class=\"alert alert-rose alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a notification with close button and icon. It can have many lines.\n             You can see that the icon and the close button are always vertically aligned.\n              This is a pretty notification. So you don't have to worry about the style.</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notification States</h4>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>INFO - This is a regular notification made with \".alert-info\"</span>\n        </div>\n        <div class=\"alert alert-success\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>SUCCESS - This is a regular notification made with \".alert-success\"</span>\n        </div>\n        <div class=\"alert alert-warning\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>WARNING - This is a regular notification made with \".alert-warning\"</span>\n        </div>\n        <div class=\"alert alert-danger\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>DANGER - This is a regular notification made with \".alert-danger\"</span>\n        </div>\n        <div class=\"alert alert-primary\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>PRIMARY - This is a regular notification made with \".alert-primary\"</span>\n        </div>\n        <div class=\"alert alert-rose\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>ROSE - This is a regular notification made with \".alert-rose\"</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin: 35px 0 20px 0;\">\n    <div class=\"card place\">\n      <h4 class=\"text-center\">Notifications Places</h4>\n      <p class=\"text-center\">Click to view notifications</p>\n      <div class=\"row\" style=\"margin-top: 15px\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-left')\">TOP LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-center')\">TOP CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-right')\">TOP RIGHT</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row page-title\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-left')\">BOTTOM LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-center')\">BOTTOM CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-right')\">BOTTOM RIGHT</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.btnClick = function (position) {
        var from = 'top';
        var align = 'right';
        var type = 'info';
        switch (position) {
            case 'top-left':
                align = 'left';
                type = 'rose';
                break;
            case 'top-center':
                align = 'center';
                type = 'success';
                break;
            case 'bottom-left':
                align = 'left';
                from = 'bottom';
                type = 'primary';
                break;
            case 'bottom-center':
                align = 'center';
                from = 'bottom';
                type = 'warning';
                break;
            case 'bottom-right':
                from = 'bottom';
                type = 'danger';
                break;
        }
        $.notify({
            message: 'Welcome to <b>MY DASHBOARD</b> - a beautiful dashboard for angular material.',
        }, {
            placement: { from: from, align: align },
            offset: { x: 20, y: 35 },
            type: type,
            template: "<div class=\"alert alert-{0} alert-with-icon col-md-4\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>{2}</span>\n        </div>"
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/dashboard/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/dashboard/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-profile{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 25px;\n  position: relative;\n  /*margin-top: 60px;*/\n}\n\n.profile{\n  position: absolute;\n  top: -40px;\n}\n\n.profile img{\n  border-radius: 50%;\n  width: 130px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.right-profile h6{\n  margin-top: 100px;\n  margin-bottom: 8px;\n  color: #999;\n}\n\n.right-profile h4{\n  margin-bottom: 5px;\n}\n\n.right-profile p{\n  color: #999;\n}\n\n.right-profile button {\n  margin-top: 15px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n.mat-input-container{\n  width: 100%;\n}\n\n.category{\n  font-weight: 300;\n}\n\nform{\n  margin-top: 30px;\n}\n\n.row{\n  margin-top: 15px;\n}\n\n.mat-input-container textarea{\n  height: 90px;\n}\n\n.textarea-label{\n  color: #aaa;\n  margin-bottom: 10px;\n}\n\n.action-btn{\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwwSEFBMEg7Q0FDM0g7O0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCx1RkFBdUY7RUFDdkYseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztDQUNaOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1wcm9maWxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qbWFyZ2luLXRvcDogNjBweDsqL1xufVxuXG4ucHJvZmlsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MHB4O1xufVxuXG4ucHJvZmlsZSBpbWd7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucmlnaHQtcHJvZmlsZSBoNntcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5yaWdodC1wcm9maWxlIGg0e1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yaWdodC1wcm9maWxlIHB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ucmlnaHQtcHJvZmlsZSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNCk7XG4gIC8qbWFyZ2luOiAtMjBweCAxNXB4IDA7Ki9cbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB0b3A6IC0yM3B4O1xufVxuXG4uY2FyZC1oZWFkZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLXRpdGxle1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5cbi5tYXQtaW5wdXQtY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhdGVnb3J5e1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5mb3Jte1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucm93e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWF0LWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4udGV4dGFyZWEtbGFiZWx7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWN0aW9uLWJ0bntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"User Profile\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">perm_identity</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Edit Profile -\n            <small class=\"category\">Complete your profile</small>\n          </h4>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" value=\"Ci\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" value=\"Clia\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Address\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"City\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Country\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Postcode\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label class=\"textarea-label\">About Me</label>\n                <mat-form-field color=\"accent\">\n                  <textarea matInput placeholder=\"\"></textarea>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row action-btn\">\n              <button md-raised-button type=\"submit\" class=\"btn btn-rose\">UPDATE PROFILE</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card right-profile\">\n        <div class=\"profile\">\n          <img src=\"../../../assets/img/marc.jpg\" alt=\"profile\"/>\n        </div>\n        <h6>CEO / CO-FOUNDER</h6>\n        <h4>{{ firstName }} {{ lastName }}</h4>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus, ante quis luctus ultrices, erat erat aliquam sapien, et sagittis justo lectus id dolor. Mauris quis bibendum velit, at faucibus sem. Morbi hendrerit fringilla sem sed condimentum. Maecenas non posuere est, et malesuada mi. Aliquam semper, sapien vitae posuere efficitur, orci dui maximus mauris, nec faucibus ante mi vitae ante. Mauris rhoncus finibus nisl a congue. Praesent dapibus eros convallis ullamcorper congue......</p>\n        <button mat-raised-button class=\"btn btn-rose btn-round\">CHANGE</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = 'John';
        this.lastName = 'Doe';
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/root/root.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n\n.sidebar-panel{\n  background-color: #d81b60  !important;\n  width: 260px;\n  position: fixed;\n  height: 100%;\n  /*background-color: #D80B0B;*/\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms;\n}\n\n.main-panel{\n  width: 100%;\n  flex: 1;\n  padding-left: 260px;\n}\n\n.sidebar-background{\n  position: absolute;\n  z-index: 0;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n  transition: all 500ms;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVk7RUFDWixRQUFRO0NBQ1Q7O0FBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDBIQUEwSDtFQUsxSCxzQkFBc0I7Q0FDdkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYiwwQkFBMEI7RUFLMUIsc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG59XG5cbi5zaWRlYmFyLXBhbmVse1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgxYjYwICAhaW1wb3J0YW50O1xuICB3aWR0aDogMjYwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNEODBCMEI7Ki9cbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcztcbn1cblxuLm1haW4tcGFuZWx7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDI2MHB4O1xufVxuXG4uc2lkZWJhci1iYWNrZ3JvdW5ke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuMjtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar-panel\" id=\"sidebar\" [style.background-color]=\"backgroundColor\">\n\n    <div class=\"sidebar-background\" [style.background-image]=\"'url(../assets/img/sidebar-' + id + '.jpg)'\"></div>\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-panel\" id=\"main-panel\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = /** @class */ (function () {
    function RootComponent(settingService) {
        this.settingService = settingService;
        this.id = settingService.getSidebarImageIndex() + 1;
        this.backgroundColor = settingService.getSidebarColor();
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.sidebarImageIndexUpdate.subscribe(function (id) {
            _this.id = id + 1;
        });
        this.settingService.sidebarColorUpdate.subscribe(function (color) {
            _this.backgroundColor = color;
        });
    };
    RootComponent.prototype.ngOnDestroy = function () {
        this.settingService.sidebarImageIndexUpdate.unsubscribe();
        this.settingService.sidebarColorUpdate.unsubscribe();
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/dashboard/root/root.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-btn{\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.sidebar-img{\n  max-width: 100%;\n  border-radius: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: all 400ms;\n  border: 4px solid transparent;\n}\n\n.btn-hover:hover{\n  border-color: rgba(0, 187, 255, 0.5);\n  transition: all 400ms;\n}\n\n.active{\n  border-color: #00bbff;\n}\n\n.dot-row{\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 40px 0;\n}\n\n.dot{\n  border: 3px solid transparent;\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.purple{\n  background-color: #9c27b0;\n}\n\n.blue{\n  background-color: #00bcd4;\n}\n\n.dodgerblue{\n  background-color: dodgerblue;\n}\n\n.green{\n  background-color: #4caf50;\n}\n\n.orange{\n  background-color: #ff9800;\n}\n\n.red{\n  background-color: #f44336;\n}\n\n.white{\n  background-color: rgba(200, 200, 200, 0.2);\n}\n\n.rose{\n  background-color: #e91e63;\n}\n\n.black{\n  background-color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUtoQixzQkFBc0I7RUFDdEIsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UscUNBQXFDO0VBS3JDLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsc0JBQXNCO0NBQ3ZCOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSwyQ0FBMkM7Q0FDNUM7O0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyLWJ0bntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNpZGViYXItaW1ne1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4taG92ZXI6aG92ZXJ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAxODcsIDI1NSwgMC41KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbn1cblxuLmFjdGl2ZXtcbiAgYm9yZGVyLWNvbG9yOiAjMDBiYmZmO1xufVxuXG4uZG90LXJvd3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwIDQwcHggMDtcbn1cblxuLmRvdHtcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnB1cnBsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbn1cblxuLmJsdWV7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG59XG5cbi5kb2RnZXJibHVle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG4uZ3JlZW57XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG59XG5cbi5vcmFuZ2V7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XG59XG5cbi5yZWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi53aGl0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjIpO1xufVxuXG4ucm9zZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5MWU2Mztcbn1cblxuLmJsYWNre1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Settings\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Filters</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot purple btn-hover\" (click)=\"filterChooseClick('#9c27b0')\"></div>\n        <div class=\"dot blue btn-hover\" (click)=\"filterChooseClick('#00bcd4')\"></div>\n        <div class=\"dot green btn-hover\" (click)=\"filterChooseClick('#4caf50')\"></div>\n        <div class=\"dot orange btn-hover\" (click)=\"filterChooseClick('#ff9800')\"></div>\n        <div class=\"dot red btn-hover\" (click)=\"filterChooseClick('#f44336')\"></div>\n        <div class=\"dot white btn-hover\" (click)=\"filterChooseClick('#fff')\"></div>\n        <div class=\"dot rose btn-hover\" (click)=\"filterChooseClick('#e91e63')\"></div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Background</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot red btn-hover\" (click)=\"bgColorChooseClick('#D80B0B')\"></div>\n        <div class=\"dot dodgerblue btn-hover\" (click)=\"bgColorChooseClick('dodgerblue')\"></div>\n        <div class=\"dot white btn-hover\" (click)=\"bgColorChooseClick('#fff')\"></div>\n        <div class=\"dot black btn-hover\" (click)=\"bgColorChooseClick('#000')\"></div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 col-md-offset-1 background-image\">\n      <h4 class=\"text-uppercase text-center\">SideBar Background Image</h4>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-1.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(0)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-2.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(1)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-3.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(2)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-4.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(3)\"/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService) {
        this.settingService = settingService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var defaultId = this.settingService.getSidebarImageIndex();
        var sidebarImgs = document.getElementsByClassName('sidebar-img');
        sidebarImgs[defaultId].className = sidebarImgs[defaultId].className + ' active';
    };
    SettingsComponent.prototype.bgChooseClick = function (id) {
        this.settingService.setSidebarImageIndex(id);
        var sidebarImgs = document.getElementsByClassName('sidebar-img');
        for (var i = 0; i < sidebarImgs.length; i++) {
            sidebarImgs[i].className = sidebarImgs[i].className.replace(' active', '');
        }
        sidebarImgs[id].className = sidebarImgs[id].className + ' active';
    };
    SettingsComponent.prototype.filterChooseClick = function (color) {
        this.settingService.setSidebarFilter(color);
    };
    SettingsComponent.prototype.bgColorChooseClick = function (color) {
        this.settingService.setSidebarColor(color);
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/dashboard/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  display: flex;\n  flex-direction: column;\n  padding: 25px 20px 22px 20px;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.card h5{\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N3ZWV0YWxlcnQvc3dlZXRhbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3dlZXRhbGVydC9zd2VldGFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjVweCAyMHB4IDIycHggMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmQgaDV7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Sweet Alert\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Alert</h3>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center subtitle\">A beautiful plugin, that replace the classic alert. Please checkout the <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation</a>.</p>\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Basic example</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('basic')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A title with a text under</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('text')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A success message</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('success')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Custom HTML description</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('html')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('confirm')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('cancel')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A message with auto close timer set to 2 seconds</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('close')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Modal window with input field</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('input')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.ts ***!
  \**************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.ngOnInit = function () {
    };
    SweetAlertComponent.prototype.openAlert = function (type) {
        switch (type) {
            case 'basic':
                swal({
                    title: 'Here\'s a message!',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'text':
                swal({
                    title: 'Good job!',
                    text: 'It\'s pretty, isn\'t it?',
                    confirmButtonClass: 'btn btn-info'
                });
                break;
            case 'success':
                swal({
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'html':
                swal({
                    title: '<i>HTML</i> <u>example</u>',
                    type: 'info',
                    html: "You can use <b>bold text</b><a href=\"//github.com\">links</a>and other HTML tags",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn btn-warning'
                });
                break;
            case 'confirm':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'YES, DELETE IT!'
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                });
                break;
            case 'cancel':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'YES, DELETE IT!',
                    cancelButtonText: 'NO, CANCEL!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                }, function (dismiss) {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                        swal({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            type: 'error',
                            confirmButtonClass: 'btn btn-info'
                        });
                    }
                });
                break;
            case 'close':
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000,
                    showConfirmButton: false
                }).then(function () { }, 
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer');
                    }
                });
                break;
            case 'input':
                swal({
                    title: 'Input something',
                    input: 'text',
                    inputClass: 'mat-input-container',
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    showLoaderOnConfirm: true,
                    preConfirm: function (text) {
                        swal({
                            text: 'Your entered: ' + text,
                            type: 'success',
                            confirmButtonClass: 'btn btn-info'
                        });
                    },
                    allowOutsideClick: false
                });
                break;
        }
    };
    SweetAlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sweetalert',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/dashboard/sweetalert/sweetalert.component.html"),
            styles: [__webpack_require__(/*! ./sweetalert.component.css */ "./src/app/dashboard/sweetalert/sweetalert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/table/table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  margin-top: 10px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxREFBcUQ7RUFDckQsdUZBQXVGO0VBQ3ZGLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyMzMsIDMwLCA5OSwgMC40KTtcbiAgLyptYXJnaW46IC0yMHB4IDE1cHggMDsqL1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRvcDogLTIzcHg7XG59XG5cbi5jYXJkLWhlYWRlciBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/table/table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Table List\"></app-navbar>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">assignment</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Simple Table</h4>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th>First Name</th>\n                  <th>Country</th>\n                  <th>City</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Trinita</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.36,738</td>\n                </tr>\n                <tr>\n                  <td>Priya</td>\n                  <td>India</td>\n                  <td>Bangalore</td>\n                  <td class=\"text-primary\">Rs.23,789</td>\n                </tr>\n                <tr>\n                  <td>Nithya</td>\n                  <td>India</td>\n                  <td>Hyderabad</td>\n                  <td class=\"text-primary\">Rs.56,142</td>\n                </tr>\n                <tr>\n                  <td>Divya</td>\n                  <td>India</td>\n                  <td>Madurai</td>\n                  <td class=\"text-primary\">Rs.38,735</td>\n                </tr>\n                <tr>\n                  <td>Anitha</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.63,542</td>\n                </tr>\n                <tr>\n                  <td>Janani</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.78,615</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">assignment</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Striped Table</h4>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th>First Name</th>\n                  <th>Country</th>\n                  <th>City</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Trinita</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.36,738</td>\n                </tr>\n                <tr>\n                  <td>Priya</td>\n                  <td>India</td>\n                  <td>Bangalore</td>\n                  <td class=\"text-primary\">Rs.23,789</td>\n                </tr>\n                <tr>\n                  <td>Nithya</td>\n                  <td>India</td>\n                  <td>Hyderabad</td>\n                  <td class=\"text-primary\">Rs.56,142</td>\n                </tr>\n                <tr>\n                  <td>Divya</td>\n                  <td>India</td>\n                  <td>Madurai</td>\n                  <td class=\"text-primary\">Rs.38,735</td>\n                </tr>\n                <tr>\n                  <td>Anitha</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.63,542</td>\n                </tr>\n                <tr>\n                  <td>Janani</td>\n                  <td>India</td>\n                  <td>Chennai</td>\n                  <td class=\"text-primary\">Rs.78,615</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/dashboard/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/page/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n.background{\n  background: url('lock_bg.jpg') no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.card{\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  -webkit-animation-name: card;\n  animation-name: card;\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n@-webkit-keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n@keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n.card-header{\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 100%;\n  padding: 25px;\n  border-radius: 3px;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card-header h4{\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 25px;\n  margin-top: 5px;\n}\n.social-btns i{\n  font-size: 21px;\n  color: #fff;\n}\n.social-btns button{\n  margin: 0 8px;\n}\n.tip{\n  margin-top: -20px;\n}\n.form-row, .card-form, .mat-form-field{\n  width: 100%;\n}\n.card-form{\n  padding: 5px;\n}\n.form-row{\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-top: 13px;\n}\n.form-row i{\n  position: relative;\n  top: -5px;\n  margin-right: 15px;\n  color: #555;\n}\n.card-footer{\n  margin: 10px;\n}\n.card-footer button{\n  color: #e91e63;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7QUFDRDtFQUNFLHVEQUEyRTtFQUkzRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiw2QkFBNkI7RUFHN0IscUJBQXFCO0VBQ3JCLGtDQUFrQztFQUdsQywwQkFBMEI7RUFDMUIsc0NBQXNDO0VBR3RDLDhCQUE4QjtDQUMvQjtBQUVEO0VBQ0UsTUFBTSxXQUFXLENBQUM7RUFDbEIsSUFBSSxPQUFPLENBQUM7Q0FDYjtBQUVEO0VBQ0UsTUFBTSxXQUFXLENBQUM7RUFDbEIsSUFBSSxPQUFPLENBQUM7Q0FDYjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscURBQXFEO0VBQ3JELHVGQUF1RjtFQUN2RixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtDQUNyQjtBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xvY2tfYmcuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2FyZDtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogY2FyZDtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGNhcmQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBjYXJkO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcbiAgLW8tYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLW8tYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY2FyZCB7XG4gIGZyb20ge3RvcDogLTQwcHg7fVxuICB0byB7dG9wOiAwO31cbn1cblxuQGtleWZyYW1lcyBjYXJkIHtcbiAgZnJvbSB7dG9wOiAtNDBweDt9XG4gIHRvIHt0b3A6IDA7fVxufVxuXG4uY2FyZC1oZWFkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAtNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlciBoNHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnNvY2lhbC1idG5zIGl7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zb2NpYWwtYnRucyBidXR0b257XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi50aXB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uZm9ybS1yb3csIC5jYXJkLWZvcm0sIC5tYXQtZm9ybS1maWVsZHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWZvcm17XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmZvcm0tcm93e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi5mb3JtLXJvdyBpe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmNhcmQtZm9vdGVye1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkLWZvb3RlciBidXR0b257XG4gIGNvbG9yOiAjZTkxZTYzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n<div class=\"container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <app-header></app-header>\n    </div>\n   <div class=\"row\">\n     <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n       <div class=\"card\">\n         <div class=\"card-header\">\n            <h4>Login</h4>\n           <div class=\"social-btns\">\n             <button mat-icon-button><i class=\"fa fa-facebook-square\"></i></button>\n             <button mat-icon-button><i class=\"fa fa-twitter\"></i></button>\n             <button mat-icon-button><i class=\"fa fa-google-plus\"></i></button>\n           </div>\n         </div>\n         <p class=\"tip\">Or Be Classical</p>\n         <div class=\"card-form\">\n           <div class=\"form-row\">\n             <i class=\"material-icons\">face</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"text\" matInput placeholder=\"First Name\"/>\n             </mat-form-field>\n           </div>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">email</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"text\" matInput placeholder=\"Email address\"/>\n             </mat-form-field>\n           </div>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">lock_outline</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"password\" matInput placeholder=\"Password\"/>\n             </mat-form-field>\n           </div>\n         </div>\n         <div class=\"card-footer\">\n           <button mat-button (click)=\"loginBtn()\">LET'S GO</button>\n         </div>\n       </div>\n     </div>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginBtn = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/page/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.background {\n  background: url('register_bg.jpg') center center;\n  background-size: cover;\n}\n\n.register-panel{\n  margin-top: 25px;\n}\n\n.card{\n  padding: 40px 0 30px;\n}\n\n.card h2{\n  text-align: center;\n}\n\n.feature{\n  display: flex;\n  /*width: 100%;*/\n  flex: 1;\n  margin-top: 50px;\n}\n\n.feature .icon{\n  width: 40px;\n}\n\n.feature .icon i{\n  font-size: 2.6em;\n}\n\n.feature .desc{\n  flex: 1;\n  margin-left: 10px;\n}\n\n.feature .desc p{\n  margin-top: 17px;\n}\n\n.feature .desc h4{\n  margin-top: 8px;\n}\n\n.form-part{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-left: 25px;\n}\n\n.form-part .row{\n  width: 100%;\n  display: flex;\n  position: relative;\n  margin-top: 17px;\n}\n\n.form-part .row .mat-input-container{\n  width: 100%;\n}\n\n.form-part .row i{\n  margin-right: 13px;\n  position: relative;\n  top: 8px;\n  color: #555;\n}\n\n.form-part .socials{\n  margin-top: 40px;\n  margin-bottom: 25px;\n}\n\n.form-part .row button{\n  margin-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxpREFBcUU7RUFDckUsdUJBQXVCO0NBQ3hCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsUUFBUTtFQUNSLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9yZWdpc3Rlcl9iZy5qcGdcIikgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnJlZ2lzdGVyLXBhbmVse1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZHtcbiAgcGFkZGluZzogNDBweCAwIDMwcHg7XG59XG5cbi5jYXJkIGgye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mZWF0dXJle1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKndpZHRoOiAxMDAlOyovXG4gIGZsZXg6IDE7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5mZWF0dXJlIC5pY29ue1xuICB3aWR0aDogNDBweDtcbn1cblxuLmZlYXR1cmUgLmljb24gaXtcbiAgZm9udC1zaXplOiAyLjZlbTtcbn1cblxuLmZlYXR1cmUgLmRlc2N7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZmVhdHVyZSAuZGVzYyBwe1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG4uZmVhdHVyZSAuZGVzYyBoNHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uZm9ybS1wYXJ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uZm9ybS1wYXJ0IC5yb3d7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbi5mb3JtLXBhcnQgLnJvdyAubWF0LWlucHV0LWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLXBhcnQgLnJvdyBpe1xuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4uZm9ybS1wYXJ0IC5zb2NpYWxze1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uZm9ybS1wYXJ0IC5yb3cgYnV0dG9ue1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/page/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"background\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <app-header></app-header>\n    </div>\n    <div class=\"row register-panel\">\n      <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"card\">\n          <h2>Register</h2>\n          <div class=\"row\">\n            <div class=\"col-md-5 col-md-offset-1\">\n              <div class=\"feature\">\n                <div class=\"icon\">\n                  <i class=\"material-icons\" style=\"color: #e91e63;\">timeline</i>\n                </div>\n                <div class=\"desc\">\n                  <h4>Marking</h4>\n                  <p>We've created the marketing campaign of the website. It was a very interesting collaboration.</p>\n                </div>\n              </div>\n              <div class=\"feature\">\n                <div class=\"icon\">\n                  <i class=\"material-icons\" style=\"color: #9c27b0;\">code</i>\n                </div>\n                <div class=\"desc\">\n                  <h4>Fully Coded in HTML5</h4>\n                  <p>We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.</p>\n                </div>\n              </div>\n              <div class=\"feature\">\n                <div class=\"icon\">\n                  <i class=\"material-icons\" style=\"color: #00bcd4;\">group</i>\n                </div>\n                <div class=\"desc\">\n                  <h4>Built Audience</h4>\n                  <p>There is also a Fully Customizable CMS Admin Dashboard for this product.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-5\">\n              <div class=\"form-part\">\n                <div class=\"socials\">\n                  <a mat-mini-fab style=\"background-color: #55acee;\"><i class=\"fa fa-twitter\"></i></a>\n                  <a mat-mini-fab style=\"background-color: #ea4c89; margin: 0 5px;\"><i class=\"fa fa-dribbble\"></i></a>\n                  <a mat-mini-fab style=\"background-color: #3b5998;\"><i class=\"fa fa-facebook\"></i></a>\n                </div>\n                <h6 style=\"margin-bottom: 30px\">or be classical</h6>\n                <div class=\"row\">\n                  <i class=\"material-icons\">face</i>\n                  <mat-form-field color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Name\">\n                  </mat-form-field>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">email</i>\n                  <mat-form-field color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Email\">\n                  </mat-form-field>\n                </div>\n                <div class=\"row\">\n                  <i class=\"material-icons\">lock_outline</i>\n                  <mat-form-field color=\"accent\">\n                    <input type=\"text\" matInput placeholder=\"Password\">\n                  </mat-form-field>\n                </div>\n                <div class=\"row\">\n                  <mat-checkbox style=\"margin-left: 2px\"><p style=\"margin-left: 8px\">I agree to the <span style=\"color: #9c27b0; cursor: pointer; font-weight: 400;\">terms and conditions</span>.</p></mat-checkbox>\n                </div>\n                <div class=\"row\" style=\"display: flex; justify-content: center\">\n                  <button mat-raised-button class=\"btn btn-primary btn-round\">GET STARTED</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/page/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/page/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.sidebarImageIndex = 0;
        this.sidebarImageIndexUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sidebarFilter = '#fff';
        this.sidebarFilterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sidebarColor = '#D80B0B';
        this.sidebarColorUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SettingsService.prototype.getSidebarImageIndex = function () {
        return this.sidebarImageIndex;
    };
    SettingsService.prototype.setSidebarImageIndex = function (id) {
        this.sidebarImageIndex = id;
        this.sidebarImageIndexUpdate.emit(this.sidebarImageIndex);
    };
    SettingsService.prototype.getSidebarFilter = function () {
        return this.sidebarFilter;
    };
    SettingsService.prototype.setSidebarFilter = function (color) {
        this.sidebarFilter = color;
        this.sidebarFilterUpdate.emit(this.sidebarFilter);
    };
    SettingsService.prototype.getSidebarColor = function () {
        return this.sidebarColor;
    };
    SettingsService.prototype.setSidebarColor = function (color) {
        this.sidebarColor = color;
        this.sidebarColorUpdate.emit(this.sidebarColor);
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".figure-card{\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n}\n\n.card-content{\n  text-align: right;\n  padding: 15px 20px 13px 20px;\n}\n\n.card-header {\n  float: left;\n  text-align: center;\n  /*background: linear-gradient(60deg, #ffa726, #fb8c00);*/\n  /*box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);*/\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  position: relative;\n}\n\n.card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  color: #fff;\n}\n\n.category{\n  color: #999;\n}\n\n.card-footer{\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n  color: #999;\n  font-size: 12px;\n  position: relative;\n}\n\n.card-footer i {\n  font-size: 16px;\n  position: relative;\n  top: 4px;\n  color: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpZ3VyZWNhcmQvZmlndXJlY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7Q0FDOUI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlEQUF5RDtFQUN6RCx5RkFBeUY7RUFDekYscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpZ3VyZWNhcmQvZmlndXJlY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZ3VyZS1jYXJke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDEzcHggMjBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmE3MjYsICNmYjhjMDApOyovXG4gIC8qYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQpOyovXG4gIG1hcmdpbjogLTIwcHggMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtaGVhZGVyIGkge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhdGVnb3J5e1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmNhcmQtZm9vdGVye1xuICBtYXJnaW46IDAgMjBweCAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtZm9vdGVyIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"figure-card card\">\n  <div class=\"card-header\" [ngStyle]=\"{ 'background': linearColor, 'box-shadow': boxShadow }\">\n    <i class=\"material-icons\">{{ headerIcon }}</i>\n  </div>\n  <div class=\"card-content\">\n    <p class=\"category\">{{ category }}</p>\n    <h3 class=\"title\">{{ title }}</h3>\n  </div>\n  <div class=\"card-footer\">\n      <i class=\"material-icons text-danger\">{{ footerIcon }}</i> {{ footContent }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.ts ***!
  \***********************************************************/
/*! exports provided: FigurecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigurecardComponent", function() { return FigurecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FigurecardComponent = /** @class */ (function () {
    function FigurecardComponent() {
    }
    FigurecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "headerIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "category", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "footerIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "footContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "linearColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FigurecardComponent.prototype, "boxShadow", void 0);
    FigurecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-figurecard',
            template: __webpack_require__(/*! ./figurecard.component.html */ "./src/app/shared/figurecard/figurecard.component.html"),
            styles: [__webpack_require__(/*! ./figurecard.component.css */ "./src/app/shared/figurecard/figurecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FigurecardComponent);
    return FigurecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left *{\n  color: #fff;\n}\n\n.right{\n  display: flex;\n}\n\n.right a{\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 25px;\n}\n\n.right p{\n  margin-left: 5px;\n  font-size: 12px;\n  line-height: normal;\n  color: #fff;\n}\n\n.right i{\n  font-size: 20px;\n}\n\n.router-active{\n  background-color: rgba(255,255,255,.1);\n  padding: 15px 18px 15px 15px;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsWUFBWTtDQUNiOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQgKntcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yaWdodHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJpZ2h0IGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4ucmlnaHQgcHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnJpZ2h0IGl7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJvdXRlci1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xuICBwYWRkaW5nOiAxNXB4IDE4cHggMTVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"left\">\n    <h5>Angular Dashboard</h5>\n  </div>\n  <div class=\"right\">\n    <a routerLink=\"/dashboard\" routerLinkActive=\"router-active\"><i class=\"material-icons\">dashboard</i><p>DASHBOARD</p></a>\n    <a routerLink=\"\" routerLinkActive=\"router-active\" [routerLinkActiveOptions]=\"{exact: true}\"><i class=\"material-icons\">fingerprint</i><p>LOGIN</p></a>\n    <a routerLink=\"/register\" routerLinkActive=\"router-active\"><i class=\"material-icons\">person_add</i><p>REGISTER</p></a>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card{\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  padding: 15px;\n}\n\n.header{\n  position: relative;\n  overflow: hidden;\n  margin-top: -40px;\n  border-radius: 6px;\n  z-index: 3;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.header img{\n  position: relative;\n  max-width: 100%;\n  border-radius: 6px;\n}\n\n.body{\n  text-align: center;\n  padding: 10px 10px 13px 10px;\n  margin-top: 7px;\n}\n\n.body p{\n  margin-top: 5px;\n  color: #999;\n  font-weight: 100;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n\n.footer{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 8px 2px 8px;\n}\n\n.footer .position{\n  display: flex;\n  align-items: center;\n  color: #999;\n  font-weight: 100;\n}\n\n.footer i{\n  font-size: 17px;\n  margin-right: 3px;\n}\n\n.footer h4{\n  color: rgba(0,0,0, 0.87);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlY2FyZC9pbWFnZWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0hBQXdIO0NBQ3pIOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLG9CQUFvQjtFQUNwQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ltYWdlY2FyZC9pbWFnZWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI1cHggMDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmhlYWRlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB6LWluZGV4OiAzO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmhlYWRlciBpbWd7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ib2R5e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxM3B4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLmJvZHkgcHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgOHB4IDJweCA4cHg7XG59XG5cbi5mb290ZXIgLnBvc2l0aW9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzk5OTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmZvb3RlciBpe1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuXG4uZm9vdGVyIGg0e1xuICBjb2xvcjogcmdiYSgwLDAsMCwgMC44Nyk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-card card\">\n  <div class=\"header\">\n    <img [src]=\"image\"/>\n  </div>\n  <div class=\"body\">\n    <h4>{{ title }}</h4>\n    <p>{{ desc }}</p>\n  </div>\n  <div class=\"footer\">\n    <h4>{{ footerTitle }}</h4>\n    <div class=\"position\"><i class=\"material-icons\">location_on</i> {{ position }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.ts ***!
  \*********************************************************/
/*! exports provided: ImagecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagecardComponent", function() { return ImagecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagecardComponent = /** @class */ (function () {
    function ImagecardComponent() {
    }
    ImagecardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "desc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "footerTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImagecardComponent.prototype, "image", void 0);
    ImagecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imagecard',
            template: __webpack_require__(/*! ./imagecard.component.html */ "./src/app/shared/imagecard/imagecard.component.html"),
            styles: [__webpack_require__(/*! ./imagecard.component.css */ "./src/app/shared/imagecard/imagecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImagecardComponent);
    return ImagecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-btn{\n  position: relative;\n}\n\n.msg-btn i{\n  font-size: 19px;\n  color: #555;\n}\n\n.msg-btn span{\n  position: absolute;\n  top: 2px;\n  border: 1px solid #FFF;\n  right: 2px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21zZ2ljb25idG4vbXNnaWNvbmJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbXNnaWNvbmJ0bi9tc2dpY29uYnRuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnLWJ0bntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXNnLWJ0biBpe1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ubXNnLWJ0biBzcGFue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICByaWdodDogMnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6ICNGRkY7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button class=\"msg-btn\">\n  <span>{{ number }}</span>\n  <i class=\"material-icons icon-btn\">{{ icon }}</i>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.ts ***!
  \***********************************************************/
/*! exports provided: MsgIconBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgIconBtnComponent", function() { return MsgIconBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsgIconBtnComponent = /** @class */ (function () {
    function MsgIconBtnComponent() {
    }
    MsgIconBtnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MsgIconBtnComponent.prototype, "number", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MsgIconBtnComponent.prototype, "icon", void 0);
    MsgIconBtnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-msgiconbtn',
            template: __webpack_require__(/*! ./msgiconbtn.component.html */ "./src/app/shared/msgiconbtn/msgiconbtn.component.html"),
            styles: [__webpack_require__(/*! ./msgiconbtn.component.css */ "./src/app/shared/msgiconbtn/msgiconbtn.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MsgIconBtnComponent);
    return MsgIconBtnComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left-part, .right-part{\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar h4{\n  color: #555;\n}\n\n.mat-mini-fab{\n  box-shadow:  0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n  background-color: #fefefe;\n  color: #999;\n  margin-right: 15px;\n}\n\n.mat-mini-fab:hover{\n  color: #999 !important;\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2) !important;\n}\n\n.mat-mini-fab:focus{\n  color: #999 !important;\n}\n\n.search-btn{\n  margin: 0 5px 0 7px;\n}\n\n.icon-btn{\n  font-size: 19px;\n  color: #555;\n}\n\n.mat-icon-button{\n  margin-left: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1JQUFtSTtFQUNuSSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixpSkFBaUo7Q0FDbEo7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtDQUNiOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZWZ0LXBhcnQsIC5yaWdodC1wYXJ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJhciBoNHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5tYXQtbWluaS1mYWJ7XG4gIGJveC1zaGFkb3c6ICAwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXQtbWluaS1mYWI6aG92ZXJ7XG4gIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLm1hdC1taW5pLWZhYjpmb2N1c3tcbiAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1idG57XG4gIG1hcmdpbjogMCA1cHggMCA3cHg7XG59XG5cbi5pY29uLWJ0bntcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <div class=\"left-part\">\n    <button mat-mini-fab id=\"nav-left-button\"><i class=\"material-icons\" style=\"font-size:18px;\">more_vert</i></button>\n    <h4>{{ title }}</h4>\n  </div>\n  <div class=\"right-part\">\n    <div class=\"right-part\" id=\"nav-right\">\n      <mat-form-field color=\"#ff0000\">\n        <input matInput type=\"search\" placeholder=\"Search\">\n      </mat-form-field>\n      <button mat-mini-fab class=\"search-btn\"><i class=\"material-icons\" style=\"font-size:18px;\">search</i></button>\n      <button mat-icon-button><i class=\"material-icons icon-btn\">dashboard</i></button>\n      <app-msgiconbtn icon=\"notifications\" number=\"5\" [matMenuTriggerFor]=\"menu\"></app-msgiconbtn>\n      <button mat-icon-button><i class=\"material-icons icon-btn\">person</i></button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Sriram responded to your email</button>\n        <button mat-menu-item>You have 5 new tasks</button>\n        <button mat-menu-item>You're now friend with Geetha</button>\n        <button mat-menu-item>Another Notification</button>\n        <button mat-menu-item>Another One</button>\n      </mat-menu>\n    </div>\n    <div id=\"menu\">\n      <button mat-icon-button (click)=\"menuClick()\"><i class=\"material-icons\">menu</i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.menuClick = function () {
        // document.getElementById('main-panel').style.marginRight = '260px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-routes.config.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/sidebar-routes.config.ts ***!
  \**************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'User Profile', icon: 'person', children: null },
    { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
            { path: 'components/price-table', title: 'Price Table', icon: 'PT' },
            { path: 'components/panels', title: 'Panels', icon: 'P' },
            { path: 'components/wizard', title: 'Wizard', icon: 'W' },
        ] },
    { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n  padding: 25px 0 20px 0;\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n}\n\n.logo img{\n  width: 42px;\n  position: absolute;\n  top: 16px;\n  left: 13px;\n}\n\n.divider{\n  content: '';\n  position: relative;\n  height: 1px;\n  left: 15px;\n  width: calc(100% - 30px);\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar-wrapper{\n  overflow-y: auto;\n  padding-bottom: 30px;\n  width: 260px;\n  position: relative;\n  height: 100%;\n}\n\n.nav-container{\n  position: relative;\n}\n\n.nav{\n  padding-top: 15px;\n}\n\n.nav li{\n  margin-bottom: 9px;\n}\n\n.nav li a{\n  display: flex;\n  align-items: center;\n  color: rgba(255,255,255,.8);\n  margin: 0 15px;\n  border-radius: 3px;\n  transition: all 400ms;\n  height: 50px;\n  text-decoration: none;\n}\n\n.nav li a:hover, .parent-active{\n  background-color: rgba(255,255,255,.1);\n}\n\n.nav li a span{\n  margin-left: 20px;\n}\n\n.active a, .active a:hover{\n  /*color: rgba(0,0,0,.6) !important;*/\n  /*background-color: #fff !important;*/\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(60, 72, 88, 0.4);\n  transition: all 400ms;\n}\n\n.collapse-a{\n  position: relative;\n}\n\n.collapse-a .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  color: #fff;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  transition: all 200ms;\n}\n\n.collapsed .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztDQUNaOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QiwyQ0FBMkM7Q0FDNUM7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLG1CQUFtQjtFQUtuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHVDQUF1QztDQUN4Qzs7QUFFRDtFQUNFLGtCQUFrQjtDQUNuQjs7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsc0ZBQXNGO0VBS3RGLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQ0FBa0M7RUFJbEMsMEJBQTBCO0VBSzFCLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdDQUFnQztFQUloQyx3QkFBd0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBwYWRkaW5nOiAyNXB4IDAgMjBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28gaW1ne1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDEzcHg7XG59XG5cbi5kaXZpZGVye1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXJ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmF2LWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2e1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLm5hdiBsaXtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuXG4ubmF2IGxpIGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYgbGkgYTpob3ZlciwgLnBhcmVudC1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xufVxuXG4ubmF2IGxpIGEgc3BhbntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hY3RpdmUgYSwgLmFjdGl2ZSBhOmhvdmVye1xuICAvKmNvbG9yOiByZ2JhKDAsMCwwLC42KSAhaW1wb3J0YW50OyovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDYwLCA3MiwgODgsIDAuNCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG59XG5cbi5jb2xsYXBzZS1he1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2xsYXBzZS1hIC5jYXJldHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjFweDtcbiAgdG9wOiAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xufVxuXG4uY29sbGFwc2VkIC5jYXJldHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjFweDtcbiAgdG9wOiAyM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo text-uppercase\" [style.color]=\"normalFontColor\">\n  <img src=\"../../assets/img/angular2-logo.png\" class=\"logo-img\" alt=\"logo\"/>\n  Dashboard\n</div>\n<div class=\"divider\" [style.background-color]=\"dividerBgColor\"></div>\n<div class=\"sidebar-wrapper\">\n  <div class=\"nav-container\">\n    <ul class=\"nav\">\n      <li *ngFor=\"let menuItem of menuItems\" routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"rla.isActive? (menuItem.children === null? 'active' : '') : ''\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a [style.display]=\"menuItem.children === null? 'flex' : 'none'\" [routerLink]=\"[menuItem.path]\" [style.background-color]=\"rla.isActive? color : 'transparent'\" [style.color]=\"rla.isActive? activeFontColor : normalFontColor\">\n          <i class=\"material-icons\">{{menuItem.icon}}</i>\n          <span>{{menuItem.title}}</span>\n        </a>\n        <div [hidden]=\"menuItem.children === null\" class=\"collapse-container\">\n          <a data-toggle=\"collapse\" [href]=\"[menuItem.path]\" style=\"padding: 0 15px;\" [ngClass]=\"rla.isActive? 'parent-active' : ''\" class=\"collapse-a collapsed\" [style.color]=\"normalFontColor\">\n            <i class=\"material-icons\">{{menuItem.icon}}</i>\n            <span>{{menuItem.title}}</span>\n            <b class=\"caret\" [style.color]=\"normalFontColor\"></b>\n          </a>\n          <div id=\"component\" class=\"collapse\" [id]=\"[menuItem.id]\">\n            <ul class=\"nav\">\n              <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive #subrla=\"routerLinkActive\" [ngClass]=\"subrla.isActive? 'active' : ''\">\n                <a [routerLink]=\"[subItem.path]\" [style.background-color]=\"subrla.isActive? color : 'transparent'\" [style.color]=\"subrla.isActive? activeFontColor : normalFontColor\" style=\"height: 43px;\">\n                  <span style=\"margin-left: 5px; width: 21px;\">{{subItem.icon}}</span>\n                  <span>{{subItem.title}}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/sidebar/sidebar-routes.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settingsService) {
        this.settingsService = settingsService;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
        this.activeFontColor = 'rgba(0,0,0,.6)';
        this.normalFontColor = 'rgba(255,255,255,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.color = this.settingsService.getSidebarFilter();
        this.settingsService.sidebarFilterUpdate.subscribe(function (filter) {
            _this.color = filter;
            if (filter === '#fff') {
                _this.activeFontColor = 'rgba(0,0,0,.6)';
            }
            else {
                _this.activeFontColor = 'rgba(255,255,255,.8)';
            }
        });
        this.settingsService.sidebarColorUpdate.subscribe(function (color) {
            if (color === '#fff') {
                _this.normalFontColor = 'rgba(0,0,0,.6)';
                _this.dividerBgColor = 'rgba(0,0,0,.1)';
            }
            else {
                _this.normalFontColor = 'rgba(255,255,255,.8)';
                _this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
            }
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.settingsService.sidebarFilterUpdate.unsubscribe();
        this.settingsService.sidebarColorUpdate.unsubscribe();
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\_isaraiyer_\Downloads\Portfolio\angular-material-dashboard-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map