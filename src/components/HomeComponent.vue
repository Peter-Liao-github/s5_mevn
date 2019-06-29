<template lang='pug'>
  div
    //- carousel
    div
      b-carousel(
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        img-width="1024"
        img-height="480"
      )
        b-carousel-slide(
          caption=""
          img-src="../assets/NC.jpg"
        )
        b-carousel-slide(
          caption=""
          img-src="../assets/ST1.jpg"
        )
    //- news
    //- vedio
    //- contact
    h1 HomePage
    p 中文字測試中唷
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
// @import '~/bootstrap/dist/css/bootstrap.css';
// @import '~/bootstrap-vue/dist/bootstrap-vue.css';
b-caroudel-slide{

}
</style>
