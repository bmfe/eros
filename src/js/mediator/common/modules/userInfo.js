const state = {
    userId: '',
    openId: ''
}

const getters = {
    userId: state => state.userId,
    openId: state => state.openId
}

const mutations = {
    ['setWXConfigInfo'](state, { userId, openId}) {
        userId && (state.userId = userId);
        openId && (state.openId = openId);
    }
}

export default  {
	state,
	getters,
	mutations,
	namespaced: true
}
