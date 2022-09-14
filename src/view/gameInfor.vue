<template>
  <el-carousel :interval="3000" width="800px" height="600px" ref="carousel" @click.native="linkTo">
    <el-carousel-item v-for="item in imgs" :key="item.url" >
      <img :src="item.url"  style="width:100%;height:100%" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  methods: {
    linkTo () {
      let activeIndex = this.$refs.carousel.activeIndex
      window.open(this.imgs[activeIndex].link,"_blank")
    }
  },
  data:function(){
    return{
      imgs:[
        {url:require('../assets/1.jpg'),link:'https://www.bilibili.com/video/BV1mt411H7z9?spm_id_from=333.337.search-card.all.click'},
        {url:require('../assets/2.jpg'),link:'https://www.bilibili.com/video/BV1XT4y1Z76R?spm_id_from=333.337.search-card.all.click'}
      ]
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
