<template lang='pug'>
  div
    h1 Create
    form(@submit.prevent='addPost')
      div
        label Post Title:
        input(type='text' v-model='post.title')
      div
        label Post Body:
        textarea(v-model='post.body')
      button Create
</template>

<script>
export default {
  data(){
    return{ post:{} }
  },
  methods: {
    addPost(){
      let uri = 'http://localhost:4000/products/add'
      this.axios.post(uri, this.post).then(()=>{
        this.$router.push({name: 'products'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
