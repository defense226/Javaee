<template>
  <div>
    <el-image v-for="item in imgs" :key="item.url"  @click.native="linkTo">
      <img :src="item.url"/>
    </el-image>
  </div>



</template>





<script>
export default {
  methods: {
    linkTo () {

      window.open(this.imgs.link,"_blank")
    }
  },
  data:function(){
    return{
      imgs:[
        {url:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',link:'https://space.bilibili.com/231824541'},
        {url:'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',link:'https://blog.csdn.net/weixin_43719616?spm=1001.2101.3001.5343'}
      ]
    }
  }
}
</script>





<style scoped>
.el-image{
  width: 150px;
  height: 150px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>