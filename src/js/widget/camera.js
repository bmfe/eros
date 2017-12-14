/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-03-08
 */

var camera = weex.requireModule('bmCamera'),
    browser = weex.requireModule('bmBrowserImg'),
    modal = weex.requireModule('bmModal')

import isFunction from 'lodash/isFunction'

var Camera = Object.create(null)
var Image = Object.create(null)
Image.install = (Vue, options) => {
    Vue.prototype.$image = {
        // 上传图片
        upload(options, callback) {
            var options = options || {}
            if (isFunction(options) && !callback) {
                callback = options
                options = {}
            }
            return new Promise((resolve, reject) => {
                camera.uploadImage({
                    maxCount: options.maxCount || 1,
                    imageWidth: options.imageWidth || 0,
                    allowCrop: options.allowCrop || false,
                    header: options.header || {},
                    params: options.params || {},
                }, (resData) => {
                    if (!resData) {
                        resData = {
                            resCode: -1,
                            msg: '获取信息失败，请重试',
                            data: {}
                        }
                    }
                    if (isFunction(callback)) {
                        callback.call(this, resData)
                    }
                    resolve(resData)
                })
            })
        },
        // 浏览图片
        browser(options, callback) {
            var options = options || {}
            if (isFunction(options) && !callback) {
                callback = options
                options = {}
            }

            return new Promise((resolve, reject) => {
                browser.open({
                    index: options.index,
                    images: options.images,
                    type: 'network'
                }, (resData) => {
                    // console.log(resData)
                })
            })
        }
    }
}

Camera.install = (Vue, options) => {
    Vue.prototype.$camera = {
        // 扫一扫
        scan(callback) {
            return new Promise((resolve, reject) => {
                camera.scan((resData) => {
                    if (!resData) {
                        resData = {
                            resCode: -1,
                            msg: '获取信息失败，请重试',
                            data: {}
                        }
                    }
                    if (isFunction(callback)) {
                        callback.call(this, resData)
                    }
                    // 修改默认逻辑 直接抛出最外面
                    resolve(resData)
                })
            })
        },
    }
}

Vue.use(Camera)
Vue.use(Image)