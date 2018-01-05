const camera = weex.requireModule('bmCamera')
const imageModule = weex.requireModule('bmImage')
const browser = weex.requireModule('bmBrowserImg')
const bmAxios = weex.requireModule('bmAxios')
    
let Image = Object.create(null)

Image.install = (Vue, options) => {
    Vue.prototype.$image = {
        // upload change to pickAndUpload
        pickAndUpload(options) {
            return new Promise((resolve, reject) => {
                let params = {
                        maxCount: options.maxCount || 1,
                        imageWidth: options.imageWidth || 0,
                        allowCrop: options.allowCrop || false,
                        header: options.header || {},
                        params: options.params || {},
                    }
                if ( options.url ) params.url = options.url 
                imageModule.uploadImage(params, ({status, errorMsg, data}) => {
                    status == 0 ? resolve(data) : reject({status, errorMsg, data})
                })
            })
        },
        upload({url = '', params = {} , header = {}, source = []}) {
            return new Promise((resolve, reject) => {
                axios.uploadImage({
                    url, params, header	
                }, source, ({status, errorMsg, data}) => {
                    status == 200 ? resolve(data) : reject({status, errorMsg, data})                    
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
        },
        camera({imageWidth, allowCrop}) {
            imageModule.camera({
                imageWidth,            
                allowCrop,             
            },({status, errorMsg, data}) => {
                status == 0 ? resolve(data) : reject({status, errorMsg, data})          
            })
        },
        pick({maxCount, imageWidth, allowCrop}) {
            imageModule.pick({
                maxCount,
                imageWidth,            
                allowCrop,             
            },({status, errorMsg, data}) => {
                status == 0 ? resolve(data) : reject({status, errorMsg, data})          
            })
        },
        preview({index, images}) {
            imageModule.preview({
                index,
                images,            
            },({status, errorMsg, data}) => {
                status == 0 ? resolve(data) : reject({status, errorMsg, data})          
            })
        }
    }
}

Vue.use(Image)
