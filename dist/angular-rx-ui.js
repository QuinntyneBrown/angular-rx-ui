var ngRxUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(5);
	var app = angular
	    .module("components", [
	    "app.ads",
	    "app.article",
	    "app.author",
	    "app.backdrop",
	    "app.button",
	    "app.carouselActionPanel",
	    "app.category",
	    "app.core",
	    "app.counter",
	    "app.errorList",
	    "app.flipCard",
	    "app.flyout",
	    "app.hamburgerButton",
	    "app.hero",
	    "app.login",
	    "app.modal",
	    "app.navMenu",
	    "app.pagedList",
	    "app.panel",
	    "app.popover",
	    "app.picture",
	    "app.river",
	    "app.rotator",
	    "app.socialShare",
	    "app.spinner",
	    "app.tabs",
	    "app.tag",
	    "app.user",
	    "app.window"
	]);
	app.config([function () {
	        FastClick.attach(document.body);
	    }]);
	var _core = __webpack_require__(6);
	var _modal = __webpack_require__(250);
	exports.core = _core;
	exports.modal = _modal;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(59);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(168);
	__webpack_require__(170);
	__webpack_require__(91);
	__webpack_require__(182);
	__webpack_require__(190);
	__webpack_require__(198);
	__webpack_require__(208);
	__webpack_require__(219);
	__webpack_require__(227);
	__webpack_require__(232);
	__webpack_require__(237);
	__webpack_require__(250);
	__webpack_require__(265);
	__webpack_require__(273);
	__webpack_require__(283);
	__webpack_require__(291);
	__webpack_require__(304);
	__webpack_require__(311);
	__webpack_require__(316);
	__webpack_require__(103);
	__webpack_require__(325);
	__webpack_require__(115);
	__webpack_require__(131);
	__webpack_require__(333);
	__webpack_require__(354);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(7));
	__export(__webpack_require__(8));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(16));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	__export(__webpack_require__(35));
	__export(__webpack_require__(36));
	__export(__webpack_require__(37));
	__export(__webpack_require__(38));
	exports.Observable = Rx.Observable;
	__webpack_require__(39);
	__webpack_require__(12);
	__webpack_require__(26);
	__webpack_require__(11);
	__webpack_require__(21);
	__webpack_require__(40);
	__webpack_require__(41);
	__webpack_require__(17);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(34);
	__webpack_require__(25);
	__webpack_require__(30);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(35);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(38);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	var coreApp = angular.module("app.core", [
	    "ngSanitize",
	    "apiEndpoint",
	    "authInterceptor",
	    "localStorageManager",
	    "store",
	    "addOrUpdate",
	    "appendToBodyAsync",
	    "convertUnixTimestampToDate",
	    "debounce",
	    "extendCssAsync",
	    "getFromUrlSync",
	    "getHtml",
	    "getX",
	    "invokeAsync",
	    "fetch",
	    "formEncode",
	    "loginRedirect",
	    "position",
	    "removeElement",
	    "routeResolver",
	    "routeWhenExtension",
	    "rectangle",
	    "renderer",
	    "ruler",
	    "safeDigest",
	    "setElementBackgroundImage",
	    "setElementDimension",
	    "setElementDimensions",
	    "setOpacityAsync",
	    "space",
	    "rectangle",
	    "translateX",
	    "translateXY",
	    "translateXAsync",
	    "template"
	]);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(6);
	exports.bootstrap = function (app, options) {
	    if (options.api)
	        app.config(["apiEndpointProvider", function (apiEndpointProvider) {
	                apiEndpointProvider.configure(options.api);
	            }]);
	    if (options.loginRedirectUrl)
	        app.config(["loginRedirectProvider", function (loginRedirectProvider) {
	                loginRedirectProvider.setDefaultUrl(options.loginRedirectUrl);
	            }]);
	    if (options.html5Mode)
	        app.config(["$locationProvider", function ($locationProvider) {
	                $locationProvider.html5Mode(options.html5Mode);
	            }]);
	    if (options.reducers)
	        app.config(["reducersProvider", function (reducersProvider) {
	                for (var reducer in options.reducers) {
	                    reducersProvider.configure(options.reducers[reducer]);
	                }
	            }]);
	    if (options.actions)
	        for (var action in options.actions) {
	            core_1.provideAction(app, options.actions[action]);
	        }
	    if (options.components) {
	        for (var i = 0; i < options.components.length; i++) {
	            app.component(options.components[i]);
	        }
	    }
	    if (options.guards)
	        for (var i = 0; i < options.guards.length; i++) {
	            core_1.provideRoutePromise(app, options.guards[i]);
	        }
	    if (options.run)
	        for (var i = 0; i < options.run.length; i++) {
	            app.run(options.run[i]);
	        }
	    if (options.providers) {
	        for (var i = 0; i < options.providers.length; i++) {
	            core_1.provide(app, options.providers[i]);
	        }
	    }
	    if (options.routes) {
	        app.config(["$routeProvider", function ($routeProvider) {
	                for (var i_1 = 0; i_1 < options.routes.length; i_1++) {
	                    var path = options.routes[i_1].path;
	                    var selector = options.routes[i_1].component.prototype.constructor.config.selector;
	                    var template = "<" + selector + "></" + selector + ">";
	                    var authorizationRequired = options.routes[i_1].authorizationRequired;
	                    $routeProvider.when(path, { template: template, authorizationRequired: authorizationRequired });
	                }
	            }]);
	    }
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Base Service for CRUD: Expects a resultful endpoint available
	 */
	var BaseService = (function () {
	    function BaseService($q, apiEndpoint, fetch) {
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	    }
	    BaseService.prototype.get = function () {
	        var deferred = this.$q.defer();
	        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.getById = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.add = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.update = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.remove = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    Object.defineProperty(BaseService.prototype, "baseUri", {
	        get: function () { throw new Error("Not Implemented"); },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseService;
	}());
	exports.BaseService = BaseService;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function Injectable(noop) {
	    if (noop === void 0) { noop = null; }
	    return function (cls) {
	    };
	}
	exports.Injectable = Injectable;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	function Inject() {
	    return function (target, name, descriptor) {
	    };
	}
	exports.Inject = Inject;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(12));
	var InitialStateProvider = (function () {
	    function InitialStateProvider() {
	        var _this = this;
	        this.configure = function (value) { return _this.initialState = value; };
	        this.$get = function () { return _this.initialState; };
	    }
	    return InitialStateProvider;
	}());
	exports.InitialStateProvider = InitialStateProvider;
	var ReducersProvider = (function () {
	    function ReducersProvider() {
	        var _this = this;
	        this.reducers = [];
	        this.configure = function (value) { return _this.reducers.push(value); };
	        this.$get = function () { return _this.reducers; };
	    }
	    return ReducersProvider;
	}());
	exports.ReducersProvider = ReducersProvider;
	exports.functionName = function (fun) {
	    var ret = fun.toString();
	    ret = ret.substr('function '.length);
	    ret = ret.substr(0, ret.indexOf('('));
	    return ret;
	};
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(dispatcher, initialState, localStorageManager, reducers) {
	        var _this = this;
	        _super.call(this, initialState || {});
	        this.dispatcher = dispatcher;
	        this.localStorageManager = localStorageManager;
	        this.reducers = reducers;
	        this.onDispatcherNext = function (action) {
	            _this.state = _this.state || {};
	            _this.state = _this.setLastTriggeredByActionId(_this.state, action);
	            for (var i = 0; i < _this.reducers.length; i++) {
	                _this.state = _this.reducers[i](_this.state, action);
	            }
	            _this.localStorageManager.put({ name: "initialState", value: _this.state });
	            _this.onNext(_this.state);
	        };
	        this.setLastTriggeredByActionId = function (state, action) {
	            state.lastTriggeredByActionId = action.id;
	            state.lastTriggeredByAction = action;
	            state.lastTriggeredByActionType = action.constructor.type;
	            return state;
	        };
	        this.functionToString = function (fn) {
	            return fn.toString();
	        };
	        this.dispatch = this.dispatcher.dispatch;
	        this.state = initialState || {};
	        dispatcher.subscribe(function (action) { return _this.onDispatcherNext(action); });
	    }
	    return Store;
	}(Rx.BehaviorSubject));
	exports.Store = Store;
	function guid() {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	            .toString(16)
	            .substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	        s4() + '-' + s4() + s4() + s4();
	}
	exports.guid = guid;
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        var _this = this;
	        _super.call(this);
	        this.dispatch = function (action) { return _this.onNext(action); };
	    }
	    return Dispatcher;
	}(Rx.Subject));
	exports.Dispatcher = Dispatcher;
	angular.module("store", [])
	    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", Store])
	    .service("dispatcher", [Dispatcher])
	    .provider("reducers", ReducersProvider)
	    .provider("initialState", InitialStateProvider)
	    .value("guid", guid)
	    .run(["store", function (store) { }]);


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	var LocalStorageManagerProvider = (function () {
	    function LocalStorageManagerProvider() {
	        var _this = this;
	        this.id = "2fcfe918-dc2c-42db-9e88-ee62417651de";
	        this._items = null;
	        this.get = function (options) {
	            var storageItem = null;
	            for (var i = 0; i < _this.items.length; i++) {
	                if (options.name === _this.items[i].name)
	                    storageItem = _this.items[i].value;
	            }
	            return storageItem;
	        };
	        this.put = function (options) {
	            var itemExists = false;
	            _this.items.forEach(function (item) {
	                if (options.name === item.name) {
	                    itemExists = true;
	                    item.value = options.value;
	                }
	            });
	            if (!itemExists) {
	                var items = _this.items;
	                items.push({ name: options.name, value: options.value });
	                _this.items = items;
	                items = null;
	            }
	        };
	        this.clear = function () {
	            _this._items = [];
	        };
	        this.$get = function () { return _this; };
	        try {
	            window.onbeforeunload = function () { return localStorage.setItem(_this.id, JSON.stringify(_this.items)); };
	        }
	        catch (e) {
	        }
	    }
	    Object.defineProperty(LocalStorageManagerProvider.prototype, "items", {
	        get: function () {
	            if (this._items === null) {
	                var storageItems = localStorage.getItem(this.id);
	                if (storageItems === "null") {
	                    storageItems = null;
	                }
	                this._items = JSON.parse(storageItems || "[]");
	            }
	            return this._items;
	        },
	        set: function (value) {
	            this._items = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LocalStorageManagerProvider;
	}());
	exports.LocalStorageManagerProvider = LocalStorageManagerProvider;
	angular.module("localStorageManager", []).provider("localStorageManager", LocalStorageManagerProvider);


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	function Action(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.type = config.type;
	    };
	}
	exports.Action = Action;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	exports.pluckOut = function (options) {
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            options.items.splice(i, 1);
	        }
	    }
	    return options.items;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.Component = function (config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        config.component = cls;
	        cls.config = config;
	    };
	};
	exports.CanActivate = function (fnDefinition) {
	    return function (cls) { cls.prototype.canActivate = function () { return fnDefinition; }; };
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.convertUnixTimestampToDate = function (timestamp) { return new Date(timestamp * 1000); };
	angular.module("convertUnixTimestampToDate", []).value("convertUnixTimestampToDate", exports.convertUnixTimestampToDate);


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	function Service(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.serviceName = config.serviceName;
	        cls.$inject = config.viewProviders;
	    };
	}
	exports.Service = Service;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ends_with_1 = __webpack_require__(20);
	var cachedData = {};
	/**
	 * Caches the returned Observable.
	 * The cache key used is either a property with the name ${propertyKey} from the first arg to the function.
	 * If propertyKey isn't specified or not there, then if the first arg is string, it's used as the key
	 * else we stringify the whole object.
	 *
	 * If there are no args passed to the function, then the function name is the key.
	 */
	function Cache(propertyKey) {
	    return function (target, functionName, descriptor) {
	        var originalMethod = descriptor.value;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var key = getCacheKey(functionName, propertyKey, args);
	            var cache = cachedData[key];
	            if (cache && cache.data) {
	                return Rx.Observable.of(cache.data);
	            }
	            else if (cache && cache.observable) {
	                return cache.observable;
	            }
	            else {
	                cache = {
	                    observable: originalMethod.apply(this, args)
	                        .map(function (r) {
	                        delete cache.observable;
	                        cache.data = r;
	                        return cache.data;
	                    }).share()
	                };
	                cachedData[key] = cache;
	                return cache.observable;
	            }
	        };
	        return descriptor;
	    };
	}
	exports.Cache = Cache;
	/**
	 * This function clears the cache by @Cache based on the same key and functionName logic.
	 * This function requires the name of the function that would have generated the cache that needs to be cleared.
	 * Also if the function called is 'clearAllCachedData()' then all data is cleared.
	 */
	function ClearCache(functionName, propertyKey) {
	    return function (target, propertyName, descriptor) {
	        var originalMethod = descriptor.value;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (functionName === 'clearAllCachedData') {
	                cachedData = {};
	            }
	            else {
	                var key = getCacheKey(functionName, propertyKey, args);
	                delete cachedData[key];
	            }
	            return originalMethod.apply(this, args);
	        };
	        return descriptor;
	    };
	}
	exports.ClearCache = ClearCache;
	function ClearAllFunctionCache(functionInfo) {
	    for (var e in cachedData) {
	        var normalizedKey = e.toLocaleLowerCase();
	        var normalizedFunctionName = functionInfo.name.toLocaleLowerCase();
	        if (normalizedKey.indexOf("/" + normalizedFunctionName + "/") !== -1 ||
	            ends_with_1.endsWith(normalizedKey, normalizedFunctionName) ||
	            normalizedKey.indexOf("/" + normalizedFunctionName + ".") !== -1) {
	            delete cachedData[e];
	        }
	    }
	}
	exports.ClearAllFunctionCache = ClearAllFunctionCache;
	function getCacheKey(functionName, propertyName, args) {
	    var key = functionName + "+";
	    if (propertyName && args && args.length > 0 && args[0][propertyName]) {
	        key += args[0][propertyName];
	    }
	    else if (args && args.length > 0 && typeof args[0] === 'string') {
	        key += args[0];
	    }
	    else if (args && args.length > 1) {
	        key += JSON.stringify(args);
	    }
	    return key;
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	exports.endsWith = function (value1, value2) {
	    return value1.toLowerCase().indexOf(value2.toLowerCase()) === value1.length - value2.length;
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	exports.addOrUpdate = function (options) {
	    var exists = false;
	    options.items = options.items || [];
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.items[i].id === options.item.id) {
	            options.items[i] = options.item;
	            exists = true;
	        }
	    }
	    if (!exists) {
	        options.items.push(options.item);
	    }
	};
	angular.module("addOrUpdate", []).value("addOrUpdate", exports.addOrUpdate);


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var BaseActionCreator = (function () {
	    function BaseActionCreator($location, service, dispatcher, guid, addOrUpdateAction, allAction, removeAction, setCurrentAction) {
	        var _this = this;
	        this.$location = $location;
	        this.service = service;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.addOrUpdateAction = addOrUpdateAction;
	        this.allAction = allAction;
	        this.removeAction = removeAction;
	        this.setCurrentAction = setCurrentAction;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.service.getById({ id: options.id }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.all = function () {
	            var newId = _this.guid();
	            _this.service.get().then(function (results) {
	                var action = new _this.allAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addOrUpdate = function (options) {
	            var newId = _this.guid();
	            _this.service.add({ data: options.data }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.remove = function (options) {
	            var newId = _this.guid();
	            _this.service.remove({
	                id: options.entity.id
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
	            });
	            return newId;
	        };
	        this.edit = function (options) { return _this.dispatcher.dispatch(new _this.setCurrentAction(options.entity)); };
	        this.create = function () { return _this.dispatcher.dispatch(new _this.setCurrentAction(null)); };
	    }
	    return BaseActionCreator;
	}());
	exports.BaseActionCreator = BaseActionCreator;


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.pluck = function (options) {
	    var item = {};
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            item = angular.copy(options.items[i]);
	        }
	    }
	    return item;
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	var Fetch = (function () {
	    function Fetch($http, $q, localStorageManager) {
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.localStorageManager = localStorageManager;
	        this.fromService = function (options) {
	            var deferred = _this.$q.defer();
	            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
	                deferred.resolve(results);
	            }).catch(function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };
	        this.fromCacheOrService = function (options) {
	            var deferred = _this.$q.defer();
	            var cachedData = _this.localStorageManager.get({ name: options.url });
	            if (!cachedData) {
	                _this.fromService(options).then(function (results) {
	                    deferred.resolve(results);
	                }).catch(function (error) {
	                    deferred.reject(error);
	                });
	            }
	            else {
	                deferred.resolve(cachedData.value);
	            }
	            return deferred.promise;
	        };
	        this.fromService$ = function (options) {
	            var deferred = _this.$q.defer();
	            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
	                deferred.resolve(results);
	            }).catch(function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };
	    }
	    return Fetch;
	}());
	exports.Fetch = Fetch;
	angular.module("fetch", ["localStorageManager"]).service("fetch", ["$http", "$q", "localStorageManager", Fetch]);


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	var LoginRedirectProvider = (function () {
	    function LoginRedirectProvider() {
	        var _this = this;
	        this.loginUrl = "/login";
	        this.defaultPath = "/";
	        this.setLoginUrl = function (value) { return _this.loginUrl = value; };
	        this.setDefaultUrl = function (value) { return _this.defaultPath = value; };
	        this.$get = ["$q", "$location", function ($q, $location) {
	                var _this = this;
	                return {
	                    responseError: function (response) {
	                        if (response.status == 401) {
	                            _this.lastPath = $location.path();
	                            $location.path(_this.loginUrl);
	                        }
	                        return $q.reject(response);
	                    },
	                    redirectToLogin: function () {
	                        _this.lastPath = $location.path();
	                        $location.path(_this.loginUrl);
	                    },
	                    redirectPreLogin: function () {
	                        if (_this.lastPath && _this.lastPath != _this.loginUrl) {
	                            $location.path(_this.lastPath);
	                            _this.lastPath = "";
	                        }
	                        else {
	                            $location.path(_this.defaultPath);
	                        }
	                    }
	                };
	            }];
	    }
	    return LoginRedirectProvider;
	}());
	exports.LoginRedirectProvider = LoginRedirectProvider;
	angular.module("loginRedirect", []).provider("loginRedirect", [LoginRedirectProvider])
	    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("loginRedirect"); }]);


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	exports.provide = function (app, service) {
	    if (service.$inject) {
	        app.service(service.serviceName, service.$inject.concat([service]));
	    }
	    else {
	        app.service(service.serviceName, [service]);
	    }
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	exports.provideAction = function (app, value) {
	    app.value(value.type, value);
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	exports.provideRoutePromise = function (app, routePromise) {
	    app.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	            routeResolverServiceProvider.configure({
	                route: routePromise.route,
	                routes: routePromise.routes,
	                key: routePromise.key,
	                promise: routePromise.promise
	            });
	        }]);
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	exports.getX = function (element) {
	    var transform = angular.element(element).css("transform");
	    if (transform === "none")
	        return 0;
	    var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));
	    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
	};
	angular.module("getX", []).value("getX", exports.getX);


