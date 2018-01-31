const TYPE = [{
        name: '拓展功能',
        items: [{
            name: '本地资源',
            type: 'assets'
        },
        {
            name: '全局属性',
            type: 'globalAttr'
        },
        {
            name: '文本框扩展',
            type: 'inputExtend'
        },
        {
            name: '生命周期',
            type: 'lifecycle'
        },
        {
            name: '下拉刷新',
            type: 'refresh'
        }]
    },
    {
        name: 'widget',
        items: [{
            name: '本地化存储',
            type: 'storage'
        },
        {
            name: '导航条操作',
            type: 'navigator'
        },
        {
            name: '分享',
            type: 'share'
        },
        {
            name: '工具',
            type: 'tools'
        },
        {
            name: '路由',
            type: 'router'
        },
        {
            name: '接口请求（ eros dev 可用本地mock ）',
            type: 'axios'
        },
        {
            name: '发布订阅',
            type: 'event'
        },
        {
            name: '弹窗通知',
            type: 'notice'
        },
        {
            name: '图片',
            type: 'image'
        },
        {
            name: '位置获取',
            type: 'geo'
        },
        {
            name: '联系功能',
            type: 'coms'
        },
        {
            name: '支付',
            type: 'pay'
        },
        {
            name: '字体',
            type: 'font'
        }]
    },
    {
        name: '组件',
        items: [{
            name: '图表',
            type: 'bmchart'
        },
        {
            name: '富文本',
            type: 'bmrichtext'
        },
        {
            name: '日期',
            type: 'bmcalendar'
        },
        {
            name: '弹窗',
            type: 'bmmask'
        }]
    },
    {
        name: '其他',
        items: [{
            name: 'weex 瀑布流',
            type: 'waterfall'
        },{
            name: 'weex-ui',
            type: 'weexui'
        }]
    }
];

const DESC_TYPE = ['iOS', 'Android', 'VUE', 'Widget', 'Module', 'Appboard', 'Mediator', 'BS diff', 'eros-cli', 'eros-publish', 'Weex Debug', 'support UI libs', 'Camera', 'Image', 'Contacts', 'ESlint']

export {
    TYPE,
    DESC_TYPE
}
