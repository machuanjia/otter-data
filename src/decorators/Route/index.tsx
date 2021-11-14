/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 19:03:31
 * @LastEditTime: 2021-11-12 19:21:25
 * @FilePath: /otter-data/src/decorators/Route/index.tsx
 * @Description:
 */

import React, { Component } from 'react'

import { connect } from 'react-redux'

import type { IRoute } from '@/models'
import { setCurrentRoute, setBread } from '@/stores/app'

type IProps = {
  permissions: string[]
}

type IState = {
  loading: boolean
}

export const RouteDecorator = () => (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    routes: state.app.routes,
  })
  const mapDispatchToProps = (dispatch) => ({
    setCurrentRoute: (route) => dispatch(setCurrentRoute(route)),
    setBread: (bread) => dispatch(setBread(bread))
  })
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class Route extends Component<IProps, IState> {
    isPath(path: string, template: string) {
      if (path === template) {
        return true
      }
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
    findNode(list: IRoute[], path: string) {
      let node: any = null
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const loopNode = (list: IRoute[], path: string) => {
        // eslint-disable-next-line array-callback-return
        list.map((n: IRoute) => {
          if (this.isPath(path, n.path)) {
            node = n
          } else if (n.children) {
            loopNode(n.children, path)
          }
        })
      }
      loopNode(list, path)
      return node
    }
    getBread(route) {
      const bread = []
      const findParent = (current) => {
        if (!current) {
          return
        }
        const { meta, parent } = current
        bread.unshift({
          icon: meta.icon,
          name: meta.name,
          // path: path || '',
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
    setRoute(pathname) {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { routes, setCurrentRoute, setBread } = this.props
      const route = this.findNode(routes, pathname)
      if (route) {
        // @ts-ignore
        setCurrentRoute(route)
        setBread(this.getBread(route))
      }
    }
    componentDidMount() {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { location, history } = this.props
      history.listen((args) => {
        this.setRoute(args.pathname)
      })
      this.setRoute(location.pathname)
    }
    render() {
      return (
        <>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
  return Route
}
