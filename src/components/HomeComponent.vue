<template lang='pug'>
  .hello
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

</style>
