<template>
  <div>
    <el-header>
      <span>蹦床运动管理系统</span>
      <el-row>
        <el-col :span="24">
          <router-link to="/main" class="bg-purple-light">
            <b>首页</b>
          </router-link>>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <!--视频组件-->
      <video
          class =""
          :preload="preload"
          :height="height" :width="width" align="center"
          :controls="controls"  :autoplay="autoplay">
        <source :src="videoSrc" type="video/mp4">
      </video>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "Player",
  // 定义变量
  data() {
    return {
      mediaUrl: null, // 播放视频的路径
      videoSrc: '',
      playStatus: '',
      muteStatus: '',
      isMute: true,
      isPlay: false,
      width: '820', // 设置视频播放器的显示宽度（以像素为单位）
      height: '500', // 设置视频播放器的显示高度（以像素为单位）
      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: ''
    }
  },
  // 方法
  methods: {
    // 获取视频路径方法
    getMedia() {
      this.mediaUrl =require('@/assets'+`${this.$route.query.videoUrl.toString()}`)
      //获取url
      this.videoSrc = this.mediaUrl
    }
  },
  // created
  created() {
    // 进入页面加载获取传过来的视频路径进行播放
    this.getMedia();
  },
}
</script>

<style scoped>

</style>