<template>
  <div id="app">
    <div class="container">
      <AppHeader>App Header</AppHeader>
      <AppMain>App Main</AppMain>
    </div>
    <AppFooter>App Footer</AppFooter>
    <!--<img src="./assets/logo.png">-->
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
html{
  /*height: 100%;*/
}
body{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*min-height: 100vh;*/
  /*display: flex;*/
  /*flex-direction: column;*/
  /*min-height: 100vh;*/
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f3f3f3;
  //flex prop
  /*display: flex;*/
  /*flex-direction: column;*/
  //flex prop end
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
}
  .container{
    background: #fff;
  }
</style>
