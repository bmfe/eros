const fetch = wx.requireModule('bmAxios')

export default {
    getUserInfo({ commit }) {
        return fetch({
        	url: '/test/getBaseInfo'
        }).then((resData) => {
            commit('SET_USER_INFO', resData);
            return resData;
        });
    }
}
