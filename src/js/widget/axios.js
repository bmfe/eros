import {TIMEOUT, APIS, requestHandler, responseHandler} from 'Config/apis'
var bmAxios = weex.requireModule('bmAxios')

export default {
    install(Vue, options) {
        Vue.prototype.$fetch = (options) => {
            requestHandler(options)
            // 不仅支持 success, error 的回调写法，还支持 promise 的写法
            return new Promise((resolve, reject) => {
                bmAxios.fetch({
                    method: options.method || 'GET',
                    url: APIS[options.name] || options.url,
                    header: options.header || {},
                    data: options.data || {},
                    timeout: TIMEOUT || 30000,
                }, (resData) => {
                    // 统一的监控
                    responseHandler(options, resData, resolve, reject)
                })
            })
        }
    }
}