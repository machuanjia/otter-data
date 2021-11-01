/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:49:54
 * @LastEditTime: 2021-11-01 14:31:55
 * @FilePath: /otter-data/src/routes/static.tsx
 * @Description:
 */
import { lazy } from 'react'

import asyncRoute from './async'

// import i18n from 'i18next'

const routes = [
  {
    path: '/',
    meta: {
      key: 'Main',
      name: '主页', //i18n.t('router.login'),
      isHidden: true,
    },
    component: lazy(() => import('@/layouts/Main')),
    children: asyncRoute,
  },
]

export default routes
