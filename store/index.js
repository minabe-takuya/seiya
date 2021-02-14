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
      })
  }

}
