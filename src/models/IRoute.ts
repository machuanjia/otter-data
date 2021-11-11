/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 16:06:15
 * @LastEditTime: 2021-11-11 09:42:45
 * @FilePath: /otter-data/src/models/IRoute.ts
 * @Description: 
 */


export interface IRoute {
    path: string,
    meta: {
        key: string,
        name: string,
        icon: string,
        permission: string,
        isDefault?: boolean
    },
    component?: React.LazyExoticComponent<() => JSX.Element>
    children?: IRoute[]
}