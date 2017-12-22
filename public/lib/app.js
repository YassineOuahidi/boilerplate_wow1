/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clientId = void 0;
var registrationId = void 0;

ga(function (tracker) {
    clientId = tracker.get('clientId');
});

registrationId = Cookies.get('_rid');

/*  Subscription form values    */

var uValue = "776c09c36150b0e9b541ff145";
var idValue = "1b379339ba";
var actionValue = "https://cloud.us17.list-manage.com/subscribe/post";

var subscriptionForm = '\n <form class="col-md-5" id="form" action="' + actionValue + '" method="POST">\n    <input type="hidden" name="u" value="' + uValue + '">\n    <input type="hidden" name="id" value="' + idValue + '">\n    <input id="ga" type="hidden" name="MERGE3" id="MERGE3"  value="' + clientId + '">\n    <div class="form-group">\n      <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>\n      <input class="form-control" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">\n    </div>\n    <div class="form-group">\n      <input class="form-control btn btn-primary" type="submit" class="formEmailButton" name="submit" value="Subscribe to list">\n    </div>\n  </form>\n';

/*  end form values */

if (registrationId == undefined) {
    $('#form_container').append(subscriptionForm);
} else {
    $('#form_container').empty();
    $('#form_container').append('Ti sei già registrato');
}

$('#form').submit(function (e) {
    if ($('#MERGE0').val() == '') {
        e.preventDefault();
        alert('Inserisci una email valida');
    } else {
        $('#ga').val(clientId);
        var userId = md5($('#MERGE0').val());
        Cookies.set('_rid', userId);
        ga('set', 'userId', userId);
    }
});

/***/ })
/******/ ]);