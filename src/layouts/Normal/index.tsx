// import { useAppSelector } from '@/stores'

/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 16:10:58
 * @LastEditTime: 2021-10-28 17:47:39
 * @FilePath: /otter-data/src/layouts/Normal/index.tsx
 * @Description:
 */
const NormalLayout = (props) => {
  return (
    <section>
      <header className=" border-b border-solid border-divider p-4">
        {/* {currentRoute?.meta?.name} */}
        sss
      </header>
      <div>{props?.children}</div>
    </section>
  )
}
export default NormalLayout
