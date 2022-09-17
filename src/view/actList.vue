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
          <el-button type="primary" @click="Visible=true">添加信息</el-button>
        </el-col>
      </el-row>
      <el-table :data="actlist" border stripe>
        <el-table-column  type="index"></el-table-column>

        <el-table-column  label="比赛类型" prop="kind"></el-table-column>
        <el-table-column  label="项目名称" prop="name"></el-table-column>
      </el-table>
    </div>
  </el-card>
  <el-dialog
      title="添加运动信息"
      :visible.sync="Visible"
      width="50%" @close="Close1">

    <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
      <el-form-item label="比赛类型" prop="kind">
        <el-input v-model="addForm.kind"></el-input>
      </el-form-item>
      <el-form-item label="项目名称" prop="name">
        <el-input v-model="addForm.name"></el-input>
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
  name: "userList",
  data(){
    return{
      addForm:{
        kind:'',
        name:'',
      },Visible:false,
      addFormRules:{
        kind:[
          {required:true,message:'请输入比赛类型',trigger:'blur'},
          {min:3,max:20,message: '类型名在3~20字符之间',trigger: 'blur'
          }
        ],
        name:[
          {required:true,message:'请输入比赛名称',trigger:'blur'},
          {min:3,max:20,message: '比赛名在3~20字符之间',trigger: 'blur'
          }
        ],
      },
      queryInfo:{
        query:'',
        pagenum:1,
        pagesize:2
      },
      userlist:[],

      actlist:[{
        kind: '世锦赛',
        name: '2021年xxx赛'
      }, {
        kind: '世锦赛',
        name: '2020年中国xx赛'
      }, {
        kind: '全运会',
        name: '全国男子xx赛'
      }, {
        kind: '全运会',
        name: '全国女子团体xx赛'
      }],

    }
  },
  created() {
  this.getactList();
  },
  methods:{
    async getactList(){

      const{data:res}= await this.$http.post("http://localhost:8085/game/gamelist",{params:this.queryInfo})
      this.userlist=eval('('+res+')');
      console.log(res);




    },Close1(){
  this.$refs.addFormRef.resetFields()
},
addAth(){
  this.$refs.addFormRef.validate(async valid=>{
    //预验证
    // eslint-disable-next-line
    if(!valid)return error("error");
    const{data:res}=await this.$http.post("http://localhost:8085/athlete/athlist",this.addForm)
    for(var key in res){
      this.actlist.push({'kind':key,'name':res[key]});
    }

    this.$message.success('添加信息成功')
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