/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-15 09:06:55
 * @FilePath: /otter-data/src/views/Lake/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { ContentLayout } from 'otter-pro'

// import { AutoRedirectDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'
// @AutoRedirectDecorator({
//   from:'/lake',
//   to:'/lake/index'
// })

class Lake extends Component {
  render() {
    // @ts-ignore
    const { route } = this.props
    return (
      <ContentLayout>
        lake
        <RouteViewer routers={route.children}/>
      </ContentLayout>
    )
  }
}
export default Lake
