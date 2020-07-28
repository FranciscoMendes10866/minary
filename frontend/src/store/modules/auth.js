import API from '../../server/Api'
import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    // register
    registerUsername: null,
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    // login
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    // jwt
    token: null
  },
  actions: {
    SignUp ({ commit, state }) {
      return API().post('/auth/signup', {
        username: state.registerUsername,
        email: state.registerUsername,
        password: state.registerPassword
      })
        .then(() => {
          router.push('/signin')
        })
        .catch(() => {
          commit('setRegisterError')
        })
    },
    SignIn ({ commit, state }) {
      return API().post('/auth/signin', {
        email: state.loginEmail,
        password: state.loginPassword
      })
        .then(({ data }) => {
          commit('setToken', data.token)
          router.push('/')
        })
        .catch(() => {
          commit('setLoginError')
        })
    },
    LogOut ({ commit }) {
      commit('setToken', null)
      router.push('/')
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  },
  mutations: {
    setRegisterUsername (state, registerUsername) {
      state.registerUsername = registerUsername
    },
    setRegisterEmail (state, registerEmail) {
      state.registerEmail = registerEmail
    },
    setRegisterPassword (state, registerPassword) {
      state.registerPassword = registerPassword
    },
    setRegisterError (state, error) {
      state.registerError = error
    },
    setLoginEmail (state, loginEmail) {
      state.loginEmail = loginEmail
    },
    setLoginPassword (state, loginPassword) {
      state.loginPassword = loginPassword
    },
    setLoginError (state, error) {
      state.loginError = error
    },
    setToken (state, token) {
      state.token = token
    }
  }
}
