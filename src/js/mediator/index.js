
Vue.use(Vuex);
import common from './common';
const store = new Vuex.Store({
    ...common,
    strict: process.env.NODE_ENV !== 'production'
})

export default store;

// new Vue({})
new Vue(Vue.util.extend({ el: '#root'}, {}))