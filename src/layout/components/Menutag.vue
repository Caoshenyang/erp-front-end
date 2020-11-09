<template>
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
</template>

<script>
export default {
 name: 'Navmenu',
  data() {
    return {
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
  mounted() {

  },
  beforeDestroy() {

  },
  methods: {
    handleClose(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
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
</style>
