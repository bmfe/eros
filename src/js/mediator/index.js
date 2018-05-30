import store from './common';

// new Vue({})

new Vue(Vue.util.extend({ 
	el: '#root', 
	store,
	created() {
		this.$event.on('change-commit', (userInfo) => {
			store.commit('setWXConfigInfo', userInfo)
		})
	}
}))

