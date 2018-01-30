<template>
  <section class="cooperation-section">
    <div class="cooperation-image">
      <img src="../../src/assets/img/cooperation.jpg" alt="cooperation-image">
    </div>
    <div class="cooperation-description">
      <h3 class="cooperation-heading">{{ CooperationHeading }}</h3>
      <div class="description-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cum?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda obcaecati
          quas sed totam vitae! Ab, accusamus beatae culpa cum dolor doloremque dolores
          eos error est et excepturi illum ipsa laborum molestias natus neque nesciunt nisi
          nostrum odit quibusdam quis quos ratione recusandae rem rerum sapiente sunt tempore
          temporibus voluptas voluptate.
        </p>
      </div>
    </div>
    <ButtonBox>ButtonBox</ButtonBox>
  </section>
</template>

<script>
import ButtonBox from './ButtonBox'

export default {
  name: 'CooperationSection',
  data () {
    return {
      CooperationHeading: 'Сотрудничество'
    }
  },
  components: { ButtonBox }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .cooperation-section{
    padding: 20px 0;
    order: 2;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .cooperation-image{
      flex-basis: 48%;
      padding-left: 2%;
      padding-bottom: 20px;
      img{
        width: 100%;
        @include shadow;
      }
    }
    .cooperation-description{
      flex-basis: 50%;
      h3.cooperation-heading{
        font: 1.5rem "Oswald";
        padding-left: 8%;
        text-align: start;
        align-self: flex-start;
      }
      .description-text{
        padding: 1% 10%;
      }
    }
  }
/*media*/
@media (max-width: 1200px) {
}
@media (max-width: 998px) {
}
@media (max-width: 770px) {
  .cooperation-section{
    flex-direction: column;
  }
  .cooperation-image{
    padding-right: 2%;
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
