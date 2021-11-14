/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:52:35
 * @LastEditTime: 2021-11-14 15:19:17
 * @FilePath: /otter-data/src/views/Set/basic.tsx
 * @Description:
 */

import { useSet } from '@/models'

const SetBasic = () => {
  const { detail } = useSet()
  console.log(detail)
  return <div>basic</div>
}

export default SetBasic
