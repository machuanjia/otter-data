/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 09:48:53
 * @LastEditTime: 2021-11-15 09:48:54
 * @FilePath: /otter-data/src/apis/remark.ts
 * @Description:
 */
import { request } from '@/utils'
/**
 * @description: 获取数据集列表
 * @param {*} params
 * @return {*}
 */
export const getRemarks = (params = {}) => {
  return request({
    url: '/remarks',
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
export const getRemarksDetail = (id: string, params = {}) => {
  return request({
    url: `/remarks/${id}`,
    method: 'get',
    params,
  })
}
