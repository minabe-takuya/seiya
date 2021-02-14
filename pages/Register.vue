<template>
  <v-row justify="center" align="center">
    <v-col cols="5">
      <v-card>
        <v-card-title>登録</v-card-title>
        <label for="mail">メールアドレス:</label>
        <input id="mail" type="email" v-model="email"><br><br>
        <label for="pass">パスワード:　　</label>
        <input id="pass" type="password" v-model="password"><br><br>
        <v-btn @click="createUser">登録</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend( {
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    createUser():any{
      this.$store.dispatch('register',{
        email:this.email,
        password:this.password
      })
      this.email=''
      this.password=''
    }
  }
})
</script>
