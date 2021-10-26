/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-26 09:54:36
 * @FilePath: /otter-data/src/index.tsx
 * @Description:
 */
import React from 'react'

import { ConfigProvider } from 'antd'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { getAntdLocal } from '@/i18n'
import '@/styles/index.less'

import './public-path'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './stores'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

function render(props) {
  const { container } = props
  // @ts-ignore
  const baseName = window.__POWERED_BY_QIANKUN__ ? '/data' : '/'
  console.log(baseName)
  ReactDOM.render(
      <Provider store={store}>
        <ConfigProvider locale={getAntdLocal()} componentSize="middle">
          <Router basename={baseName}>
            <App />
          </Router>
        </ConfigProvider>
      </Provider>,
    container ? container.querySelector('#root') : document.querySelector('#root'),
  )
}
// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props)
  render(props)
}

export async function unmount(props) {
  const { container } = props
  ReactDOM.unmountComponentAtNode(
    container ? container.querySelector('#root') : document.querySelector('#root'),
  )
}
