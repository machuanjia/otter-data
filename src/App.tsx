/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-19 17:51:33
 * @FilePath: /otter/src/App.tsx
 * @Description:
 */
import React from 'react'

import { Button } from 'antd'

import logo from './logo.svg'

function App() {
  return (
    <div>
      <Button>add</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
