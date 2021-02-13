<template>
  <v-app>
    <header>
      <nuxt-link to="/">ログイン前掲示板</nuxt-link>
      <nuxt-link to="/login">ログイン</nuxt-link>
      <nuxt-link to="/rejister">登録</nuxt-link>
      <nuxt-link to="/mypage">マイページ</nuxt-link>
    </header>
    <v-main>
      <v-container class="main-color-white">
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>
<style lang="scss">
.main-color-white{
  background-color: white;

}
</style>
