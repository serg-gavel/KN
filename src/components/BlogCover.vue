<template>
  <section class="blog-cover">
    <div class="blog-box">
      <h3>{{ BlogTitle }}</h3>
      <div class="latest-post">
        <a href="#">
          <img class="post-image" src="../assets/img/sunflower.jpg" alt="">
          <h5 class="post-title">Подсолнухи – спутники солнца, подобны глазам твоим светлым</h5>
        </a>
      </div>
      <div class="latest-post">
        <a href="#">
          <img class="post-image" src="../assets/img/pizza.jpg" alt="">
          <h5 class="post-title">Пицца — итальянское национальное блюдо</h5>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogCover',
  data () {
    return {
      BlogTitle: 'Последние записи в блоге'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";
  .blog-cover{
    order: 2;
    display: flex;
    flex-direction: row;
    justify-content: start;
    /*height: 100%;*/
    background: #fff;
    padding-top: 30px;
    a{
      color: #000;
      &:hover{
        color: $link-color-hover;
        transition: color .7s linear;
      }
    }
    h3{
      font: 1.5rem "Oswald";
      text-align: left;
      padding-top: 10px;
      padding-left: 30px;
      clear: both;
    }
    .blog-box{
      .latest-post{
        float: left;
        padding: 10px 30px;
        max-width: 450px;
        h5{
          padding: 10px 5px;
          padding-left: 0;
          font: .9rem "Oswald";
        }
      }
      img.post-image{
        transition: all .7s linear;
        max-width: 450px;
        height: auto;
      }
      img{
        width: 100%;
      }
    }
  }
  /*media*/
  @media (max-width: 1200px) {
    .blog-box{
      transition: all .7s linear;
      margin-left: 30px;
      .latest-post{
        img.post-image{
          transition: all .7s linear;
          max-width: 400px;
          height: auto;
        }
      }
    }
  }
  @media (max-width: 998px) {
    .blog-box{
      transition: all .7s linear;
      margin-left: 14%;
      margin-right: 5%;
      width: 100%;
      .latest-post{
        float: left;
        max-width: 990px;
        img.post-image{
          transition: all .7s linear;
          max-width: 980px;
          height: auto;
        }
      }
    }
  }
  @media (max-width: 770px) {
    .blog-box{
      transition: all .7s linear;
      margin-left: 3%;
      margin-right: 0%;
      .latest-post{
        img.post-image{
          transition: all .7s linear;
          max-width: 600px;
          height: auto;
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
