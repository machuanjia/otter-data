/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-19 19:16:12
 * @FilePath: /otter/src/index.tsx
 * @Description:
 */
import React from 'react'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


import '@/styles/index.less'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './stores'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
