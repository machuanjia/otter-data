/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:43:46
 * @LastEditTime: 2021-10-19 17:47:50
 * @FilePath: /otter/src/index.tsx
 * @Description: 
 */
import React from 'react';

import ReactDOM from 'react-dom';

import '@/styles/index.less'

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
