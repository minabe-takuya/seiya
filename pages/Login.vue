<template>
  <v-row justify="center" align="center">
    <v-col cols="5">
      <v-card>
        <v-card-title>ログイン</v-card-title>
        <label for="mail">メールアドレス:</label>
        <input id="mail" type="email" name="mail"><br><br>
        <label for="pass">パスワード:　　</label>
        <input id="pass" type="password" name="pass"><br><br>
        <v-btn @click="loginUser">ログイン</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  data(){
    return{
      mail:'',
      pass:''
    }
  },
  methods:{
    async loginUser(){
      await this.$axios.$post('/users',{
        fields:{
          mail:{
            stringValue:this.mail
          },
          pass:{
            stringValue: this.pass
          }
        },
      })
        .then(response =>{
          console.log(response);
        })
        .catch(error =>{
          console.log(error);
        })
      this.mail=''
      this.pass=''
    }
  }
}

</script>
