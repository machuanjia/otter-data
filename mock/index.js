/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:10:01
 * @LastEditTime: 2021-10-27 14:55:21
 * @FilePath: /otter-data/mock/index.js
 * @Description: 
 */
const proxy = {
  // =====================
  'GET /api/user/info': {
    code: 200,
    data: {
      uid: '1232131231',
      name: 'zs',
      username: 'kenny',
      sex: 6,
      permissions: ['counter*', 'counter*.counter', 'dataLake*', 'dataSet*', 'dataRemark*']
    }
  }
}
module.exports = proxy;