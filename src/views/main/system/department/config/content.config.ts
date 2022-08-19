//数据
export const contentTableConfig = {
  title: '用户列表',
  propList: [
    { prop: 'id', label: '序号', minWidth: '80' },
    { prop: 'name', label: '部门名称', minWidth: '80' },
    { prop: 'leader', label: '部门领导', minWidth: '80' },
    { prop: 'parentId', label: '上级部门', minWidth: '80' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  // 是否显示序号
  showIndexColumn: true,
  //是否显示checkbox
  showSelectColumn: true
}
