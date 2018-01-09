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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

eval("var __vue_exports__, __vue_options__\nvar __vue_styles__ = []\n\n/* styles */\n__vue_styles__.push(__webpack_require__(91)\n)\n\n/* script */\n__vue_exports__ = __webpack_require__(92)\n\n/* template */\nvar __vue_template__ = __webpack_require__(93)\n__vue_options__ = __vue_exports__ = __vue_exports__ || {}\nif (\n  typeof __vue_exports__.default === \"object\" ||\n  typeof __vue_exports__.default === \"function\"\n) {\nif (Object.keys(__vue_exports__).some(function (key) { return key !== \"default\" && key !== \"__esModule\" })) {console.error(\"named exports are not supported in *.vue files.\")}\n__vue_options__ = __vue_exports__ = __vue_exports__.default\n}\nif (typeof __vue_options__ === \"function\") {\n  __vue_options__ = __vue_options__.options\n}\n__vue_options__.__file = \"/Users/yangmingzhe/Work/opensource/eros-template/src/js/pages/eros-demos/tab2/index.vue\"\n__vue_options__.render = __vue_template__.render\n__vue_options__.staticRenderFns = __vue_template__.staticRenderFns\n__vue_options__._scopeId = \"data-v-01ea07c0\"\n__vue_options__.style = __vue_options__.style || {}\n__vue_styles__.forEach(function (module) {\n  for (var name in module) {\n    __vue_options__.style[name] = module[name]\n  }\n})\nif (typeof __register_static_styles__ === \"function\") {\n  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)\n}\n\nmodule.exports = __vue_exports__\nmodule.exports.el = 'true'\nnew Vue(module.exports)\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/pages/eros-demos/tab2/index.vue?entry=true\n// module id = 90\n// module chunks = 7\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/index.vue?");

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

