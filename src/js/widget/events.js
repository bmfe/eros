/**
 * @Author: songqi
 * @Date:   2017-02-27
 * @Last modified by:   songqi
 * @Last modified time: 2017-04-10
 */

import _isArray from 'lodash/isArray'
var event = weex.requireModule('bmEvents')
var globalEvent = weex.requireModule('globalEvent')

const GlobalEvent = Object.create(null)
const GLOBALEVENT = Object.create(null)

// app 被放到后台 appWillResignActive
globalEvent.addEventListener('appDeactive', function (options) {
    _isArray(GLOBALEVENT['appDeactive']) && GLOBALEVENT['appDeactive'].map((item) => {
        item(options)
    })
})

// app 从后台唤起 appDidBecomeActive
globalEvent.addEventListener('appActive', function (options) {
    _isArray(GLOBALEVENT['appActive']) && GLOBALEVENT['appActive'].map((item) => {
        item(options)
    })
})

GlobalEvent.install = (Vue, options) => {
    Vue.mixin({
        beforeCreate () {
            if (this.$options.globalEvent) {
                var ev = this.$options.globalEvent
                for (var i in ev) {
                    if (!GLOBALEVENT[i]) {
                        GLOBALEVENT[i] = []
                    }
                    GLOBALEVENT[i].push(ev[i].bind(this))
                }
            }
        }
    })
    Vue.prototype.$event = event
}

Vue.use(GlobalEvent)
