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
      <el-menu-item index="/countTime">CountTime</el-menu-item>
      <el-menu-item index="/textarea">TextArea</el-menu-item>
      <el-menu-item index="/readme">Readme</el-menu-item>
      <el-menu-item index="/readme2">Readme2</el-menu-item>
    </el-menu>
    <!-- <el-button @click="testbtn">123</el-button> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/topo">topo</router-link>|
      <router-link to="/father">father</router-link>
    </nav> -->

    <transition name="fade">
      <router-view />
    </transition>
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

<style lang="scss" scoped>
.fade-enter-active {
  animation: bounce-in 1s;
}
// .fade-leave-active {
//   animation: bounce-in 1s reverse;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
//   // transform: translateY(800px);
// }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  // 90% {
  //   transform: scale(0.5);
  // }
  100% {
    transform: scale(1);
  }
}
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
  // background-color: #43bccd;
  // background-image: radial-gradient(#387f88 11%, transparent 0);
  // background-size: 55px 55px;
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
