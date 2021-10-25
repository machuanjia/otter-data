/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:57:16
 * @LastEditTime: 2021-10-25 14:59:35
 * @FilePath: /otter/src/apis/app.ts
 * @Description: 
 */
import  { request } from '@/utils'
/**
 * @description: 获取用户信息，权限
 * @param {*} params
 * @return {*}
 */
 export const getUserInfo = (params = {}) => {
    return request({
      url: '/user/info',
      method: 'get',
      params,
    })
  }
  