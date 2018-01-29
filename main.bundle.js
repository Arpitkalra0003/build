webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"../../../../../src/app/admin/admin.module.ts",
		"admin.module",
		"common"
	],
	"./agent/agent.module": [
		"../../../../../src/app/agent/agent.module.ts",
		"agent.module",
		"common"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_nav_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/nav-dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__ = __webpack_require__("../../../../../src/app/shared/sidebar.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__ = __webpack_require__("../../../../../src/app/shared/aside.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__ = __webpack_require__("../../../../../src/app/shared/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_full_layout_agent_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout-agent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_simple_layout_component__ = __webpack_require__("../../../../../src/app/layouts/simple-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Routing Module

// Layouts



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_full_layout_component__["a" /* FullLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layouts_full_layout_agent_component__["a" /* FullLayoutAgentComponent */],
                __WEBPACK_IMPORTED_MODULE_14__layouts_simple_layout_component__["a" /* SimpleLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_nav_dropdown_directive__["a" /* NAV_DROPDOWN_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_10__shared_breadcrumb_component__["a" /* BreadcrumbsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_sidebar_directive__["a" /* SIDEBAR_TOGGLE_DIRECTIVES */],
                __WEBPACK_IMPORTED_MODULE_9__shared_aside_directive__["a" /* AsideToggleDirective */]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_full_layout_agent_component__ = __webpack_require__("../../../../../src/app/layouts/full-layout-agent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Layouts


var routes = [
    // {
    // path: '',
    // redirectTo: 'dashboard',
    // pathMatch: 'full',
    // },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_layout_component__["a" /* FullLayoutComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'admin',
                loadChildren: './admin/admin.module#AdminModule'
            },
        ]
    },
    {
        path: 'agent',
        component: __WEBPACK_IMPORTED_MODULE_3__layouts_full_layout_agent_component__["a" /* FullLayoutAgentComponent */],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: '',
                loadChildren: './agent/agent.module#AgentModule'
            }
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/full-layout-agent.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n <h1 class=\"admintext\" >Agent-Dashboard</h1>\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarToggler>&#9776;</button>\n  <!-- <ul class=\"nav navbar-nav d-md-down-none\"> -->\n    <!-- <li class=\"nav-item px-3\"> -->\n      <!-- <a class=\"nav-link\" href=\"#\">agent-Dashboard</a> -->\n    <!-- </li> -->\n   \n  <!-- </ul> -->\n  <ul class=\"nav navbar-nav ml-auto\">\n   \n    <li class=\"nav-item dropdown\" dropdown (onToggle)=\"toggled($event)\">\n      <a href class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n        <span class=\"d-md-down-none\">Agent</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\n\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\n\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n    <!-- <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appAsideMenuToggler>&#9776;</button> -->\n  </ul>\n</header>\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">agent</span></a>\n        </li>\n        <li class=\"divider\"></li>\n        <li class=\"nav-title\">\n          Features\n        </li>\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-puzzle\"></i>INCToken</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/allowance']\"><i class=\"icon-puzzle\"></i>Allowance</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/approve']\"><i class=\"icon-puzzle\"></i>Approve</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/checkbalance']\"><i class=\"icon-puzzle\"></i>Check Balance</a>\n            </li>\n         \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/transfer']\"><i class=\"icon-puzzle\"></i>Transfer</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/transferfrom']\"><i class=\"icon-puzzle\"></i>Transfer Form</a>\n            </li>\n\t\t\t\n          </ul>\n        </li>\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i>INRX</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/convertcurrencytoinrx']\"><i class=\"icon-star\"></i>Convert Currency to INRX</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/lockescrowinrx']\"><i class=\"icon-star\"></i>Lock Escrow INRX</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/withdrawasincinrx']\"><i class=\"icon-star\"></i>Withdraw as INC</a>\n            </li>\n            \n\t\t\t   \n          </ul>\n        </li>\n\t\t   <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-calculator\"></i>USDX</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/convertcurrencytousdx']\"><i class=\"icon-calculator\"></i>Convert Currency to USDX</a>\n            </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/lockescrowusdx']\"><i class=\"icon-calculator\"></i>Lock Escrow USDX</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/agent/withdrawasincusdx']\"><i class=\"icon-star\"></i>Withdraw as INC</a>\n            </li>\n\t\t\t   \n          </ul>\n        </li>\n        <!-- <li class=\"nav-item\"> -->\n          <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a> -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item\"> -->\n          <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a> -->\n        <!-- </li> -->\n        <!-- <li class=\"divider\"></li> -->\n        <!-- <li class=\"nav-title\"> -->\n          <!-- Extras -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item nav-dropdown\" appNavDropdown> -->\n          <!-- <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Pages</a> -->\n          <!-- <ul class=\"nav-dropdown-items\"> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </li> -->\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumbs></app-breadcrumbs>\n      <!-- Breadcrumb Menu-->\n      <!-- <li class=\"breadcrumb-menu d-md-down-none\"> -->\n        <!-- <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\"> -->\n          <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a> -->\n          <!-- <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a> -->\n          <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a> -->\n        <!-- </div> -->\n      <!-- </li> -->\n    </ol>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n\n  <aside class=\"aside-menu\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\n          <small><b>Today</b></small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout callout-warning m-0 py-3\">\n          <div class=\"avatar float-right\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n          </div>\n          <div>Meeting with <strong>Lucas</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-info m-0 py-3\">\n          <div class=\"avatar float-right\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n          </div>\n          <div>Skype with <strong>Megan</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\n          <small><b>Tomorrow</b></small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout callout-danger m-0 py-3\">\n          <div>New UI Project - <strong>deadline</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n          <div class=\"avatars-stack mt-2\">\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n          </div>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-success m-0 py-3\">\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-primary m-0 py-3\">\n          <div><strong>Team meeting</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n          <div class=\"avatars-stack mt-2\">\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n            </div>\n          </div>\n        </div>\n        <hr class=\"mx-3 my-0\">\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\n        <div class=\"p-3\">\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"agent@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\n        <div class=\"p-3\">\n          <h6>Settings</h6>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-4\">\n              <small><b>Option 1</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 2</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 3</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 4</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n\n          <hr>\n          <h6>System Utilization</h6>\n\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">243GB/256GB</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">25GB/256GB</small>\n        </div>\n      </tab>\n    </tabset>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout-agent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutAgentComponent = (function () {
    function FullLayoutAgentComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutAgentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutAgentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutAgentComponent.prototype.ngOnInit = function () { };
    FullLayoutAgentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layouts/full-layout-agent.component.html")
        })
    ], FullLayoutAgentComponent);
    return FullLayoutAgentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n <h1 class=\"admintext\" >Admin-Dashboard</h1>\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" appSidebarToggler>&#9776;</button>\n  <!-- <ul class=\"nav navbar-nav d-md-down-none\"> -->\n    <!-- <li class=\"nav-item px-3\"> -->\n      <!-- <a class=\"nav-link\" href=\"#\">Admin-Dashboard</a> -->\n    <!-- </li> -->\n   \n  <!-- </ul> -->\n  \n</header>\n\n<div class=\"app-body\">\n  <div class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">Admin</span></a>\n        </li>\n        <li class=\"divider\"></li>\n        <li class=\"nav-title\">\n          Features\n        </li>\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-puzzle\"></i>INCToken</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/allowance']\"><i class=\"icon-puzzle\"></i>Allowance</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/approve']\"><i class=\"icon-puzzle\"></i>Approve</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/checkbalance']\"><i class=\"icon-puzzle\"></i>Check Balance</a>\n            </li>\n         \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/transfer']\"><i class=\"icon-puzzle\"></i>Transfer</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/transferfrom']\"><i class=\"icon-puzzle\"></i>Transfer Form</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/setusdxinrxcontract']\"><i class=\"icon-puzzle\"></i>Set USDX INRX Contract</a>\n            </li>\n\t\t\t\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/releaseescrowinrxtousdx']\"><i class=\"icon-puzzle\"></i>Release Escrow INRX to USDX</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/releaseescrowusdxtoinrx']\"><i class=\"icon-puzzle\"></i>Release Escrow USDX to INRX</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i>INRX</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/setusdxcontract']\"><i class=\"icon-star\"></i>Set USDX Contract</a>\n            </li>\n\t\t\t<li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/rateset']\"><i class=\"icon-star\"></i>Rate Set</a>\n            </li>\n            \n\t\t\t   \n          </ul>\n        </li>\n\t\t   <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n          <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-calculator\"></i>USDX</a>\n          <ul class=\"nav-dropdown-items\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/setinrxcontract']\"><i class=\"icon-calculator\"></i>Set INRX Contract</a>\n            </li>\n              <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/ratesetusdx']\"><i class=\"icon-calculator\"></i>Rate Set</a>\n            </li>\n\t\t\t   \n          </ul>\n        </li>\n        <!-- <li class=\"nav-item\"> -->\n          <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/widgets']\"><i class=\"icon-calculator\"></i> Widgets <span class=\"badge badge-info\">NEW</span></a> -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item\"> -->\n          <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/charts']\"><i class=\"icon-pie-chart\"></i> Charts</a> -->\n        <!-- </li> -->\n        <!-- <li class=\"divider\"></li> -->\n        <!-- <li class=\"nav-title\"> -->\n          <!-- Extras -->\n        <!-- </li> -->\n        <!-- <li class=\"nav-item nav-dropdown\" appNavDropdown> -->\n          <!-- <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-star\"></i> Pages</a> -->\n          <!-- <ul class=\"nav-dropdown-items\"> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"><i class=\"icon-star\"></i> Login</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\"><i class=\"icon-star\"></i> Register</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/404']\"><i class=\"icon-star\"></i> Error 404</a> -->\n            <!-- </li> -->\n            <!-- <li class=\"nav-item\"> -->\n              <!-- <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/pages/500']\"><i class=\"icon-star\"></i> Error 500</a> -->\n            <!-- </li> -->\n          <!-- </ul> -->\n        <!-- </li> -->\n      </ul>\n    </nav>\n  </div>\n\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <!-- Breadcrumb -->\n    <ol class=\"breadcrumb\">\n      <app-breadcrumbs></app-breadcrumbs>\n      <!-- Breadcrumb Menu-->\n      <!-- <li class=\"breadcrumb-menu d-md-down-none\"> -->\n        <!-- <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\"> -->\n          <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a> -->\n          <!-- <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a> -->\n          <!-- <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a> -->\n        <!-- </div> -->\n      <!-- </li> -->\n    </ol>\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.conainer-fluid -->\n  </main>\n\n  <aside class=\"aside-menu\">\n    <tabset>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\n        <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\n          <small><b>Today</b></small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout callout-warning m-0 py-3\">\n          <div class=\"avatar float-right\">\n            <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div>Meeting with <strong>Lucas</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-info m-0 py-3\">\n          <div class=\"avatar float-right\">\n            <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n          </div>\n          <div>Skype with <strong>Megan</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n          <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout m-0 py-2 text-muted text-center bg-light text-uppercase\">\n          <small><b>Tomorrow</b></small>\n        </div>\n        <hr class=\"transparent mx-3 my-0\">\n        <div class=\"callout callout-danger m-0 py-3\">\n          <div>New UI Project - <strong>deadline</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n          <div class=\"avatars-stack mt-2\">\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n          </div>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-success m-0 py-3\">\n          <div><strong>#10 Startups.Garden</strong> Meetup</div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n          <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n        </div>\n        <hr class=\"mx-3 my-0\">\n        <div class=\"callout callout-primary m-0 py-3\">\n          <div><strong>Team meeting</strong></div>\n          <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n          <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n          <div class=\"avatars-stack mt-2\">\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n            <div class=\"avatar avatar-xs\">\n              <img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n            </div>\n          </div>\n        </div>\n        <hr class=\"mx-3 my-0\">\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\n        <div class=\"p-3\">\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n          <hr>\n          <div class=\"message\">\n            <div class=\"py-3 pb-5 mr-3 float-left\">\n              <div class=\"avatar\">\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"avatar-status badge-success\"></span>\n              </div>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lukasz Holeczek</small>\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n            </div>\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n          </div>\n        </div>\n      </tab>\n      <tab>\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\n        <div class=\"p-3\">\n          <h6>Settings</h6>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-4\">\n              <small><b>Option 1</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 2</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n            <div>\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 3</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\">\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"aside-options\">\n            <div class=\"clearfix mt-3\">\n              <small><b>Option 4</b></small>\n              <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                <input type=\"checkbox\" class=\"switch-input\" checked>\n                <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                <span class=\"switch-handle\"></span>\n              </label>\n            </div>\n          </div>\n\n          <hr>\n          <h6>System Utilization</h6>\n\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">11444GB/16384MB</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">243GB/256GB</small>\n\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n          <div class=\"progress progress-xs\">\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n          </div>\n          <small class=\"text-muted\">25GB/256GB</small>\n        </div>\n      </tab>\n    </tabset>\n  </aside>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
        this.disabled = false;
        this.status = { isopen: false };
    }
    FullLayoutComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    FullLayoutComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    FullLayoutComponent.prototype.ngOnInit = function () { };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/layouts/full-layout.component.html")
        })
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () { };
    SimpleLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], SimpleLayoutComponent);
    return SimpleLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/aside.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideToggleDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AsideToggleDirective.prototype, "toggleOpen", null);
    AsideToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAsideMenuToggler]',
        }),
        __metadata("design:paramtypes", [])
    ], AsideToggleDirective);
    return AsideToggleDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        _this.breadcrumbs.push({
                            label: route.snapshot.data,
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n    <li class=\"breadcrumb-item\"\n        *ngIf=\"breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == '/'||breadcrumb.label.title&&last\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nav-dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NavDropdownDirective */
/* unused harmony export NavDropdownToggleDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NAV_DROPDOWN_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());

/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavDropdownToggleDirective.prototype, "toggleOpen", null);
    NavDropdownToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appNavDropdownToggle]'
        }),
        __metadata("design:paramtypes", [NavDropdownDirective])
    ], NavDropdownToggleDirective);
    return NavDropdownToggleDirective;
}());

var NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "../../../../../src/app/shared/sidebar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SidebarToggleDirective */
/* unused harmony export SidebarMinimizeDirective */
/* unused harmony export MobileSidebarToggleDirective */
/* unused harmony export SidebarOffCanvasCloseDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_TOGGLE_DIRECTIVES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarToggleDirective.prototype, "toggleOpen", null);
    SidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleDirective);
    return SidebarToggleDirective;
}());

var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarMinimizeDirective.prototype, "toggleOpen", null);
    SidebarMinimizeDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarMinimizer]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarMinimizeDirective);
    return SidebarMinimizeDirective;
}());

var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
    MobileSidebarToggleDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appMobileSidebarToggler]'
        }),
        __metadata("design:paramtypes", [])
    ], MobileSidebarToggleDirective);
    return MobileSidebarToggleDirective;
}());

/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
    SidebarOffCanvasCloseDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appSidebarClose]'
        }),
        __metadata("design:paramtypes", [])
    ], SidebarOffCanvasCloseDirective);
    return SidebarOffCanvasCloseDirective;
}());

var SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map