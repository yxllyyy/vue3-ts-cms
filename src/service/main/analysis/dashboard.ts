import hyRequest from '../../index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

//不同商品分类的数量
export function getCategoryGoodsCount() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

// 不同商品分类的销量
export function getCategoryGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

// 不同商品分类的收藏
export function getCategoryGoodsFavor() {
  return hyRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

// 不同城市的销售数据
export function getAddressGoodsSale() {
  return hyRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
