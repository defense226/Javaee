<template>
<div>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>数据管理</el-breadcrumb-item>
    <el-breadcrumb-item>动作列表</el-breadcrumb-item>
  </el-breadcrumb>
  <el-card >
    <div>

      <el-row :gutter="25">
        <el-col :span="9">
          <el-input placeholder="请输入内容" v-model="queryInfo.query">
          <el-button slot="append" icon="el-icon-search" @click="getactList"></el-button>
        </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="userlist" border stripe>
        <el-table-column  type="index"></el-table-column>
        <el-table-column  label="姓名" prop="username"></el-table-column>
        <el-table-column  label="详情" prop="city"></el-table-column>
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
        id: '1',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        username: '王小虎',
        city: '上海市普陀区金沙江路 1516 弄'
      }],
      total:0

    }
  },
  created() {
  this.getactList();
  },
  methods:{
    async getactList(){
      const{data:res}= await this.$http.get('users',{params:this.queryInfo})
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