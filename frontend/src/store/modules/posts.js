import API from '../../server/Api'

export default {
  namespaced: true,
  state: {
    posts: []
  },
  actions: {
    fetchPosts ({ commit }) {
      return API().get('/posts')
        .then(({ data }) => {
          commit('setFetchPosts', data)
        })
    }
  },
  getters: {
  },
  mutations: {
    setFetchPosts (state, posts) {
      state.posts = posts
    }
  }
}
