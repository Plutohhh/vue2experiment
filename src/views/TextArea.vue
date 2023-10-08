<template>
  <div class="textarea-container">
    <div class="left-container">
      <div class="test"></div>
    </div>
    <div class="right-container"></div>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
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
.textarea-container {
  background: green;
  .test {
    height: 1500px;
    border: red 1px solid;
  }
}
</style>
