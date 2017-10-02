webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edition_detail_component__ = __webpack_require__("../../../../../src/app/edition-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edition_list_component__ = __webpack_require__("../../../../../src/app/edition-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__who_are_us_component__ = __webpack_require__("../../../../../src/app/who-are-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_component__ = __webpack_require__("../../../../../src/app/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */] },
    { path: 'edicoes', component: __WEBPACK_IMPORTED_MODULE_3__edition_list_component__["a" /* EditionListComponent */] },
    { path: 'edicao/:id', component: __WEBPACK_IMPORTED_MODULE_2__edition_detail_component__["a" /* EditionDetailComponent */] },
    { path: 'quemSomos', component: __WEBPACK_IMPORTED_MODULE_5__who_are_us_component__["a" /* WhoAreUsComponent */] },
    { path: 'contato', component: __WEBPACK_IMPORTED_MODULE_6__contact_component__["a" /* ContactComponent */] },
];
var AppRouterModule = (function () {
    function AppRouterModule() {
    }
    return AppRouterModule;
}());
AppRouterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRouterModule);

//# sourceMappingURL=app-router.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\">\n  <ul>\n    <li><a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n    <li><a class=\"nav-link\" routerLink=\"/edicoes\" routerLinkActive=\"active\">Manifestações</a></li>\n    <li><a class=\"nav-link\" routerLink=\"/quemSomos\" routerLinkActive=\"active\">Quem Somos</a></li>\n    <li><a class=\"nav-link\" routerLink=\"/contato\" routerLinkActive=\"active\">Contato</a></li>\n  </ul>\n</nav>\n<div id=\"main\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Matrizes transversais';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_router_module__ = __webpack_require__("../../../../../src/app/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edition_detail_component__ = __webpack_require__("../../../../../src/app/edition-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edition_service__ = __webpack_require__("../../../../../src/app/edition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edition_list_component__ = __webpack_require__("../../../../../src/app/edition-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__("../../../../../src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edition_component__ = __webpack_require__("../../../../../src/app/edition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_split_pipe__ = __webpack_require__("../../../../../src/app/pipes/split.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__who_are_us_component__ = __webpack_require__("../../../../../src/app/who-are-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_component__ = __webpack_require__("../../../../../src/app/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__edition_component__["a" /* EditionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__edition_detail_component__["a" /* EditionDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__edition_list_component__["a" /* EditionListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_split_pipe__["a" /* SplitPipe */],
            __WEBPACK_IMPORTED_MODULE_11__who_are_us_component__["a" /* WhoAreUsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_router_module__["a" /* AppRouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__edition_service__["a" /* EditionService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n    <body>\r\n        <h2>Favor entrar em contato atráves do Google Form abaixo :</h2> \r\n        <p><a href=\"https://goo.gl/forms/kSTCzDDkxvCtd27Q2\">Formulario de contato</a>\r\n        </p>\r\n    </body>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'contact',
        template: __webpack_require__("../../../../../src/app/contact.component.html")
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edition_service__ = __webpack_require__("../../../../../src/app/edition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditionDetailComponent = (function () {
    function EditionDetailComponent(route, editionService) {
        this.route = route;
        this.editionService = editionService;
    }
    EditionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.editionService.getEdition(+params.get('id')); })
            .subscribe(function (edition) { return _this.edition = edition; });
    };
    return EditionDetailComponent;
}());
EditionDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'edition-detail',
        template: "<edition [edition]=\"edition\"></edition>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__edition_service__["a" /* EditionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__edition_service__["a" /* EditionService */]) === "function" && _b || Object])
], EditionDetailComponent);

var _a, _b;
//# sourceMappingURL=edition-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"edition-list\">\n  <article class=\"edition-item\" *ngFor=\"let edition of editions\" \n    id=\"edition-{{edition.id}}\">\n    <figure (click)=\"goToDetail(edition)\">\n      <div class=\"cover\">\n        <img src=\"{{edition.cover}}\" />\n      </div>\n      <figcaption>\n        <h1>#{{edition.number}} - {{edition.name}}</h1>\n        <span class=\"date\">{{edition.date | date : 'dd/MM/yyyy'}}</span>\n      </figcaption>\n    </figure>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/edition-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edition_service__ = __webpack_require__("../../../../../src/app/edition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditionListComponent = (function () {
    function EditionListComponent(router, editionService) {
        this.router = router;
        this.editionService = editionService;
    }
    EditionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editionService.getEditions()
            .then(function (editions) { return _this.editions = editions; });
    };
    EditionListComponent.prototype.goToDetail = function (edition) {
        var link = ['/edicao', edition.number];
        this.router.navigate(link);
    };
    return EditionListComponent;
}());
EditionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'edition-list',
        template: __webpack_require__("../../../../../src/app/edition-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__edition_service__["a" /* EditionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__edition_service__["a" /* EditionService */]) === "function" && _b || Object])
], EditionListComponent);

