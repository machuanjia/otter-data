/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-11-04 17:06:46
 * @FilePath: /otter-data/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

import i18n from 'i18next'

const routes = [
  // {
  //   path: '/counter',
  //   meta: {
  //     key: 'Counter',
  //     name: '计数器',
  //     icon: '',
  //     permission: 'counter*',
  //   },
  //   component: lazy(() => import('@/layouts/Normal')),
  //   children: [
  //     {
  //       path: '/counter/index',
  //       meta: {
  //         key: 'Counter.counter',
  //         name: 'home',
  //         icon: '',
  //         permission: 'counter*.counter',
  //       },
  //       component: lazy(() => import('@/views/Counter')),
  //     },
  //   ],
  // },
  {
    path: '/lake',
    meta: {
      key: 'Lake',
      name: i18n.t('lake'),
      icon: 'data',
      permission: 'dataLake*',
    },
    component: lazy(() => import('@/views/Lake'))
  },
  {
    path: '/set',
    meta: {
      key: 'Set',
      name: i18n.t('set'),
      icon: 'data',
      permission: 'dataSet*',
    },
    component: lazy(() => import('@/views/Set'))
  },
  {
    path: '/remark',
    meta: {
      key: 'Remark',
      name: i18n.t('remark'),
      icon: 'data',
      permission: 'dataRemark*',
    },
    component: lazy(() => import('@/views/Remark'))
  },
]

export default routes
