/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-04 17:08:57
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'

@GuardDecorator()
class Main extends Component {
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
export default Main
