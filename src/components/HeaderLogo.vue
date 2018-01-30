<template>
  <div class="header-logo">
    <router-link class="nav-link" to="/">
      <img src="../../src/assets/img/logo.png" alt="header-logo">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderLogo',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/main";
.header-logo{
    height: 70px;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    //@include border-bottom;
    img{
      max-height: 100%;
      width: auto;
    }
  }
</style>
