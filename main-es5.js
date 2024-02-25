function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./formulario/formulario.component */
    "./src/app/formulario/formulario.component.ts");
    /* harmony import */


    var _conclusao_conclusao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./conclusao/conclusao.component */
    "./src/app/conclusao/conclusao.component.ts");
    /* harmony import */


    var _guards_guards_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./guards/guards.service */
    "./src/app/guards/guards.service.ts");

    var routes = [{
      path: '',
      component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_2__["FormularioComponent"]
    }, {
      path: 'conclusao',
      component: _conclusao_conclusao_component__WEBPACK_IMPORTED_MODULE_3__["ConclusaoComponent"],
      canActivate: [_guards_guards_service__WEBPACK_IMPORTED_MODULE_4__["GuardsService"]]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'SimuladorEmprestimos';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./formulario/formulario.component */
    "./src/app/formulario/formulario.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _conclusao_conclusao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./conclusao/conclusao.component */
    "./src/app/conclusao/conclusao.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_14__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default.a);

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _conclusao_conclusao_component__WEBPACK_IMPORTED_MODULE_15__["ConclusaoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _conclusao_conclusao_component__WEBPACK_IMPORTED_MODULE_15__["ConclusaoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
          providers: [{
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
            useValue: 'pt'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/conclusao/conclusao.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/conclusao/conclusao.component.ts ***!
    \**************************************************/

  /*! exports provided: ConclusaoComponent */

  /***/
  function srcAppConclusaoConclusaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConclusaoComponent", function () {
      return ConclusaoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ConclusaoComponent = /*#__PURE__*/function () {
      function ConclusaoComponent(router) {
        _classCallCheck(this, ConclusaoComponent);

        this.router = router;
      }

      _createClass(ConclusaoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var navigation = this.router.getCurrentNavigation();
          var state = navigation === null || navigation === void 0 ? void 0 : navigation.extras.state;
          this.valorTotal = parseFloat(sessionStorage.getItem('valorTotal'));
          this.parcelas = parseFloat(sessionStorage.getItem('parcelas'));
          this.valorParcela = parseFloat(sessionStorage.getItem('valorParcela'));
          this.valorEmprestimo = parseFloat(sessionStorage.getItem('valorEmprestimo'));
        }
      }, {
        key: "voltar",
        value: function voltar() {
          this.router.navigate(['/']);
        }
      }]);

      return ConclusaoComponent;
    }();

    ConclusaoComponent.ɵfac = function ConclusaoComponent_Factory(t) {
      return new (t || ConclusaoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ConclusaoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConclusaoComponent,
      selectors: [["app-conclusao"]],
      decls: 15,
      vars: 13,
      consts: [[1, "conclusao"], ["mat-stroked-button", "", "color", "warn", 3, "click"]],
      template: function ConclusaoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "O empr\xE9stimo foi realizado com sucesso! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Veja abaixo o que voc\xEA contratou:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConclusaoComponent_Template_button_click_13_listener() {
            return ctx.voltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Novo empr\xE9stimo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Valor das parcelas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 3, ctx.valorParcela, "BRL", "symbol", "1.2-2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N\xFAmero de parcelas: ", ctx.parcelas, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total do valor com juros:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](12, 8, ctx.valorTotal, "BRL", "symbol", "1.2-2"), "");
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".conclusao[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  margin: 20px auto 20px auto;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 10px;\n  border: 2px solid #00ff2a;\n  box-shadow: 0 0 10px #51ff00;\n  padding: 10px;\n}\n\n.conclusao[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px auto 10px;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n@media only screen and (max-width: 767px) {\n  .conclusao[_ngcontent-%COMP%] {\n    display: flex;\n    width: 60%;\n    height: auto;\n    margin: 20px auto 20px auto;\n    justify-content: center;\n    flex-direction: column;\n    text-align: center;\n    border-radius: 10px;\n    border: 2px solid #00ff2a;\n    box-shadow: 0 0 10px #51ff00;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uY2x1c2FvL0M6XFxVc2Vyc1xcR3VzdGF2b1xcRGVza3RvcFxcU2ltdWxhZG9yXFxGRURcXFNpbXVsYWRvckVtcHJlc3RpbW9zXFxTaW11bGFkb3JFbXByZXN0aW1vRkVEL3NyY1xcYXBwXFxjb25jbHVzYW9cXGNvbmNsdXNhby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uY2x1c2FvL2NvbmNsdXNhby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsMkJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmNsdXNhby9jb25jbHVzYW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uY2x1c2FvIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGZmMmE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoODEsIDI1NSwgMCk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY29uY2x1c2FvIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb25jbHVzYW8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwZmYyYTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoODEsIDI1NSwgMCk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSIsIi5jb25jbHVzYW8ge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMGZmMmE7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1MWZmMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb25jbHVzYW8gYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMTBweDtcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbmNsdXNhbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBmZjJhO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM1MWZmMDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConclusaoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-conclusao',
          templateUrl: './conclusao.component.html',
          styleUrls: ['./conclusao.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/formulario/formulario.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/formulario/formulario.component.ts ***!
    \****************************************************/

  /*! exports provided: FormularioComponent */

  /***/
  function srcAppFormularioFormularioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormularioComponent", function () {
      return FormularioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./formulario.service */
    "./src/app/formulario/formulario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FormularioComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ", essa \xE9 sua simula\xE7\xE3o: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formData.nome);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor emprestado: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 5, ctx_r1.formData.valorEmprestimo, "BRL", "symbol", "1.2-2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor das parcelas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 10, ctx_r1.valorParcela, "BRL", "symbol", "1.2-2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" N\xFAmero de parcelas: ", ctx_r1.parcelas, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total do valor com juros: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](16, 15, ctx_r1.valorTotal, "BRL", "symbol", "1.2-2"), " ");
      }
    }

    function FormularioComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Confirmar empr\xE9stimo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormularioComponent_div_19_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.confirm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirmar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormularioComponent_div_19_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Valor das parcelas: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 3, ctx_r2.valorParcela, "BRL", "symbol", "1.2-2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" N\xFAmero de parcelas: ", ctx_r2.parcelas, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Total do valor com juros: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 8, ctx_r2.valorTotal, "BRL", "symbol", "1.2-2"), " ");
      }
    }

    function FormularioComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormularioComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.resume();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirma\xE7\xE3o\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r3.confirmar);
      }
    }

    var FormularioComponent = /*#__PURE__*/function () {
      function FormularioComponent(formularioService, router) {
        _classCallCheck(this, FormularioComponent);

        this.formularioService = formularioService;
        this.router = router;
        this.showPopup = false;
        this.confirmar = false;
        this.resumo = false;
        this.formData = {
          nome: '',
          valorEmprestimo: null,
          numeroParcelas: null
        };
      }

      _createClass(FormularioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          sessionStorage.clear();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this = this;

          this.formularioService.calcularParcelas(this.formData.valorEmprestimo, this.formData.numeroParcelas).subscribe(function (results) {
            _this.valorParcela = results.valorParcela;
            _this.valorTotal = results.valorTotal;
            _this.parcelas = results.parcelas;
            _this.confirmar = true;
            _this.resumo = true;
          });
        }
      }, {
        key: "confirm",
        value: function confirm() {
          sessionStorage.setItem('valorTotal', this.valorTotal.toString());
          sessionStorage.setItem('parcelas', this.parcelas.toString());
          sessionStorage.setItem('valorParcela', this.valorParcela.toString());
          sessionStorage.setItem('valorEmprestimo', this.formData.valorEmprestimo.toString());
          sessionStorage.setItem('confirmado', 'true');
          this.router.navigate(['/conclusao']);
          this.showPopup = false;
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.showPopup = false;
        }
      }, {
        key: "resume",
        value: function resume() {
          this.showPopup = true;
        }
      }]);

      return FormularioComponent;
    }();

    FormularioComponent.ɵfac = function FormularioComponent_Factory(t) {
      return new (t || FormularioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_formulario_service__WEBPACK_IMPORTED_MODULE_1__["FormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormularioComponent,
      selectors: [["app-formulario"]],
      decls: 21,
      vars: 8,
      consts: [[1, "form", 3, "ngSubmit"], ["form", "ngForm"], [1, "middle"], ["type", "text", "matInput", "", "placeholder", "Digite o seu nome completo", "value", "nome", "id", "nome", "name", "nome", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], ["type", "number", "matInput", "", "placeholder", "Valor do empr\xE9stimo", "value", "valorEmprestimo", "id", "valorEmprestimo", "name", "valorEmprestimo", "ngModel", "", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "matInput", "", "placeholder", "Quantidade de parcelas", "id", "numeroParcelas", "name", "numeroParcelas", "ngModel", "", "required", "", 3, "value", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "warn", "type", "submit", 3, "disabled"], ["class", "resumo", 4, "ngIf"], ["class", "popup", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"], [1, "resumo"], [1, "popup"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]],
      template: function FormularioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioComponent_Template_form_ngSubmit_0_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome do solicitante");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.formData.nome = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Valor desejado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "R$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.formData.valorEmprestimo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "N\xFAmero de parcelas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.formData.numeroParcelas = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Simular Empr\xE9stimo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FormularioComponent_div_18_Template, 18, 20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FormularioComponent_div_19_Template, 15, 13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormularioComponent_button_20_Template, 2, 1, "button", 10);
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.nome);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.valorEmprestimo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.formData.numeroParcelas)("ngModel", ctx.formData.numeroParcelas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resumo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmar);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]],
      styles: [".form[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  margin: 20px auto 20px auto;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.middle[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 25%;\n  transform: translate(-50%, -50%);\n  background-color: #fffffffa;\n  padding: 20px;\n  border: 2px solid #ffa600;\n  box-shadow: 0 0 10px #ffc400;\n  z-index: 2;\n  border-radius: 5px;\n}\n\n.popup[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.resumo[_ngcontent-%COMP%] {\n  background-color: #ffa600ce;\n  padding: 10px;\n  width: 40%;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 25px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n\n@media only screen and (max-width: 767px) {\n  .form[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    margin: 20px auto 20px auto;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .middle[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .popup[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 60%;\n    height: auto;\n    transform: translate(-50%, -50%);\n    background-color: #fffffffa;\n    padding: 20px;\n    border: 2px solid #ffa600;\n    box-shadow: 0 0 10px #ffc400;\n    z-index: 2;\n    border-radius: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXVsYXJpby9DOlxcVXNlcnNcXEd1c3Rhdm9cXERlc2t0b3BcXFNpbXVsYWRvclxcRkVEXFxTaW11bGFkb3JFbXByZXN0aW1vc1xcU2ltdWxhZG9yRW1wcmVzdGltb0ZFRC9zcmNcXGFwcFxcZm9ybXVsYXJpb1xcZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURLQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0ZOOztFREtFO0lBQ0ksVUFBQTtFQ0ZOOztFREtFO0lBQ0ksZUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxnQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsYUFBQTtJQUNBLHlCQUFBO0lBQ0EsNEJBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9ybXVsYXJpby9mb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWlkZGxlIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZmYTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZhNjAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDI1NSwgMTk2LCAwKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wb3B1cCA+IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ucmVzdW1vIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE2MDBjZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWlkZGxlIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucG9wdXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmZhO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmYTYwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMjU1LCAxOTYsIDApO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59IiwiLmZvcm0ge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWlkZGxlIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZmZhO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZhNjAwO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmZjNDAwO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wb3B1cCA+IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5yZXN1bW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNjAwY2U7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHggYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubWlkZGxlIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG5cbiAgLnBvcHVwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZmYTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmE2MDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmYzQwMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formulario',
          templateUrl: './formulario.component.html',
          styleUrls: ['./formulario.component.scss']
        }]
      }], function () {
        return [{
          type: _formulario_service__WEBPACK_IMPORTED_MODULE_1__["FormularioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/formulario/formulario.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/formulario/formulario.service.ts ***!
    \**************************************************/

  /*! exports provided: FormularioService */

  /***/
  function srcAppFormularioFormularioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormularioService", function () {
      return FormularioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FormularioService = /*#__PURE__*/function () {
      function FormularioService(http) {
        _classCallCheck(this, FormularioService);

        this.http = http;
      }

      _createClass(FormularioService, [{
        key: "calcularParcelas",
        value: function calcularParcelas(valorEmprestimo, numeroParcelas) {
          console.log(valorEmprestimo, numeroParcelas);
          var params = {
            valor: valorEmprestimo,
            parcelas: numeroParcelas
          };
          var url = 'https://simulador-emprestimo-bff.vercel.app/calcularParcelas';
          return this.http.post(url, params);
        }
      }]);

      return FormularioService;
    }();

    FormularioService.ɵfac = function FormularioService_Factory(t) {
      return new (t || FormularioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FormularioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormularioService,
      factory: FormularioService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/guards.service.ts":
  /*!******************************************!*\
    !*** ./src/app/guards/guards.service.ts ***!
    \******************************************/

  /*! exports provided: GuardsService */

  /***/
  function srcAppGuardsGuardsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuardsService", function () {
      return GuardsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GuardsService = /*#__PURE__*/function () {
      function GuardsService(router) {
        _classCallCheck(this, GuardsService);

        this.router = router;
      }

      _createClass(GuardsService, [{
        key: "canActivate",
        value: function canActivate() {
          var confirmado = sessionStorage.getItem('confirmado');

          if (confirmado === 'true') {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      }]);

      return GuardsService;
    }();

    GuardsService.ɵfac = function GuardsService_Factory(t) {
      return new (t || GuardsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    GuardsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GuardsService,
      factory: GuardsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuardsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "paginaInicial",
        value: function paginaInicial() {
          this.router.navigate(['/']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 0,
      consts: [["color", "warn", 1, "header", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_toolbar_click_0_listener() {
            return ctx.paginaInicial();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Simulador de Empr\xE9stimos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcR3VzdGF2b1xcRGVza3RvcFxcU2ltdWxhZG9yXFxGRURcXFNpbXVsYWRvckVtcHJlc3RpbW9zXFxTaW11bGFkb3JFbXByZXN0aW1vRkVEL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59IiwiLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Gustavo\Desktop\Simulador\FED\SimuladorEmprestimos\SimuladorEmprestimoFED\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map