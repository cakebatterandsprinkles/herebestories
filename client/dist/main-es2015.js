(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-story/text-editor/text-editor.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-story/text-editor/text-editor.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-full px-4 mb-12\">\n  <form [formGroup]=\"editorForm\" (ngSubmit)=\"onSubmit()\" class=\"w-full\">\n    <div class=\"w-full\">\n      <quill-editor (onContentChanged)=\"onContentChanged($event)\" formControlName=\"editor\"\n        [styles]=\"{height: '600px', height: '800px', backgroundColor: 'white'}\" format=\"text\" theme=\"snow\"\n        placeholder=\"Write your story here (~˘▾˘)~\">\n      </quill-editor>\n      <button\n        class=\"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mt-4 py-2 px-4 rounded\"\n        type=\"submit\">\n        I'm Done!\n      </button>\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/about-us-content/about-us-content.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/about-us-content/about-us-content.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"about-us-container w-full h-screen\">\n    <div class=\"px-4 pt-32 sm:px-8 sm:pt-48 md:pt-32 xl:pt-48 xl:px-24 w-full md:w-1/2\">\n        <div class=\"px-8 py-4\">\n            <p class=\"text-xl sm:text-2xl xl:text-3xl pb-8 slogan\">Hello! This is Yagmur.</p>\n            <p class=\"text-sm sm:text-base\">I am a web developer who enjoys developing and designing webpages.</p>\n            <p class=\"text-sm sm:text-base\">I also like to paint walls, sing randomly and cook almost healthy dishes. I share my home with a lovely <a href=\"https://en.wikipedia.org/wiki/Pacific_parrotlet\" class=\"text-green-600 underline\">green pacific parrotlet</a> who makes sure nothing gets done around him. He won't tell you, but he likes hanging around me. </p>\n        </div>\n        <div class=\"px-8 py-4\">\n            <p class=\"text-sm sm:text-base\">I have a huge love for stories. Sad and happy. Fantasy or real. I believe we are all able to create stories, as we are living inside our own.</p>\n        </div>\n        <div class=\"px-8 pb-4\">\n            <p class=\"text-sm sm:text-base\">If you like to, you can check my portfolio from <a href=\"https://yagmurcetintas.com/\" alt=\"link to my portfolio\" class=\"underline text-purple-600\">here.</a></p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/footer-landing/footer-landing.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/footer-landing/footer-landing.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"footer z-50 w-full text-sm xl:text-base md:w-2/5 pt-4 px-6 pb-2 flex justify-center bg-white sm:bg-transparent\">\n  <p>Made with <span class=\"text-pink-600\">꒒ ০ ⌵ ୧ ♡</span> by <a href=\"https://github.com/cakebatterandsprinkles\"\n      class=\"text-purple-600 underline hover:text-pink-500 focus:shadow-outline focus:outline-none\">cakebatterandsprinkles</a>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing-content/landing-content.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing-content/landing-content.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"landing-container w-full h-screen flex\">\n    <div class=\"px-4 pt-40 sm:px-8 sm:pt-48 lg:px-16 w-full md:w-1/2\">\n        <div class=\"px-8 py-4 text-xl sm:text-2xl xl:text-3xl slogan\">\n            <p>We are all human.</p>\n            <p>Here, we don't have to be.</p>\n        </div>\n        <div class=\"px-8 py-4 text-sm sm:text-base\">\n            <p>This site provides you with a topic you can write about. You can either\n                choose to see random images or random writting prompts. You have 10 minutes to\n                write.\n            </p>\n        </div>\n        <div class=\"px-8 py-4 text-base sm:text-lg xl:text-xl slogan\">\n            <p>Write just for fun. Create your own stories.</p>\n        </div>\n        <div class=\"px-8 pt-8\">\n            <button\n                class=\"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded\"\n                type=\"button\" routerLink=\"/signup\">\n                Sign Up\n            </button>\n            <p class=\"text-xs pt-2\">I already have an account! <a routerLink=\"/login\" class=\"text-pink-500 font-bold\">Login</a></p>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login-form/login-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login-form/login-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container w-full h-screen flex pt-48 px-12 sm:px-32 flex flex-col\">\n  <p class=\"text-2xl underline pb-4\">Login</p>\n  <p class=\"pb-12\">It's great to see you again! ♡´･ᴗ･`♡</p>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" class=\"w-full max-w-lg\">\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-email\">\n          Email\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"email\" id=\"grid-email\" type=\"email\" placeholder=\"janedoe@gmail.com\">\n      </div>\n    </div>\n    <div class=\"flex flex-wrap -mx-3 mb-8\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-password\">\n          Password\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"password\" id=\"grid-password\" type=\"password\" placeholder=\"*******\">\n      </div>\n    </div>\n    <div class=\"-mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <button [disabled]=\"loading\"\n          class=\"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded\"\n          type=\"submit\">\n          Log in\n        </button>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </div>\n    </div>\n  </form>\n</div>\n<app-loader *ngIf=\"loading\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-base/navbar-base.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-base/navbar-base.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"absolute w-full md:w-4/5 lg:w-3/4 xl:w-3/5 pt-4 px-6 pb-2 flex justify-between\">\n  <div class=\"w-40\">\n    <a routerLink=\"/\"><img src=\"assets/images/logo.svg\" alt=\"logo\"></a>\n  </div>\n  <div class=\"h-8 flex justify-between items-center\">\n    <button type=\"button\" class=\"focus:outline-none w-8 inline sm:hidden\">\n      <img src=\"assets/images/burger.svg\" alt=\"burger icon\" (click)=\"onClick($event)\" *ngIf=\"!open\">\n    </button>\n    <app-navbar-landing-links class=\"hidden sm:block\" *ngIf=\"!open\"></app-navbar-landing-links>\n  </div>\n</header>\n\n<div *ngIf=\"open\" class=\"flex flex-row justify-end absolute inset-0 z-10\">\n  <div class=\" w-screen h-screen bg-transparent\" (click)=\"onClick($event)\"></div>\n  <app-navbar-side (click)=\"onClick($event)\"></app-navbar-side>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"links flex content-center\">\n    <div class=\"pr-6 hover:text-pink-500 focus:shadow-outline focus:outline-none\">\n        <a routerLink=\"/signup\" routerLinkActive=\"text-pink-500 font-bold\">Sign Up</a>\n    </div>\n    <div class=\"pr-6 hover:text-pink-500 focus:shadow-outline focus:outline-none\">\n        <a routerLink=\"/login\" routerLinkActive=\"text-pink-500 font-bold\">Login</a>\n    </div>\n    <div class=\"pr-6 hover:text-pink-500 focus:shadow-outline focus:outline-none\">\n        <a routerLink=\"/about-us\" routerLinkActive=\"text-pink-500 font-bold\">About us</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-side/navbar-side.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-side/navbar-side.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"z-40 w-40 h-full bg-purple-400\">\n  <div class=\"flex flex-col content-center\">\n    <div class=\"mt-16 my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/signup\">Sign Up</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/login\">Login</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/about-us\">About us</a>\n    </div>\n    <hr>\n    <div class=\"my-8 mx-auto text-white text-xl hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/\">▼・ᴥ・▼</a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup-form/signup-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup-form/signup-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-container w-full h-screen flex pt-20 md:pt-32 px-12 sm:px-32 flex flex-col\">\n  <p class=\"pb-8 text-2xl underline\">Sign Up</p>\n  <form class=\"w-full max-w-lg\" [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full md:w-1/2 px-3 mb-3 md:mb-0\">\n        <label class=\"block text-base mb-1\" for=\"grid-first-name\">\n          First Name\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"firstName\" id=\"grid-first-name\" type=\"text\" placeholder=\"Jane\">\n      </div>\n      <div class=\"w-full md:w-1/2 px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-last-name\">\n          Last Name\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"lastName\" id=\"grid-last-name\" type=\"text\" placeholder=\"Doe\">\n      </div>\n    </div>\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-email\">\n          Username\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"username\" id=\"grid-username\" type=\"text\" placeholder=\"choose a username\">\n      </div>\n    </div>\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-email\">\n          Email\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"email\" id=\"grid-email\" type=\"email\" placeholder=\"janedoe@gmail.com\">\n      </div>\n    </div>\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-password\">\n          Password\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"password\" id=\"grid-password\" type=\"password\" placeholder=\"*******\">\n        <p class=\"text-gray-600 text-xs italic\">Make it as long and as crazy as you'd like</p>\n      </div>\n    </div>\n    <div class=\"flex flex-wrap -mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <label class=\"block text-base mb-1\" for=\"grid-password2\">\n          Repeat Password\n        </label>\n        <input\n          class=\"appearance-none block w-full text-base border border-purple-500 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n          formControlName=\"password2\" id=\"grid-password2\" type=\"password\" placeholder=\"*******\">\n      </div>\n    </div>\n    <div class=\"-mx-3 mb-3\">\n      <div class=\"w-full px-3\">\n        <button [disabled]=\"loading\"\n          class=\"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded\"\n          type=\"submit\">\n          Sign Up!\n        </button>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n      </div>\n    </div>\n  </form>\n</div>\n<app-loader *ngIf=\"loading\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex justify-center items-center opacity-75 fixed inset-0 bg-white w-screen\">\n  <div class=\"box\" id=\"box-1\"></div>\n  <div class=\"box\" id=\"box-2\"></div>\n  <div class=\"box\" id=\"box-3\"></div>\n  <div class=\"box\" id=\"box-4\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-card/main-card.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-card/main-card.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"max-w-lg rounded rounded-xl overflow-hidden shadow-lg bg-white m-4\">\n  <a [routerLink]=\"['/read', card.id]\">\n    <div class=\"px-6 py-4 h-32 flex flex-col justify-center\">\n      <p>\n        <span class=\"text-purple-500 font-bold\">Prompt:\n        </span>\n        <span class=\"font-bold\">{{card.prompt}}</span>\n      </p>\n    </div>\n    <hr>\n    <div class=\"px-6 py-4 h-64 fading\">\n      <p class=\"text-gray-700 text-sm sm:text-base text-justify leading-tight\" [innerHTML]=\"card.story\"></p>\n    </div>\n  </a>\n  <div class=\"w-full px-6 pb-4 flex justify-end items-center bg-white\">\n    <div>\n      <p>\n        <a [routerLink]=\"['/profile', card.userid]\">\n          <span class=\"text-pink-500 hover:underline text-sm sm:text-base\">{{card.username}}</span>\n        </a>\n        <br />\n        <span class=\"text-xs sm:text-sm\">\n          {{card.date | date : 'short'}}</span>\n      </p>\n      <div class=\"flex flex-row mt-1 items-baseline\">\n        <img class=\"h-4 mr-2\" (click)=\"onClick()\"\n          src=\"{{'/assets/images/heart-' + (card.liked? 'full' : 'empty') + '.png'}}\" alt=\"like heart button\">\n        <p class=\"text-xs sm:text-sm font-bold\">\n          <span class=\"like-count\">{{card.likes}}</span>\n          likes</p>\n      </div>\n    </div>\n    <img class=\"h-20 sm:h-24 chosen-image pl-4\" [src]=\"chosenUrl\" alt=\"funny image on card\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-chronometer/main-chronometer.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-chronometer/main-chronometer.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-2xl px-8 pb-8\">\n  <countdown #cd [config]=\"{leftTime: 600, demand: true}\" (event)=\"handleCountdown($event)\"></countdown>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-grid-container w-full px-2 md:px-6 xl:px-12\">\n  <div class=\"flex flex-wrap pt-6 justify-center\">\n    <div *ngFor=\"let card of cards\" class=\"flex justify-center w-full md:w-1/2  xl:w-1/3\">\n      <app-main-card [card]=\"card\"></app-main-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-footer/main-footer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-footer/main-footer.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer w-full text-xs sm:text-sm xl:text-base pt-4 px-6 pb-2 flex justify-center fixed bottom-0 bg-white\">\n  <p>Made with <span class=\"text-pink-600\">꒒ ০ ⌵ ୧ ♡</span> by <a href=\"https://github.com/cakebatterandsprinkles\"\n      class=\"text-purple-600 underline hover:text-pink-500 focus:shadow-outline focus:outline-none\">cakebatterandsprinkles</a>\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar-side/main-navbar-side.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar-side/main-navbar-side.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-40 h-full bg-purple-400\">\n  <div class=\"flex flex-col content-center\">\n    <div class=\"mt-20 my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/dashboard\">Dashboard</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/write\">Write</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/profile\">Profile</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/settings\">Settings</a>\n    </div>\n    <hr>\n    <div class=\"my-2 mx-auto text-white font-bold hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/login\" (click)=\"handleLogout()\">Logout</a>\n    </div>\n    <hr>\n    <div class=\"my-8 mx-auto text-white text-xl hover:text-pink-100 focus:shadow-outline focus:outline-none\">\n      <a routerLink=\"/\">▼・ᴥ・▼</a>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar/main-navbar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar/main-navbar.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"absolute nav w-full pt-4 px-6 pb-2 flex justify-between\">\n  <div class=\"w-40\">\n    <a routerLink=\"/\"><img src=\"assets/images/logo.svg\" alt=\"logo\"></a>\n  </div>\n  <div class=\"h-8 flex justify-between items-center\">\n    <button type=\"button\" class=\"focus:outline-none w-8 inline sm:hidden\">\n      <img src=\"assets/images/burger.svg\" alt=\"burger icon\" (click)=\"onClick($event)\">\n    </button>\n    <div class=\"hidden sm:block\" *ngIf=\"!open\">\n      <div class=\"links flex flex-row content-center\">\n        <div class=\"pr-6 hover:font-bold focus:shadow-outline focus:outline-none\">\n          <a routerLink=\"/dashboard\" routerLinkActive=\"text-pink-500 font-bold\">Dashboard</a>\n        </div>\n        <div class=\"pr-6 hover:font-bold focus:shadow-outline focus:outline-none\">\n          <a routerLink=\"/write\" routerLinkActive=\"text-pink-500 font-bold\">Write</a>\n        </div>\n        <div class=\"pr-6 hover:font-bold focus:shadow-outline focus:outline-none\">\n          <a routerLink=\"/profile\" routerLinkActive=\"text-pink-500 font-bold\">Profile</a>\n        </div>\n        <div class=\"pr-6 hover:font-bold focus:shadow-outline focus:outline-none\">\n          <a routerLink=\"/settings\" routerLinkActive=\"text-pink-500 font-bold\">Settings</a>\n        </div>\n        <div class=\"pr-2 hover:font-bold focus:shadow-outline focus:outline-none\">\n          <a routerLink=\"/login\" (click)=\"handleLogout()\">Logout</a>\n        </div>\n      </div>\n      <div class=\"flex w-full h-2 flex-row\">\n        <div class=\"h-2 bg-pink-500 box rounded-l-lg\"></div>\n        <div class=\"h-2 bg-orange-500 box\"></div>\n        <div class=\"h-2 bg-yellow-500 box\"></div>\n        <div class=\"h-2 bg-green-500 box\"></div>\n        <div class=\"h-2 bg-blue-500 box rounded-r-lg\"></div>\n      </div>\n    </div>\n  </div>\n</header>\n<div *ngIf=\"open\" class=\"flex flex-row justify-end fixed inset-0 z-10\">\n  <div class=\" w-screen h-screen bg-transparent\" (click)=\"onClick($event)\"></div>\n  <app-main-navbar-side *ngIf=\"open\" (click)=\"onClick($event)\"></app-main-navbar-side>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-pagination/main-pagination.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-pagination/main-pagination.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pagination pt-4 px-6 pb-2 flex flex-row justify-center mb-20\">\n  <div class=\"flex w-2/3 sm:w-1/2 lg:w-1/3 h-2 flex-row\">\n    <img class=\"h-6 mr-4\" src=\"/assets/images/left-arrow.png\" alt=\"left arrow\">\n    <div class=\"mt-1 h-4 bg-red-500 box rounded-l-lg\"></div>\n    <div class=\"mt-1 h-4 bg-pink-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-orange-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-yellow-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-green-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-blue-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-indigo-500 box\"></div>\n    <div class=\"mt-1 h-4 bg-purple-500 box rounded-r-lg\"></div>\n    <img class=\"h-6 ml-4\" src=\"/assets/images/right-arrow.png\" alt=\"right arrow\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-info/main-profile-info.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-info/main-profile-info.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-row pt-24 pb-12 h-auto\">\n  <div class=\"w-1/2 lg:w-1/3 flex flex-col xl:px-12 hidden xl:block self-center\">\n    <img src=\"../../../../assets/images/profilebeesreverse.png\">\n  </div>\n  <div\n    class=\"w-full xl:w-1/3 mx-8 sm:mx-32 xl:mx-4 flex flex-row items-center justify-center border border-solid border-purple-500\">\n    <div *ngIf=\"profile\" class=\"flex flex-col p-4 xl:p-8\">\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Username:</span> <span>\n          {{profile.user.username}}</span>\n      </p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Age:</span> <span> {{profile.age}}</span></p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Country:</span> <span> {{profile.country}}</span></p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Website:</span> <span> {{profile.website}}</span></p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Favorite books:</span> <span>\n          {{profile.favoriteBooks}}</span>\n      </p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">Interests, special powers:</span>\n        <span> {{profile.interests}}</span></p>\n      <p class=\"p-1\"><span class=\"font-bold text-purple-700\">More:</span> <span> {{profile.moreInformation}}</span></p>\n    </div>\n  </div>\n  <div class=\"w-1/2 lg:w-1/3 flex flex-col xl:px-12 hidden xl:block self-center\">\n    <img src=\"../../../../assets/images/profilebees.png\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-page/main-profile-page.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-page/main-profile-page.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-grid-container w-full px-2 md:px-6 xl:px-12\">\n  <div class=\"flex flex-row justify-center\">\n    <div class=\"flex flex-row justify-center w-1/3 border-b border-solid border-gray-700\">\n      <p class=\"pt-6 pb-2 text-xl sm:text-2xl md:text-3xl\">Published Stories</p>\n    </div>\n  </div>\n  <div class=\"flex flex-wrap pt-6 justify-center\">\n    <div *ngFor=\"let card of cards\" class=\"flex justify-center w-full md:w-1/2  xl:w-1/3\">\n      <app-main-card [card]=\"card\"></app-main-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-prompt/main-prompt.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-prompt/main-prompt.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-screen flex flex-col py-8 border border-b-lg items-center\">\n  <div *ngIf=\"!hasPrompt\" class=\" w-4/5 lg:w-2/3 xl:w-1/3\">\n    <p class=\"text-xl\">Here are the rules: </p>\n    <p class=\"text-sm\"><br>\n      1. You can choose between 10 random images or a random text prompt. <br>\n      2. The story you write should be related to these cues. <br>\n      3. As soon as your prompt arrives, your timer will began. <br>\n      4. If you don't like your prompt, you can shuffle. <br>\n      5. Nothing you wrote will be saved until you hit 'I'm done!' button or your time finishes.</p>\n    <div class=\"flex flex-row\">\n      <button\n        class=\"shadow w-full sm:w-1/2 bg-pink-500 hover:bg-pink-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mr-4 mt-4 rounded\"\n        type=\"button\" (click)=\"imagePrompt()\">\n        Image Prompt\n      </button>\n      <button\n        class=\"shadow w-full sm:w-1/2 bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded\"\n        type=\"button\" (click)=\"textPrompt()\">\n        Text Prompt\n      </button>\n    </div>\n  </div>\n  <div class=\"flex justify-center w-full\" *ngIf=\"hasPrompt\">\n    <div *ngIf=\"prompt\">\n      <p>\n        <strong>Character:</strong> {{prompt.character}}\n        <br />\n        <strong>Age:</strong> {{prompt.age}}\n        <br />\n        <strong>Feature:</strong> {{prompt.feature}}\n        <br />\n        <strong>Dilemma:</strong> {{prompt.dilemma}}\n        <br />\n      </p>\n    </div>\n    <div class=\"flex flex-wrap justify-center w-4/5\" *ngIf=\"imageUrls.length\">\n      <div *ngFor=\"let imageUrl of imageUrls\" class=\"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-64 self-center\"\n        [ngStyle]=\"{'background': 'url(' + imageUrl + ') no-repeat center center', 'background-size': 'cover'}\">\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-read-content/main-read-content.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-read-content/main-read-content.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-row justify-center pt-24 sm:px-24 lg:px-40 xl:px-56 read-background z-10\"\n  (click)=\"backToDashboard($event)\">\n  <div class=\"w-full rounded rounded-xl overflow-hidden shadow-lg bg-white m-4 z-50\">\n    <div class=\"px-6 py-4 z-50\">\n      <p *ngIf=\"card.prompt\">\n        <span class=\"text-purple-500 font-bold\">Prompt:\n        </span>\n        <strong>{{card.prompt}}</strong>\n      </p>\n    </div>\n    <div class=\"flex flex-wrap justify-center w-full z-50\" *ngIf=\"images.length\">\n      <div *ngFor=\"let imageUrl of images\" class=\"w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-64 self-center\"\n        [ngStyle]=\"{'background': 'url(' + imageUrl + ') no-repeat center center', 'background-size': 'cover'}\">\n      </div>\n    </div>\n    <hr>\n    <div class=\"px-6 py-4 z-50\">\n      <p class=\"text-gray-700 text-sm sm:text-base text-justify fading leading-tight\" [innerHTML]='card.story'></p>\n    </div>\n    <div class=\"w-full px-6 pb-4 flex justify-end items-center\">\n      <div>\n        <p>\n          <span class=\"text-pink-500 hover:underline text-sm sm:text-base\"><a>{{card.username}}</a></span>\n          <br />\n          <span class=\"text-xs sm:text-sm\">\n            {{card.date | date : 'short'}}</span>\n        </p>\n        <div class=\"flex flex-row mt-1 items-baseline\">\n          <img class=\"h-4 mr-2\" (click)=\"onClick()\"\n            src=\"{{'/assets/images/heart-' + (card.liked? 'full' : 'empty') + '.png'}}\" alt=\"like heart button\">\n          <p class=\"text-xs sm:text-sm font-bold\">\n            <span class=\"like-count\">{{card.likes}}</span>\n            likes</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-settings/main-settings.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-settings/main-settings.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"settings-container w-full h-auto flex pt-32 pb-24 px-6 sm:px-12 xl:pl-32 flex flex-col\">\n  <div class=\"w-full xl:max-w-1/2 flex flex-col items-center xl:items-start\">\n    <p class=\"pb-8 text-2xl underline\">Settings</p>\n    <form [formGroup]=\"settingsForm\" (ngSubmit)=\"onSubmit()\" class=\"w-full max-w-xl\">\n      <div class=\"flex flex-wrap -mx-3\">\n        <div class=\"w-1/2 px-3 mb-3 md:mb-0\">\n          <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-country\">\n            Country\n          </label>\n          <div class=\"inline-block relative max-w-64\">\n            <select id=\"country\" name=\"country\" formControlName=\"country\"\n              class=\"text-sm sm:text-base block appearance-none w-full bg-white border border-purple-500 rounded px-4 py-2 sm:py-3 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline form-control\">\n              <option value=\"Choose your country\" disabled>Choose your country</option>\n              <option value=\"Afghanistan\">Afghanistan</option>\n              <option value=\"Åland Islands\">Åland Islands</option>\n              <option value=\"Albania\">Albania</option>\n              <option value=\"Algeria\">Algeria</option>\n              <option value=\"American Samoa\">American Samoa</option>\n              <option value=\"Andorra\">Andorra</option>\n              <option value=\"Angola\">Angola</option>\n              <option value=\"Anguilla\">Anguilla</option>\n              <option value=\"Antarctica\">Antarctica</option>\n              <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n              <option value=\"Argentina\">Argentina</option>\n              <option value=\"Armenia\">Armenia</option>\n              <option value=\"Aruba\">Aruba</option>\n              <option value=\"Australia\">Australia</option>\n              <option value=\"Austria\">Austria</option>\n              <option value=\"Azerbaijan\">Azerbaijan</option>\n              <option value=\"Bahamas\">Bahamas</option>\n              <option value=\"Bahrain\">Bahrain</option>\n              <option value=\"Bangladesh\">Bangladesh</option>\n              <option value=\"Barbados\">Barbados</option>\n              <option value=\"Belarus\">Belarus</option>\n              <option value=\"Belgium\">Belgium</option>\n              <option value=\"Belize\">Belize</option>\n              <option value=\"Benin\">Benin</option>\n              <option value=\"Bermuda\">Bermuda</option>\n              <option value=\"Bhutan\">Bhutan</option>\n              <option value=\"Bolivia\">Bolivia</option>\n              <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n              <option value=\"Botswana\">Botswana</option>\n              <option value=\"Bouvet Island\">Bouvet Island</option>\n              <option value=\"Brazil\">Brazil</option>\n              <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n              <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n              <option value=\"Bulgaria\">Bulgaria</option>\n              <option value=\"Burkina Faso\">Burkina Faso</option>\n              <option value=\"Burundi\">Burundi</option>\n              <option value=\"Cambodia\">Cambodia</option>\n              <option value=\"Cameroon\">Cameroon</option>\n              <option value=\"Canada\">Canada</option>\n              <option value=\"Cape Verde\">Cape Verde</option>\n              <option value=\"Cayman Islands\">Cayman Islands</option>\n              <option value=\"Central African Republic\">Central African Republic</option>\n              <option value=\"Chad\">Chad</option>\n              <option value=\"Chile\">Chile</option>\n              <option value=\"China\">China</option>\n              <option value=\"Christmas Island\">Christmas Island</option>\n              <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n              <option value=\"Colombia\">Colombia</option>\n              <option value=\"Comoros\">Comoros</option>\n              <option value=\"Congo\">Congo</option>\n              <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of The</option>\n              <option value=\"Cook Islands\">Cook Islands</option>\n              <option value=\"Costa Rica\">Costa Rica</option>\n              <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n              <option value=\"Croatia\">Croatia</option>\n              <option value=\"Cuba\">Cuba</option>\n              <option value=\"Cyprus\">Cyprus</option>\n              <option value=\"Czech Republic\">Czech Republic</option>\n              <option value=\"Denmark\">Denmark</option>\n              <option value=\"Djibouti\">Djibouti</option>\n              <option value=\"Dominica\">Dominica</option>\n              <option value=\"Dominican Republic\">Dominican Republic</option>\n              <option value=\"Ecuador\">Ecuador</option>\n              <option value=\"Egypt\">Egypt</option>\n              <option value=\"El Salvador\">El Salvador</option>\n              <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n              <option value=\"Eritrea\">Eritrea</option>\n              <option value=\"Estonia\">Estonia</option>\n              <option value=\"Ethiopia\">Ethiopia</option>\n              <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n              <option value=\"Faroe Islands\">Faroe Islands</option>\n              <option value=\"Fiji\">Fiji</option>\n              <option value=\"Finland\">Finland</option>\n              <option value=\"France\">France</option>\n              <option value=\"French Guiana\">French Guiana</option>\n              <option value=\"French Polynesia\">French Polynesia</option>\n              <option value=\"French Southern Territories\">French Southern Territories</option>\n              <option value=\"Gabon\">Gabon</option>\n              <option value=\"Gambia\">Gambia</option>\n              <option value=\"Georgia\">Georgia</option>\n              <option value=\"Germany\">Germany</option>\n              <option value=\"Ghana\">Ghana</option>\n              <option value=\"Gibraltar\">Gibraltar</option>\n              <option value=\"Greece\">Greece</option>\n              <option value=\"Greenland\">Greenland</option>\n              <option value=\"Grenada\">Grenada</option>\n              <option value=\"Guadeloupe\">Guadeloupe</option>\n              <option value=\"Guam\">Guam</option>\n              <option value=\"Guatemala\">Guatemala</option>\n              <option value=\"Guernsey\">Guernsey</option>\n              <option value=\"Guinea\">Guinea</option>\n              <option value=\"Guinea-bissau\">Guinea-bissau</option>\n              <option value=\"Guyana\">Guyana</option>\n              <option value=\"Haiti\">Haiti</option>\n              <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n              <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n              <option value=\"Honduras\">Honduras</option>\n              <option value=\"Hong Kong\">Hong Kong</option>\n              <option value=\"Hungary\">Hungary</option>\n              <option value=\"Iceland\">Iceland</option>\n              <option value=\"India\">India</option>\n              <option value=\"Indonesia\">Indonesia</option>\n              <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n              <option value=\"Iraq\">Iraq</option>\n              <option value=\"Ireland\">Ireland</option>\n              <option value=\"Isle of Man\">Isle of Man</option>\n              <option value=\"Israel\">Israel</option>\n              <option value=\"Italy\">Italy</option>\n              <option value=\"Jamaica\">Jamaica</option>\n              <option value=\"Japan\">Japan</option>\n              <option value=\"Jersey\">Jersey</option>\n              <option value=\"Jordan\">Jordan</option>\n              <option value=\"Kazakhstan\">Kazakhstan</option>\n              <option value=\"Kenya\">Kenya</option>\n              <option value=\"Kiribati\">Kiribati</option>\n              <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n              <option value=\"Korea, Republic of\">Korea, Republic of</option>\n              <option value=\"Kuwait\">Kuwait</option>\n              <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n              <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n              <option value=\"Latvia\">Latvia</option>\n              <option value=\"Lebanon\">Lebanon</option>\n              <option value=\"Lesotho\">Lesotho</option>\n              <option value=\"Liberia\">Liberia</option>\n              <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n              <option value=\"Liechtenstein\">Liechtenstein</option>\n              <option value=\"Lithuania\">Lithuania</option>\n              <option value=\"Luxembourg\">Luxembourg</option>\n              <option value=\"Macao\">Macao</option>\n              <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav Republic of\n              </option>\n              <option value=\"Madagascar\">Madagascar</option>\n              <option value=\"Malawi\">Malawi</option>\n              <option value=\"Malaysia\">Malaysia</option>\n              <option value=\"Maldives\">Maldives</option>\n              <option value=\"Mali\">Mali</option>\n              <option value=\"Malta\">Malta</option>\n              <option value=\"Marshall Islands\">Marshall Islands</option>\n              <option value=\"Martinique\">Martinique</option>\n              <option value=\"Mauritania\">Mauritania</option>\n              <option value=\"Mauritius\">Mauritius</option>\n              <option value=\"Mayotte\">Mayotte</option>\n              <option value=\"Mexico\">Mexico</option>\n              <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n              <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n              <option value=\"Monaco\">Monaco</option>\n              <option value=\"Mongolia\">Mongolia</option>\n              <option value=\"Montenegro\">Montenegro</option>\n              <option value=\"Montserrat\">Montserrat</option>\n              <option value=\"Morocco\">Morocco</option>\n              <option value=\"Mozambique\">Mozambique</option>\n              <option value=\"Myanmar\">Myanmar</option>\n              <option value=\"Namibia\">Namibia</option>\n              <option value=\"Nauru\">Nauru</option>\n              <option value=\"Nepal\">Nepal</option>\n              <option value=\"Netherlands\">Netherlands</option>\n              <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n              <option value=\"New Caledonia\">New Caledonia</option>\n              <option value=\"New Zealand\">New Zealand</option>\n              <option value=\"Nicaragua\">Nicaragua</option>\n              <option value=\"Niger\">Niger</option>\n              <option value=\"Nigeria\">Nigeria</option>\n              <option value=\"Niue\">Niue</option>\n              <option value=\"Norfolk Island\">Norfolk Island</option>\n              <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n              <option value=\"Norway\">Norway</option>\n              <option value=\"Oman\">Oman</option>\n              <option value=\"Pakistan\">Pakistan</option>\n              <option value=\"Palau\">Palau</option>\n              <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n              <option value=\"Panama\">Panama</option>\n              <option value=\"Papua New Guinea\">Papua New Guinea</option>\n              <option value=\"Paraguay\">Paraguay</option>\n              <option value=\"Peru\">Peru</option>\n              <option value=\"Philippines\">Philippines</option>\n              <option value=\"Pitcairn\">Pitcairn</option>\n              <option value=\"Poland\">Poland</option>\n              <option value=\"Portugal\">Portugal</option>\n              <option value=\"Puerto Rico\">Puerto Rico</option>\n              <option value=\"Qatar\">Qatar</option>\n              <option value=\"Reunion\">Reunion</option>\n              <option value=\"Romania\">Romania</option>\n              <option value=\"Russian Federation\">Russian Federation</option>\n              <option value=\"Rwanda\">Rwanda</option>\n              <option value=\"Saint Helena\">Saint Helena</option>\n              <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n              <option value=\"Saint Lucia\">Saint Lucia</option>\n              <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n              <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n              <option value=\"Samoa\">Samoa</option>\n              <option value=\"San Marino\">San Marino</option>\n              <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n              <option value=\"Saudi Arabia\">Saudi Arabia</option>\n              <option value=\"Senegal\">Senegal</option>\n              <option value=\"Serbia\">Serbia</option>\n              <option value=\"Seychelles\">Seychelles</option>\n              <option value=\"Sierra Leone\">Sierra Leone</option>\n              <option value=\"Singapore\">Singapore</option>\n              <option value=\"Slovakia\">Slovakia</option>\n              <option value=\"Slovenia\">Slovenia</option>\n              <option value=\"Solomon Islands\">Solomon Islands</option>\n              <option value=\"Somalia\">Somalia</option>\n              <option value=\"South Africa\">South Africa</option>\n              <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South Sandwich Islands\n              </option>\n              <option value=\"Spain\">Spain</option>\n              <option value=\"Sri Lanka\">Sri Lanka</option>\n              <option value=\"Sudan\">Sudan</option>\n              <option value=\"Suriname\">Suriname</option>\n              <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n              <option value=\"Swaziland\">Swaziland</option>\n              <option value=\"Sweden\">Sweden</option>\n              <option value=\"Switzerland\">Switzerland</option>\n              <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n              <option value=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n              <option value=\"Tajikistan\">Tajikistan</option>\n              <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n              <option value=\"Thailand\">Thailand</option>\n              <option value=\"Timor-leste\">Timor-leste</option>\n              <option value=\"Togo\">Togo</option>\n              <option value=\"Tokelau\">Tokelau</option>\n              <option value=\"Tonga\">Tonga</option>\n              <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n              <option value=\"Tunisia\">Tunisia</option>\n              <option value=\"Turkey\">Turkey</option>\n              <option value=\"Turkmenistan\">Turkmenistan</option>\n              <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n              <option value=\"Tuvalu\">Tuvalu</option>\n              <option value=\"Uganda\">Uganda</option>\n              <option value=\"Ukraine\">Ukraine</option>\n              <option value=\"United Arab Emirates\">United Arab Emirates</option>\n              <option value=\"United Kingdom\">United Kingdom</option>\n              <option value=\"United States\">United States</option>\n              <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n              <option value=\"Uruguay\">Uruguay</option>\n              <option value=\"Uzbekistan\">Uzbekistan</option>\n              <option value=\"Vanuatu\">Vanuatu</option>\n              <option value=\"Venezuela\">Venezuela</option>\n              <option value=\"Viet Nam\">Viet Nam</option>\n              <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n              <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n              <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n              <option value=\"Western Sahara\">Western Sahara</option>\n              <option value=\"Yemen\">Yemen</option>\n              <option value=\"Zambia\">Zambia</option>\n              <option value=\"Zimbabwe\">Zimbabwe</option>\n            </select>\n\n            <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\">\n              <svg class=\"fill-current h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\">\n                <path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\" /></svg>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-1/2 px-3\">\n          <div class=\"flex flex-wrap -mx-3\">\n            <div class=\"w-full px-3\">\n              <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-age\">\n                Age\n              </label>\n              <input formControlName=\"age\"\n                class=\"appearance-none block w-full text-sm sm:text-base border border-purple-500 rounded py-2 sm:py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n                id=\"grid-age\" type=\"number\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"flex flex-wrap -mx-3 mb-3\">\n        <div class=\"w-full px-3\">\n          <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-website\">\n            Website:\n          </label>\n          <input formControlName=\"website\"\n            class=\"appearance-none block w-full text-sm sm:text-base border border-purple-500 rounded py-2 sm:py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n            id=\"grid-website\" type=\"text\"></div>\n      </div>\n      <div class=\"flex flex-wrap -mx-3 mb-3\">\n        <div class=\"w-full px-3\">\n          <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-favbooks\">\n            What are your favorite books?\n          </label>\n          <input formControlName=\"favoriteBooks\"\n            class=\"appearance-none block w-full text-sm sm:text-base border border-purple-500 rounded py-2 sm:py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n            id=\"grid-favbooks\" type=\"text\"></div>\n      </div>\n      <div class=\"flex flex-wrap -mx-3 mb-3\">\n        <div class=\"w-full px-3\">\n          <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-interests\">\n            Your interests, special powers?\n          </label>\n          <input formControlName=\"interests\"\n            class=\"appearance-none block w-full text-sm sm:text-base border border-purple-500 rounded py-2 sm:py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n            id=\"grid-interests\" type=\"text\"></div>\n      </div>\n      <div class=\"flex flex-wrap -mx-3 mb-3\">\n        <div class=\"w-full px-3\">\n          <label class=\"block text-sm sm:text-base mb-1\" for=\"grid-aboutme\">\n            Anything more you would like to say about yourself?\n          </label>\n          <input formControlName=\"moreInformation\"\n            class=\"appearance-none block w-full text-sm sm:text-base border border-purple-500 rounded py-2 sm:py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white\"\n            id=\"grid-aboutme\" type=\"text\"></div>\n      </div>\n      <div class=\"-mx-3 mb-3\">\n        <div class=\"w-full px-3\">\n          <button\n            class=\"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-8 rounded\"\n            type=\"submit\">\n            Submit\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-story-view/main-story-view.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-story-view/main-story-view.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>main-story-view works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-welcome/main-welcome.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-welcome/main-welcome.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"w-full h-auto flex justify-center self-center py-32 welcome-container\">\n  <div class=\"relative inline-block flex flex-col justify-center items-baseline pt-8\">\n      <p class=\"text-2xl lg:text-3xl mt-4 welcome-text text-white px-6\">Welcome to your dashboard!</p>\n      <p class=\"text-base lg:text-xl welcome-text px-6 mb-6 text-white\">Discover other stories:</p>\n      <div class=\"relative px-6\">\n          <select class=\"block appearance-none w-full bg-white border border-pink-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pink-500\" >\n            <option>Most Recent</option>\n            <option>Most Liked</option>\n          </select>\n          <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-8 text-gray-700\">\n            <svg class=\"fill-current h-4 w-4\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\"><path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/></svg>\n          </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-writing-content/main-writing-content.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-writing-content/main-writing-content.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"pt-20 pb-8 flex flex-col items-center h-auto bg-none\">\n  <app-main-prompt (promptChanged)=\"promptChangedHandler($event)\"\n    (promptImageChanged)=\"promptImageChangedHandler($event)\"></app-main-prompt>\n  <app-main-chronometer [hasPrompt]=\"hasPrompt\" (countdownFinished)=\"countDownFinished()\"></app-main-chronometer>\n  <app-text-editor *ngIf=\"hasPrompt\" (textSubmitted)=\"textSubmitted($event)\" (textChanged)=\"textChanged($event)\">\n  </app-text-editor>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found-content/not-found-content.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found-content/not-found-content.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex flex-col justify-center items-center\">\n  <div class=\"w-full pt-48 pb-12 flex justify-center\">\n    <img src=\"../../../../assets/images/profilefrog.png\" class=\"h-48 sm:h-64\">\n  </div>\n  <div\n    class=\"w-4/5 sm:w-2/3 md:w-1/2 px-4 py-8 flex flex-col justify-center border border-solid border-purple-500 bg-purple-100\">\n    <p class=\"text-lg md:text-xl xl:text-2xl font-bold self-center\"> 404: There is nothing here, except this frog.</p>\n    <p class=\"text-sm self-center\"> <span class=\"underline\">Note:</span> Don't try to kiss it. It's\n      not going to turn into a prince.</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about-us/about-us.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about-us/about-us.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-base></app-navbar-base>\n<app-about-us-content></app-about-us-content>\n<app-footer-landing></app-footer-landing>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar>\n<app-main-welcome></app-main-welcome>\n<app-main-dashboard-grid></app-main-dashboard-grid>\n<app-main-pagination></app-main-pagination>\n<app-main-footer></app-main-footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/landing/landing.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/landing/landing.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-base></app-navbar-base>\n<app-landing-content></app-landing-content>\n<app-footer-landing></app-footer-landing>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/login/login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-base></app-navbar-base>\n<app-login-form></app-login-form>\n<app-footer-landing></app-footer-landing>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/notfound404/notfound404.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/notfound404/notfound404.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar>\n<app-not-found-content></app-not-found-content>\n<app-main-footer></app-main-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/profile/profile.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/profile/profile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar>\n<app-main-profile-info [profile]=\"profile\"></app-main-profile-info>\n<app-main-profile-page [userid]=\"profileUserId\"></app-main-profile-page>\n<app-main-pagination></app-main-pagination>\n<app-main-footer></app-main-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/read/read.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/read/read.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar>\n<app-main-read-content [id]=\"id\"></app-main-read-content>\n<app-main-footer></app-main-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings/settings.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings/settings.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar> \n<app-main-settings></app-main-settings>\n<app-main-footer></app-main-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/signup/signup.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/signup/signup.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar-base></app-navbar-base>\n<app-signup-form></app-signup-form>\n<app-footer-landing></app-footer-landing>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/write/write.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/write/write.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-main-navbar></app-main-navbar> \n<app-main-writing-content></app-main-writing-content>\n<app-main-footer></app-main-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        if (request.headers.has(_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["InterceptorSkipHeader"])) {
            const headers = request.headers.delete(_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["InterceptorSkipHeader"]);
            return next.handle(request.clone({ headers }));
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/authentication.service */ "./src/app/_services/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'x-auth-token': currentUser.token
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: InterceptorSkipHeader, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function() { return InterceptorSkipHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");






const InterceptorSkipHeader = 'X-Skip-Interceptor';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set(InterceptorSkipHeader, '');
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/auth`, { email, password }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('userid', user.id);
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userid');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/_services/post.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/post.service.ts ***!
  \*******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");




let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    get(id) {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/get/${id}`);
    }
    list(page) {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/list/${page}`);
    }
    listForUser(userid, page) {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/listuser/${userid}/${page}`);
    }
    write(text, promptText, promptImages) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts`, { text, promptText, promptImages });
    }
    like(id) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/like/${id}`, {});
    }
    unlike(id) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/posts/unlike/${id}`, {});
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PostService);



/***/ }),

/***/ "./src/app/_services/profile.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/profile.service.ts ***!
  \**********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");




let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    getMe() {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/profile/me`);
    }
    getUser(id) {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/profile/user/${id}`);
    }
    update(website, country, age, interests, favoriteBooks, moreInformation) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/profile`, {
            website, country, age, interests, favoriteBooks, moreInformation
        });
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ProfileService);



