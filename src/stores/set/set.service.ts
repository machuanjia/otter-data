/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-11-08 11:07:03
 * @FilePath: /otter-data/src/stores/set/set.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getSets } from '@/apis'

const SetService = {
  getSets: createAsyncThunk('set/getSets', async () => {
    return await getSets()
  }),
}
export default SetService
