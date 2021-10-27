/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-10-27 15:46:05
 * @FilePath: /otter-data/src/stores/app/index.ts
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { IRoute } from '@/models'

import AppService from './app.service'

import type { RootState } from '../store'

export interface AppState {
  value: number
  permissions: string[],
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED,
  routes: IRoute[]
}

const initialState: AppState = {
  value: 0,
  permissions: [],
  status: STATUS.LOADING,
  routes: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AppService.getInfo.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(AppService.getInfo.fulfilled, (state, action) => {
        // @ts-ignore
        state.permissions = action.payload.permissions
        state.status = STATUS.IDLE
      })
  },
})
export const { setRoutes } = appSlice.actions
export const selectPermissions = (state: RootState) => state.app.permissions
export const selectRoutes = (state: RootState) => state.app.routes
export const selectStatus = (state: RootState) => state.app.status
export default appSlice.reducer
