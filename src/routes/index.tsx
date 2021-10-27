/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:03:39
 * @LastEditTime: 2021-10-27 15:22:02
 * @FilePath: /otter-data/src/routes/index.tsx
 * @Description:
 */

import { Suspense, useEffect } from 'react'

import { compact } from 'lodash'
import { NotFond } from 'otter-pro'
import { Route, Switch } from 'react-router-dom'

import { ProcessLoading } from '@/components'
import type { IRoute } from '@/models'
import { useAppDispatch, useAppSelector } from '@/stores'
import { selectPermissions, setRoutes } from '@/stores/app'

import asyncRoutes from './async'
import staticRoutes from './static'

export const generateRoutes = (routes: any, extraProps = {}, switchProps = {}) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            return <route.component {...props} {...extraProps} route={route} />
          }}
        />
      ))}
      <Route component={NotFond} />
    </Switch>
  ) : null
}

export const RouteViewer = ({ routers }) => {
  return <>{generateRoutes(routers)}</>
}

export const StaticRoutes = () => {
  return (
    <Suspense fallback={<ProcessLoading />}>
      {generateRoutes(staticRoutes)}
    </Suspense>
  )
}
const filterProps = (menus) => {
  if (menus && menus.length > 0) {
    return menus.map((item) => {
      const { path, meta, children } = item
      if (children && children.length > 0) {
        return { path, meta, children: filterProps(children) }
      }
      return { path, meta }
    })
  }
  return []
}

const getPermissionsRouters = (menus, permissions) => {
  if (menus && menus.length > 0) {
    return menus.map((item) => {
      const { path, meta, component, children } = item
      if (permissions.includes(meta.permission)) {
        const nav: IRoute = { path, meta, component }
        if (children && children.length > 0) {
          const childList = compact(getPermissionsRouters(children, permissions))
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          childList.length > 0 && (nav.children = childList)
          return nav
        }
        return nav
      }
    })
  }
  return []
}
export const getFlattenRoutes = (routeList: IRoute[], flattenRoutes: IRoute[]) => {
  routeList.forEach((route) => {
    flattenRoutes.push(route)
    if (route.children) {
      getFlattenRoutes(route.children, flattenRoutes)
    }
  })
}
export const AsyncRoutes = () => {
  const permissions = useAppSelector(selectPermissions)
  const dispatch = useAppDispatch()
  const permissionRouters = getPermissionsRouters(asyncRoutes, permissions)
  const permissionNavs = filterProps(permissionRouters)
  const routes = []
  getFlattenRoutes(permissionRouters, routes)
  useEffect(() => {
    dispatch(setRoutes(permissionNavs))
  }, [])
  return (
    <Suspense fallback={<ProcessLoading />}>
      {generateRoutes(routes)}
    </Suspense>
  )
}
