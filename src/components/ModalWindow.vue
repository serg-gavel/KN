<template>
  <div class="modal-window">
      <div class="modal-mask">
          <div class="modal-container">
            <div class="modal-header">
                <span class="close" @click="$emit('close')">&times;</span>
              <slot name="header">
                <h4>{{ headerHeading }}</h4>
                <div class="header-wrap">
                  <h5>{{ innerHeading.descriptionOne }}</h5>
                  <h5>{{ innerHeading.descriptionTwo }}</h5>
                </div>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
               <div class="body-wrap">
                 <h5><i class="fab fa-instagram"></i>&nbsp;&nbsp;Напишите мне в Direct<a href="#">&nbsp;нажмите, чтобы перейти в Instagram</a><br></h5>
                 <h5><i class="fas fa-phone"></i>&nbsp;Свяжитесь со мной по телефону<a :href="'tel:'+phoneNumber+''" rel="nofollow">&nbsp;{{ phoneNumber }}</a></h5>
               </div>
              </slot>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ModalWindow',
  data () {
    return {
      message: '',
      phoneNumber: '099-123-45-11',
      headerHeading: 'Для записи есть 2 варианта, но для этого необходимо :',
      innerHeading: {
        descriptionOne: '1. Наличие аккаунта Instagram для сообщений в Direct',
        descriptionTwo: '2. Либо позовнить мастеру по телефону предоставленному ниже'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/fonts/fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css";
  h4{
    text-align: center;
    padding-top: 38px;
    padding-right: 40px;
    padding-left: 40px;
    line-height: 1.3rem;
    font-size: 1.3rem;
  }
  h5{
    text-align: start;
    font-size: 1rem;
    padding: 0;
  }
  i{
    font-size: 1.3rem;
  }
  .modal-window{
    .modal-mask {
      position: fixed;
      z-index: 1;
      padding-top: 10%;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
    }
    .modal-container {
      border-radius: 5px;
      background-color: #fff;
      background-image:
        linear-gradient(90deg, transparent 79px, $gradient-color 79px, $gradient-color 81px, transparent 81px),
        linear-gradient($gradient-spare-color .1em, transparent .1em);
      background-size: 100% 1.2em;
      position: relative;
      color: $gradient-color;
      margin: 0 auto;
      border: 1px solid #888;
      max-width: 700px;
      height: 300px;
      @include shadow_deep;
      -webkit-animation-name: animatetop;
      -webkit-animation-duration: 0.6s;
      animation-name: animatetop;
      animation-duration: 0.6s;
      .modal-header{
      }
      .modal-body{
        padding-top: 15px;
        margin: 0 auto;
        a{
          color: $link-color-hover-h;
        }
      }
      .modal-footer{}
      .header-wrap, .body-wrap{
        margin: 0 auto;
        padding-top: 40px;
        max-width: 400px;
      }
    }
    //body animation
    @-webkit-keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }
    @keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }
    .close {
      padding: 11px 20px;
      color: $gradient-color;
      float: right;
      font-size: 33px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: $link-color-hover-h;
      text-decoration: none;
      cursor: pointer;
    }
  }
  .btn{
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
    .modal-window {
      .modal-container {
        max-width: 500px;
        height: 250px;
        background-image:
          linear-gradient(90deg, transparent 16px, $gradient-color 16px, $gradient-color 18px, transparent 18px),
          linear-gradient($gradient-spare-color .1em, transparent .1em);
        h4{
          font-size: 1rem;
        }
        h5{
          font-size: .95rem;
        }
      }
    }
  }
  @media (max-width: 570px) {
  }
  @media (max-width: 500px) {
    .modal-window {
      .modal-container {
        padding-top: 5px;
        padding-left: 2%;
        max-width: 360px;
        height: 250px;
        background-image:
          linear-gradient(90deg, transparent 10px, $gradient-color-h 10px, $gradient-color-h 11px, transparent 11px),
          linear-gradient($gradient-spare-color .1em, transparent .1em);
        h4{
          padding-top: 10px;
          font-size: .9rem;
        }
        h5{
          padding-top: 2px;
          font-size: .85rem;
        }
      }
      .close {
        padding: 10px 20px;
        color: $gradient-color;
        float: right;
        font-size: 22px;
        font-weight: bold;
      }
    }
  }
  @media (max-width: 430px) {
  }
  @media (max-width: 330px) {
  }
</style>
