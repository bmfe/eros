const modal = weex.requireModule('bmModal')
const Notice = Object.create(null)

import _isFunction from 'lodash/isFunction'
import _isObject from 'lodash/isObject'

Notice.install = (Vue, options) => {
    Vue.prototype.$notice = {
        alert (options) {
            if (options.message) {
                return new Promise((resolve, reject) => {
                    modal.alert({
                        // titleAlign: options.titleAlign || 'center',
                        title: options.title || '',
                        message: options.message || '',
                        // messageAlign: options.messageAlign || 'center',
                        okTitle: options.okTitle || '确定'
                    }, (params) => {
                        if (_isFunction(options.callback)) {
                            options.callback.call(params)
                        }
                        resolve()
                    })
                })
            }
        },
        confirm (options) {
            if (options.message) {
                return new Promise((resolve, reject) => {
                    modal.confirm({
                        // titleAlign: options.titleAlign || 'center',
                        title: options.title || '',
                        message: options.message || '',
                        // messageAlign: options.messageAlign || 'center',
                        cancelTitle: options.cancelTitle || '取消',
                        okTitle: options.okTitle || '确定'
                    }, (params) => {
                        if (_isFunction(options.cancelCallback)) {
                            options.cancelCallback.call(params)
                        }
                        reject()
                    }, (params) => {
                        if (_isFunction(options.okCallback)) {
                            options.okCallback.call(params)
                        }
                        resolve()
                    })
                })
            }
        },
        loading: {
            show (message = '') {
                modal.showLoading({ message })
            },
            hide () {
                setTimeout(() => {
                    modal.hideLoading()
                }, 200)
            }
        },
        toast (options) {
            if (!options) return
            if (_isObject(options)) {
                modal.toast({
                    message: options.message
                })
            } else {
                modal.toast({
                    message: options
                })
            }
        }
    }
}

Vue.use(Notice)
