<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加数据</el-breadcrumb-item>
      <el-breadcrumb-item>添加运动员</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>添加运动员</h2>
  </div>
</template>

<script>
export default {
  name: "Addath"
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