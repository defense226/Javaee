<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>运动员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>

        <el-row :gutter="25">
          <el-col :span="9">
            <el-input placeholder="请输入内容" v-model="queryInfo.query">
              <el-button slot="append" icon="el-icon-search" @click="getathList"></el-button>
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addDialogVisible=true">添加运动员</el-button>
          </el-col>
        </el-row>
        <el-table :data="athlist" border stripe>
          <el-table-column  type="index"></el-table-column>
          <el-table-column  label="姓名" prop="name"></el-table-column>
          <el-table-column  label="国籍" prop="country"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog
        title="提示"
        :visible.sync="addDialogVisible"
        width="50%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  name: "Athlist"
}
</script>
<script>
export default {
  data(){
    return {
      queryInfo:{
        query:'',
        pagenum:1,
        pagesize:2
      },
      addDialogVisible:false,
      athlist:[{
        name: '王小虎1',
        country: '中国'
      }, {
        name: '王小虎2',
        country: '美国'
      }, {
        name: '王小虎3',
        country: '英国'
      }, {
        name: '王小虎4',
        country: '法国'
      }],
      total:0

    }
  },created() {
    this.getathList();
  },
  methods:{
    async getathList(){
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