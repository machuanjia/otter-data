/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-12 08:54:14
 * @FilePath: /otter-data/src/views/Set/list.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { ContentLayout } from 'otter-pro'
import { connect } from 'react-redux'

import { NormalLayoutDecorator } from '@/decorators'
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
@NormalLayoutDecorator()
// @ts-ignore
@connect(mapStateToProps, mapDispatchToProps)
class SetList extends Component<IProps, IState> {
  onSearch() {}
  render() {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { setIsCollectionVisible } = this.props
    return (
      <>
        <ContentLayout
          hLeft={
            <Search
              className="search"
              placeholder="请您输入..."
              onSearch={() => {
                this.onSearch()
              }}
              enterButton
            />
          }
          hRight={
            <Button
              type="primary"
              className=""
              onClick={() => {
                setIsCollectionVisible(true)
              }}
            >
              <PlusOutlined className=" align-middle" /> 新建
            </Button>
          }
        >
          <List />
        </ContentLayout>
        <SetCollection />
      </>
    )
  }
}
export default SetList
