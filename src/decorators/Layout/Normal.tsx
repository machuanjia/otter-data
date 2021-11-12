/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 11:42:18
 * @LastEditTime: 2021-11-12 11:43:20
 * @FilePath: /otter-data/src/decorators/Layout/Normal.tsx
 * @Description:
 */

import Bread from "@/layouts/Bread"

import styles from './index.module.less'

const Normal = ({ children }) => {
  return (
    <section className="h-screen flex flex-col">
      <header className=" border-b border-solid border-divider p-4 text-secondary">
        <Bread />
      </header>
      <div className={` flex-1 bg-main ${styles['main-body']}`}>{children}</div>
    </section>
  )
}
export default Normal
