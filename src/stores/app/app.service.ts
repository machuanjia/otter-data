/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-10-25 15:28:07
 * @FilePath: /otter/src/stores/app/app.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserInfo } from '@/apis/app'

const AppService = {
  getInfo: createAsyncThunk('app/fetchInfo', async () => {
    return await getUserInfo()
  }),
}
export default AppService