/***/ }),

/***/ "./src/app/_services/prompt.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/prompt.service.ts ***!
  \*********************************************/
/*! exports provided: PromptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptService", function() { return PromptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");




let PromptService = class PromptService {
    constructor(http) {
        this.http = http;
    }
    getText() {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/prompts/text`);
    }
    getImages() {
        return this.http.get(`${_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/prompts/images`);
    }
};
PromptService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PromptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PromptService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environment */ "./src/app/environment.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    signUp(firstName, lastName, username, email, password) {
        return this.http.post(`${_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/users`, { firstName, lastName, username, email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            return user;
        }));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about-us/about-us.component */ "./src/app/components/pages/about-us/about-us.component.ts");
/* harmony import */ var _components_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/landing/landing.component */ "./src/app/components/pages/landing/landing.component.ts");
/* harmony import */ var _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/signup/signup.component */ "./src/app/components/pages/signup/signup.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pages_write_write_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/write/write.component */ "./src/app/components/pages/write/write.component.ts");
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ "./src/app/components/pages/profile/profile.component.ts");
/* harmony import */ var _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/settings/settings.component */ "./src/app/components/pages/settings/settings.component.ts");
/* harmony import */ var _components_pages_read_read_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/read/read.component */ "./src/app/components/pages/read/read.component.ts");
/* harmony import */ var _components_pages_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/notfound404/notfound404.component */ "./src/app/components/pages/notfound404/notfound404.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_helpers/auth.guard */ "./src/app/_helpers/auth.guard.ts");














