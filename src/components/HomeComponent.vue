<template lang='pug'>
  div.root
    //- carousel
    .carousel
      slider(
        animation='fade' 
        height='480px' 
        :indicators='false'
        :interval='3500'
        :speed='750')
        slider-item(
          v-for='(item, index) in carouselList' 
          :key='index')
          img(:src= '(item.src)' :alt= '(item.alt)' )
          button
    //- news
    .news-block
      h2 最新消息
      .news-phrase
        div(
          v-for='(item, index) in phraseList'
          :key='index')
          h3 {{item.date}}
          p {{item.column}}
    //- vedio
    .video-block
      h2 Video
      video(width='288px' height='140px' controls autoplay)
        source(src='@/assets/video.mp4' type='video/mp4')
    //- contact
    .contact
      h2 聯絡資訊
      p TEL 04-25355162 <br /> FAX 04-25355163 <br /> 台中市沙鹿區清泉路13之3號1樓 <br /> pitch.server.s5@gmail.com
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },
  data() {
    return {
      carouselList: [
        {src: require('@/assets/images/NC.jpg'), alt: 'NC高精度帶導向汽缸'},
        {src: require('@/assets/images/ST1.jpg'), alt: 'ST1可客制、多元使用'},
      ],
      phraseList: [
        {date: '2018-03-15', column: 'S5-NewUltra超新科技產品將現蹤於3/22~3/26，2018臺南自動化機械暨智慧製造展，歡迎蒞臨參觀。'},
        {date: '2018-03-12', column: 'PM變距產品，規劃出PM30，PM50，PM70及特製系列，相關產品資訊請參閱產品一覽或填寫產品選用書，並與我們聯繫。'},
        {date: '2018-03-01', column: '官方線上客服LINE帳號正式上線，為達即時服務，歡迎您的加入。請掃描首頁右下方QR code。'},
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/variables';
$divPaddingY: 2px;
$rightSideUpperHeigh: 198px;
$rightSideDownHeigh: 350px - $rightSideUpperHeigh - 3*$divPaddingY ;

%rightSideBlock{
  float: right;
  width: 288px;
  padding: $divPaddingY 8px 2*$divPaddingY;
}

.carousel{
  width: 1024px;
  height: 480px;
}

.news-{
  &block{
    background-color: $homeDivColor;
    width: 698px;
    height: 350px;
    float: left;
    margin-top: 4px;
    padding: 4px 8px
  }
  &phrase{
    padding: 4px;
    height: 292px;
    overflow-y: auto;
    p{
      border-bottom: 1px solid #d0d0d0;
      padding-bottom: 14px;
    }
  }
}

h2{
  border-bottom: 2px solid $mainBlue;
  padding-bottom: 8px;
  margin: 8px auto;
  font-size: 22px;
}
h3{
  font-size: 16px;
  margin: 4px auto;
}

.video-block{
  margin-top: 4px;
  background-color: $homeDivColor;
  height: $rightSideUpperHeigh;
  @extend %rightSideBlock;
}

.contact{
  margin-top: 2px;
  background-color: $homeDivColor;
  height: $rightSideDownHeigh;
  @extend %rightSideBlock;
  p{
    line-height: 20px;
    margin-top: 4px;
  }
}

.root::after{
  @extend %clearfix
}
</style>