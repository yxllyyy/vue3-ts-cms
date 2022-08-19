//数据
export const contentTableConfig = {
  title: '故事列表',
  propList: [
    { prop: 'name', label: '故事标题', minWidth: '120' },
    { prop: 'content', label: '我的故事', minWidth: '500' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'craete'
    }
  ],
  // 是否显示序号
  showIndexColumn: true,
  //是否显示checkbox
  showSelectColumn: false
}
