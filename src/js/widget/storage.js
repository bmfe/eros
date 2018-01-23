import _isFunction from 'lodash/isFunction'
const storage = weex.requireModule('bmStorage')

var Storage = Object.create(null)

Storage.install = (Vue, options) => {
    Vue.prototype.$storage = {
        set (key, value, callback) {
            return new Promise((resolve, reject) => {
                storage.setData(key.toString(), JSON.stringify(value), ({ status, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0)
                    status === 0 ? resolve(true) : reject(false)
                })
            })
        },
        setSync (key, value) {
            return storage.setDataSync(key.toString(), JSON.stringify(value))
        },
        get (key, callback) {
            return new Promise((resolve, reject) => {
                storage.getData(key.toString(), ({ status, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0)
                    status === 0 ? resolve(JSON.parse(data)) : reject(false)
                })
            })
        },
        getSync (key) {
            const { status, data, errorMsg } = storage.getDataSync(key.toString())
            return status === 0 ? JSON.parse(data) : ''
        },
        delete (key, callback) {
            return new Promise((resolve, reject) => {
                storage.deleteData(key.toString(), ({ status, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0)
                    status === 0 ? resolve(true) : reject(false)
                })
            })
        },
        deleteSync (key) {
            const { status, data, errorMsg } = storage.deleteDataSync(key.toString())
            return status === 0
        },
        removeAll (callback) {
            return new Promise((resolve, reject) => {
                storage.removeData(({ status, data, errorMsg }) => {
                    _isFunction(callback) && callback.call(this, status === 0)
                    status === 0 ? resolve(true) : reject(false)
                })
            })
        },
        removeAllSync () {
            const { status, data, errorMsg } = storage.removeDataSync()
            return status === 0
        }
    }
}

Vue.use(Storage)