/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	exports.isBetween = function (value, lowerLimit, upperLimit) {
	    if (upperLimit === void 0) { upperLimit = null; }
	    return false;
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	exports.translateX = function (element, value) {
	    angular.element(element).css({
	        "-moz-transform": "translateX(" + value + "px)",
	        "-webkit-transform": "translateX(" + value + "px)",
	        "-ms-transform": "translateX(" + value + "px)",
	        "-transform": "translateX(" + value + "px)"
	    });
	    return element;
	};
	angular.module("translateX", []).value("translateX", exports.translateX);


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	exports.translateXY = function (element, x, y) {
	    angular.element(element).css({
	        "-moz-transform": "translate(" + x + "px, " + y + "px)",
	        "-webkit-transform": "translate(" + x + "px, " + y + "px)",
	        "-ms-transform": "translate(" + x + "px, " + y + "px)",
	        "-transform": "translate(" + x + "px, " + y + "px)"
	    });
	    return element;
	};
	angular.module("translateXY", []).value("translateXY", exports.translateXY);


/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	exports.getHtml = function (who, deep) {
	    if (!who || !who.tagName)
	        return '';
	    var txt, ax, el = document.createElement("div");
	    el.appendChild(who.cloneNode(false));
	    txt = el.innerHTML;
	    if (deep) {
	        ax = txt.indexOf('>') + 1;
	        txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
	    }
	    el = null;
	    return txt;
	};
	angular.module("getHtml", []).value("getHtml", exports.getHtml);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var provide_1 = __webpack_require__(27);
	var service_decorator_1 = __webpack_require__(18);
	(function (scopeType) {
	    scopeType[scopeType["isolated"] = 0] = "isolated";
	    scopeType[scopeType["global"] = 1] = "global";
	})(exports.scopeType || (exports.scopeType = {}));
	var scopeType = exports.scopeType;
	(function (renderOutputType) {
	    renderOutputType[renderOutputType["Html"] = 0] = "Html";
	    renderOutputType[renderOutputType["AugmentedJquery"] = 1] = "AugmentedJquery";
	    renderOutputType[renderOutputType["NativeElement"] = 2] = "NativeElement";
	})(exports.renderOutputType || (exports.renderOutputType = {}));
	var renderOutputType = exports.renderOutputType;
	var Renderer = (function () {
	    function Renderer($compile, $rootScope, getHtml) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$rootScope = $rootScope;
	        this.getHtml = getHtml;
	        this.options = {
	            html: "",
	            outputType: renderOutputType.AugmentedJquery,
	            parentScope: this.$rootScope,
	            isScopeIsolated: true,
	            style: {}
	        };
	        this.render = function (options) {
	            angular.extend(_this.options, options);
	            var augmentedJquery = _this.$compile(options.html)(_this.options.parentScope.$new(_this.options.isScopeIsolated));
	            angular.extend(augmentedJquery[0].style, _this.options.style);
	            if (_this.options.outputType === renderOutputType.NativeElement)
	                return augmentedJquery[0];
	            if (_this.options.outputType === renderOutputType.Html)
	                return _this.getHtml(augmentedJquery[0], false);
	            return augmentedJquery;
	        };
	    }
	    Renderer = __decorate([
	        service_decorator_1.Service({
	            serviceName: "renderer",
	            viewProviders: ["$compile", "$rootScope", "getHtml"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], Renderer);
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	var app = angular.module("renderer", ["getHtml"]);
	provide_1.provide(app, Renderer);


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	exports.setElementBackgroundImage = function (augmentedJQuery, backgroundImageUrl) {
	    if (backgroundImageUrl)
	        augmentedJQuery[0].style.backgroundImage = "url('" + backgroundImageUrl + "')";
	};
	angular.module("setElementBackgroundImage", [])
	    .value("setElementBackgroundImage", exports.setElementBackgroundImage);


/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	exports.setElementDimension = function (dimension, augmentedJQuery, value) {
	    if (value && (value.indexOf("%") > -1 || value.indexOf("px") > -1)) {
	        augmentedJQuery[0].style[dimension] = "" + value;
	    }
	    else {
	        augmentedJQuery[0].style[dimension] = value + "px";
	    }
	};
	angular.module("setElementDimension", [])
	    .value("setElementDimension", exports.setElementDimension);


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var set_element_dimension_1 = __webpack_require__(37);
	exports.setElementDimensions = function (augmentedJQuery, height, width) {
	    set_element_dimension_1.setElementDimension("height", augmentedJQuery, height);
	    set_element_dimension_1.setElementDimension("width", augmentedJQuery, width);
	};
	angular.module("setElementDimensions", [])
	    .value("setElementDimensions", exports.setElementDimensions);


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var ApiEndpointProvider = (function () {
	    function ApiEndpointProvider() {
	        var _this = this;
	        this.config = {
	            getBaseUrl: function (name) {
	                var baseUrl = "";
	                if (name) {
	                    _this.config.baseUrls.forEach(function (endpointDefinition) {
	                        if (name === endpointDefinition.name) {
	                            baseUrl = endpointDefinition.url;
	                        }
	                    });
	                }
	                if (!name || baseUrl === "") {
	                    _this.config.baseUrls.forEach(function (endpointDefinition) {
	                        if (!endpointDefinition.name && baseUrl === "") {
	                            baseUrl = endpointDefinition.url;
	                        }
	                    });
	                }
	                return baseUrl;
	            },
	            baseUrls: [],
	            configure: function (baseUrl, name) {
	                var self = this;
	                self.baseUrls.push({ url: baseUrl, name: name });
	            }
	        };
	    }
	    ApiEndpointProvider.prototype.configure = function (baseUrl, name) {
	        this.config.baseUrls.push({ url: baseUrl, name: name });
	    };
	    ApiEndpointProvider.prototype.$get = function () {
	        return this.config;
	    };
	    return ApiEndpointProvider;
	}());
	exports.ApiEndpointProvider = ApiEndpointProvider;
	angular.module("apiEndpoint", []).provider("apiEndpoint", ApiEndpointProvider);


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	/**
	 * @description Append To Body Asynchrously
	 * @param options
	 */
	exports.appendToBodyAsync = function (options) {
	    var deferred = $q.defer();
	    document.body.appendChild(options.nativeElement);
	    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
	    return deferred.promise;
	};
	angular.module("appendToBodyAsync", []).value("appendToBodyAsync", exports.appendToBodyAsync);


/***/ },
/* 41 */
/***/ function(module, exports) {

	var AuthInterceptor = (function () {
	    function AuthInterceptor(store) {
	        var _this = this;
	        this.store = store;
	        this.storeOnChange = function (state) { _this.token = state.token; };
	        this.request = function (config) {
	            if (_this.token)
	                config.headers.Authorization = "Bearer " + _this.token;
	            return config;
	        };
	        this.token = null;
	        store.subscribe(this.storeOnChange);
	    }
	    AuthInterceptor.createInstance = function (store) { return new AuthInterceptor(store); };
	    return AuthInterceptor;
	}());
	angular.module("authInterceptor", ["store"])
	    .factory("authInterceptor", ["store", function (store) { return new AuthInterceptor(store); }])
	    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("authInterceptor"); }]);


/***/ },
/* 42 */
/***/ function(module, exports) {

	// Extracted from Underscore.js 1.5.2
	function debounce(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	    return function () {
	        context = this;
	        args = arguments;
	        timestamp = new Date();
	        var later = function () {
	            var last = (new Date()) - timestamp;
	            if (last < wait) {
	                timeout = setTimeout(later, wait - last);
	            }
	            else {
	                timeout = null;
	                if (!immediate) {
	                    result = func.apply(context, args);
	                }
	            }
	        };
	        var callNow = immediate && !timeout;
	        if (!timeout) {
	            timeout = setTimeout(later, wait);
	        }
	        if (callNow) {
	            result = func.apply(context, args);
	        }
	        return result;
	    };
	}
	angular.module("debounce", []).value("debounce", debounce);


/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.extendCssAsync = function (options) {
	    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
	};
	angular.module("extendCssAsync", []).value("extendCssAsync", exports.extendCssAsync);


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	exports.getFromUrlSync = function (options) {
	    var responseText = "";
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", options.url, false);
	    xhr.onload = function (e) {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	                responseText = xhr.responseText;
	            }
	            else {
	                console.error(xhr.statusText);
	            }
	        }
	    };
	    xhr.send(null);
	    return responseText;
	};
	angular.module("getFromUrlSync", []).value("getFromUrlSync", exports.getFromUrlSync);


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	angular.module("invokeAsync", []).value("invokeAsync", function (options) {
	    var store = angular.element(document.body).injector().get("store");
	    var $q = angular.element(document.body).injector().get("$q");
	    if (angular.isFunction(options)) {
	        options = { action: options };
	    }
	    ;
	    var deferred = $q.defer();
	    var actionId = options.params ? options.action(options.params) : options.action();
	    var subscription = store.subscribe(function (state) {
	        if (state.lastTriggeredByActionId == actionId) {
	            if (subscription)
	                subscription.dispose();
	            deferred.resolve();
	        }
	    });
	    return deferred.promise;
	});


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var originalAngularModule = angular.module;
	var componentStyles = {};
	var get_html_1 = __webpack_require__(34);
	angular.module = function () {
	    var m = originalAngularModule.apply(this, arguments);
	    m.component = function (component) {
	        var options = component.config;
	        var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
	            return g[1].toUpperCase();
	        });
	        var componentName = componentNameCamelCase + "Component";
	        if (options.component.canActivate) {
	            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	                    routeResolverServiceProvider.configure({
	                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
	                        route: options.route,
	                        routes: options.routes,
	                        key: options.key,
	                        promise: options.component.canActivate()
	                    });
	                }
	            ]);
	        }
	        if (options.component.prototype.canActivate) {
	            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	                    routeResolverServiceProvider.configure({
	                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
	                        route: options.route,
	                        routes: options.routes,
	                        key: options.key,
	                        promise: options.component.prototype.canActivate()
	                    });
	                }
	            ]);
	        }
	        var directiveDefinitionObject = {
	            restrict: options.restrict || "E",
	            template: angular.isArray(options.template) ? options.template.join(" \n ") : options.template,
	            templateUrl: options.templateUrl,
	            replace: options.replace || true,
	            scope: angular.isUndefined(options.scope) ? {} : options.scope,
	            bindToController: options.bindToController || {},
	            transclude: options.transclude,
	            controllerAs: "vm",
	            require: options.require,
	            controller: componentName
	        };
	        options.component.$inject = options.viewProviders;
	        if (options.inputs && options.inputs.length > 0) {
	            for (var i = 0; i < options.inputs.length; i++) {
	                if (options.inputs[i].substring(0, 2) === "on") {
	                    directiveDefinitionObject.bindToController[options.inputs[i]] = "&";
	                }
	                else if (options.inputs[i].substring(0, 1) === "@"
	                    || options.inputs[i].substring(0, 1) === "&"
	                    || options.inputs[i].substring(0, 1) === "=") {
	                    directiveDefinitionObject.bindToController[options.inputs[i].substr(1)] = options.inputs[i].substring(0, 1);
	                }
	                else {
	                    directiveDefinitionObject.bindToController[options.inputs[i]] = "=";
	                }
	            }
	        }
	        directiveDefinitionObject.compile = function (template) {
	            return {
	                pre: function (scope, element, attributes, controller, transcludeFn) {
	                    if (options.transclude)
	                        transcludeFn(scope, function (clone) {
	                        });
	                    if (document.body && angular.element(document.body.childNodes[0]) && angular.element(document.body.childNodes[0]).injector()) {
	                        var $injector = angular.element(document.body.childNodes[0]).injector();
	                        var store = $injector.get("store");
	                        var safeDigest = $injector.get("safeDigest");
	                        if (scope.vm && scope.vm.storeOnChange) {
	                            var subscription = store.subscribe(function (state) {
	                                scope.vm.storeOnChange(state);
	                                safeDigest(scope);
	                            });
	                            scope.$on("$destroy", function () { return subscription.dispose(); });
	                        }
	                    }
	                },
	                post: function (scope, element, attributes, controller) {
	                    if (options.require) {
	                        var requiredComponentName = options.require.replace("^", "");
	                        scope.vm[requiredComponentName] = controller;
	                    }
	                    if (options.transclude && scope.vm.$transclude)
	                        scope.vm.$transclude(scope.$new(), function (clone) {
	                            if (scope.vm.hasOwnProperty("template"))
	                                scope.vm.template = template;
	                            if (template[0].nodeType === 1)
	                                var documentFragment = angular.element("<div></div>");
	                            for (var i = 0; i < clone[0].children[0].children.length; i++) {
	                                documentFragment.append(clone[0].children[0].children[i]);
	                            }
	                            scope.vm.clone = get_html_1.getHtml(documentFragment[0], true);
	                        });
	                    if (scope.vm && scope.vm.ngOnInit)
	                        scope.vm.ngOnInit();
	                    if (scope.vm.ngOnDestroy)
	                        scope.$on("$destroy", function () {
	                            scope.vm.dispose();
	                        });
	                }
	            };
	        };
	        m.directive(componentNameCamelCase, [function () { return directiveDefinitionObject; }]);
	        m.controller(componentName, options.component);
	    };
	    return m;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Position = (function () {
	    function Position(ruler, space, translateXY) {
	        var _this = this;
	        this.ruler = ruler;
	        this.space = space;
	        this.translateXY = translateXY;
	        this.somewhere = function (a, b, space, directionPriorityList) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                var aRectangle = resultsArray[0];
	                var bRectangle = resultsArray[1];
	                var widthNeeded = bRectangle.width + space;
	                var heightNeeded = bRectangle.height + space;
	                var resolved = false;
	                for (var i = 0; i < directionPriorityList.length; i++) {
	                    switch (directionPriorityList[i]) {
	                        case "top":
	                            if (aRectangle.top > heightNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "above");
	                                resolved = true;
	                            }
	                            break;
	                        case "bottom":
	                            if (window.innerHeight - aRectangle.bottom > heightNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "below");
	                                resolved = true;
	                            }
	                            break;
	                        case "left":
	                            if (aRectangle.left > widthNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "left");
	                                resolved = true;
	                            }
	                            break;
	                        case "right":
	                            if (window.innerWidth - aRectangle.bottom > widthNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "right");
	                                resolved = true;
	                            }
	                            break;
	                    }
	                }
	            });
	        };
	        this.above = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "above");
	            });
	        };
	        this.below = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "below");
	            });
	        };
	        this.left = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "left");
	            });
	        };
	        this.right = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "right");
	            });
	        };
	        this.translate = function (htmlElement, aRectangle, bRectangle, space, side) {
	            if (side === "above")
	                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.top - space - bRectangle.height);
	            if (side === "below")
	                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
	            if (side === "left")
	                _this.translateXY(htmlElement, aRectangle.left - space - bRectangle.width, aRectangle.centerY - bRectangle.radiusY);
	            if (side === "right")
	                _this.translateXY(htmlElement, aRectangle.right + space, aRectangle.centerY - bRectangle.radiusY);
	        };
	    }
	    Position = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "position",
	            viewProviders: ["ruler", "space", "translateXY"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Function])
	    ], Position);
	    return Position;
	}());
	exports.Position = Position;
	var app = angular.module("position", [
	    "ruler",
	    "space",
	    "translateXY"
	]);
	core_1.provide(app, Position);


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	exports.removeElement = function (options) {
	    if (options.nativeHTMLElement) {
	        var $target = angular.element(options.nativeHTMLElement);
	        options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
	        $target.remove();
	        delete options.nativeHTMLElement;
	    }
	};
	angular.module("removeElement", []).value("removeElement", exports.removeElement);


