<template>
  <div class="button-box">
    <router-link to="/blog" tag="button" class="visit-blog-button btn">Перейти в блог</router-link>
    <button class="enroll-button btn" id="show-modal" @click="showModal = true">Записаться на маникюр</button>
      <ModalWindow v-if="showModal" @close="showModal = false">modal</ModalWindow>
  </div>
</template>

<script>
import ModalWindow from './ModalWindow'

export default {
  name: 'ButtonBox',
  data () {
    return {
      showModal: false
    }
  },
  components: { ModalWindow }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .button-box{
    width: 100%;
    padding-top: 3%;
    padding-bottom: 5%;
    background: $button-color-background;
    min-height: 90px;
    button.visit-blog-button{
    }
    button.enroll-button{
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
