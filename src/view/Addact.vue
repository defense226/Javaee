<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加数据</el-breadcrumb-item>
      <el-breadcrumb-item>添加比赛信息</el-breadcrumb-item>
    </el-breadcrumb>
    添加比赛信息
  </div>
</template>

<script>
export default {
  name: "Addact"
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