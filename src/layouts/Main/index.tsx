/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-01 14:24:46
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator } from '@/decorators'
import { AsyncRoutes } from '@/routes'

@GuardDecorator()
class Main extends Component {
  render() {
    return <>
      <section className="h-screen flex flex-row">
        <div id="otter" className="flex-1">
          <AsyncRoutes />
        </div>
      </section>
    </>
  }
}
export default Main
