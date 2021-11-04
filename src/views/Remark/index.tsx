/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-04 17:05:13
 * @FilePath: /otter-data/src/views/Remark/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { ContentLayout } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'

@RouteDecorator()
@NormalLayoutDecorator()
class Remark extends Component {
  render() {
    return (
      <ContentLayout>
        <Fragment key="main">Remark</Fragment>
      </ContentLayout>
    )
  }
}
export default Remark