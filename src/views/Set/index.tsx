/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-08 17:12:56
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { ContentLayout } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'

import { List } from './components'

const { Search } = Input
// @ts-ignore
@RouteDecorator()
// @ts-ignore
@NormalLayoutDecorator()
class Set extends Component {
  onSearch() {}
  render() {
    return (
      <ContentLayout>
        <Fragment key="hLeft">
          <Search
            className="search"
            placeholder="请您输入..."
            onSearch={() => {
              this.onSearch()
            }}
            enterButton
          />
        </Fragment>
        <Fragment key="hRight">
          <Button type="primary" className="">
            <PlusOutlined className=" align-middle" /> 新建
          </Button>
        </Fragment>
        <Fragment key="main">
          <List />
        </Fragment>
      </ContentLayout>
    )
  }
}
export default Set
