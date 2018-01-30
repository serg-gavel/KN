<template>
  <section class="about-section">
    <div class="about-image">
      <img src="../../src/assets/img/about.jpg" alt="about-image">
    </div>
    <div class="about-description">
      <h3 class="about-heading">{{ AboutHeading }}</h3>
      <div class="description-text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, cum?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda obcaecati
          quas sed totam vitae! Ab, accusamus beatae culpa cum dolor doloremque dolores
          eos error est et excepturi illum ipsa laborum molestias natus neque nesciunt nisi
          nostrum odit quibusdam quis quos ratione recusandae rem rerum sapiente sunt tempore
          temporibus voluptas voluptate.
          eos error est et excepturi illum ipsa laborum molestias natus neque nesciunt nisi
          nostrum odit quibusdam quis quos ratione recusandae rem rerum sapiente sunt tempore
          temporibus voluptas voluptate.
          eos error est et excepturi illum ipsa laborum molestias natus neque nesciunt nisi
          nostrum odit quibusdam quis quos ratione recusandae rem rerum sapiente sunt tempore
          temporibus voluptas voluptate
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
  name: 'AboutSection',
  data () {
    return {
      AboutHeading: 'Обо мне'
    }
  },
  components: { ButtonBox }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  .about-section{
    padding: 20px 0;
    order: 2;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .about-image{
      flex-basis: 48%;
      padding-left: 2%;
      img{
        width: 100%;
        @include shadow;
      }
    }
    .about-description{
      flex-basis: 50%;
      h3.about-heading{
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
    .about-section{
      flex-direction: column;
    }
    .about-image{
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
