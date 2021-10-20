/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-20 19:07:37
 * @FilePath: /otter/src/App.tsx
 * @Description:
 */
import React from 'react'

import { Link } from 'react-router-dom'

import { StaticRoutes } from '@/routes'

function App() {
  return (
    <>
      <Link to="/home">home</Link>
      <Link to="/counter">counter</Link>
      <StaticRoutes />
    </>
  )
}

export default App
