/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-04 17:40:36
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { ContentLayout } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'

@RouteDecorator()
@NormalLayoutDecorator()
class Set extends Component {
  render() {
    return (
      <ContentLayout>
        <Fragment key="main">set</Fragment>
      </ContentLayout>
    )
  }
}
export default Set
