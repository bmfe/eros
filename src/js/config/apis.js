// 接口超时设置
export const TIMEOUT = 30000

// 配置请求的别名
export const APIS = {
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
    let {status, errorMsg, data} = resData
    if(status !== '200') {
        modal.alert({
            message: errorMsg,
            okTitle: '知道了'
        })
        reject(resData)
    }

    // 自定义请求逻辑
    resolve(data)
}