/*
 * @Author: D.Y
 * @Date: 2021-01-07 10:05:34
 * @LastEditTime: 2021-10-25 15:27:29
 * @LastEditors: Please set LastEditors
 * @FilePath: /otter/src/utils/request.ts
 * @Description: http
 */

import axios from 'axios'

import type {AxiosResponse} from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    if (error.message && error.message.includes('timeout')) {
      console.error('请求超时!')
    }
    Promise.reject(error)
  },
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res: any = response.data
    if (res.code !== 200) {
      return Promise.reject(res)
    }
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
