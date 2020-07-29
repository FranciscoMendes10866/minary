import API from '../../server/Api'

export default {
  namespaced: true,
  state: {
    posts: [],
    userPosts: [],
    postTitle: null,
    postSubTitle: null,
    postCategory: null,
    postDescription: null,
    postContent: null
  },
  actions: {
    fetchPosts ({ commit }) {
      return API().get('/posts')
        .then(({ data }) => {
          commit('setFetchPosts', data)
        })
    },
    createPost ({ commit, state }) {
      return API().post('/posts', {
        title: state.postTitle,
        subTitle: state.postSubTitle,
        category: state.postCategory,
        description: state.postDescription,
        body: state.postContent
      })
        .then(({ data }) => {
          commit('appendPosts', data)
          commit('setPostTitle', null)
          commit('setPostSubTitle', null)
          commit('setPostCategory', null)
          commit('setPostDescription', null)
          commit('setPostContent', null)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchUserPosts ({ commit }) {
      return API().get('/posts/userposts')
        .then(({ data }) => {
          commit('setFetchUserPosts', data)
        })
    },
    deletePost ({ commit }, post) {
      return API().delete(`/posts/${post.id}`)
        .then(() => {
          commit('setDeletePost', post)
        })
    }
  },
  getters: {
  },
  mutations: {
    setFetchPosts (state, posts) {
      state.posts = posts
    },
    setPostTitle (state, postTitle) {
      state.postTitle = postTitle
    },
    setPostSubTitle (state, postSubTitle) {
      state.postSubTitle = postSubTitle
    },
    setPostCategory (state, postCategory) {
      state.postCategory = postCategory
    },
    setPostDescription (state, postDescription) {
      state.postDescription = postDescription
    },
    setPostContent (state, postContent) {
      state.postContent = postContent
    },
    appendPosts (state, post) {
      state.posts.push(post)
    },
    setDeletePost (state, post) {
      state.userPosts.splice(state.userPosts.indexOf(post), 1)
    },
    setUserPosts (state, userPosts) {
      state.userPosts = userPosts
    },
    setFetchUserPosts (state, userPosts) {
      state.userPosts = userPosts
    }
  }
}
