<template lang='pug'>
  div
    h3 產品管理
    div
      router-link.my-btn(:to="{ name: 'create' }") 新增產品
    div
      router-view 
      table.my-table
        thead
          tr
            th 品名
            th 下載檔案位置
            th 修改
            th 刪除
        tbody
          tr(v-for="product in products", :key="product._id")
            td {{product.title}}
            td {{product.body}}
            td #[router-link.my-btn(:to="{ name: 'edit', params: { id: product._id } }") edit]
            td #[button.my-btn.danger(@click.prevent='deleteProduct(product._id)') Delete]
</template>

<script>
export default {
  data(){
    return { products: [] }
  },
  created(){
    let uri = 'http://localhost:4000/products'
    this.axios.get(uri).then(response => {
      this.products = response.data
    })
  },
  methods:{
    deleteProduct(id){
      let uri = `http://localhost:4000/products/delete/${id}`
      this.axios.delete(uri).then(response => {
        this.products.splice(this.products.findIndex( i => i._id ===id), 1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
