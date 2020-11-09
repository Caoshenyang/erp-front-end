<template>
  <el-header style="padding:0; height:50px">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  background-color="#2b2f3a" text-color="#fff" active-text-color="#409EFF">
        <el-menu-item class="navbar-menu" index="1"><i class="el-icon-tickets"></i>处理中心</el-menu-item>
        <el-menu-item class="navbar-menu" index="2"><i class="el-icon-tickets"></i>我的工作台</el-menu-item>
        <el-menu-item class="navbar-menu" index="3"><i class="el-icon-tickets"></i>消息中心</el-menu-item>
        <el-menu-item class="navbar-menu" index="4"><i class="el-icon-tickets"></i>订单管理</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
 name: 'Navmenu',
  data() {
    return {
      activeIndex: '1',
    }
  },
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .navbar-menu {
    height: 50px; 
  }
</style>
