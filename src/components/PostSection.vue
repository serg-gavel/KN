<template>
  <section class="post-section">
    <h3>PostSection</h3>
    <div class="post-inner">
      <div class="post-header">
          <h4 class="post-heading">Подсолнухи – спутники солнца, подобны глазам твоим светлым</h4>
          <p class="post-date">21.02.18</p>
      </div>
      <div class="post-body">
        <div class="post-image">
          <img src="../assets/img/sunflower.jpg" alt="#">
        </div>
        <div class="read-more">
          <button>Read More...</button>
        </div>
      </div>
      <div class="post-footer">
        <div class="views-count">
          <p class="views">150 views</p>
        </div>
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
    height: 520px;
    background: rgba(0, 38, 255, 0.68);
    flex-direction: column;
    .post-inner{
      width: 320px;
      background: green;
      height: 450px;
    }
  }
  //post header
  .post-header{
    background: #00c5ff;
    h4.post-heading{
      padding-top: 15px;
      line-height: 1rem;
      text-align: center;
    }
    p.post-date{
      text-align: right;
      padding-right: 10px;
    }
  }
  //post body
  .post-body{
    background: red;
    .post-image{
      max-width: 320px;
      img{
        width: 100%;
      }
    }
  }
  .post-footer{
    background: darkslategrey;
    .views-count{
      p.views{
        color: #fff;
      }
    }
  }
</style>
