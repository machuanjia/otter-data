/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-14 15:27:45
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import { GlobalLoading } from 'otter-pro'

import { useRoute } from '@/hooks'
import useAppModel from '@/models/app'
import { RouteViewer } from '@/routes'

const Main = ({ route }) => {
  const { getUserInfo, loading } = useAppModel()
  useRoute()
  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      {loading ? (
        <div className=" h-full w-full flex justify-center items-center absolute">
          <GlobalLoading description="卓越、有爱" className="" />
        </div>
      ) : (
        <RouteViewer routers={route.children} />
      )}
    </>
  )
}
export default Main
