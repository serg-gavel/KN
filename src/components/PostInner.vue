<template>
  <div class="post-inner">
    <div class="post-header">
      <h4 class="post-heading">Подсолнухи – спутники солнца, подобны глазам твоим светлым</h4>
      <p class="post-date">{{ postDate }}</p>
    </div>
    <div class="post-body">
      <div class="post-image">
        <img src="../assets/img/sunflower.jpg" alt="#">
      </div>
      <div class="post-text">
        <p class="inner-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam
          aspernatur aut debitis dolores eveniet exercitationem facilis labore
          laborum laudantium, maxime natus odio odit officia possimus, praesentium
          quae quaerat quasi reiciendis sequi temporibus, voluptatem voluptatum?
          Animi consequatur dignissimos dolore doloribus eveniet nobis praesentium
          quidem voluptatum! Adipisci enim modi nesciunt rem reprehenderit similique
          ut veritatis? Consequuntur cum, incidunt ipsum provident quae ut voluptates.
          Animi beatae consequatur corporis eligendi ipsum iure molestiae similique
          sint veritatis. Aliquam at blanditiis deleniti fugiat fugit, itaque mollitia
          natus, nemo nihil pariatur quasi quos ratione reprehenderit ullam voluptatum?
          Asperiores debitis dignissimos dolorum earum eos esse expedita facere,
          harum hic id labore magnam maiores molestiae nesciunt nobis non odit
          perspiciatis, possimus quisquam rem repellat tempora temporibus unde
          vel velit vitae voluptas. Ab aperiam, autem beatae commodi deleniti
          dolor doloremque eaque eligendi in ipsa ipsam labore laudantium liber
          o minus nulla officia praesentium quae quaerat quo reiciendis rem repellat
          sequi tenetur ullam ut, vel, voluptatibus? Aliquid architecto consectetur
          cum cupiditate, dolor eligendi ipsa laborum maxime nulla possimus quia quis,
          saepe sapiente sed sunt suscipit tempora tempore vitae! Accusantium autem
          delectus explicabo facilis id illo illum ipsam nesciunt nostrum perspiciatis
          sit veniam, vitae voluptatibus. Accusantium alias, atque blanditiis consectetur
          ea eius eligendi maiores mollitia nihil nobis numquam omnis perspiciatis porro
          qui quisquam repellat sit sunt temporibus ut voluptate! Distinctio in ipsum
          laboriosam maiores mollitia quas qui reiciendis voluptatem? Aliquam aliquid,
          autem consequatur consequuntur cum debitis delectus deserunt dignissimos
          distinctio dolorem doloremque doloribus et facilis fugiat harum inventore
          ipsum laboriosam magnam molestias nostrum quae quam quas qui quis quos rem
          repellat similique sunt tenetur veniam! Animi earum eligendi illum laborum
          obcaecati quos reiciendis reprehenderit! Ab, animi, architecto at blanditiis
          deserunt dicta ea eaque explicabo id ipsa modi nam natus nobis optio pariatur,
          perspiciatis rem repellat repellendus saepe sunt ullam unde voluptate volupt
          atibus?
        </p>
        <div class="read-more">
          <router-link to="/blog" tag="button" class="post-btn">Вернуться назад</router-link>
        </div>
        <ShareBox>ShareBox</ShareBox>
      </div>
    </div>
    <div class="post-footer">
      <div class="views-count">
        <p class="views">{{ postViews }}&nbsp;views</p>
      </div>
    </div>
  </div>
</template>

<script>
import ShareBox from './ShareBox'
export default {
  name: 'PostInner',
  data () {
    return {
      postDate: '12.02.18',
      postViews: 999
    }
  },
  components: { ShareBox }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main";
  .post-inner{
    margin: 50px 0 50px 0;
    width: 100%;
    height: 100%;
    @include shadow;
    &:hover{
      @include shadow_deep;
    }
  }
  //post header
  .post-header{
    height: 90px;
    width: 100%;
    background: $color-graphite;
    color: $color-white;
    h4.post-heading{
      padding: 35px 10px 0 10px;
      font-size: 1.1rem;
      line-height: 1rem;
      text-align: center;
    }
    p.post-date{
      text-align: right;
      padding-right: 10px;
    }
  }
  //post body
  .post-body{
    width: 100%;
    min-height: 100%;
    .post-image{
      height: 350px;
      width: 100%;
      overflow: hidden;
      img{
        height: auto;
        width: 120%;
        overflow: hidden;
      }
    }
    .post-text{
      margin: 0 auto;
      width: 85%;
      p.inner-text{
        color: $color-graphite;
        text-indent: 2rem;
        font-size: 1.1rem;
        line-height: 1.3rem;
        font-weight: 400;
        padding: 10px 0 10px 0;
      }
      button.post-btn {
        /*bottom: 30px;*/
        position: relative;
        margin-bottom: 20px;
        background: rgba(58, 58, 58, 0.35);
        color: $button-color-white;
        border: 2px solid $button-color-white;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        font-size: 0.8rem;
        line-height: 1.5;
        padding: 10px 25px;
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
    }
    /*.read-more{*/
      /*height: 0;*/
      /*position: relative;*/
      /*padding-right: 100px;*/
    /*}*/
  }
  .post-footer{
    height: 30px;
    width: 100%;
    background: $color-graphite;
    .views-count{
      p.views{
        color: #fff;
        margin: 0;
        text-align: right;
        padding: 5px 10px 0 0;
      }
    }
  }
</style>
