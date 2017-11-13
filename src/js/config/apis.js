import isFunction from 'lodash/isFunction'

let modal = weex.requireModule('bmModal')
let tools = weex.requireModule('bmTool')

// 配置请求的别名
const AJAX_MAP = {
    'COMMON.getInfo': '/test/info'
}

/**
 * 请求返回统一拦截器
 * options 你请求传入的所有参数和配置
 * resData 服务器端返回的所有数据
 * resolve 请求成功请resolve你得结果，这样请求的.then中的成功回调就能拿到你resolve的数据
 * reject 请求成功请resolve你得结果，这样请求的.then中的失败回调就能拿到你reject的数据
 */

// 这里我们默认的后端返回格式是
// {
//     resCode: 0,
//     msg: '这是后端传的消息',
//     data: {
//         成功数据
//     }
// }

// 假设 resCode 为 0 为业务操作成功，非 0 为业务操作失败，我们需要写如下逻辑
export const responseHandler = (options, resData, resolve, reject) => {
    if (resData && resData.resCode == 0) {
        // 操作成功 resolve 成功数据
        resolve(resData)
    } else {
        // 弹窗统一消失，防止弹错误提示的时候还有别的弹窗
        modal.hideLoading()
        let { resCode } = resData
        if (resCode == 101) {
            // 特殊code的不同处理，根据业务自行编写
            return
        }
        if (!options.noShowDefaultError) {
            // 统一弹窗处理
            modal.alert({
                message: resData.msg,
                okTitle: '确定'
            })
        }
        // 如果需要特殊处理， 请求时候传入 noShowDefaultError :true ,这个请求就不会走弹窗的默认逻辑
        reject(resData)
    }
}

// 自动拼接 platform.json 中的 requestUrl
var _apis = {}
for (var i in AJAX_MAP) {
    if (!_apis[i]) _apis[i] = undefined
    _apis[i] = AJAX_MAP[i]
}
export const apis = _apis