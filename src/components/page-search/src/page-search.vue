<template>
  <div class="page-search">
    <!-- 要传多个属性用v-bind -->
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    HyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    // 拿到配置文件里的field中的值作为键并赋值为 '' 比如: id: ''
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    // 2. 优化二： 当用户点击了重置
    const handleResetClick = () => {
      // 重新设置为空
      // 遍历formOriginData，取到key，去修改formData.value某些属性的值，相当于直接修改这个对象的属性，因为form组件中的是浅拷贝
      // formOriginData通过key取到里面的值，将formOriginData的值全部赋值给formData.value的值
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
        // 发出点击了重置按钮的事件
        emit('queryBtnClick')
      }

      // formData.value = formOriginData
    }

    // 3.优化三: 当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.header {
  color: skyblue;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
