/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-02-09
*/

const pay = weex.requireModule('bmPay')

var Pay = Object.create(null)

Pay.install = (Vue, options) => {
    Vue.prototype.$pay = {
        wechat (params) {
            return new Promise((resolve, reject) => {
                pay.payByWechat(params, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Pay)
