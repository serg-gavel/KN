<template>
  <section class="post-section">
    <h3>PostSection</h3>
    <div class="post-inner">
      <div class="post-header">
        <div class="post-date"></div>
        <div class="post-heading"></div>
      </div>
      <div class="post-body">
        <div class="post-image">
          <img src="../assets/img/sunflower.jpg" alt="#">
        </div>
      </div>
      <div class="post-footer">
        <div class="read-more">
          <button>Read More...</button>
        </div>
        <div class="likes-count"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PostSection',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-section{
    order: 2;
    height: 400px;
    background: rgba(0, 38, 255, 0.68);
    flex-direction: column;
    .post-inner{
      flex-basis: 50%;
      background: green;
      height: 300px;
    }
  }
  .post-body{
    .post-image{
      max-width: 300px;
      img{
        width: 100%;
      }
    }
  }
</style>
