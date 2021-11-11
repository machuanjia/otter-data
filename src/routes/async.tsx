/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-11-11 11:47:02
 * @FilePath: /otter-data/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

import i18n from 'i18next'

const routes = [
  {
    path: '/counter',
    meta: {
      key: 'Counter',
      name: '计数器',
      icon: '',
      permission: 'counter*',
    },
    component: lazy(() => import('@/views/Counter')),
    children: [
      {
        path: '/index',
        meta: {
          key: 'Counter.counter',
          name: 'home',
          icon: '',
          permission: 'counter*.counter',
        },
        component: lazy(() => import('@/views/Home')),
      },
    ],
  },
  {
    path: '/lake',
    meta: {
      key: 'Lake',
      name: i18n.t('lake'),
      icon: 'data',
      permission: 'dataLake*',
    },
    component: lazy(() => import('@/views/Lake')),
    children: [
      {
        path: '/index',
        meta: {
          key: 'home',
          name: 'home',
          icon: 'data',
          permission: 'counter*.counter',
        },
        component: lazy(() => import('@/views/Home')),
      },
      {
        path: '/detail',
        meta: {
          key: 'home',
          name: 'Counter',
          icon: 'data',
          permission: 'counter*.counter',
          isFullPath: true,
        },
        component: lazy(() => import('@/views/Counter')),
      },
    ],
  },
  {
    path: '/set',
    meta: {
      key: 'Set',
      name: i18n.t('set'),
      icon: 'data',
      permission: 'dataSet*',
    },
    component: lazy(() => import('@/views/Set')),
    children: [
      {
        path: '/index',
        meta: {
          key: 'SetList',
          name: i18n.t('set'),
          icon: 'data',
          permission: 'dataSet*',
        },
        component: lazy(() => import('@/views/Set/list')),
      },
      {
        path: '/:id',
        meta: {
          key: 'SetDetail',
          name: i18n.t('set'),
          icon: 'data',
          permission: 'dataSet*',
          isFullPath:true
        },
        component: lazy(() => import('@/views/Set/detail')),
      },
    ],
  },
  {
    path: '/remark',
    meta: {
      key: 'Remark',
      name: i18n.t('remark'),
      icon: 'data',
      permission: 'dataRemark*',
    },
    component: lazy(() => import('@/views/Remark')),
  },
]

export default routes
