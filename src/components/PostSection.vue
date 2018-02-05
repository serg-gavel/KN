<template>
  <section class="post-section">
    <div class="row">
      <PostCover>PostCover</PostCover>
      <!--<div>{{posts}}</div>-->
      <!--<PostCover>PostCover</PostCover>-->
      <!--<PostCover>PostCover</PostCover>-->
      <!--<PostCover>PostCover</PostCover>-->
      <!--<PostCover>PostCover</PostCover>-->
      <!--<PostCover>PostCover</PostCover>-->
      <h1>All posts</h1>
      <div class="search-box">
        <input type="text" title="search" v-model="search" placeholder="Найти статью...">
      </div>
      <!-- eslint-disable-next-line -->
      <div v-for="post in filteredPosts">
        <h3>{{ post.title }}</h3>
        <article>{{ post.body | shortened }}</article>
      </div>
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
      posts: [],
      search: ''
    }
  },
  components: { PostCover, AddPost },
  created () {
    this.showPosts()
  },
  methods: {
    showPosts: function () {
      let vm = this
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (data) {
          vm.posts = data.data.slice(0, 10)
        })
    }
  },
  computed: {
    filteredPosts: function () {
      let vm = this
      return vm.posts.filter((post) => {
        return post.title.match(this.search.toLowerCase())
      })
    }
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
  .search-box{
    align-self: last-baseline;
  }
</style>
