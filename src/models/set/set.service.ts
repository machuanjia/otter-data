/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:01:14
 * @LastEditTime: 2021-11-14 15:17:01
 * @FilePath: /otter-data/src/models/set/set.service.ts
 * @Description:
 */

import { getSets, getSetsDetail } from '@/apis'

export const useSetService = () => {
  const getList = async (params={}) => {
    return await getSets(params)
  }
  const getDetail = async (id, params={}) => {
    return await getSetsDetail(id, params)
  }
  return [getList, getDetail]
}
