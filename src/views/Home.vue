<template>
  <div class="home-container">
<el-container>
      <el-header>
        <ul class="user">
          <li>{{$store.state.username}}</li>
          <li @click="logout">退出</li>
        </ul>
      </el-header>
      <el-container>
        <el-aside width="200px">
         <LeftMenu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';

export default {
  components: {
    LeftMenu,
  },
  created() {
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'login',
      });
    },
  },
};
</script>
<style scoped lang='less'>

.home-container{
  height:100%;
  ul{
    padding:0;
    margin:0;
    list-style: none;
  }
  .user{
    float:right;
    position: relative;
    cursor: pointer;
    li{
      font-size: 20px;
      font-weight: 500;
      width:100px;
      height:60px;
      line-height: 60px;
      list-style: none;
    }
    li:nth-of-type(2){
       background: #b3c0d1;
       border-radius: 4px;
       margin-top: -3px;
       display: none;
       position: absolute;
       z-index: 4;
      }
    &:hover li{
      display: block;
    }

  }
}
.el-table__header-wrapper {
  height: 80px;
  line-height: 50px;
}
.el-table th {
  text-align: -webkit-center;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
