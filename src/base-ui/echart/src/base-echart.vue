<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'

import { EChartsOption } from 'echarts'
import useEchart from './../hooks/useEchart'

// 定义props
// 定义默认值用withDefaults，defineProps<>泛型中默认是必传的
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    // 写默认值
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

//在执行echartInstance的时候也就是执行setup的时候echartDivRef.value还没有绑上去为undefined
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
