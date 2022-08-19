import { ref } from 'vue'
import PageContent from '@/components/page-content'

export function usePageSearch() {
  const PageContentRef = ref<InstanceType<typeof PageContent>>()

  // 重置
  const handleResetClick = () => {
    PageContentRef.value?.getPageData()
  }
  //搜索
  const handleQueryClick = (queryInfo: any) => {
    PageContentRef.value?.getPageData(queryInfo)
  }

  // 可以看成一个元组
  return [PageContentRef, handleResetClick, handleQueryClick]
}