const routes = [
    {
        path: 'about-us',
        component: _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
    }, {
        path: '',
        component: _components_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
    }, {
        path: 'signup',
        component: _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }, {
        path: 'login',
        component: _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
        path: 'dashboard',
        component: _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: 'write',
        component: _components_pages_write_write_component__WEBPACK_IMPORTED_MODULE_8__["WriteComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: 'profile/:id',
        component: _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: 'profile',
        component: _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: 'settings',
        component: _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: 'read/:id',
        component: _components_pages_read_read_component__WEBPACK_IMPORTED_MODULE_11__["ReadComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    }, {
        path: '**',
        component: _components_pages_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_12__["Notfound404Component"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'herebestories';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm2015/ngx-countdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_navbar_base_navbar_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/landing/navbar-base/navbar-base.component */ "./src/app/components/landing/navbar-base/navbar-base.component.ts");
/* harmony import */ var _components_landing_navbar_landing_links_navbar_landing_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/landing/navbar-landing-links/navbar-landing-links.component */ "./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.ts");
/* harmony import */ var _components_landing_landing_content_landing_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/landing/landing-content/landing-content.component */ "./src/app/components/landing/landing-content/landing-content.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_create_story_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-story/text-editor/text-editor.component */ "./src/app/components/create-story/text-editor/text-editor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/about-us/about-us.component */ "./src/app/components/pages/about-us/about-us.component.ts");
/* harmony import */ var _components_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/landing/landing.component */ "./src/app/components/pages/landing/landing.component.ts");
/* harmony import */ var _components_landing_about_us_content_about_us_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/landing/about-us-content/about-us-content.component */ "./src/app/components/landing/about-us-content/about-us-content.component.ts");
/* harmony import */ var _components_landing_footer_landing_footer_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/landing/footer-landing/footer-landing.component */ "./src/app/components/landing/footer-landing/footer-landing.component.ts");
/* harmony import */ var _components_landing_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/landing/signup-form/signup-form.component */ "./src/app/components/landing/signup-form/signup-form.component.ts");
/* harmony import */ var _components_landing_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/landing/login-form/login-form.component */ "./src/app/components/landing/login-form/login-form.component.ts");
/* harmony import */ var _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/signup/signup.component */ "./src/app/components/pages/signup/signup.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _components_main_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main/main-navbar/main-navbar.component */ "./src/app/components/main/main-navbar/main-navbar.component.ts");
/* harmony import */ var _components_main_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/main/main-footer/main-footer.component */ "./src/app/components/main/main-footer/main-footer.component.ts");
/* harmony import */ var _components_main_main_dashboard_grid_main_dashboard_grid_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main/main-dashboard-grid/main-dashboard-grid.component */ "./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.ts");
/* harmony import */ var _components_main_main_profile_page_main_profile_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main/main-profile-page/main-profile-page.component */ "./src/app/components/main/main-profile-page/main-profile-page.component.ts");
/* harmony import */ var _components_main_main_settings_main_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/main/main-settings/main-settings.component */ "./src/app/components/main/main-settings/main-settings.component.ts");
/* harmony import */ var _components_main_main_story_view_main_story_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/main/main-story-view/main-story-view.component */ "./src/app/components/main/main-story-view/main-story-view.component.ts");
/* harmony import */ var _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/pages/dashboard/dashboard.component */ "./src/app/components/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pages/profile/profile.component */ "./src/app/components/pages/profile/profile.component.ts");
/* harmony import */ var _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pages/settings/settings.component */ "./src/app/components/pages/settings/settings.component.ts");
/* harmony import */ var _components_pages_read_read_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/pages/read/read.component */ "./src/app/components/pages/read/read.component.ts");
/* harmony import */ var _components_main_main_card_main_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/main/main-card/main-card.component */ "./src/app/components/main/main-card/main-card.component.ts");
/* harmony import */ var _components_pages_write_write_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pages/write/write.component */ "./src/app/components/pages/write/write.component.ts");
/* harmony import */ var _components_main_main_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/main/main-welcome/main-welcome.component */ "./src/app/components/main/main-welcome/main-welcome.component.ts");
/* harmony import */ var _components_main_main_prompt_main_prompt_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/main/main-prompt/main-prompt.component */ "./src/app/components/main/main-prompt/main-prompt.component.ts");
/* harmony import */ var _components_main_main_chronometer_main_chronometer_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/main/main-chronometer/main-chronometer.component */ "./src/app/components/main/main-chronometer/main-chronometer.component.ts");
/* harmony import */ var _components_main_main_pagination_main_pagination_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/main/main-pagination/main-pagination.component */ "./src/app/components/main/main-pagination/main-pagination.component.ts");
/* harmony import */ var _components_main_main_writing_content_main_writing_content_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/main/main-writing-content/main-writing-content.component */ "./src/app/components/main/main-writing-content/main-writing-content.component.ts");
/* harmony import */ var _components_main_main_profile_info_main_profile_info_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/main/main-profile-info/main-profile-info.component */ "./src/app/components/main/main-profile-info/main-profile-info.component.ts");
/* harmony import */ var _components_pages_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/pages/notfound404/notfound404.component */ "./src/app/components/pages/notfound404/notfound404.component.ts");
/* harmony import */ var _components_not_found_not_found_content_not_found_content_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/not-found/not-found-content/not-found-content.component */ "./src/app/components/not-found/not-found-content/not-found-content.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_landing_navbar_side_navbar_side_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/landing/navbar-side/navbar-side.component */ "./src/app/components/landing/navbar-side/navbar-side.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _components_main_main_navbar_side_main_navbar_side_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/main/main-navbar-side/main-navbar-side.component */ "./src/app/components/main/main-navbar-side/main-navbar-side.component.ts");
/* harmony import */ var _components_main_main_read_content_main_read_content_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/main/main-read-content/main-read-content.component */ "./src/app/components/main/main-read-content/main-read-content.component.ts");
















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_landing_navbar_base_navbar_base_component__WEBPACK_IMPORTED_MODULE_7__["NavbarBaseComponent"],
            _components_landing_navbar_landing_links_navbar_landing_links_component__WEBPACK_IMPORTED_MODULE_8__["NavbarLandingLinksComponent"],
            _components_landing_landing_content_landing_content_component__WEBPACK_IMPORTED_MODULE_9__["LandingContentComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"],
            _components_create_story_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_11__["TextEditorComponent"],
            _components_pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
            _components_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"],
            _components_landing_about_us_content_about_us_content_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsContentComponent"],
            _components_landing_footer_landing_footer_landing_component__WEBPACK_IMPORTED_MODULE_16__["FooterLandingComponent"],
            _components_landing_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_17__["SignupFormComponent"],
            _components_landing_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_18__["LoginFormComponent"],
            _components_pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"],
            _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
            _components_main_main_navbar_main_navbar_component__WEBPACK_IMPORTED_MODULE_21__["MainNavbarComponent"],
            _components_main_main_footer_main_footer_component__WEBPACK_IMPORTED_MODULE_22__["MainFooterComponent"],
            _components_main_main_dashboard_grid_main_dashboard_grid_component__WEBPACK_IMPORTED_MODULE_23__["MainDashboardGridComponent"],
            _components_main_main_profile_page_main_profile_page_component__WEBPACK_IMPORTED_MODULE_24__["MainProfilePageComponent"],
            _components_main_main_settings_main_settings_component__WEBPACK_IMPORTED_MODULE_25__["MainSettingsComponent"],
            _components_main_main_story_view_main_story_view_component__WEBPACK_IMPORTED_MODULE_26__["MainStoryViewComponent"],
            _components_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
            _components_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
            _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_29__["SettingsComponent"],
            _components_pages_read_read_component__WEBPACK_IMPORTED_MODULE_30__["ReadComponent"],
            _components_main_main_card_main_card_component__WEBPACK_IMPORTED_MODULE_31__["MainCardComponent"],
            _components_pages_write_write_component__WEBPACK_IMPORTED_MODULE_32__["WriteComponent"],
            _components_main_main_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_33__["MainWelcomeComponent"],
            _components_main_main_prompt_main_prompt_component__WEBPACK_IMPORTED_MODULE_34__["MainPromptComponent"],
            _components_main_main_chronometer_main_chronometer_component__WEBPACK_IMPORTED_MODULE_35__["MainChronometerComponent"],
            _components_main_main_pagination_main_pagination_component__WEBPACK_IMPORTED_MODULE_36__["MainPaginationComponent"],
            _components_main_main_writing_content_main_writing_content_component__WEBPACK_IMPORTED_MODULE_37__["MainWritingContentComponent"],
            _components_main_main_profile_info_main_profile_info_component__WEBPACK_IMPORTED_MODULE_38__["MainProfileInfoComponent"],
            _components_pages_notfound404_notfound404_component__WEBPACK_IMPORTED_MODULE_39__["Notfound404Component"],
            _components_not_found_not_found_content_not_found_content_component__WEBPACK_IMPORTED_MODULE_40__["NotFoundContentComponent"],
            _components_landing_navbar_side_navbar_side_component__WEBPACK_IMPORTED_MODULE_42__["NavbarSideComponent"],
            _components_main_main_navbar_side_main_navbar_side_component__WEBPACK_IMPORTED_MODULE_46__["MainNavbarSideComponent"],
            _components_main_main_read_content_main_read_content_component__WEBPACK_IMPORTED_MODULE_47__["MainReadContentComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__["NoopAnimationsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_44__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_45__["ErrorInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/create-story/text-editor/text-editor.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/create-story/text-editor/text-editor.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXN0b3J5L3RleHQtZWRpdG9yL3RleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/create-story/text-editor/text-editor.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/create-story/text-editor/text-editor.component.ts ***!
  \******************************************************************************/
/*! exports provided: TextEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEditorComponent", function() { return TextEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let TextEditorComponent = class TextEditorComponent {
    constructor() {
        this.textSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.textChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.editorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            editor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    onSubmit() {
        this.textSubmitted.emit(this.html);
    }
    onContentChanged(event) {
        this.html = event.html;
        this.textChanged.emit(event.html);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TextEditorComponent.prototype, "textSubmitted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TextEditorComponent.prototype, "textChanged", void 0);
TextEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-editor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./text-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-story/text-editor/text-editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./text-editor.component.scss */ "./src/app/components/create-story/text-editor/text-editor.component.scss")).default]
    })
], TextEditorComponent);



