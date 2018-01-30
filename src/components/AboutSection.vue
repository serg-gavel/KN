<template>
  <section class="about-section">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data () {
    return {
      msg: 'About Section!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .about-section{
    order: 2;
    height: 100%;
    background: rgba(130, 0, 4, 0.68);
  }
</style>
