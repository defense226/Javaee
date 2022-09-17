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
<<<<<<< Updated upstream
            <el-input placeholder="请输入内容" v-model="queryInfo.query">
              <el-button slot="append" icon="el-icon-search" @click="getathList"></el-button>
            </el-input>
=======

              <el-button  icon="el-icon-refresh-right" @click="getathList"></el-button>



            <el-form :inline="true" :model="formInline2" class="demo-form-inline">
              <el-autocomplete
                  class="inline-input"
                  v-model="state1"
                  :fetch-suggestions="querySearch"
                  value-key="value"
                  placeholder="请输入内容"
                  >
              </el-autocomplete>
              <el-form-item>
                <el-button icon="el-icon-search" @click="Sort"></el-button>
              </el-form-item>
            </el-form>

>>>>>>> Stashed changes
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="Visible=true">添加运动员</el-button>
          </el-col>
        </el-row>
        <el-table :data="athlist" border stripe>
          <el-table-column  type="index"></el-table-column>
          <el-table-column  label="姓名" prop="name"></el-table-column>
          <el-table-column  label="国籍" prop="country"></el-table-column>
          <el-table-column  label="生日" prop="DOB"></el-table-column>
          <el-table-column  label="性别" prop="sex"></el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog
        title="添加运动员"
        :visible.sync="Visible"
        width="50%" @close="Close1">

      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
<<<<<<< Updated upstream
        <el-form-item label="运动员" prop="name">
          <el-input v-model="addForm.name"></el-input>
=======
        <el-form-item label="姓" prop="lname">
          <el-input v-model="addForm.lname"></el-input>
        </el-form-item>
        <el-form-item label="名" prop="fname">
          <el-input v-model="addForm.lname"></el-input>
>>>>>>> Stashed changes
        </el-form-item>
        <el-form-item label="国籍" prop="country">
          <el-input v-model="addForm.country"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.DOB" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="addForm.sex"></el-input>
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
      athlist:[],
      total:'',
      addForm:{
        name:'',
        country:'',
        DOB:'',
        sex:''
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
        ],
        sex:[
          {required:true,message:'请输入运动员性别',trigger:'blur'},
          {min:1,max:1,message: '请输入正确类型',trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.getathList();
  },
  methods:{
    async getathList(){
      const{data:res}= await this.$http.post("http://localhost:8085/athlete/athlist",{})
      this.athlist=eval('('+res+')');

      console.log(this.athlist);

    },
    Close1(){
      this.$refs.addFormRef.resetFields()
    },
    addAth(){
      this.$refs.addFormRef.validate(async valid=>{
        //预验证
        if(!valid)return error("error");
<<<<<<< Updated upstream
        const{data:res}=await this.$http.post("http://localhost:8085/athlete/addAth",this.addForm)       
=======
        const{data:res}=await this.$http.post("http://localhost:8085/athlete/athlist",this.addForm)
        for(var key in res){
          this.athlist.push({'name':key,'country':res[key]});
        }

>>>>>>> Stashed changes
        console.log(this.athlist);
        this.$message.success('添加运动员成功')
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