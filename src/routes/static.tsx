/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:49:54
 * @LastEditTime: 2021-10-27 15:26:02
 * @FilePath: /otter-data/src/routes/static.tsx
 * @Description:
 */
import { lazy } from 'react'

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
  },
]

export default routes