/***/ }),

/***/ "./src/app/components/landing/about-us-content/about-us-content.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/landing/about-us-content/about-us-content.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgcookie {\n  background: url(\"/assets/images/bgcookie.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.slogan {\n  font-family: \"Lato\", sans-serif;\n}\n\n.bg-none {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9hYm91dC11cy1jb250ZW50L2Fib3V0LXVzLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9hYm91dC11cy1jb250ZW50L2Fib3V0LXVzLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0RUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9hYm91dC11cy1jb250ZW50L2Fib3V0LXVzLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb29raWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnY29va2llLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2xvZ2FuIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLmJnLW5vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2XG59XG4iLCIuYmdjb29raWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZ2Nvb2tpZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zbG9nYW4ge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/landing/about-us-content/about-us-content.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/landing/about-us-content/about-us-content.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AboutUsContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsContentComponent", function() { return AboutUsContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsContentComponent = class AboutUsContentComponent {
    ngOnInit() {
        this.chosenBackground = 'bgcookie';
        this.checkWidth();
    }
    checkWidth() {
        const background = document.querySelector('.about-us-container');
        const window = document.body.clientWidth;
        console.log(window);
        if (window > 768) {
            background.classList.add(this.chosenBackground);
            background.classList.remove('bg-none');
        }
        else {
            background.classList.remove(this.chosenBackground);
            background.classList.add('bg-none');
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], AboutUsContentComponent.prototype, "checkWidth", null);
AboutUsContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/about-us-content/about-us-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us-content.component.scss */ "./src/app/components/landing/about-us-content/about-us-content.component.scss")).default]
    })
], AboutUsContentComponent);



