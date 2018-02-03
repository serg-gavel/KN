<template>
  <div class="post-cover">
    <div class="post-header">
      <h4 class="post-heading">Подсолнухи – спутники солнца, подобны глазам твоим светлым</h4>
      <p class="post-date">21.02.18</p>
    </div>
    <div class="post-body">
      <div class="post-image">
        <img src="../assets/img/sunflower.jpg" alt="#">
      </div>
      <div class="read-more">
        <router-link to="/post" tag="button" class="post-btn">Read More...</router-link>
      </div>
    </div>
    <div class="post-footer">
      <div class="views-count">
        <p class="views">150 views</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCover'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .post-cover{
    margin: 0 0 10px 10px;
    width: 320px;
    height: 470px;
    @include shadow;
    &:hover{
      @include shadow_deep;
    }
  }
  //post header
  .post-header{
    height: 90px;
    width: 320px;
    background: $color-graphite;
    color: $color-white;
    h4.post-heading{
      padding: 25px 10px 0 10px;
      font-size: 1.1rem;
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
      height: 0;
      position: relative;
      padding-right: 100px;
      button.post-btn {
        bottom: 30px;
        position: absolute;
        background: rgba(58, 58, 58, 0.35);
        color: $button-color-white;
        border: 2px solid $button-color-white;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        font-size: 0.8rem;
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
    }
  }
  .post-footer{
    height: 30px;
    width: 320px;
    background: $color-graphite;
    .views-count{
      p.views{
        color: #fff;
        margin: 0;
        text-align: right;
        padding: 5px 10px 0 0;
      }
    }
  }
</style>
