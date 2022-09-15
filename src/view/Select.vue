<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="运动员">
        <el-select v-model="formInline.ath" placeholder="运动员">
          <el-option label="a" value="a"></el-option>
          <el-option label="b" value="b"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="包含动作">
        <el-select v-model="formInline.act" placeholder="包含动作">
          <el-option label="一周" value="one-turn"></el-option>
          <el-option label="两周" value="two-turn"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-carousel :interval="3500" height="500px" ref="carousel" @click.native="linkTo">
      <el-carousel-item v-for="item in imgs" :key="item.url" >
        <img :src="item.url"  style="width:100%;height:100%" />
      </el-carousel-item>
    </el-carousel>


  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Select",
  data:function(){
    const url="/";//后端地址
    axios
        .get(url)
        .then(res => {
          // console.log("输出response.data", res.data);
          // console.log("输出response.data.status", res.data.status);
          if (res.data.status === 200) {
            this.$router.push({ path: "/" });
          } else {
            alert("请刷新");
          }
        });
    return{
      imgs:[
        {url:require('../assets/1.jpg'),link:'https://www.bilibili.com/video/BV1mt411H7z9?spm_id_from=333.337.search-card.all.click'},
        {url:require('../assets/2.jpg'),link:'https://www.bilibili.com/video/BV1XT4y1Z76R?spm_id_from=333.337.search-card.all.click'}
      ],
      formInline: {
        ath: '',
        act: ''
      }
    }
  },
  methods: {
    linkTo () {
      let activeIndex = this.$refs.carousel.activeIndex
      window.open(this.imgs[activeIndex].link,"_blank")
    },
    onSubmit() {
      console.log('submit!');
      console.log(this.formInline.ath);
      console.log(this.formInline.act);
      axios
          .post("http://localhost:8085", {
            ath: this.formInline.ath,
            act: this.formInline.act
          })
          .then(res => {
            console.log(res);
          });
    }
  }
}
</script>
<style scoped>


</style>

