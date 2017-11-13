/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

import isFunction from 'lodash/isFunction'

var bmFont = weex.requireModule('bmFont')

var Font = Object.create(null)

Font.install = (Vue, options) => {
    Vue.prototype.$font = {
        changeFontSize(options) {
            return new Promise((resolve, reject) => {
                bmFont.changeFontSize({
                    fontSize: options.fontSize || 'NORM'
                }, resData => {
                    if (isFunction(options.callback)) {
                        options.callback.call(this, data)
                    }
                    if (resData && resData.resCode == 0) {
                        resolve(resData)
                    } else {
                        reject(resData)
                    }
                })
            })
        },

        getFontSize(callback) {
            return new Promise((resolve, reject) => {
                bmFont.getFontSize((resData) => {
                    if (isFunction(callback)) {
                        callback.call(this, resData)
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

Vue.use(Font)