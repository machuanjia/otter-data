/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-10-20 19:11:26
 * @FilePath: /otter/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

// import i18n from 'i18next'

const routes = [
  {
    path: '/counter',
    meta: {
      key: 'Counter',
      name: '计数器',
      icon: '',
      permission: 'counter',
    },
    component: lazy(() => import('@/views/Counter')),
  },
  {
    path: '/home',
    meta: {
      key: 'Home',
      name: 'home',
      icon: '',
      permission: 'home',
    },
    component: lazy(() => import('@/views/Home')),
  },
]

export default routes
