<template>
  <section class="blog-section">
    <h3>Последнее в блоге</h3>
    <PostSection>PostSection1</PostSection>
  </section>
</template>

<script>
import PostSection from './PostSection'
export default {
  name: 'BlogSection',
  data () {
    return {
    }
  },
  components: { PostSection }
}
</script>

<style lang="scss" scoped>
  .blog-section{
    order: 2;
    height: 100%;
    /*background: rgba(255, 250, 57, 0.68);*/
    h3{
      padding: 20px 0 20px 0;
    }
  }
</style>
