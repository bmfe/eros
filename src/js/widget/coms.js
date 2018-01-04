
import isFunction from 'lodash/isFunction'

const _com = weex.requireModule('bmCommunication')
const Coms = Object.create(null)

Coms.install = (Vue, options) => {
    Vue.prototype.$coms = {
        call(number) {
            number += ''
            _com['call'](number)
        },
        sms(to, content) {
            return new Promise((resolve, reject) => {
                _com.call(to, content, ({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        },
        contacts() {
            return new Promise((resolve, reject) => {
                _com.contacts(({status, errorMsg, data}) => {
                   status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        }
    }
}


Vue.use(Coms)