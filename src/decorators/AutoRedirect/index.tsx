/*
 * @Author: D.Y.M
 * @Date: 2021-11-04 16:40:13
 * @LastEditTime: 2021-11-04 19:56:58
 * @FilePath: /otter-data/src/decorators/AutoRedirect/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

type IProps = {}

type IState = {}

export const AutoRedirectDecorator =
  (payload: { from: string; to: string }) => (WrappedComponent) => {
    class AutoRedirect extends Component<IProps, IState> {
      componentDidMount() {
        // @ts-ignore
        const { location, history } = this.props
        const { from, to } = payload
        if (location.pathname === from) {
          history.push(to)
        }
      }
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
    return AutoRedirect
  }
