<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="年份">
      <el-date-picker
          v-model="formInline.year"
          type="year"
          placeholder="选择年">
      </el-date-picker>
      <el-form-item label="比赛类型">
        <el-select v-model="formInline.kind" placeholder="比赛类型">
          <el-option label="World Trampoline Championships" value="World Trampoline Championships"></el-option>
          <el-option label="Olympics" value="Olympics"></el-option>
          <el-option label="Trampoline World Cup" value="Trampoline World Cup"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛项目">
        <el-select v-model="formInline.item" placeholder="比赛项目">
          <el-option label="Women's Net Double Sync" value="Women's Net Double Sync"></el-option>
          <el-option label="Women's Net Individual" value="Women's Net Individual"></el-option>
          <el-option label="Women's Net Team" value="Women's Net Team"></el-option>
          <el-option label="Women's Individual" value="Women's Individual"></el-option>
          <el-option label="Women's Team" value="Women's Team"></el-option>
          <el-option label="Men's Net Double Sync" value="Men's Net Double Sync"></el-option>
          <el-option label="Men's Net Individual" value="Men's Net Individual"></el-option>
          <el-option label="Men's Net Team" value="Men's Net Team"></el-option>
          <el-option label="Men's Individual" value="Men's Individual"></el-option>
          <el-option label="Men's Team" value="Men's Team"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      </el-form-item>
    </el-form>
    <el-form :inline="true" :model="formInline2" class="demo-form-inline">
      <el-form-item label="运动员">
        <el-input v-model="formInline2.name" placeholder="请输入运动员"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit2">查询</el-button>
      </el-form-item>
    </el-form>
<!--        <el-input placeholder="请输入内容" v-model="queryInfo.query">-->
<!--          <el-button slot="append" icon="el-icon-search" @click="getathList"></el-button>-->
<!--        </el-input>-->
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
    return{
      imgs:[
        {url:require('../assets/1.jpg'),link:'https://www.bilibili.com/video/BV1mt411H7z9?spm_id_from=333.337.search-card.all.click'},
        // {url:require('../assets/2.jpg'),link:'https://www.bilibili.com/video/BV1XT4y1Z76R?spm_id_from=333.337.search-card.all.click'}
      ],
      formInline: {
        year: '',
        kind: '',
        item:''
      },
      formInline2:{
        name:''
      }
    }
  },


  methods: {
    /*eslint-disable*/
    linkTo(){
      let activeIndex = this.$refs.carousel.activeIndex
      let videoLink=this.imgs[activeIndex].link
      this.$router.push({
        name: `player`,　　　　　// 只是把query改了，其他都没变
        query: {
          videoUrl:videoLink
        }
      })
    },
    onSubmit() {
      console.log('submit!');
      axios
          .post("http://localhost:8085/video/play", {
            year: this.formInline.year,
            kind: this.formInline.kind,
            item: this.formInline.item
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            for(var key in res.data){
              this.imgs.push({'url':require('../assets/'+key),'link':res.data[key]});
            }
            console.log(this.imgs);
          });
    },
    onSubmit2() {
      console.log('submit!');
      console.log(this.formInline2.name);
      axios
          .post("http://localhost:8085/video/play", {
           name:this.formInline2.name
          })
          .then(res => {
            console.log(res);
             for(var key in res.data){
              this.imgs.push({'url':require('../assets/'+key),'link':res.data[key]});
            }
            console.log(this.imgs);
          });
    }
  }
}
</script>
<style scoped>


</style>

