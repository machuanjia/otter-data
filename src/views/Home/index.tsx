/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-10-25 16:03:12
 * @FilePath: /otter/src/views/Home/index.tsx
 * @Description:
 */
import React from 'react'

import { useAppSelector } from '@/stores'
import { selectPermissions } from '@/stores/app'

// import i18n from 'i18next';

const Home = () => {
  const permissions = useAppSelector(selectPermissions)
  return <div>home,{permissions}</div>
}

export default Home
