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
            <el-button type="primary" @click="Visible=true">添加运动员</el-button>
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
        title="添加运动员"
        :visible.sync="Visible"
        width="50%" @close="Close1">

      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
        <el-form-item label="运动员" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="国籍" prop="country">
          <el-input v-model="addForm.country"></el-input>
        </el-form-item>
      </el-form>


      <span slot="footer" class="dialog-footer">
    <el-button @click="Visible = false">取 消</el-button>
    <el-button type="primary" @click="addAth">确 定</el-button>
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
      Visible:false,
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
      total:0,
      addForm:{
        name:'',
        country:''
      },
      addFormRules:{
        name:[
          {required:true,message:'请输入运动员名',trigger:'blur'},
          {min:3,max:20,message: '运动员名在3~20字符之间',trigger: 'blur'
          }
            ],
        country:[
          {required:true,message:'请输入运动员国籍',trigger:'blur'},
          {min:2,max:20,message: '国籍在2~20字符之间',trigger: 'blur'
          }
        ]
      }
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
    },
    Close1(){
      this.$refs.addFormRef.resetFields()
    },
    addAth(){
      this.$refs.addFormRef.validate(async valid=>{
        //预验证
        if(!valid)return error("error");
        const{data:res}=await this.$http.post("http://localhost:8085",this.addForm)
        if(res.meta.status!==201){ this.$message.error('添加运动员失败')}
        this.$message.error('添加运动员成功')
        //隐藏对话框
        this.Visible=false
        //重新获取数据
        this.getathList()
      })

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