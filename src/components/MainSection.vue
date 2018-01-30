<template>
  <section class="main-section">
    <CoverImage>CoverImage</CoverImage>
    <BlogCover>BlogCover</BlogCover>
    <Social>Social</Social>
    <ButtonBox>ButtonBox</ButtonBox>
  </section>
</template>

<script>
import CoverImage from '../components/CoverImage'
import Social from './Social'
import ButtonBox from './ButtonBox'
import BlogCover from './BlogCover'
export default {
  name: 'MainSection',
  data () {
    return {
    }
  },
  components: { CoverImage, Social, ButtonBox, BlogCover }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main-section{
    order: 2;
    height: 100%;
    background: rgba(61, 25, 109, 0.68);
  }
</style>
