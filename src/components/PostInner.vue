<template>
  <div class="post-inner">
    <header class="post-header">
      <h1 class="post-heading">{{ post.title }}</h1>
      <p class="post-date">{{ postDate }}</p>
    </header>
    <main class="post-body">
      <figure class="post-image">
        <img :src="postImg" alt="#">
      </figure>
      <article class="post-text">
        <p class="inner-text">{{ post.body }}</p>
          <router-link to="/blog" tag="button" class="post-btn">Вернуться назад</router-link>
        <ShareBox>ShareBox</ShareBox>
      </article>
    </main>
    <footer class="post-footer">
      <div class="views-count">
        <p class="views">{{ postViews }}&nbsp;просмотров</p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import ShareBox from './ShareBox'
export default {
  name: 'PostInner',
  data () {
    return {
      id: this.$route.params.id,
      post: {},
      postImg: require('../assets/img/sunflower.jpg'),
      postDate: '12.02.18',
      postViews: 999
    }
  },
  components: { ShareBox },
  created () {
    let vm = this
    axios.get('https://jsonplaceholder.typicode.com/posts/' + vm.id)
      .then(function (data) {
        console.log(data)
        vm.post = data.data
      })
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  .post-inner{
    margin: 50px 0 50px 0;
    width: 100%;
    height: 100%;
    @include shadow;
    &:hover{
      @include shadow_deep;
    }
  }
  //post header
  .post-header{
    height: 90px;
    max-height: 100%;
    width: 100%;
    background: $color-graphite;
    color: $color-white;
    h1.post-heading{
      padding: 35px 10px 0 10px;
      font-size: 1.1rem;
      line-height: 1rem;
      text-align: center;
    }
    p.post-date{
      text-align: right;
      padding-right: 10px;
      padding-top: 0;
    }
  }
  //post body
  .post-body{
    width: 100%;
    min-height: 100%;
    figure.post-image{
      margin: 0;
      height: 350px;
      width: 100%;
      overflow: hidden;
      img{
        height: auto;
        width: 120%;
        overflow: hidden;
      }
    }
    .post-text{
      margin: 0 auto;
      width: 85%;
      p.inner-text{
        color: $color-graphite;
        text-indent: 2rem;
        font-size: 1.1rem;
        line-height: 1.3rem;
        font-weight: 400;
        padding: 10px 0 10px 0;
      }
      button.post-btn {
        /*bottom: 30px;*/
        position: relative;
        margin-bottom: 20px;
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
    /*.read-more{*/
      /*height: 0;*/
      /*position: relative;*/
      /*padding-right: 100px;*/
    /*}*/
  }
  .post-footer{
    height: 30px;
    width: 100%;
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
  /*media*/
  @media (max-width: 470px) {
    .post-header {
      height: 100px;
    }
    .post-inner {
      .post-header {
        h1.post-heading {
          font-size: 1rem;
        }
      }
    }
  }
</style>
