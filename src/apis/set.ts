/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:54:09
 * @LastEditTime: 2021-11-08 11:06:34
 * @FilePath: /otter-data/src/apis/set.ts
 * @Description: 
 */
import  { request } from '@/utils'
/**
 * @description: 获取数据集列表
 * @param {*} params
 * @return {*}
 */
 export const getSets = (params = {}) => {
    return request({
      url: '/sets',
      method: 'get',
      params,
    })
  }
  