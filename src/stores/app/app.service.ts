/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 14:38:42
 * @LastEditTime: 2021-11-04 18:48:18
 * @FilePath: /otter-data/src/stores/app/app.service.ts
 * @Description:
 */

import { createAsyncThunk } from '@reduxjs/toolkit'

import { getUserInfo } from '@/apis/app'
import { getPermissionsRouters } from '@/routes'
import asyncRoutes from '@/routes/async'

const AppService = {
  getInfo: createAsyncThunk('app/fetchInfo', async () => {
    const data = await getUserInfo()
    // @ts-ignore
    const routes = getPermissionsRouters(asyncRoutes, data.permissions)
    return { ...data, routes }
  }),
}
export default AppService
