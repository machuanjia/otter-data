/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-10-25 15:57:40
 * @FilePath: /otter/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { GuardDecorator } from '@/decorators/Guard'
import { AsyncRoutes } from '@/routes'

import Help from '../Help'
import Logo from '../Logo'
import Nav from '../Nav'
import Notice from '../Notice'
import Preference from '../Preference'
import Project from '../Project'
import styles from './index.module.less'

type IProps = {
  permissions: string[]
}
type IState = Record<string, unknown>

@GuardDecorator()
class Main extends Component<IProps, IState> {
  render() {
    return (
      <section className="h-screen flex flex-row">
        <nav className={`${styles['main-nav']} flex flex-col items-center`}>
          <header className=" pt-2 flex flex-col items-center">
            <Logo />
            <Project />
          </header>
          <div className=" flex-1">
            <Nav />
          </div>
          <footer className=" flex flex-col justify-center items-center">
            <Notice />
            <Help />
            <Preference />
          </footer>
        </nav>
        <div className="flex-1">
          <AsyncRoutes />
        </div>
      </section>
    )
  }
}
export default Main
