/* eslint-disable */
<template>
  <div>
    <h2>information of user</h2>
    <h1><b>{{id}}</b></h1>
  </div>
</template>

<script>
  export default {
  props: ['id'],
  name: "Profile",
  beforeRouteEnter: (to, from, next)=>{
  console.log("进入路由之前");
  //加载数据
  next(vm => {
  vm.getData();
})
},
  beforeRouteLeave: (to, from, next) => {
  console.log("进入路由之后");
  next();
},
  methods: {
  getData: function () {
  this.axios({
  method: "get",
  url: "http://localhost:8081/static/data.json"
}).then(function (response) {
  console.log(response)
})
}
}
}
</script>

<style scoped>

</style>