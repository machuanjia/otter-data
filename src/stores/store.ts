/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:07:00
 * @LastEditTime: 2021-10-25 15:03:58
 * @FilePath: /otter/src/stores/store.ts
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'

import appSlice from './app'
import counterReducer from './counter'

import type { ThunkAction, Action } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
