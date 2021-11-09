/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 11:31:15
 * @LastEditTime: 2021-11-08 11:05:49
 * @FilePath: /otter-data/mock/app.js
 * @Description:
 */
const proxy = {
  ...require('./app'),
  ...require('./set'),
}
module.exports = proxy
