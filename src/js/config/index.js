import './push'
import pages from './pages'
import { apis, responseHandler } from './apis'

import 'Widget'
// 字体大小配置
var event = weex.requireModule('bmEvents')
var FONT_MODULUS = weex.config.env.bmFontScale || 1
event.on('FONT-changeFont', (resData) => {
    FONT_MODULUS = resData.fontScale
})
export const fontModules = { FONT_MODULUS }


export const config = {
    pages,
    apis,
    responseHandler
}

Vue.prototype.eros = config