(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-searchbar></ion-searchbar>\n\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"slider\">\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n          <ion-img src=\"../assets/icon/food1.jpg\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"../assets/icon/shopping.jpeg\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"../assets/icon/children.png\"></ion-img>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div style=\"margin-top: -70px;\">\n    <p class=\"sub-headers\">Category</p>\n\n    <ion-grid id=\"category-grid\">\n      <ion-row>\n        <ion-col>\n          <div (click) = \"moveToViewCategory(1)\" >\n              <ion-img class=\"icon\" src=\"../assets/icon/food.png\"></ion-img>\n              <ion-label class=\"icon-label\">F&B</ion-label>\n            </div>\n        </ion-col>\n        <ion-col>\n          <div (click) = \"moveToViewCategory(11)\" >\n            <ion-img class=\"icon\" src=\"../assets/icon/shopping.png\"></ion-img>\n            <ion-label class=\"icon-label\">Shopping</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div (click) = \"moveToViewCategory()\">\n            <ion-img class=\"icon\" src=\"../assets/icon/massage.png\"></ion-img>\n            <ion-label class=\"icon-label\">Massage</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div (click) = \"moveToViewCategory(4)\">\n          <ion-img class=\"icon\" src=\"../assets/icon/leisure.png\"></ion-img>\n          <ion-label class=\"icon-label\">Leisure</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-img class=\"icon\" src=\"../assets/icon/kids.png\"></ion-img>\n          <ion-label class=\"icon-label\">Kids</ion-label>\n        </ion-col>\n        <ion-col>\n          <div (click) = \"moveToViewCategory(2)\">\n          <ion-img class=\"icon\" src=\"../assets/icon/beauty.png\"></ion-img>\n          <ion-label class=\"icon-label\">Beauty</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div (click) = \"moveToViewCategory(5)\">\n          <ion-img class=\"icon\" src=\"../assets/icon/fitness.png\"></ion-img>\n          <ion-label class=\"icon-label\">Fitness</ion-label>\n          </div>\n        </ion-col>\n        <ion-col>\n          <ion-img class=\"icon\" src=\"../assets/icon/food.png\"></ion-img>\n          <ion-label class=\"icon-label\">Others</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let Tab1Page = class Tab1Page {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    moveToViewCategory(id) {
        this.router.navigate(['/viewCategory', { categoryId: id }]);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  background-color: #BF3C41;\n}\nion-header ion-searchbar {\n  border-radius: 20px;\n}\n.slider {\n  height: 50%;\n}\n.sub-headers {\n  padding-left: 8px;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\nion-slides {\n  height: 78%;\n  width: 100%;\n}\n#category-grid {\n  text-align: center;\n}\n.icon {\n  width: 40px;\n  height: 40px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.icon-label {\n  font-size: 15px;\n}\n.categoryButton {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQUVBO0VBQ0ksV0FBQTtBQUNKO0FBRUE7RUFDSSxpQkFBQTtFQUNBLHNIQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjtBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFHQTtFQUNJLGVBQUE7QUFBSjtBQUdBO0VBQ0ksNkJBQUE7QUFBSiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCRjNDNDE7XG4gICAgaW9uLXNlYXJjaGJhciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxufVxuXG4uc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLnN1Yi1oZWFkZXJzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogNzglO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jY2F0ZWdvcnktZ3JpZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxufVxuXG4uaWNvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY2F0ZWdvcnlCdXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map