import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export function usePageModal(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})

  // 新建
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // newCb有值才会执行newCb()
    newCb && newCb()
  }

  // 编辑 item是编辑这一条的数据
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    // editCb有值才会执行editCb()
    editCb && editCb(item)
  }

  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
