/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 16:06:54
 * @LastEditTime: 2021-10-21 16:30:02
 * @FilePath: /otter/src/layouts/Notice/index.tsx
 * @Description:
 */
import { MessageOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const Notice = () => {
  return <div className={styles['notice-wrap']}><MessageOutlined  className={styles.notice}/></div>
}

export default Notice
