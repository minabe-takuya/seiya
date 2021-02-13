<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="bg-color-white">
        <h3>掲示板に投稿する</h3>
        <label for="name">
          ニックネーム
        </label>
        <input id="name" type="text" v-model="name">
        <br><br>
        <label for="comment">
          コメント
        </label>
        <textarea id="comment" v-model="comment"></textarea>
        <br><br>
        <v-btn @click="createComment">送信</v-btn>
        <h2>掲示板</h2>
        <div v-for="post in posts" :key='post.name'>
          <div>名前：{{ post.fields.name.stringValue}}</div>
          <div>コメント：{{ post.fields.comment.stringValue}}</div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){
    return{
      name:'',
      comment:'',
      sendResult:'',
      posts:[]
    }
  },
  created() {
    this.$axios.$get('/comments')
    .then(response =>{
      console.log(response);
      this.posts = response.documents;
    })
  },
  methods:{
    async createComment(){
      await this.$axios.$post('/comments',{
          fields: {
            name:{
            stringValue:this.name
            },
            comment:{
              stringValue: this.comment
            }
          }
        }
        )
      .then(response => {
        console.log(response);
        if(response.status === 200){
          this.sendResult = '成功'
        }
      })
      .catch(error =>{
        console.log(error);
      })
      this.name=''
      this.comment=''
      location.reload();
    }
  }
}
</script>
<style scoped lang="scss">
.bg-color-white{
  background-color: white;
  color: black;
}
</style>
