/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:03:39
 * @LastEditTime: 2021-10-25 17:21:55
 * @FilePath: /otter/src/routes/index.tsx
 * @Description:
 */

import { lazy, Suspense, useEffect } from 'react'

import { filter, map } from 'lodash'
import { Route, Switch } from 'react-router-dom'

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
      <Route component={lazy(() => import('@/components/404'))} />
    </Switch>
  ) : null
}

export const StaticRoutes = () => {
  return (
    <Suspense fallback={<div style={{ height: '300px', background: 'red' }}>loading</div>}>
      {generateRoutes(staticRoutes)}
    </Suspense>
  )
}

export const AsyncRoutes = () => {
  const permissions = useAppSelector(selectPermissions)
  const dispatch = useAppDispatch()
  const routes = filter(asyncRoutes, (n) => {
    return permissions.includes(n?.meta?.permission)
  })
  useEffect(() => {
    dispatch(
      setRoutes(
        map(routes, (n) => {
          return { path: n.path, meta: n.meta }
        }),
      ),
    )
  }, [])
  return (
    <Suspense fallback={<div style={{ height: '300px', background: 'red' }}>loading</div>}>
      {generateRoutes(routes)}
    </Suspense>
  )
}
