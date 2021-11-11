/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-11 10:57:13
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { RouteViewer } from '@/routes'
class Set extends Component {
  render() {
    // @ts-ignore
    const { route } = this.props
    return (
      <>
        <RouteViewer routers={route.children} />
      </>
    )
  }
}

export default Set
