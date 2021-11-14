/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 16:12:45
 * @LastEditTime: 2021-11-14 15:23:06
 * @FilePath: /otter-data/src/routes/async.tsx
 * @Description:
 */
import { lazy } from 'react'

import i18n from 'i18next'

const routes = [
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
      }
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
          isFullPath: true,
        },
        component: lazy(() => import('@/views/Set/detail')),
        children: [
          {
            path: '/version',
            meta: {
              key: 'SetDetailVersion',
              name: i18n.t('set'),
              icon: 'data',
              permission: 'dataSet*',
              isFullPath: true,
            },
            component: lazy(() => import('@/views/Set/version')),
          },
          {
            path: '/basic',
            meta: {
              key: 'SetDetailBasic',
              name: i18n.t('set'),
              icon: 'data',
              permission: 'dataSet*',
              isFullPath: true,
            },
            component: lazy(() => import('@/views/Set/basic')),
          },
        ],
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
