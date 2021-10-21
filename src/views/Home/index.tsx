/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-10-21 14:34:41
 * @FilePath: /otter/src/views/Home/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

import i18n from 'i18next';

import { PageDecorator } from '@/decorators'
@PageDecorator()
class Home extends Component {
  render() {
    return <>home- {i18n.t('home')} - </>
  }
}

export default Home
