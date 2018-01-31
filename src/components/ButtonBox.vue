<template>
  <div class="button-box">
    <router-link to="/blog" tag="button" class="visit-blog-button btn">Перейти в блог</router-link>
    <button class="enroll-button btn">Записаться на маникюр</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBox'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .button-box{
    width: 100%;
    padding-top: 3%;
    padding-bottom: 5%;
    background: #fff;
    min-height: 90px;
    button.visit-blog-button{
    }
    button.enroll-button{
    }
  }
  .btn {
    margin:10px 5px;
    background: #fff;
    color: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.8);
    cursor: pointer;
    font-family: 'Oswald', sans-serif;
    line-height: 1.5;
    /*font: 700 1.2rem 'Roboto Slab', sans-serif;*/
    padding: 15px 25px;
    letter-spacing: 0.05rem;
    &:hover{
      background: rgba(58, 58, 58, 1);
      color: #fff;
      border: 2px solid rgba(58, 58, 58, 1);
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
    margin: 5px 5px;
    padding: 10px 20px;
    transition: all .7s linear;
  }
}
@media (max-width: 430px) {
}
@media (max-width: 330px) {
}
</style>
