var navigator = weex.requireModule('bmNavigator'),
    modal = weex.requireModule('bmModal')

import isFunction from 'lodash/isFunction'

var Navigator = Object.create(null)

Navigator.install = (Vue, options) => {
    Vue.prototype.$navigator = {
        setLeftItem(options, callback){
            navigator.setLeftItem(options, () => {
               isFunction(callback) && callback()
            })
        },
        setRightItem(options, callback){
            navigator.setRightItem(options, () => {
                isFunction(callback) && callback()
            })
        },
        setCenterItem(options, callback){
            navigator.setCenterItem(options, () => {
              isFunction(callback) && callback()
            })
        },
        setNavigationInfo(options, callback){
            navigator.setNavigationInfo(options, () => {
                isFunction(callback) && callback()
            })
        }
    }
}

Vue.use(Navigator)
