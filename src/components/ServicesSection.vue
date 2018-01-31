<template>
  <section class="services-section">
    <h3>{{ ServicesHeading }}</h3>
    <p class="services-description">{{ ServicesDescription }}</p>
    <div class="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
    </div>
    <div class="services-price">
      <div class="price-list">
        <h4 class="services-type">{{ ServiceType }}</h4>
        <table class="price-table">
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
          </tr>
          <tr>
            <td>Маникюр + покрытие однотонное</td>
            <td>120 грн</td>
          </tr>
          <tr>
            <td>Маникюр + покрытие + несложный дизайн (блестки, фольга, втирка, ленты, слайдер)</td>
            <td>130/140 грн</td>
          </tr>
          <tr>
            <td>Маникюр + покрытие + сложный дизайн (лунный, геометрия, френч, градиент, инкрустация)</td>
            <td>150/160 грн</td>
          </tr>
          <tr>
            <td>Художественная роспись</td>
            <td>180/200 грн</td>
          </tr>
          <tr>
            <td>Наращивание, донаращивание, ремонт, укрепление ногтя</td>
            <td>5/20 грн</td>
          </tr>
          <tr>
            <td>Снятие материала без последующего покрытия</td>
            <td>20 грн</td>
          </tr>
        </table>
      </div>
    </div>
    <ButtonBox>ButtonBox</ButtonBox>
  </section>
</template>

<script>
import ButtonBox from './ButtonBox'
export default {
  name: 'ServicesSection',
  data () {
    return {
      ServicesHeading: 'Услуги мастера маникюра',
      ServicesDescription: 'Уже в течение нескольких лет я помогаю своим клиентам становиться увереннее и выражать свой красивый внутренний мир за счет внешнего. Мои услуги включают в себя разбор гардероба, подбор стиля и персональный шоппинг с клиентом. Выбрать можно как полный пакет, так и каждую услугу отдельно в зависимости от вашего желания.',
      ServiceType: 'Маникюр'
    }
  },
  components: { ButtonBox }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .services-section{
    order: 2;
    height: 100%;
    h3{
      padding-top: 20px;
    }
    p.services-description{
      padding: 0 12%;
    }
    .services-image{
      img{
        margin: 0 1%;
        max-width: 295px;
        border-radius: 5px;
        @include shadow;
      }
    }
    .services-price{
      .price-list{
        h4.services-type{
          padding: 20px 0;
        }
        table.price-table{
          margin: 0 auto;
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 65%;
          margin-bottom: 30px;
          z-index: 3;
        }
        th{
          font-size: 1rem;
          font-weight: bold;
        }
        td, th{
          font-family: 'Oswald', sans-serif;
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        tr:nth-child(even){
          background-color: rgba(91, 45, 255, 0.18);
        }
        td,tr{
          font-size: 0.9rem;
        }
      }
    }
  }
@media (max-width: 1200px) {
  .services-image{
    img{
      max-width: 260px;
    }
  }
}
@media (max-width: 998px) {
  .services-section {
    .services-image {
      img {
        max-width: 220px;
      }
    }
  }
}
@media (max-width: 770px) {
  .services-section {
    .services-image {
      img {
        margin: 1% 0;
        max-width: 80%;
      }
    }
  }
  .services-price{
    .price-list{
      table.price-table{
        width: 85% !important;
      }
    }
  }
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
