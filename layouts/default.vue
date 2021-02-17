<template>
  <v-app>
    <header>
      <template v-if="!isAuthentivated">
        <nuxt-link to="/login">ログイン</nuxt-link>
        <nuxt-link to="/register">登録</nuxt-link>
      </template>
      <template v-if="isAuthentivated">
        <nuxt-link to="/mypage">マイページ</nuxt-link>
        <nuxt-link to="/">ログイン前掲示板</nuxt-link>
        <nuxt-link to="/">ログイン前掲示板</nuxt-link>
        <v-btn @click="logout">ログアウト</v-btn>
      </template>
    </header>
    <v-main>
      <v-container class="main-color-white">
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed:{
    isAuthentivated(){
      return this.$store.getters.idToken !== null;
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  }

})
</script>
<style lang="scss" scoped>
.main-color-white{
  background-color: white;

}
</style>
