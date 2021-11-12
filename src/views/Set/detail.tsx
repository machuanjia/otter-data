/*
 * @Author: D.Y.M
 * @Date: 2021-11-11 08:51:33
 * @LastEditTime: 2021-11-12 08:51:50
 * @FilePath: /otter-data/src/views/Set/detail.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import { ContentLayout } from 'otter-pro'
import { useParams } from 'react-router-dom'

import { useAppDispatch } from '@/stores'
import SetService from '@/stores/set/set.service'

const SetDetail = (props) => {
  const { id } = useParams()
  console.log(props, id)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(SetService.getSetDetail(id))
  }, [id])
  return (
    <ContentLayout>
      SetDetail
    </ContentLayout>
  )
}
export default SetDetail
