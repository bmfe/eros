/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

import _isFunction from 'lodash/isFunction'

var bmFont = weex.requireModule('bmFont')

var Font = Object.create(null)

Font.install = (Vue, options) => {
    Vue.prototype.$font = {
        changeFontSize(options) {
            return new Promise((resolve, reject) => {
                bmFont.changeFontSize({
                    fontSize: options.fontSize || 'NORM'
                }, resData => {
                    resData.status == 0 ? resolve(resData.data) : reject(resData)
                })
            })
        },

        getFontSize() {
            return new Promise((resolve, reject) => {
                bmFont.getFontSize((resData) => {
                    resData.status == 0 ? resolve(resData.data) : reject(resData)
                })
            })
        }
    }
}

Vue.use(Font)