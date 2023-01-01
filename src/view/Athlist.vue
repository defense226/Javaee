<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据管理</el-breadcrumb-item>
      <el-breadcrumb-item>每日填报数据</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div>

        <el-row :gutter="25">
<!--          <el-col :span="9">-->


<!--              <el-button  icon="el-icon-refresh-right" @click="getathList"></el-button>-->



<!--            <el-form :inline="true" :model="formInline2" class="demo-form-inline">-->
<!--              <el-autocomplete-->
<!--                  class="inline-input"-->
<!--                  v-model="state1"-->
<!--                  :fetch-suggestions="querySearch"-->
<!--                  value-key="value"-->
<!--                  placeholder="请输入内容"-->
<!--                  >-->
<!--              </el-autocomplete>-->
<!--              <el-form-item>-->
<!--                <el-button icon="el-icon-search" @click="Sort"></el-button>-->
<!--              </el-form-item>-->
<!--            </el-form>-->

<!--          </el-col>-->
<!--          <el-col :span="4">-->
<!--            <el-button type="primary" @click="Visible=true">添加运动员</el-button>-->
<!--          </el-col>-->
        </el-row>
        <el-table :data="athlist" border stripe>
          <el-table-column  type="index"></el-table-column>
          <el-table-column  label="姓名" prop="name"></el-table-column>
          <el-table-column  label="学工号" prop="number"></el-table-column>
          <el-table-column  label="填报时间" prop="date1"></el-table-column>
          <el-table-column  label="是否在校" prop="isschool"></el-table-column>
          <el-table-column  label="体温" prop="temperature"></el-table-column>
          <el-table-column  label="所在地点" prop="place"></el-table-column>
          <el-table-column  label="是否有新冠症状" prop="isfever"></el-table-column>
          <el-table-column  label="其他信息" prop="desc"></el-table-column>
        </el-table>
      </div>
    </el-card>
<!--    <el-dialog-->
<!--        title="添加运动员"-->
<!--        :visible.sync="Visible"-->
<!--        width="50%" @close="Close1">-->

<!--      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >-->

<!--        <el-form-item label="运动员" prop="name">-->
<!--          <el-input v-model="addForm.name"></el-input>-->

<!--&lt;!&ndash;        <el-form-item label="姓" prop="lname">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-input v-model="addForm.lname"></el-input>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-form-item>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-form-item label="名" prop="fname">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-input v-model="addForm.lname"></el-input>&ndash;&gt;-->

<!--        </el-form-item>-->
<!--        <el-form-item label="国籍" prop="country">-->
<!--          <el-input v-model="addForm.country"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="生日">-->
<!--          <el-col :span="11">-->
<!--            <el-date-picker type="date" placeholder="选择日期" v-model="addForm.DOB" style="width: 100%;"></el-date-picker>-->
<!--          </el-col>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="性别" prop="sex">-->
<!--          <el-input v-model="addForm.sex"></el-input>-->
<!--        </el-form-item>-->
<!--      </el-form>-->


<!--      <span slot="footer" class="dialog-footer">-->
<!--    <el-button @click="Visible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="addAth">确 定</el-button>-->
<!--  </span>-->
<!--    </el-dialog>-->

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

        const{data:res}=await this.$http.post("http://localhost:8085/athlete/athlist",this.addForm)
        for(var key in res){
          this.athlist.push({'name':key,'country':res[key]});
        }

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