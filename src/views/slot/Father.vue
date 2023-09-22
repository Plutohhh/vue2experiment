<template>
  <div class="container-father">
    <Son>
      <h3>no1</h3>
      <h3>no2</h3>
      <h3>no3</h3>
      <template #slot1>
        <h1>Here might be a slot1</h1>
      </template>
      <template #slot2>
        <h1>Here might be a slot2</h1>
      </template>
    </Son>
    <div class="longdiv"></div>
  </div>
</template>

<script>
import Son from './Son1.vue'

export default {
  components: { Son },
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
* {
  // height: 100%;
  // border: red 1px solid;
}
.container-father {
  position: absolute;
  // height: 100%;
  // height: 50vh;
  // flex: 1;
  // border: red 1px solid;
  // background-color: #43bccd;

  background-color: #43bccd;
  background-image: radial-gradient(#215e66 10%, transparent 0);
  background-size: 35px 35px;
  // overflow: hidden;
  // --tw-bg-opacity: 1;
  // background-color: rgb(67 188 205 / var(--tw-bg-opacity));
  .longdiv {
    // background-color: #1f0ffc;
    border: red 1px solid;
    height: 1800px;
    width: 100px;
  }
}
</style>
