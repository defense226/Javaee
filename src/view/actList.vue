<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>数据管理</el-breadcrumb-item>
    <el-breadcrumb-item>比赛信息</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card>
    <div>
      <el-row :gutter="25">
        <el-col :span="9">
          <el-input placeholder="请输入内容" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getactList"></el-button>
        </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加信息</el-button>
        </el-col>
      </el-row>
      <el-table :data="userlist" border stripe>
        <el-table-column  type="index"></el-table-column>
        <el-table-column  label="比赛类型" prop="username"></el-table-column>
        <el-table-column  label="项目名称" prop="city"></el-table-column>
      </el-table>
    </div>
  </el-card>

</div>
</template>

<script>
export default {
  name: "userList",
  data(){
    return{
      queryInfo:{
        query:'',
        pagenum:1,
        pagesize:2
      },
      userlist:[{
        username: '世锦赛',
        city: '2021年xxx赛'
      }, {
        username: '世锦赛',
        city: '2020年中国xx赛'
      }, {
        username: '全运会',
        city: '全国男子xx赛'
      }, {
        username: '全运会',
        city: '全国女子团体xx赛'
      }],
      total:0

    }
  },
  created() {
  this.getactList();
  },
  methods:{
    async getactList(){
      const{data:res}= await this.$http.get("http://localhost:8085",{params:this.queryInfo})
      if(res.meta.status!==200){return this.$message.error('获取列表失败')}
      this.userlist=res.data.userlist;
      this.total=res.data.total;
      console.log(res);
    }
  }
}

</script>

<style scoped>
.el-breadcrumb{
  margin-bottom: 15px;
  font-size: 12px;
}
.el-table{
  margin-top:15px

}
</style>