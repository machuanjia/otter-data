/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-21 09:25:22
 * @FilePath: /otter/src/App.tsx
 * @Description:
 */
import React from 'react'

import { Button } from 'antd'
import { Link } from 'react-router-dom'

import { StaticRoutes } from '@/routes'

function App() {
  return (
    <>
    <Button>sdsdsd</Button>
      <Link to="/home">home</Link>
      <Link to="/counter">counter</Link>
      <StaticRoutes />
    </>
  )
}

export default App
