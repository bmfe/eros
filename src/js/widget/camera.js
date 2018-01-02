/**
 * @Author: songqi
 * @Date:   2017-01-11
 * @Last modified by:   songqi
 * @Last modified time: 2017-03-08
 */

var camera = weex.requireModule('bmCamera'),
    browser = weex.requireModule('bmBrowserImg'),
    modal = weex.requireModule('bmModal')

var Camera = Object.create(null),
    Image = Object.create(null)
    
Image.install = (Vue, options) => {
    Vue.prototype.$image = {
        // 上传图片
        upload(options) {
            return new Promise((resolve, reject) => {
                camera.uploadImage({
                    url: options.url || '',
                    maxCount: options.maxCount || 1,
                    imageWidth: options.imageWidth || 0,
                    allowCrop: options.allowCrop || false,
                    header: options.header || {},
                    params: options.params || {},
                }, ({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        },
        // 浏览图片
        browser({index, images, type}) {
            return new Promise((resolve, reject) => {
                browser.open({
                    index,
                    images,
                    type: type || 'network'
                }, ({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        }
    }
}

Camera.install = (Vue, options) => {
    Vue.prototype.$camera = {
        // 扫一扫
        scan() {
            return new Promise((resolve, reject) => {
                camera.scan(({status, errorMsg, data}) => {
                   status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        },
    }
}

Vue.use(Camera)
Vue.use(Image)