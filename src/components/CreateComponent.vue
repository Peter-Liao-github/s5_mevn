<template lang='pug'>
  div
    h1 新增產品
    form(@submit.prevent='addProduct')
      div
        label 產品名稱：
        input(type='text' v-model='product.title')
      div
        label 產品內容：
        textarea(v-model='product.body')
      button Create
</template>

<script>
export default {
  data(){
    return{ product:{} }
  },
  methods: {
    addProduct(){
      let uri = 'http://localhost:4000/products/add'
      this.axios.post(uri, this.product).then(()=>{
        this.$router.push({name: 'edit-products'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
