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
                    .product-thumbnail(
                      v-for='(item, index) in thumbnails'
                      :key='index')
                      //- :to='/products/:id'
                      router-link(to="/products")
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
      thumbnails: [
        { title: '產品資訊', src: require('@/assets/images/product-top.png'), alt: '產品資訊目錄封面'},
        { title: 'PM變距系列', src: require('@/assets/images/PM變距系列.png'), alt: 'PM變距系列縮圖'},
        { title: 'NC氣缸系列', src: require('@/assets/images/NC氣缸系列.jpg'), alt: 'NC氣缸系列縮圖'},
        { title: '氣缸磁力感測器', src: require('@/assets/images/氣缸磁力感測器.jpg'), alt: '氣缸磁力感測器縮圖'},
        { title: '迷你繼手', src: require('@/assets/images/迷你繼手系列.jpg'), alt: '迷你繼手系列縮圖'},
        { title: '流量/溫度計', src: require('@/assets/images/流量.溫度計.jpg'), alt: '流量.溫度計縮圖'},
      ],
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
@import './assets/variables';


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
    @extend %clearfix;
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
    @include bgGradientColorY; //- mixin with default values
    height: 37px;
    padding-top: 3px;
    border-top: 2px solid rgb(225, 225, 225);
    min-width: 1024px;
    margin-bottom: 2px;

    &-ul{
      margin: 6px 0px 0px 0px;
      &::after{
        display: inline;
        content:'';
        border-right: 1px solid rgb(225, 225, 225);
        font-size: 0.9em;
      }
    }
    li{
      margin-bottom: 0px;
      padding: 8px 8px 6px 8px;
      font-size: 0.9em;
      font-weight: bolder;
      border-left: 1px solid rgb(225, 225, 225);
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
    @extend %clearfix
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

#tab-product-show>span{
  cursor: pointer;
}

//- toggle =========================================
#product-show-{
  &block{
    margin-top: -33px;
    margin-left: -9px;
    padding-top: 41px;
    position: absolute;
    z-index: 999;
    width: 75px;
    cursor: pointer;
  }
}
.product-show-content{
  background-color: rgb(225, 225, 225);
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
    margin: auto;
    display: block;
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
