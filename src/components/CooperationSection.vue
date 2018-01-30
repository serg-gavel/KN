<template>
  <section class="cooperation-section">
    <div class="cooperation-image">
      <img src="../../src/assets/img/cooperation.jpg" alt="cooperation-image">
    </div>
    <div class="cooperation-description">
      <h3>Cooperation</h3>
      <div class="description-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cum?
        </p>
      </div>
    </div>
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
