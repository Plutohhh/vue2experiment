<template>
  <div id="app">
    <el-menu
      :default-active="activeTab"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/topo">Topo</el-menu-item>
      <el-menu-item index="/father">Father</el-menu-item>
    </el-menu>
    <!-- <el-button @click="testbtn">123</el-button> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/topo">topo</router-link>|
      <router-link to="/father">father</router-link>
    </nav> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: ''
    }
  },
  computed: {},
  watch: {
    $route: {
      handler(to, from) {
        this.activeTab = to.path
      },
      immediate: true // 第一次初始化渲染就可以监听到
    }
  },
  created() {},
  methods: {
    handleSelect(key) {
      this.$router.push(
        key,
        () => {},
        () => {}
      )
    }
    // testbtn() {
    //   // console.log(this.$route)
    //   this.$router.push(
    //     { name: 'about' },
    //     () => {},
    //     () => {}
    //   )
    // }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-menu-demo {
}
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
