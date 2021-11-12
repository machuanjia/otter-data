/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:54:09
 * @LastEditTime: 2021-11-11 14:03:31
 * @FilePath: /otter-data/src/apis/set.ts
 * @Description:
 */
import { request } from '@/utils'
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
/**
 * @description: 获取数据集详情
 * @param {*} id
 * @param {*} params
 * @return {*}
 */
export const getSetsDetail = (id: string, params = {}) => {
  return request({
    url: `/sets/${id}`,
    method: 'get',
    params,
  })
}
