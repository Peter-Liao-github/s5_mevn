<template lang='pug'>
  #app
    //- logo =========================================
    .my-container.my-header
      h1.logo #[span S5 New Ultra]
        router-link(to="/")
          .top-logo
            img.img-responsive.center-block(alt="S5 New Ultra logo" src="@/assets/images/logo-horizontal.png")
          //- .clearfix
    //- tabs =========================================
    .my-tabs
      .my-container
        ul.my-tabs-ul
          li(@click="productsShowing = false")
            router-link(to="/") 首頁
          //- toggle =========================================
          li#tab-product-show(@click="productsShowing = !productsShowing") #[span 產品一覽]
            template(v-if="productsShowing")
              #product-show-block
                .product-show-content
                  a(href="#")
                    .product-thumbnail(
                      v-for='(item, index) in thumbnails'
                      :key='index')
                      h3 {{item.title}}
                      .thumb-bgc
                        img(:alt='(item.alt)' :src='(item.src)')
          li(@click="productsShowing = false")
            router-link(to="/products") 產品資訊/下載
          li(@click="productsShowing = false")
            router-link(to="/customizeds") 客製化選用表
          li(@click="productsShowing = false")
            router-link(to="/index") 管理總表
          li(@click="productsShowing = false")
            router-link(to="/create") 管理新增
    //- router view =========================================
    router-view.my-container 
    //- fixed line QR =========================================
    .line-qr 
      h3 客服LINE ID <br>@xyp7024w<br>
      img(alt="Line QR code" src="./assets/images/lineQRcode.jpg")
    //- footer =========================================
    .my-footer
      ul
        li
          router-link(to="/") 首頁
        li
          router-link(to="/products") 產品資訊/下載
        li
          router-link(to="/customizeds") 客製化選用表

</template>

<script>
import HomeComponent from './components/HomeComponent.vue'

export default {
  name: 'app',
  components: {
    HomeComponent
  },
  data() {
    return { 
      productsShowing: false,
      thumbnails: [{ title: '產品資訊', src: require('@/assets/images/product-top.png'), alt: '產品資訊目錄封面'}],
    }
  },
  methods: {
    // for ie
    // showProduct(){
    //   document.getElementById('#product-show-block').toggle()
    // }
  }

}
</script>

<style lang='scss'>
@import url(http://fonts.googleapis.com/earlyaccess/notosanstc.css);
$mainBlue: #1B5185;

#app {
  font-family: 'Noto Sans TC', \5FAE\8EDF\6B63\9ED1\9AD4, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  *{
    // box-sizing: initial;
    // outline: red 1px solid;
  }
  
}
//- logo =========================================
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
  a::after{
    content: '';
    clear: both;
    display: block;
  }
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

//- tabs =========================================
.my-{
  &tabs{
    background: -moz-linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    background: -webkit-linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    background: linear-gradient(rgb(255, 255, 255),rgb(225, 225, 225));
    height: 37px;
    padding-top: 3px;
    border-top: 2px solid rgb(225, 225, 225);
    min-width: 1024px;
    margin-bottom: 2px;

    &-ul{
      margin: 6px 0px 0px 0px;
    }
    li{
      background-color: rgba(245, 245, 245, 0);
      margin-bottom: 0px;
      padding: 8px 8px 6px 8px;
      font-size: 0.9em;
      font-weight: bolder;
      border-left: 1px solid rgb(225, 225, 225);
      border-right: 1px solid rgb(225, 225, 225);
      &:hover{
        border-bottom: 2px solid;
        border-bottom-color: $mainBlue;
      }
    }
  }
}
ul{
  padding-left: 0;
  &::after{
    content: '';
    clear: both;
    display: block;
  }
}
li{
  float: left;
  list-style: none;
}
a,a:hover,a:visited{
    color: inherit;
    text-decoration: none;
}

.clearfix{
  clear: both;
}

#tab-product-show>span{
  cursor: pointer;
}

//- toggle =========================================
#product-show-{
  &block{
    margin-top: -29px;
    margin-left: -9px;
    padding-top: 37px;
    position: absolute;
    z-index: 999;
    width: 79px;
    cursor: pointer;
  }
}
.product-show-content{
  position: relative;
  background-color: rgb(200, 200, 200);
  width: 844px;
  padding: 16px 20px 20px;
}

.product-thumbnail{
  display: inline-block;
  margin: 2px;
  width: 152px;
  height: 233px;
  text-align: center;
  &:hover{
    background-color: rgb(128, 128, 128);
    color: white;
  }
  img { /* 132px * 160px */
    margin: 0 auto;
    padding-bottom: 8px;
    vertical-align: middle;
    max-width: 132px;
    max-height: 156px;
  }
}
.thumb-bgc {
  background-color: #FFF;
  width: 132px;
  height: 164px;
  vertical-align: middle;
  margin: 0 auto;
}

//- fixed line QR =========================================
.line-qr{
  position: fixed;
  bottom: 16px;
  right: 20px;
  z-index: 9;
  color: rgb(55, 145, 0);
  text-align: center;
  transition: position 0.3ms;
  h3{
    margin: 1px;
    font-weight: 500;
    font-size: 16px;
  }
  img{
    width: 104px;
  }
}

//- footer =========================================
.my-footer{
  text-align: center;
  margin: 4px auto;
  ul{
    width: max-content;
    margin: auto;
  }
  li{
    padding: 1px 2px;
  }
}
</style>
