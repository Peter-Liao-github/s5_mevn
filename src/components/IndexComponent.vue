<template lang='pug'>
  div
    h2 管理總表
    ul
      li.my-btn #[router-link(to='/index/editnews') 消息管理]
      li.my-btn #[router-link(to='/index/editproducts') 產品管理]
      li.my-btn 影片管理(連結至youtube)
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
    &.my-btn{
      margin-right: 8px;
      display: inline-block;
    }
  }

  .my-btn{
    border: 1px solid $darkGray;
    border-radius: 4px;
    cursor: pointer;
    background-color: $lightGray;
    padding: 4px;
    margin: 2px 0px;
    box-shadow: 1px 1px 4px $darkGray;
    display: inline-block;
    &:hover{
      transition: $btnTransitionTime;
      background-color: $darkGray;
      font-weight: 600;
    }
  }
  .danger{
    background-color: $lightRed;
    border-color: $darkRed;
    &:hover{
      background-color: $darkRed;
      color: #fff;
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
