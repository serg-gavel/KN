<template>
  <div class="modal-window">
    <transition name="modal">
      <div class="modal-mask">
          <div class="modal-container">
            <div class="modal-header">
                <span class="close" @click="$emit('close')">&times;</span>
              <slot name="header">
                <h4>Для записи есть 2 варианта:</h4>
                <div class="header-wrap">
                  <h5>1. Наличие аккаунта Instagram для сообщений в Direct</h5>
                  <h5>2. Позовнить мастеру по телефону предоставленному ниже</h5>
                </div>
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
               <div class="body-wrap">
                 <h5><i class="fab fa-instagram"></i>&nbsp;&nbsp;Напишите мне в Direct<a href="#"> Перейти в Instagram</a><br></h5>
                 <h5><i class="fas fa-phone"></i>&nbsp;Свяжитесь со мной по телефону<a href="tel:+099-999-99-99" rel="nofollow"> 099-999-99-99</a></h5>
               </div>
              </slot>
              <!--<form action="/action_page.php">-->
                <!--<input v-model="message" placeholder="Ваше имя">-->
                <!--<p>Имя: {{ message }}</p>-->
                <!--<input v-model="phoneNumber" placeholder="Ваш номер телефона">-->
                <!--<p>Номер телефона: {{ phoneNumber }}</p>-->
                <!--<input v-model="dateTime" placeholder="Предпочитаемая дата и время">-->
                <!--<p>Дата и время: {{ dateTime }}</p>-->
                <!--&lt;!&ndash;Last name:<br>&ndash;&gt;-->
                <!--&lt;!&ndash;<input type="text" name="lastname" value="Mouse">&ndash;&gt;-->
                <!--<input class="btn" type="submit" value="Записаться">-->
              <!--</form>-->
            </div>
            <div class="modal-footer">
              <!--<slot name="footer">-->
                <!--default footer-->
              <!--</slot>-->
            </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'ModalWindow',
  data () {
    return {
      message: '',
      phoneNumber: '',
      dateTime: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/fonts/fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css";
  h4{
    text-align: center;
    padding-top: 40px;
    padding-right: 40px;
    padding-left: 40px;
    line-height: 1.3rem;
    font-size: 1.5rem;
  }
  h5{
    text-align: start;
    font-size: 1rem;
    padding: 2px 0;
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
    /*.modal-wrapper {*/
      /*display: table-cell;*/
      /*vertical-align: middle;*/
    /*}*/
    .modal-container {
      position: relative;
      background-color: #fefefe;
      margin: 0 auto;
      /*padding: 0 20px;*/
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
        /*width: 300px;*/
        margin: 0 auto;
      }
      .modal-footer{}
      .header-wrap, .body-wrap{
        margin: 0 auto;
        padding-top: 30px;
        max-width: 360px;
      }
    }
    @-webkit-keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }

    @keyframes animatetop {
      from {top:-300px; opacity:0}
      to {top:0; opacity:1}
    }
    .close {
      padding: 10px 20px;
      color: red;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }
    .close:hover,
    .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
    /*.modal-body {*/
      /*margin: 20px 0;*/
    /*}*/
    /*.modal-enter {*/
      /*opacity: 0;*/
    /*}*/
    /*.modal-leave-active {*/
      /*opacity: 0;*/
    /*}*/
    /*.modal-enter .modal-container,*/
    /*.modal-leave-active .modal-container {*/
      /*-webkit-transform: scale(1.1);*/
      /*transform: scale(1.1);*/
    /*}*/
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
