<template>
  <section class="post-section">
    <PostCover>PostCover</PostCover>
    <!--<div>{{posts}}</div>-->
    <!--<PostCover>PostCover</PostCover>-->
    <!--<PostCover>PostCover</PostCover>-->
    <!--<PostCover>PostCover</PostCover>-->
    <!--<PostCover>PostCover</PostCover>-->
    <!--<PostCover>PostCover</PostCover>-->
    <h1>All posts</h1>
    <!-- eslint-disable-next-line -->
    <div v-for="post in posts">
      <h3>{{ post.title }}</h3>
      <article>{{ post.body }}</article>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import PostCover from './PostCover'
import AddPost from './AddPost'
export default {
  name: 'PostSection',
  data () {
    return {
      posts: []
    }
  },
  components: { PostCover, AddPost },
  methods: {
    showPosts: function () {
      let vm = this
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (data) {
          vm.posts = data.data.slice(0, 10)
        })
    }
  },
  created () {
    this.showPosts()
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .post-section{
    order: 2;
    min-height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 10px;
  }
</style>
