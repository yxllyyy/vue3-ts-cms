import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    },
    changeDepartmentList(state, list: any[]) {
      state.departmentList = list
    },
    changeDepartmentCount(state, count: number) {
      state.departmentCount = count
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    // 获取数据
    async getPageListAction({ commit }, payload: any) {
      // 1.获取pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3.将数据存储到state中
      const { list, totalCount } = pageResult.data

      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },

    // 删除数据
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1. 获取pageName和id
      // 1. pageName -> /users
      // 2. id -> /users/id
      const { pageName, id } = payload
      const pageurl = `/${pageName}/${id}`

      // 2.调用删除网络请求
      await deletePageData(pageurl)

      // 3.重新请求最新的数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 新建数据
    async createPageDataAction({ dispatch }, payload: any) {
      // 1.创建数据的请求  newData中保存的是新建的数据
      const { pageName, newData } = payload
      // /users
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 创建用户数据后要重新拉一下数据
      dispatch('getPageListAction', {
        pageName,
        queryinfo: {
          offset: 0,
          size: 10
        }
      })
    },

    //编辑数据
    async editPageDataAction({ dispatch }, payload: any) {
      // 编辑数据的请求  editData中保存的是编辑的数据
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 编辑用户数据后要重新拉一下数据
      dispatch('getPageListAction', {
        pageName,
        queryinfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
