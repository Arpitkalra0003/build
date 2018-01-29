webpackJsonp(["agent.module"],{

/***/ "../../../../../src/app/agent/agent-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allowance_component__ = __webpack_require__("../../../../../src/app/agent/allowance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approve_component__ = __webpack_require__("../../../../../src/app/agent/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbalance_component__ = __webpack_require__("../../../../../src/app/agent/checkbalance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transfer_component__ = __webpack_require__("../../../../../src/app/agent/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferfrom_component__ = __webpack_require__("../../../../../src/app/agent/transferfrom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__convertcurrencytoinrx_component__ = __webpack_require__("../../../../../src/app/agent/convertcurrencytoinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockescrowinrx_component__ = __webpack_require__("../../../../../src/app/agent/lockescrowinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__withdrawasincinrx_component__ = __webpack_require__("../../../../../src/app/agent/withdrawasincinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__convertcurrencytousdx_component__ = __webpack_require__("../../../../../src/app/agent/convertcurrencytousdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lockescrowusdx_component__ = __webpack_require__("../../../../../src/app/agent/lockescrowusdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withdrawasincusdx_component__ = __webpack_require__("../../../../../src/app/agent/withdrawasincusdx.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        data: {
            title: 'Agent'
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
                path: 'convertcurrencytoinrx',
                component: __WEBPACK_IMPORTED_MODULE_7__convertcurrencytoinrx_component__["a" /* ConvertcurrencytoinrxComponent */],
                data: {
                    title: 'Convertcurrencytoinrx'
                }
            },
            {
                path: 'lockescrowinrx',
                component: __WEBPACK_IMPORTED_MODULE_8__lockescrowinrx_component__["a" /* LockescrowinrxComponent */],
                data: {
                    title: 'Lockescrowinrx'
                }
            },
            {
                path: 'withdrawasincinrx',
                component: __WEBPACK_IMPORTED_MODULE_9__withdrawasincinrx_component__["a" /* WithdrawasincinrxComponent */],
                data: {
                    title: 'Withdrawasincinrx'
                }
            },
            {
                path: 'convertcurrencytousdx',
                component: __WEBPACK_IMPORTED_MODULE_10__convertcurrencytousdx_component__["a" /* ConvertcurrencytousdxComponent */],
                data: {
                    title: 'Convertcurrencytousdx'
                }
            },
            {
                path: 'lockescrowusdx',
                component: __WEBPACK_IMPORTED_MODULE_11__lockescrowusdx_component__["a" /* LockescrowusdxComponent */],
                data: {
                    title: 'Lockescrowusdx'
                }
            },
            {
                path: 'withdrawasincusdx',
                component: __WEBPACK_IMPORTED_MODULE_12__withdrawasincusdx_component__["a" /* WithdrawasincusdxComponent */],
                data: {
                    title: 'Withdrawasincusdx'
                }
            }
        ]
    }
];
var AgentRoutingModule = (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/agent/agent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allowance_component__ = __webpack_require__("../../../../../src/app/agent/allowance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__approve_component__ = __webpack_require__("../../../../../src/app/agent/approve.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkbalance_component__ = __webpack_require__("../../../../../src/app/agent/checkbalance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transfer_component__ = __webpack_require__("../../../../../src/app/agent/transfer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transferfrom_component__ = __webpack_require__("../../../../../src/app/agent/transferfrom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__convertcurrencytoinrx_component__ = __webpack_require__("../../../../../src/app/agent/convertcurrencytoinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockescrowinrx_component__ = __webpack_require__("../../../../../src/app/agent/lockescrowinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__withdrawasincinrx_component__ = __webpack_require__("../../../../../src/app/agent/withdrawasincinrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__convertcurrencytousdx_component__ = __webpack_require__("../../../../../src/app/agent/convertcurrencytousdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lockescrowusdx_component__ = __webpack_require__("../../../../../src/app/agent/lockescrowusdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withdrawasincusdx_component__ = __webpack_require__("../../../../../src/app/agent/withdrawasincusdx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agent_routing_module__ = __webpack_require__("../../../../../src/app/agent/agent-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AgentModule = (function () {
    function AgentModule() {
    }
    AgentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__agent_routing_module__["a" /* AgentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allowance_component__["a" /* AllowanceComponent */],
                __WEBPACK_IMPORTED_MODULE_3__approve_component__["a" /* ApproveComponent */],
                __WEBPACK_IMPORTED_MODULE_4__checkbalance_component__["a" /* CheckbalanceComponent */],
                __WEBPACK_IMPORTED_MODULE_5__transfer_component__["a" /* TransferComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transferfrom_component__["a" /* TransferfromComponent */],
                __WEBPACK_IMPORTED_MODULE_7__convertcurrencytoinrx_component__["a" /* ConvertcurrencytoinrxComponent */],
                __WEBPACK_IMPORTED_MODULE_8__lockescrowinrx_component__["a" /* LockescrowinrxComponent */],
                __WEBPACK_IMPORTED_MODULE_9__withdrawasincinrx_component__["a" /* WithdrawasincinrxComponent */],
                __WEBPACK_IMPORTED_MODULE_10__convertcurrencytousdx_component__["a" /* ConvertcurrencytousdxComponent */],
                __WEBPACK_IMPORTED_MODULE_11__lockescrowusdx_component__["a" /* LockescrowusdxComponent */],
                __WEBPACK_IMPORTED_MODULE_12__withdrawasincusdx_component__["a" /* WithdrawasincusdxComponent */]
            ]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "../../../../../src/app/agent/allowance.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>Instafer Agent - Allowance</h1>\n    \n    <form>\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\" id=\"allowanceowner\" placeholder=\"Owner\"></p>\n      <p><input type=\"password\" id=\"allowancespender\" placeholder=\"Spender\"></p>\n      <p class=\"submit\"><input type=\"submit\" id=\"allowancebtn\" value=\"Allow\" (click)=\"allowance()\"></p>\n    </form>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/agent/allowance.component.ts":
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
        console.log("allowanceowner");
        // $("#allowancebtn").click(function() {
        console.log($("#allowanceowner").val());
        console.log($("#allowancespender").val());
        var args = $("#allowanceowner").val() + "," + $("#allowanceowner").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("allowance", args);
        //  INCTokenC.allowance($("#allowanceowner").val(),$("#allowancespender").val(),function(error, result){
        //      if(!error)
        //          {
        //              $("#instructor").html(result+' id');
        //              console.log(result);
        //          }
        //      else
        //          console.error(error);
        //  });
        //  });
    };
    AllowanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/allowance.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AllowanceComponent);
    return AllowanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/approve.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>Instafer Agent-Approve</h1>\n    \n    <form method>\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\" id=\"approveaddress\" placeholder=\"Address\"></p>\n   <p><input type=\"text\" id=\"approveamount\" placeholder=\"Amount\"></p>\n    \n      <p class=\"submit\"><input type=\"submit\" id=\"approvebtn\" value=\"approve\"></p>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/approve.component.ts":
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
            template: __webpack_require__("../../../../../src/app/agent/approve.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ApproveComponent);
    return ApproveComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/checkbalance.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>Instafer Agent-Check Balance</h1>\n    \n    <form >\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\"  placeholder=\"Address\" id=\"address\" ></p>\n      <p class=\"submit\"><input type=\"submit\" id=\"button\" [value]=\"btntxt\" (click)=\"show()\"></p>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/checkbalance.component.ts":
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
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["incToken"]("approve", args);
        //     //$("#button").click(function() {
        //         INCTokenC.balanceOf($("#address").val(),function(error, result){
        //             if(!error)
        //                 {
        //                     $("#instructor").html(result+' INC');
        //                     console.log(result);
        //                 }
        //             else
        //                 console.error(error);
        //         });
        //     });
        //     console.log("Check");
    };
    CheckbalanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/checkbalance.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CheckbalanceComponent);
    return CheckbalanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/convertcurrencytoinrx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>INSTAFER-Convert currency to INRX</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"convertcurrencytoinrxaddress\" placeholder=\"address\"></p>\n        \n        <p><input type=\"number\" id=\"convertcurrencytoinrxamount\" placeholder=\"Amount\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"convertcurrencytoinrxbtn\" value=\"convert\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/convertcurrencytoinrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertcurrencytoinrxComponent; });
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


var ConvertcurrencytoinrxComponent = (function () {
    function ConvertcurrencytoinrxComponent() {
        ss(); //wallet.setSeed();
    }
    ConvertcurrencytoinrxComponent.prototype.addToCurrencyX = function () {
        console.log($("#convertcurrencytoinrxaddress").val());
        console.log($("#convertcurrencytoinrxamount").val());
        var args = $("#convertcurrencytoinrxaddress").val() + "," + $("#convertcurrencytoinrxamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["addToCurrencyX"]("addToCurrencyX", args);
        //   $("#convertcurrencytoinrxbtn").click(function() {
        //          console.log($("#convertcurrencytoinrxaddress").val());
        //          console.log($("#convertcurrencytoinrxamount").val());
        //          INCTokenC.addToCurrencyX($("#convertcurrencytoinrxaddress").val(),$("#convertcurrencytoinrxamount").val(),function(error, result){
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
    ConvertcurrencytoinrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/convertcurrencytoinrx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConvertcurrencytoinrxComponent);
    return ConvertcurrencytoinrxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/convertcurrencytousdx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>INSTAFER-Convert currency to USDX</h1>\n    \n    <form>\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\" id=\"convertcurrencytousdxaddress\" placeholder=\"address\"></p>\n      \n      <p><input type=\"number\" id=\"convertcurrencytousdxaddressspender\" placeholder=\"Amount\"></p>\n      \n      <p class=\"submit\"><input type=\"submit\" id=\"convertcurrencytousdxbtn\" value=\"convert\"></p>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/convertcurrencytousdx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConvertcurrencytousdxComponent; });
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


var ConvertcurrencytousdxComponent = (function () {
    function ConvertcurrencytousdxComponent() {
        ss(); //wallet.setSeed();
    }
    ConvertcurrencytousdxComponent.prototype.toCurrencyX = function () {
        console.log($("#convertcurrencytousdxaddress").val());
        console.log($("#convertcurrencytousdxamount").val());
        var args = $("#convertcurrencytousdxaddress").val() + "," + $("#convertcurrencytousdxamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["addToCurrencyX"]("addToCurrencyX", args);
        //   $("#convertcurrencytousdxbtn").click(function() {
        //          console.log($("#convertcurrencytousdxaddress").val());
        //          console.log($("#convertcurrencytousdxamount").val());
        //          INCTokenC.toCurrencyX($("#convertcurrencytousdxaddress").val(),$("#convertcurrencytousdxamount").val(),function(error, result){
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
    ConvertcurrencytousdxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/convertcurrencytousdx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ConvertcurrencytousdxComponent);
    return ConvertcurrencytousdxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/lockescrowinrx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>INSTAFER-Lock Escrow INRX</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"lockescrowinrxaddresssender\" placeholder=\"address Sender\"></p>\n        <p><input type=\"text\" id=\"lockescrowinrxaddressreceiveragent\" placeholder=\"address ReceiverAgent\"></p>\n        <p><input type=\"text\" id=\"lockescrowinrxaddressreceiver\" placeholder=\"address Receiver\"></p>\n        <p><input type=\"number\" id=\"lockescroinrxamount\" placeholder=\"amount\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"lockescroinrxbtn\" value=\"Lock Escrow\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/lockescrowinrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockescrowinrxComponent; });
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


var LockescrowinrxComponent = (function () {
    function LockescrowinrxComponent() {
        ss(); //wallet.setSeed();
    }
    LockescrowinrxComponent.prototype.lockEscrow = function () {
        console.log($("#lockescrowinrxaddresssender").val());
        console.log($("#lockescrowinrxaddressreceiveragent").val());
        console.log($("#lockescrowinrxaddressreceiver").val());
        console.log($("#lockescrowinrxaddressreceiveragent").val());
        var args = $("#lockescrowinrxaddresssender").val() + "," + $("#lockescrowinrxaddressreceiveragent").val() + "," + $("#lockescrowinrxaddressreceiver").val() + "," + $("#lockescrowinrxaddressreceiveragent").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["INRX"]("lockEscrow", args);
        //   $("#withdrawasincbtn").click(function() {
        //          console.log($("#withdrawasincamount").val());
        //          console.log($("#withdrawasincyorn").val());
        //          INRX.withdrawAsINC($("#withdrawasincamount").val(),$("#withdrawasincyorn").val(),function(error, result){
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
    LockescrowinrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/lockescrowinrx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LockescrowinrxComponent);
    return LockescrowinrxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/lockescrowusdx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>INSTAFER-Lock Escrow USDX</h1>\n      \n      <form method>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"lockescrowusdxaddresssender\" placeholder=\"address Sender\"></p>\n        <p><input type=\"text\" id=\"lockescrowusdxaddressreceiveragent\" placeholder=\"address ReceiverAgent\"></p>\n        <p><input type=\"text\" id=\"lockescrowusdxaddressreceiver\" placeholder=\"address Receiver\"></p>\n        <p><input type=\"number\" id=\"lockescrowusdxaddressamount\" placeholder=\"amount\"></p>\n        \n        <p class=\"submit\"><input type=\"submit\" id=\"lockescrowusdxaddressbtn\" value=\"Lock Escrow\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/lockescrowusdx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockescrowusdxComponent; });
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


var LockescrowusdxComponent = (function () {
    function LockescrowusdxComponent() {
        ss(); //wallet.setSeed();
    }
    LockescrowusdxComponent.prototype.lockEscrow = function () {
        console.log($("#lockescrowusdxaddresssender").val());
        console.log($("#lockescrowusdxaddressreceiveragent").val());
        console.log($("#lockescrowusdxaddressreceiver").val());
        console.log($("#lockescrowusdxaddressreceiveragent").val());
        var args = $("#lockescrowusdxaddresssender").val() + "," + $("#lockescrowusdxaddressreceiveragent").val() + "," + $("#lockescrowusdxaddressreceiver").val() + "," + $("#lockescrowusdxaddressreceiveragent").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["USDX"]("lockEscrow", args);
        //   $("#withdrawasincbtn").click(function() {
        //          console.log($("#withdrawasincamount").val());
        //          console.log($("#withdrawasincyorn").val());
        //          INRX.withdrawAsINC($("#withdrawasincamount").val(),$("#withdrawasincyorn").val(),function(error, result){
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
    LockescrowusdxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/lockescrowusdx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LockescrowusdxComponent);
    return LockescrowusdxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/transfer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>Instafer Admin-Transfer</h1>\n    \n    <form >\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\" id=\"transferto\" placeholder=\"To\"></p>\n      <p><input type=\"number\" id=\"transferamount\" placeholder=\"Amount\"></p>\n      \n      <p class=\"submit\"><input type=\"submit\" id=\"transferbtn\" value=\"Transfer\" (click)=\"transfer()\" ></p>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/transfer.component.ts":
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
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["transfer"]("transfer", args);
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
            template: __webpack_require__("../../../../../src/app/agent/transfer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransferComponent);
    return TransferComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/transferfrom.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n  <div class=\"login\">\n    <h1>Instafer Admin-Transfer from</h1>\n    \n    <form>\n        <p id=\"instructor\"></p>\n      <p><input type=\"text\" id=\"transferfromfrom\" placeholder=\"From\"></p>\n      <p><input type=\"password\" id=\"transferfromto\" placeholder=\"To\"></p>\n      <p><input type=\"password\" id=\"transferfromamount\" placeholder=\"Amount\"></p>\n      \n      <p class=\"submit\"><input type=\"submit\" id=\"transferfrombtn\" value=\"Transfer\"></p>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/transferfrom.component.ts":
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
    TransferfromComponent.prototype.transferfrom = function () {
        console.log($("#transferfromfrom").val());
        console.log($("#transferfromto").val());
        console.log($("#transferfromamount").val());
        var args = $("#transferfromfrom").val() + "," + $("#transferfromto").val() + "," + $("#transferfromamount").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["transferfrom"]("transferfrom", args);
        //   $("#transferfrombtn").click(function() {
        //          console.log($("#transferfromfrom").val());
        //          console.log($("#transferfromto").val());
        //          console.log($("#transferfromamount").val());
        //          INCTokenC.transferfrom($("#transferfromfrom").val(),$("#transferfromto").val(),$("#transferfromamount").val(),function(error, result){
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
            template: __webpack_require__("../../../../../src/app/agent/transferfrom.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransferfromComponent);
    return TransferfromComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/withdrawasincinrx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>INSTAFER-Withdraw as INC</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"withdrawasincamount\" placeholder=\"Amount\"></p>\n        <p><input type=\"bool\" id=\"withdrawasincyorn\" placeholder=\"Y or N\"></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"withdrawasincbtn\" value=\"withdraw as INC\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/withdrawasincinrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawasincinrxComponent; });
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


var WithdrawasincinrxComponent = (function () {
    function WithdrawasincinrxComponent() {
        ss(); //wallet.setSeed();
    }
    WithdrawasincinrxComponent.prototype.withdrawAsINC = function () {
        console.log($("#withdrawasincamount").val());
        console.log($("#withdrawasincyorn").val());
        var args = $("#withdrawasincamount").val() + "," + $("#withdrawasincyorn").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["INRX"]("withdrawAsINC", args);
        //   $("#withdrawasincbtn").click(function() {
        //          console.log($("#withdrawasincamount").val());
        //          console.log($("#withdrawasincyorn").val());
        //          INRX.withdrawAsINC($("#withdrawasincamount").val(),$("#withdrawasincyorn").val(),function(error, result){
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
    WithdrawasincinrxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/withdrawasincinrx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WithdrawasincinrxComponent);
    return WithdrawasincinrxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent/withdrawasincusdx.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <div class=\"login\">\n      <h1>INSTAFER-Withdraw as USDX</h1>\n      \n      <form>\n          <p id=\"instructor\"></p>\n        <p><input type=\"text\" id=\"withdrawasusdxamount\" placeholder=\"Amount\"></p>\n        <p><input type=\"bool\" id=\"withdrawasusdxyorn\" placeholder=\"Y or N\"></p>\n        <p class=\"submit\"><input type=\"submit\" id=\"withdrawasusdxbtn\" value=\"withdraw as USDX\"></p>\n      </form>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent/withdrawasincusdx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawasincusdxComponent; });
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


var WithdrawasincusdxComponent = (function () {
    function WithdrawasincusdxComponent() {
        ss(); //wallet.setSeed();
    }
    WithdrawasincusdxComponent.prototype.withdrawAsINC = function () {
        console.log($("#withdrawasusdxamount").val());
        console.log($("#withdrawasusdxyorn").val());
        var args = $("#withdrawasusdxamount").val() + "," + $("#withdrawasusdxyorn").val();
        __WEBPACK_IMPORTED_MODULE_1_wallet_js__["USDX"]("withdrawAsINC", args);
        //   $("#withdrawasincbtn").click(function() {
        //          console.log($("#withdrawasincamount").val());
        //          console.log($("#withdrawasincyorn").val());
        //          INRX.withdrawAsINC($("#withdrawasincamount").val(),$("#withdrawasincyorn").val(),function(error, result){
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
    WithdrawasincusdxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agent/withdrawasincusdx.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WithdrawasincusdxComponent);
    return WithdrawasincusdxComponent;
}());



/***/ })

});
//# sourceMappingURL=agent.module.chunk.js.map