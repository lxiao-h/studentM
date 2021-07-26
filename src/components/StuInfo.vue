<template>
<div class="stuInfo">
<el-dialog
  title="提示"
  :visible="dialogVisible"
  width="50%"
  line-height="0"
  :before-close="handleClose"
  >
  <el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>
<el-form :label-position="labelPosition" label-width="80px" :model="stuInfo">
  <el-form-item label="学号">
    <el-input v-model="stuInfo.sNo" readonly></el-input>
  </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="stuInfo.name"></el-input>
  </el-form-item>
  <el-form-item label="性别">
   <template>
      <el-radio v-model="stuInfo.sex" :label=0>男</el-radio>
      <el-radio v-model="stuInfo.sex" :label=1>女</el-radio>
    </template>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="stuInfo.email"></el-input>
  </el-form-item>
  <el-form-item label="年龄">
    <el-input v-model="stuInfo.age"></el-input>
  </el-form-item>
  <el-form-item label="手机号">
    <el-input v-model="stuInfo.phone"></el-input>
  </el-form-item>
  <el-form-item label="住址">
    <el-input v-model="stuInfo.address"></el-input>
  </el-form-item>
</el-form>

  <span slot="footer" class="dialog-footer">
    <el-button @click="cancleInfo">取 消</el-button>
    <el-button type="primary" @click="subInfo">修 改</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
    };
  },
  props: {
    dialogVisible: Boolean,
    stuInfo: {},
  },
  methods: {
    handleClose() {
      this.$emit('cancleInfo');
    },
    subInfo() {
      this.$emit('subInfo', this.stuInfo);
    },
    cancleInfo() {
      this.$emit('cancleInfo');
    },
  },
  created() {
    // console.log(this.stuInfo);
    // console.log(this.stuInfo.sex);
  },
};
</script>
<style lang="less" scoped>
 .stuInfo{
   .el-dialog__wrapper{
     line-height: 10px;
      .el-radio-button__inner,
      .el-radio-group{
        margin-bottom: 10px;
      }

   }
 }
</style>
