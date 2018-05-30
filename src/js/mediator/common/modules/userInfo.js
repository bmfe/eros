const state = {
    userName: '',
    userId: ''
}

const getters = {
    userName: state => state.userName,
    userId: state => state.userId
}

const mutations = {
    setWXConfigInfo(state, { userName, userId}) {
        userName && (state.userName = userName);
        userId && (state.userId = userId);
    }
}

export default  {
	state,
	getters,
	mutations,
	namespaced: true
}
