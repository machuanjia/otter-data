/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 19:03:31
 * @LastEditTime: 2021-10-21 10:28:32
 * @FilePath: /otter/src/decorators/Guard/index.tsx
 * @Description:
 */

import React, { Component } from 'react'

type IProps = {
  permissions: string[]
}

type IState = {
  loading: boolean
  props: any
}

export const GuardDecorator = () => (WrappedComponent) => {
  return class Guard extends Component<IProps, IState> {
    constructor(props) {
      super(props)
      this.state = {
        loading: true,
        props: {},
      }
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false,
          props: { ...this.props, permissions: ['home','counter'] },
        })
      }, 200)
    }
    render() {
      const { loading, props } = this.state
      return <>{loading ? <>loading</> : <WrappedComponent {...props} />}</>
    }
  }
}
