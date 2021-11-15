/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-15 09:33:52
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { AutoRedirectDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'
@AutoRedirectDecorator({
  from: '/set',
  to: '/set/index',
})
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