/***/ }),

/***/ "./src/app/components/landing/footer-landing/footer-landing.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/landing/footer-landing/footer-landing.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9mb290ZXItbGFuZGluZy9mb290ZXItbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2Zvb3Rlci1sYW5kaW5nL2Zvb3Rlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQVUsUUFBQTtFQUFVLFNBQUE7RUFDcEIsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2Zvb3Rlci1sYW5kaW5nL2Zvb3Rlci1sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMCA7IHJpZ2h0OiAwOyBib3R0b206IDA7XG4gIGhlaWdodDo2MHB4O1xufVxuIiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/landing/footer-landing/footer-landing.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/landing/footer-landing/footer-landing.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FooterLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLandingComponent", function() { return FooterLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterLandingComponent = class FooterLandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer-landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/footer-landing/footer-landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer-landing.component.scss */ "./src/app/components/landing/footer-landing/footer-landing.component.scss")).default]
    })
], FooterLandingComponent);



/***/ }),

/***/ "./src/app/components/landing/landing-content/landing-content.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/landing/landing-content/landing-content.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg1 {\n  background: url(\"/assets/images/bg1.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg2 {\n  background: url(\"/assets/images/bg2.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg3 {\n  background: url(\"/assets/images/bg3.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg4 {\n  background: url(\"/assets/images/bg4.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg5 {\n  background: url(\"/assets/images/bg5.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg-none {\n  background-color: #e6e6e6;\n}\n\n.slogan {\n  font-family: \"Lato\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLWNvbnRlbnQvbGFuZGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy1jb250ZW50L2xhbmRpbmctY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHVFQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xhbmRpbmctY29udGVudC9sYW5kaW5nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcxIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZzEucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZzIge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJnMyB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmczLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmc0IHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZzQucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZzUge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnNS5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJnLW5vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2XG59XG5cbi5zbG9nYW4ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuIiwiLmJnMSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnMS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZzIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZzIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmczIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmczLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJnNCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JnNC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZzUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZzUucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmctbm9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5zbG9nYW4ge1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/landing-content/landing-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/landing/landing-content/landing-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: LandingContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingContentComponent", function() { return LandingContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingContentComponent = class LandingContentComponent {
    ngOnInit() {
        const backgrounds = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];
        const num = Math.floor(Math.random() * backgrounds.length);
        this.chosenBackground = backgrounds[num];
        this.checkWidth();
    }
    checkWidth() {
        const background = document.querySelector('.landing-container');
        const window = document.body.clientWidth;
        console.log(window);
        if (window > 768) {
            background.classList.add(this.chosenBackground);
            background.classList.remove('bg-none');
        }
        else {
            background.classList.remove(this.chosenBackground);
            background.classList.add('bg-none');
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], LandingContentComponent.prototype, "checkWidth", null);
LandingContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/landing-content/landing-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-content.component.scss */ "./src/app/components/landing/landing-content/landing-content.component.scss")).default]
    })
], LandingContentComponent);



/***/ }),

/***/ "./src/app/components/landing/login-form/login-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/login-form/login-form.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bglogin {\n  background: url(\"/assets/images/bglogin.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg-none {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2xvZ2luIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iZ2xvZ2luLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmctbm9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTZcbn1cbiIsIi5iZ2xvZ2luIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdsb2dpbi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/landing/login-form/login-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/landing/login-form/login-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");





let LoginFormComponent = class LoginFormComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.checkWidth();
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        console.log('submitted');
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
            .subscribe(data => {
            this.router.navigate(['/dashboard']);
        }, error => {
            this.error = error.error.errors[0].msg;
            this.loading = false;
        });
    }
    checkWidth() {
        const background = document.querySelector('.login-container');
        const window = document.body.clientWidth;
        console.log(window);
        if (window > 768) {
            background.classList.add('bglogin');
            background.classList.remove('bg-none');
        }
        else {
            background.classList.remove('bglogin');
            background.classList.add('bg-none');
        }
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], LoginFormComponent.prototype, "checkWidth", null);
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/login-form/login-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-form.component.scss */ "./src/app/components/landing/login-form/login-form.component.scss")).default]
    })
], LoginFormComponent);



/***/ }),

/***/ "./src/app/components/landing/navbar-base/navbar-base.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/navbar-base/navbar-base.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9uYXZiYXItYmFzZS9uYXZiYXItYmFzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/landing/navbar-base/navbar-base.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/navbar-base/navbar-base.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBaseComponent", function() { return NavbarBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarBaseComponent = class NavbarBaseComponent {
    constructor() {
        this.open = false;
    }
    onClick() {
        this.open = !this.open;
    }
    ngOnInit() {
    }
};
NavbarBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-base',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-base/navbar-base.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-base.component.scss */ "./src/app/components/landing/navbar-base/navbar-base.component.scss")).default]
    })
], NavbarBaseComponent);



/***/ }),

/***/ "./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9uYXZiYXItbGFuZGluZy1saW5rcy9uYXZiYXItbGFuZGluZy1saW5rcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NavbarLandingLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarLandingLinksComponent", function() { return NavbarLandingLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarLandingLinksComponent = class NavbarLandingLinksComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarLandingLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-landing-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-landing-links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-landing-links.component.scss */ "./src/app/components/landing/navbar-landing-links/navbar-landing-links.component.scss")).default]
    })
], NavbarLandingLinksComponent);



/***/ }),

