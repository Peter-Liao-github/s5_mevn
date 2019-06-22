<template lang='pug'>
  #app
    img(alt="Vue logo" src="./assets/logo.png")
    HomeComponent(msg="Here's HomeComponent")
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'app',
  components: {
    HomeComponent
  }
}
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosanstc.css);
#app {
  font-family: 'Noto Sans TC', \5FAE\8EDF\6B63\9ED1\9AD4, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
