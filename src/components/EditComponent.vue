<template lang='pug'>
  div
    h1 Edit
    form(@submit.prevent='updateProduct')
      div
        label Product Title:
        input(type='text' v-model='product.title')
      div
        label Product Body:
        textarea(v-model='product.body')
      div
        button.my-btn Update
</template>

<script>
export default {
  data(){
    return{ product:{} }
  },
  created(){
    let uri = `http://localhost:4000/products/edit/${this.$route.params.id}`
    this.axios.get(uri).then( response =>{
      this.product = response.data
    })
  },
  methods: {
    updateProduct(){
      let uri = `http://localhost:4000/products/update/${this.$route.params.id}`
      this.axios.post(uri, this.product).then(()=>{
        this.$router.push({name: 'products'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
