export const state = () => ({
  idToken: null
})
export const getters = {
  idToken: state => state.idToken
}
export const mutations = {
    updateIdToken(state,idToken) {
      state.idToken = idToken;
    }
}
export const actions = {
    login(login, authData){
      this.$api.$post(`/accounts:signInWithPassword?key=${process.env.KEY}`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response =>{
          login.commit('updateIdToken',response.idToken);
          console.log(response);
          localStorage.setItem('idToken',response.idToken);
        })
    },
  register(register, authData){
    this.$api.$post(`/accounts:signUp?key=${process.env.KEY}`,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(response =>{
        register.commit('updateIdToken',response.idToken);
        console.log(response);
        localStorage.setItem('idToken',response.idToken);
      })
  },
  logout({commit}){
      commit('updateIdToken',null);
      localStorage.removeItem('idToken')
  },
  /**
   * ブラウザを閉じてもログインを継続できるようにする処理
   * @param autologin
   */
  autoLogin(autologin){
      const idToken = localStorage.getItem('idToken');
      if(!idToken) return;
    autologin.commit('updateIdToken',idToken)
  }

}
