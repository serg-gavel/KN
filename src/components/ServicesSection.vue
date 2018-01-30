<template>
  <section class="services-section">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data () {
    return {
      msg: 'Services'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .services-section{
    order: 2;
    height: 100%;
    background: rgba(9, 0, 255, 0.68);
  }
</style>
