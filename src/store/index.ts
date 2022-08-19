import { createStore, Store, useStore as useVexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import system from './main/system/system'
import login from './login/login'
import dashboard from './main/analysis/dashboard'
import chat from './main/story/chat/chat'

import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18,
      entireDepartment: [], // 部门数据
      entireRole: [], // 角色数据
      entireMenu: [] //菜单数据
    }
  },
  mutations: {
    changeEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    changeEntireRole(state, list) {
      state.entireRole = list
    },
    changeEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      //  起别名list: departmentList
      const { list: departmentList } = departmentResult.data
      // 2.请求角色数据
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      // 起别名list: roleList
      const { list: roleList } = roleResult.data

      // 3.请求菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data

      // 4.保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  modules: {
    login,
    system,
    dashboard,
    chat
  }
})

//vuex里面的数据是保存到内存中的，刷新一下就没了，所有刷新后重新取拉一下数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  // store.dispatch('getInitialDataAction')
}

// 为了确定根state和模块中state中的数据的类型，返回的还是vuex里面的store对象
export function useStore(): Store<IStoreType> {
  return useVexStore()
}

export default store
