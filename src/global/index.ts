import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'

//全局注册
export function globalRegister(app: any): void {
  app.use(registerElement)
  app.use(registerProperties)
}
