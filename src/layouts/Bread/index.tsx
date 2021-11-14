/*
 * @Author: D.Y.M
 * @Date: 2021-11-04 14:24:25
 * @LastEditTime: 2021-11-14 14:54:21
 * @FilePath: /otter-data/src/layouts/Bread/index.tsx
 * @Description:
 */

import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import icons from '@/icons'
import { useAppModel } from '@/models'

const Bread = () => {
  const { bread } = useAppModel()
  return (
    <span className={` flex flex-row`}>
      {bread.map((n: { icon: string; name: string; path: string }, index) => {
        const { icon = '', name = '', path = '' } = n
        if (!icon && !name) {
          throw new Error('bread item must have icon or name')
        }
        const breadContent = (
          <span className={` flex flex-row`}>
            <span className=" flex flex-row items-center mr-1">{icons[icon]}</span>
            {name}
          </span>
        )
        return (
          <span className="flex flex-row items-center text-secondary" key={index}>
            {index > 0 && <RightOutlined className=" ml-2 mr-2" />}
            {path ? (
              <Link to={path} className=" text-secondary hover:text-primary">
                <>{breadContent}</>
              </Link>
            ) : (
              <>{breadContent}</>
            )}
          </span>
        )
      })}
    </span>
  )
}

export default Bread
