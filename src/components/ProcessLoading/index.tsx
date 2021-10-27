/*
 * @Author: D.Y.M
 * @Date: 2021-10-26 18:11:55
 * @LastEditTime: 2021-10-27 14:23:09
 * @FilePath: /otter/src/components/PageLoading/index.tsx
 * @Description: 
 */
import { useEffect } from 'react'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export const ProcessLoading = ()=>{
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])
  return null
}