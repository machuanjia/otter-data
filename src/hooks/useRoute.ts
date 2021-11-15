/*
 * @Author: D.Y.M
 * @Date: 2021-11-14 14:48:37
 * @LastEditTime: 2021-11-14 14:54:56
 * @FilePath: /otter-data/src/hooks/useRoute.ts
 * @Description: 
 */
import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import type { IRoute } from '@/interfaces'
import { useAppModel } from '@/models'

export const useRoute =  () => {
    const { routes, setCurrentRoute, setBread } = useAppModel()
    const location = useLocation()

    const isPath = (path: string, template: string) => {
      if (path.indexOf('index') > -1) {
        if (path === template) {
          return true
        }
      } else {
        const pathArray = path.split('/')
        const templateArray = template.split('/')
        if (pathArray.length !== templateArray.length) {
          return false
        }
        templateArray.map((n, index) => {
          if (n.indexOf(':') > -1) {
            templateArray[index] = '-'
            pathArray[index] = '-'
          }
        })
        return pathArray.join() === templateArray.join()
      }
      return false
    }
    const findNode = (list: IRoute[], path: string) => {
      let node: any = null
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const loopNode = (list: IRoute[], path: string) => {
        // eslint-disable-next-line array-callback-return
        list.map((n: IRoute) => {
          if (isPath(path, n.path)) {
            node = n
          } else if (n.children) {
            loopNode(n.children, path)
          }
        })
      }
      loopNode(list, path)
      return node
    }
    const getBread = (route) => {
      const bread = []
      const findParent = (current) => {
        if (!current) {
          return
        }
        const { meta, parent, path } = current
        bread.unshift({
          icon: meta.icon,
          name: meta.name,
          path: path || '',
        })
        if (parent) {
          findParent(parent)
        }
      }
      if (route.meta.isFullPath) {
        findParent(route)
      } else {
        bread.unshift({
          icon: route.meta.icon,
          name: route.meta.name,
        })
      }
      return bread
    }
    const setRoute = (pathname) => {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const route = findNode(routes, pathname)
      if (route) {
        // @ts-ignore
        setCurrentRoute(route)
        setBread(getBread(route))
      }
    }

    useEffect(() => {
      setRoute(location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location, routes])
  }