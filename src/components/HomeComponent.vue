<template lang='pug'>
  div
    //- carousel
    div.carousel
      slider(
        animation='fade' 
        height='480px' 
        indicators='false'
        interval=3500
        speed=750)
        slider-item(
          v-for='(item, index) in carouselList' 
          :key='index')
          img(:src= '(item.src)' :alt= '(item.alt)' )
          button
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
  },
  data() {
    return {
      carouselList: [
        {src: require('@/assets/NC.jpg'), alt: 'NC高精度帶導向汽缸'},
        {src: require('@/assets/ST1.jpg'), alt: 'ST1可客制、多元使用'}
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.carousel{
  width: 1024px;
  height: 480px;
}
</style>