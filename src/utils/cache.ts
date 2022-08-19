class LocalCache {
  // 保存缓存 JSON.stringify() 不管传进来的是什么类型都给转化为字符串
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 取缓存 JSON.parse() 将字符串转化为原来的类型
  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
