import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' //从vue-router导入的类型

import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

//routes的类型 RouteRecordRaw[]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue') //懒加载
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue') //懒加载
    //children: [] -> 根据userMenus来决定 -> children
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    //判断是否有token
    if (!token) {
      return '/login'
    }
  }
  //若访问/main则跳转到firstMenu.url
  if (to.path === '/main') {
    return firstMenu.url
  }
})

export default router
