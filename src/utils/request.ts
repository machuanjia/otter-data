/*
 * @Author: D.Y
 * @Date: 2021-01-07 10:05:34
 * @LastEditTime: 2021-10-28 11:21:16
 * @LastEditors: Please set LastEditors
 * @FilePath: /otter-data/src/utils/request.ts
 * @Description: http
 */

// import { message } from 'antd'
import { getRequest } from 'otter-pro'

export default getRequest({
  baseURL: '/api/v1',//APP_CONFIGRATION.api,
  // @ts-ignore
  requestAction: (config: any) => {
    config.headers.authorization = `Bearer 11111111212121`
  },
  responseAction: (res) => {
    // eslint-disable-next-line no-debugger
    const { code, data } = res
    if (code !== 200) {
      // if (code === 10001) {
      //   message.error('没有权限登录，请联系渠道经理!')
      // } else if (code === 10003) {
      //   message.error('验证码无效!')
      // } else if (code === 10004) {
      //   message.error('用户没有登录，请重新登录!')
      //   logout()
      // } else if (code === 10010) {
      //   logout()
      // }
      return Promise.reject(res)
    }
    return data
  },
})
