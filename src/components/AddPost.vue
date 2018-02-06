<template>
  <div class="add-post">
    <div class="post-body">
      <h1 v-if="!submitted">Добавить новый пост</h1>
      <form v-if="!submitted" action="#">
        <label for="">Blog Title: </label>
        <input type="text"  v-model.lazy="post.title" title="title-input" required>
        <label for="">Blog Content: </label>
        <textarea name="" id="" cols="30" rows="10" v-model.lazy="post.content"></textarea>
        <div id="checkbox">
          <label for="">Маникюр</label>
          <input type="checkbox" value="маникюр" v-model="post.categories" title="categories-input">
          <label for="">Лаки</label>
          <input type="checkbox" value="лаки" v-model="post.categories" title="categories-input">
          <label for="">Дизайн</label>
          <input type="checkbox" value="дизайн" v-model="post.categories" title="categories-input">
          <label for="">Советы</label>
          <input type="checkbox" value="советы" v-model="post.categories" title="categories-input">
        </div>
        <label for="">Author:</label>
        <select v-model="post.author" title="select-author" id="select-author">
          <option v-for="author in authors" :key="author">{{ author }}</option>
        </select>
        <button @click.prevent="addPost" >Add Post</button>
      </form>
      <div class="submitted" v-if="submitted">
        <h3>Пост был успешно добавлен</h3>
      </div>
      <!--preview-->
      <div id="preview">
        <h2>Preview Post</h2>
        <p><span>Blog Title:</span> {{ post.title }}</p>
        <p><span>Blog Content:</span></p>
        <p>{{ post.content }}</p>
        <p><span>Blog Categories:</span></p>
        <ul>
          <li v-for="category in post.categories" :key="category.id">{{ category }}</li>
        </ul>
        <p><span>Author:</span> {{ post.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddPost',
  data () {
    return {
      post: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Katyusha Nakon', 'Nakon Nails', 'Administrator'],
      submitted: false
    }
  },
  methods: {
    addPost: function () {
      let vm = this
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.post.title,
        body: this.post.content,
        userId: 1
      }).then(function (data) {
        console.log(data)
        vm.submitted = true
      })
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
    border: 2px dotted $color-graphite;
    margin: 30px 0;
    p{
      width: 300px;
    }
    ul{
      li{
        list-style-type: circle;
      }
    }
  }
  #checkbox input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkbox label{
    display: inline-block;
  }
  .submitted{
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 25px;
    width: 300px;
    height: 95px;
    border: 2px dotted $color-graphite;
  }
</style>
