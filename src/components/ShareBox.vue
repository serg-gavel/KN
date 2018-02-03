<template>
  <div class="share-box">
    <h5>Поделиться в соцсетях</h5>
    <button class="share-button btn tw-btn"><i class="fab fa-twitter"></i></button>
    <button class="share-button btn fb-btn"><i class="fab fa-facebook-f"></i></button>
    <button class="share-button btn gp-btn"><i class="fab fa-google-plus-g"></i></button>
  </div>
</template>

<script>

export default {
  name: 'ShareBox',
  data () {
    return {
      social:
        [
          'Twitter',
          'Facebook',
          'GooglePlus'
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/fonts/fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css";
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
    i{
      font-size: 1.1rem;
    }
  }
  .btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin:10px 2px;
    background: #fff;
    color: $button-color;
    border: 2px solid $button-color;
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
    letter-spacing: 0.05rem;
    &:hover{
      color: #fff;
      transition: all .3s linear;
      @include shadow;
    }
    &:focus {outline: none}
  }
  .tw-btn{
    &:hover {
      background: $tw-color;
      border: 2px solid $tw-color;
    }
  }
  .fb-btn{
    &:hover {
      background: $fb-color;
      border: 2px solid $fb-color;
    }
  }
  .gp-btn{
    &:hover {
      background: $gp-color;
      border: 2px solid $gp-color;
    }
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
  }
  @media (max-width: 430px) {
  }
  @media (max-width: 330px) {
  }
</style>
