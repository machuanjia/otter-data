/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-10-25 15:53:23
 * @FilePath: /otter/src/stores/app/index.ts
 * @Description:
 */
import { createSlice } from '@reduxjs/toolkit'

import { STATUS } from '@/constants'

import AppService from './app.service'

import type { RootState } from '../store'

export interface AppState {
  value: number
  permissions: string[],
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
}

const initialState: AppState = {
  value: 0,
  permissions: [],
  status: STATUS.LOADING,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AppService.getInfo.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(AppService.getInfo.fulfilled, (state, action) => {
        state.status = STATUS.IDLE
        // @ts-ignore
        state.permissions = action.payload.permissions
      })
  },
})
export const selectPermissions = (state: RootState) => state.app.permissions
export default appSlice.reducer
