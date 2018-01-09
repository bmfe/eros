// { "framework": "Vue" }

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
/******/ 	return __webpack_require__(__webpack_require__.s = 107);
/******/ })
/************************************************************************/
/******/ ({

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(108)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(109)\n\n/* template */\nvar __vue_template__ = __webpack_require__(110)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/tab2/amap.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-9e733b46\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/tab2/amap.vue?entry=true\n// module id = 107\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/amap.vue?");

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"container\": {\n    \"position\": \"relative\",\n    \"flex\": 1,\n    \"backgroundColor\": \"#ffffff\"\n  },\n  \"map\": {\n    \"flex\": 1,\n    \"position\": \"relative\",\n    \"backgroundColor\": \"#ffffff\",\n    \"minHeight\": 800,\n    \"borderBottomWidth\": 10,\n    \"borderBottomColor\": \"#ffffff\"\n  },\n  \"map-control\": {\n    \"paddingTop\": 20,\n    \"minHeight\": 600\n  },\n  \"title\": {\n    \"marginLeft\": 20,\n    \"paddingLeft\": 20,\n    \"paddingTop\": 10,\n    \"paddingBottom\": 10,\n    \"fontSize\": 36,\n    \"borderLeftWidth\": 6,\n    \"borderLeftColor\": \"#0f89f5\",\n    \"color\": \"#222222\",\n    \"textAlign\": \"left\"\n  },\n  \"tips\": {\n    \"marginTop\": 20,\n    \"marginRight\": 20,\n    \"marginBottom\": 20,\n    \"marginLeft\": 20,\n    \"paddingTop\": 10,\n    \"paddingRight\": 10,\n    \"paddingBottom\": 10,\n    \"paddingLeft\": 10,\n    \"color\": \"#666666\",\n    \"fontSize\": 20\n  },\n  \"btn-group\": {\n    \"display\": \"flex\",\n    \"flexDirection\": \"row\"\n  },\n  \"btnbox\": {\n    \"flex\": 1\n  },\n  \"btn\": {\n    \"marginTop\": 20,\n    \"marginRight\": 20,\n    \"marginBottom\": 20,\n    \"marginLeft\": 20,\n    \"paddingTop\": 20,\n    \"paddingRight\": 20,\n    \"paddingBottom\": 20,\n    \"paddingLeft\": 20,\n    \"backgroundColor\": \"#1ba1e2\",\n    \"borderRadius\": 5,\n    \"color\": \"#ffffff\",\n    \"textAlign\": \"center\",\n    \"cursor\": \"pointer\",\n    \"fontSize\": 28\n  },\n  \"btn-marvel\": {\n    \"backgroundColor\": \"#e01a22\"\n  },\n  \"btn-dc\": {\n    \"backgroundColor\": \"#36548f\"\n  },\n  \"btn-reverse\": {\n    \"backgroundColor\": \"#ffffff\",\n    \"color\": \"#444444\",\n    \"borderWidth\": 2,\n    \"borderColor\": \"#cccccc\"\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-9e733b46!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/pages/eros-demos/tab2/amap.vue\n// module id = 108\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/amap.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-9e733b46!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar modal = weex.requireModule('bmModal');\nvar icons = ['http://img1.vued.vanthink.cn/vuedae096307bfda38c9af8f5be0a80a3644.png', 'http://img1.vued.vanthink.cn/vuedc1f33fb4f2be7d8e7698f11591c57be9.png', 'http://img1.vued.vanthink.cn/vued38b5320814135ab1d5e7eccb95ad61ac.png', 'http://img1.vued.vanthink.cn/vued2c162076cf3e0c9b7047e4d761a99dab.png', 'http://img1.vued.vanthink.cn/vued5a564cecfec72460eeebc628935e9cb9.png'];\nvar icons2 = ['http://img1.vued.vanthink.cn/vued3b475600fd95b3609931ae8ec729448a.png', 'http://img1.vued.vanthink.cn/vued7ec1a8aaadab2a0840e656de35ae3947.png', 'http://img1.vued.vanthink.cn/vued96f7124a013b12bb6498b5cc7862ad9a.png', 'http://img1.vued.vanthink.cn/vued940e8ab79a5a6f45d29b7ec4cd26ebb4.png', 'http://img1.vued.vanthink.cn/vued49ae3f1383f76992f42aa2e79d643649.png'];\nmodule.exports = {\n  data: {\n    pos: [116.487, 40.00003],\n    zoom: 9,\n    pointArr: [{\n      position: [116.3944071, 39.9278548],\n      title: '北京市',\n      events: {\n        click: function click() {\n          modal.alert('北京市区');\n        }\n      }\n    }]\n  },\n\n  methods: {\n    markerClick: function markerClick() {\n      modal.alert({\n        message: 'marker clicked!'\n      });\n    },\n    addMarvel: function addMarvel() {\n      for (var i = 0; i < 5; i++) {\n        var coor = [115.487 + Math.random() * 1, 39.7278548 + Math.random()];\n        var n = i % 5;\n        var icon = icons[n];\n        this.pointArr.push({\n          position: coor,\n          title: '坐标:' + coor.join(','),\n          icon: icon\n        });\n      }\n    },\n    addDC: function addDC() {\n      for (var i = 0; i < 5; i++) {\n        var coor = [116.487 + Math.random() * 1, 39.7278548 + Math.random()];\n        var n = i % 5;\n        var icon = icons2[n];\n        this.pointArr.push({\n          position: coor,\n          title: '坐标:' + coor.join(','),\n          icon: icon\n        });\n      }\n    },\n    removePoints: function removePoints() {\n      if (this.pointArr.length < 2) {\n        return;\n      }\n      for (var i = 0; i < 10; i++) {\n        this.pointArr.pop();\n        this.pointArr = Array.from(this.pointArr);\n      }\n    }\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/tab2/amap.vue\n// module id = 109\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/amap.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"container\"]\n  }, [_c('weex-amap', {\n    staticClass: [\"map\"],\n    attrs: {\n      \"id\": \"map2017\",\n      \"mapInstance\": _vm.map,\n      \"zoom\": _vm.zoom,\n      \"center\": _vm.pos\n    }\n  }, _vm._l((_vm.pointArr), function(point, index) {\n    return _c('weex-amap-marker', {\n      key: index,\n      attrs: {\n        \"position\": point.position,\n        \"title\": point.title,\n        \"icon\": point.icon\n      },\n      on: {\n        \"click\": _vm.markerClick\n      }\n    })\n  })), _c('div', {\n    staticClass: [\"map-control\"]\n  }, [_c('text', {\n    staticClass: [\"title\"]\n  }, [_vm._v(\"Marvel vs DC \")]), _c('text', {\n    staticClass: [\"tips\"]\n  }, [_vm._v(\"地图压力测试\")]), _c('div', {\n    staticClass: [\"btn-group\"]\n  }, [_c('div', {\n    staticClass: [\"btnbox\"],\n    on: {\n      \"click\": _vm.addMarvel\n    }\n  }, [_c('text', {\n    staticClass: [\"btn\", \"btn-marvel\"]\n  }, [_vm._v(\"Add Marvel Hero\")])]), _c('div', {\n    staticClass: [\"btnbox\"],\n    on: {\n      \"click\": _vm.addDC\n    }\n  }, [_c('text', {\n    staticClass: [\"btn\", \"btn-dc\"]\n  }, [_vm._v(\" Add DC Hero\")])])]), _c('div', {\n    staticClass: [\"btn-group\"]\n  }, [_c('div', {\n    staticClass: [\"btnbox\"],\n    on: {\n      \"click\": _vm.removePoints\n    }\n  }, [_c('text', {\n    staticClass: [\"btn\", \"btn-reverse\"]\n  }, [_vm._v(\"Clear HeroS\")])])])])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-9e733b46!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/tab2/amap.vue\n// module id = 110\n// module chunks = 9\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/amap.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-9e733b46!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ })

/******/ });