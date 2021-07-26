<template>
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
</template>

<script>
export default {
  name: 'student',
  methods: {
    deleteStu(row) {
      this.$emit('delStu', row);
    },
    editStu(row) {
      this.$emit('editStu', row);
    },
  },
  created() {
    this.list = this.tableData;
  },
  computed: {
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
