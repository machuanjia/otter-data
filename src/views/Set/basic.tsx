/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:52:35
 * @LastEditTime: 2021-11-15 11:14:03
 * @FilePath: /otter-data/src/views/Set/basic.tsx
 * @Description:
 */

import { useSetModel } from '@/models'

const SetBasic = () => {
  const { detail } = useSetModel()
  console.log(detail)
  return <div>basic</div>
}

export default SetBasic
