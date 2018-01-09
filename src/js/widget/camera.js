/**
 * @Author: songqi
 * @Date:   2017-01-11e
 * @Last modified by:   songqi
 * @Last modified time: 2017-03-08
 */

const camera = weex.requireModule('bmCamera')
const Camera = Object.create(null)

Camera.install = (Vue, options) => {
    Vue.prototype.$camera = {
        // 扫一扫
        scan () {
            return new Promise((resolve, reject) => {
                camera.scan(({ status, errorMsg, data }) => {
                   status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Camera)
