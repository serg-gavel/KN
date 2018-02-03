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
export default {
  name: 'PostSection',
  data () {
    return {
    }
  },
  components: { PostCover }
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
