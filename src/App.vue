<template lang='pug'>
  #app
    //- navbar
    .my-container.my-header
      h1.logo #[span S5 New Ultra]
        router-link(to="/")
          .top-logo
            img.img-responsive.center-block(alt="S5 New Ultra logo" src="./assets/logo-horizontal.png")
    //- tabs
    .my-tabs
      .my-container
        ul.my-tabs-ul
          li
            router-link(to="/") 首頁
          li.tab-product-show #[span 產品一覽]
            .product-show-block
              .product-show-content
          li
            router-link(to="/products") 產品資訊/下載
          li
            router-link(to="/customizeds") 客製化選用表
    
    router-view 
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

<style lang='scss'>
@import url(http://fonts.googleapis.com/earlyaccess/notosanstc.css);
#app {
  font-family: 'Noto Sans TC', \5FAE\8EDF\6B63\9ED1\9AD4, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  *{
    outline: red 1px solid
  }
}

.my-{
  &container{
    width: 1024px;
    margin: 0 auto;
  }
  &header{
    padding: 4px 0px;
    margin: 4px auto;
    height: 38px;
  }
}

.logo{
  margin: 0;
  >span{
    display: none;
  }
}
.top-logo{
  float: left;
  img{
    height: 42px;
  }
}

.my-{
  &tabs{
    background: -moz-linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    background: -webkit-linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    background: linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    height: 33px;
    padding-top: 3px;
    padding-bottom: 2px;
    border-top: 2px solid rgb(225, 225, 225);
    min-width: 1024px;

    &-ul{
      margin: 3px 0px 0px 0px;
      >li{
        background-color: rgba(245, 245, 245, 0);
        margin-bottom: 0px;
        padding: 8px 8px 6px 8px;
        font-size: 0.9em;
        font-weight: bolder;
        border-left: 1px solid rgb(225, 225, 225);
        border-right: 1px solid rgb(225, 225, 225);
        &:hover{
          border-bottom: 2px solid;
          border-bottom-color: #1B5185;
        }
      }
    }

  }
}
ul{
  padding-left: 0;
}
li{
  float: left;
  list-style: none;
}
a,a:hover,a:visited{
  color: inherit;
  text-decoration: none;
}

.tab-product-show>span{
  cursor: pointer;
}
</style>
