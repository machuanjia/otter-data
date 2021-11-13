/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:45:44
 * @LastEditTime: 2021-11-12 17:52:55
 * @FilePath: /otter-data/src/views/Set/version.tsx
 * @Description: 
 */
import { selectSetDetail, useAppSelector } from "@/stores"

const SetVersion = ()=>{
    const detail = useAppSelector(selectSetDetail)
    console.log(detail)
    return <div>version</div>
}

export default SetVersion