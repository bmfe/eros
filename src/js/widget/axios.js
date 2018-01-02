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
    install(Vue) {
        let self = this
        Vue.prototype.$fetch = (options) => {
            return new Promise((resolve, reject) => {
                if(_isFunction(self.requestHandler)) {
                    self.requestHandler(options, () => { self.handleAxios(options, resolve, reject) })
                } else {
                    self.handleAxios(options, resolve, reject)
                }
            })
        }
    }
    handleAxios({name, url, data, method, header}, resolve, reject) {
        bmAxios.fetch({
            url: this.apis[name] || url,
            data: data || {},
            method: method || 'GET',
            header: header || {},
            timeout: this.timeout || 30000,
        }, (resData) => {
            // 统一的监控
            if(_isFunction(this.responseHandler)) {
                this.responseHandler({name, url, data, method, header}, resData, resolve, reject)
            }   else {
                resolve(resData)
            }
        })
    }
}
