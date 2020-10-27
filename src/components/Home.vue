<template>

  <el-container>
    <el-header>
      <img src="../assets/img/myLogo.png" alt="" width='10%' height='100%' >
      <h4>电商后台管理系统</h4>
      <el-button class="button" @click="logout">退出登陆</el-button>
    </el-header>
    <el-container>
      <el-aside :width=" !folds ? '200px':'56px'">
        <!-- 菜单伸缩按钮 -->
        <div class="foldbutton" @click="fold">
          <i :class=" !folds ? 'el-icon-s-fold':'el-icon-s-unfold'"></i>
        </div>
        <!-- 左侧菜单区域 -->
        <el-menu background-color="#303641" text-color="#fff" active-text-color="#319aff" unique-opened
          :collapse='folds' :collapse-transition='false' :router="true" :default-active='def'>
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" class="aaa" v-for="item in menuslists" :key="item.id">
            <template slot="title">
              <!-- 菜单图标 -->
              <i :class="icons[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group v-for="items in item.children" :key="items.id">
              <el-menu-item @click="defact" :index="'/'+items.path">
                <i class="el-icon-menu"></i>
                <span>{{items.authName}}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main>
        <!-- 子组件占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
export default {
  data () {
    return {
      def: '',
      folds: false,
      // menuslists: [],
      menuslists: [
        {
          id: 125,
          authName: '用户管理',
          path: 'users',
          children: [
            {
              id: 110,
              authName: '用户列表',
              path: 'users',
              children: []
            }
          ]
        },
        {
          id: 103,
          authName: '权限管理',
          path: 'power',
          children: [
            {
              id: 102,
              authName: '分配权限',
              path: 'power',
              children: []
            }
          ]
        },
        {
          id: 101,
          authName: '商品管理',
          path: 'goods',
          children: [
            {
              id: 113,
              authName: '标题一',
              path: 'goods',
              children: []
            }
          ]
        },
        {
          id: 102,
          authName: '订单管理',
          path: 'orders',
          children: [
            {
              id: 111,
              authName: '标题一',
              path: 'orders',
              children: []
            }
          ]
        },
        {
          id: 145,
          authName: '数据统计',
          path: 'dataStatistics',
          children: [
            {
              id: 115,
              authName: '标题一',
              path: 'dataStatistics',
              children: []
            }
          ]
        }
      ],
      icons: {
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      }
    }
  },
  methods: {
    logout () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    },
    //     获取左侧菜单方法
    async getmenuslist () {
    //   const res = await this.axios.get('menus')
    //   if (res.data.meta.status !== 200) return this.$message.error('获取数据失败')
    //   this.menuslists = res.data.data
    },
    //     折叠导航栏
    fold () {
      this.folds = !this.folds
    },
    defact (el) {
      window.sessionStorage.setItem('def', el.index)
    }
  },
  created () {
    this.getmenuslist()
    this.def = sessionStorage.getItem('def')
  }
}
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.el-menu {
  border: 0;
}
i {
  margin-right: 10px;
}
.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #353c3e;
  text-align: center;
  line-height: 60px;
  height: 60px;
  padding-left: 0;
  img {
    float: left;
  }
  h4 {
    color: white;
    float: left;
    padding-left: 10px;
  }
  .button {
    float: right;
    margin-top: 10px;
  }
}

.el-aside {
  background-color: #303641;
}

.el-main {
  background-color:#f4f4f5;
}
.foldbutton {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: white;
  cursor: pointer;
  position: relative;
  i {
    position: absolute;
    top:8px;
    right:10px;
  }
}
.foldbutton:hover {
  background-color: #262b34;
}
</style>
