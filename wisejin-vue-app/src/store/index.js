import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {id: 1, name:'hoge', email: 'hoge@gmail.com', password:'12345'},
      {id: 2, name:'fuga', email: 'fuga@gmail.com', password:'12345'}
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    //ログインに成功した場合
    loginSuccess (state) {
      state.isLogin = true
      state.isLoginError = false
    },
    //ログインに失敗した場合
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    login ({ state, commit }, loginObj) {
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) {
          selectedUser = user
          return
        }
      })
            
      // 삼항 연산자 테스트
      selectedUser === null 
      ? (commit('loginError'))
      :  selectedUser.password !== loginObj.password
        ?  commit('loginError')
        :  commit('loginSuccess')
            
      console.log('Login:', loginObj.email, loginObj.password) 
    }
  },
  modules: {
  }
})
