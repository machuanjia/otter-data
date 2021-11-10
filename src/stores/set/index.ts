/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-11-10 10:06:56
 * @FilePath: /otter-data/src/stores/set/index.ts
 * @Description:
 */

import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { ISet } from '@/models'

import SetService from './set.service'

import type { RootState } from '../store'
import type { IList } from 'otter-pro'

export interface SetState {
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  list: ISet[]
  total: number
  pageSize: number
  pageIndex: number
  isCollectionVisible: boolean
}

const initialState: SetState = {
  status: STATUS.LOADING,
  list: [],
  total: 0,
  pageSize: 20,
  pageIndex: 1,
  isCollectionVisible: false,
}

export const setSlice = createSlice({
  name: 'set',
  initialState,
  reducers: {
    setIsCollectionVisible: (state, action) => {
      state.isCollectionVisible = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SetService.getSets.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(SetService.getSets.fulfilled, (state, action) => {
        const { total = 0, page_size, page_index, value = [] } = action.payload as unknown as IList
        state.list = value
        state.total = total
        state.pageSize = page_size
        state.pageIndex = page_index
        state.status = STATUS.IDLE
      })
  },
})
export const { setIsCollectionVisible } = setSlice.actions
export const selectSetStatus = (state: RootState) => state.set.status
export const selectSetList = (state: RootState) => state.set.list
export const selectSetTotal = (state: RootState) => state.set.total
export const selectSetPageSize = (state: RootState) => state.set.pageSize
export const selectSetPageIndex = (state: RootState) => state.set.pageIndex
export const selectSetPagination = (state: RootState) => {
  return {
    total: state.set.total,
    current: state.set.pageIndex,
    pageSize: state.set.pageSize,
  }
}
export const selectIsCollectionVisible = (state: RootState) => state.set.isCollectionVisible
export default setSlice.reducer
