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
export default {
  data(){
    return{
      email:'',
      password:''
    }
  },
  methods:{
    async createUser(){
      await this.$api.$post('/accounts:signUp?key=AIzaSyCtdvZfHqPpaWB_vl8B1Ivkj1EQV003BFY',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
      this.email=''
      this.password=''
    }
  }
}
</script>
