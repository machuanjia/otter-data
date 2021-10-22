/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 16:06:54
 * @LastEditTime: 2021-10-21 16:38:50
 * @FilePath: /otter/src/layouts/Help/index.tsx
 * @Description: 
 */
import { QuestionCircleOutlined } from '@ant-design/icons'

import styles from './index.module.less'

const Help = () => {
  return <div className={styles['help-wrap']}><QuestionCircleOutlined  className={styles.help}/></div>
}

export default Help