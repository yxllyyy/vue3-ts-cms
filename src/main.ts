import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他  app.use()里可以传一个函数或一个对象install
app.use(globalRegister)
app.use(store)
// 先注册路由再匹配，不然会直接匹配到not-found path: /user => user
setupStore() //注册动态路由
app.use(router) //匹配路由

app.mount('#app')
