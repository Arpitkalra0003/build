webpackJsonp(["admin.module"],{

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allowance_component__ = __webpack_require__("../../../../../src/app/admin/allowance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approve_component__ = __webpack_require__("../../../../../src/app/admin/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbalance_component__ = __webpack_require__("../../../../../src/app/admin/checkbalance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transfer_component__ = __webpack_require__("../../../../../src/app/admin/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferfrom_component__ = __webpack_require__("../../../../../src/app/admin/transferfrom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__setusdxinrxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setusdxinrxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__releaseescrowinrxtousdx_component__ = __webpack_require__("../../../../../src/app/admin/releaseescrowinrxtousdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__releaseescrowusdxtoinrx_component__ = __webpack_require__("../../../../../src/app/admin/releaseescrowusdxtoinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__setusdxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setusdxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rateset_component__ = __webpack_require__("../../../../../src/app/admin/rateset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setinrxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setinrxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ratesetusdx_component__ = __webpack_require__("../../../../../src/app/admin/ratesetusdx.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { TestComponent } from './test.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Admin'
        },
        children: [
            {
                path: 'allowance',
                component: __WEBPACK_IMPORTED_MODULE_2__allowance_component__["a" /* AllowanceComponent */],
                data: {
                    title: 'Allowance'
                }
            },
            {
                path: 'approve',
                component: __WEBPACK_IMPORTED_MODULE_3__approve_component__["a" /* ApproveComponent */],
                data: {
                    title: 'Approve'
                }
            },
            {
                path: 'checkbalance',
                component: __WEBPACK_IMPORTED_MODULE_4__checkbalance_component__["a" /* CheckbalanceComponent */],
                data: {
                    title: 'Checkbalance'
                }
            },
            {
                path: 'transfer',
                component: __WEBPACK_IMPORTED_MODULE_5__transfer_component__["a" /* TransferComponent */],
                data: {
                    title: 'Transfer'
                }
            },
            {
                path: 'transferfrom',
                component: __WEBPACK_IMPORTED_MODULE_6__transferfrom_component__["a" /* TransferfromComponent */],
                data: {
                    title: 'Transferfrom'
                }
            },
            {
                path: 'setusdxinrxcontract',
                component: __WEBPACK_IMPORTED_MODULE_7__setusdxinrxcontract_component__["a" /* SetusdxinrxcontractComponent */],
                data: {
                    title: 'Setusdxinrxcontract'
                }
            },
            {
                path: 'releaseescrowinrxtousdx',
                component: __WEBPACK_IMPORTED_MODULE_8__releaseescrowinrxtousdx_component__["a" /* ReleaseescrowinrxtousdxComponent */],
                data: {
                    title: 'releaseescrowinrxtousdx'
                }
            },
            {
                path: 'releaseescrowusdxtoinrx',
                component: __WEBPACK_IMPORTED_MODULE_9__releaseescrowusdxtoinrx_component__["a" /* ReleaseescrowusdxtoinrxComponent */],
                data: {
                    title: 'releaseescrowusdxtoinrx'
                }
            },
            {
                path: 'setusdxcontract',
                component: __WEBPACK_IMPORTED_MODULE_10__setusdxcontract_component__["a" /* SetusdxcontractComponent */],
                data: {
                    title: 'Setusdxcontract'
                }
            },
            {
                path: 'rateset',
                component: __WEBPACK_IMPORTED_MODULE_11__rateset_component__["a" /* RatesetComponent */],
                data: {
                    title: 'Rateset'
                }
            },
            {
                path: 'setinrxcontract',
                component: __WEBPACK_IMPORTED_MODULE_12__setinrxcontract_component__["a" /* SetinrxcontractComponent */],
                data: {
                    title: 'Setinrxcontract'
                }
            },
            {
                path: 'ratesetusdx',
                component: __WEBPACK_IMPORTED_MODULE_13__ratesetusdx_component__["a" /* RatesetusdxComponent */],
                data: {
                    title: 'Ratesetusdx'
                }
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allowance_component__ = __webpack_require__("../../../../../src/app/admin/allowance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approve_component__ = __webpack_require__("../../../../../src/app/admin/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkbalance_component__ = __webpack_require__("../../../../../src/app/admin/checkbalance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transfer_component__ = __webpack_require__("../../../../../src/app/admin/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transferfrom_component__ = __webpack_require__("../../../../../src/app/admin/transferfrom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setusdxinrxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setusdxinrxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__releaseescrowinrxtousdx_component__ = __webpack_require__("../../../../../src/app/admin/releaseescrowinrxtousdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__releaseescrowusdxtoinrx_component__ = __webpack_require__("../../../../../src/app/admin/releaseescrowusdxtoinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setusdxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setusdxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rateset_component__ = __webpack_require__("../../../../../src/app/admin/rateset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__setinrxcontract_component__ = __webpack_require__("../../../../../src/app/admin/setinrxcontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ratesetusdx_component__ = __webpack_require__("../../../../../src/app/admin/ratesetusdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















//import { TestComponent } from './test.component';

var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__allowance_component__["a" /* AllowanceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__approve_component__["a" /* ApproveComponent */],
                __WEBPACK_IMPORTED_MODULE_5__checkbalance_component__["a" /* CheckbalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transfer_component__["a" /* TransferComponent */],
                __WEBPACK_IMPORTED_MODULE_7__transferfrom_component__["a" /* TransferfromComponent */],
                __WEBPACK_IMPORTED_MODULE_8__setusdxinrxcontract_component__["a" /* SetusdxinrxcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_9__releaseescrowinrxtousdx_component__["a" /* ReleaseescrowinrxtousdxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__releaseescrowusdxtoinrx_component__["a" /* ReleaseescrowusdxtoinrxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__setusdxcontract_component__["a" /* SetusdxcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_12__rateset_component__["a" /* RatesetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__setinrxcontract_component__["a" /* SetinrxcontractComponent */],
                __WEBPACK_IMPORTED_MODULE_14__ratesetusdx_component__["a" /* RatesetusdxComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/allowance.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin - Allowance</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"allowanceowner\" placeholder=\"Owner\"></p>\n        <p><input type=\"text\" id=\"allowancespender\" placeholder=\"Spender\"></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"allowancebtn\" value=\"Allow\" (click)=\"allowance()\"></p>\n      </form>\n    </div>\n\t\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/admin/allowance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllowanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllowanceComponent = (function () {
    function AllowanceComponent() {
        ss(); //wallet.setSeed();
    }
    AllowanceComponent.prototype.allowance = function () {
        console.log($("#allowanceowner").val());
        console.log($("#allowancespender").val());
        var args = $("#allowanceowner").val() + "," + $("#allowancespender").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("allowance", args);
        //   $("#allowancebtn").click(function() {
        //          console.log($("#allowanceowner").val());
        //          console.log($("#allowancespender").val());
        //          INCTokenC.allowance($("#allowanceowner").val(),$("#allowancespender").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    AllowanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/allowance.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceComponent);
    return AllowanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/approve.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Approve</h1>\n      \n      <form method>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"approveaddress\" placeholder=\"Address\"></p>\n\t\t    <p><input type=\"text\" id=\"approveamount\" placeholder=\"Amount\"></p>\n\t\t  \n        <p class=\"submit\"><input type=\"submit\" id=\"approvebtn\" value=\"approve\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/approve.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApproveComponent = (function () {
    function ApproveComponent() {
        ss(); //wallet.setSeed();
    }
    ApproveComponent.prototype.approve = function () {
        console.log($("#approveaddress").val());
        console.log($("#approveamount").val());
        var args = $("#approveaddress").val() + "," + $("#approveamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("approve", args);
        //   $("#approvebtn").click(function() {
        //          console.log($("#approveaddress").val());
        //          console.log($("#approveamount").val());
        //          INCTokenC.approve($("#approveaddress").val(),$("#approveamount").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    ApproveComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/approve.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ApproveComponent);
    return ApproveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/checkbalance.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Check Balance</h1>\n      \n      <form >\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\"  placeholder=\"Address\" id=\"address\" ></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"button\" [value]=\"btntxt\" (click)=\"balanceOf()\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/checkbalance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckbalanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckbalanceComponent = (function () {
    function CheckbalanceComponent() {
        this.btntxt = 'Show';
        ss(); //wallet.setSeed();
    }
    CheckbalanceComponent.prototype.balanceOf = function () {
        console.log($("#address").val());
        var args = $("#address").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("balanceOf", args);
        // $("#button").click(function() {
        //     INCTokenC.balanceOf($("#address").val(),function(error, result){
        //         if(!error)
        //             {
        //                 $("#instructor").html(result+' INC');
        //                 console.log(result);
        //             }
        //         else
        //             console.error(error);
        //     });
        // });
        // console.log("Check");
    };
    CheckbalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/checkbalance.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CheckbalanceComponent);
    return CheckbalanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/rateset.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Rate Set</h1>\n      \n      <form method>\n          <p id=\"instructor\"></p>\n        <p><input type=\"number\" id=\"ratesetamount\" placeholder=\"Amount\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"ratesetbtn\" value=\"Set\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/rateset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatesetComponent = (function () {
    function RatesetComponent() {
        ss(); //wallet.setSeed();
    }
    RatesetComponent.prototype.rateSet = function () {
        console.log($("#ratesetamount").val());
        var args = $("#ratesetamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["INRX"]("rateSet", args);
        //   $("#ratesetbtn").click(function() {
        //          console.log($("#ratesetamount").val());
        //          INRX.rateSet($("#ratesetamount").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    RatesetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/rateset.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RatesetComponent);
    return RatesetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/ratesetusdx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Rateset USDX</h1>\n      \n      <form method>\n          <p id=\"instructor\"></p>\n        <p><input type=\"number\" id=\"ratesetamount\" placeholder=\"Amount\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"ratesetusdxbtn\" value=\"Set\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/ratesetusdx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesetusdxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatesetusdxComponent = (function () {
    function RatesetusdxComponent() {
        ss(); //wallet.setSeed();
    }
    RatesetusdxComponent.prototype.ratesetusdx = function () {
        console.log($("#ratesetusdxamount").val());
        var args = $("#ratesetusdxamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["INRX"]("rateSetusdx", args);
        //   $("#ratesetusdxbtn").click(function() {
        //           console.log($("#ratesetamount").val());
        //          INCTokenC.ratesetusdx($("#ratesetamount").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    RatesetusdxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/ratesetusdx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RatesetusdxComponent);
    return RatesetusdxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/releaseescrowinrxtousdx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n        <div class=\"login\">\n          <h1>Instafer Admin-Release Escrow INRX to USDX</h1>\n          \n          <form>\n              <p id=\"instructor\"></p>\n            <p><input type=\"text\" id=\"releaseescowinrxtousdxid1\" placeholder=\"Enter Bytes32 ID1\"></p>\n            <p><input type=\"password\" id=\"releaseescowinrxtousdxid2\" placeholder=\"Enter Bytes32 ID2\"></p>\n            <p><input type=\"text\" id=\"releaseescowinrxtousdxsender\" placeholder=\"Enter Sender Address:\"></p>\n            <p><input type=\"password\" id=\"releaseescowinrxtousdxreceiver\" placeholder=\"Enter Reciever Address:\"></p>\n            <p class=\"submit\"><input type=\"submit\" id=\"releaseescowinrxtousdxid1btn\" value=\"Release\"></p>\n          </form>\n        </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/releaseescrowinrxtousdx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseescrowinrxtousdxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReleaseescrowinrxtousdxComponent = (function () {
    function ReleaseescrowinrxtousdxComponent() {
        ss(); //wallet.setSeed();
    }
    ReleaseescrowinrxtousdxComponent.prototype.releaseescrowinrxtousdx = function () {
        console.log($("#releaseescowinrxtousdxid1").val());
        console.log($("#releaseescowinrxtousdxid2").val());
        console.log($("#releaseescowinrxtousdxsender").val());
        console.log($("#releaseescowinrxtousdxreceiver").val());
        var args = $("#releaseescowinrxtousdxid1").val() + "," + $("#releaseescowinrxtousdxid2").val() + "," + $("#releaseescowinrxtousdxsender").val() + "," + $("#releaseescowinrxtousdxreceiver").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("releaseescrowinrxtousdx", args);
        //   $("#transferbtn").click(function() {
        //          console.log($("#releaseescowinrxtousdxid1").val());
        //          console.log($("#releaseescowinrxtousdxid2").val());
        //          console.log($("#releaseescowinrxtousdxsender").val());
        //          console.log($("#releaseescowinrxtousdxreceiver").val());
        //          INCTokenC.releaseEscrowINRXtoUSDX($("#releaseescowinrxtousdxid1btn").val(),$("#releaseescowinrxtousdxid2").val(),$("#releaseescowinrxtousdxsender").val(),$("#releaseescowinrxtousdxreceiver").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    ReleaseescrowinrxtousdxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/releaseescrowinrxtousdx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReleaseescrowinrxtousdxComponent);
    return ReleaseescrowinrxtousdxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/releaseescrowusdxtoinrx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Release Escrow USDX to INRX</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"releaseescrowusdxtoinrxid1\" placeholder=\"Enter Bytes32 ID1\"></p>\n        <p><input type=\"password\" id=\"releaseescrowusdxtoinrxid2\" placeholder=\"Enter Bytes32 ID2\"></p>\n        <p><input type=\"text\" id=\"releaseescrowusdxtoinrxsender\" placeholder=\"Enter Sender Address:\"></p>\n        <p><input type=\"password\" id=\"releaseescrowusdxtoinrxreceiver\" placeholder=\"Enter Reciever Address:\"></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"releaseescrowusdxtoinrxbtn\" value=\"Release\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/releaseescrowusdxtoinrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReleaseescrowusdxtoinrxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReleaseescrowusdxtoinrxComponent = (function () {
    function ReleaseescrowusdxtoinrxComponent() {
        ss(); //wallet.setSeed();
    }
    ReleaseescrowusdxtoinrxComponent.prototype.releaseescrowusdxtoinrx = function () {
        console.log($("#releaseescrowusdxtoinrxid1").val());
        console.log($("#releaseescrowusdxtoinrxid2").val());
        console.log($("#releaseescrowusdxtoinrxsender").val());
        console.log($("#releaseescrowusdxtoinrxreceiver").val());
        var args = $("#releaseescrowusdxtoinrxid1").val() + "," + $("#releaseescrowusdxtoinrxid2").val() + "," + $("#releaseescrowusdxtoinrxsender").val() + "," + $("#releaseescrowusdxtoinrxreceiver").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("releaseescrowusdxtoinrx", args);
        //   $("#releaseescrowusdxtoinrxbtn").click(function() {
        //          console.log($("#releaseescrowusdxtoinrxid1").val());
        //          console.log($("#releaseescrowusdxtoinrxid2").val());
        //          console.log($("#releaseescrowusdxtoinrxsender").val());
        //          console.log($("#releaseescrowusdxtoinrxreceiver").val());
        //          INCTokenC.releaseEscrowUSDXtoINRX($("#releaseescrowusdxtoinrxid1").val(),$("#releaseescrowusdxtoinrxid2").val(),$("#releaseescrowusdxtoinrxsender").val(),$("#releaseescrowusdxtoinrxreceiver").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    ReleaseescrowusdxtoinrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/releaseescrowusdxtoinrx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReleaseescrowusdxtoinrxComponent);
    return ReleaseescrowusdxtoinrxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/setinrxcontract.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Set INRX Contract</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"setinrxcontractaddress\" placeholder=\"Address\"></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"setinrxcontractbtn\" value=\"Set\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/setinrxcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetinrxcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetinrxcontractComponent = (function () {
    function SetinrxcontractComponent() {
        ss(); //wallet.setSeed();
    }
    SetinrxcontractComponent.prototype.setinrxcontract = function () {
        console.log($("#setinrxcontractaddress").val());
        var args = $("#setinrxcontractaddress").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("setinrxcontract", args);
        //   $("#setinrxcontractbtn").click(function() {
        //          console.log($("#setinrxcontractaddress").val());
        //          INCTokenC.setinrxcontract($("#setinrxcontractaddress").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    SetinrxcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/setinrxcontract.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SetinrxcontractComponent);
    return SetinrxcontractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/setusdxcontract.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>Instafer Admin-Set USDX Contract</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"setusdxaddressaddress\" placeholder=\"USDX address\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"setusdxaddressbtn\" value=\"Set\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/setusdxcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetusdxcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetusdxcontractComponent = (function () {
    function SetusdxcontractComponent() {
        ss(); //wallet.setSeed();
    }
    SetusdxcontractComponent.prototype.setUSDXContract = function () {
        console.log($("#setusdxaddressaddress").val());
        var args = $("#setusdxaddressaddress").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["INRX"]("setUSDXContract", args);
        //   $("#setusdxaddressbtn").click(function() {
        //          console.log($("#setusdxaddressaddress").val());
        //          INRX.setUSDXContract($("#setusdxaddressaddress").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    SetusdxcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/setusdxcontract.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SetusdxcontractComponent);
    return SetusdxcontractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/setusdxinrxcontract.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n        <div class=\"login\">\n          <h1>Instafer Admin-Set USDX INRX Contract</h1>\n          \n          <form>\n              <p id=\"instructor\"></p>\n            <p><input type=\"text\" id=\"setusdxinrxcontractaddressusdx\" placeholder=\"Address USDX Contract\"></p>\n            <p><input type=\"text\" id=\"setusdxinrxcontractaddresinrx\" placeholder=\"Address INRX Contract\"></p>\n            \n            \n            <p class=\"submit\"><input type=\"submit\" id=\"setusdxinrxcontractaddresbtn\" value=\"Set\"></p>\n          </form>\n        </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/setusdxinrxcontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetusdxinrxcontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SetusdxinrxcontractComponent = (function () {
    function SetusdxinrxcontractComponent() {
        ss(); //wallet.setSeed();
    }
    SetusdxinrxcontractComponent.prototype.setUSDXandINRXContractAddress = function () {
        console.log($("#setusdxinrxcontractaddressusdx").val());
        console.log($("#setusdxinrxcontractaddresinrx").val());
        var args = $("#setusdxaddressaddress").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("setUSDXandINRXContractAddress", args);
        //   $("#setusdxinrxcontractaddresbtn").click(function() {
        //          console.log($("#setusdxinrxcontractaddressusdx").val());
        //          console.log($("#setusdxinrxcontractaddresinrx").val());
        //          INCTokenC.setUSDXandINRXContractAddress($("#setusdxinrxcontractaddressusdx").val(),$("#setusdxinrxcontractaddresinrx").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    SetusdxinrxcontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/setusdxinrxcontract.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SetusdxinrxcontractComponent);
    return SetusdxinrxcontractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n        <div class=\"login\">\n          <h1>Instafer Admin-Transfer</h1>\n          \n          <form >\n              <p id=\"instructor\"></p>\n            <p><input type=\"text\" id=\"transferto\" placeholder=\"To\"></p>\n            <p><input type=\"number\" id=\"transferamount\" placeholder=\"Amount\"></p>\n            \n            <p class=\"submit\"><input type=\"submit\" id=\"transferbtn\" value=\"Transfer\" (click)=\"transfer()\" ></p>\n          </form>\n        </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/transfer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferComponent = (function () {
    function TransferComponent() {
        ss(); //wallet.setSeed();
    }
    TransferComponent.prototype.transfer = function () {
        console.log($("#transferto").val());
        console.log($("#transferamount").val());
        var args = $("#transferto").val() + "," + $("#transferamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("transfer", args);
        //   $("#transferbtn").click(function() {
        //          console.log($("#transferto").val());
        //          console.log($("#transferamount").val());
        //          INCTokenC.transfer($("#transferto").val(),$("#transferamount").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    TransferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/transfer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/transferfrom.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n        <div class=\"login\">\n          <h1>Instafer Admin-Transfer from</h1>\n          \n          <form>\n              <p id=\"instructor\"></p>\n            <p><input type=\"text\" id=\"transferfromfrom\" placeholder=\"From\"></p>\n            <p><input type=\"text\" id=\"transferfromto\" placeholder=\"To\"></p>\n            <p><input type=\"number\" id=\"transferfromamount\" placeholder=\"Amount\"></p>\n            \n            <p class=\"submit\"><input type=\"submit\" id=\"transferfrombtn\" value=\"Transfer\"></p>\n          </form>\n        </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/admin/transferfrom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferfromComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js__ = __webpack_require__("../../../../wallet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_wallet_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_wallet_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransferfromComponent = (function () {
    function TransferfromComponent() {
        ss(); //wallet.setSeed();
    }
    TransferfromComponent.prototype.transferFrom = function () {
        console.log($("#transferfromfrom").val());
        console.log($("#transferfromto").val());
        console.log($("#transferfromamount").val());
        var args = $("#transferfromfrom").val() + "," + $("#transferfromto").val() + "," + $("#transferfromamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("transferFrom", args);
        //   $("#transferfrombtn").click(function() {
        //          console.log($("#transferfromfrom").val());
        //          console.log($("#transferfromto").val());
        //          console.log($("#transferfromamount").val());
        //          INCTokenC.transferFrom($("#transferfromfrom").val(),$("#transferfromto").val(),$("#transferfromamount").val(),function(error, result){
        //              if(!error)
        //                  {
        //                      $("#instructor").html(result+' id');
        //                      console.log(result);
        //                  }
        //              else
        //                  console.error(error);
        //          });
        //      });
    };
    TransferfromComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/admin/transferfrom.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransferfromComponent);
    return TransferfromComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map