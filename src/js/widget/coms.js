
const _com = weex.requireModule('bmCommunication')
const Coms = Object.create(null)

Coms.install = (Vue, options) => {
    Vue.prototype.$coms = {
        call (to = +to, tip = true) {
            _com['call']({ to, tip })
        },
        sms (to = [], content = '') {
            return new Promise((resolve, reject) => {
                _com.sms(to, content, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },
        contacts () {
            return new Promise((resolve, reject) => {
                _com.contacts(({ status, errorMsg, data }) => {
                   status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Coms)
