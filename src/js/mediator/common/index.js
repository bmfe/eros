import Vuex from 'vuex'
import actions from './actions'
import userInfo from './modules/userInfo'
const storage = weex.requireModule('bmStorage')

Vue.use(Vuex)

let localStore = {}

localStore = new Vuex.Store({
    actions,
    modules: {
        userInfo
    },
    namespace: true
})


export default localStore