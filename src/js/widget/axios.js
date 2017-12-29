import _isFunction from 'lodash/isFunction'
const bmAxios = weex.requireModule('bmAxios')
export default class Axios {
    constructor({timeout, apis, requestHandler, responseHandler}) {
        this.timeout = timeout 
        this.apis = apis
        this.requestHandler = requestHandler
        this.responseHandler = responseHandler
        return this
    }
    install(Vue, options) {
        let self = this

        Vue.prototype.$fetch = (options) => {
            // 不仅支持 success, error 的回调写法，还支持 promise 的写法
            return new Promise((resolve, reject) => {
                if(_isFunction(self.requestHandler)) {
                    self.requestHandler(options, () => {
                         bmAxios.fetch({
                            url: self.apis[options.name] || options.url,
                            data: options.data || {},
                            method: options.method || 'GET',
                            header: options.header || {},
                            timeout: self.timeout || 30000,
                        }, (resData) => {
                            // 统一的监控
                            if(_isFunction(self.responseHandler)) {
                                self.responseHandler(options, resData, resolve, reject)
                            }   else {
                                resolve(resData)
                            }
                        })
                    })
                }   else {
                    bmAxios.fetch({
                            url: self.apis[options.name] || options.url,
                            data: options.data || {},
                            method: options.method || 'GET',
                            header: options.header || {},
                            timeout: self.timeout || 30000,
                        }, (resData) => {
                            // 统一的监控
                            if(_isFunction(self.responseHandler)) {
                                self.responseHandler(options, resData, resolve, reject)
                            }   else {
                                resolve(resData)
                            }
                        })
                }
            })
        }
    }

}
