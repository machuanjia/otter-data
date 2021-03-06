/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 19:09:37
 * @LastEditTime: 2021-11-12 10:23:47
 * @FilePath: /otter-data/src/stores/set/index.ts
 * @Description:
 */

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { STATUS } from 'otter-pro'

import type { ISet } from '@/interfaces'

import SetService from './set.service'

import type { RootState } from '../store'
import type { IList } from 'otter-pro'

export interface SetState {
  status: STATUS.IDLE | STATUS.LOADING | STATUS.FAILED
  list: ISet[]
  total: number
  pageSize: number
  pageIndex: number
  detail: ISet
}

const setsAdapter = createEntityAdapter<ISet>({
  // Assume IDs are stored in a field other than `book.id`
  selectId: (set: ISet) => set.id,
  // Keep the "all IDs" array sorted based on book titles
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

export const setSlice = createSlice({
  name: 'set',
  initialState: setsAdapter.getInitialState({
    status: STATUS.LOADING,
    total: 0,
    pageSize: 20,
    pageIndex: 1,
    isCollectionVisible: false,
    detail: null,
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(SetService.getSets.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(SetService.getSets.fulfilled, (state, action) => {
        const { total = 0, page_size, page_index, value = [] } = action.payload as unknown as IList
        setsAdapter.setAll(state, value)
        state.total = total
        state.pageSize = page_size
        state.pageIndex = page_index
        state.status = STATUS.IDLE
      })
      .addCase(SetService.getSetDetail.pending, (state) => {
        state.status = STATUS.LOADING
      })
      .addCase(SetService.getSetDetail.fulfilled, (state, action) => {
        state.detail = action.payload
        state.status = STATUS.IDLE
      })
  },
})

export const { } = setSlice.actions
export const setsSelectors = setsAdapter.getSelectors<RootState>((state) => state.set)
export const selectSetStatus = (state: RootState) => state.set.status
export const selectSetList = (state: RootState) => state.set.entities
export const selectSetDetail = (state: RootState) => state.set.detail
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