/***/ "./src/app/components/landing/navbar-side/navbar-side.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/navbar-side/navbar-side.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9uYXZiYXItc2lkZS9uYXZiYXItc2lkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/landing/navbar-side/navbar-side.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/navbar-side/navbar-side.component.ts ***!
  \*************************************************************************/
/*! exports provided: NavbarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarSideComponent", function() { return NavbarSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarSideComponent = class NavbarSideComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar-side',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/navbar-side/navbar-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar-side.component.scss */ "./src/app/components/landing/navbar-side/navbar-side.component.scss")).default]
    })
], NavbarSideComponent);



/***/ }),

/***/ "./src/app/components/landing/signup-form/signup-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/landing/signup-form/signup-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgsignup {\n  background: url(\"/assets/images/bgsignup.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n\n.bg-none {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nL3NpZ251cC1mb3JtL3NpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ3NpZ251cCB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdzaWdudXAucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNlxufVxuIiwiLmJnc2lnbnVwIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdzaWdudXAucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYmctbm9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/landing/signup-form/signup-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/landing/signup-form/signup-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");






let SignupFormComponent = class SignupFormComponent {
    constructor(formBuilder, route, router, authenticationService, userService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/dashboard']);
        }
    }
    ngOnInit() {
        this.checkWidth();
        this.signUpForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        this.error = '';
        const controls = this.signUpForm.controls;
        // stop here if form is invalid
        if (this.signUpForm.invalid) {
            console.log(this.signUpForm.errors);
            return;
        }
        else if (controls.password.value !== controls.password2.value) {
            this.error = 'Passwords don\'t match!';
        }
        else {
            this.loading = true;
            this.userService.signUp(controls.firstName.value, controls.lastName.value, controls.username.value, controls.email.value, controls.password.value)
                .subscribe(data => {
                this.router.navigate(['/login']);
            }, error => {
                this.loading = false;
                console.log(error);
                this.error = error.errors[0].msg;
            });
        }
    }
    checkWidth() {
        const background = document.querySelector('.login-container');
        const window = document.body.clientWidth;
        if (window > 768) {
            background.classList.add('bgsignup');
            background.classList.remove('bg-none');
        }
        else {
            background.classList.remove('bgsignup');
            background.classList.add('bg-none');
        }
    }
};
SignupFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], SignupFormComponent.prototype, "checkWidth", null);
SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing/signup-form/signup-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-form.component.scss */ "./src/app/components/landing/signup-form/signup-form.component.scss")).default]
    })
], SignupFormComponent);



/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box {\n  width: 50px;\n  height: 50px;\n  margin: 120px 10px;\n  border-radius: 25%;\n}\n\n#box-1 {\n  background: limegreen;\n  -webkit-animation: animate-1 5s forwards infinite ease;\n  animation: animate-1 5s forwards infinite ease;\n  opacity: 0.7;\n}\n\n#box-2 {\n  background: deeppink;\n  -webkit-animation: animate-2 5s forwards infinite ease;\n  animation: animate-2 5s forwards infinite ease;\n  opacity: 0.7;\n}\n\n#box-3 {\n  background: slateblue;\n  -webkit-animation: animate-3 5s forwards infinite ease;\n  animation: animate-3 5s forwards infinite ease;\n  opacity: 0.7;\n}\n\n#box-4 {\n  background: orange;\n  -webkit-animation: animate-4 5s forwards infinite ease;\n  animation: animate-4 5s forwards infinite ease;\n  opacity: 0.7;\n}\n\n@-webkit-keyframes animate-1 {\n  0% {\n    background: limegreen;\n    border-radius: 25%;\n  }\n  20% {\n    background: orange;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: slateblue;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  60% {\n    background: deeppink;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: limegreen;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@keyframes animate-1 {\n  0% {\n    background: limegreen;\n    border-radius: 25%;\n  }\n  20% {\n    background: orange;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: slateblue;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  60% {\n    background: deeppink;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: limegreen;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@-webkit-keyframes animate-2 {\n  0% {\n    background: deeppink;\n    border-radius: 25%;\n  }\n  20% {\n    background: limegreen;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: orange;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    margin: 120px;\n    transform: rotate(-180deg);\n  }\n  60% {\n    background: slateblue;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: deeppink;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@keyframes animate-2 {\n  0% {\n    background: deeppink;\n    border-radius: 25%;\n  }\n  20% {\n    background: limegreen;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: orange;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    margin: 120px;\n    transform: rotate(-180deg);\n  }\n  60% {\n    background: slateblue;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: deeppink;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@-webkit-keyframes animate-3 {\n  0% {\n    background: slateblue;\n    border-radius: 25%;\n  }\n  20% {\n    background: deeppink;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: limegreen;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    margin-right: 120px;\n    transform: rotate(180deg);\n  }\n  60% {\n    background: orange;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: slateblue;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@keyframes animate-3 {\n  0% {\n    background: slateblue;\n    border-radius: 25%;\n  }\n  20% {\n    background: deeppink;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: limegreen;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    margin-right: 120px;\n    transform: rotate(180deg);\n  }\n  60% {\n    background: orange;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: slateblue;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@-webkit-keyframes animate-4 {\n  0% {\n    background: orange;\n    border-radius: 25%;\n  }\n  20% {\n    background: slateblue;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: deeppink;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  60% {\n    background: limegreen;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: orange;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n\n@keyframes animate-4 {\n  0% {\n    background: orange;\n    border-radius: 25%;\n  }\n  20% {\n    background: slateblue;\n    border-radius: 50% 25% 25% 25%;\n  }\n  40% {\n    background: deeppink;\n    border-radius: 50% 50% 25% 25%;\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  60% {\n    background: limegreen;\n    border-radius: 50% 50% 50% 25%;\n  }\n  80% {\n    background: orange;\n    border-radius: 50% 50% 50% 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHNEQUFBO0VBQ1EsOENBQUE7RUFDUixZQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLHNEQUFBO0VBQ1EsOENBQUE7RUFDUixZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLHNEQUFBO0VBQ1EsOENBQUE7RUFDUixZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHNEQUFBO0VBQ1EsOENBQUE7RUFDUixZQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUNDRjtFREVBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQ0FGO0VER0E7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDREY7RURJQTtJQUNFLHlCQUFBO0VDRkY7RURLQTtJQUNFLG9CQUFBO0lBQ0EsOEJBQUE7RUNIRjtFRE1BO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQ0pGO0FBQ0Y7O0FET0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUNMRjtFRFFBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQ05GO0VEU0E7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDUEY7RURVQTtJQUNFLHlCQUFBO0VDUkY7RURXQTtJQUNFLG9CQUFBO0lBQ0EsOEJBQUE7RUNURjtFRFlBO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7RUNYRjtFRGNBO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQ1pGO0VEZUE7SUFDRSxrQkFBQTtJQUNBLDhCQUFBO0VDYkY7RURnQkE7SUFDRSxhQUFBO0lBQ0EsMEJBQUE7RUNkRjtFRGlCQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUNmRjtFRGtCQTtJQUNFLG9CQUFBO0lBQ0EsOEJBQUE7RUNoQkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLG9CQUFBO0lBQ0Esa0JBQUE7RUNqQkY7RURvQkE7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDbEJGO0VEcUJBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQ25CRjtFRHNCQTtJQUNFLGFBQUE7SUFDQSwwQkFBQTtFQ3BCRjtFRHVCQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUNyQkY7RUR3QkE7SUFDRSxvQkFBQTtJQUNBLDhCQUFBO0VDdEJGO0FBQ0Y7O0FEeUJBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VDdkJGO0VEMEJBO0lBQ0Usb0JBQUE7SUFDQSw4QkFBQTtFQ3hCRjtFRDJCQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUN6QkY7RUQ0QkE7SUFDRSxtQkFBQTtJQUNBLHlCQUFBO0VDMUJGO0VENkJBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQzNCRjtFRDhCQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUM1QkY7QUFDRjs7QUQrQkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUM3QkY7RURnQ0E7SUFDRSxvQkFBQTtJQUNBLDhCQUFBO0VDOUJGO0VEaUNBO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQy9CRjtFRGtDQTtJQUNFLG1CQUFBO0lBQ0EseUJBQUE7RUNoQ0Y7RURtQ0E7SUFDRSxrQkFBQTtJQUNBLDhCQUFBO0VDakNGO0VEb0NBO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQ2xDRjtBQUNGOztBRHFDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ25DRjtFRHNDQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUNwQ0Y7RUR1Q0E7SUFDRSxvQkFBQTtJQUNBLDhCQUFBO0VDckNGO0VEd0NBO0lBQ0UsMEJBQUE7RUN0Q0Y7RUR5Q0E7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDdkNGO0VEMENBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQ3hDRjtBQUNGOztBRDJDQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQ3pDRjtFRDRDQTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7RUMxQ0Y7RUQ2Q0E7SUFDRSxvQkFBQTtJQUNBLDhCQUFBO0VDM0NGO0VEOENBO0lBQ0UsMEJBQUE7RUM1Q0Y7RUQrQ0E7SUFDRSxxQkFBQTtJQUNBLDhCQUFBO0VDN0NGO0VEZ0RBO0lBQ0Usa0JBQUE7SUFDQSw4QkFBQTtFQzlDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGhlaWdodDoxMDB2aDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLmJveCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTIwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xufVxuXG4jYm94LTEge1xuICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLTEgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtMSA1cyBmb3J3YXJkcyBpbmZpbml0ZSBlYXNlO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbiNib3gtMiB7XG4gIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS0yIDVzIGZvcndhcmRzIGluZmluaXRlIGVhc2U7XG4gICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRlLTIgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4jYm94LTMge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLTMgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtMyA1cyBmb3J3YXJkcyBpbmZpbml0ZSBlYXNlO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbiNib3gtNCB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtNCA1cyBmb3J3YXJkcyBpbmZpbml0ZSBlYXNlO1xuICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZS00IDVzIGZvcndhcmRzIGluZmluaXRlIGVhc2U7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtMXtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cblxuICAyMCUge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cblxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDI1JSAyNSU7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgMjUlO1xuICB9XG5cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZS0xe1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cblxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtMntcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgbWFyZ2luOjEyMHB4O1xuICAgIHRyYW5zZm9ybTpyb3RhdGUoLTE4MGRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cblxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtMntcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgbWFyZ2luOjEyMHB4O1xuICAgIHRyYW5zZm9ybTpyb3RhdGUoLTE4MGRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cblxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS0ze1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDI1JSAyNSUgMjUlO1xuICB9XG5cbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAyNSUgMjUlO1xuICB9XG5cbiAgNTAlIHtcbiAgICBtYXJnaW4tcmlnaHQ6MTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtM3tcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cblxuICAyMCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgbWFyZ2luLXJpZ2h0OjEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICA2MCUge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cblxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtNHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cblxuICAyMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cblxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUtNHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cblxuICAyMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cblxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOnJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuIiwiYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3gge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDEyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcbn1cblxuI2JveC0xIHtcbiAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZS0xIDVzIGZvcndhcmRzIGluZmluaXRlIGVhc2U7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZS0xIDVzIGZvcndhcmRzIGluZmluaXRlIGVhc2U7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuI2JveC0yIHtcbiAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLTIgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlLTIgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4jYm94LTMge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLTMgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlLTMgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4jYm94LTQge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlLTQgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlLTQgNXMgZm9yd2FyZHMgaW5maW5pdGUgZWFzZTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS0xIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDI1JSAyNSUgMjUlO1xuICB9XG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGUtMSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICB9XG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDI1JSAyNSU7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgMjUlO1xuICB9XG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGUtMiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDI1JSAyNSUgMjUlO1xuICB9XG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbjogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgMjUlO1xuICB9XG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGUtMiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDI1JSAyNSUgMjUlO1xuICB9XG4gIDQwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbjogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgMjUlO1xuICB9XG4gIDgwJSB7XG4gICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pbWF0ZS0zIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAyNSUgMjUlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZS0zIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gIH1cbiAgMjAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW1lZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAyNSUgMjUlO1xuICB9XG4gIDUwJSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBhbmltYXRlLTQge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgfVxuICAyMCUge1xuICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgMjUlIDI1JSAyNSU7XG4gIH1cbiAgNDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDI1JSAyNSU7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIGJhY2tncm91bmQ6IGxpbWVncmVlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSAyNSU7XG4gIH1cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGUtNCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xuICB9XG4gIDIwJSB7XG4gICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAyNSUgMjUlIDI1JTtcbiAgfVxuICA0MCUge1xuICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMjUlIDI1JTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIDYwJSB7XG4gICAgYmFja2dyb3VuZDogbGltZWdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDI1JTtcbiAgfVxuICA4MCUge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/main/main-card/main-card.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/main/main-card/main-card.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fading {\n  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);\n  mask-image: linear-gradient(180deg, #000 60%, transparent);\n  font-family: \"Lato\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLWNhcmQvbWFpbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi1jYXJkL21haW4tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtFQUFBO0VBQ1EsMERBQUE7RUFDUiwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tY2FyZC9tYWluLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFkaW5nIHtcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMwMDAgNjAlLHRyYW5zcGFyZW50KTtcbiAgICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCMwMDAgNjAlLHRyYW5zcGFyZW50KTtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cbiIsIi5mYWRpbmcge1xuICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAgNjAlLCB0cmFuc3BhcmVudCk7XG4gIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMDAgNjAlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main-card/main-card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/main/main-card/main-card.component.ts ***!
  \******************************************************************/
