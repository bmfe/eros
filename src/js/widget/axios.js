/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-05-08
 */

var bmAxios = weex.requireModule('bmAxios')

export default {
    install(Vue, options) {
        Vue.prototype.$fetch = (options) => {
            // 不仅支持 success, error 的回调写法，还支持 promise 的写法
            return new Promise((resolve, reject) => {
                bmAxios.fetch({
                    method: options.method || 'GET',
                    url: Vue.prototype.eros.apis[options.name] || options.url,
                    header: options.header || {},
                    data: options.data || {}
                }, (resData) => {
                    // 可以做统一的监控
                    Vue.prototype.eros.responseHandler(options, resData, resolve, reject)
                })
            })
        }
    }
}