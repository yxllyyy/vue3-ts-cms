import hyRequest from '../../index'

import { IDataType } from '../../types'

// 请求表格中的数据
export function getPageListData(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除数据   url:  /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  })
}

// 新建用户数据的请求
export function createPageData(url: string, newData: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: newData
  })
}
// 编辑用户数据的请求
export function editPageData(url: string, editData: any) {
  return hyRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
