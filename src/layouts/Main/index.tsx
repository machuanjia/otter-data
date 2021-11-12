/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-12 11:44:37
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator, LayoutDecorator, RouteDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'

@GuardDecorator()
@RouteDecorator()
@LayoutDecorator()
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
