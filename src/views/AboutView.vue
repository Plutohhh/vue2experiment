<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    <!-- <h1>{{ input || 0 }}</h1> -->
    <h1>computed——{{ reverseInput || 0 }}</h1>
    <h1>watch——{{ now || 0 }}</h1>

    <el-input
      v-for="item in 10"
      :key="item"
      v-model="input"
      placeholder="请输入内容"
      clearable
    ></el-input>
    <h1>params: {{ $route.params }}</h1>
    <h1>query: {{ $route.query }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      input: undefined,
      now: undefined
    }
  },
  computed: {
    reverseInput: function () {
      return this.input && this.input.split('').reverse().join(' ')
    }
  },
  watch: {
    input: function (val) {
      this.now = val + '!!!!'
    }
  },
  created() {},
  methods: {}
}
</script>

<style>
.el-input {
  width: 230px;
}
</style>
