import type { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义拦截器的类型, 拦截器本质上传入的是函数
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

//继承AxiosRequestConfig相当于合并,相当于interceptors属性添加到AxiosRequestConfig里
//目的是为了扩展interceptors: {}
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
