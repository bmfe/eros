/**
 * @Author: songqi
 * @Date:   2017-05-05
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

import isFunction from 'lodash/isFunction'

const tools = weex.requireModule('bmTool')

const Tools = Object.create(null)

Tools.install = (Vue, options) => {
    Vue.prototype.$tools = {
        resignKeyboard() {
            return new Promise((resolve, reject) => {
                tools.resignKeyboard(resData => {
                    if (resData && resData.resCode == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            })
        },

        // 是否安装微信
        isInstallWXApp(options) {
            options = options || {}
            return new Promise((resolve, reject) => {
                tools.isInstallWXApp(resData => {
                    if (isFunction(options.callback)) {
                        options.callback.call(this)
                    }
                    if (resData && resData.resCode == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            })
        },

        // 获取 cid
        getCid(options) {
            options = options || {}
            return new Promise((resolve, reject) => {
                tools.getCid(resData => {
                    if (isFunction(options.callback)) {
                        options.callback.call(this)
                    }
                    if (resData && resData.resCode == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            })
        },

        // 复制内容到剪切板
        copyString(string, callback) {
            return new Promise((resolve, reject) => {
                tools.copyString(string, resData => {
                    if (isFunction(callback)) {
                        callback.call(this)
                    }
                    if (resData && resData.resCode == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            })
        }
    }
}


Vue.use(Tools)