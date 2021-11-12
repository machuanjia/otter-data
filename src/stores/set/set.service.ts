/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-11-11 14:05:07
 * @FilePath: /otter-data/src/stores/set/set.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getSets, getSetsDetail } from '@/apis'

const SetService = {
  getSets: createAsyncThunk('set/getSets', async () => {
    return await getSets()
  }),
  getSetDetail: createAsyncThunk('set/getSetsDetail',async(id: string)=>{
    return await getSetsDetail(id)
  })
}
export default SetService
