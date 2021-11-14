/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:45:44
 * @LastEditTime: 2021-11-14 15:19:47
 * @FilePath: /otter-data/src/views/Set/version.tsx
 * @Description: 
 */
import { useSet } from "@/models"

const SetVersion = ()=>{
    const { detail } = useSet()
    console.log(detail)
    return <div>version</div>
}

export default SetVersion