/*! exports provided: MainCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCardComponent", function() { return MainCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/post.service */ "./src/app/_services/post.service.ts");



let MainCardComponent = class MainCardComponent {
    constructor(postService) {
        this.postService = postService;
    }
    onClick() {
        if (!this.card.liked) {
            this.card.likes++;
            this.card.liked = true;
            this.postService.like(this.card.id).subscribe(count => {
                this.card.likes = count;
            });
        }
        else {
            this.card.likes--;
            this.card.liked = false;
            this.postService.unlike(this.card.id).subscribe(count => {
                this.card.likes = count;
            });
        }
    }
    ngOnInit() {
        const images = [
            'card11',
            'card12',
            'card13',
            'card14',
            'card15',
            'card16',
            'card17'
        ];
        const num = Math.floor(Math.random() * images.length);
        this.chosenImage = images[num];
        this.chosenUrl = `/assets/images/${this.chosenImage}.png`;
    }
};
MainCardComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainCardComponent.prototype, "card", void 0);
MainCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-card/main-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-card.component.scss */ "./src/app/components/main/main-card/main-card.component.scss")).default]
    })
], MainCardComponent);



/***/ }),

/***/ "./src/app/components/main/main-chronometer/main-chronometer.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/main-chronometer/main-chronometer.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLWNocm9ub21ldGVyL21haW4tY2hyb25vbWV0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/main/main-chronometer/main-chronometer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/main-chronometer/main-chronometer.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainChronometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainChronometerComponent", function() { return MainChronometerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainChronometerComponent = class MainChronometerComponent {
    constructor() {
        this.countDownFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set hasPrompt(hasPrompt) {
        if (hasPrompt) {
            this.countdown.begin();
        }
    }
    ngOnInit() {
    }
    handleCountdown(event) {
        if (event.action === 'done') {
            this.countDownFinished.emit(true);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainChronometerComponent.prototype, "countDownFinished", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cd', { static: false })
], MainChronometerComponent.prototype, "countdown", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainChronometerComponent.prototype, "hasPrompt", null);
MainChronometerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-chronometer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-chronometer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-chronometer/main-chronometer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-chronometer.component.scss */ "./src/app/components/main/main-chronometer/main-chronometer.component.scss")).default]
    })
], MainChronometerComponent);



/***/ }),

/***/ "./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard-grid-container {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLWRhc2hib2FyZC1ncmlkL21haW4tZGFzaGJvYXJkLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLWRhc2hib2FyZC1ncmlkL21haW4tZGFzaGJvYXJkLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tZGFzaGJvYXJkLWdyaWQvbWFpbi1kYXNoYm9hcmQtZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtZ3JpZC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2XG59XG5cblxuIiwiLmRhc2hib2FyZC1ncmlkLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MainDashboardGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardGridComponent", function() { return MainDashboardGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/post.service */ "./src/app/_services/post.service.ts");



let MainDashboardGridComponent = class MainDashboardGridComponent {
    constructor(postService) {
        this.postService = postService;
        this.cards = [];
    }
    ngOnInit() {
        this.postService.list(0).subscribe(posts => {
            const userid = localStorage.getItem('userid');
            this.cards = posts.map(post => ({
                id: post._id,
                story: post.text, prompt: post.promptImages.length ? 'Image Prompt' : post.promptText, username: post.user.username,
                likes: post.likeCount, date: post.date, userid: post.user._id, liked: post.likes.filter(l => l.user === userid).length > 0
            }));
        });
    }
};
MainDashboardGridComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
MainDashboardGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-dashboard-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-dashboard-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-dashboard-grid.component.scss */ "./src/app/components/main/main-dashboard-grid/main-dashboard-grid.component.scss")).default]
    })
], MainDashboardGridComponent);



/***/ }),

/***/ "./src/app/components/main/main-footer/main-footer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/main/main-footer/main-footer.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLWZvb3Rlci9tYWluLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tZm9vdGVyL21haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tZm9vdGVyL21haW4tZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGhlaWdodDogNjBweDtcbn1cbiIsIi5mb290ZXIge1xuICBoZWlnaHQ6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main/main-footer/main-footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/main-footer/main-footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFooterComponent", function() { return MainFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainFooterComponent = class MainFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-footer/main-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-footer.component.scss */ "./src/app/components/main/main-footer/main-footer.component.scss")).default]
    })
], MainFooterComponent);



/***/ }),

/***/ "./src/app/components/main/main-navbar-side/main-navbar-side.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/main-navbar-side/main-navbar-side.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLW5hdmJhci1zaWRlL21haW4tbmF2YmFyLXNpZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/main/main-navbar-side/main-navbar-side.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/main-navbar-side/main-navbar-side.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainNavbarSideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarSideComponent", function() { return MainNavbarSideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");



let MainNavbarSideComponent = class MainNavbarSideComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    handleLogout() {
        this.authenticationService.logout();
        location.reload();
    }
    ngOnInit() {
    }
};
MainNavbarSideComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
MainNavbarSideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-navbar-side',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-navbar-side.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar-side/main-navbar-side.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-navbar-side.component.scss */ "./src/app/components/main/main-navbar-side/main-navbar-side.component.scss")).default]
    })
], MainNavbarSideComponent);



/***/ }),

/***/ "./src/app/components/main/main-navbar/main-navbar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/main/main-navbar/main-navbar.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav {\n  background: white;\n}\n\n.box {\n  flex-grow: 1;\n  transition: all 0.8s ease-in-out;\n  cursor: pointer;\n}\n\n.box:hover {\n  flex-grow: 12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLW5hdmJhci9tYWluLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tbmF2YmFyL21haW4tbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLW5hdmJhci9tYWluLW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJveCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdHJhbnNpdGlvbjogYWxsIC44cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgZmxleC1ncm93OiAxMjtcbn1cblxuIiwiLm5hdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYm94IHtcbiAgZmxleC1ncm93OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgZmxleC1ncm93OiAxMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main-navbar/main-navbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/main-navbar/main-navbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavbarComponent", function() { return MainNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");



let MainNavbarComponent = class MainNavbarComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.open = false;
    }
    onClick() {
        this.open = !this.open;
    }
    handleLogout() {
        this.authenticationService.logout();
        location.reload();
    }
    ngOnInit() {
    }
};
MainNavbarComponent.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
MainNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-navbar/main-navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-navbar.component.scss */ "./src/app/components/main/main-navbar/main-navbar.component.scss")).default]
    })
], MainNavbarComponent);



/***/ }),

/***/ "./src/app/components/main/main-pagination/main-pagination.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/main-pagination/main-pagination.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination {\n  width: 100%;\n  background: white;\n}\n\n.box {\n  flex-grow: 1;\n  transition: all 0.8s ease-in-out;\n  cursor: pointer;\n}\n\n.box:hover {\n  flex-grow: 12;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXBhZ2luYXRpb24vbWFpbi1wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi1wYWdpbmF0aW9uL21haW4tcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tcGFnaW5hdGlvbi9tYWluLXBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmJveCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdHJhbnNpdGlvbjogYWxsIC44cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgZmxleC1ncm93OiAxMjtcbn1cbiIsIi5wYWdpbmF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYm94IHtcbiAgZmxleC1ncm93OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm94OmhvdmVyIHtcbiAgZmxleC1ncm93OiAxMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main-pagination/main-pagination.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/main-pagination/main-pagination.component.ts ***!
  \******************************************************************************/
/*! exports provided: MainPaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPaginationComponent", function() { return MainPaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPaginationComponent = class MainPaginationComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainPaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-pagination/main-pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-pagination.component.scss */ "./src/app/components/main/main-pagination/main-pagination.component.scss")).default]
    })
], MainPaginationComponent);



/***/ }),

/***/ "./src/app/components/main/main-profile-info/main-profile-info.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/main/main-profile-info/main-profile-info.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2ZpbGUtaW5mby9tYWluLXByb2ZpbGUtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/main/main-profile-info/main-profile-info.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/main-profile-info/main-profile-info.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProfileInfoComponent", function() { return MainProfileInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainProfileInfoComponent = class MainProfileInfoComponent {
    constructor() {
        this.profile = {
            user: { _id: '', username: '' },
            website: '', age: 0, country: '', favoriteBooks: '', interests: '', moreInformation: '', date: new Date()
        };
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainProfileInfoComponent.prototype, "profile", void 0);
MainProfileInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-profile-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-info/main-profile-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-profile-info.component.scss */ "./src/app/components/main/main-profile-info/main-profile-info.component.scss")).default]
    })
], MainProfileInfoComponent);



/***/ }),

/***/ "./src/app/components/main/main-profile-page/main-profile-page.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/main/main-profile-page/main-profile-page.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-grid-container {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2ZpbGUtcGFnZS9tYWluLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tcHJvZmlsZS1wYWdlL21haW4tcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb2ZpbGUtcGFnZS9tYWluLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWdyaWQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cbiIsIi5wcm9maWxlLWdyaWQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main-profile-page/main-profile-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/main-profile-page/main-profile-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProfilePageComponent", function() { return MainProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/post.service */ "./src/app/_services/post.service.ts");



let MainProfilePageComponent = class MainProfilePageComponent {
    constructor(postService) {
        this.postService = postService;
        this.cards = [];
        this.profileUserId = '';
    }
    set userid(userid) {
        if (userid) {
            this.profileUserId = userid;
            this.postService.listForUser(userid, 0).subscribe(posts => {
                this.cards = posts.map(post => ({
                    id: post._id, liked: post.likes.filter(l => l.user === userid).length > 0,
                    story: post.text, prompt: post.promptImages.length ? 'Image Prompt' : post.promptText, username: post.user.username,
                    likes: post.likeCount, date: post.date, userid: post.user._id
                }));
            });
        }
    }
    ngOnInit() {
    }
};
MainProfilePageComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainProfilePageComponent.prototype, "userid", null);
MainProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-profile-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-profile-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-profile-page/main-profile-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-profile-page.component.scss */ "./src/app/components/main/main-profile-page/main-profile-page.component.scss")).default]
    })
], MainProfilePageComponent);



/***/ }),

/***/ "./src/app/components/main/main-prompt/main-prompt.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/main/main-prompt/main-prompt.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXByb21wdC9tYWluLXByb21wdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/main/main-prompt/main-prompt.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/main/main-prompt/main-prompt.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainPromptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPromptComponent", function() { return MainPromptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/prompt.service */ "./src/app/_services/prompt.service.ts");



let MainPromptComponent = class MainPromptComponent {
    constructor(promptService) {
        this.promptService = promptService;
        this.imageUrls = [];
        this.hasPrompt = false;
        this.promptChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.promptImageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    imagePrompt() {
        this.promptService.getImages().subscribe(images => {
            this.imageUrls = images;
            this.promptImageChanged.emit(images);
            this.hasPrompt = true;
        });
    }
    textPrompt() {
        this.promptService.getText().subscribe(prompt => {
            this.prompt = prompt;
            this.promptChanged.emit(prompt);
            this.hasPrompt = true;
        });
    }
};
MainPromptComponent.ctorParameters = () => [
    { type: src_app_services_prompt_service__WEBPACK_IMPORTED_MODULE_2__["PromptService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainPromptComponent.prototype, "promptChanged", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainPromptComponent.prototype, "promptImageChanged", void 0);
MainPromptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-prompt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-prompt.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-prompt/main-prompt.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-prompt.component.scss */ "./src/app/components/main/main-prompt/main-prompt.component.scss")).default]
    })
], MainPromptComponent);



