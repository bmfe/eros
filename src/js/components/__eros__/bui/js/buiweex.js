/**
 * 框架中常用的工具方法
 */

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var navigator = weex.requireModule('navigator');
var navigatorEx = weex.requireModule("NavigatorExModule");

var common = {
    //components下的组件
    "buiActionSheet": require("../components/bui-actionsheet.vue"),
    "buiButton": require("../components/bui-button.vue"),
    "buiCheckbox": require("../components/bui-checkbox.vue"),
    "buiDialog": require("../components/bui-dialog.vue"),
    "buiDropdown": require("../components/bui-dropdown.vue"),
    "buiHeader": require("../components/bui-header.vue"),
    "buiIcon": require("../components/bui-icon.vue"),
    "buiImage": require("../components/bui-image.vue"),
    "buiLazyRender": require("../components/bui-lazy-render.vue"),
    "buiLoad": require("../components/bui-load.vue"),
    "buiMask": require("../components/bui-mask.vue"),
    "buiPanel": require("../components/bui-panel.vue"),
    "buiRadio": require("../components/bui-radio.vue"),
    "buiSearchbarCenter": require("../components/bui-searchbar-center.vue"),
    "buiSearchbarLeft": require("../components/bui-searchbar-left.vue"),
    "buiSliderBar": require("../components/bui-slider-bar.vue"),
    "buiSwitch": require("../components/bui-switch.vue"),
    "buiTabbar": require("../components/bui-tabbar.vue"),
    "buiTabbarItem": require("../components/bui-tabbar-item.vue"),
    "buiTabbarItemA" :require("../components/bui-tabbar-item-a.vue") ,
    "buiTabbarScroll": require("../components/bui-tabbar-scroll.vue"),
    "buiTabbarScrollItem": require("../components/bui-tabbar-scroll-item.vue"),
    "buiTip": require("../components/bui-tip.vue"),
    "buiVideo": require("../components/bui-video.vue"),
    "buiContent": require("../components/bui-content.vue"),
    "buiContentScroll": require("../components/bui-content-scroll.vue"),
    "buiImageSlider": require("../components/bui-image-slider.vue"),

    "toast": function (msg) {
        modal.toast({
            message: msg,
            duration: 0.4
        });
    },
    "alert": function (msg, callback, option) {
        var okTitle = "确定";
        if (option) {
            if (option.okTitle)
                okTitle = option.okTitle;
        }
        modal.alert({
            message: msg,
            duration: 0.4,
            okTitle: okTitle
        }, function (value) {
            callback && callback(value);
        });
    },
    "confirm": function (msg, callback, option) {
        var okTitle = "确定", cancelTitle = "取消";
        if (option) {
            if (option.okTitle)
                okTitle = option.okTitle;
            if (option.cancelTitle)
                cancelTitle = option.cancelTitle;
        }
        modal.confirm({
            message: msg,
            duration: 0.4,
            okTitle: okTitle,
            cancelTitle: cancelTitle,
        }, function (value) {
            callback && callback(value);
        });
    },
    "show": function (params, callback) {
        var el = params.id;
        if (!el) {
            return;
        }
        var duration = params.duration;
        var transform = params.transform || 'translate(0, 0)';
        var transformOrigin = params.transformOrigin || 'center center';
        var timingFunction = params.timingFunction || 'ease';

        animation.transition(el, {
            styles: {
                opacity: '1',
                transform: transform,
                transformOrigin: transformOrigin
            },
            duration: duration || 0,
            timingFunction: timingFunction,
            delay: 0
        }, function () {
            callback && callback();
        });
    },
    "hide": function (params, callback) {
        var el = params.id;
        if (!el) {
            return;
        }
        var duration = params.duration;
        var transform = params.transform || 'translate(0, 0)';
        var transformOrigin = params.transformOrigin || 'center center';
        var timingFunction = params.timingFunction || 'ease';

        animation.transition(el, {
            styles: {
                opacity: '0',
                transform: transform,
                transformOrigin: transformOrigin
            },
            duration: duration || 0,
            timingFunction: timingFunction,
            delay: 0
        }, function () {
            callback && callback();
        });
    },
    "getContextPath": function () {
        var url;
        var bundleUrl = weex.config.bundleUrl;
        url = bundleUrl.split('/').slice(0, -1).join('/');
        return url;
    },
    "push": function (url, params) {
        var paramsStr = "";
        if (params) {
            for (var key in params) {
                paramsStr += key + "=" + encodeURIComponent(params[key]) + "&";
            }
        }
        if (url.indexOf('?') < 0) {
            url += "?";
        }
        url += paramsStr;
        //link平台中使用navigatorEx,debugtool中使用navigator
        try {
            navigatorEx.push(url);
        } catch (ex) {
            navigator.push({
                url: url,
                animated: 'true'
            }, function (e) {
            });
        }
    },
    "pop": function () {
        navigator.pop({
            animated: 'true'
        }, function (e) {
        });
    },
    "getPageParams": function () {
        var params = {};
        var url = weex.config.bundleUrl;
        var index = url.indexOf("?");
        if (index > 0) {
            var query = url.substring(index + 1);
            var temp = query.split('&');
            var key, value;
            for (var p in temp) {
                if (temp[p]) {
                    key = temp[p].split('=')[0];
                    value = temp[p].split('=')[1];
                    params[key] = decodeURIComponent(value);
                }
            }
        }
        return params;
    }
}

module.exports = common;