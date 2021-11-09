/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:07:00
 * @LastEditTime: 2021-11-08 11:42:50
 * @FilePath: /otter-data/src/stores/store.ts
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'

import appSlice from './app'
import counterReducer from './counter'
import setSlice from './set'

import type { ThunkAction, Action } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    app: appSlice,
    set: setSlice
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
