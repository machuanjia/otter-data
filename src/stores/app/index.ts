/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-11-11 11:38:39
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
  permissions: string[]
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  routes: IRoute[]
  currentRoute: IRoute
  bread: {
    icon: string
    name: string
    path: string
  }[]
}

const initialState: AppState = {
  value: 0,
  permissions: [],
  status: STATUS.LOADING,
  routes: [],
  currentRoute: null,
  bread: [],
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRoutes: (state, action) => {
      state.routes = action.payload
    },
    setCurrentRoute: (state, action) => {
      state.currentRoute = action.payload
    },
    setBread: (state, action) => {
      state.bread = action.payload
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
        state.routes = action.payload.routes
        state.status = STATUS.IDLE
      })
  },
})
export const { setRoutes, setCurrentRoute, setBread } = appSlice.actions
export const selectAppPermissions = (state: RootState) => state.app.permissions
export const selectAppRoutes = (state: RootState) => state.app.routes
export const selectAppCurrentRoute = (state: RootState) => state.app.currentRoute
export const selectAppBread = (state: RootState) => state.app.bread
export const selectAppStatus = (state: RootState) => state.app.status
export default appSlice.reducer