/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	var RouteResolverServiceProvider = (function () {
	    function RouteResolverServiceProvider() {
	        var _this = this;
	        this.configure = function (routePromise) { _this._routePromises.push(routePromise); };
	        this.$get = ["$injector", "$q", function ($injector, $q) {
	                return {
	                    resolve: function (options) {
	                        _this._routeParams = options.routeParams;
	                        var deferred = $q.defer();
	                        var resolvedRouteData = {};
	                        var routePromises = _this.getRoutePromises({ routeName: options.routeName, routeTemplate: options.routeTemplate });
	                        if (routePromises.length < 1)
	                            return $q.when(true);
	                        var prioritizedGroups = _this.reduceRoutePromisesByPriority(routePromises);
	                        _this.invoke($injector, $q, prioritizedGroups, 0, function () {
	                            deferred.resolve(resolvedRouteData);
	                        }, resolvedRouteData);
	                        return deferred.promise;
	                    }
	                };
	            }
	        ];
	        this._routePromises = [];
	        /**
	        * @name getRoutePromises
	        * @description the route promises that will be resolved on an route
	        * if the value of the route key matches the route definition '/foo/{id}' or '/foos'
	        * include that routePromises
	        * if the route promise has route value of '*' the promise will be resolve on every route
	        * if the selector in template form ie <selector></selector>, matches the template of the route,
	        * the components canActivate route promise will be resolved
	        */
	        this.getRoutePromises = function (options) {
	            return _this._routePromises.filter(function (routePromise) {
	                if (routePromise.route && routePromise.route === "*")
	                    return true;
	                if (routePromise.route)
	                    return routePromise.route === options.routeName;
	                if (routePromise.routes)
	                    return routePromise.routes.indexOf(options.routeName) > -1;
	                if (routePromise.routeTemplate)
	                    return routePromise.routeTemplate === options.routeTemplate;
	                return false;
	            });
	        };
	        /**
	         * Reduce RoutePromises into prioritized groups
	         * Put the route promises with the same priority in the same group
	         * Eventually will be resolve together asynchronously with $q.all
	         */
	        this.reduceRoutePromisesByPriority = function (routePromises) {
	            var priorities = [];
	            var routePromisesPrioritizedGroups = [];
	            routePromises.forEach(function (promise) {
	                if (priorities.indexOf(promise.priority) < 0)
	                    priorities.push(promise.priority);
	            });
	            priorities.forEach(function (priority, index) {
	                routePromisesPrioritizedGroups.push({
	                    promises: routePromises.filter(function (promise) { return promise.priority == priority; }),
	                    priority: priority,
	                    isLast: index == priorities.length - 1
	                });
	            });
	            return routePromisesPrioritizedGroups;
	        };
	        /**
	         * Invoke the grouped promises. Reducing the results into the resolvedRouteData object
	         * If the route promise inside the group has a key defined, the result will be attached to the
	         * resolved object (routeData) using that key
	         * After you reach the last group, call the callback that will resolve the object that
	         * will have a key value dictionary with the results of any promises with a key defined
	         */
	        this.invoke = function ($injector, $q, groups, currentGroupIndex, callback, resolvedRouteData) {
	            var excutedPromises = [];
	            var currentGroup = groups[currentGroupIndex];
	            currentGroup.promises.forEach(function (statePromise) {
	                excutedPromises.push($injector.invoke(statePromise.promise));
	            });
	            $q.all(excutedPromises).then(function (results) {
	                results.forEach(function (result, index) {
	                    if (currentGroup.promises[index].key)
	                        resolvedRouteData[currentGroup.promises[index].key] = results[index];
	                });
	                currentGroup.isLast ? callback() : _this.invoke($injector, $q, groups, currentGroupIndex + 1, callback, resolvedRouteData);
	            });
	        };
	    }
	    Object.defineProperty(RouteResolverServiceProvider.prototype, "routePromises", {
	        /**
	         * get route promises ordered by priority (ASC)
	         * priority 1 runs before priority 10
	         */
	        get: function () {
	            return this._routePromises.sort(function (a, b) {
	                return a.priority - b.priority;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteResolverServiceProvider;
	}());
	angular.module("routeResolver", [])
	    .provider("routeResolverService", [RouteResolverServiceProvider]);


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	var routeConfigs = [];
	angular.module("routeWhenExtension", ["ngRoute"])
	    .config(["$routeProvider", function ($routeProvider) {
	        var whenFn = $routeProvider.when;
	        function getTemplateUrlFromComponentName(options) {
	            if (options.componentName.length > 9) {
	                if (options.componentName.substr(options.componentName.length - 9) === "Component") {
	                    var componentTemplateFileName = options.componentName.substr(0, options.componentName.length - 9) + ".html";
	                    return "/wwwroot/components/" + componentTemplateFileName;
	                }
	            }
	            return "";
	        }
	        $routeProvider.when = function () {
	            if (arguments[1] && arguments[0]) {
	                var routeName_1 = arguments[0];
	                var routeTemplate_1 = arguments[1].template;
	                arguments[1].caseInsensitiveMatch = true;
	                arguments[1].templateUrl = arguments[1].componentTemplateUrl || arguments[1].templateUrl;
	                arguments[1].controller = arguments[1].componentName || arguments[1].controller;
	                arguments[1].controllerAs = "vm";
	                arguments[1].reloadOnSearch = arguments[1].reloadOnSearch || false;
	                if (arguments[1].componentName && !arguments[1].templateUrl)
	                    arguments[1].templateUrl = getTemplateUrlFromComponentName({
	                        moduleName: arguments[1].moduleName,
	                        componentName: arguments[1].componentName
	                    });
	                arguments[1].resolve = arguments[1].resolve || {};
	                angular.extend(arguments[1].resolve, {
	                    routeData: [
	                        "routeResolverService", function (routeResolverService) { return routeResolverService.resolve({ routeName: routeName_1, routeTemplate: routeTemplate_1 }); }
	                    ]
	                });
	            }
	            routeConfigs.push({
	                when: arguments[0],
	                config: arguments[1]
	            });
	            whenFn.apply($routeProvider, arguments);
	            return $routeProvider;
	        };
	    }]);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Rectangle = (function () {
	    function Rectangle() {
	        this.createInstance = function (options) {
	            var instance = new Rectangle();
	            if (options.clientRect) {
	                instance.left = options.clientRect.left;
	                instance.top = options.clientRect.top;
	                instance.height = options.clientRect.height;
	                instance.width = options.clientRect.width;
	            }
	            else {
	                instance.left = options.left;
	                instance.top = options.top;
	                instance.height = options.height;
	                instance.width = options.width;
	            }
	            return instance;
	        };
	    }
	    Object.defineProperty(Rectangle.prototype, "right", {
	        get: function () { return this.left + this.width; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "bottom", {
	        get: function () { return this.top + this.height; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "centerX", {
	        get: function () { return this.left + (this.width / 2); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "centerY", {
	        get: function () { return this.top + (this.height / 2); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "radiusX", {
	        get: function () { return this.width / 2; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "radiusY", {
	        get: function () { return this.height / 2; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "middle", {
	        get: function () { return { x: this.centerX, y: this.centerY }; },
	        enumerable: true,
	        configurable: true
	    });
	    Rectangle = __decorate([
	        core_1.Service({
	            serviceName: "rectangle"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Rectangle);
	    return Rectangle;
	}());
	exports.Rectangle = Rectangle;
	var app = angular.module("rectangle", []);
	core_1.provide(app, Rectangle);


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Ruler = (function () {
	    function Ruler($document, $q, $timeout, rectangle) {
	        var _this = this;
	        this.$document = $document;
	        this.$q = $q;
	        this.$timeout = $timeout;
	        this.rectangle = rectangle;
	        this.measure = function (options) {
	            if (options.element)
	                return _this.measureHtmlElement(options.element);
	            return _this.$q.all(options.elements.map(function (x) { return _this.measureHtmlElement(x); }));
	        };
	        this.measureHtmlElement = function (element) {
	            var deferred = _this.$q.defer();
	            var documentRef = angular.element(_this.$document)[0];
	            if (documentRef.body.contains(element)) {
	                deferred.resolve(_this.rectangle.createInstance({ clientRect: element.getBoundingClientRect() }));
	            }
	            else {
	                _this.$timeout(function () {
	                    documentRef.body.appendChild(element);
	                    var clientRect = element.getBoundingClientRect();
	                    element.parentNode.removeChild(element);
	                    deferred.resolve(_this.rectangle.createInstance({ clientRect: clientRect }));
	                }, 0, false);
	            }
	            return deferred.promise;
	        };
	    }
	    Ruler = __decorate([
	        core_1.Service({
	            serviceName: "ruler",
	            viewProviders: ["$document", "$q", "$timeout", "rectangle"]
	        }), 
	        __metadata('design:paramtypes', [Object, Function, Function, Object])
	    ], Ruler);
	    return Ruler;
	}());
	exports.Ruler = Ruler;
	var app = angular.module("ruler", [
	    "rectangle",
	]);
	core_1.provide(app, Ruler);


/***/ },
/* 53 */
/***/ function(module, exports) {

	angular.module("safeDigest", []).value("safeDigest", function (scope) {
	    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
	        scope.$digest();
	});


/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.setOpacityAsync = function (options) {
	    var deferred = $q.defer();
	    if (options.nativeHtmlElement) {
	        options.nativeHtmlElement.style.opacity = options.opacity;
	        options.nativeHtmlElement.addEventListener('transitionend', resolve, false);
	    }
	    function resolve() {
	        options.nativeHtmlElement.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("setOpacityAsync", []).value("setOpacityAsync", exports.setOpacityAsync);


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Space = (function () {
	    function Space() {
	        this.above = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.below = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.left = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.right = function (spaceNeed, rectangle) {
	            return false;
	        };
	    }
	    Space = __decorate([
	        core_1.Service({
	            serviceName: "space"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Space);
	    return Space;
	}());
	exports.Space = Space;
	var app = angular.module("space", []);
	core_1.provide(app, Space);


/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.translateXAsync = function (options) {
	    var deferred = $q.defer();
	    angular.element(options.element).css({
	        "-moz-transform": "translateX(" + options.x + "px)",
	        "-webkit-transform": "translateX(" + options.x + "px)",
	        "-ms-transform": "translateX(" + options.x + "px)",
	        "-transform": "translateX(" + options.x + "px)"
	    });
	    options.element.addEventListener('transitionend', resolve, false);
	    function resolve() {
	        options.element.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("translateXAsync", []).value("translateXAsync", exports.translateXAsync);


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Template = (function () {
	    function Template($http, $q, $templateCache) {
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.$templateCache = $templateCache;
	        this.get = function (options) {
	            var deferred = _this.$q.defer();
	            var cacheResult = _this.$templateCache.get(options.templateUrl);
	            if (cacheResult) {
	                if (Array.isArray(cacheResult))
	                    deferred.resolve(cacheResult[1]);
	                deferred.resolve(cacheResult);
	                return deferred.promise;
	            }
	            _this.$http.get(options.templateUrl, { cache: _this.$templateCache }).then(function (response) {
	                deferred.resolve(response.data);
	            });
	            return deferred.promise;
	        };
	    }
	    Template = __decorate([
	        core_1.Service({
	            serviceName: "template",
	            viewProviders: ["$http", "$q", "$templateCache"]
	        }), 
	        __metadata('design:paramtypes', [Function, Function, Object])
	    ], Template);
	    return Template;
	}());
	exports.Template = Template;
	var app = angular.module("template", []);
	core_1.provide(app, Template);


/***/ },
/* 58 */
/***/ function(module, exports) {

	angular.module("formEncode", []).value("formEncode", function (data) {
	    var pairs = [];
	    for (var name in data) {
	        pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	    }
	    return pairs.join('&').replace(/%20/g, '+');
	});


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var ads_component_1 = __webpack_require__(60);
	var ads_action_creator_1 = __webpack_require__(64);
	var reducers = __webpack_require__(67);
	var actions = __webpack_require__(68);
	var app = angular.module("app.ads", [
	    "app.core"
	]);
	core_1.provide(app, ads_action_creator_1.AdsActionCreator);
	app.component(ads_component_1.AdsComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var AdsComponent = (function () {
	    function AdsComponent() {
	    }
	    AdsComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(61),
	            styles: [__webpack_require__(62)],
	            selector: "ads",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdsComponent);
	    return AdsComponent;
	}());
	exports.AdsComponent = AdsComponent;


/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ads\">\r\n\r\n</div>\r\n"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ads.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./ads.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var AdsActionCreator = (function () {
	    function AdsActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    AdsActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "adsActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], AdsActionCreator);
	    return AdsActionCreator;
	}());
	exports.AdsActionCreator = AdsActionCreator;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var modal_actions_1 = __webpack_require__(66);
	var core_1 = __webpack_require__(6);
	var ModalActionCreator = (function () {
	    function ModalActionCreator($rootScope, dispatcher) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dispatcher = dispatcher;
	        this.open = function (options) { return _this.dispatcher.dispatch(new modal_actions_1.OpenModalAction(options.html)); };
	        this.close = function () { return _this.dispatcher.dispatch(new modal_actions_1.CloseModalAction()); };
	        $rootScope.$on("$routeChangeSuccess", this.close);
	    }
	    ModalActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "modalActionCreator",
	            viewProviders: ["$rootScope", "dispatcher"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], ModalActionCreator);
	    return ModalActionCreator;
	}());
	exports.ModalActionCreator = ModalActionCreator;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var OpenModalAction = (function () {
	    function OpenModalAction(html) {
	        this.html = html;
	    }
	    OpenModalAction = __decorate([
	        core_1.Action({
	            type: "modal.openModalAction"
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], OpenModalAction);
	    return OpenModalAction;
	}());
	exports.OpenModalAction = OpenModalAction;
	var CloseModalAction = (function () {
	    function CloseModalAction() {
	    }
	    CloseModalAction = __decorate([
	        core_1.Action({
	            type: "modal.closeModalAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CloseModalAction);
	    return CloseModalAction;
	}());
	exports.CloseModalAction = CloseModalAction;


/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(6);
	__webpack_require__(70);
	__webpack_require__(91);
	__webpack_require__(103);
	__webpack_require__(115);
	__webpack_require__(131);
	var core_1 = __webpack_require__(6);
	var article_detail_component_1 = __webpack_require__(139);
	var article_header_component_1 = __webpack_require__(143);
	var article_list_component_1 = __webpack_require__(147);
	var article_list_item_component_1 = __webpack_require__(151);
	var article_editor_container_component_1 = __webpack_require__(155);
	var article_editor_component_1 = __webpack_require__(162);
	var article_service_1 = __webpack_require__(166);
	var article_action_creator_1 = __webpack_require__(157);
	var reducers = __webpack_require__(167);
	var actions = __webpack_require__(156);
	var app = angular.module("app.article", [
	    "ngSanitize",
	    "app.core",
	    "app.author",
	    "app.category",
	    "app.socialShare",
	    "app.tabs",
	    "app.tag",
	    "ui.tinymce"
	]);
	core_1.provide(app, article_action_creator_1.ArticleActionCreator);
	core_1.provide(app, article_service_1.ArticleService);
	app.component(article_detail_component_1.ArticleDetailComponent);
	app.component(article_header_component_1.ArticleHeaderComponent);
	app.component(article_list_component_1.ArticleListComponent);
	app.component(article_list_item_component_1.ArticleListItemComponent);
	app.component(article_editor_component_1.ArticleEditorComponent);
	app.component(article_editor_container_component_1.ArticleEditorContainerComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	__export(__webpack_require__(139));
	__export(__webpack_require__(143));
	__export(__webpack_require__(147));
	__export(__webpack_require__(151));
	__export(__webpack_require__(155));
	__export(__webpack_require__(162));


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var author_editor_component_1 = __webpack_require__(71);
	var author_picker_modal_component_1 = __webpack_require__(75);
	var author_list_component_1 = __webpack_require__(81);
	var author_component_1 = __webpack_require__(85);
	var author_action_creator_1 = __webpack_require__(76);
	var author_service_1 = __webpack_require__(89);
	var reducers = __webpack_require__(90);
	var core_1 = __webpack_require__(6);
	var app = angular.module("app.author", [
	    "app.core"
	]);
	core_1.provide(app, author_action_creator_1.AuthorActionCreator);
	core_1.provide(app, author_service_1.AuthorService);
	app.component(author_editor_component_1.AuthorEditorComponent);
	app.component(author_list_component_1.AuthorListComponent);
	app.component(author_component_1.AuthorComponent);
	app.component(author_picker_modal_component_1.AuthorPickerModalComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var AuthorEditorComponent = (function () {
	    function AuthorEditorComponent() {
	    }
	    AuthorEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(72),
	            styles: [__webpack_require__(73)],
	            selector: "author-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AuthorEditorComponent);
	    return AuthorEditorComponent;
	}());
	exports.AuthorEditorComponent = AuthorEditorComponent;


/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<div class=\"authorEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Author <span data-ng-if=\"vm.entity.firstName.length > 0 || vm.entity.lastName.length > 0\">: {{ vm.entity.firstname }} {{ vm.entity.lastname }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Author: {{ vm.entity.firstName }} {{ vm.entity.lastName }}</h1>\r\n\r\n    <tabs tabs-name=\"author-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Author First Name\" data-ng-model=\"vm.entity.firstName\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Author Last Name\" data-ng-model=\"vm.entity.lastName\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></button>\r\n\r\n        <button on-click=\"vm.create()\" caption=\"Create\"></button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var author_action_creator_1 = __webpack_require__(76);
	var AuthorPickerModalComponent = (function () {
	    function AuthorPickerModalComponent(authorActionCreator) {
	        var _this = this;
	        this.authorActionCreator = authorActionCreator;
	        this.storeOnChange = function (state) {
	            _this.entities = state.authors;
	        };
	        this.select = function (entity) {
	            _this.authorActionCreator.select(entity);
	            _this.close();
	        };
	        this.close = function () { return _this.authorActionCreator.closeModal(); };
	    }
	    AuthorPickerModalComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(78),
	            styles: __webpack_require__(79),
	            selector: "author-picker-modal",
	            viewProviders: ["authorActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [author_action_creator_1.AuthorActionCreator])
	    ], AuthorPickerModalComponent);
	    return AuthorPickerModalComponent;
	}());
	exports.AuthorPickerModalComponent = AuthorPickerModalComponent;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var action_creator_1 = __webpack_require__(22);
	var modal_action_creator_1 = __webpack_require__(65);
	var author_actions_1 = __webpack_require__(77);
	var AuthorActionCreator = (function (_super) {
	    __extends(AuthorActionCreator, _super);
	    function AuthorActionCreator($location, dispatcher, authorService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, authorService, dispatcher, guid, author_actions_1.AddOrUpdateAuthorAction, author_actions_1.AllAuthorsAction, author_actions_1.RemoveAuthorAction, author_actions_1.SetCurrentAuthorAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new author_actions_1.AddOrUpdateAuthorSuccessAction(options.entity)); };
	        this.currentAuthorRemoved = function () { return _this.dispatcher.dispatch(new author_actions_1.CurrentAuthorRemovedAction()); };
	        this.openAuthorPickerModal = function () {
	            _this.invokeAsync(_this.all)
	                .then(function () { return _this.modalActionCreator.open({ html: "<author-picker-modal></author-picker-modal>" }); });
	        };
	        this.closeModal = function () { return _this.modalActionCreator.close(); };
	        this.select = function (entity) { return _this.dispatcher.dispatch(new author_actions_1.SelectAuthorAction(entity)); };
	    }
	    AuthorActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "authorActionCreator",
	            viewProviders: ["$location", "dispatcher", "authorService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], AuthorActionCreator);
	    return AuthorActionCreator;
	}(action_creator_1.BaseActionCreator));
	exports.AuthorActionCreator = AuthorActionCreator;


/***/ },
/* 77 */
/***/ function(module, exports) {

	"use strict";
	var SelectAuthorAction = (function () {
	    function SelectAuthorAction(entity) {
	        this.entity = entity;
	    }
	    return SelectAuthorAction;
	}());
	exports.SelectAuthorAction = SelectAuthorAction;
	var AddOrUpdateAuthorAction = (function () {
	    function AddOrUpdateAuthorAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateAuthorAction;
	}());
	exports.AddOrUpdateAuthorAction = AddOrUpdateAuthorAction;
	var AllAuthorsAction = (function () {
	    function AllAuthorsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllAuthorsAction;
	}());
	exports.AllAuthorsAction = AllAuthorsAction;
	var RemoveAuthorAction = (function () {
	    function RemoveAuthorAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveAuthorAction;
	}());
	exports.RemoveAuthorAction = RemoveAuthorAction;
	var AuthorsFilterAction = (function () {
	    function AuthorsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return AuthorsFilterAction;
	}());
	exports.AuthorsFilterAction = AuthorsFilterAction;
	var SetCurrentAuthorAction = (function () {
	    function SetCurrentAuthorAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentAuthorAction;
	}());
	exports.SetCurrentAuthorAction = SetCurrentAuthorAction;
	var AddOrUpdateAuthorSuccessAction = (function () {
	    function AddOrUpdateAuthorSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateAuthorSuccessAction;
	}());
	exports.AddOrUpdateAuthorSuccessAction = AddOrUpdateAuthorSuccessAction;
	var CurrentAuthorRemovedAction = (function () {
	    function CurrentAuthorRemovedAction() {
	    }
	    return CurrentAuthorRemovedAction;
	}());
	exports.CurrentAuthorRemovedAction = CurrentAuthorRemovedAction;


/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div class=\"author-picker-modal\">\r\n    <modal>\r\n\r\n        <modal-title>Author Picker Modal</modal-title>\r\n\r\n        <modal-content>\r\n\r\n            <h1>Select Author</h1>\r\n\r\n            <div data-ng-repeat=\"entity in vm.entities\" data-ng-click=\"vm.select(entity)\">\r\n                <h1>{{ ::entity.firstName }} {{ ::entity.lastName }}</h1>\r\n            </div>\r\n\r\n        </modal-content>\r\n\r\n    </modal>\r\n\r\n</div>"

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-picker-modal.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-picker-modal.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var AuthorListComponent = (function () {
	    function AuthorListComponent() {
	    }
	    AuthorListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(82),
	            styles: [__webpack_require__(83)],
	            selector: "author-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AuthorListComponent);
	    return AuthorListComponent;
	}());
	exports.AuthorListComponent = AuthorListComponent;


/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<div class=\"authorList\">\r\n    <div class=\"authorList-header\">\r\n        <h1>Authors</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"authorList-item\">\r\n        <div class=\"authorList-name\">\r\n            {{ entity.fullName }}\r\n        </div>\r\n        <div class=\"authorList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".authorList-name,\n.authorList-actions {\n  position: relative;\n  float: left; }\n\n.authorList-name {\n  min-width: 200px; }\n\n.authorList-item {\n  height: 50px; }\n\n.authorList-actions {\n  text-transform: uppercase; }\n\n.authorList-actions span {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var author_action_creator_1 = __webpack_require__(76);
	var AuthorComponent = (function () {
	    function AuthorComponent(authorActionCreator) {
	        this.authorActionCreator = authorActionCreator;
	    }
	    AuthorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(86),
	            styles: __webpack_require__(87),
	            selector: "author",
	            viewProviders: ["authorActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [author_action_creator_1.AuthorActionCreator])
	    ], AuthorComponent);
	    return AuthorComponent;
	}());
	exports.AuthorComponent = AuthorComponent;


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = ""

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./author.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var AuthorService = (function (_super) {
	    __extends(AuthorService, _super);
	    function AuthorService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(AuthorService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/author"; },
	        enumerable: true,
	        configurable: true
	    });
	    AuthorService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "authorService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], AuthorService);
	    return AuthorService;
	}(core_1.BaseService));
	exports.AuthorService = AuthorService;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(77);
	var core_1 = __webpack_require__(6);
	exports.removeAuthorReducer = function (state, action) {
	    if (action instanceof actions.RemoveAuthorAction)
	        core_1.pluckOut({ items: state.authors, value: action.entity.id });
	    return state;
	};
	exports.addAuthorReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateAuthorAction) {
	        core_1.addOrUpdate({ items: state.authors, item: action.entity });
	    }
	    return state;
	};
	exports.allAuthorsReducer = function (state, action) {
	    if (action instanceof actions.AllAuthorsAction) {
	        state.authors = action.entities;
	    }
	    return state;
	};
	exports.setCurrentAuthorReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentAuthorAction) {
	        state.currentAuthorId = action.id;
	    }
	    return state;
	};


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var category_list_component_1 = __webpack_require__(92);
	var category_list_for_item_component_1 = __webpack_require__(96);
	var category_action_creator_1 = __webpack_require__(100);
	var reducers = __webpack_require__(101);
	var actions = __webpack_require__(102);
	var app = angular.module("app.category", [
	    "app.core"
	]);
	core_1.provide(app, category_action_creator_1.CategoryActionCreator);
	app.component(category_list_component_1.CategoryListComponent);
	app.component(category_list_for_item_component_1.CategoryListForItemComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var CategoryListComponent = (function () {
	    function CategoryListComponent() {
	    }
	    CategoryListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(93),
	            styles: [__webpack_require__(94)],
	            selector: "category-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CategoryListComponent);
	    return CategoryListComponent;
	}());
	exports.CategoryListComponent = CategoryListComponent;


/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"category-list\">\r\n\r\n</div>\r\n"

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var CategoryListForItemComponent = (function () {
	    function CategoryListForItemComponent() {
	    }
	    CategoryListForItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(97),
	            styles: [__webpack_require__(98)],
	            selector: "category-list-for-item",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CategoryListForItemComponent);
	    return CategoryListForItemComponent;
	}());
	exports.CategoryListForItemComponent = CategoryListForItemComponent;


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<div class=\"category-list-for-item\">\r\n\r\n</div>\r\n"

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(99);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category-list-for-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./category-list-for-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var CategoryActionCreator = (function () {
	    function CategoryActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    CategoryActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "categoryActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], CategoryActionCreator);
	    return CategoryActionCreator;
	}());
	exports.CategoryActionCreator = CategoryActionCreator;


/***/ },
/* 101 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 102 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var social_share_component_1 = __webpack_require__(104);
	var social_share_item_component_1 = __webpack_require__(108);
	var social_share_action_creator_1 = __webpack_require__(112);
	var reducers = __webpack_require__(113);
	var actions = __webpack_require__(114);
	var app = angular.module("app.socialShare", [
	    "app.core"
	]);
	core_1.provide(app, social_share_action_creator_1.SocialShareActionCreator);
	app.component(social_share_component_1.SocialShareComponent);
	app.component(social_share_item_component_1.SocialShareItemComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var SocialShareComponent = (function () {
	    function SocialShareComponent() {
	    }
	    SocialShareComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(105),
	            styles: [__webpack_require__(106)],
	            selector: "social-share",
	            inputs: ["socialShareItems"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareComponent);
	    return SocialShareComponent;
	}());
	exports.SocialShareComponent = SocialShareComponent;


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = "<div class=\"social-share\">\r\n    <social-share-item data-ng-repeat=\"item in vm.socialShareItems\"\r\n                       url=\"{{ ::item.url }}\" \r\n                       label=\"{{ ::item.label }}\" \r\n                       src=\"{{ ::item.src }}\"\r\n                       src-hover=\"{{ ::item.srcHover }}\">\r\n    </social-share-item>\r\n</div>\r\n"

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(107);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var SocialShareItemComponent = (function () {
	    function SocialShareItemComponent($element, $window, setElementBackgroundImage) {
	        var _this = this;
	        this.$element = $element;
	        this.$window = $window;
	        this.setElementBackgroundImage = setElementBackgroundImage;
	        this.ngOnInit = function () { return _this.setElementBackgroundImage(_this.$socialShareIconAugmentedJQuery, _this.src); };
	        this.onClick = function () { return _this.$window.open(_this.url, "_blank"); };
	        this.onMouseover = function () { return _this.setElementBackgroundImage(_this.$socialShareIconAugmentedJQuery, _this.srcHover); };
	        this.onMouseleave = function () { return _this.setElementBackgroundImage(_this.$socialShareIconAugmentedJQuery, _this.src); };
	    }
	    Object.defineProperty(SocialShareItemComponent.prototype, "$socialShareIconAugmentedJQuery", {
	        get: function () { return this.$element.find(".social-share-item-icon"); },
	        enumerable: true,
	        configurable: true
	    });
	    SocialShareItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(109),
	            styles: [__webpack_require__(110)],
	            selector: "social-share-item",
	            inputs: ["@src", "@label", "@url", "@srcHover"],
	            viewProviders: ["$element", "$window", "setElementBackgroundImage"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], SocialShareItemComponent);
	    return SocialShareItemComponent;
	}());
	exports.SocialShareItemComponent = SocialShareItemComponent;


/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "<div class=\"social-share-item\" data-ng-click=\"vm.onClick()\" data-ng-mouseover=\"vm.onMouseover()\" data-ng-mouseleave=\"vm.onMouseleave()\">\r\n    <a aria-label=\"{{ ::vm.label }}\">\r\n        <span class=\"social-share-item-icon\"></span>\r\n        <span class=\"social-share-item-label\">\r\n            {{ ::vm.label }}\r\n        </span>\r\n    </a>\r\n</div>\r\n"

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".social-share-item {\n  height: 40px;\n  width: 40px;\n  box-sizing: border-box;\n  display: inline-block;\n  cursor: pointer; }\n  .social-share-item a {\n    display: block;\n    height: 100%;\n    text-align: center;\n    width: 100%; }\n\n.social-share-item-label {\n  display: none; }\n\n.social-share-item-icon {\n  height: 15px;\n  width: 15px;\n  display: inline-block;\n  margin: 12px 0 0 0; }\n", ""]);

	// exports


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var SocialShareActionCreator = (function () {
	    function SocialShareActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    SocialShareActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "socialShareActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], SocialShareActionCreator);
	    return SocialShareActionCreator;
	}());
	exports.SocialShareActionCreator = SocialShareActionCreator;


/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 114 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var tab_content_component_1 = __webpack_require__(116);
	var tab_title_component_1 = __webpack_require__(122);
	var tabs_component_1 = __webpack_require__(126);
	var tabs_action_creator_1 = __webpack_require__(117);
	var reducers = __webpack_require__(130);
	var core_1 = __webpack_require__(6);
	var app = angular.module("app.tabs", [
	    "app.core"
	]);
	core_1.provide(app, tabs_action_creator_1.TabsActionCreator);
	app.component(tab_content_component_1.TabContentComponent);
	app.component(tab_title_component_1.TabTitleComponent);
	app.component(tabs_component_1.TabsComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        reducersProvider.configure(reducers.setCurrentTabReducer);
	        reducersProvider.configure(reducers.tabChildLoadedReducer);
	    }]);
	app.config(["initialStateProvider", "localStorageManagerProvider", function (initialStateProvider, localStorageManagerProvider) {
	        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
	        if (!localStorageInitialState)
	            localStorageManagerProvider.put({
	                name: "initialState", value: {
	                    tabIndex: {}
	                }
	            });
	        var initialState = localStorageManagerProvider.get({ name: "initialState" });
	        initialState.tabIndex = initialState.tabIndex || {};
	        initialStateProvider.configure(initialState);
	    }]);


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var tabs_action_creator_1 = __webpack_require__(117);
	var TabContentComponent = (function () {
	    function TabContentComponent(_tabsActionCreator) {
	        var _this = this;
	        this._tabsActionCreator = _tabsActionCreator;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { return _this._tabsActionCreator.tabChildLoaded(); };
	    }
	    TabContentComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(119),
	            styles: [__webpack_require__(120)],
	            selector: "tab-content",
	            transclude: true,
	            viewProviders: ["tabsActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [tabs_action_creator_1.TabsActionCreator])
	    ], TabContentComponent);
	    return TabContentComponent;
	}());
	exports.TabContentComponent = TabContentComponent;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var tabs_actions_1 = __webpack_require__(118);
	var TabsActionCreator = (function () {
	    function TabsActionCreator(dispatcher) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.setCurrentTab = function (options) { return _this.dispatcher.dispatch(new tabs_actions_1.SetCurrentTabAction(options.tabName, options.index)); };
	        this.tabChildLoaded = function () { return _this.dispatcher.dispatch(new tabs_actions_1.TabChildLoadedAction()); };
	    }
	    TabsActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "tabsActionCreator",
	            viewProviders: ["dispatcher"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], TabsActionCreator);
	    return TabsActionCreator;
	}());
	exports.TabsActionCreator = TabsActionCreator;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var TabChildLoadedAction = (function () {
	    function TabChildLoadedAction() {
	    }
	    TabChildLoadedAction = __decorate([
	        core_1.Action({
	            type: "tabs.tabChildLoadedAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TabChildLoadedAction);
	    return TabChildLoadedAction;
	}());
	exports.TabChildLoadedAction = TabChildLoadedAction;
	var SetCurrentTabAction = (function () {
	    function SetCurrentTabAction(tabName, index) {
	        this.tabName = tabName;
	        this.index = index;
	    }
	    SetCurrentTabAction = __decorate([
	        core_1.Action({
	            type: "tabs.setCurrentTabAction"
	        }), 
	        __metadata('design:paramtypes', [String, Number])
	    ], SetCurrentTabAction);
	    return SetCurrentTabAction;
	}());
	exports.SetCurrentTabAction = SetCurrentTabAction;


/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tab-content\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tab-content.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tab-content.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".tab-content {\n  min-height: 200px; }\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var tabs_action_creator_1 = __webpack_require__(117);
	var TabTitleComponent = (function () {
	    function TabTitleComponent($attrs, tabsActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.tabsActionCreator = tabsActionCreator;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { return _this.tabsActionCreator.tabChildLoaded(); };
	        this.onTabTitleClick = function () {
	            _this.tabsActionCreator.setCurrentTab({
	                tabName: _this.$attrs.$$element[0].getAttribute("tabs-name"),
	                index: _this.$attrs.$$element[0].getAttribute("index")
	            });
	        };
	    }
	    TabTitleComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(123),
	            styles: [__webpack_require__(124)],
	            selector: "tab-title",
	            transclude: true,
	            viewProviders: ["$attrs", "tabsActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, tabs_action_creator_1.TabsActionCreator])
	    ], TabTitleComponent);
	    return TabTitleComponent;
	}());
	exports.TabTitleComponent = TabTitleComponent;


/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "<h2 ng-click=\"vm.onTabTitleClick()\" class=\"tab-title\" ng-transclude></h2>"

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tab-title.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tab-title.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".tab-title {\n  display: inline-block;\n  font-weight: 100;\n  padding-right: 20px;\n  padding-left: 20px;\n  line-height: 3em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  cursor: pointer; }\n\n.tab-title.tabs-titleselected {\n  font-weight: 800; }\n", ""]);

	// exports


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var tabs_action_creator_1 = __webpack_require__(117);
	var tabs_actions_1 = __webpack_require__(118);
	var TabsComponent = (function () {
	    function TabsComponent($attrs, $element, tabsActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.tabsActionCreator = tabsActionCreator;
	        this.storeOnChange = function (state) {
	            _this.currentIndex = state.tabIndex[_this.$attrs["tabsName"]] || 0;
	            if (state.lastTriggeredByAction === tabs_actions_1.SetCurrentTabAction) {
	                _this.updateCurrentTab();
	            }
	            if (state.lastTriggeredByAction === tabs_actions_1.TabChildLoadedAction) {
	                _this._titleElements = angular.element(_this.$element[0].querySelectorAll('.tab-title'));
	                _this._contentElements = angular.element(_this.$element[0].querySelectorAll('.tab-content'));
	                for (var i = 0; i < _this.titleElements.length; i++) {
	                    _this.titleElements[i].setAttribute("index", i.toString());
	                    _this.titleElements[i].setAttribute("tabs-name", _this.$attrs["tabsName"]);
	                }
	                _this.updateCurrentTab();
	            }
	        };
	        this.updateCurrentTab = function () {
	            for (var i = 0; i < _this.titleElements.length; i++) {
	                if (i != _this.currentIndex) {
	                    _this.titleElements[i].classList.remove("tabs-titleselected");
	                }
	                else {
	                    _this.titleElements[i].classList.add("tabs-titleselected");
	                }
	            }
	            for (var i = 0; i < _this.contentElements.length; i++) {
	                if (i != _this.currentIndex) {
	                    _this.contentElements[i].classList.add("tabs-contentInActive");
	                }
	                else {
	                    _this.contentElements[i].classList.remove("tabs-contentInActive");
	                }
	            }
	        };
	        this.currentIndex = 0;
	    }
	    Object.defineProperty(TabsComponent.prototype, "titleElements", {
	        get: function () { return this._titleElements; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TabsComponent.prototype, "contentElements", {
	        get: function () { return this._contentElements; },
	        enumerable: true,
	        configurable: true
	    });
	    TabsComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(127),
	            styles: [__webpack_require__(128)],
	            selector: "tabs",
	            transclude: {
	                'title': '?tabTitle',
	                'content': '?tabContent'
	            },
	            viewProviders: [
	                '$attrs',
	                '$element',
	                'tabsActionCreator'
	            ]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, tabs_action_creator_1.TabsActionCreator])
	    ], TabsComponent);
	    return TabsComponent;
	}());
	exports.TabsComponent = TabsComponent;


/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tabs\">\r\n    <div ng-transclude=\"title\"></div>\r\n    <div ng-transclude=\"content\"></div>\r\n</div>"

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tabs.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tabs.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".tabs-contentInActive {\n  display: none; }\n", ""]);

	// exports


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var tabs_actions_1 = __webpack_require__(118);
	exports.setCurrentTabReducer = function (state, action) {
	    if (action instanceof tabs_actions_1.SetCurrentTabAction) {
	        state.tabIndex[action.tabName] = action.index;
	        state.lastTriggeredByAction = tabs_actions_1.SetCurrentTabAction;
	    }
	    return state;
	};
	exports.tabChildLoadedReducer = function (state, action) {
	    if (action instanceof tabs_actions_1.TabChildLoadedAction)
	        state.lastTriggeredByAction = tabs_actions_1.TabChildLoadedAction;
	    return state;
	};


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var tag_list_component_1 = __webpack_require__(132);
	var tag_action_creator_1 = __webpack_require__(136);
	var reducers = __webpack_require__(137);
	var actions = __webpack_require__(138);
	var app = angular.module("app.tag", [
	    "app.core"
	]);
	core_1.provide(app, tag_action_creator_1.TagActionCreator);
	app.component(tag_list_component_1.TagListComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var TagListComponent = (function () {
	    function TagListComponent() {
	    }
	    TagListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(133),
	            styles: [__webpack_require__(134)],
	            selector: "tag-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["tags"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TagListComponent);
	    return TagListComponent;
	}());
	exports.TagListComponent = TagListComponent;


/***/ },
/* 133 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tag-list\">\r\n    <ul>\r\n        <li data-ng-repeat=\"tag in vm.tags\">\r\n            <a data-ng-href=\"{{ ::tag.href }}\">{{ ::tag.name}}</a>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tag-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./tag-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var TagActionCreator = (function () {
	    function TagActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    TagActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "tagActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], TagActionCreator);
	    return TagActionCreator;
	}());
	exports.TagActionCreator = TagActionCreator;


/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleDetailComponent = (function () {
	    function ArticleDetailComponent() {
	    }
	    ArticleDetailComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(140),
	            styles: [__webpack_require__(141)],
	            selector: "article-detail",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["article"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleDetailComponent);
	    return ArticleDetailComponent;
	}());
	exports.ArticleDetailComponent = ArticleDetailComponent;


/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-detail\">\r\n    <img data-ng-src=\"vm.article.featuredImage.url\" />\r\n    \r\n    <article-header article-title=\"vm.article.title\"\r\n                    article-href=\"vm.article.slug\"\r\n                    article-published-date=\"vm.article.publishedDate\">\r\n    </article-header>\r\n\r\n    <div data-ng-bind-html=\"vm.article.body\"></div>\r\n</div>\r\n"

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-detail.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-detail.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleHeaderComponent = (function () {
	    function ArticleHeaderComponent() {
	    }
	    ArticleHeaderComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(144),
	            styles: [__webpack_require__(145)],
	            selector: "article-header",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: [
	                "@articleTitle",
	                "@articleHref",
	                "@articlePublishedDate"
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleHeaderComponent);
	    return ArticleHeaderComponent;
	}());
	exports.ArticleHeaderComponent = ArticleHeaderComponent;


/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-header\">\r\n    <a>\r\n        {{ vm.articlePublishedDate }}\r\n    </a>\r\n    <a class=\"blog-header\" data-ng-href=\"{{ vm.articleHeaderHref }}\">\r\n        <h2>{{ vm.articleTitle }}</h2>\r\n    </a>\r\n</div>\r\n"

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-header.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-header.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleListComponent = (function () {
	    function ArticleListComponent() {
	    }
	    ArticleListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(148),
	            styles: [__webpack_require__(149)],
	            selector: "article-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["articles"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleListComponent);
	    return ArticleListComponent;
	}());
	exports.ArticleListComponent = ArticleListComponent;


/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-list\">\r\n    <div>\r\n        <article-list-item data-ng-repeat=\"article in vm.articles\" article=\"article\"></article-list-item>\r\n    </div>\r\n    <div>\r\n        <a>Show More</a>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleListItemComponent = (function () {
	    function ArticleListItemComponent() {
	    }
	    ArticleListItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(152),
	            styles: [__webpack_require__(153)],
	            selector: "article-list-item",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleListItemComponent);
	    return ArticleListItemComponent;
	}());
	exports.ArticleListItemComponent = ArticleListItemComponent;


/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-list-item\">\r\n\r\n    <img data-ng-src=\"vm.article.promoImage.url\" />\r\n\r\n    <article-header></article-header>\r\n\r\n    <div data-ng-bind-html=\"vm.article.excerpt\">\r\n\r\n    </div>\r\n\r\n    <article-author></article-author>\r\n\r\n    <category-list-for-item categories=\"vm.article.categories\"></category-list-for-item>\r\n\r\n</div>\r\n"

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var actions = __webpack_require__(156);
	var article_action_creator_1 = __webpack_require__(157);
	var article_model_1 = __webpack_require__(158);
	var author_actions_1 = __webpack_require__(77);
	var ArticleEditorContainerComponent = (function () {
	    function ArticleEditorContainerComponent($location, $routeParams, articleActionCreator) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.articleActionCreator = articleActionCreator;
	        this.storeOnChange = function (state) {
	            _this.entities = state.articles;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/articles");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentArticleAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/articles");
	                }
	            }
	            if (state.lastTriggeredByAction instanceof actions.RemoveArticleAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/articles");
	                }
	            }
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateArticleAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/article/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof author_actions_1.SelectAuthorAction) {
	                _this.entity.author = state.lastTriggeredByAction.entity;
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["articleId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["articleId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new article_model_1.Article();
	            }
	        };
	        this.allArticles = function () { return _this.articleActionCreator.openAllArticlesModal(); };
	        this.edit = function (entity) { return _this.articleActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.articleActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.articleActionCreator.create(); };
	        this.addOrUpdate = function (options) { return _this.articleActionCreator.addOrUpdate({ data: options.data }); };
	        this.selectAuthor = function () { return _this.articleActionCreator.openAuthorPickerModal(); };
	    }
	    ArticleEditorContainerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(159),
	            styles: [__webpack_require__(160)],
	            selector: "article-editor-container",
	            viewProviders: ["$location", "$routeParams", "articleActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "articleActionCreator", function ($q, $route, invokeAsync, articleActionCreator) {
	                var articleId = $route.current.params.articleId;
	                var promises = [invokeAsync(articleActionCreator.all)];
	                if (articleId) {
	                    promises.push(invokeAsync({ action: articleActionCreator.getById, params: { id: articleId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, article_action_creator_1.ArticleActionCreator])
	    ], ArticleEditorContainerComponent);
	    return ArticleEditorContainerComponent;
	}());
	exports.ArticleEditorContainerComponent = ArticleEditorContainerComponent;


/***/ },
/* 156 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateArticleAction = (function () {
	    function AddOrUpdateArticleAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateArticleAction;
	}());
	exports.AddOrUpdateArticleAction = AddOrUpdateArticleAction;
	var AllArticlesAction = (function () {
	    function AllArticlesAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllArticlesAction;
	}());
	exports.AllArticlesAction = AllArticlesAction;
	var RemoveArticleAction = (function () {
	    function RemoveArticleAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveArticleAction;
	}());
	exports.RemoveArticleAction = RemoveArticleAction;
	var ArticlesFilterAction = (function () {
	    function ArticlesFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return ArticlesFilterAction;
	}());
	exports.ArticlesFilterAction = ArticlesFilterAction;
	var SetCurrentArticleAction = (function () {
	    function SetCurrentArticleAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentArticleAction;
	}());
	exports.SetCurrentArticleAction = SetCurrentArticleAction;
	var AddOrUpdateArticleSuccessAction = (function () {
	    function AddOrUpdateArticleSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateArticleSuccessAction;
	}());
	exports.AddOrUpdateArticleSuccessAction = AddOrUpdateArticleSuccessAction;
	var CurrentArticleRemovedAction = (function () {
	    function CurrentArticleRemovedAction() {
	    }
	    return CurrentArticleRemovedAction;
	}());
	exports.CurrentArticleRemovedAction = CurrentArticleRemovedAction;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var author_action_creator_1 = __webpack_require__(76);
	var modal_action_creator_1 = __webpack_require__(65);
	var article_actions_1 = __webpack_require__(156);
	var ArticleActionCreator = (function (_super) {
	    __extends(ArticleActionCreator, _super);
	    function ArticleActionCreator($location, dispatcher, articleService, guid, authorActionCreator, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, articleService, dispatcher, guid, article_actions_1.AddOrUpdateArticleAction, article_actions_1.AllArticlesAction, article_actions_1.RemoveArticleAction, article_actions_1.SetCurrentArticleAction);
	        this.authorActionCreator = authorActionCreator;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new article_actions_1.AddOrUpdateArticleSuccessAction(options.entity)); };
	        this.currentArticleRemoved = function () { return _this.dispatcher.dispatch(new article_actions_1.CurrentArticleRemovedAction()); };
	        this.openAuthorPickerModal = function () {
	            _this.authorActionCreator.openAuthorPickerModal();
	        };
	        this.openAllArticlesModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-articles-modal></all-articles-modal>" });
	            });
	        };
	    }
	    ArticleActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "articleActionCreator",
	            viewProviders: ["$location", "dispatcher", "articleService", "guid", "authorActionCreator", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, author_action_creator_1.AuthorActionCreator, Object, modal_action_creator_1.ModalActionCreator])
	    ], ArticleActionCreator);
	    return ArticleActionCreator;
	}(core_1.BaseActionCreator));
	exports.ArticleActionCreator = ArticleActionCreator;


/***/ },
/* 158 */
/***/ function(module, exports) {

	"use strict";
	var Article = (function () {
	    function Article() {
	        this.categories = [];
	        this.tags = [];
	    }
	    return Article;
	}());
	exports.Article = Article;


/***/ },
/* 159 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-editor-container\">\r\n    <span class=\"all-articles-link\" data-ng-click=\"vm.allArticles()\">All Articles</span>\r\n    <article-editor entity=\"vm.entity\"\r\n                    edit=\"vm.edit\"\r\n                    remove=\"vm.remove\"\r\n                    add-or-update=\"vm.addOrUpdate\"\r\n                    create=\"vm.create\"\r\n                    select-author=\"vm.selectAuthor\">\r\n    </article-editor>\r\n</div>\r\n"

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(161);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-editor-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-editor-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".all-articles-link {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleEditorComponent = (function () {
	    function ArticleEditorComponent() {
	    }
	    ArticleEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(163),
	            styles: [__webpack_require__(164)],
	            selector: "article-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create', 'selectAuthor'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ArticleEditorComponent);
	    return ArticleEditorComponent;
	}());
	exports.ArticleEditorComponent = ArticleEditorComponent;


/***/ },
/* 163 */
/***/ function(module, exports) {

	module.exports = "<div class=\"article-editor\">\r\n\r\n    <h1 data-ng-if=\"!vm.entity.id\">Create Article <span data-ng-if=\"vm.entity.title.length > 0\">: {{ vm.entity.title }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Article: {{ vm.entity.title }}</h1>\r\n\r\n    <div>\r\n        <button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></button>\r\n\r\n        <button on-click=\"vm.create()\" caption=\"Create\"></button>\r\n    </div>\r\n\r\n    <tabs tabs-name=\"article-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField article-editor-title\" type=\"text\" placeholder=\"Title\" data-ng-model=\"vm.entity.title\" />\r\n            </div>\r\n\r\n            <div>\r\n                <textarea ui-tinymce ng-model=\"vm.entity.body\"></textarea>\r\n            </div>\r\n        </tab-content>\r\n\r\n        <tab-title>Author</tab-title>\r\n\r\n        <tab-content>\r\n\r\n            <div style=\"line-height:3em;\">\r\n                <span style=\"line-height:2em; cursor:pointer;\" data-ng-click=\"vm.selectAuthor()\">Select Author</span>\r\n            </div>\r\n\r\n            <h1 data-ng-if=\"vm.entity.author\"> {{ vm.entity.author.firstName }} {{ vm.entity.author.lastName }}</h1>\r\n\r\n        </tab-content>\r\n\r\n        <tab-title>Category</tab-title>\r\n\r\n        <tab-content>\r\n\r\n        </tab-content>\r\n\r\n        <tab-title>Tags</tab-title>\r\n\r\n        <tab-content>\r\n\r\n        </tab-content>\r\n\r\n        <tab-title>Related Articles</tab-title>\r\n\r\n        <tab-content>\r\n\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></button>\r\n\r\n        <button on-click=\"vm.create()\" caption=\"Create\"></button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(165);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".article-editor .mce-tinymce {\n  width: 800px; }\n\n.article-editor textarea {\n  width: 800px;\n  height: 600px; }\n\n.article-editor-title {\n  width: 770px; }\n", ""]);

	// exports


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ArticleService = (function (_super) {
	    __extends(ArticleService, _super);
	    function ArticleService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(ArticleService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/article"; },
	        enumerable: true,
	        configurable: true
	    });
	    ArticleService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "articleService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], ArticleService);
	    return ArticleService;
	}(core_1.BaseService));
	exports.ArticleService = ArticleService;


/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var backdrop_service_1 = __webpack_require__(169);
	var app = angular.module("app.backdrop", [
	    "app.core"
	]);
	core_1.provide(app, backdrop_service_1.Backdrop);
	app.run(["backdrop", function (backdrop) { }]);


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Backdrop = (function () {
	    function Backdrop($q, appendToBodyAsync, extendCssAsync, removeElement, setOpacityAsync) {
	        var _this = this;
	        this.$q = $q;
	        this.appendToBodyAsync = appendToBodyAsync;
	        this.extendCssAsync = extendCssAsync;
	        this.removeElement = removeElement;
	        this.setOpacityAsync = setOpacityAsync;
	        this.createInstance = function (options) {
	            var instance = new Backdrop(_this.$q, _this.appendToBodyAsync, _this.extendCssAsync, _this.removeElement, _this.setOpacityAsync);
	            return instance;
	        };
	        this.openAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.initializeAsync()
	                .then(_this.appendBackDropToBodyAsync)
	                .then(_this.showAsync)
	                .then(function () { return deferred.resolve(_this.isOpen = true); });
	            return deferred.promise;
	        };
	        this.closeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.hideAsync().then(function (results) {
	                _this.dispose();
	                _this.isOpen = false;
	                deferred.resolve();
	            });
	            return deferred.promise;
	        };
	        this.initializeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.augmentedJQuery = angular.element("<div></div>");
	            _this.extendCssAsync({
	                nativeHTMLElement: _this.nativeHTMLElement,
	                cssObject: {
	                    "-webkit-transition": "opacity 300ms ease-in-out",
	                    "-o-transition": "opacity 300ms ease-in-out",
	                    "transition": "opacity 300ms ease-in-out",
	                    "opacity": "0",
	                    "position": "fixed",
	                    "top": "0",
	                    "left": "0",
	                    "height": "100%",
	                    "width": "100%",
	                    "background-color": "rgba(0, 0, 0, .25)",
	                    "display": "block"
	                }
	            }).then(function () { return deferred.resolve(); });
	            return deferred.promise;
	        };
	        this.showAsync = function () { return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 25 }); };
	        this.appendBackDropToBodyAsync = function () { return _this.appendToBodyAsync({ nativeElement: _this.nativeHTMLElement }); };
	        this.hideAsync = function () { return _this.setOpacityAsync({ nativeHtmlElement: _this.nativeHTMLElement, opacity: 0 }); };
	        this.dispose = function () {
	            _this.removeElement({ nativeHTMLElement: _this.nativeHTMLElement });
	            _this.augmentedJQuery = null;
	        };
	        this.isOpen = false;
	        this.isAnimating = false;
	    }
	    Object.defineProperty(Backdrop.prototype, "nativeHTMLElement", {
	        get: function () { return this.augmentedJQuery[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Backdrop = __decorate([
	        core_1.Service({
	            serviceName: "backdrop",
	            viewProviders: ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object, Object, Object])
	    ], Backdrop);
	    return Backdrop;
	}());
	exports.Backdrop = Backdrop;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var bold_button_component_1 = __webpack_require__(171);
	var button_component_1 = __webpack_require__(175);
	var button_action_creator_1 = __webpack_require__(179);
	var reducers = __webpack_require__(180);
	var actions = __webpack_require__(181);
	var app = angular.module("app.button", [
	    "app.core"
	]);
	core_1.provide(app, button_action_creator_1.ButtonActionCreator);
	app.component(bold_button_component_1.BoldButtonComponent);
	app.component(button_component_1.ButtonComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var BoldButtonComponent = (function () {
	    function BoldButtonComponent() {
	    }
	    BoldButtonComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(172),
	            styles: [__webpack_require__(173)],
	            selector: "bold-button",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["&onClick", "@caption"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BoldButtonComponent);
	    return BoldButtonComponent;
	}());
	exports.BoldButtonComponent = BoldButtonComponent;


/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<input type=\"button\" class=\"bold-button\" data-ng-click=\"vm.onClick()\" value=\"{{ ::vm.caption }}\"></input>"

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./bold-button.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./bold-button.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".bold-button {\n  font-weight: 600; }\n", ""]);

	// exports


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ButtonComponent = (function () {
	    function ButtonComponent() {
	    }
	    ButtonComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(176),
	            styles: [__webpack_require__(177)],
	            selector: "calypso-button",
	            inputs: ['@caption', '&onClick'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ButtonComponent);
	    return ButtonComponent;
	}());
	exports.ButtonComponent = ButtonComponent;


/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = "<button class=\"button\" data-ng-click=\"vm.onClick()\">{{ ::vm.caption }}</button>"

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./button.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./button.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".button {\n  margin-top: 15px;\n  margin-bottom: 30px;\n  line-height: 30px;\n  width: 75px;\n  background-color: #FFF;\n  border: solid 1px;\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var ButtonActionCreator = (function () {
	    function ButtonActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    ButtonActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "buttonActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ButtonActionCreator);
	    return ButtonActionCreator;
	}());
	exports.ButtonActionCreator = ButtonActionCreator;


/***/ },
/* 180 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 181 */
/***/ function(module, exports) {

	"use strict";
	var Click = (function () {
	    function Click() {
	    }
	    return Click;
	}());
	exports.Click = Click;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var carousel_action_panel_component_1 = __webpack_require__(183);
	var carousel_action_panel_action_creator_1 = __webpack_require__(187);
	var reducers = __webpack_require__(188);
	var actions = __webpack_require__(189);
	var app = angular.module("app.carouselActionPanel", [
	    "app.core",
	    "app.rotator",
	]);
	core_1.provide(app, carousel_action_panel_action_creator_1.CarouselActionPanelActionCreator);
	app.component(carousel_action_panel_component_1.CarouselActionPanelComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var CarouselActionPanelComponent = (function () {
	    function CarouselActionPanelComponent() {
	    }
	    CarouselActionPanelComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(184),
	            styles: [__webpack_require__(185)],
	            selector: "carousel-action-panel",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: [
	                "imageUrl",
	                "headline",
	                "htmlBody",
	                "actionButtonCaption",
	                "&onClick",
	                "backgroundColor",
	                "items"
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CarouselActionPanelComponent);
	    return CarouselActionPanelComponent;
	}());
	exports.CarouselActionPanelComponent = CarouselActionPanelComponent;


/***/ },
/* 184 */
/***/ function(module, exports) {

	module.exports = "<div class=\"carousel-action-panel\">\r\n\r\n    <div class=\"carousel-action-panel-rotator\">\r\n        <rotator id=\"featured\"\r\n                 items=\"vm.items\"\r\n                 rotator-for-name=\"item\"\r\n                 next-button-image-url=\"'rotator_button_next.png'\"\r\n                 previous-button-image-url=\"'rotator_button_prev.png'\"\r\n                 width=\"'500'\"\r\n                 height=\"'500'\">\r\n            <div>\r\n                <img data-ng-src=\"{{ item.url }}\" />\r\n            </div>\r\n        </rotator>\r\n    </div>\r\n\r\n    <div class=\"carousel-action-panel-description\">\r\n        <h2>{{vm.headline}}</h2>\r\n        <div data-ng-bind-html=\"vm.htmlBody\">\r\n\r\n        </div>\r\n        <bold-button on-click=\"vm.onClick()\" caption=\"{{vm.actionButtonCaption}}\"></bold-button>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./carousel-action-panel.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./carousel-action-panel.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".carousel-action-panel-rotator,\n.carousel-action-panel-description {\n  float: left;\n  position: relative; }\n\n.carousel-action-panel-description:after {\n  content: \" \";\n  font-size: 0;\n  height: 0;\n  display: block;\n  clear: both;\n  visibility: hidden; }\n", ""]);

	// exports


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var CarouselActionPanelActionCreator = (function () {
	    function CarouselActionPanelActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    CarouselActionPanelActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "carouselActionPanelActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], CarouselActionPanelActionCreator);
	    return CarouselActionPanelActionCreator;
	}());
	exports.CarouselActionPanelActionCreator = CarouselActionPanelActionCreator;


/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var counter_component_1 = __webpack_require__(191);
	var counter_action_creator_1 = __webpack_require__(192);
	var actions = __webpack_require__(193);
	var reducers = __webpack_require__(197);
	var app = angular.module("app.counter", [
	    "app.core"
	]);
	core_1.provide(app, counter_action_creator_1.CounterActionCreator);
	app.component(counter_component_1.CounterComponent);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var counter_action_creator_1 = __webpack_require__(192);
	var CounterComponent = (function () {
	    function CounterComponent(counterActionCreator) {
	        var _this = this;
	        this.counterActionCreator = counterActionCreator;
	        this.storeOnChange = function (store) { return _this.count = store.count || 0; };
	        this.increment = function () { return _this.counterActionCreator.increment(); };
	        this.decrement = function () { return _this.counterActionCreator.decrement(); };
	    }
	    CounterComponent = __decorate([
	        core_1.Component({
	            componentName: "counterComponent",
	            template: __webpack_require__(194),
	            styles: [__webpack_require__(195)],
	            selector: "counter",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["@headline"],
	            viewProviders: ["counterActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [counter_action_creator_1.CounterActionCreator])
	    ], CounterComponent);
	    return CounterComponent;
	}());
	exports.CounterComponent = CounterComponent;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var counter_actions_1 = __webpack_require__(193);
	var CounterActionCreator = (function () {
	    function CounterActionCreator(dispatcher, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.increment = function () { return _this.dispatcher.dispatch(new counter_actions_1.Increment()); };
	        this.decrement = function () { return _this.dispatcher.dispatch(new counter_actions_1.Decrement()); };
	    }
	    CounterActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "counterActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], CounterActionCreator);
	    return CounterActionCreator;
	}());
	exports.CounterActionCreator = CounterActionCreator;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Increment = (function () {
	    function Increment() {
	    }
	    Increment = __decorate([
	        core_1.Action({
	            type: "counter.increment"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Increment);
	    return Increment;
	}());
	exports.Increment = Increment;
	var Decrement = (function () {
	    function Decrement() {
	    }
	    Decrement = __decorate([
	        core_1.Action({
	            type: "counter.decrement"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Decrement);
	    return Decrement;
	}());
	exports.Decrement = Decrement;


/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<div class=\"counter\">\r\n    <h1>{{ vm.headline }}</h1>\r\n    <h1>{{ vm.count }}</h1>\r\n    <a data-ng-click=\"vm.increment()\">Increment</a>\r\n    <a data-ng-click=\"vm.decrement()\">Decrement</a>\r\n</div>"

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./counter.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./counter.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  /* 1 */\n  display: block; }\n\n/**\r\n * Add the correct display in IE 9-.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; }\n\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\ntemplate,\n[hidden] {\n  display: none; }\n\n/* Links\r\n   ========================================================================== */\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\ndfn {\n  font-style: italic; }\n\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\r\n * Add the correct font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\nimg {\n  border-style: none; }\n\n/**\r\n * Hide the overflow in IE.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\r\n * Add the correct margin in IE 8.\r\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/* Forms\r\n   ========================================================================== */\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\noptgroup {\n  font-weight: bold; }\n\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\ntextarea {\n  overflow: auto; }\n\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54; }\n\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n.counter a {\n  color: red; }\n", ""]);

	// exports


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(193);
	exports.counterReducer = function (state, action) {
	    state.count = state.count || 0;
	    if (action instanceof actions.Increment)
	        state.count = state.count + 1;
	    if (action instanceof actions.Decrement)
	        state.count = state.count - 1;
	    return state;
	};


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var error_list_component_1 = __webpack_require__(199);
	var error_config_provider_1 = __webpack_require__(204);
	var error_list_action_creator_1 = __webpack_require__(205);
	var reducers = __webpack_require__(206);
	var actions = __webpack_require__(207);
	var app = angular.module("app.errorList", [
	    "app.core"
	]);
	core_1.provide(app, error_list_action_creator_1.ErrorListActionCreator);
	app.provider("ErrorConfig", error_config_provider_1.ErrorConfigProvider);
	app.component(error_list_component_1.ErrorListComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var error_config_service_1 = __webpack_require__(200);
	var ErrorListComponent = (function () {
	    function ErrorListComponent(errorConfig) {
	        this.errorConfig = errorConfig;
	        this.errorList = [];
	        this.storeOnChange = function (state) {
	        };
	    }
	    ErrorListComponent.prototype.getGenericError = function () {
	        return {
	            message: this.errorConfig.message,
	            href: this.errorConfig.href,
	            hrefText: this.errorConfig.hrefText,
	            dateTime: new Date().toISOString()
	        };
	    };
	    ErrorListComponent.prototype.dismissError = function (index) {
	        this.errorList.splice(index, 1);
	    };
	    ErrorListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(201),
	            styles: [__webpack_require__(202)],
	            selector: "error-list",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            viewProviders: ["errorConfig"]
	        }), 
	        __metadata('design:paramtypes', [error_config_service_1.ErrorConfig])
	    ], ErrorListComponent);
	    return ErrorListComponent;
	}());
	exports.ErrorListComponent = ErrorListComponent;


/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";
	var ErrorConfig = (function () {
	    function ErrorConfig(hrefText, href, message) {
	        this.hrefText = hrefText;
	        this.href = href;
	        this.message = message;
	    }
	    return ErrorConfig;
	}());
	exports.ErrorConfig = ErrorConfig;


/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = "<div class=\"error-list\">\r\n\r\n</div>\r\n"

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(203);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./error-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./error-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var error_config_service_1 = __webpack_require__(200);
	var ErrorConfigProvider = (function () {
	    function ErrorConfigProvider() {
	        var _this = this;
	        this.$get = function () { return new error_config_service_1.ErrorConfig(_this.hrefText, _this.href, _this.message); };
	    }
	    return ErrorConfigProvider;
	}());
	exports.ErrorConfigProvider = ErrorConfigProvider;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var ErrorListActionCreator = (function () {
	    function ErrorListActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    ErrorListActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "errorListActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ErrorListActionCreator);
	    return ErrorListActionCreator;
	}());
	exports.ErrorListActionCreator = ErrorListActionCreator;


/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 207 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var flip_card_component_1 = __webpack_require__(209);
	var flip_card_back_component_1 = __webpack_require__(213);
	var flip_card_front_component_1 = __webpack_require__(215);
	var flip_card_action_creator_1 = __webpack_require__(217);
	var reducers = __webpack_require__(218);
	var app = angular.module("app.flipCard", [
	    "app.core"
	]);
	core_1.provide(app, flip_card_action_creator_1.FlipCardActionCreator);
	app.component(flip_card_component_1.FlipCardComponent);
	app.component(flip_card_front_component_1.FlipCardFrontComponent);
	app.component(flip_card_back_component_1.FlipCardBackComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var FlipCardComponent = (function () {
	    function FlipCardComponent($attrs, $element) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.ngOnInit = function () {
	            _this.$element[0].style.height = _this.height;
	            _this.$element[0].style.width = _this.width;
	            _this.$element[0].addEventListener("ontouchstart", function () {
	                _this.$element[0].classList.toggle('hover');
	            });
	        };
	        this.ngOnChildInit = function (options) {
	            var nativeElement = options.component.$element[0];
	            nativeElement.style.height = _this.height;
	            nativeElement.style.width = _this.width;
	            _this.viewChildren.push(nativeElement);
	            options.component.added = _this.added;
	            options.component.toggleAdded = _this.toggleAdded;
	            _this.components.push(options.component);
	            if (_this.viewChildren.length == 2) {
	                _this.viewChildren[0].style.backgroundColor = "#ECECEC";
	                _this.viewChildren[1].style.backgroundColor = "#B32E31";
	            }
	        };
	        this.toggleAdded = function (options) {
	            _this.added = !_this.added;
	            _this.components[1].added = _this.added;
	        };
	        this.added = false;
	        this.viewChildren = [];
	        this.components = [];
	    }
	    Object.defineProperty(FlipCardComponent.prototype, "height", {
	        get: function () { return this.$attrs.height || "480px"; },
	        set: function (value) { },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FlipCardComponent.prototype, "width", {
	        get: function () { return this.$attrs.width || "320px"; },
	        set: function (value) { },
	        enumerable: true,
	        configurable: true
	    });
	    FlipCardComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(210),
	            styleUrls: [__webpack_require__(211)],
	            transclude: {
	                'front': '?flipCardFront',
	                'back': '?flipCardBack'
	            },
	            selector: "flip-card",
	            viewProviders: ["$attrs", "$element"],
	            inputs: ['height?', 'width?', 'toggleAdded?', 'added?']
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], FlipCardComponent);
	    return FlipCardComponent;
	}());
	exports.FlipCardComponent = FlipCardComponent;


/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flip-container\">\r\n    <div class=\"flipper\">\r\n        <div ng-transclude=\"front\"></div>\r\n        <div ng-transclude=\"back\"></div>\r\n    </div>\r\n</div>"

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(212);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./flip-card.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./flip-card.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n  transform: rotateY(180deg); }\n\n.flip-container {\n  float: left;\n  /* entire container, keeps perspective */\n  perspective: 1000;\n  position: relative;\n  /* back, initially hidden pane */\n  /* flip speed goes here */\n  /* front pane, placed above back */\n  /* hide back of pane during swap */ }\n  .flip-container .back {\n    transform: rotateY(180deg); }\n  .flip-container .flipper {\n    transition: 0.6s;\n    transform-style: preserve-3d;\n    position: relative; }\n  .flip-container .front {\n    z-index: 2;\n    /* for firefox 31 */\n    transform: rotateY(0deg); }\n  .flip-container .front, .flip-container .back {\n    backface-visibility: hidden;\n    position: absolute;\n    top: 0;\n    left: 0; }\n", ""]);

	// exports


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var FlipCardBackComponent = (function () {
	    function FlipCardBackComponent($element) {
	        var _this = this;
	        this.$element = $element;
	        this.storeOnChange = function (state) { };
	        this.ngOnInit = function () { _this.flipCard.ngOnChildInit({ component: _this }); };
	    }
	    FlipCardBackComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(214),
	            selector: "flip-card-back",
	            transclude: true,
	            require: '^flipCard',
	            viewProviders: ["$element"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], FlipCardBackComponent);
	    return FlipCardBackComponent;
	}());
	exports.FlipCardBackComponent = FlipCardBackComponent;


/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "<div class=\"back\">\r\n    <div class=\"flip-card-back-added-container\">\r\n        <h1 class=\"flip-card-back-added\" data-ng-if=\"!vm.added\" data-ng-click=\"vm.toggleAdded()\">+</h1>\r\n        <h1 class=\"flip-card-back-added\" data-ng-if=\"vm.added\" data-ng-click=\"vm.toggleAdded()\">-</h1>\r\n    </div>\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var FlipCardFrontComponent = (function () {
	    function FlipCardFrontComponent($element) {
	        var _this = this;
	        this.$element = $element;
	        this.ngOnInit = function () { _this.flipCard.ngOnChildInit({ component: _this }); };
	    }
	    FlipCardFrontComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(216),
	            selector: "flip-card-front",
	            transclude: true,
	            require: '^flipCard',
	            viewProviders: ["$element"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], FlipCardFrontComponent);
	    return FlipCardFrontComponent;
	}());
	exports.FlipCardFrontComponent = FlipCardFrontComponent;


/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = "<div class=\"front\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var FlipCardActionCreator = (function () {
	    function FlipCardActionCreator(dispatcher, guid) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	    }
	    FlipCardActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "flipCardActionCreator",
	            viewProviders: ["$location", "dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], FlipCardActionCreator);
	    return FlipCardActionCreator;
	}());
	exports.FlipCardActionCreator = FlipCardActionCreator;


/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var flyout_component_1 = __webpack_require__(220);
	var flyout_action_creator_1 = __webpack_require__(224);
	var reducers = __webpack_require__(225);
	var actions = __webpack_require__(226);
	var app = angular.module("app.flyout", [
	    "app.core"
	]);
	core_1.provide(app, flyout_action_creator_1.FlyoutActionCreator);
	app.component(flyout_component_1.FlyoutComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var FlyoutComponent = (function () {
	    function FlyoutComponent() {
	    }
	    FlyoutComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(221),
	            styles: [__webpack_require__(222)],
	            selector: "flyout",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FlyoutComponent);
	    return FlyoutComponent;
	}());
	exports.FlyoutComponent = FlyoutComponent;


/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<div class=\"flyout\">\r\n\r\n</div>\r\n"

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./flyout.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./flyout.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var FlyoutActionCreator = (function () {
	    function FlyoutActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    FlyoutActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "flyoutActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], FlyoutActionCreator);
	    return FlyoutActionCreator;
	}());
	exports.FlyoutActionCreator = FlyoutActionCreator;


/***/ },
/* 225 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var hamburger_button_component_1 = __webpack_require__(228);
	var app = angular.module("app.hamburgerButton", [
	    "app.core"
	]);
	app.component(hamburger_button_component_1.HamburgerButtonComponent);


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var HamburgerButtonComponent = (function () {
	    function HamburgerButtonComponent() {
	    }
	    HamburgerButtonComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(229),
	            styles: [__webpack_require__(230)],
	            selector: "hamburger-button",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["&onClick"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HamburgerButtonComponent);
	    return HamburgerButtonComponent;
	}());
	exports.HamburgerButtonComponent = HamburgerButtonComponent;


/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = "<div class=\"hamburger-button\" data-ng-click=\"vm.onClick()\">\r\n\r\n</div>\r\n"

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(231);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./hamburger-button.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./hamburger-button.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".hamburger-button {\n  position: relative;\n  height: 70px;\n  width: 70px;\n  margin: 0 auto;\n  margin-top: 25%;\n  border-radius: 50%;\n  background-color: cyan; }\n\n.hamburger-button:before {\n  content: \"\";\n  position: absolute;\n  top: 34%;\n  left: 30%;\n  width: 40%;\n  height: 25%;\n  border-top: 4px solid #FFF;\n  border-bottom: 4px solid #FFF; }\n\n.hamburger-button:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 30%;\n  width: 40%;\n  height: 25%;\n  border-top: 4px solid #FFF; }\n", ""]);

	// exports


/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var hero_component_1 = __webpack_require__(233);
	var app = angular.module("app.hero", [
	    "app.core"
	]);
	app.component(hero_component_1.HeroComponent);


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var HeroComponent = (function () {
	    function HeroComponent($element, setElementBackgroundImage, setElementDimensions) {
	        var _this = this;
	        this.$element = $element;
	        this.setElementBackgroundImage = setElementBackgroundImage;
	        this.setElementDimensions = setElementDimensions;
	        this.ngOnInit = function () {
	            _this.setElementBackgroundImage(_this.$element, _this.heroImageUrl);
	            _this.setElementDimensions(_this.$element, _this.height, _this.width);
	        };
	    }
	    HeroComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(234),
	            styles: [__webpack_require__(235)],
	            selector: "hero",
	            inputs: ["@heroImageUrl", "@height", "@width"],
	            transclude: true,
	            viewProviders: ["$element", "setElementBackgroundImage", "setElementDimensions"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], HeroComponent);
	    return HeroComponent;
	}());
	exports.HeroComponent = HeroComponent;


/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div class=\"hero\">\r\n    <div class=\"hero-content\">\r\n        <ng-transclude></ng-transclude>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(236);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./hero.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./hero.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".hero {\n  width: 1132px;\n  height: 632px; }\n\n.hero-content {\n  position: absolute;\n  float: right;\n  width: calc(50% - (30px*2));\n  top: 50%;\n  right: 30px;\n  padding-left: 30px;\n  transform: translateY(-50%); }\n", ""]);

	// exports


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var login_component_1 = __webpack_require__(238);
	var login_container_component_1 = __webpack_require__(245);
	var login_action_creator_1 = __webpack_require__(239);
	var login_service_1 = __webpack_require__(240);
	var reducers = __webpack_require__(249);
	var app = angular.module("app.login", [
	    "app.core"
	]);
	core_1.provide(app, login_action_creator_1.LoginActionCreator);
	core_1.provide(app, login_service_1.LoginService);
	app.component(login_component_1.LoginComponent);
	app.component(login_container_component_1.LoginContainerComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	__export(__webpack_require__(245));
	__export(__webpack_require__(238));


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var login_action_creator_1 = __webpack_require__(239);
	var LoginComponent = (function () {
	    function LoginComponent(invokeAsync, loginActionCreator) {
	        var _this = this;
	        this.invokeAsync = invokeAsync;
	        this.loginActionCreator = loginActionCreator;
	        this.tryToLogin = function () {
	            _this.invokeAsync({
	                action: _this.loginActionCreator.tryToLogin,
	                params: { username: _this.username, password: _this.password }
	            }).then(function (results) {
	                _this.loginActionCreator.loginSuccess();
	            });
	        };
	    }
	    LoginComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(242),
	            styles: [__webpack_require__(243)],
	            selector: "login",
	            viewProviders: ["invokeAsync", "loginActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, login_action_creator_1.LoginActionCreator])
	    ], LoginComponent);
	    return LoginComponent;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var login_service_1 = __webpack_require__(240);
	var login_actions_1 = __webpack_require__(241);
	var LoginActionCreator = (function () {
	    function LoginActionCreator(dispatcher, loginService, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.loginService = loginService;
	        this.guid = guid;
	        this.tryToLogin = function (options) {
	            var newId = _this.guid();
	            _this.loginService.tryToLogin({
	                data: {
	                    username: options.username,
	                    password: options.password
	                }
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new login_actions_1.UserLoggedInAction(newId, results));
	            });
	            return newId;
	        };
	        this.loginSuccess = function () { return _this.dispatcher.dispatch(new login_actions_1.LoginSuccessAction()); };
	        this.logout = function () { return _this.dispatcher.dispatch(new login_actions_1.LogoutAction()); };
	    }
	    LoginActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "loginActionCreator",
	            viewProviders: ["dispatcher", "loginService", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, login_service_1.LoginService, Object])
	    ], LoginActionCreator);
	    return LoginActionCreator;
	}());
	exports.LoginActionCreator = LoginActionCreator;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var LoginService = (function () {
	    function LoginService($q, apiEndpoint, fetch, formEncode) {
	        var _this = this;
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	        this.formEncode = formEncode;
	        this.tryToLogin = function (options) {
	            var deferred = _this.$q.defer();
	            angular.extend(options.data, { grant_type: "password" });
	            var formEncodedData = _this.formEncode(options.data);
	            var headers = { "Content-Type": "application/x-www-form-urlencoded" };
	            _this.fetch.fromService({ method: "POST", url: _this.baseUri + "/token", data: formEncodedData, headers: headers }).then(function (results) {
	                deferred.resolve(results.data);
	            }).catch(function (error) {
	                deferred.resolve(error);
	            });
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(LoginService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
	        enumerable: true,
	        configurable: true
	    });
	    LoginService = __decorate([
	        core_1.Service({
	            serviceName: "loginService",
	            viewProviders: ["$q", "apiEndpoint", "fetch", "formEncode"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object, Object])
	    ], LoginService);
	    return LoginService;
	}());
	exports.LoginService = LoginService;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var RememberMeAction = (function () {
	    function RememberMeAction(username) {
	        this.username = username;
	    }
	    RememberMeAction = __decorate([
	        core_1.Action({
	            type: "login.rememberMeAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], RememberMeAction);
	    return RememberMeAction;
	}());
	exports.RememberMeAction = RememberMeAction;
	var LogoutAction = (function () {
	    function LogoutAction() {
	    }
	    LogoutAction = __decorate([
	        core_1.Action({
	            type: "login.logoutAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LogoutAction);
	    return LogoutAction;
	}());
	exports.LogoutAction = LogoutAction;
	var LoginSuccessAction = (function () {
	    function LoginSuccessAction() {
	    }
	    LoginSuccessAction = __decorate([
	        core_1.Action({
	            type: "login.loginSuccessAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LoginSuccessAction);
	    return LoginSuccessAction;
	}());
	exports.LoginSuccessAction = LoginSuccessAction;
	var UserLoggedInAction = (function () {
	    function UserLoggedInAction(id, data) {
	        this.id = id;
	        this.data = data;
	    }
	    UserLoggedInAction = __decorate([
	        core_1.Action({
	            type: "login.userLoggedInAction"
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], UserLoggedInAction);
	    return UserLoggedInAction;
	}());
	exports.UserLoggedInAction = UserLoggedInAction;


/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login\">\r\n    <h1>Login</h1>\r\n    <div>\r\n        <input type=\"text\" class=\"inputField\" placeholder=\"username\" data-ng-model=\"vm.username\" />\r\n    </div>\r\n\r\n    <div>\r\n        <input type=\"password\" class=\"inputField\" placeholder=\"password\" data-ng-model=\"vm.password\" />\r\n    </div>\r\n\r\n    <calypso-button on-click=\"vm.tryToLogin()\" caption=\"Login\"></calypso-button>\r\n\r\n</div>"

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(244);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var actions = __webpack_require__(241);
	var LoginContainerComponent = (function () {
	    function LoginContainerComponent(loginRedirect) {
	        var _this = this;
	        this.loginRedirect = loginRedirect;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof actions.LoginSuccessAction) {
	                _this.loginRedirect.redirectPreLogin();
	            }
	        };
	    }
	    LoginContainerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(246),
	            styles: [__webpack_require__(247)],
	            selector: "login-container",
	            viewProviders: ["loginRedirect"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], LoginContainerComponent);
	    return LoginContainerComponent;
	}());
	exports.LoginContainerComponent = LoginContainerComponent;


/***/ },
/* 246 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loginPage\">\r\n    <login></login>\r\n</div>"

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(248);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(241);
	exports.loggedInReducer = function (state, action) {
	    if (action instanceof actions.UserLoggedInAction) {
	        state.token = action.data.access_token;
	    }
	    return state;
	};
	exports.logoutReducer = function (state, action) {
	    if (action instanceof actions.LogoutAction) {
	        state.token = null;
	        state.currentUser = null;
	    }
	    return state;
	};
	exports.rememberMeReducer = function (state, action) {
	    if (action instanceof actions.RememberMeAction)
	        state.rememberMe = action.username;
	    return state;
	};


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	__webpack_require__(168);
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var modal_service_1 = __webpack_require__(251);
	var reducers = __webpack_require__(252);
	var actions = __webpack_require__(66);
	var modal_component_1 = __webpack_require__(253);
	var modal_title_component_1 = __webpack_require__(257);
	var modal_content_component_1 = __webpack_require__(261);
	var app = angular.module("app.modal", [
	    "app.core",
	    "app.backdrop"
	]);
	core_1.provide(app, modal_action_creator_1.ModalActionCreator);
	core_1.provide(app, modal_service_1.Modal);
	app.component(modal_component_1.ModalComponent);
	app.component(modal_title_component_1.ModalTitleComponent);
	app.component(modal_content_component_1.ModalContentComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.run(["modal", "modalActionCreator", function (modal, modalActionCreator) { }]);


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var Modal = (function () {
	    function Modal($compile, $q, $rootScope, appendToBodyAsync, backdrop, extendCssAsync, removeElement, setOpacityAsync, store) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$q = $q;
	        this.$rootScope = $rootScope;
	        this.appendToBodyAsync = appendToBodyAsync;
	        this.backdrop = backdrop;
	        this.extendCssAsync = extendCssAsync;
	        this.removeElement = removeElement;
	        this.setOpacityAsync = setOpacityAsync;
	        this.store = store;
	        this.storeOnChange = function (state) {
	            _this.html = state.modalHtml;
	            _this.isOpen = state.modalOpen;
	        };
	        this._isOpen = false;
	        this.openAsync = function () {
	            var openAsyncFn = function () {
	                return _this.initializeAsync()
	                    .then(_this.backdrop.openAsync)
	                    .then(_this.appendModalToBodyAsync)
	                    .then(_this.showAsync);
	            };
	            setTimeout(openAsyncFn, 100);
	        };
	        this.initializeAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.compileAsync().then(function () {
	                _this.nativeElement = _this.augmentedJQuery[0];
	                _this.extendCssAsync({
	                    nativeHTMLElement: _this.nativeElement,
	                    cssObject: {
	                        "opacity": "0",
	                        "position": "fixed",
	                        "margin-top": "-300px",
	                        "top": "0",
	                        "left": "0",
	                        "background-color": "#FFF",
	                        "display": "block",
	                        "z-index": "999",
	                        "width": "100%",
	                        "padding": "30px",
	                        "transition": "all 0.5s",
	                        "-webkit-transition": "all 0.5s",
	                        "-o-transition": "all 0.5s"
	                    }
	                }).then(function () {
	                    deferred.resolve();
	                });
	            });
	            return deferred.promise;
	        };
	        this.compileAsync = function () {
	            var deferred = _this.$q.defer();
	            _this.$scope = _this.$rootScope.$new();
	            _this.augmentedJQuery = _this.$compile(angular.element(_this.html))(_this.$scope);
	            setTimeout(function () {
	                _this.$scope.$digest();
	                deferred.resolve();
	            }, 100);
	            return deferred.promise;
	        };
	        this.appendModalToBodyAsync = function () { return _this.appendToBodyAsync({ nativeElement: _this.nativeElement }); };
	        this.showAsync = function () { return _this.extendCssAsync({
	            nativeHTMLElement: _this.nativeElement,
	            cssObject: {
	                "opacity": "100",
	                "margin-top": "0px",
	            }
	        }); };
	        this.closeAsync = function () {
	            if (!_this.pinned) {
	                var deferred = _this.$q.defer();
	                try {
	                    _this.extendCssAsync({
	                        nativeHTMLElement: _this.nativeElement,
	                        cssObject: {
	                            "opacity": "0",
	                        }
	                    })
	                        .then(_this.backdrop.closeAsync)
	                        .then(function () {
	                        _this.augmentedJQuery[0].parentNode.removeChild(_this.augmentedJQuery[0]);
	                        deferred.resolve();
	                    });
	                }
	                catch (error) {
	                    deferred.resolve();
	                }
	                return deferred.promise;
	            }
	        };
	        this.dispose = function () { };
	        this.togglePin = function () {
	            if (_this.pinned) {
	                _this.pinned = false;
	                _this.closeAsync();
	            }
	            else {
	                _this.pinned = true;
	            }
	        };
	        this.pinned = false;
	        store.subscribe(this.storeOnChange);
	    }
	    Object.defineProperty(Modal.prototype, "html", {
	        get: function () { return this._html; },
	        set: function (value) { this._html = value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Modal.prototype, "isOpen", {
	        get: function () { return this._isOpen; },
	        set: function (value) {
	            if (value && !this._isOpen)
	                this.openAsync();
	            if (!value && this._isOpen)
	                this.closeAsync();
	            this._isOpen = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Modal = __decorate([
	        core_1.Service({
	            serviceName: "modal",
	            viewProviders: [
	                "$compile",
	                "$q",
	                "$rootScope",
	                "appendToBodyAsync",
	                "backdrop",
	                "extendCssAsync",
	                "removeElement",
	                "setOpacityAsync",
	                "store"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, Object, Object, Object, core_1.Store])
	    ], Modal);
	    return Modal;
	}());
	exports.Modal = Modal;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(66);
	exports.openModalReducer = function (state, action) {
	    if (action instanceof actions.OpenModalAction) {
	        state.modalHtml = action.html;
	        state.modalOpen = true;
	    }
	    return state;
	};
	exports.closeModalReducer = function (state, action) {
	    if (action instanceof actions.CloseModalAction) {
	        state.modalHtml = '';
	        state.modalOpen = false;
	    }
	    return state;
	};


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var ModalComponent = (function () {
	    function ModalComponent($attrs, $element, modalActionCreator) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$element = $element;
	        this.modalActionCreator = modalActionCreator;
	        this.close = function () { return _this.modalActionCreator.close(); };
	    }
	    ModalComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(254),
	            styles: [__webpack_require__(255)],
	            selector: "modal",
	            transclude: {
	                'title': '?modalTitle',
	                'content': '?modalContent'
	            },
	            viewProviders: [
	                '$attrs',
	                '$element',
	                'modalActionCreator'
	            ]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalComponent);
	    return ModalComponent;
	}());
	exports.ModalComponent = ModalComponent;


/***/ },
/* 254 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal\">\r\n    <h1 data-ng-click=\"vm.close()\" class=\"modal-close\">X</h1>\r\n    <div ng-transclude=\"title\"></div>\r\n    <div ng-transclude=\"content\"></div>\r\n</div>"

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(256);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".modal-close {\r\n    cursor:pointer;\r\n}", ""]);

	// exports


/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var ModalTitleComponent = (function () {
	    function ModalTitleComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalTitleComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(258),
	            styles: [__webpack_require__(259)],
	            selector: "modal-title",
	            transclude: true,
	            viewProviders: ["$attrs", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalTitleComponent);
	    return ModalTitleComponent;
	}());
	exports.ModalTitleComponent = ModalTitleComponent;


/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-title\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(260);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal-title.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal-title.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var ModalContentComponent = (function () {
	    function ModalContentComponent($attrs, modalActionCreator) {
	        this.$attrs = $attrs;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) { };
	    }
	    ModalContentComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(262),
	            styles: [__webpack_require__(263)],
	            selector: "modal-content",
	            transclude: true,
	            viewProviders: ["$attrs", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, modal_action_creator_1.ModalActionCreator])
	    ], ModalContentComponent);
	    return ModalContentComponent;
	}());
	exports.ModalContentComponent = ModalContentComponent;


/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-content\">\r\n    <ng-transclude></ng-transclude>\r\n</div>"

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(264);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./modal-content.component.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./modal-content.component.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var nav_menu_component_1 = __webpack_require__(266);
	var nav_menu_action_creator_1 = __webpack_require__(270);
	var reducers = __webpack_require__(271);
	var actions = __webpack_require__(272);
	var app = angular.module("app.navMenu", [
	    "app.core"
	]);
	core_1.provide(app, nav_menu_action_creator_1.NavMenuActionCreator);
	app.component(nav_menu_component_1.NavMenuComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    NavMenuComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(267),
	            styles: [__webpack_require__(268)],
	            selector: "nav-menu",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavMenuComponent);
	    return NavMenuComponent;
	}());
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "<div class=\"nav-menu\">\r\n\r\n</div>\r\n"

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./nav-menu.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./nav-menu.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var NavMenuActionCreator = (function () {
	    function NavMenuActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    NavMenuActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "navMenuActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], NavMenuActionCreator);
	    return NavMenuActionCreator;
	}());
	exports.NavMenuActionCreator = NavMenuActionCreator;


/***/ },
/* 271 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 272 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(6);
	__webpack_require__(274);
	var core_1 = __webpack_require__(6);
	var paged_list_actions_1 = __webpack_require__(276);
	var paging_config_provider_1 = __webpack_require__(277);
	var reducers = __webpack_require__(279);
	__export(__webpack_require__(280));
	__export(__webpack_require__(281));
	var app = angular.module("app.pagedList", [
	    "app.core"
	]);
	app.provider("pagingConfigProvider", paging_config_provider_1.PagingConfigProvider);
	core_1.provide(app, paged_list_actions_1.PagedListActionCreator);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(275);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./paged-list.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./paged-list.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".previous, .next {\n  cursor: pointer; }\n\n.paged-list-navigation {\n  margin-bottom: 30px; }\n", ""]);

	// exports


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var PagedListActionCreator = (function () {
	    function PagedListActionCreator(dispatcher, guid) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	    }
	    PagedListActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "pagedListActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], PagedListActionCreator);
	    return PagedListActionCreator;
	}());
	exports.PagedListActionCreator = PagedListActionCreator;


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var paging_config_model_1 = __webpack_require__(278);
	var PagingConfigProvider = (function () {
	    function PagingConfigProvider() {
	        var _this = this;
	        this.$get = function () { return new paging_config_model_1.PagingConfig(_this.page, _this.pageSize); };
	    }
	    return PagingConfigProvider;
	}());
	exports.PagingConfigProvider = PagingConfigProvider;


/***/ },
/* 278 */
/***/ function(module, exports) {

	"use strict";
	var PagingConfig = (function () {
	    function PagingConfig(page, pageSize) {
	        this.page = page;
	        this.pageSize = pageSize;
	    }
	    return PagingConfig;
	}());
	exports.PagingConfig = PagingConfig;


/***/ },
/* 279 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 280 */
/***/ function(module, exports) {

	"use strict";
	var PagedList = (function () {
	    function PagedList(_data, _page, _pageSize, _totalCount) {
	        this._data = _data;
	        this._page = _page;
	        this._pageSize = _pageSize;
	        this._totalCount = _totalCount;
	    }
	    Object.defineProperty(PagedList.prototype, "data", {
	        get: function () { return this._data; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "page", {
	        get: function () { return this._page; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "pageSize", {
	        get: function () { return this._pageSize; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalCount", {
	        get: function () { return this._totalCount; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalPages", {
	        get: function () { return Math.ceil(this._totalCount / this._pageSize); },
	        enumerable: true,
	        configurable: true
	    });
	    return PagedList;
	}());
	exports.PagedList = PagedList;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var validate_page_properties_and_get_skip_count_1 = __webpack_require__(282);
	var paging_config_model_1 = __webpack_require__(278);
	var paged_list_model_1 = __webpack_require__(280);
	function toPageListFromInMemory(entities, page, pageSize) {
	    if (entities == null)
	        throw new Error("entities");
	    var pagingConfig = new paging_config_model_1.PagingConfig(page, pageSize);
	    var skipCount = validate_page_properties_and_get_skip_count_1.validatePagePropertiesAndGetSkipCount(pagingConfig);
	    var data = entities.slice(skipCount, pageSize + skipCount);
	    return new paged_list_model_1.PagedList(data, page, pageSize, entities.length);
	}
	exports.toPageListFromInMemory = toPageListFromInMemory;


/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";
	function validatePagePropertiesAndGetSkipCount(pagingConfig) {
	    if (pagingConfig.page < 1) {
	        pagingConfig.page = 1;
	    }
	    if (pagingConfig.pageSize < 1) {
	        pagingConfig.pageSize = 1;
	    }
	    if (pagingConfig.pageSize > 100) {
	        pagingConfig.pageSize = 100;
	    }
	    return pagingConfig.pageSize * (pagingConfig.page - 1);
	}
	exports.validatePagePropertiesAndGetSkipCount = validatePagePropertiesAndGetSkipCount;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var panel_component_1 = __webpack_require__(284);
	var panel_action_creator_1 = __webpack_require__(288);
	var reducers = __webpack_require__(289);
	var actions = __webpack_require__(290);
	var app = angular.module("app.panel", [
	    "app.core"
	]);
	core_1.provide(app, panel_action_creator_1.PanelActionCreator);
	app.component(panel_component_1.PanelComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var PanelComponent = (function () {
	    function PanelComponent() {
	    }
	    PanelComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(285),
	            styles: [__webpack_require__(286)],
	            selector: "panel",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            inputs: ["imageUrl", "headline", "htmlBody"]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PanelComponent);
	    return PanelComponent;
	}());
	exports.PanelComponent = PanelComponent;


/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = "<div class=\"panel\">\r\n    <div class=\"panel-image\">\r\n        <img data-ng-src=\"{{ vm.imageUrl }}\" />\r\n    </div>\r\n    <div class=\"panel-html-body\">\r\n        <h2>{{ vm.headline }}</h2>\r\n        <div data-ng-bind-html=\"vm.htmlBody\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(287);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./panel.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./panel.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".panel-image {\n  float: left;\n  position: relative; }\n\n.panel-html-body {\n  float: left;\n  position: relative; }\n\n.panel-html-body:after {\n  content: '';\n  display: block;\n  clear: both; }\n", ""]);

	// exports


/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var PanelActionCreator = (function () {
	    function PanelActionCreator(dispatcher, guid, invokeAsync, modalActionCreator) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	    }
	    PanelActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "panelActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], PanelActionCreator);
	    return PanelActionCreator;
	}());
	exports.PanelActionCreator = PanelActionCreator;


/***/ },
/* 289 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 290 */
/***/ function(module, exports) {

	"use strict";
	var Default = (function () {
	    function Default() {
	    }
	    return Default;
	}());
	exports.Default = Default;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var picture_component_1 = __webpack_require__(292);
	var picture_upload_component_1 = __webpack_require__(296);
	var picture_action_creator_1 = __webpack_require__(297);
	var picture_service_1 = __webpack_require__(302);
	var reducers = __webpack_require__(303);
	var actions = __webpack_require__(298);
	var app = angular.module("app.picture", [
	    "app.core"
	]);
	core_1.provide(app, picture_action_creator_1.PictureActionCreator);
	core_1.provide(app, picture_service_1.PictureService);
	app.component(picture_upload_component_1.PictureUploadComponent);
	app.component(picture_component_1.PictureComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var PictureComponent = (function () {
	    function PictureComponent() {
	    }
	    PictureComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(293),
	            styles: [__webpack_require__(294)],
	            selector: "picture",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PictureComponent);
	    return PictureComponent;
	}());
	exports.PictureComponent = PictureComponent;


/***/ },
/* 293 */
/***/ function(module, exports) {

	module.exports = "<img class=\"picture\" data-ng-src=\"vm.pictureSrc\"/>    \r\n\r\n"

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(295);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	//https://github.com/valor-software/ng2-file-upload/
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var picture_action_creator_1 = __webpack_require__(297);
	var PictureUploadComponent = (function () {
	    function PictureUploadComponent($element, pictureActionCreator) {
	        var _this = this;
	        this.$element = $element;
	        this.pictureActionCreator = pictureActionCreator;
	        this.ngOnInit = function () {
	            _this.drop.addEventListener("dragover", function (dragEvent) {
	                dragEvent.stopPropagation();
	                dragEvent.preventDefault();
	            }, false);
	            _this.drop.addEventListener("drop", _this.pictureActionCreator.upload, false);
	        };
	        this.ngOnDestroy = function () { return _this.drop.removeEventListener("drop", _this.pictureActionCreator.upload, false); };
	    }
	    Object.defineProperty(PictureUploadComponent.prototype, "drop", {
	        get: function () {
	            return this.$element.find(".drop-zone")[0];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PictureUploadComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(299),
	            styles: __webpack_require__(300),
	            selector: "picture-upload",
	            viewProviders: ["$element", "pictureActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, picture_action_creator_1.PictureActionCreator])
	    ], PictureUploadComponent);
	    return PictureUploadComponent;
	}());
	exports.PictureUploadComponent = PictureUploadComponent;


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var modal_action_creator_1 = __webpack_require__(65);
	var picture_actions_1 = __webpack_require__(298);
	var PictureActionCreator = (function () {
	    function PictureActionCreator(dispatcher, guid, invokeAsync, modalActionCreator, pictureService) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.pictureService = pictureService;
	        this.upload = function (dragEvent) {
	            dragEvent.stopPropagation();
	            dragEvent.preventDefault();
	            var newId = _this.guid();
	            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
	                var packageFiles = function (fileList) {
	                    var formData = new FormData();
	                    for (var i = 0; i < fileList.length; i++) {
	                        formData.append(fileList[i].name, fileList[i]);
	                    }
	                    return formData;
	                };
	                _this.pictureService
	                    .tryToUpload({ data: packageFiles(dragEvent.dataTransfer.files) })
	                    .then(function (response) { return _this.dispatcher.dispatch(new picture_actions_1.PictureUploadAction(newId, response.files)); });
	            }
	            return newId;
	        };
	    }
	    PictureActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "pictureActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync", "modalActionCreator", "pictureService"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, modal_action_creator_1.ModalActionCreator, Object])
	    ], PictureActionCreator);
	    return PictureActionCreator;
	}());
	exports.PictureActionCreator = PictureActionCreator;


/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var PictureUploadAction = (function () {
	    function PictureUploadAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    PictureUploadAction = __decorate([
	        core_1.Action({
	            type: "picture.pictureUploadAction"
	        }), 
	        __metadata('design:paramtypes', [Object, Array])
	    ], PictureUploadAction);
	    return PictureUploadAction;
	}());
	exports.PictureUploadAction = PictureUploadAction;


/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"drop-zone\">DROP FILES HERE TO BE UPLOADED...</div>\r\n</div>"

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(301);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture-upload.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./picture-upload.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".drop-zone {\n  background-color: azure;\n  height: 500px;\n  width: 500px; }\n", ""]);

	// exports


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var PictureService = (function () {
	    function PictureService($q, apiEndpoint, fetch) {
	        var _this = this;
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	        this.tryToUpload = function (options) {
	            var deferred = _this.$q.defer();
	            var xhr = new XMLHttpRequest();
	            xhr.open("POST", _this.baseUri + "/upload", true);
	            xhr.onload = function (e) {
	                if (xhr.readyState === 4) {
	                    if (xhr.status === 200) {
	                        deferred.resolve(JSON.parse(xhr.response));
	                    }
	                    else {
	                        deferred.resolve(xhr.statusText);
	                    }
	                }
	            };
	            xhr.send(options.data);
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(PictureService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/picture"; },
	        enumerable: true,
	        configurable: true
	    });
	    PictureService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "pictureService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], PictureService);
	    return PictureService;
	}());
	exports.PictureService = PictureService;


/***/ },
/* 303 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var popover_action_creator_1 = __webpack_require__(305);
	var popover_service_1 = __webpack_require__(307);
	var popover_config_provider_1 = __webpack_require__(309);
	var reducers = __webpack_require__(310);
	var app = angular.module("app.popover", [
	    "app.core"
	]);
	core_1.provide(app, popover_action_creator_1.PopoverActionCreator);
	core_1.provide(app, popover_service_1.Popover);
	app.provider("popoverConfig", popover_config_provider_1.PopoverConfigProvider);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	app.config(["initialStateProvider", "localStorageManagerProvider", function (initialStateProvider, localStorageManagerProvider) {
	        var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
	        if (!localStorageInitialState)
	            localStorageManagerProvider.put({
	                name: "initialState", value: {
	                    popoverInstances: []
	                }
	            });
	        var initialState = localStorageManagerProvider.get({ name: "initialState" });
	        initialState.popoverInstances = initialState.popoverInstances || [];
	        initialStateProvider.configure(initialState);
	    }]);
	app.run(["popover", function (popover) { }]);


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var popover_actions_1 = __webpack_require__(306);
	var popover_service_1 = __webpack_require__(307);
	var PopoverActionCreator = (function () {
	    function PopoverActionCreator($rootScope, dispatcher, guid, popover) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.popover = popover;
	        this.open = function (options) {
	            var guid = _this.guid();
	            options.guid = guid;
	            _this.popover.createInstance(options).then(function (instance) {
	                instance.show().then(function () { return _this.dispatcher.dispatch(new popover_actions_1.PopoverOpenedAction(guid, instance)); });
	            });
	            return guid;
	        };
	        this.close = function (options) { return _this.dispatcher.dispatch(new popover_actions_1.ClosePopoverAction(options.guid)); };
	        this.opened = function (options) {
	        };
	        this.closed = function (options) { return _this.dispatcher.dispatch(new popover_actions_1.PopoverClosedAction(options.id)); };
	        $rootScope.$on("$routeChangeSuccess", this.close);
	    }
	    PopoverActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "popoverActionCreator",
	            viewProviders: ["$rootScope", "dispatcher", "guid", "popover"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, popover_service_1.Popover])
	    ], PopoverActionCreator);
	    return PopoverActionCreator;
	}());
	exports.PopoverActionCreator = PopoverActionCreator;


/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var OpenPopoverAction = (function () {
	    function OpenPopoverAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    OpenPopoverAction = __decorate([
	        core_1.Action({
	            type: "popover.openPopoverAction"
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], OpenPopoverAction);
	    return OpenPopoverAction;
	}());
	exports.OpenPopoverAction = OpenPopoverAction;
	var ClosePopoverAction = (function () {
	    function ClosePopoverAction(id) {
	        this.id = id;
	    }
	    ClosePopoverAction = __decorate([
	        core_1.Action({
	            type: "popover.closePopoverAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], ClosePopoverAction);
	    return ClosePopoverAction;
	}());
	exports.ClosePopoverAction = ClosePopoverAction;
	var PopoverOpenedAction = (function () {
	    function PopoverOpenedAction(id, entity) {
	        this.id = id;
	    }
	    PopoverOpenedAction = __decorate([
	        core_1.Action({
	            type: "popover.popoverOpenedAction"
	        }), 
	        __metadata('design:paramtypes', [String, Object])
	    ], PopoverOpenedAction);
	    return PopoverOpenedAction;
	}());
	exports.PopoverOpenedAction = PopoverOpenedAction;
	var PopoverClosedAction = (function () {
	    function PopoverClosedAction(id) {
	        this.id = id;
	    }
	    PopoverClosedAction = __decorate([
	        core_1.Action({
	            type: "popover.popoverClosedAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], PopoverClosedAction);
	    return PopoverClosedAction;
	}());
	exports.PopoverClosedAction = PopoverClosedAction;


/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var popover_config_1 = __webpack_require__(308);
	var actions = __webpack_require__(306);
	var Popover = (function () {
	    function Popover($compile, $document, $http, $q, $timeout, guid, popoverConfig, position, renderer, store, template) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$document = $document;
	        this.$http = $http;
	        this.$q = $q;
	        this.$timeout = $timeout;
	        this.guid = guid;
	        this.popoverConfig = popoverConfig;
	        this.position = position;
	        this.renderer = renderer;
	        this.store = store;
	        this.template = template;
	        this.createInstance = function (options) {
	            var deferred = _this.$q.defer();
	            var instance = new Popover(_this.$compile, _this.$document, _this.$http, _this.$q, _this.$timeout, _this.guid, _this.popoverConfig, _this.position, _this.renderer, _this.store, _this.template);
	            instance.scope = options.scope;
	            instance.triggerAugmentedJQuery = options.triggerAugmentedJQuery;
	            instance.guid = options.guid;
	            _this.store.subscribe(instance.storeOnChange);
	            _this.$q.all([_this.template.get({ templateUrl: options.templateUrl })]).then(function (resultsArray) {
	                instance.templateHtml = resultsArray[0];
	                deferred.resolve(instance);
	            });
	            return deferred.promise;
	        };
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof actions.ClosePopoverAction && _this.guid === state.lastTriggeredByAction.id) {
	                _this.hide().then(function () {
	                    _this.store.dispatch(new actions.PopoverClosedAction(_this.guid));
	                });
	            }
	        };
	        this.show = function () {
	            var deferred = _this.$q.defer();
	            _this.augmentedJQuery = _this.renderer.render({ html: _this.templateHtml, parentScope: _this.scope, style: _this.style });
	            _this.position.somewhere(_this.triggerAugmentedJQuery[0], _this.augmentedJQuery[0], _this.popoverConfig.distance, _this.popoverConfig.directionPriorityList).then(function () {
	                document.body.appendChild(_this.augmentedJQuery[0]);
	                _this.$timeout(function () { _this.augmentedJQuery.css("opacity", 100); }, 100, false);
	                deferred.resolve();
	            });
	            return deferred.promise;
	        };
	        this.hide = function () {
	            var deferred = _this.$q.defer();
	            _this.augmentedJQuery.css("opacity", 0);
	            _this.augmentedJQuery[0].addEventListener('transitionend', function () {
	                angular.element(_this.augmentedJQuery[0]).scope().$destroy();
	                _this.augmentedJQuery[0].parentNode.removeChild(_this.augmentedJQuery[0]);
	                deferred.resolve();
	            }, false);
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(Popover.prototype, "style", {
	        get: function () {
	            return {
	                "-webkit-transition": "opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
	                "-o-transition": "opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
	                "-ms-transition": "opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
	                "transition": "opacity " + this.popoverConfig.transitionDurationInMilliseconds + "ms ease-in-out",
	                "opacity": "0",
	                "position": "fixed",
	                "top": "0",
	                "left": "0",
	                "display": "block"
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Popover = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "popover",
	            viewProviders: ["$compile", "$document", "$http", "$q", "$timeout", "guid", "popoverConfig", "position", "renderer", "store", "template"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Function, Function, Function, Object, popover_config_1.PopoverConfig, Object, Object, core_1.Store, Object])
	    ], Popover);
	    return Popover;
	}());
	exports.Popover = Popover;


/***/ },
/* 308 */
/***/ function(module, exports) {

	"use strict";
	var PopoverConfig = (function () {
	    function PopoverConfig(directionPriorityList, distance, transitionDurationInMilliseconds) {
	        this.directionPriorityList = directionPriorityList;
	        this.distance = distance;
	        this.transitionDurationInMilliseconds = transitionDurationInMilliseconds;
	    }
	    return PopoverConfig;
	}());
	exports.PopoverConfig = PopoverConfig;


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var popover_config_1 = __webpack_require__(308);
	var PopoverConfigProvider = (function () {
	    function PopoverConfigProvider() {
	        var _this = this;
	        this.distance = 10;
	        this.directionPriorityList = ["right", "bottom", "left", "top"];
	        this.transitionDurationInMilliseconds = 300;
	        this.$get = function () { return new popover_config_1.PopoverConfig(_this.directionPriorityList, _this.distance, _this.transitionDurationInMilliseconds); };
	    }
	    return PopoverConfigProvider;
	}());
	exports.PopoverConfigProvider = PopoverConfigProvider;


/***/ },
/* 310 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var river_component_1 = __webpack_require__(312);
	var app = angular.module("app.river", [
	    "app.core"
	]);
	app.component(river_component_1.RiverComponent);


/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var RiverComponent = (function () {
	    function RiverComponent() {
	    }
	    RiverComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(313),
	            styles: [__webpack_require__(314)],
	            selector: "river",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], RiverComponent);
	    return RiverComponent;
	}());
	exports.RiverComponent = RiverComponent;


/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = "<div class=\"river\">\r\n\r\n</div>\r\n"

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(315);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./river.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./river.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var rotator_component_1 = __webpack_require__(317);
	var rotator_action_creator_1 = __webpack_require__(318);
	var reducers = __webpack_require__(324);
	var app = angular.module("app.rotator", [
	    "ngTouch",
	    "app.core"
	]);
	core_1.provide(app, rotator_action_creator_1.RotatorActionCreator);
	app.component(rotator_component_1.RotatorComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var rotator_action_creator_1 = __webpack_require__(318);
	var window_actions_1 = __webpack_require__(320);
	var RotatorComponent = (function () {
	    function RotatorComponent($attrs, $compile, $element, $http, $interval, $location, $q, $scope, $timeout, $transclude, debounce, getFromUrlSync, getX, rotatorActionCreator, translateX, translateXAsync) {
	        var _this = this;
	        this.$attrs = $attrs;
	        this.$compile = $compile;
	        this.$element = $element;
	        this.$http = $http;
	        this.$interval = $interval;
	        this.$location = $location;
	        this.$q = $q;
	        this.$scope = $scope;
	        this.$timeout = $timeout;
	        this.$transclude = $transclude;
	        this.debounce = debounce;
	        this.getFromUrlSync = getFromUrlSync;
	        this.getX = getX;
	        this.rotatorActionCreator = rotatorActionCreator;
	        this.translateX = translateX;
	        this.translateXAsync = translateXAsync;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof window_actions_1.KeyDownAction)
	                _this.onKeyDown({ keyCode: state.lastTriggeredByAction.keyCode });
	            if (state.lastTriggeredByAction instanceof window_actions_1.ResizeAction) { }
	        };
	        this.next = function () { return _this.rotatorActionCreator.next(_this.id); };
	        this.previous = function () { return _this.rotatorActionCreator.previous(_this.id); };
	        this.ngOnInit = function () {
	            _this.$element.find(".view-port").css("width", _this.width);
	            var fragment = document.createDocumentFragment();
	            for (var i = 0; i < _this.items.length; i++) {
	                var childScope = _this.$scope.$new(false);
	                childScope[_this.$attrs["rotatorForName"] || "rotatorItem"] = _this.items[i];
	                childScope.width = _this.width;
	                childScope.height = _this.height;
	                childScope.$$index = i;
	                childScope.$$isFirst = (i === 0);
	                childScope.$$isLast = (i === _this.items.length - 1);
	                var slide = angular.element(_this.template);
	                slide.attr("ng-swipe-left", "vm.swipeLeft()");
	                slide.attr("ng-swipe-right", "vm.swipeRight()");
	                var itemContent = _this.$compile(slide)(childScope);
	                itemContent.addClass("slide");
	                fragment.appendChild(itemContent[0]);
	            }
	            _this.containerNavtiveElement.appendChild(fragment);
	            _this.turnOffTransitions();
	            if (_this.queryStringParam && _this.queryStringParamIndex != 0) {
	                for (var i = _this.slideNavtiveElements.length - 1; i >= 0; i--) {
	                    var initialMoveX = (-1) * (_this.queryStringParamIndex * (Number(_this.width)));
	                    if (i < _this.queryStringParamIndex - _this.buffer) {
	                        _this.translateX(_this.slideNavtiveElements[i], initialMoveX + Number(_this.width) * _this.items.length);
	                    }
	                    else {
	                        _this.translateX(_this.slideNavtiveElements[i], initialMoveX);
	                    }
	                }
	                _this.currentIndex = _this.queryStringParamIndex;
	            }
	            else {
	                _this.currentIndex = 0;
	                var desiredX = Number(_this.width) * (-1);
	                var delta = desiredX - ((_this.items.length - 1) * Number(_this.width));
	                _this.translateX(_this.rendererdNodes[_this.items.length - 1].node, delta);
	                _this.isAnimating = false;
	            }
	            setTimeout(function () { _this.turnOnTransitions(); });
	        };
	        this.onKeyDown = function (options) {
	            switch (options.keyCode) {
	                case 37:
	                    _this.onPreviousAsyncDebounce();
	                    break;
	                case 39:
	                    _this.onNextAsyncDebounce();
	                    break;
	            }
	        };
	        this.onLocationChangeSuccess = function () {
	            if (_this.currentIndex != -1
	                && _this.items[_this.currentIndex][_this.$attrs["querySearchField"] || 'id'] != _this.queryStringParam
	                && _this.queryStringParamIndex != _this.currentIndex) {
	                //TO DO: Turn off transitions for manual manipulation of location bar
	                if (_this.currentIndex === _this.items.length - 1 && _this.queryStringParamIndex === 0)
	                    return _this.onNextAsync();
	                if (_this.currentIndex === 0 && _this.queryStringParamIndex === _this.items.length - 1)
	                    return _this.onPreviousAsync();
	                if ((_this.currentIndex - _this.queryStringParamIndex) < 0) {
	                    return _this.onNextAsync();
	                }
	                else {
	                    return _this.onPreviousAsync();
	                }
	            }
	        };
	        this.onPreviousAsyncDebounce = function () { _this.debounce(_this.onPreviousAsync, 10)(); };
	        this.swipeLeft = function () { return _this.onNextAsyncDebounce(); };
	        this.swipeRight = function () { return _this.onPreviousAsyncDebounce(); };
	        this.onPreviousAsync = function () {
	            return _this.move({ x: (Number(_this.width)) }).then(function () {
	                _this.turnOffTransitions();
	                var desiredX = Number(_this.width) * (-1);
	                var delta = desiredX - _this.rendererdNodes[_this.items.length - 1].offsetLeft;
	                _this.translateX(_this.rendererdNodes[_this.items.length - 1].node, delta);
	                _this.inTransition = true;
	                _this.currentIndex = (_this.currentIndex === 0) ? _this.items.length - 1 : _this.currentIndex - 1;
	                setTimeout(function () {
	                    _this.turnOnTransitions();
	                    _this.inTransition = false;
	                }, 300);
	            });
	        };
	        this.onNextAsyncDebounce = function () { _this.debounce(_this.onNextAsync, 10)(); };
	        this.onNextAsync = function () {
	            return _this.move({ x: (-1) * (Number(_this.width)) }).then(function () {
	                _this.turnOffTransitions();
	                var desiredX = Number(_this.width) * (_this.items.length - 2);
	                var delta = desiredX - _this.rendererdNodes[0].offsetLeft;
	                _this.translateX(_this.rendererdNodes[0].node, delta);
	                _this.inTransition = true;
	                _this.currentIndex = (_this.currentIndex === _this.items.length - 1) ? 0 : _this.currentIndex + 1;
	                setTimeout(function () {
	                    _this.turnOnTransitions();
	                    _this.inTransition = false;
	                }, 300);
	            });
	        };
	        this.move = function (options) {
	            var deferred = _this.$q.defer();
	            if (!_this.isAnimating && !_this.inTransition) {
	                var promises = [];
	                _this.isAnimating = true;
	                if (options.x < 0) {
	                    for (var i = _this.slideNavtiveElements.length - 1; i > -1; i--) {
	                        promises.push(_this.translateXAsync({ element: _this.slideNavtiveElements[i], x: (_this.getX(_this.slideNavtiveElements[i]) + options.x) }));
	                    }
	                }
	                if (options.x >= 0) {
	                    for (var i = 0; i < _this.slideNavtiveElements.length; i++) {
	                        promises.push(_this.translateXAsync({ element: _this.slideNavtiveElements[i], x: (_this.getX(_this.slideNavtiveElements[i]) + options.x) }));
	                    }
	                }
	                _this.$q.all(promises).then(function () {
	                    _this.isAnimating = false;
	                    deferred.resolve();
	                });
	            }
	            else {
	                deferred.reject();
	            }
	            return deferred.promise;
	        };
	        this.dispose = function () {
	            angular.element(_this.containerNavtiveElement).find(".slide").remove();
	            _this.containerNavtiveElement.innerHTML = "";
	            _this.$element[0].innerHTML = null;
	            _this.$element = null;
	            _this.$attrs = null;
	            _this.clone = null;
	            delete _this.$element;
	            delete _this.clone;
	        };
	        this.turnOffTransitions = function () { _this.$element.addClass("notransition"); };
	        this._currentIndex = -1;
	        this._template = null;
	    }
	    Object.defineProperty(RotatorComponent.prototype, "buffer", {
	        get: function () { return 1; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "queryStringParam", {
	        get: function () { return this.$location.search()[this.$attrs["querySearchField"] || 'id']; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "queryStringParamIndex", {
	        get: function () {
	            var value = -1;
	            for (var i = 0; i < this.items.length; i++) {
	                if (this.items[i][this.$attrs["querySearchField"] || 'id'] == this.queryStringParam) {
	                    value = i;
	                }
	            }
	            return value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RotatorComponent.prototype.atBegining = function () { return this.currentIndex == 0; };
	    RotatorComponent.prototype.atEnd = function () { return this.currentIndex == this.items.length - 1; };
	    RotatorComponent.prototype.turnOnTransitions = function () { this.$element.removeClass("notransition"); };
	    Object.defineProperty(RotatorComponent.prototype, "slideNavtiveElements", {
	        get: function () { return this.containerNavtiveElement.children; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "currentIndex", {
	        get: function () { return this._currentIndex; },
	        set: function (value) {
	            this._currentIndex = value;
	            this.$scope.$emit("componentUpdate", { scope: this.$scope });
	            var url = this.items[this.currentIndex][this.$attrs["querySearchField"] || 'id'];
	            this.$location.search(this.$attrs["querySearchField"] || 'id', url);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "template", {
	        get: function () {
	            if (this._template != null)
	                return this._template;
	            if (this.$attrs["contentUrl"]) {
	                this._template = this.getFromUrlSync({ url: this.$attrs["contentUrl"] });
	            }
	            else {
	                this._template = this.clone;
	            }
	            return this._template;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "containerNavtiveElement", {
	        get: function () { return this.$element.find(".container")[0]; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RotatorComponent.prototype, "rendererdNodes", {
	        get: function () {
	            var renderedNodes = [];
	            for (var i = 0; i < this.slideNavtiveElements.length; i++) {
	                var x = this.getX(this.slideNavtiveElements[i]);
	                var offsetLeft = this.slideNavtiveElements[i].offsetLeft;
	                var left = x + offsetLeft;
	                var node = this.slideNavtiveElements[i];
	                renderedNodes.push({
	                    x: x,
	                    offsetLeft: offsetLeft,
	                    left: left,
	                    node: node
	                });
	            }
	            return renderedNodes.sort(function (a, b) {
	                return a.left - b.left;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    RotatorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(321),
	            styles: __webpack_require__(322),
	            selector: "rotator",
	            transclude: "element",
	            inputs: [
	                "@height",
	                "items",
	                "@nextButtonImageUrl",
	                "@previousButtonImageUrl",
	                "@width"
	            ],
	            viewProviders: ["$attrs",
	                "$compile",
	                "$element",
	                "$http",
	                "$interval",
	                "$location",
	                "$q",
	                "$scope",
	                "$timeout",
	                "$transclude",
	                "debounce",
	                "getFromUrlSync",
	                "getX",
	                "rotatorActionCreator",
	                "translateX",
	                "translateXAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, Function, Object, Function, Function, Object, Function, Object, Function, Function, Function, Function, Function, rotator_action_creator_1.RotatorActionCreator, Function, Function])
	    ], RotatorComponent);
	    return RotatorComponent;
	}());
	exports.RotatorComponent = RotatorComponent;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var rotator_actions_1 = __webpack_require__(319);
	var RotatorActionCreator = (function () {
	    function RotatorActionCreator(dispatcher, guid) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.next = function (id) { return _this.dispatcher.dispatch(new rotator_actions_1.RotatorNextAction(id)); };
	        this.previous = function (id) { return _this.dispatcher.dispatch(new rotator_actions_1.RotatorPreviousAction(id)); };
	    }
	    RotatorActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "rotatorActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], RotatorActionCreator);
	    return RotatorActionCreator;
	}());
	exports.RotatorActionCreator = RotatorActionCreator;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var RotatorNextAction = (function () {
	    function RotatorNextAction(id) {
	        this.id = id;
	    }
	    RotatorNextAction = __decorate([
	        core_1.Action({
	            type: "rotator.rotatorNextAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], RotatorNextAction);
	    return RotatorNextAction;
	}());
	exports.RotatorNextAction = RotatorNextAction;
	var RotatorPreviousAction = (function () {
	    function RotatorPreviousAction(id) {
	        this.id = id;
	    }
	    RotatorPreviousAction = __decorate([
	        core_1.Action({
	            type: "rotator.rotatorPreviousAction"
	        }), 
	        __metadata('design:paramtypes', [String])
	    ], RotatorPreviousAction);
	    return RotatorPreviousAction;
	}());
	exports.RotatorPreviousAction = RotatorPreviousAction;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(6);
	core_1.Action({
	    type: "window.resizeAction"
	});
	var ResizeAction = (function () {
	    function ResizeAction(innerWidth) {
	        this.innerWidth = innerWidth;
	    }
	    return ResizeAction;
	}());
	exports.ResizeAction = ResizeAction;
	core_1.Action({
	    type: "window.keyDownAction"
	});
	var KeyDownAction = (function () {
	    function KeyDownAction(keyCode) {
	        this.keyCode = keyCode;
	    }
	    return KeyDownAction;
	}());
	exports.KeyDownAction = KeyDownAction;


/***/ },
/* 321 */
/***/ function(module, exports) {

	module.exports = "<div class='rotator'>            \r\n    <div class='view-port'>        \r\n        <div class='container'></div>\r\n        <div class='previous-arrow' data-ng-click='vm.onPreviousAsyncDebounce()'>&nbsp;<img class=\"previous-arrow-img\" data-ng-src='{{ vm.previousButtonImageUrl }}' /></div>\r\n        <div class='next-arrow' data-ng-click='vm.onNextAsyncDebounce()'>&nbsp;<img class=\"next-arrow-img\" data-ng-src='{{ vm.nextButtonImageUrl }}' /></div>        \r\n    </div>    \r\n\r\n</div>"

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(323);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./rotator.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./rotator.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".slide {\n  float: left;\n  position: relative;\n  transition: transform 0.25s cubic-bezier(0.1, 0.1, 0.25, 0.9) 0s; }\n\n.rotator.notransition .slide {\n  transition: none !important; }\n\n.rotator .view-port {\n  height: 100%;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.rotator .view-port .container {\n  width: 99999px; }\n\n.rotator .view-port .previous-arrow img:hover\n.rotator .view-port .next-arrow img:hover {\n  opacity: .9;\n  transform: scale(1.51 0.5); }\n\n.rotator .view-port .slide {\n  position: relative;\n  float: left;\n  margin: 0 auto; }\n\n.rotator .view-port .next-arrow,\n.rotator .view-port .previous-arrow {\n  display: inline;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 25;\n  width: 100px;\n  height: 100%; }\n\n.rotator .view-port .next-arrow {\n  left: calc(100% - 80px); }\n\n.rotator .view-port .next-arrow img,\n.rotator .view-port .previous-arrow img {\n  position: absolute;\n  top: calc(50% - 40px);\n  cursor: pointer;\n  left: 0;\n  z-index: 999;\n  opacity: .3;\n  transition: all .250s; }\n", ""]);

	// exports


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rotator_actions_1 = __webpack_require__(319);
	exports.rotatorPreviousReducer = function (state, action) {
	    if (action instanceof rotator_actions_1.RotatorPreviousAction) { }
	    return state;
	};
	exports.rotatorNextReducer = function (state, action) {
	    if (action instanceof rotator_actions_1.RotatorNextAction) { }
	    return state;
	};


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var spinner_component_1 = __webpack_require__(326);
	var spinner_action_creator_1 = __webpack_require__(330);
	var reducers = __webpack_require__(332);
	var actions = __webpack_require__(331);
	var app = angular.module("app.spinner", [
	    "app.core"
	]);
	core_1.provide(app, spinner_action_creator_1.SpinnerActionCreator);
	app.component(spinner_component_1.SpinnerComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}


/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var SpinnerComponent = (function () {
	    function SpinnerComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) { return _this.visible = state.spinnerVisible; };
	    }
	    Object.defineProperty(SpinnerComponent.prototype, "visible", {
	        get: function () { return this._visible; },
	        set: function (value) { this._visible = value; },
	        enumerable: true,
	        configurable: true
	    });
	    SpinnerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(327),
	            styles: [__webpack_require__(328)],
	            selector: "spinner",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SpinnerComponent);
	    return SpinnerComponent;
	}());
	exports.SpinnerComponent = SpinnerComponent;


/***/ },
/* 327 */
/***/ function(module, exports) {

	module.exports = "<div class=\"spinner\">\r\n    <div class=\"spinner-inner\">\r\n        <div>\r\n            <img data-ng-src=\"vm.src\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(329);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./spinner.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./spinner.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var spinner_actions_1 = __webpack_require__(331);
	var SpinnerActionCreator = (function () {
	    function SpinnerActionCreator(dispatcher, guid, invokeAsync) {
	        var _this = this;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        this.show = function () { return _this.dispatcher.dispatch(new spinner_actions_1.ShowSpinnerAction()); };
	        this.hide = function () { return _this.dispatcher.dispatch(new spinner_actions_1.HideSpinnerAction()); };
	    }
	    SpinnerActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "spinnerActionCreator",
	            viewProviders: ["dispatcher", "guid", "invokeAsync"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object])
	    ], SpinnerActionCreator);
	    return SpinnerActionCreator;
	}());
	exports.SpinnerActionCreator = SpinnerActionCreator;


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var ShowSpinnerAction = (function () {
	    function ShowSpinnerAction() {
	    }
	    ShowSpinnerAction = __decorate([
	        core_1.Action({
	            type: "showSpinnerAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ShowSpinnerAction);
	    return ShowSpinnerAction;
	}());
	exports.ShowSpinnerAction = ShowSpinnerAction;
	var HideSpinnerAction = (function () {
	    function HideSpinnerAction() {
	    }
	    HideSpinnerAction = __decorate([
	        core_1.Action({
	            type: "hideSpinnerAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HideSpinnerAction);
	    return HideSpinnerAction;
	}());
	exports.HideSpinnerAction = HideSpinnerAction;


/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(331);
	exports.spinnerReducer = function (state, action) {
	    if (action instanceof actions.ShowSpinnerAction)
	        state.spinnerVisible = true;
	    if (action instanceof actions.HideSpinnerAction)
	        state.spinnerVisible = false;
	    return state;
	};


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var user_editor_component_1 = __webpack_require__(334);
	var user_list_component_1 = __webpack_require__(338);
	var user_component_1 = __webpack_require__(342);
	var users_container_component_1 = __webpack_require__(346);
	var user_actions_1 = __webpack_require__(347);
	var user_service_1 = __webpack_require__(352);
	var reducers = __webpack_require__(353);
	var app = angular.module("app.user", [
	    "app.core"
	]);
	core_1.provide(app, user_actions_1.UserActionCreator);
	core_1.provide(app, user_service_1.UserService);
	app.component(user_editor_component_1.UserEditorComponent);
	app.component(user_list_component_1.UserListComponent);
	app.component(user_component_1.UserComponent);
	app.component(users_container_component_1.UsersContainerComponent);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var UserEditorComponent = (function () {
	    function UserEditorComponent() {
	    }
	    UserEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(335),
	            styles: [__webpack_require__(336)],
	            selector: "user-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserEditorComponent);
	    return UserEditorComponent;
	}());
	exports.UserEditorComponent = UserEditorComponent;


/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "<div class=\"userEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create User <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit User: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"user-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"User Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></button>\r\n\r\n        <button on-click=\"vm.create()\" caption=\"'Create'\"></button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(337);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var UserListComponent = (function () {
	    function UserListComponent() {
	    }
	    UserListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(339),
	            styles: [__webpack_require__(340)],
	            selector: "user-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserListComponent);
	    return UserListComponent;
	}());
	exports.UserListComponent = UserListComponent;


/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "<div class=\"userList\">\r\n    <div class=\"userList-header\">\r\n        <h1>Users</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"userList-item\">\r\n        <div class=\"userList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"userList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".userList-name,\n.userList-actions {\n  position: relative;\n  float: left; }\n\n.userList-name {\n  min-width: 200px; }\n\n.userList-item {\n  height: 50px; }\n\n.userList-actions span {\n  cursor: pointer; }\n\n.userList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var UserComponent = (function () {
	    function UserComponent() {
	    }
	    UserComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(343),
	            styles: [__webpack_require__(344)],
	            selector: "user",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UserComponent);
	    return UserComponent;
	}());
	exports.UserComponent = UserComponent;


/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "<div class=\"user\">\r\n\r\n</div>\r\n"

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./user.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var actions = __webpack_require__(347);
	var user_model_1 = __webpack_require__(348);
	var UsersContainerComponent = (function () {
	    function UsersContainerComponent($location, $routeParams, userActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.userActionCreator = userActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.users;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/users");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentUserAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/user/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateUserAction)
	                _this.entity = new user_model_1.User();
	            if (state.lastTriggeredByAction instanceof actions.RemoveUserAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["userId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/users");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["userId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["userId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new user_model_1.User();
	            }
	        };
	        this.edit = function (entity) { return _this.userActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.userActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.userActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.userActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/users") {
	                    _this.entity = new user_model_1.User();
	                }
	                else {
	                    _this.$location.path("/admin/users");
	                }
	            });
	        };
	    }
	    UsersContainerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(349),
	            styles: [__webpack_require__(350)],
	            selector: "users-container",
	            viewProviders: ["$location", "$routeParams", "userActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "userActionCreator", function ($q, $route, invokeAsync, userActionCreator) {
	                var userId = $route.current.params.userId;
	                var promises = [invokeAsync(userActionCreator.all)];
	                if (userId) {
	                    promises.push(invokeAsync({ action: userActionCreator.getById, params: { id: userId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, actions.UserActionCreator, Object])
	    ], UsersContainerComponent);
	    return UsersContainerComponent;
	}());
	exports.UsersContainerComponent = UsersContainerComponent;


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var action_creator_1 = __webpack_require__(22);
	var UserActionCreator = (function (_super) {
	    __extends(UserActionCreator, _super);
	    function UserActionCreator($location, dispatcher, userService, guid) {
	        var _this = this;
	        _super.call(this, $location, userService, dispatcher, guid, AddOrUpdateUserAction, AllUsersAction, RemoveUserAction, SetCurrentUserAction);
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new AddOrUpdateUserSuccessAction(options.entity)); };
	        this.currentUserRemoved = function () { return _this.dispatcher.dispatch(new CurrentUserRemovedAction()); };
	        this.current = function (options) {
	            var id = _this.guid();
	            _this.service.current()
	                .then(function (results) {
	                _this.dispatcher.dispatch(new CurrentUserAction(id, results));
	            });
	            return id;
	        };
	    }
	    UserActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "userActionCreator",
	            viewProviders: ["$location", "dispatcher", "userService", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object])
	    ], UserActionCreator);
	    return UserActionCreator;
	}(action_creator_1.BaseActionCreator));
	exports.UserActionCreator = UserActionCreator;
	var AddOrUpdateUserAction = (function () {
	    function AddOrUpdateUserAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateUserAction;
	}());
	exports.AddOrUpdateUserAction = AddOrUpdateUserAction;
	var AllUsersAction = (function () {
	    function AllUsersAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllUsersAction;
	}());
	exports.AllUsersAction = AllUsersAction;
	var RemoveUserAction = (function () {
	    function RemoveUserAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveUserAction;
	}());
	exports.RemoveUserAction = RemoveUserAction;
	var UsersFilterAction = (function () {
	    function UsersFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return UsersFilterAction;
	}());
	exports.UsersFilterAction = UsersFilterAction;
	var SetCurrentUserAction = (function () {
	    function SetCurrentUserAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentUserAction;
	}());
	exports.SetCurrentUserAction = SetCurrentUserAction;
	var AddOrUpdateUserSuccessAction = (function () {
	    function AddOrUpdateUserSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateUserSuccessAction;
	}());
	exports.AddOrUpdateUserSuccessAction = AddOrUpdateUserSuccessAction;
	var CurrentUserRemovedAction = (function () {
	    function CurrentUserRemovedAction() {
	    }
	    return CurrentUserRemovedAction;
	}());
	exports.CurrentUserRemovedAction = CurrentUserRemovedAction;
	var CurrentUserAction = (function () {
	    function CurrentUserAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return CurrentUserAction;
	}());
	exports.CurrentUserAction = CurrentUserAction;


