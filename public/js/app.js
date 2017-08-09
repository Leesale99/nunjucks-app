/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js\\";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// *********************
	//    Modules scripts
	// *********************
	
	// MINIFIED Vendor file should be copied over via copyScripts.js (it is by default)
	
	// IMPORT all modules here. Keep lib and minified files out this file.
	// Except for the example below
	
	//the import statments for CSS and JS can and should be exactly the same. Components that are CSS only should have some example markup in the HTML folder. The JS file is optional.
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(6);
	
	__webpack_require__(7);
	
	__webpack_require__(8);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(11);
	
	__webpack_require__(12);
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	__webpack_require__(15);
	
	__webpack_require__(16);
	
	// USING production variables is simple with the envVar function
	// Burn after reading
	
	var _libEnvVar = __webpack_require__(17);
	
	var _libEnvVar2 = _interopRequireDefault(_libEnvVar);
	
	var dev_var = (0, _libEnvVar2['default'])({ production: 'myProductionURL', development: 'myDevelopmentURL' });
	
	// Test using `$ gulp production` vs `$ gulp` in terminal
	console.log(dev_var);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	// IMPORTS
	
	// FUNCTION
	'use strict';
	
	(function () {
		'use strict';
		window.onload = function () {
			var bLazy = new Blazy({
				breakpoints: [{ width: 640, src: 'data-src-sm' }],
				success: function success(element) {
					setTimeout(function () {
						var parent = element.parentNode;
						parent.className = parent.className.replace(/\bloading\b/, '');
					}, 2000);
				}
			});
			setTimeout(bLazy.revalidate(), 200);
		};
	})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _libThrottled = __webpack_require__(4);
	
	var _libThrottled2 = _interopRequireDefault(_libThrottled);
	
	var _libRaf = __webpack_require__(5);
	
	var _libRaf2 = _interopRequireDefault(_libRaf);
	
	// add or remove BackToTop (bt) Element
	var btElement = function btElement() {
		this.addBackToTop = function () {
			if (!document.getElementById('BackToTop')) {
				var backToTop = document.createElement('div'),
				    mainElement = document.body;
				mainElement.appendChild(backToTop);
				backToTop.setAttribute('id', 'BackToTop');
				backToTop.setAttribute('class', 'back-to-top');
				backToTop.innerHTML = '<span>Back to Top</span>';
	
				setTimeout(function () {
					backToTop.classList.add('back-to-top--scrolled');
					backToTop.addEventListener('click', function () {
						btAnimateToTop(0, 2500);
					});
				}, 5);
			} else {
				document.getElementById('BackToTop').classList.add('back-to-top--scrolled');
			}
		}, this.hideBackToTop = function () {
			if (document.getElementById('BackToTop')) {
				document.getElementById('BackToTop').classList.remove('back-to-top--scrolled');
			}
		};
	};
	// MAIN FUNCTION
	// function scrollToY(scrollTargetY, speed) {...}
	// scrollTargetY: the target scrollY property of the window
	// speed: time in pixels per second
	var btAnimateToTop = function btAnimateToTop(scrollTargetY, speed) {
		var scrollY = window.scrollY || document.documentElement.scrollTop,
		    scrollTargetY = scrollTargetY || 0,
		    speed = speed || 2000,
		    easing = function easeInOutQuint(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 5);
			}
			return 0.5 * (Math.pow(pos - 2, 5) + 2);
		},
		    currentTime = 0;
	
		// min time .1, max time .8 seconds
		var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
	
		// add animation loop
		function tick() {
			currentTime += 1 / 60;
	
			var p = currentTime / time;
			var t = easing(p);
	
			if (p < 1) {
				(0, _libRaf2['default'])(tick);
	
				window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
			} else {
				window.scrollTo(0, scrollTargetY);
			}
		}
		// call it once to get started
		tick();
	};
	// INITIATE BT
	// bodyTop is goofy due to IE document.body.scrollTop bug
	var btInit = function btInit() {
		var bt = new btElement(),
		    bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
		if (bodyTop > 200) {
			bt.addBackToTop();
		} else {
			bt.hideBackToTop();
			return false;
		}
	};
	// Throttle btInit on scroll
	// window.onscroll = function() { Throttled(btInit(), 400) };
	document.addEventListener('scroll', function () {
		(0, _libThrottled2['default'])(btInit(), 400);
	}, false);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// Throttled is borrowed (stolen) from underscore. It thottles
	// how many times a function can be fired. used mainly for scroll
	"use strict";
	
	var Throttled = function Throttled(func, wait, options) {
		var now = Date.now || function () {
			return new Date().getTime();
		};
		var context, args, result;
		var timeout = null;
		var previous = 0;
		if (!options) options = {};
		var later = function later() {
			previous = options.leading === false ? 0 : now();
			timeout = null;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		};
		return function () {
			if (!previous && options.leading === false) previous = now();
			var remaining = wait - (now() - previous);
			context = this;
			args = arguments;
			if (remaining <= 0 || remaining > wait) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				previous = now();
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};
	module.exports = Throttled;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var root = typeof window === 'undefined' ? global : window,
	    vendors = ['moz', 'webkit'],
	    suffix = 'AnimationFrame',
	    raf = root['request' + suffix],
	    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
	
	for (var i = 0; !raf && i < vendors.length; i++) {
		raf = root[vendors[i] + 'Request' + suffix];
		caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
	}
	
	// Some versions of FF have rAF but not cAF
	if (!raf || !caf) {
		var last = 0,
		    id = 0,
		    queue = [],
		    frameDuration = 1000 / 60;
	
		raf = function (callback) {
			if (queue.length === 0) {
				var _now = now(),
				    next = Math.max(0, frameDuration - (_now - last));
				last = next + _now;
				setTimeout(function () {
					var cp = queue.slice(0);
					// Clear queue here to prevent
					// callbacks from appending listeners
					// to the current frame's queue
					queue.length = 0;
					for (var i = 0; i < cp.length; i++) {
						if (!cp[i].cancelled) {
							try {
								cp[i].callback(last);
							} catch (e) {
								setTimeout(function () {
									throw e;
								}, 0);
							}
						}
					}
				}, Math.round(next));
			}
			queue.push({
				handle: ++id,
				callback: callback,
				cancelled: false
			});
			return id;
		};
	
		caf = function (handle) {
			for (var i = 0; i < queue.length; i++) {
				if (queue[i].handle === handle) {
					queue[i].cancelled = true;
				}
			}
		};
	}
	
	module.exports = function (fn) {
		// Wrap in a new function to prevent
		// `cancel` potentially being assigned
		// to the native rAF function
		return raf.call(root, fn);
	};
	module.exports.cancel = function () {
		caf.apply(root, arguments);
	};
	module.exports.polyfill = function () {
		root.requestAnimationFrame = raf;
		root.cancelAnimationFrame = caf;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('accordion');

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jsLibThrottled = __webpack_require__(4);
	
	var _jsLibThrottled2 = _interopRequireDefault(_jsLibThrottled);
	
	var _jsLibRaf = __webpack_require__(5);
	
	var _jsLibRaf2 = _interopRequireDefault(_jsLibRaf);
	
	// add or remove BackToTop (bt) Element
	var btElement = function btElement() {
		this.addBackToTop = function () {
			if (!document.getElementById('BackToTop')) {
				var backToTop = document.createElement('div'),
				    mainElement = document.body;
				mainElement.appendChild(backToTop);
				backToTop.setAttribute('id', 'BackToTop');
				backToTop.setAttribute('class', 'back-to-top');
				backToTop.innerHTML = '<span>Back to Top</span>';
	
				setTimeout(function () {
					backToTop.classList.add('back-to-top--scrolled');
					backToTop.addEventListener('click', function () {
						btAnimateToTop(0, 2500);
					});
				}, 5);
			} else {
				document.getElementById('BackToTop').classList.add('back-to-top--scrolled');
			}
		}, this.hideBackToTop = function () {
			if (document.getElementById('BackToTop')) {
				document.getElementById('BackToTop').classList.remove('back-to-top--scrolled');
			}
		};
	};
	// MAIN FUNCTION
	// function scrollToY(scrollTargetY, speed) {...}
	// scrollTargetY: the target scrollY property of the window
	// speed: time in pixels per second
	var btAnimateToTop = function btAnimateToTop(scrollTargetY, speed) {
		var scrollY = window.scrollY || document.documentElement.scrollTop,
		    scrollTargetY = scrollTargetY || 0,
		    speed = speed || 2000,
		    easing = function easeInOutQuint(pos) {
			if ((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 5);
			}
			return 0.5 * (Math.pow(pos - 2, 5) + 2);
		},
		    currentTime = 0;
	
		// min time .1, max time .8 seconds
		var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
	
		// add animation loop
		function tick() {
			currentTime += 1 / 60;
	
			var p = currentTime / time;
			var t = easing(p);
	
			if (p < 1) {
				(0, _jsLibRaf2['default'])(tick);
	
				window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
			} else {
				window.scrollTo(0, scrollTargetY);
			}
		}
		// call it once to get started
		tick();
	};
	// INITIATE BT
	// bodyTop is goofy due to IE document.body.scrollTop bug
	var btInit = function btInit() {
		var bt = new btElement(),
		    bodyTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
		if (bodyTop > 200) {
			bt.addBackToTop();
		} else {
			bt.hideBackToTop();
			return false;
		}
	};
	// Throttle btInit on scroll
	// window.onscroll = function() { Throttled(btInit(), 400) };
	document.addEventListener('scroll', function () {
		(0, _jsLibThrottled2['default'])(btInit(), 400);
	}, false);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('carousel');

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('form login, signup, ...');

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('modal');

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	$(window).on("load", function () {
	
		$(".header__btn").on('click', function () {
			$('#main-menu').toggleClass('open');
			return false;
		});
	
		var $win = $('.wrapper'); // or $box parent container
		var $box = $("#main-menu");
	
		$win.on("click.Bst", function (event) {
			if ($box.has(event.target).length === 0 //checks if descendants of $box was clicked
			 && !$box.is(event.target) //checks if the $box itself was clicked
			) {
					$('#main-menu').removeClass('open');
				}
		});
	
		$("#main-menu__close").on('click', function () {
			$('#main-menu').removeClass('open');
			return false;
		});
	
		$("li.sub-menu > a").on('click', function () {
			$(this).next('ul').slideToggle(400);
			return false;
		});
	});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('search box in nav');

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('search filters');

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('social share AND social links');

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	console.log('tabs script should not care whether tabs are horizontal or vertical');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// IMPORTS
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _jsLibThrottled = __webpack_require__(4);
	
	var _jsLibThrottled2 = _interopRequireDefault(_jsLibThrottled);
	
	// Set Hero Height to fulscreen size
	var maxHeroHeight = function maxHeroHeight() {
	  var hero = document.getElementById('hero'),
	      windowHeight = window.innerHeight + 'px';
	
	  return hero.style.height = windowHeight;
	};
	
	window.addEventListener('load', maxHeroHeight);
	window.addEventListener('resize', function () {
	  return (0, _jsLibThrottled2['default'])(maxHeroHeight(), 400);
	});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	// Jquery adds inline styles and these need to be overwritten.
	// HeadStyle writes styles to the head tag and destorys them as well
	// Usage:
	// var dev_var = envVar({
	// 	production:'myProductionURL',
	// 	development: 'myDevelopmentURL'
	// });
	"use strict";
	
	var envVar = function envVar(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop) && ("development") === prop) {
				return obj[prop];
			}
		}
	};
	module.exports = envVar;

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map