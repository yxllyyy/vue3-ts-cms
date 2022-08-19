import * as echarts from 'echarts'

import ChinaMapData from './../data/china.json'

echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  // 基于准备好的dom，初始化echarts实例
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    //设置配置项
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  // 响应式 当浏览器改变时重绘
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
