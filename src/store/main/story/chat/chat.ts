import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IChatState } from './types'
import { getPageListData } from '@/service/main/system/system'

const chatModule: Module<IChatState, IRootState> = {
  namespaced: true,
  state() {
    return {
      storyTotalCount: 0,
      storyList: []
    }
  },
  mutations: {},
  actions: {
    async getStoryData({ commit }, payload: any) {
      console.log(payload)

      const data = await getPageListData(payload, {})
      console.log(data)
    }
  }
}

export default chatModule
