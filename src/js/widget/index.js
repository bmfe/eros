
// 配置方法
import './font.js'
// 弹窗
import './notice.js'
// 获取地理位置
import './geo.js'
// 获取相机信息
import './camera.js'
// 设置导航
import './nav.js'
// 支付相关
import './pay.js'
// 存储相关
import './storage.js'
// 全局事件
import './events.js'
// 分享
import './share.js'
// 工具方法
import './tools.js'

// 路由
import Router from './router.js'
// 发送请求
import Axios from './axios.js'

let instance = null
export default class Widget {
	constructor(options) {
		if (!instance) {
			Vue.use(new Axios(options))
			Vue.use(new Router(options))
			instance = this
		} 
        return instance
	}
}
