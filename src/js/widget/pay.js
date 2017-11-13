/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-02-09
*/

var pay = weex.requireModule('bmPay'),
    modal = weex.requireModule('bmModal')

import isFunction from 'lodash/isFunction'

var Pay = Object.create(null)

Pay.install = (Vue, options) => {
    Vue.prototype.$pay = {
        wechat(params, callback){
            return new Promise((resolve, reject) => {
                pay.payByWechat(params, (resData) => {
                    if(isFunction(callback)){
                        callback.call(this, resData)
                    }
                    if(resData && resData.resCode == 0){
                        resolve(resData)
                    }else{
                        reject(resData)
                    }
                })
            })
        }
    }
}

Vue.use(Pay)
