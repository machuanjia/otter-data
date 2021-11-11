/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-11-11 10:57:21
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator, RouteDecorator } from '@/decorators'
import { RouteViewer } from '@/routes'

import Bread from '../Bread'
import styles from './index.module.less'


@GuardDecorator()
@RouteDecorator()
class Main extends Component {
  render() {
    // @ts-ignore
    const { route } = this.props
  
    return <>
    <section className="h-screen flex flex-row">
      <div className={`flex-1 flex flex-col`}>
        <header className=" flex flex-row items-center p-4 border-b border-solid border-divider">
          <Bread />
        </header>
        <div className={` flex-1 bg-main ${styles['main-body']}`}>
          <RouteViewer routers={route.children} />
        </div>
      </div>
    </section>
  </>
  }
}
export default Main
