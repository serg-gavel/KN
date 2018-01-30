<template>
  <section class="blog-section">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  data () {
    return {
      msg: 'Blog Section!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .blog-section{
    order: 2;
    /*height: 100%;*/
    background: rgba(255, 250, 57, 0.68);
  }
</style>
