<template>
  <div class="navbox">
    <div class="navbar1">
      <!-- 顶部菜单 -->
      <el-header style="padding:0; height:50px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  background-color="#2b2f3a" text-color="#fff" active-text-color="#409EFF">
          <el-menu-item class="navbar-menu" index="1"><i class="el-icon-tickets"></i>处理中心</el-menu-item>
          <el-menu-item class="navbar-menu" index="2"><i class="el-icon-tickets"></i>我的工作台</el-menu-item>
          <el-menu-item class="navbar-menu" index="3"><i class="el-icon-tickets"></i>消息中心</el-menu-item>
          <el-menu-item class="navbar-menu" index="4"><i class="el-icon-tickets"></i>订单管理</el-menu-item>
        </el-menu>
      </el-header> 
      <!-- 右上方头像  和 下拉菜单 -->
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>文档</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>    
    </div>
    <!-- 面包屑 -->
    <div class="navbar" >
      <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <!-- tagView -->
    <div style="height:30px;width:100%; box-shadow: 0 1px 4px rgba(0,21,41,.08);padding: 3px 15px">
      <el-scrollbar :vertical="false"  class="scroll-container" style="width:100%"  >
        <el-tag
        color="#fff"
        size="small"
        style="margin-right:5px"
        v-for="tag in tags"
        :key="tag.name"
        :closable="tag.name !== 'home'"
        @close="handleClose(tag)"
        
        >
        <!-- {{tag.label}} @close="handleClose(tag, index)" @click="changeMenu(tag)" -->
        {{tag.name}}
      </el-tag>
      </el-scrollbar>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data () {
    return {
      activeIndex: '1',
      tags: [
        // {
        //   path: '/',
        //   name: 'home',
        //   label: 'Dashboard',
        //   icon: 'home'
        // }
        { name: '首页', type: '' },
        { name: '标签二', type: '' },
        { name: '标签三', type: '' },
        { name: '标签四', type: '' },
        { name: '标签五', type: '' },
        { name: '标签五2', type: '' },
        { name: '标签6', type: '' },
        { name: '标签7', type: '' },
        { name: '标签8', type: '' },
        { name: '标签9', type: '' },
        { name: '标签10', type: '' },
        { name: '标签11', type: '' },
        { name: '标签12', type: '' },
        { name: '标签13', type: '' },
        { name: '标签14', type: '' },
        { name: '标签15', type: '' },
        { name: '标签16', type: '' },
        { name: '标签17', type: '' },
        { name: '标签18', type: '' },
        // { name: '标签19', type: '' },
        // { name: '标签20', type: '' },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    // ...mapState({
    //   tags: state => state.tab.tabsList
    // })

  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },

    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  ::v-deep {
    .el-scrollbar__bar {
      bottom: 0px;
    }
    .el-scrollbar__wrap {
      height: 49px;
    }
  }
}
.navbar-menu {
  height: 50px; 
}
.navbox {
  height:130px;
  overflow: hidden;

  //顶部菜单
  .navbar1 {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;
      position: absolute;
      right:0px;
      top:0px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            // color: #5a5e66;
            color: #fff;
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }

  //面包屑
  .navbar {
    height: 40px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
      line-height: 40px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }
  }

}
.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
   white-space: nowrap;
}
.el-tag{
  border-radius: 2px;
  border-color: #c0c4cc;
  display: inline-block;
  font-size: 12px;
  color: #97a8be;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  white-space: nowrap;
}



</style>
