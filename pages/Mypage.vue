<template>
  <v-row justify="center" align="center">
    <v-col>
      <h1>ログイン後のマイページです</h1>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware({store, redirect}){
    if(!store.getters.idToken){
      return redirect('/login')
    }
  }
})
</script>
<style lang="scss" scoped>
h1{
  color:pink;
}
</style>
