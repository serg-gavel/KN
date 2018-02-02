<template>
  <section class="post-section">
    <div class="post-inner">
      <div class="post-header">
          <h4 class="post-heading">Подсолнухи – спутники солнца, подобны глазам твоим светлым</h4>
          <p class="post-date">21.02.18</p>
      </div>
      <div class="post-body">
        <div class="post-image">
          <img src="../assets/img/pizza.jpg" alt="#">
        </div>
        <div class="read-more">
          <button class="post-btn">Read More...</button>
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
@import "../assets/scss/main";
  .post-section{
    order: 2;
    min-height: 100%;
    /*background: rgba(0, 38, 255, 0.68);*/
    .post-inner{
      margin-left: 10px;
      margin-top: 30px;
      width: 320px;
      /*background: green;*/
      height: 470px;
      margin-bottom: 50px;
      @include shadow;
      &:hover{
        @include shadow_deep;
      }
    }
  }
  //post header
  .post-header{
    height: 90px;
    width: 320px;
    background: $color-graphite;
    color: $color-white;
    h4.post-heading{
      padding-top: 25px;
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
    width: 320px;
    height: 350px;
    background: red;
    .post-image{
      height: 350px;
      width: 320px;
      overflow: hidden;
      img{
        height: auto;
        width: 130%;
        overflow: hidden;
      }
    }
    .read-more{
      background: yellowgreen;
      height: 0;
      position: relative;
      padding-right: 100px;
      /*padding-bottom: 40px;*/
      button.post-btn {
        bottom: 30px;
        position: absolute;
        /*margin:10px 5px;*/
        background: rgba(58, 58, 58, 0.35);
        color: $button-color-white;
        border: 2px solid $button-color-white;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        font-size: 0.9rem;
        line-height: 1.5;
        padding: 10px 25px;
        letter-spacing: 0.05rem;
        &:hover{
          background: $button-color-hover;
          color: #fff;
          border: 2px solid $button-color-hover;
          transition: all .3s linear;
          @include shadow;
        }
        &:focus {outline: none}
      }
        /*float: left;*/
        /*position: absolute;*/
        /*bottom: 40px;*/
        /*margin-left: 10px;*/
        /*margin: 0 auto;*/
      }
    }
  .post-footer{
    height: 30px;
    width: 320px;
    background: $color-graphite;
    .views-count{
      p.views{
        color: #fff;
        padding: 0;
        margin: 0;
        text-align: right;
        padding-top: 5px;
        padding-right: 10px;
      }
    }
  }
</style>
