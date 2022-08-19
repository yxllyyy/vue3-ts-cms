//数据
export const contentTableConfig = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '80' },
    { prop: 'type', label: '类型', minWidth: '60' },
    { prop: 'url', label: '菜单url', minWidth: '80' },
    { prop: 'icon', label: '菜单icon', minWidth: '80' },
    { prop: 'permission', label: '按钮权限', minWidth: '80' },
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
  showIndexColumn: false,
  //是否显示checkbox
  showSelectColumn: false,
  // 树形数据
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'xhildren'
    }
  },
  showFooter: false
}
