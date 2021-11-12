/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-11-12 11:30:04
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
  layout: string
}

const initialState: AppState = {
  value: 0,
  permissions: [],
  status: STATUS.LOADING,
  routes: [],
  currentRoute: null,
  bread: [],
  layout: 'normal',
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
    setLayout: (state, action) => {
      state.layout = action.payload
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
export const { setRoutes, setCurrentRoute, setBread, setLayout } = appSlice.actions
export const selectAppPermissions = (state: RootState) => state.app.permissions
export const selectAppRoutes = (state: RootState) => state.app.routes
export const selectAppCurrentRoute = (state: RootState) => state.app.currentRoute
export const selectAppBread = (state: RootState) => state.app.bread
export const selectAppLayout = (state: RootState) => state.app.layout
export const selectAppStatus = (state: RootState) => state.app.status
export default appSlice.reducer
