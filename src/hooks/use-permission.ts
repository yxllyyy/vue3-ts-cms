import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  // 拿到用户所有的权限
  const permissions = store.state.login.permissions
  const verifyPermmission = `system:${pageName}:${handleName}`
  // 调用传进来的权限和用户所拥有的所有权限比对   !!转成Boolean值

  // name = 'coderwhy'
  // !name -> false
  // !!name -> true
  return !!permissions.find((item) => item === verifyPermmission)
}
