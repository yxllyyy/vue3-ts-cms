<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登陆</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    const isKeepPassword = ref(true)
    //InstanceType可以帮助我们从某一个类型里面取到想要的拥有构造函数的实例（相当于取到class）
    //先用typeof拿到类型，再用InstanceType拿到对应拥有构造函数的实例
    //拿到的不是实例，而是普通对象，用InstanceType拿到拥有构造函数的实例
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account') //用来切换账号登录和手机登录

    // 2.定义方法 点击登录
    const handleLoginClick = () => {
      // 账号登陆
      if (currentTab.value === 'account') {
        accountRef.value?.loginAccount(isKeepPassword.value)
      } else {
        // 手机登录
        console.log('phoneRef调用loginAction')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      handleLoginClick,
      currentTab,
      phoneRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
