<template lang='pug'>
  div
    h2 管理總表
    ul
      li #[router-link(to='/index/editnews') 消息管理]
      li 影片管理(youtube)
      li #[router-link(to='/index/editproducts') 產品管理]
    div
      router-view 
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang='scss'>
  li{
    padding-right: 32px;
  }

  .my-btn{
    border: 1px solid $darkGray;
    border-radius: 4px;
    cursor: pointer;
    background-color: $lightGray;
    padding: 4px;
    margin: 2px 0;
    box-shadow: 1px 1px 4px $darkGray;
    display: inline-block;
    &:hover{
      transition: 200ms;
      background-color: $darkGray;
      color: #fff;
      font-weight: 600;
    }
  }
  .danger{
    background-color: $lightRed;
    border-color: $darkRed;
    &:hover{
      background-color: $darkRed;
    }
  }
  table{
    text-align: left;
    margin-top: 12px;
  }
  th{
    padding-right: 32px;
    min-width: fit-content;
  }
</style>
