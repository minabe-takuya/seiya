<template>
  <v-row justify="center" align="center">
    <v-col cols="5">
      <v-card>
        <v-card-title>ログイン</v-card-title>
        <label for="mail">メールアドレス:</label>
        <input id="mail" type="email" v-model="email"><br><br>
        <label for="pass">パスワード:　　</label>
        <input id="pass" type="password" v-model="password"><br><br>
        <v-btn @click="loginUser">ログイン</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend( {
  middleware({store, redirect}){
    if(store.getters.idToken){
      return redirect('/mypage')
    }
  },
  data(){
    return{
      email:'' as string,
      password:'' as string
    }
  },
  methods:{
    loginUser():any{
      this.$store.dispatch('login',{
        email:this.email,
        password:this.password
      })
      this.email=''
      this.password=''
    }
  }
})
</script>
