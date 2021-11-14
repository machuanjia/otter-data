/* eslint-disable @typescript-eslint/no-shadow */
/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 11:58:41
 * @LastEditTime: 2021-11-14 15:26:29
 * @Description:
 */
import { useState } from 'react'

import { createModel } from 'hox'

import { getPermissionsRouters } from '@/routes'
import asyncRoutes from '@/routes/async'

import { useAppService } from './app.service'

function useApp() {
  const [permissions, setPermissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [routes, setRoutes] = useState([])
  const [currentRoute, setCurrentRoute] = useState(null)
  const [bread, setBread] = useState([])
  const [getInfo] = useAppService()

  const getUserInfo = async () => {
    const data = await getInfo({})
    if (data) {
      // @ts-ignore
      const { permissions } = data
      if (permissions) {
        const routes = getPermissionsRouters(asyncRoutes, permissions)
        setPermissions(permissions)
        setRoutes(routes)
        setLoading(false)
      }
    }
  }

  return {
    permissions,
    setPermissions,
    loading,
    setLoading,
    routes,
    setRoutes,
    currentRoute,
    setCurrentRoute,
    bread,
    setBread,
    getUserInfo,
  }
}

export default createModel(useApp)
