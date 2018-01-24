const imageModule = weex.requireModule('bmImage')
const browser = weex.requireModule('bmBrowserImg')
const bmAxios = weex.requireModule('bmAxios')

const Image = Object.create(null)

Image.install = (Vue, options) => {
    Vue.prototype.$image = {
        // upload change to pickAndUpload
        pickAndUpload ({ maxCount = 1, imageWidth = 0, url = '', allowCrop = false, header = {}, params = {}}) {
            return new Promise((resolve, reject) => {
                var _params = {
                        maxCount,
                        imageWidth,
                        allowCrop,
                        header,
                        params
                    }
                if (url) _params.url = url
                imageModule.uploadImage(_params, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },
        upload ({ url = '', params = {}, header = {}, source = [] }) {
            return new Promise((resolve, reject) => {
                bmAxios.uploadImage({
                    url, params, header, images: source
                }, ({ status, errorMsg, data }) => {
                    status === 200 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },

        browser ({ index = 0, images = [], type = 'network' }) {
            return new Promise((resolve, reject) => {
                browser.open({
                    index,
                    images,
                    type
                }, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },
        camera ({ imageWidth = 0, allowCrop = false }) {
            return new Promise((resolve, reject) => {
                imageModule.camera({
                    imageWidth,
                    allowCrop
                }, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },
        pick ({ maxCount = 1, imageWidth = 0, allowCrop = false }) {
            return new Promise((resolve, reject) => {
                imageModule.pick({
                    maxCount,
                    imageWidth,
                    allowCrop
                }, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },
        preview ({ index = 0, images = [] }) {
            return new Promise((resolve, reject) => {
                imageModule.preview({
                    index,
                    images
                }, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }
}

Vue.use(Image)
