<template>
  <div class="readme-container">
    <div class="title">
      <h1 style="margin-left: 20px">开发日志：</h1>
    </div>
    <div class="box-card">
      <el-card>
        <div slot="header" class="clearfix">
          <h3>2023年10月8日——周日</h3>
        </div>
        <p>1、完成了开发日志组件开发（知识点：flex-wrap、flex-basis）</p>
        <p>2、完成了全局样式：main引入style.scss</p>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Readme',
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.readme-container {
  text-align: left;
  margin: 20px 40px;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .title {
    flex-basis: 100%;
    margin: 0 0 20px 30px;
  }
  .box-card {
    color: #2c3e50;
    flex-basis: 30%;
    min-width: 350px;
    display: inline-block;
    // margin: 20px 30px 0 0;
    margin-bottom: 20px;
    height: auto;
    border: red 1px solid;
  }
  // .box-card {
  //   width: 300px;
  //   height: 300px;

  //   // display: inline-block;
  // }
}
</style>
