<template>
  <div
    ref="editorRef"
    class="hy-editor"
    :style="{ width: width ? `${width}px` : '100%' }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, onMounted } from 'vue'
import WangEditor from 'wangeditor'
import type Editor from 'wangeditor'
import { IEditorInfo } from './type'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 500
    },
    width: {
      type: Number,
      default: 0
    },
    zIndex: {
      type: Number,
      default: 500
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    // 拿到div元素
    const editorRef = ref<HTMLDivElement | null>(null)
    const isInitContent = ref<boolean>(false)
    const content = reactive<IEditorInfo>({
      html: '',
      text: ''
    })
    const instance = ref<Editor | null>(null)

    // watch监听props.value的变化
    watch(
      () => props.value,
      () => {
        initEditorContent(props.value, true)
      }
    )

    onMounted(() => {
      createWangEditor()
    })

    //创建wangeditor富文本编辑器
    const createWangEditor = () => {
      instance.value = new WangEditor(editorRef.value)
      setEditorConfig()
      instance.value.create()
      //create 之后才能初始化
      // initEditorContent(props.defaultHtmlStr)
      initEditorContent(props.value)
    }

    const initEditorContent = (htmlStr: string, isFocus = false) => {
      if (!instance.value) return
      const editor: Editor = instance.value as Editor
      // 设置是否默认自动 focus 到编辑区域
      editor.config.focus = isFocus
      if (!htmlStr) return
      isInitContent.value = true
      editor.txt.html(htmlStr)
    }

    // 编辑器的配置
    const setEditorConfig = () => {
      if (!instance.value) return
      const editor: Editor = instance.value as Editor
      // 设置编辑区高度为500px
      editor.config.height = props.height
      // 设置zIndex
      editor.config.zIndex = props.zIndex
      // 取消自动 focus
      editor.config.focus = props.focus
      // 配置 onchange 回调函数
      editor.config.onchange = function (newHtml: string) {
        content.html = newHtml
        content.text = editor.txt.text()
        if (!isInitContent.value) {
          emit('update:value', content.html)
        }
        // 最后标记为 false
        isInitContent.value = false
        // emit('onChange', content.html, content.text)
      }
      // 配置触发 onchange 的时间频率, 默认为200ms
      editor.config.onchangeTimeout = 500 // 修改为500ms
      // 配置菜单栏， 删减菜单, 调整顺序
      editor.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo'
      ]
    }
    return {
      editorRef
    }
  }
})
</script>

<style scoped lang="less">
.hy-editor {
  text-align: left;
}
</style>
