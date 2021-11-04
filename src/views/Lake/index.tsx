/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-04 19:56:36
 * @FilePath: /otter-data/src/views/Lake/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { ContentLayout } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator, AutoRedirectDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'
@AutoRedirectDecorator({
  from:'/lake',
  to:'/lake/index'
})
@RouteDecorator()
@NormalLayoutDecorator()

class Lake extends Component {
  render() {
    // @ts-ignore
    const { route } = this.props
    return (
      <ContentLayout>
        <Fragment key="main">
        lake
        <RouteViewer routers={route.children}/>
        </Fragment>
      </ContentLayout>
    )
  }
}
export default Lake
