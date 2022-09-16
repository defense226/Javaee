<head>

</head>
<template>
  <div>
    <el-container>
      <el-header>

        <span>蹦床动作质量评估系统</span>

        <el-button @click="drawer = true" type="primary" round
                   icon="el-icon-s-custom" style="margin-left: 16px;">
        </el-button>

        <el-drawer class="admin_title"
                   title="用户信息"
                   :visible.sync="drawer"

        >
          <ul>
            <li>
              <span>账号：</span>
              <!--                 <span>{{adminInfo.id}}</span>-->
            </li>
            <li>
              <span>更换头像：</span>
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                 >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </li>
          </ul>
        </el-drawer>


      </el-header>
<div class="menu-box">
      <el-container>
        <el-aside width="200px">
          <el-menu  router background-color="#324057" active-text-color="#ffee2b" text-color="#fff"
                  :unique-opened="true" >
            <div class="emotion-box" @click="jump">
              <i id="emotion1" class="iconfont icon-wukongbiaoqing"></i>
              <i id="emotion2" class="iconfont icon-chenggongbiaoqing"></i>
            </div>
            <el-menu-item index="welcome">
              <i class="el-icon-menu"></i>首页</el-menu-item>
            <el-submenu index="2" active-text-color="#ffee2b">
              <template slot="title">
                <i class="el-icon-document"></i>数据管理</template>
              <el-menu-item index="AthList">运动员列表</el-menu-item>
              <el-menu-item index="actList">比赛信息</el-menu-item>
              <el-menu-item index="gameInfor">无</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-plus"></i><span>添加数据</span></template>
              <el-menu-item index="Addath"><span>添加运动员</span></el-menu-item>
              <el-menu-item index="Addact"><span>添加比赛信息</span></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-star-on"></i>视频展示</template>
              <el-menu-item index="Select">筛选</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-warning"></i>说明</template>
              <el-menu-item index="explain">说明</el-menu-item>
            </el-submenu>

          </el-menu>

        </el-aside>

        <el-main>
          <router-view>

          </router-view>
        </el-main>

      </el-container>
  </div>
    </el-container>
  </div>

</template>

<script>
export default {
  name: "Main",
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
  },
  data() {
    return {
      isCollapse: false,
      imageUrl: '',
      drawer: false,
    };
  },
  methods:{
    created() {
    },
    jump(){
     // animation: jitter .3s linear forwards;
    }
  }

}

</script>

<style lang="less">


.el-main{

}
.el-header {
  background-color: #7ba2b7;
  color: #333;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  >div{
    display: flex;//嵌套
    align-items: center;
  }
}
.el-aside {
  background-color:#324057;
  color: #F5F5F5;
  active-text-color:#ffee2b;
  .el-menu{
    border-right: none;
  }
  width: 180px;
  height: 700px;
  //border-radius: 30px;

}
.admin_title{
  margin-top: 10px;
  text-align: center;
}
.iconfont{
  margin-right:10px;
  font-size: 25px !important;
  color: #fff;
  line-height: 50px;
  text-align: center;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-aside:hover {
  width: 200px;
  //border-radius: 100px;
}


/* 抖动动画 */
@keyframes jitter {
  0% {
    /* 缩放1.2倍，顺时针旋转10° */
    transform: scale(1.3) rotate(10deg);
  }

  50% {
    transform: scale(0.7) rotate(-10deg);
  }

  100% {
    transform: scale(1.0) rotate(0deg);
  }
}
.el-menu-item:hover i{
  animation: jitter .3s linear forwards;
  color: #fff;
}
.el-submenu:hover i{
  animation: jitter .3s linear forwards;
  color: #fff;
}
.el-menu i{
  size:50px;
}
.emotion-box {
  width: 100%;
  text-align: center;
  margin: 10px auto;

}
.emotion-box:active{
  animation: jitter .3s linear forwards;
}
#emotion1,
#emotion2 {
  color: #faf7f7;
  font-size: 27px !important;
  animation: jitter .3s linear forwards;
}

#emotion2 {
  display: none;
}

.el-menu:hover #emotion1 {
  display: none;
}

.el-menu:hover #emotion2 {
  display: block;
}


</style>