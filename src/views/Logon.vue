<template>
  <div class="login-container">
    <div>
      <span class="font"> 注册</span> <router-link to="/login">登陆</router-link>
    </div>
    <el-form
      :model="logonForm"
      ref="logonForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="账号："
        prop="account"
        :rules="[
          { required: true, message: '账号不能为空' },        ]"
      >
        <el-input
          v-model="logonForm.account"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="用户名："
        prop="username"
        :rules="[
          { required: true, message: '用户名不能为空' },        ]"
      >
        <el-input
          v-model="logonForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="密码："
        prop="password"
        :rules="[
          { required: true, message: '密码不能为空' },        ]"
      >
        <el-input
          v-model="logonForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码："
        prop="rePassword"
        :rules="[
          { required: true, message: '确认密码不能为空' },        ]"
      >
        <el-input
          v-model="logonForm.rePassword"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('logonForm')"
          >注 册</el-button
        >
        <el-button @click="resetForm('logonForm')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import user from '@/api/user';

export default {
  data() {
    return {
      logonForm: {
        account: '',
        password: '',
        username: '',
        rePassword: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.logon(this.logonForm).then((res) => {
            console.log(res);
          });
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login-container{
  width:500px;
  margin: 50px auto;
 .demo-ruleForm{
   margin-top: 30px;
 }
  .font{
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
