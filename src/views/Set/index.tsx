/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-10 10:16:03
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { ContentLayout } from 'otter-pro'
import { connect } from 'react-redux'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'
import { setIsCollectionVisible } from '@/stores'

import { List, SetCollection } from './components'

type IProps = {}
type IState = {
  isCollectionVisible: boolean
}

const { Search } = Input
const mapStateToProps = (state) => ({
  status: state.app.status,
})
const mapDispatchToProps = (dispatch) => ({
  setIsCollectionVisible: (payload) => dispatch(setIsCollectionVisible(payload)),
})
// @ts-ignore
@connect(mapStateToProps, mapDispatchToProps)
// @ts-ignore
@RouteDecorator()
// @ts-ignore
@NormalLayoutDecorator()
class Set extends Component<IProps, IState> {
  onSearch() {}
  render() {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { setIsCollectionVisible } = this.props
    return (
      <>
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
            <Button
              type="primary"
              className=""
              onClick={() => {
                setIsCollectionVisible(true)
              }}
            >
              <PlusOutlined className=" align-middle" /> 新建
            </Button>
          </Fragment>
          <Fragment key="main">
            <List />
          </Fragment>
        </ContentLayout>
        <SetCollection />
      </>
    )
  }
}
export default Set
