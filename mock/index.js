/*
 * @Author: D.Y.M
 * @Date: 2021-10-25 15:10:01
 * @LastEditTime: 2021-11-09 14:41:11
 * @FilePath: /otter-data/mock/index.js
 * @Description: 
 */
const proxy = {
  ...require('./app'),
  ...require('./set')
}
module.exports = proxy;