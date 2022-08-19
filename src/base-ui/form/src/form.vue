<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- 设置多个属性用v-bind -->
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <!-- v-bind 可以直接将item.otherOptions的属性全部绑定到里面 el-date-picker-->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from './../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>, //明确传进来的数组类型 一般数组或对象才用
      default: () => [] //vue3+ts如果默认对象或者是数组要用箭头函数
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px  24 / 6 = 4个
        lg: 8, // ≥1200px
        md: 12, // ≥992px
        sm: 24, // ≥768px
        xs: 24 // <768px
      })
    }
  },
  emit: ['update:modelValue'], //v-model用法
  setup(props, { emit }) {
    // 浅拷贝了一份数据，而不是直接拿到数据，直接拿到数据修改违背了单向数据流
    // formData是对 ...props.modelValue做了一个浅拷贝，...props.modelValue
    // 改变的时候formData是不会改变的(没有影响)，因为它对...props.modelValue是没有依赖的
    const formData = ref({ ...props.modelValue })

    // 重置
    // watch(
    //   () => props.modelValue,
    //   (newValue) => {
    //     formData.value = { ...newValue }
    //   }
    // )

    watch(
      formData,
      (newValue) => {
        // formData一旦发生改变后，就会触发update:modelValue
        emit('update:modelValue', newValue)
      },
      {
        // 深度监听
        deep: true
      }
    )
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.hy-form {
  padding-top: 22px;
}
</style>
