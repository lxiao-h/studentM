<template >
<div class="leftMenu">
<el-row class="tac">
  <el-col :span="24" >
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>
              学生管理
          </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
              <router-link :to="{name:'studentList'}">学生列表</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
              <router-link :to="{name:'addStudent'}">添加学生</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</div>

</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
    .leftMenu{
        height:100%;
    } .tac{
        height:100%;
    }
    .el-col{
        height:100%;
        .el-menu{
            height:100%;
        }
    }
</style>
