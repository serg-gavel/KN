<template>
  <div class="add-post">
    <div class="post-body">
      <h1>Add a new Blog Post</h1>
      <form action="#">
        <label for="">Blog Title: </label>
        <input type="text" title="blog-title" required>
        <label for="">Blog Content: </label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      <!--preview-->
      <div id="preview">
        <h2>Preview Post</h2>
        <p>Blog Title:</p>
        <p>Blog Content:</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPost',
  data () {
    return {
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
  }
  .add-post *{
    box-sizing: border-box;
  }
  .post-body{
    margin: 0 auto;
    max-width: 900px;
    min-width: 400px;
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
    padding: 10px 20px;
    border: 2px solid $color-graphite;
    margin: 30px 0;
  }
</style>
