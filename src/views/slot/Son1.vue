<template>
  <div class="container-son">
    <slot name="slot1">test1</slot>
    <slot>test2</slot>
    <slot name="slot2">test3</slot>
    <div class="test">
      <h1>width=800</h1>
    </div>
  </div>
</template>

<script>
export default {
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
.container-son {
  height: 100%;
  // border: red 1px solid;
  // background: red;
  // border: red 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .test {
    width: 800px;
    // background: white;
  }
  ::selection {
    // color: red;
    background: #f9c80e;
  }
  // ::-moz-selection {
  //   color: #ff0000;
  // }
}
.container-son > * {
  background-color: #43bccd;
}
</style>
