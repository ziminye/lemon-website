<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
<!--    <copy-right-bar></copy-right-bar>-->
  </div>
</template>

<script>
  import NavBar from './components/common/NavBar'
  import CopyRightBar from './components/common/CopyRightBar'
  export default {
  name: 'App',
    components: {
        NavBar,
        CopyRightBar
    }
}
</script>

<style>
  @import "assets/css/base.css";
  html,body{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
  }
</style>
