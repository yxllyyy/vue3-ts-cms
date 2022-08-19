/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/*解决template找不到$store的问题 */
declare let $store: any

declare module '*.json'
