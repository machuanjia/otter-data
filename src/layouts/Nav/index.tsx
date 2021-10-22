/*
 * @Author: D.Y.M
 * @Date: 2021-10-21 17:06:46
 * @LastEditTime: 2021-10-21 17:14:41
 * @FilePath: /otter/src/layouts/Nav/index.tsx
 * @Description:
 */
import { Menu } from 'antd'

import styles from './index.module.less'

const { SubMenu } = Menu
const Nav = () => {
  return (
    <div>
      <Menu inlineCollapsed={true} className={styles.nav}>
        <Menu.Item>菜单项</Menu.Item>
        <SubMenu title="子菜单">
          <Menu.Item>子菜单项</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}
export default Nav
