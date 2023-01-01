<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>防控填报</el-breadcrumb-item>
      <el-breadcrumb-item>每日填报</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="学工号" prop="number">
        <el-input v-model="ruleForm.number"></el-input>
      </el-form-item>
      <el-form-item label="填报时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="是否在校" prop="isschool">
        <el-switch v-model="ruleForm.isschool"></el-switch>
      </el-form-item>
      <el-form-item label="今日体温" prop="temperature">
        <el-radio-group v-model="ruleForm.temperature">
          <el-radio label="35℃以下"></el-radio>
          <el-radio label="35-36.5℃"></el-radio>
          <el-radio label="36.6-37.3℃"></el-radio>
          <el-radio label="37.4-38.5℃"></el-radio>
          <el-radio label="38.6-39℃"></el-radio>
          <el-radio label="39.1-40℃"></el-radio>
          <el-radio label="40.1℃以上"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="所在地点" prop="place">
        <el-radio-group v-model="ruleForm.place">
          <el-radio label="中国大陆"></el-radio>
          <el-radio label="港澳台或国外"></el-radio>
        </el-radio-group>
      </el-form-item>
        <el-form-item label="今日是否出现发热、咽痛、干咳、乏力等新冠症状" prop="isfever">
          <el-switch v-model="ruleForm.isfever"></el-switch>
        </el-form-item>

      <el-form-item label="其他信息" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交信息</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        place:'',
        temperature:'',
        isschool: false,
        isfever: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入学工号', trigger: 'blur' },
          { min: 10, max: 10, message: '长度在10个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        isschool: [
          { required: true,trigger: 'change',message: '请选择是否在校' }
        ],
        temperature: [
          { required: true,message: '请正确选择体温' }
        ],
        place: [
          { required: true,message: '请正确选择地点' }
        ],
        isfever: [
          { required: true }
        ],
        desc: [
          { required: true, message: '请填写其他信息', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      axios
          .post("http://localhost:8085/video/play", {
            name: this.ruleForm.name,
            date1: this.ruleForm.date1,
            place: this.ruleForm.place,
            temperature: this.ruleForm.temperature,
            isschool: this.ruleForm.isschool,
            isfever: this.ruleForm.isfever,
            desc: this.ruleForm.desc,
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            // for(var key in res.data){
            //  this.imgs.push({'url':require('../assets/'+key),'link':res.data[key]});
            // }
            console.log(this.ruleForm);
          });

          this.$message.success('添加运动员成功')
        }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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