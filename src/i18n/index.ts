/*
 * @Author: D.Y.M
 * @Date: 2021-10-19 16:03:22
 * @LastEditTime: 2021-11-15 11:19:09
 * @FilePath: /otter-data/src/i18n/index.ts
 * @Description:
 */
import enUS from 'antd/lib/locale/en_US'
import zhCN from 'antd/lib/locale/zh_CN'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enUsTrans from './locales/en-us.json'
import zhCnTrans from './locales/zh-cn.json'

const ANTD_LOCAL_MAP = {
  en: enUS,
  zh: zhCN,
}

export const getLanguage = () => {
  const i18nextLng = localStorage.getItem('i18nextLng')
  if (i18nextLng) {
    return i18nextLng
  }
  return 'zh'
}

export const getAntdLocal = () => {
  return ANTD_LOCAL_MAP[getLanguage()]
}

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next) //init i18next
  .init({
    //引入资源文件
    resources: {
      en: {
        translation: enUsTrans,
      },
      zh: {
        translation: zhCnTrans,
      },
    },
    //选择默认语言，选择内容为上述配置中的key，即en/zh
    fallbackLng: 'zh',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
