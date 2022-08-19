<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

import { rules } from './../config/account.config'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      // 从缓存中取出并保存name和password
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAccount = (isKeepPassword: boolean) => {
      // 验证规则通过
      formRef.value?.validate((valid) => {
        // 1.判断是否需要记住密码
        if (isKeepPassword) {
          // 本地缓存
          localCache.setCache('name', account.name)
          localCache.setCache('password', account.password)
        } else {
          // 删除本地缓存
          localCache.deleteCache('name')
          localCache.deleteCache('password')
        }

        // 2.开始进行登陆验证 发送网络请求
        store.dispatch('login/accountLoginAction', { ...account })
      })
    }

    return {
      account,
      rules,
      loginAccount,
      formRef
    }
  }
})
</script>

<style scoped></style>
