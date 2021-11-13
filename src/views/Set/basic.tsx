/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:52:35
 * @LastEditTime: 2021-11-12 17:52:36
 * @FilePath: /otter-data/src/views/Set/basic.tsx
 * @Description: 
 */
import { selectSetDetail, useAppSelector } from "@/stores"

const SetBasic = ()=>{
    const detail = useAppSelector(selectSetDetail)
    console.log(detail)
    return <div>basic</div>
}

export default SetBasic