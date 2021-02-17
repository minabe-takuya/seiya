<template>
  <v-row justify="center" align="center">
    <v-col>
      <h1>ログイン後のマイページです</h1>
<!--      <canvas id="myCanvas"></canvas>-->
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
  },
  // created() {
  //   // サイズを指定
  //   const width = 960;
  //   const height = 540;
  //
  //   // レンダラーを作成
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: document.querySelector('#myCanvas')
  //   });
  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(width, height);
  //
  //   // シーンを作成
  //   const scene = new THREE.Scene();
  //
  //   // カメラを作成
  //   const camera = new THREE.PerspectiveCamera(45, width / height);
  //   camera.position.set(0, 0, +1000);
  //
  //   // 箱を作成
  //   const geometry = new THREE.BoxGeometry(400, 400, 400);
  //   const material = new THREE.MeshNormalMaterial();
  //   const box = new THREE.Mesh(geometry, material);
  //   scene.add(box);
  //   tick();
  //
  //   // 毎フレーム時に実行されるループイベントです
  //   function tick() {
  //     box.rotation.y += 0.01;
  //     renderer.render(scene, camera); // レンダリング
  //
  //     requestAnimationFrame(tick);
  //   }
  // }
})
</script>
<style lang="scss" scoped>
h1{
  color:pink;
}
</style>
