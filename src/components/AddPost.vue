<template>
  <div class="add-post">
    <div class="post-body">
      <h1>Add a new Blog Post</h1>
      <form action="#">
        <label for="">Blog Title: </label>
        <input type="text"  v-model.lazy="blog.title" title="title-input" required>
        <label for="">Blog Content: </label>
        <textarea name="" id="" cols="30" rows="10" v-model.lazy="blog.content"></textarea>
        <div id="checkbox">
          <label for="">Маникюр</label>
          <input type="checkbox" value="" v-model="blog.categories" title="categories-input">
          <label for="">Лаки</label>
          <input type="checkbox" value="" v-model="blog.categories" title="categories-input">
          <label for="">Дизайн</label>
          <input type="checkbox" value="" v-model="blog.categories" title="categories-input">
          <label for="">Советы</label>
          <input type="checkbox" value="" v-model="blog.categories" title="categories-input">
        </div>
      </form>
      <!--preview-->
      <div id="preview">
        <h2>Preview Post</h2>
        <p><span>Blog Title:</span> {{ blog.title }}</p>
        <p><span>Blog Content:</span></p>
        <p>{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPost',
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  .add-post{
    order: 2;
    min-height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-left: 10px;
    h1{
      font-size: 1.5rem;
      font-weight: 400;
      margin: 20px 0;
    }
    h2{
      margin-top: 10px;
      font-size: 1.3rem;
      font-weight: 400;
    }
    p{
      font-size: 1rem;
      color: $color-graphite;
    }
    p>span{
      font-size: 1.1rem;
      color: #000;
    }
  }
  .add-post *{
    box-sizing: border-box;
  }
  .post-body{
    margin: 0 auto;
    max-width: 900px;
    min-width: 400px;
    width: 300px;
  }
  label{
    display: block;
    margin: 10px 0;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
  }
  #preview{
    width: 100%;
    padding: 10px 20px;
    border: 2px solid $color-graphite;
    margin: 30px 0;
    p{
      width: 300px;
    }
  }
</style>
