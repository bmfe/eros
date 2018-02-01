
const tools = weex.requireModule('bmTool')
const Tools = Object.create(null)

Tools.install = (Vue, options) => {
    Vue.prototype.$tools = {
        resignKeyboard () {
            return new Promise((resolve, reject) => {
                tools.resignKeyboard(({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },

        // 是否安装微信
        isInstallWXApp () {
            return new Promise((resolve, reject) => {
                tools.isInstallWXApp(({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },

        // 获取 cid
        getCid () {
            return new Promise((resolve, reject) => {
                tools.getCid(({ status, errorMsg, data }) => {
                   status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },

        // 复制内容到剪切板
        copyString (string) {
            return new Promise((resolve, reject) => {
                tools.copyString(string, ({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        },

        scan () {
            return new Promise((resolve, reject) => {
                tools.scan(({ status, errorMsg, data }) => {
                    status === 0 ? resolve(data) : reject({ status, errorMsg, data })
                })
            })
        }
    }

    // support bmchat send options include function option
    Vue.prototype.$format = (options) => {
        return JSON.stringify(JSON.stringify(options, function(key, val) {
            if (typeof val === "function") {
                return val + "";
            }
            return val;
        }))
    }
}

Vue.use(Tools)