/***/ }),

/***/ "./src/app/components/main/main-read-content/main-read-content.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/main/main-read-content/main-read-content.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".read-background {\n  background: url(\"/assets/images/linedpaper.png\") repeat center center fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXJlYWQtY29udGVudC9tYWluLXJlYWQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tcmVhZC1jb250ZW50L21haW4tcmVhZC1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXJlYWQtY29udGVudC9tYWluLXJlYWQtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xpbmVkcGFwZXIucG5nJykgcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG59XG4iLCIucmVhZC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGluZWRwYXBlci5wbmdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/main/main-read-content/main-read-content.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/main-read-content/main-read-content.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MainReadContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainReadContentComponent", function() { return MainReadContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/post.service */ "./src/app/_services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainReadContentComponent = class MainReadContentComponent {
    constructor(router, postService) {
        this.router = router;
        this.postService = postService;
        this.card = {
            prompt: '',
            story: '',
            username: '',
            liked: false,
            userid: '',
            id: '',
            likes: 0,
            date: new Date()
        };
    }
    set id(value) {
        console.log('id', value);
        if (value) {
            this.postService.get(value).subscribe(post => {
                const userid = localStorage.getItem('userid');
                this.images = post.promptImages;
                this.card = {
                    id: post._id,
                    story: post.text, prompt: post.promptImages.length ? '' : post.promptText, username: post.user.username,
                    likes: post.likeCount, date: post.date, userid: post.user._id, liked: post.likes.filter(l => l.user === userid).length > 0
                };
            });
        }
    }
    onClick() {
        if (!this.card.liked) {
            this.card.likes++;
            this.card.liked = true;
            this.postService.like(this.card.id).subscribe(count => {
                this.card.likes = count;
            });
        }
        else {
            this.card.likes--;
            this.card.liked = false;
            this.postService.unlike(this.card.id).subscribe(count => {
                this.card.likes = count;
            });
        }
    }
    backToDashboard($event) {
        this.router.navigate(['/dashboard']);
    }
    ngOnInit() {
    }
};
MainReadContentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainReadContentComponent.prototype, "id", null);
MainReadContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-read-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-read-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-read-content/main-read-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-read-content.component.scss */ "./src/app/components/main/main-read-content/main-read-content.component.scss")).default]
    })
], MainReadContentComponent);



/***/ }),

/***/ "./src/app/components/main/main-settings/main-settings.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/main/main-settings/main-settings.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-none {\n  background-color: #e6e6e6;\n}\n\n.bgsettings {\n  background: url(\"/assets/images/bgsettings.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXNldHRpbmdzL21haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXNldHRpbmdzL21haW4tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEVBQUE7RUFDQSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tc2V0dGluZ3MvbWFpbi1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNlxufVxuXG4uYmdzZXR0aW5ncyB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdzZXR0aW5ncy5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiAgIiwiLmJnLW5vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xufVxuXG4uYmdzZXR0aW5ncyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jnc2V0dGluZ3MucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/main/main-settings/main-settings.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/main-settings/main-settings.component.ts ***!
  \**************************************************************************/
/*! exports provided: MainSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSettingsComponent", function() { return MainSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/profile.service */ "./src/app/_services/profile.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let MainSettingsComponent = class MainSettingsComponent {
    constructor(formBuilder, profileService) {
        this.formBuilder = formBuilder;
        this.profileService = profileService;
    }
    ngOnInit() {
        this.checkWidth();
        this.settingsForm = this.formBuilder.group({
            country: '',
            age: '',
            interests: '',
            favoriteBooks: '',
            website: '',
            moreInformation: ''
        });
        this.profileService.getMe().subscribe(profile => {
            this.profile = profile;
            this.settingsForm.patchValue(profile);
        });
    }
    onSubmit() {
        const controls = this.settingsForm.controls;
        this.profileService.update(controls.website.value, controls.country.value, controls.age.value, controls.interests.value, controls.favoriteBooks.value, controls.moreInformation.value).subscribe(data => {
            location.reload();
        });
    }
    checkWidth() {
        const bg = document.querySelector('.settings-container');
        const window = document.body.clientWidth;
        if (window > 1280) {
            bg.classList.add('bgsettings');
            bg.classList.remove('bg-none');
        }
        else {
            bg.classList.remove('bgsettings');
            bg.classList.add('bg-none');
        }
    }
};
MainSettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], MainSettingsComponent.prototype, "checkWidth", null);
MainSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-settings/main-settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-settings.component.scss */ "./src/app/components/main/main-settings/main-settings.component.scss")).default]
    })
], MainSettingsComponent);



/***/ }),

/***/ "./src/app/components/main/main-story-view/main-story-view.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/main-story-view/main-story-view.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXN0b3J5LXZpZXcvbWFpbi1zdG9yeS12aWV3LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/main/main-story-view/main-story-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/main-story-view/main-story-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: MainStoryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainStoryViewComponent", function() { return MainStoryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainStoryViewComponent = class MainStoryViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainStoryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-story-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-story-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-story-view/main-story-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-story-view.component.scss */ "./src/app/components/main/main-story-view/main-story-view.component.scss")).default]
    })
], MainStoryViewComponent);



/***/ }),

/***/ "./src/app/components/main/main-welcome/main-welcome.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/main-welcome/main-welcome.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-text {\n  font-family: \"Lato\", sans-serif;\n  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);\n}\n\n.welcome-container {\n  background: url(\"/assets/images/banner1.png\") no-repeat center center fixed;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXdlbGNvbWUvbWFpbi13ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi13ZWxjb21lL21haW4td2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EsOEdBQUE7QUNDRjs7QURJQTtFQUNFLDJFQUFBO0VBQ0Esc0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXdlbGNvbWUvbWFpbi13ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIHRleHQtc2hhZG93OiAwcHggNHB4IDNweCByZ2JhKDAsMCwwLDAuNCksXG4gICAgICAgICAgICAgMHB4IDhweCAxM3B4IHJnYmEoMCwwLDAsMC4xKSxcbiAgICAgICAgICAgICAwcHggMThweCAyM3B4IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLndlbGNvbWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9iYW5uZXIxLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIiwiLndlbGNvbWUtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDBweCA0cHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KSwgMHB4IDhweCAxM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IDE4cHggMjNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi53ZWxjb21lLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/main/main-welcome/main-welcome.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/main-welcome/main-welcome.component.ts ***!
  \************************************************************************/
/*! exports provided: MainWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWelcomeComponent", function() { return MainWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainWelcomeComponent = class MainWelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-welcome/main-welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-welcome.component.scss */ "./src/app/components/main/main-welcome/main-welcome.component.scss")).default]
    })
], MainWelcomeComponent);



/***/ }),

/***/ "./src/app/components/main/main-writing-content/main-writing-content.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/main/main-writing-content/main-writing-content.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-none {\n  background-color: #e6e6e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YWdtdXJ0YXMvRGVza3RvcC9Qcm9qZWN0cy9oZXJlYmVzdG9yaWVzL2NsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXdyaXRpbmctY29udGVudC9tYWluLXdyaXRpbmctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4td3JpdGluZy1jb250ZW50L21haW4td3JpdGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLXdyaXRpbmctY29udGVudC9tYWluLXdyaXRpbmctY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNlxufSIsIi5iZy1ub25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main/main-writing-content/main-writing-content.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/main-writing-content/main-writing-content.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MainWritingContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainWritingContentComponent", function() { return MainWritingContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/post.service */ "./src/app/_services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MainWritingContentComponent = class MainWritingContentComponent {
    constructor(router, postService) {
        this.router = router;
        this.postService = postService;
        this.hasPrompt = false;
    }
    promptChangedHandler(prompt) {
        this.prompt = prompt;
        this.hasPrompt = true;
    }
    promptImageChangedHandler(promptImages) {
        this.promptImages = promptImages;
        this.hasPrompt = true;
    }
    countDownFinished() {
        this.submit();
    }
    textSubmitted(text) {
        this.textHtml = text;
        this.submit();
    }
    textChanged(text) {
        this.textHtml = text;
    }
    submit() {
        this.postService.write(this.textHtml, this.prompt ?
            `Character: ${this.prompt.character},
      Age: ${this.prompt.age},
      Feature: ${this.prompt.feature},
      Dilemma: ${this.prompt.dilemma}`
            : '', this.promptImages ? this.promptImages.join(',') : '').subscribe(data => {
            this.router.navigate(['/dashboard']);
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
MainWritingContentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
MainWritingContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-writing-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-writing-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main-writing-content/main-writing-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-writing-content.component.scss */ "./src/app/components/main/main-writing-content/main-writing-content.component.scss")).default]
    })
], MainWritingContentComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found-content/not-found-content.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/not-found/not-found-content/not-found-content.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC1jb250ZW50L25vdC1mb3VuZC1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/not-found/not-found-content/not-found-content.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/not-found/not-found-content/not-found-content.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NotFoundContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundContentComponent", function() { return NotFoundContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundContentComponent = class NotFoundContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found-content/not-found-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found-content.component.scss */ "./src/app/components/not-found/not-found-content/not-found-content.component.scss")).default]
    })
], NotFoundContentComponent);



/***/ }),

/***/ "./src/app/components/pages/about-us/about-us.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/about-us/about-us.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/about-us/about-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/about-us/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.scss */ "./src/app/components/pages/about-us/about-us.component.scss")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/dashboard/dashboard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/pages/landing/landing.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/landing/landing.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/landing/landing.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/landing/landing.component.ts ***!
  \***************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingComponent = class LandingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/landing/landing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/pages/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/components/pages/login/login.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/login/login.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/pages/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/pages/notfound404/notfound404.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/notfound404/notfound404.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbm90Zm91bmQ0MDQvbm90Zm91bmQ0MDQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/notfound404/notfound404.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/notfound404/notfound404.component.ts ***!
  \***********************************************************************/
/*! exports provided: Notfound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notfound404Component", function() { return Notfound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Notfound404Component = class Notfound404Component {
    constructor() { }
    ngOnInit() {
    }
};
Notfound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/notfound404/notfound404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound404.component.scss */ "./src/app/components/pages/notfound404/notfound404.component.scss")).default]
    })
], Notfound404Component);



/***/ }),

/***/ "./src/app/components/pages/profile/profile.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/profile.service */ "./src/app/_services/profile.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(route, profileService) {
        this.route = route;
        this.profileService = profileService;
    }
    set userid(userid) {
        this.profileUserId = userid;
        if (this.userid) {
            this.profileService.getUser(this.userid).subscribe(profile => {
                this.profile = profile;
                this.profileUserId = profile.user._id;
            });
        }
        else {
            this.profileService.getMe().subscribe(profile => {
                this.profile = profile;
                this.profileUserId = profile.user._id;
            });
        }
    }
    get userid() {
        return this.profileUserId;
    }
    ngOnInit() {
        this.route.paramMap.subscribe({
            next: (params) => this.userid = params.get('id')
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/pages/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/pages/read/read.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/read/read.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvcmVhZC9yZWFkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pages/read/read.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/read/read.component.ts ***!
  \*********************************************************/
/*! exports provided: ReadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadComponent", function() { return ReadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ReadComponent = class ReadComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe({
            next: (params) => {
                return this.id = params.get('id');
            }
        });
    }
};
ReadComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ReadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-read',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./read.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/read/read.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./read.component.scss */ "./src/app/components/pages/read/read.component.scss")).default]
    })
], ReadComponent);



/***/ }),

/***/ "./src/app/components/pages/settings/settings.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/settings/settings.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/settings/settings.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/settings/settings.component.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/pages/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/components/pages/signup/signup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/signup/signup.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/pages/signup/signup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/signup/signup.component.ts ***!
  \*************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/pages/signup/signup.component.scss")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/pages/write/write.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/write/write.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvd3JpdGUvd3JpdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/pages/write/write.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/write/write.component.ts ***!
  \***********************************************************/
/*! exports provided: WriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteComponent", function() { return WriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WriteComponent = class WriteComponent {
    constructor() { }
    ngOnInit() {
    }
};
WriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-write',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./write.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pages/write/write.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./write.component.scss */ "./src/app/components/pages/write/write.component.scss")).default]
    })
], WriteComponent);



/***/ }),

/***/ "./src/app/environment.ts":
/*!********************************!*\
  !*** ./src/app/environment.ts ***!
  \********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    apiUrl: 'http://localhost:5000/api'
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yagmurtas/Desktop/Projects/herebestories/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map