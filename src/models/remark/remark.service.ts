/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:01:14
 * @LastEditTime: 2021-11-15 11:10:02
 * @FilePath: /otter-data/src/models/remark/remark.service.ts
 * @Description:
 */

import { getRemarks, getRemarksDetail } from '@/apis'

export const useRemarkService = () => {
  const getList = async (params={}) => {
    return await getRemarks(params)
  }
  const getDetail = async (id, params={}) => {
    return await getRemarksDetail(id, params)
  }
  return [getList, getDetail]
}