/***/ },
/* 348 */
/***/ function(module, exports) {

	"use strict";
	var User = (function () {
	    function User() {
	    }
	    return User;
	}());
	exports.User = User;


/***/ },
/* 349 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <user-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></user-editor>\r\n    <user-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></user-list>\r\n</div>\r\n"

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(351);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./users-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./users-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var UserService = (function (_super) {
	    __extends(UserService, _super);
	    function UserService($q, apiEndpoint, fetch) {
	        var _this = this;
	        _super.call(this, $q, apiEndpoint, fetch);
	        this.current = function (options) {
	            var deferred = _this.$q.defer();
	            _this.fetch.fromService({ method: "GET", url: _this.baseUri + "/current" }).then(function (results) {
	                deferred.resolve(results.data);
	            }).catch(function (error) {
	                deferred.resolve(error);
	            });
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(UserService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/user"; },
	        enumerable: true,
	        configurable: true
	    });
	    UserService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "userService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], UserService);
	    return UserService;
	}(core_1.BaseService));
	exports.UserService = UserService;


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(347);
	var core_1 = __webpack_require__(6);
	exports.removeUserReducer = function (state, action) {
	    if (action instanceof actions.RemoveUserAction)
	        core_1.pluckOut({ items: state.users, value: action.entity.id });
	    return state;
	};
	exports.addUserReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateUserAction) {
	        core_1.addOrUpdate({ items: state.users, item: action.entity });
	    }
	    return state;
	};
	exports.allUsersReducer = function (state, action) {
	    if (action instanceof actions.AllUsersAction) {
	        state.users = action.entities;
	    }
	    return state;
	};
	exports.setCurrentUserReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentUserAction) {
	        state.currentUserId = action.id;
	    }
	    return state;
	};
	exports.currentUserReducer = function (state, action) {
	    if (action instanceof actions.CurrentUserAction) {
	        state.currentUser = action.entity;
	    }
	    return state;
	};


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(6);
	var core_1 = __webpack_require__(6);
	var window_action_creator_1 = __webpack_require__(355);
	var reducers = __webpack_require__(356);
	var actions = __webpack_require__(320);
	var app = angular.module("app.window", [
	    "app.core"
	]);
	core_1.provide(app, window_action_creator_1.WindowActionCreator);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);
	for (var action in actions) {
	    core_1.provideAction(app, actions[action]);
	}
	app.run(["windowActionCreator", function (windowActionCreator) { }]);


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(6);
	var window_actions_1 = __webpack_require__(320);
	var WindowActionCreator = (function () {
	    function WindowActionCreator($window, dispatcher, guid, invokeAsync) {
	        var _this = this;
	        this.$window = $window;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.invokeAsync = invokeAsync;
	        core_1.Observable
	            .fromEvent($window, 'resize')
	            .map(function () { return $window.innerWidth; })
	            .debounce(100)
	            .distinctUntilChanged()
	            .subscribe(function (innderWidth) {
	            return _this.dispatcher.dispatch(new window_actions_1.ResizeAction(innderWidth));
	        });
	        core_1.Observable
	            .fromEvent($window, 'keydown')
	            .map(function (e) { return e.keyCode; })
	            .debounce(100)
	            .subscribe(function (keyCode) { return _this.dispatcher.dispatch(new window_actions_1.KeyDownAction(keyCode)); });
	    }
	    WindowActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "windowActionCreator",
	            viewProviders: ["$window", "dispatcher", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object])
	    ], WindowActionCreator);
	    return WindowActionCreator;
	}());
	exports.WindowActionCreator = WindowActionCreator;


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var window_actions_1 = __webpack_require__(320);
	var core_1 = __webpack_require__(6);
	exports.breakpointsReducer = function (state, action) {
	    if (action instanceof window_actions_1.ResizeAction) {
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "x-small";
	        if (core_1.isBetween(action.innerWidth, 769, 992))
	            state.breakpointName = "small";
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "medium";
	        if (core_1.isBetween(action.innerWidth, 0, 768))
	            state.breakpointName = "large";
	        if (core_1.isBetween(action.innerWidth, 0))
	            state.breakpointName = "x-large";
	    }
	    return state;
	};


/***/ }
/******/ ]);