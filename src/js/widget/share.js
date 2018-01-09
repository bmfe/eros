const share = weex.requireModule('bmShare')

const Share = Object.create(null)

Share.install = (Vue, options) => {
    Vue.prototype.$share = (cfg) => {
        return new Promise((resolve, reject) => {
            share.share({
                title: cfg.title,
                content: cfg.content || '',
                image: cfg.image || '',
                url: cfg.url || '',
                platforms: cfg.platforms || [] // 传空的话默认全部
            }, data => {
                resolve(data)
            }, err => {
                reject(err)
            })
        })
    }
}

Vue.use(Share)
