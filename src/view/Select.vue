<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="运动员">
        <el-select v-model="formInline.ath" placeholder="运动员">
          <el-option label="a" value="a"></el-option>
          <el-option label="b" value="b"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="包含动作">
        <el-select v-model="formInline.act" placeholder="包含动作">
          <el-option label="一周" value="one-turn"></el-option>
          <el-option label="两周" value="two-turn"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <div class="center">
      <div v-show="!isError">
        <video
            id="videobox"
            class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
            preload="auto"
            width="100%"
            ref="videoRef"
            autoplay="false"
        >
          <p class="vjs-no-js">不支持播放</p>
        </video>
      </div>
      <div v-show="isError" class="errorTip"><p>视频出错了！</p></div>
    </div>


  </div>
</template>






<script>
import { defineComponent, onMounted, ref } from "vue";
import videojs from "video.js";
export default defineComponent({
  setup() {
    // eslint-disable-next-line
    var isError = ref<boolean>(false);
    // eslint-disable-next-line
    var videoSrc = ref<string>("");
    var videoRef = ref();
    var player = ref();
    console.log(videoSrc.value, "视频");
    onMounted(() => {
      init();
      console.log(player.value);
    });
    const init = () => {
      player.value = videojs(
          videoRef.value,
          {
            //视频源
            sources: [
              {
                src: "https://vjs.zencdn.net/v/oceans.mp4",
                type: "video/mp4",
              },
              {
                src: "https://vjs.zencdn.net/v/oceans.mp4",
                type: "video/webm",
              },
            ],
            //是否显示播放按钮
            bigPlayButton: true,
            playbackRates: [0.5, 1, 1.5, 2],
            controls: true,
            //设置小喇叭音量键
            controlBar: {
              fullscreenToggle: true,
              // 音量条的横向还是纵向显示
              volumePanel: {
                inline: false,
              },
            },
          },
          () => {
            player.value.on("play", () => {
              console.log("开始播放");
            });
            //设置默认2倍速
            player.value.playbackRate(2);
          }
      );
    };
    return { isError, videoRef };
  },
});


</script>



<script>
import axios from "axios";
export default {
  name: "Select",
  data() {
    return {
      formInline: {
        ath: '',
        act: ''
      }
    }
},
  methods: {
    onSubmit() {
      console.log('submit!');
      console.log(this.formInline.ath);
      console.log(this.formInline.act);
      axios
          .post("http://localhost:8080", {
            ath: this.formInline.ath,
            act: this.formInline.act
          })
          .then(res => {
            console.log(res);
          });
    }
  }
}
</script>
<style scoped>
/*base code*/
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
/*the animation definition*/
@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    -ms-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}
.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
</style>

