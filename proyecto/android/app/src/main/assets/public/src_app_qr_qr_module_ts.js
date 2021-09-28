(self["webpackChunkproyecto"] = self["webpackChunkproyecto"] || []).push([["src_app_qr_qr_module_ts"],{

/***/ 40:
/*!*****************************************!*\
  !*** ./src/app/qr/qr-routing.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPageRoutingModule": () => (/* binding */ QrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr.page */ 7219);




const routes = [
    {
        path: '',
        component: _qr_page__WEBPACK_IMPORTED_MODULE_0__.QrPage
    }
];
let QrPageRoutingModule = class QrPageRoutingModule {
};
QrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QrPageRoutingModule);



/***/ }),

/***/ 7915:
/*!*********************************!*\
  !*** ./src/app/qr/qr.module.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPageModule": () => (/* binding */ QrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-routing.module */ 40);
/* harmony import */ var _qr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr.page */ 7219);







let QrPageModule = class QrPageModule {
};
QrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _qr_routing_module__WEBPACK_IMPORTED_MODULE_0__.QrPageRoutingModule
        ],
        declarations: [_qr_page__WEBPACK_IMPORTED_MODULE_1__.QrPage]
    })
], QrPageModule);



/***/ }),

/***/ 7219:
/*!*******************************!*\
  !*** ./src/app/qr/qr.page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrPage": () => (/* binding */ QrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_qr_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./qr.page.html */ 3123);
/* harmony import */ var _qr_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr.page.scss */ 1285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor-community/camera-preview */ 4646);





let QrPage = class QrPage {
    constructor() {
        this.image = null;
        this.cameraActive = false;
        this.torchActive = false;
    }
    openCamera() {
        const cameraPreviewOptions = {
            position: 'rear',
            parent: 'cameraPreview',
            className: 'cameraPreview'
        };
        _capacitor_community_camera_preview__WEBPACK_IMPORTED_MODULE_2__.CameraPreview.start(cameraPreviewOptions);
        this.cameraActive = true;
    }
    ngOnInit() {
    }
};
QrPage.ctorParameters = () => [];
QrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-qr',
        template: _raw_loader_qr_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_qr_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QrPage);



/***/ }),

/***/ 1285:
/*!*********************************!*\
  !*** ./src/app/qr/qr.page.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3123:
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/qr/qr.page.html ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>qr</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-img [src]=\"image\" *ngIf=\"image && !cameraActive\"></ion-img>\n  <ion-button (click)=\"openCamera()\" expand=\"full\" *ngIf=\"!cameraActive\">OPEN CAMERA</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_qr_qr_module_ts.js.map