eval("module.exports = {\n  \"container\": {\n    \"backgroundColor\": \"#f2f3f4\"\n  },\n  \"list\": {\n    \"width\": 750,\n    \"alignItems\": \"center\",\n    \"justifyContent\": \"center\",\n    \"backgroundColor\": \"#f2f3f4\"\n  },\n  \"panel\": {\n    \"backgroundColor\": \"#ffffff\",\n    \"width\": 750,\n    \"height\": 100,\n    \"paddingLeft\": 24,\n    \"justifyContent\": \"center\",\n    \"borderBottomWidth\": 1,\n    \"borderStyle\": \"solid\",\n    \"borderColor\": \"#e0e0e0\"\n  },\n  \"category\": {\n    \"marginBottom\": 10,\n    \"marginTop\": 0,\n    \"paddingLeft\": 24,\n    \"width\": 750,\n    \"height\": 200,\n    \"backgroundColor\": \"#ffffff\",\n    \"justifyContent\": \"center\"\n  },\n  \"category-text\": {\n    \"fontWeight\": \"600\",\n    \"fontSize\": 50\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-01ea07c0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0!./src/js/pages/eros-demos/tab2/index.vue\n// module id = 91\n// module chunks = 7\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-loader.js!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/style-rewriter.js?id=data-v-01ea07c0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\nexports.default = {\n  methods: {\n    handle: function handle(type) {\n      this['handle' + type]();\n    },\n    handleAxios: function handleAxios() {\n      var self = this;\n      this.$fetch({\n        name: 'COMMON.getInfo',\n        data: {\n          name: 'weex-eros'\n        }\n      }).then(function (resData) {\n        self.$notice.alert({\n          title: '提示',\n          message: '请求成功：' + resData.data,\n          okTitle: '确定',\n          callback: function callback() {\n            self.$notice.toast('您点击了确定');\n          }\n        });\n      });\n      // this.$service('common/getInfo', {\n      //   a: 2123123,\n      // }).then(resData => {\n      //   console.log(resData)\n      // })\n    },\n    handleRouter: function handleRouter() {\n      this.$router.open({\n        name: 'tab2.test',\n        statusBarStyle: 'LightContent'\n      });\n    },\n    handleRouterPresent: function handleRouterPresent() {\n      this.$router.open({\n        name: 'tab2.test',\n        type: 'PRESENT'\n      });\n    },\n    handleRouterAmap: function handleRouterAmap() {\n      this.$router.open({\n        name: 'tab2.amap'\n      });\n    },\n    handleRouterWebView: function handleRouterWebView() {\n      this.$router.toWebView({\n        url: 'https://www.baidu.com'\n      });\n    },\n    handleAlert: function handleAlert() {\n      var _this = this;\n\n      this.$notice.alert({\n        title: '提示',\n        message: '这是一个弹窗',\n        okTitle: '确定',\n        callback: function callback() {\n          _this.$notice.toast('您点击了确定');\n        }\n      });\n    },\n    handleConfirm: function handleConfirm() {\n      var _this2 = this;\n\n      this.$notice.confirm({\n        title: '提示',\n        message: '这是一个选择弹窗',\n        okTitle: '确定文案',\n        cancelTitle: '取消文案',\n        okCallback: function okCallback() {\n          _this2.$notice.toast({ message: '您点击了确定' });\n        },\n        cancelCallback: function cancelCallback() {\n          _this2.$notice.toast({ message: '您点击了取消' });\n        }\n      });\n    },\n    handleLoading: function handleLoading() {\n      var _this3 = this;\n\n      this.$notice.loading.show('loading自定义文案');\n      setTimeout(function () {\n        _this3.$notice.loading.hide();\n      }, 1000);\n    },\n    handleToast: function handleToast() {\n      this.$notice.toast('这是一个toast');\n    },\n    handleGeo: function handleGeo() {\n      var _this4 = this;\n\n      this.$geo.get().then(function (resData) {\n        _this4.lat = resData.data.locationLat;\n        _this4.lng = resData.data.locationLng;\n      }, function (error) {\n        console.log('error', error);\n      });\n    },\n    handleScan: function handleScan() {\n      var _this5 = this;\n\n      this.$camera.scan(function (resData) {\n        _this5.$notice.alert({\n          title: '提示',\n          message: resData\n        });\n      });\n    },\n    handleUploadImg: function handleUploadImg() {\n      var _this6 = this;\n\n      this.$image.pickAndUpload({\n        maxCount: 3\n      }, function (resData) {\n        _this6.$notice.alert({\n          title: '提示',\n          message: resData\n        });\n      });\n    },\n    handleCallPhone: function handleCallPhone() {\n      this.$coms.call(123);\n    },\n    handleLocalIconfont: function handleLocalIconfont() {\n      this.$router.open({\n        name: 'tab2.iconfont'\n      });\n    },\n\n    onappear: function onappear(idx, e) {\n      var appearId = this.rows[idx].id;\n      var appearIds = this.appearIds;\n      appearIds.push(appearId);\n      this.getMinAndMaxIds(appearIds);\n    },\n    ondisappear: function ondisappear(idx, e) {\n      var disAppearId = this.rows[idx].id;\n      var appearIds = this.appearIds;\n      var index = appearIds.indexOf(disAppearId);\n      if (index > -1) {\n        appearIds.splice(index, 1);\n      }\n      this.getMinAndMaxIds(appearIds);\n    },\n    getMinAndMaxIds: function getMinAndMaxIds(appearIds) {\n      appearIds.sort(function (a, b) {\n        return a - b;\n      });\n      this.appearIds = appearIds;\n      this.appearMax = appearIds[appearIds.length - 1];\n      this.appearMin = appearIds[0];\n    }\n  },\n  data: function data() {\n    return {\n      appearMin: 1,\n      appearMax: 1,\n      appearIds: [],\n      lat: '',\n      lng: '',\n      rows: [{\n        id: 1,\n        name: '发送请求',\n        type: 'Axios'\n      }, {\n        id: 2,\n        name: '正常打开一个页面',\n        type: 'Router'\n      }, {\n        id: 3,\n        name: '插入打开一个页面',\n        type: 'RouterPresent'\n      }, {\n        id: 3,\n        name: '插入打开一个webview',\n        type: 'RouterWebView'\n      }, {\n        id: 4,\n        name: '提示弹窗',\n        type: 'Alert'\n      }, {\n        id: 5,\n        name: '选择弹窗',\n        type: 'Confirm'\n      }, {\n        id: 6,\n        name: 'loading弹窗',\n        type: 'Loading'\n      }, {\n        id: 7,\n        name: 'toast弹窗',\n        type: 'Toast'\n      }, {\n        id: 8,\n        name: '获取当前坐标',\n        type: 'Geo'\n      }, {\n        id: 9,\n        name: '扫一扫',\n        type: 'Scan'\n      }, {\n        id: 10,\n        name: '上传图片',\n        type: 'UploadImg'\n      }, {\n        id: 11,\n        name: '拨打电话',\n        type: 'CallPhone'\n      }, {\n        id: 12,\n        name: '地图',\n        type: 'RouterAmap'\n      }, {\n        id: 13,\n        name: '本地iconfont',\n        type: 'LocalIconfont'\n      }]\n    };\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0!./src/js/pages/eros-demos/tab2/index.vue\n// module id = 92\n// module chunks = 7\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/script-loader.js!../eros-cli/node_modules/_babel-loader@7.1.2@babel-loader/lib!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 93:
/***/ (function(module, exports) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: [\"container\"]\n  }, [_c('div', {\n    staticClass: [\"category\"]\n  }, [_c('text', {\n    staticClass: [\"category-text\"]\n  }, [_vm._v(\"widget\")]), _c('text', [_vm._v(_vm._s(_vm.lat))])]), _c('list', {\n    staticClass: [\"list\"]\n  }, _vm._l((_vm.rows), function(v, i) {\n    return _c('cell', {\n      key: i,\n      staticClass: [\"panel\"],\n      appendAsTree: true,\n      attrs: {\n        \"append\": \"tree\",\n        \"index\": i\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.handle(v.type)\n        }\n      }\n    }, [_c('text', {\n      staticClass: [\"text\"]\n    }, [_vm._v(_vm._s(v.name))])])\n  }))])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\n\n//////////////////\n// WEBPACK FOOTER\n// ../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-01ea07c0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0!./src/js/pages/eros-demos/tab2/index.vue\n// module id = 93\n// module chunks = 7\n\n//# sourceURL=webpack:///./src/js/pages/eros-demos/tab2/index.vue?../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/template-compiler.js?id=data-v-01ea07c0!../eros-cli/node_modules/_weex-vue-loader@0.4.2@weex-vue-loader/lib/selector.js?type=template&index=0");

/***/ })

/******/ });