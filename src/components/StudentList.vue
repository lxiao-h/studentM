<template>
<div class="stuTable">
  <el-table :data="tableData" border style="width: 100%;">
    <el-table-column fixed prop="sNo" label="学号" width="150"></el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="sex1" label="性别" width="120"></el-table-column>
    <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
    <el-table-column prop="age" label="年龄" width="120"></el-table-column>
    <el-table-column prop="phone" label="手机号" width="150"></el-table-column>
    <el-table-column prop="address" label="住址"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="deleteStu(scope.row)" type="text" size="small"
          >删除</el-button
        >
        <el-button type="text" size="small" @click="editStu(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Pagination @changePage="changePage" :nowPage='nowPage' :totalPage='totalPage'/>
</div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    Pagination,
  },
  name: 'student',
  methods: {
    ...mapActions(['setPage']),
    deleteStu(row) {
      this.$emit('delStu', row);
    },
    editStu(row) {
      this.$emit('editStu', row);
    },
    changePage(val) {
      let page = 1;
      if (val === 'prev') {
        page = this.nowPage === 1 ? 1 : this.nowPage - 1;
      } else if (val === 'next') {
        page = this.nowPage === this.totalPage ? this.totalPage : this.nowPage + 1;
      } else if (val === 'increase') {
        page = this.nowPage + 5 >= this.totalPage
          ? this.totalPage
          : this.nowPage + 5;
      } else if (val === 'decrease') {
        page = this.nowPage - 5 <= 1 ? 1 : this.nowPage - 5;
      } else {
        page = val;
      }
      this.setPage(page);
    // this.$emit('changePage',val);
    },
  },
  created() {
    this.list = this.tableData;
  },
  computed: {
    ...mapState({
      nowPage: (state) => state.page,
      totalPage: (state) => state.total,
    }),
  },
  data() {
    return {};
  },
  props: {
    tableData: Array,
  },

};
</script>
<style lang="less">
.el-container{
  height:100%;
}
  .el-table__header-wrapper{
    height: 100px;
    line-height: 70px;
  }
  table th{
    text-align: center;
  }
</style>
