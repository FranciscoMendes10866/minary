import createPersistedState from 'vuex-persistedstate'

import Vue from 'vue'
import Vuex from 'vuex'

// import auth from './modules/auth'
// import links from './modules/links'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: 'http://localhost:3030/api/v1'
  },
  modules: {
    // auth,
    // links
  },
  plugins: [
    createPersistedState()
  ]
})
