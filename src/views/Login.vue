<template>
  <div class="login-container">
    <div>
      <span class="font">登陆</span> <router-link :to="{name:'logon'}">注册</router-link>
    </div>
    <el-form
      :model="loginForm"
      ref="loginForm"
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
          v-model="loginForm.account"
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
          v-model="loginForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import user from '@/api/user';

export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.login(`&account=${this.loginForm.account}&password=${this.loginForm.password}`).then((res) => {
            if (res.status === 'success') {
              this.$store.dispatch('setUserName', this.loginForm.account);
              // alert('登录成功！');
              this.$toast('success', res.msg);
              this.$router.push({
                name: 'home',
              });
            } else {
              console.log(res.msg);
            }
          });
        } else {
          console.log('error submit!!');
          return false;
        }
        return true;
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
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
