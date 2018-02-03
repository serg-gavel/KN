<template>
  <section class="post-section">
    <PostCover>PostCover</PostCover>
    <PostCover>PostCover</PostCover>
    <PostCover>PostCover</PostCover>
    <PostCover>PostCover</PostCover>
    <PostCover>PostCover</PostCover>
    <PostCover>PostCover</PostCover>
  </section>
</template>

<script>
import PostCover from './PostCover'
import AddPost from './AddPost'
export default {
  name: 'PostSection',
  data () {
    return {
    }
  },
  components: { PostCover, AddPost }
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
