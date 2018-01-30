<template>
  <section class="services-section">
    <h3>{{ ServicesHeading }}</h3>
    <p>{{ ServicesDecription }}</p>
    <div class="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
      <img src="../../src/assets/img/services.jpg" alt="services-image">
    </div>
    <div class="services-price">
      <div class="price-list">
        <h4 class="services-type">{{ ServiceType }}</h4>
        <table>
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
          </tr>
          <tr>
            <td>Классический женский</td>
            <td>100 грн.</td>
          </tr>
          <tr>
            <td>Европейский женский</td>
            <td>90 грн</td>
          </tr>
          <tr>
            <td>Аппаратный женский</td>
            <td>150-200 грн</td>
          </tr>
          <tr>
            <td>Мужской классический</td>
            <td>150-180 грн</td>
          </tr>
          <tr>
            <td>Мужской аппаратный</td>
            <td>180-220 грн</td>
          </tr>
          <tr>
            <td>Детский</td>
            <td>70-90 грн</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data () {
    return {
      ServicesHeading: 'Услуги мастера маникюра',
      ServicesDescription: 'Уже в течение нескольких лет я помогаю своим клиентам становиться увереннее и выражать свой красивый внутренний мир за счет внешнего. Мои услуги включают в себя разбор гардероба, подбор стиля и персональный шоппинг с клиентом. Выбрать можно как полный пакет, так и каждую услугу отдельно в зависимости от вашего желания.',
      ServiceType: 'Маникюр'
    }
  }
}
</script>

<style lang="scss" scoped>
  .services-section{
    order: 2;
    height: 100%;
    background: rgba(9, 0, 255, 0.68);
  }
</style>
