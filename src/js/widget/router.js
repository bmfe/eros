/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-04-05
 */

var modal = weex.requireModule('bmModal'),
    router = weex.requireModule('bmRouter'),
    storage = weex.requireModule('bmStorage'),
    globalEvent = weex.requireModule('globalEvent')

import isEmpty from 'lodash/isEmpty'
import isFunction from 'lodash/isFunction'
import _isUndefined from 'lodash/isUndefined'
import isPlainObject from 'lodash/isPlainObject'

import ROUTES from 'Config/routes'
// 客户端默认打开页面的动画
export const DEFAULT_ANIMATETYPE = 'PUSH'

var Router = {
    // 页面将要出现
    viewWillAppear: [],
    // 页面已经出现
    viewDidAppear: [],
    // 页面被拿出栈时即将展示
    viewWillBackAppear: [],
    // 页面被拿出栈时已经展示
    viewDidBackAppear: [],
    // 页面将要放在栈中
    viewWillDisappear: [],
    // 页面已经放在栈中
    viewDidDisappear: []
}

globalEvent.addEventListener("viewWillAppear", function(options) {
    if (options.type === 'open' || options.type === 'refresh') {
        router.getParams((params) => {
            Router.viewWillAppear.map((item) => {
                item(params, options)
            })
        })
    } else if (options.type === 'back') {
        storage.getData('router.backParams', (resData) => {
            Router.viewWillBackAppear.map((item) => {
                item(JSON.parse(resData.data.value || '{}'), options)
            })
        })
    }
})

globalEvent.addEventListener("viewDidAppear", function(options) {
    if (options.type === 'open' || options.type === 'refresh') {
        router.getParams((params) => {
            Router.viewDidAppear.map((item) => {
                item(params, options)
            })
        })
    } else if (options.type === 'back') {
        storage.getData('router.backParams', (resData) => {
            Router.viewDidBackAppear.map((item) => {
                item(JSON.parse(resData.data.value || '{}'), options)
            })
            storage.deleteData('router.backParams')
        })
    }
})

globalEvent.addEventListener("viewWillDisappear", function(options) {
    modal.hideLoading()
    Router.viewWillDisappear.map((item) => {
        item(options)
    })
})

globalEvent.addEventListener("viewDidDisappear", function(options) {
    Router.viewDidDisappear.map((item) => {
        item(options)
    })
})

// todo 修改逻辑
Router.install = (Vue, options) => {
    Vue.mixin({
        beforeCreate() {
            if (this.$options.bmRouter) {
                var bmRouter = this.$options.bmRouter
                for (var i in bmRouter) {
                    if (!Router[i]) {
                        Router[i] = []
                    }
                    Router[i].push(bmRouter[i].bind(this))
                }
            }
        }
    })
    Vue.prototype.$router = {
        open(options) {
            options = options || {}
            let currentPageInfo = this.getUrl(options.name)
            if (!currentPageInfo || !currentPageInfo.url) return
            options.canBack = _isUndefined(options.canBack) ? true : options.canBack
            return new Promise((resolve, reject) => {
                router.open({
                    url: currentPageInfo.url,
                    type: options.type || DEFAULT_ANIMATETYPE,
                    params: options.params || {},
                    canBack: !!options.canBack,
                    navShow: options.navShow || !!currentPageInfo.title,
                    navTitle: options.navTitle || currentPageInfo.title,
                    statusBarStyle: options.statusBarStyle || 'Default',
                    isRunBackCallback: isFunction(options.backCallback)
                }, (data) => {
                    if (isFunction(options.backCallback)) {
                        options.backCallback.call(this, data)
                    }
                })
            })
        },
        back(options) {
            options = options || {}
            return new Promise((resolve, reject) => {
                router.back({
                    type: options.type || DEFAULT_ANIMATETYPE,
                    length: options.length || 1
                }, (data) => {
                    if (isFunction(options.callback)) {
                        options.callback.call(this, data)
                    }
                    resolve(data)
                })
            })
        },
        getParams(callback) {
            return new Promise((resolve, reject) => {
                router.getParams((params) => {
                    if (isFunction(callback)) {
                        callback.call(this, params)
                    }
                    resolve(params)
                })
            })
        },
        getUrl(page) {
            console.log(ROUTES)
            console.log(page)
            let currentPageInfo = ROUTES[page]
            if (!currentPageInfo) {
                modal.alert({
                    message: '跳转页面不存在',
                    okTitle: '确定'
                })
                return false
            }
            return currentPageInfo
        },
        refresh() {
            router.refreshWeex()
        },
        setBackParams(params) {
            if (isPlainObject(params)) {
                storage.setData('router.backParams', JSON.stringify(params))
            }
        },
        toWebView(params) {
            if (!params.url) {
                return
            }
            params.title = params.title || 'weex-eros'
                // params.shareInfo = {
                //     title: params.shareTitle,
                //     content: params.content || '',
                //     image: params.image || '',
                //     url: params.url || '',
                //     platforms: params.platforms || [] // 传空的话默认全部
                // }
            if (params.shareInfo) {
                !params.shareInfo.image && (params.shareInfo.image = 'https://img.benmu-health.com/wechat/jyt100.png')
            }

            router.toWebView(params)
        },
        toMap(options) {
            // options = {
            //     type:'NAVIGATION', //type类型：NAVIGATION(表现方式为：地图上添加起点终点标示大头针，终点标示上面有个导航的按钮)
            //     title: '页面标题', //页面标题
            //     navigationInfo: {
            //         title: '北京朝阳医院', //目的地名称
            //         address: '北京市朝阳区工体南路8号', //目的地地址
            //         longitude:'', //目的地经度
            //         latitude:'' //目的地纬度
            //      }
            // }
            router.toMap(options)
        },
        toCallPhone(phone) {
            if (phone) {
                router.callPhone({
                    phone: phone
                })
            }
        },
        finish() {
            router.finish()
        }
    }
}

Vue.use(Router)