/*
 * @Author: D.Y.M
 * @Date: 2021-11-04 16:40:13
 * @LastEditTime: 2021-11-12 13:49:19
 * @FilePath: /otter-data/src/decorators/Layout/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { LAYOUT_TYPE } from 'otter-pro'
import { connect } from 'react-redux'

import { store } from '@/stores'

import Full from './Full'
import Normal from './Normal'

type IProps = {
  layout: string
}

type IState = {}

export const layouts = {
  [LAYOUT_TYPE.NORMAL]: Normal,
  [LAYOUT_TYPE.FULL]: Full,
}

export const LayoutDecorator = () => (WrappedComponent) => {
  const mapStateToProps = () => ({
    layout: store.getState().app.layout,
  })
  const mapDispatchToProps = () => ({})
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class Layout extends Component<IProps, IState> {
    render() {
      const { layout } = this.props
      return (
        <>
          {layout === LAYOUT_TYPE.NORMAL && (
            <Normal>
              <WrappedComponent {...this.props} />
            </Normal>
          )}
          {layout === LAYOUT_TYPE.FULL && (
            <Full>
              <WrappedComponent {...this.props} />
            </Full>
          )}
        </>
      )
    }
  }
  return Layout
}
