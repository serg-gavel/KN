<template>
  <section class="post-section">
    <h1>All posts</h1>
    <div class="search-box">
      <input type="text" title="search" v-model="search" placeholder="Найти статью...">
    </div>
    <div class="row">
      <!-- eslint-disable-next-line -->
      <div class="post-cover" v-for="post in filteredPosts">
        <div class="post-header">
          <h4 class="post-heading">{{ post.title }}</h4>
          <p class="post-date">21.02.18</p>
        </div>
        <div class="post-body">
          <div class="post-image">
            <img src="../assets/img/sunflower.jpg" alt="#">
          </div>
          <!--<article>{{ post.body | shortened }}</article>-->
          <div class="read-more">
            <router-link to="/blog/post_1" tag="button" class="post-btn">Читать далее...</router-link>
          </div>
        </div>
        <div class="post-footer">
          <div class="views-count">
            <p class="views">150 просмотров</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
// import PostCover from './PostCover'
import AddPost from './AddPost'
export default {
  name: 'PostSection',
  data () {
    return {
      posts: [],
      search: ''
    }
  },
  components: { AddPost },
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
  flex-direction: column;
  margin-left: 10px;
}
.search-box{
  align-self: last-baseline;
}
.post-cover{
  float: left;
  margin: 0 0 10px 10px;
  width: 320px;
  height: 470px;
  @include shadow;
  &:hover{
    @include shadow_deep;
  }
}
//post header
.post-header{
  height: 90px;
  width: 320px;
  background: $color-graphite;
  color: $color-white;
  h4.post-heading{
    padding: 25px 10px 0 10px;
    font-size: 1.1rem;
    line-height: 1rem;
    text-align: center;
  }
  p.post-date{
    text-align: right;
    padding-right: 10px;
  }
}
//post body
.post-body{
  width: 320px;
  height: 350px;
  .post-image{
    height: 350px;
    width: 320px;
    overflow: hidden;
    img{
      height: auto;
      width: 130%;
      overflow: hidden;
    }
  }
  .read-more{
    height: 0;
    position: relative;
    padding-right: 100px;
    button.post-btn {
      bottom: 30px;
      position: absolute;
      background: rgba(58, 58, 58, 0.35);
      color: $button-color-white;
      border: 2px solid $button-color-white;
      cursor: pointer;
      font-family: 'Oswald', sans-serif;
      font-size: 0.8rem;
      line-height: 1.5;
      padding: 10px 25px;
      letter-spacing: 0.05rem;
      &:hover{
        background: $button-color-hover;
        color: #fff;
        border: 2px solid $button-color-hover;
        transition: all .3s linear;
        @include shadow;
      }
      &:focus {outline: none}
    }
  }
}
.post-footer{
  height: 30px;
  width: 320px;
  background: $color-graphite;
  .views-count{
    p.views{
      color: #fff;
      margin: 0;
      text-align: right;
      padding: 5px 10px 0 0;
    }
  }
}
</style>
