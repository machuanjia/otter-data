/*
 * @Author: D.Y.M
 * @Date: 2021-11-11 08:51:33
 * @LastEditTime: 2021-11-12 19:41:57
 * @FilePath: /otter-data/src/views/Set/detail.tsx
 * @Description:
 */
import React from 'react'

import { useMount } from 'ahooks'
import { Button } from 'antd'
import { Link, useParams } from 'react-router-dom'

import Bread from '@/layouts/Bread'
import { RouteViewer } from '@/routes'
import { selectAppCurrentRoute, useAppDispatch, useAppSelector } from '@/stores'
import SetService from '@/stores/set/set.service'

import { SetDetailContext } from './context'

const SetDetail = ({ route, match }) => {
  const { id } = useParams()
  const activeRoute = useAppSelector(selectAppCurrentRoute)
  const dispatch = useAppDispatch()
  useMount(() => {
    dispatch(SetService.getSetDetail(id))
  })

  return <SetDetailContext.Provider value={{}}><section className="h-screen flex flex-col">
    <header className=" border-b border-solid border-divider p-4 text-secondary flex flex-row">
      <Bread />
      <div className="flex-1 flex flex-row justify-center">
        <Link to={`/set/${match.params.id}/version`}>版本{activeRoute?.meta?.key}</Link>
        <Link to={`/set/${match.params.id}/basic`}>基本信息</Link>
      </div>
      <div>
        <Button size="small">Fork</Button>
        <Button size="small" type="primary" className="ml-2 mr-2">
          新建任务
        </Button>
        <Button size="small">删除</Button>
      </div>
    </header>
    <div className={` flex-1 bg-main`}>
      <RouteViewer routers={route.children} />
    </div>
  </section>
  </SetDetailContext.Provider>
}

export default SetDetail
