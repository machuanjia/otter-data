/* eslint-disable @typescript-eslint/no-shadow */
/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 11:58:41
 * @LastEditTime: 2021-11-15 11:35:13
 * @Description:
 */
import { useState } from 'react'

import { createModel } from 'hox'

import { useRemarkService } from './remark.service'

import type { IList } from 'otter-pro'

function useRemark() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [pageSize, setPageSize] = useState(20)
  const [pageIndex, setPageIndex] = useState(0)
  const [detail, setDetail] = useState(null)
  const [getList, getDetail] = useRemarkService()

  const getRemarks = async (params = {}) => {
    const data = await getList(params)
    const { total = 0, page_size, page_index, value = [] } = data as unknown as IList
    setTotal(total)
    setPageSize(page_size)
    setPageIndex(page_index)
    setList(value)
    setLoading(false)
  }

  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const getRemarkDetail = async (id: string, params = {}) => {
    const data = await getDetail(id, params)
    setDetail(data)
  }

  return {
    loading,
    setLoading,
    list,
    setList,
    total,
    setTotal,
    pageSize,
    setPageSize,
    pageIndex,
    setPageIndex,
    detail,
    setDetail,
    getRemarks,
    getRemarkDetail,
  }
}

export default createModel(useRemark)
