/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-01 15:04:39
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
    return <>
      <section className="h-screen flex flex-row">
        <div id="otter" className="flex-1">
          <RouteViewer routers={route.children} />
        </div>
      </section>
    </>
  }
}
export default Main
