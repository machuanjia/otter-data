/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 19:03:31
 * @LastEditTime: 2021-10-28 17:50:17
 * @FilePath: /otter-data/src/decorators/Guard/index.tsx
 * @Description:
 */

import React, { Component } from 'react'

import { GlobalLoading } from 'otter-pro'
import { STATUS } from 'otter-pro'
import { connect } from 'react-redux'

import { LAYOUTS } from '@/layouts'
import AppService from '@/stores/app/app.service'

type IProps = {
  permissions: string[]
}

type IState = {
  loading: boolean
}

export const GuardDecorator = () => (WrappedComponent) => {
  const mapStateToProps = (state) => ({
    status: state.app.status,
  })
  const mapDispatchToProps = (dispatch) => ({
    getInfo: () => dispatch(AppService.getInfo()),
  })
  // @ts-ignore
  @connect(mapStateToProps, mapDispatchToProps)
  class Guard extends Component<IProps, IState> {
    componentDidMount() {
      // @ts-ignore
      const { getInfo } = this.props
      getInfo()
    }
    render() {
      // @ts-ignore
      const { status } = this.props
      const Layout = LAYOUTS.normal
      return (
        <>
          {status !== STATUS.IDLE ? (
            <div className=" h-full w-full flex justify-center items-center absolute">
              <GlobalLoading description="卓越、有爱" className="" />
            </div>
          ) : (
            <Layout>
              <WrappedComponent {...this.props} />
            </Layout>
          )}
        </>
      )
    }
  }
  return Guard
}
