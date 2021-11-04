/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-04 17:08:11
 * @FilePath: /otter-data/src/views/Lake/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { ContentLayout } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'

@RouteDecorator()
@NormalLayoutDecorator()
class Lake extends Component {
  render() {
    return (
      <ContentLayout>
        <Fragment key="main">Lake</Fragment>
      </ContentLayout>
    )
  }
}
export default Lake
