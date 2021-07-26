<template>
  <div class="addStuContainer">
<el-form :label-position="labelPosition" label-width="80px" :model="stuInfo">
  <el-form-item label="学号">
    <el-input v-model="stuInfo.sNo" ></el-input>
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
<el-button type="primary" @click="addStu">添 加</el-button>
  </div>
</template>

<script>
import student from '@/api/student';

export default {
  data() {
    return {
      labelPosition: 'center',
      stuInfo: {
        sNo: '',
        name: '',
        sex: '',
        email: '',
        age: '',
        phone: '',
        address: '',
        birth: '',
      },
    };
  },
  methods: {
    addStu() {
      const stu = this.stuInfo;
      this.stuInfo.birth = new Date().getFullYear() - this.stuInfo.age;
      student.addStu(
        `sNo=${stu.sNo}&name=${stu.name}&sex=${stu.sex}&birth=${stu.birth}&phone=${stu.phone}&address=${stu.address}&email=${stu.email}`,
      ).then((res) => {
        if (res.status === 'success') {
          console.log('添加成功');
        } else {
          console.log(res.msg);
        }
      });
    },
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
 .addStuContainer{
   width:600px;
   margin: 30px auto;
 }
</style>
