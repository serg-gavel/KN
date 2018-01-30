<template>
  <section class="cooperation-section">
    <h1>{{msg}}</h1>
  </section>
</template>

<script>
export default {
  name: 'CooperationSection',
  data () {
    return {
      msg: 'Cooperation Section!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .cooperation-section{
    order: 2;
    height: 100%;
    background: rgba(37, 130, 59, 0.68);
  }
</style>
