/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 16:00:25
 * @LastEditTime: 2021-10-21 16:41:42
 * @FilePath: /otter/src/layouts/Preference/index.tsx
 * @Description:
 */
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'

import styles from './index.module.less'

const Preference = () => {
  return (
    <div className=" w-14 h-14 flex flex-col items-center justify-center border-t border-solid border-divider">
    <Avatar
      className={`${styles.preference} cursor-pointer opacity-60 hover:opacity-100`}
      icon={<UserOutlined />}
    />
    </div>
  )
}

export default Preference
