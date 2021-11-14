/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 15:24:41
 * @LastEditTime: 2021-11-14 15:24:42
 * @FilePath: /otter-data/src/models/app/app.service.ts
 * @Description: 
 */
import { getUserInfo } from '@/apis'

export const useAppService = () => {
  const getInfo = async (params={}) => {
    return await getUserInfo(params)
  }
  return [getInfo]
}
