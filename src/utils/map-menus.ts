import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认的所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 属于webpack的函数  遍历router/main的所有文件夹 true是否用递归 正则匹配找到.ts文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // key拿到的是有的相对于main下文件夹的路径 ./system/user/user.ts
    // ./system/user/user.ts
    // 拼接路径把 . 去掉   最后拿到/system/user/user
    // require()根据文件路径拿到了.ts导出的整个路由对象
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default) // 拿到所有的路由对象
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 1 -> url -> route
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type == 2) {
        // 匹配路由中的path 和 menu中url 相等就找到了
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu // 拿到第一个菜单menu
      } else {
        // menu.type为其他 继续递归调用
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

//合并下面两个函数
// 拿面包屑的数据
export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []

  // 拿到面包屑的数据
  pathMapToMenus(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}

// /main/system/role  ->  type === 2 对应menu
// 根据当前路由路径去匹配拿到 userMenus里的id，将menu.id作为default-active
export function pathMapToMenus(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      //一级菜单不需要展开的，因此递归调用
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 拿面包屑的数据
// export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
//   const breadcrumbs: IBreadcrumb[] = []

//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//一级菜单不需要展开的，因此递归调用
//       const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
//       if (findMenu) {
// 拿到面包屑的数据 一级菜单的menu.type === 1的数据
//         breadcrumbs.push({ name: menu.name, path: menu.url })
//         breadcrumbs.push({ name: findMenu.name, path: findMenu.url })
//         return findMenu
//       }
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }

//   return breadcrumbs
// }

// /main/system/role  ->  type === 2 对应menu
// 根据当前路由路径去匹配拿到 userMenus里的id，将menu.id作为default-active
// export function pathMapToMenus(userMenus: any[], currentPath: string): any {
//   for (const menu of userMenus) {
//     if (menu.type === 1) {
//一级菜单不需要展开的，因此递归调用
//       const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
//       if (findMenu) return findMenu
//     } else if (menu.type === 2 && menu.url === currentPath) {
//       return menu
//     }
//   }
// }

// 拿到所拥有的权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

// 获取叶子节点的id
export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []

  const _recurseGetLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeaf(menuList)

  return leftKeys
}
export { firstMenu }