var _a, _b;
//# sourceMappingURL=edition-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"edition\" *ngIf=\"edition != null\">\n  <header>\n    <h1>#{{edition.number}} - {{edition.name}}</h1>\n    <small class=\"date\">{{edition.date | date : 'dd/MM/yyyy'}}</small>\n  </header>\n  <div class=\"content\">\n    <figure>\n      <img src=\"{{edition.image}}\" />\n      <figcaption>\n        <p *ngFor=\"let line of edition.description | split: '\\n'\">\n          {{ line }}\n        </p>\n      </figcaption>\n    </figure>\n  </div>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/edition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edition__ = __webpack_require__("../../../../../src/app/edition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditionComponent = (function () {
    function EditionComponent() {
    }
    EditionComponent.prototype.ngOnInit = function () { };
    return EditionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__edition__["a" /* Edition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__edition__["a" /* Edition */]) === "function" && _a || Object)
], EditionComponent.prototype, "edition", void 0);
EditionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'edition',
        template: __webpack_require__("../../../../../src/app/edition.component.html")
    })
], EditionComponent);

var _a;
//# sourceMappingURL=edition.component.js.map

/***/ }),

/***/ "../../../../../src/app/edition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditionService = (function () {
    function EditionService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
    }
    EditionService.prototype.getEdition = function (id) {
        return this.http.get("./assets/data/edition." + id + ".json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditionService.prototype.getLastEdition = function () {
        return this.http.get("./assets/data/last_edition.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditionService.prototype.getEditions = function () {
        return this.http.get("./assets/data/editions.json")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return EditionService;
}());
EditionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EditionService);

var _a;
//# sourceMappingURL=edition.service.js.map

/***/ }),

/***/ "../../../../../src/app/edition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edition; });
var Edition = (function () {
    function Edition() {
    }
    return Edition;
}());

//# sourceMappingURL=edition.js.map

/***/ }),

/***/ "../../../../../src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edition_service__ = __webpack_require__("../../../../../src/app/edition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(editionService) {
        this.editionService = editionService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editionService.getLastEdition()
            .then(function (edition) { return _this.edition = edition; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: "<edition [edition]=\"edition\"></edition>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edition_service__["a" /* EditionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edition_service__["a" /* EditionService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/split.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SplitPipe = (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (val, params) {
        return val.split(params[0]);
    };
    return SplitPipe;
}());
SplitPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'split' })
], SplitPipe);

//# sourceMappingURL=split.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/who-are-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"who-are-us\">\n    <div *ngFor=\"let person of equip; let i = index\" class=\"person {{ i % 2 == 0 ? 'even' : 'odd' }}\">\n        <figure><img src=\"{{ person.image }}\" /></figure>\n        <div class=\"details\">\n            <h1>{{ person.name }}</h1>\n            <p *ngFor=\"let line of person.sub | split: '\\n'\">\n                {{ line }}\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/who-are-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoAreUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__who_are_us_data_json__ = __webpack_require__("../../../../../src/app/who-are-us.data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__who_are_us_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__who_are_us_data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WhoAreUsComponent = (function () {
    function WhoAreUsComponent() {
        this.equip = __WEBPACK_IMPORTED_MODULE_1__who_are_us_data_json__;
    }
    WhoAreUsComponent.prototype.ngOnInit = function () {
    };
    return WhoAreUsComponent;
}());
WhoAreUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'who-are-us',
        template: __webpack_require__("../../../../../src/app/who-are-us.component.html")
    })
], WhoAreUsComponent);

//# sourceMappingURL=who-are-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/who-are-us.data.json":
/***/ (function(module, exports) {

module.exports = [{"name":"Luana Hellmann","image":"https://github.com/Ladyhellmann/revista-diretizes-transversais/blob/master/src/assets/images/19657350_1401625546592430_3930530380499520458_n.jpg?raw=true","sub":"Luana Hellmann é graduanda em Licenciatura em História na Universidade da região de Joinville – Univille.\nGosta de pesquisar a respeito dos processos de migrações no Brasil, com foco principalmente nas imigração asiática.\nSeu lugar preferido para realizar suas leituras complementares trata-se da sacada da sua casa"},{"name":"Gabriella Estigaribia ","image":"https://github.com/Ladyhellmann/revista-diretizes-transversais/blob/master/src/assets/images/f2a9de80-94d7-4906-be7e-86dd1ae9d5b3.jpg?raw=true","sub":"Gabriella Estigaribia, atualmente, cursa História – Licenciatura – na Univille, em Joinville.\nEla tem estudado sobre Arqueologia, História Antiga, História da América, Introdução as Ciências Sociais, entre outras matérias.\nSeu foco principal é se tornar uma boa professora."},{"name":"Rebeka ","image":"https://github.com/Ladyhellmann/revista-diretizes-transversais/blob/master/src/assets/images/20170930_154201.jpg?raw=true","sub":"descrição rebeka"}]

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map