<template>
  <section class="blog-section">
    <h3>Последнее в блоге</h3>
    <PostSection>PostSection1</PostSection>
    <ButtonBox>ButtonBox</ButtonBox>
  </section>
</template>

<script>
import PostSection from './PostSection'
import ButtonBox from './ButtonBox'
export default {
  name: 'BlogSection',
  data () {
    return {
    }
  },
  components: { PostSection, ButtonBox }
}
</script>

<style lang="scss" scoped>
  .blog-section{
    order: 2;
    height: 100%;
    /*background: rgba(255, 250, 57, 0.68);*/
    h3{
      padding-top: 20px;
    }
  }
</style>
