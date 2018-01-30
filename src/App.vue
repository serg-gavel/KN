<template>
  <div id="app">
    <div class="container">
      <AppHeader>App Header</AppHeader>
      <AppMain>App Main</AppMain>
    </div>
    <AppFooter>App Footer</AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<style lang="scss">
@import "assets/scss/main";
  /*main styles*/
@include reset_css;
@include decoration_reset;
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f3f3f3;
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  .container{
    background: #fff;
  }
</style>
