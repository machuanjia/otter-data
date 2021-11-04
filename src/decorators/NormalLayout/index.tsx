/*
 * @Author: D.Y.M
 * @Date: 2021-11-04 16:40:13
 * @LastEditTime: 2021-11-04 19:48:13
 * @FilePath: /otter-data/src/decorators/NormalLayout/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { connect } from 'react-redux'

import Bread from '@/layouts/Bread'

import styles from './index.module.less'

type IProps = {}

type IState = {}

export const NormalLayoutDecorator = () => (WrappedComponent) => {
  const mapStateToProps = () => ({})
  const mapDispatchToProps = () => ({})
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class NormalLayout extends Component<IProps, IState> {
    render() {
      return (
        <section className="h-screen flex flex-col">
          <header className=" border-b border-solid border-divider p-4 text-secondary">
            <Bread />
          </header>
          <div className={` flex-1 bg-main ${styles['main-body']}`}>
            <WrappedComponent {...this.props} />
          </div>
        </section>
      )
    }
  }
  return NormalLayout
}
