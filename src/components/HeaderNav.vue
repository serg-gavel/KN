<template>
  <nav class="header-nav">
      <NavList>NavList</NavList>
  </nav>
</template>

<script>
import NavList from '../components/NavList'
export default {
  name: 'HeaderNav',
  data () {
    return {
    }
  },
  components: { NavList }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/main";
  .header-nav{
    height: 70px;
    @include border-top;
    @include border-bottom;
    /*background: cornflowerblue;*/
    //min-width: $min-width;
    //max-width: $max-width;
    /*padding-top: 10px;*/
  }
</style>
