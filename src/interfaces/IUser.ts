/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:31:58
 * @LastEditTime: 2021-10-25 15:32:14
 * @FilePath: /otter/src/models/IUser.ts
 * @Description: 
 */
export interface IUser {
    id: number;
    uid: string;
    name: string;
    username: string;
    permissions: string[]
}