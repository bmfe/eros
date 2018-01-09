const geolocation = weex.requireModule('bmGeolocation')
const Geolocation = Object.create(null)

Geolocation.install = (Vue) => {
    Vue.prototype.$geo = {
        get () {
            return new Promise((resolve, reject) => {
                geolocation.getGeolocation(({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Geolocation)
