<template>
  <div class="container">
    <textarea id="input"></textarea>
    <span class="time">
      {{
        `离发工资还有${offworkTime.day}天${offworkTime.hour}小时${offworkTime.min}分${offworkTime.ss}秒${offworkTime.ms}毫秒`
      }}
    </span>
    <el-button @click="copyText">一键复制</el-button>
    <el-switch v-model="startRadio" inactive-color="#ff4949"> </el-switch>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      targeTime: new Date('2023-9-28 18:00:00'),
      offworkTime: {},
      intervalId: undefined,
      startRadio: true
    }
  },
  computed: {},
  watch: {
    startRadio: function () {
      if (this.startInterval) {
        if (!this.startRadio) {
          clearInterval(this.intervalId)
        } else {
          this.startInterval()
        }
      }
    }
  },
  created() {
    this.targeTime = moment(this.targeTime).fromNow()
  },
  mounted() {
    this.startInterval()
    // this.intervalId = setInterval(() => {
    //   this.offworkTime = this.getOffWorkTime('2023/9/28 18:00:00')
    //   // offworkTime.value = getOffWorkTime()
    //   // percent.value = `今日剩餘：${Math.floor(getPercent() * 10000) / 100}%`
    //   // widthPercent.value = `${Math.floor(getPercent() * 10000) / 100}%`
    //   // yearPercent.value = Math.floor(getYearPercent() * 10000000) / 100000
    // }, 1)
  },
  methods: {
    copyText() {
      const text = document.getElementsByClassName('time')[0].innerHTML.trim()
      console.log(JSON.parse(JSON.stringify(text)))
      const input = document.getElementById('input')
      input.value = text // 修改文本框的内容
      input.select() // 选中文本
      document.execCommand('copy') // 执行浏览器复制命令
      this.$message.success('复制成功')
    },
    breakInterval() {
      clearInterval(this.intervalId)
    },
    startInterval() {
      this.intervalId = setInterval(() => {
        this.offworkTime = this.getOffWorkTime('2023/10/10 13:00:00')
        // offworkTime.value = getOffWorkTime()
        // percent.value = `今日剩餘：${Math.floor(getPercent() * 10000) / 100}%`
        // widthPercent.value = `${Math.floor(getPercent() * 10000) / 100}%`
        // yearPercent.value = Math.floor(getYearPercent() * 10000000) / 100000
      }, 1)
    },
    /**
     * 返回距离下班时间数
     */
    getOffWorkTime(template = '2023/9/24 18:00:00') {
      const msLast = this.getMsLast(template)
      const offworkTime = {}
      if (msLast < 0) {
        offworkTime.day = Math.ceil(msLast / 3600 / 1000 / 24)
        offworkTime.hour = Math.ceil((msLast / 3600 / 1000) % 24)
        offworkTime.min = Math.ceil((msLast / 1000 / 60) % 60)
        offworkTime.ss = Math.ceil((msLast / 1000) % 60)
        offworkTime.ms = this.toPatch3(msLast % 1000)
      } else {
        offworkTime.day = Math.floor(msLast / 3600 / 1000 / 24)
        offworkTime.hour = Math.floor((msLast / 3600 / 1000) % 24)
        offworkTime.min = Math.floor((msLast / 1000 / 60) % 60)
        offworkTime.ss = Math.floor((msLast / 1000) % 60)
        offworkTime.ms = this.toPatch3(msLast % 1000)
      }
      return offworkTime
    },

    /**
     * 返回距离template的毫秒数
     * @template {String} 倒计时终点
     */
    getMsLast(template = '2023/9/25 18:00:00') {
      const targeTime = new Date(template)
      const nowTime = new Date()
      // targeTime = new Date(targeTime.setFullYear(nowTime.getFullYear()))
      // targeTime = new Date(targeTime.setMonth(nowTime.getMonth()))
      // targeTime = targeTime.setDate(nowTime.getDate())
      const msLast = targeTime.getTime() - new Date().getTime()

      return msLast
    },

    /**
     * 返回距离18点的毫秒数
     * @template {String} 倒计时终点（默认六点）
     */
    // getMsLast(template = '2000/1/1 18:00:00') {
    //   let targeTime = new Date(template)
    //   const nowTime = new Date()
    //   targeTime = new Date(targeTime.setFullYear(nowTime.getFullYear()))
    //   targeTime = new Date(targeTime.setMonth(nowTime.getMonth()))
    //   targeTime = targeTime.setDate(nowTime.getDate())
    //   const msLast = targeTime - new Date().getTime()
    //   return msLast
    // },

    /**
     * 返回三位数的x（开头补0）
     * @x {Number}
     */
    toPatch3(x) {
      x = x.toString()
      while (x.length < 3) {
        x = '0' + x
      }
      return x
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  // border: red 1px solid;
  // background: red;
  // border: red 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .time {
    position: absolute;
    left: 0;
    bottom: 0;
    // background: white;
  }
  ::selection {
    // color: red;
    background: #f9c80e;
  }
  // ::-moz-selection {
  //   color: #ff0000;
  // }
  #input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -10;
  }
}
.container > * {
  // background-color: #43bccd;
}
</style>
