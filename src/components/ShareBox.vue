<template>
  <div class="share-box">
    <button class="share-button btn">Поделиться</button>
    <button class="share-button btn">Поделиться</button>
    <button class="share-button btn">Поделиться</button>
    <button class="share-button btn">Поделиться</button>
  </div>
</template>

<script>

export default {
  name: 'ShareBox',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  .share-box{
    width: 100%;
    padding-top: 3%;
    padding-bottom: 5%;
    background: $button-color-background;
    min-height: 90px;
    button.visit-blog-button{
    }
    button.share-button{
    }
  }
  .btn {
    margin:10px 5px;
    background: #fff;
    color: $button-color;
    border: 2px solid $button-color;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 15px 25px;
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
  /*media*/
  @media (max-width: 1200px) {
  }
  @media (max-width: 998px) {
  }
  @media (max-width: 770px) {
  }
  @media (max-width: 570px) {
  }
  @media (max-width: 500px) {
    .btn {
      font-size: 0.8rem;
      margin: 5px 5px;
      padding: 10px 20px;
      @include common_animation;
    }
  }
  @media (max-width: 430px) {
  }
  @media (max-width: 330px) {
  }
</style>
