<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
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
export default {
  data(){
    return{
      name:'',
      comment:'',
      sendResult:'',
      posts:[]
    }
  },
  /**
   * pageが読み込まれた時
   */
  created() {
    this.$axios.$get('/comments',{
      headers:{
        Authorization: `Bearer ${this.idToken}`
      }
    })
    .then(response =>{
      console.log(response);
      this.posts = response.documents;
    })
  },
  computed:{
    idToken(){
      return this.$store.getters.idToken;
    }
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
        },{
          headers:{
            Authorization: `Bearer ${this.idToken}`
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
    }
  }
}
</script>
