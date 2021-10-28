/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 19:03:31
 * @LastEditTime: 2021-10-28 19:55:22
 * @FilePath: /otter-data/src/decorators/Route/index.tsx
 * @Description:
 */

import React, { Component } from 'react'

import { connect } from 'react-redux'

import type { IRoute } from '@/models'
import { setCurrentRoute } from '@/stores/app'

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
  })
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class Route extends Component<IProps, IState> {
    findNode (list: IRoute[], path: string){
      let node: any = null
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const loopNode = (list: IRoute[], path: string) => {
        // eslint-disable-next-line array-callback-return
        list.map((n: IRoute) => {
          if (n.path === path) {
            node = n
          } else if (n.children) {
            loopNode(n.children, path)
          }
        })
      }
      loopNode(list, path)
      return node
    }
    componentDidMount() {
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { routes,location,setCurrentRoute } = this.props
      const route = this.findNode(routes,location.pathname)
      if(route){
        setCurrentRoute(route)
      }
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
