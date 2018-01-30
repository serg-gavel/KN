<template>
  <section class="cooperation-section">
    <div class="cooperation-image">
      <img src="../../src/assets/img/cooperation.jpg" alt="cooperation-image">
    </div>
    <div class="cooperation-description">
      <h3 class="cooperation-heading">{{ CooperationHeader }}</h3>
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
      <ButtonBox>ButtonBox</ButtonBox>
    </div>
  </section>
</template>

<script>
import ButtonBox from './ButtonBox'

export default {
  name: 'CooperationSection',
  data () {
    return {
      CooperationHeader: 'Сотрудничество'
    }
  },
  components: { ButtonBox }
}
</script>

<style lang="scss" scoped>
  .cooperation-section{
    padding-top: 20px;
    order: 2;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: rgba(37, 130, 59, 0.68);
    .cooperation-image{
      flex-basis: 50%;
      img{
        width: 100%;
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
        padding: 0 5%;
        p{
          text-align: start;
        }
      }
    }
  }
</style>
