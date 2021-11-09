/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:31:15
 * @LastEditTime: 2021-11-09 14:40:54
 * @FilePath: /otter-data/mock/app.js
 * @Description: 
 */
const proxy = {
  'GET /api/v1/signIn':{
    code: 200,
    data: 'ywetywreytrwqtyertqywretqwreytqwretrqwtuetuqwyretyqw'
  },
  'GET /api/v1/user/info': {
    code: 200,
    data: {
      uid: '1232131231',
      name: 'zs',
      username: 'kenny',
      sex: 6,
      status: 1,
      permissions:['counter*','counter*.counter','home','dashboard*','dataLake*', 'dataSet*', 'dataRemark*']
    }
  },
}
module.exports = proxy;