/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:35:49
 * @LastEditTime: 2021-10-27 10:42:05
 * @FilePath: /otter-data/src/layouts/Main/index.tsx
 * @Description:
 */
import React, { useEffect } from 'react'

import { STATUS } from '@/constants'
import { AsyncRoutes } from '@/routes'
import { useAppDispatch, useAppSelector } from '@/stores'
import { selectStatus } from '@/stores/app'
import AppService from '@/stores/app/app.service'

// import Help from '../Help'
// import Logo from '../Logo'
// import Nav from '../Nav'
// import Notice from '../Notice'
// import Preference from '../Preference'
// import Project from '../Project'
// import styles from './index.module.less'

const Main = () => {
  const status = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(AppService.getInfo())
  }, [])
  if (status === STATUS.LOADING) {
    return <div>loading1212121</div>
  }
  return (
    <section className="h-screen flex flex-row">
      {/* <nav className={`${styles['main-nav']} flex flex-col items-center`}>
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
      </nav> */}
      <div className="flex-1">
        <AsyncRoutes />
      </div>
    </section>
  )
}
export default Main
