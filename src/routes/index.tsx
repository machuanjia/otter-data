/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:03:39
 * @LastEditTime: 2021-11-12 18:11:03
 * @FilePath: /otter-data/src/routes/index.tsx
 * @Description:
 */

import { Suspense } from 'react'

import { compact } from 'lodash'
import { NotFond, NoPermission } from 'otter-pro'
import { Route, Switch } from 'react-router-dom'

import { ProcessLoading } from '@/components'
import type { IRoute } from '@/interfaces'
import { store } from '@/stores'

import staticRoutes from './static'

export const generateRoutes = (routes: any, extraProps = {}, switchProps = {}) => {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i) => (
        <Route
          key={route.meta.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (
              !route.meta.permission ||
              store.getState().app.permissions.includes(route.meta.permission)
            ) {
              return <route.component {...props} {...extraProps} route={route} />
            }
            return <Route component={NoPermission} />
          }}
        />
      ))}
      <Route component={NotFond} />
    </Switch>
  ) : null
}

export const getPermissionsRouters = (menus, permissions, parentPath = '') => {
  if (menus && menus.length > 0) {
    return compact(
      menus.map((item) => {
        item.path = parentPath + item.path
        const { path, meta, children } = item
        if (!meta || !path) {
          throw new Error('route must have meta path component')
        }
        if (!meta.key || !meta.name) {
          throw new Error('route meta must have key name')
        }
        if (permissions.includes(meta.permission)) {
          const nav: IRoute = { path, meta }
          if (children && children.length > 0) {
            const childList = compact(getPermissionsRouters(children, permissions, path))
            if (childList.length > 0) {
              childList.map((n) => {
                n.parent = { ...nav }
              })
              nav.children = childList
            }
            return nav
          }
          return nav
        }
      }),
    )
  }
  return []
}

export const RouteViewer = ({ routers }) => {
  return <>{generateRoutes(routers)}</>
}

export const StaticRoutes = () => {
  return <Suspense fallback={<ProcessLoading />}>{generateRoutes(staticRoutes)}</Suspense>
}
