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
                }, ({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        },

        getFontSize() {
            return new Promise((resolve, reject) => {
                bmFont.getFontSize(({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        }
    }
}

Vue.use(Font)