/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-20 14:56:58
 * @FilePath: /otter/src/App.tsx
 * @Description:
 */
import React, { Suspense, lazy } from 'react'

import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Route path="/home" component={lazy(() => import('@/views/Home'))} />
          <Route path="/counter" component={lazy(() => import('@/views/Counter'))} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
