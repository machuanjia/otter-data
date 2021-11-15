/*
 * @Author: D.Y.M
 * @Date: 2021-11-12 17:45:44
 * @LastEditTime: 2021-11-15 11:13:57
 * @FilePath: /otter-data/src/views/Set/version.tsx
 * @Description: 
 */
import { useSetModel } from "@/models"

const SetVersion = ()=>{
    const { detail } = useSetModel()
    console.log(detail)
    return <div>version</div>
}

export default SetVersion