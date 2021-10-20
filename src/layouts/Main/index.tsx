/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-10-20 19:35:40
 * @FilePath: /otter/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator } from '@/decorators/Guard'
import { AsyncRoutes } from '@/routes'

type IProps = {
  permissions: string[]
}
type IState = Record<string, unknown>

@GuardDecorator()
class Main extends Component<IProps, IState> {
  render() {
    const { permissions } = this.props
    return <AsyncRoutes permissions={permissions} />
  }
}
export default Main
