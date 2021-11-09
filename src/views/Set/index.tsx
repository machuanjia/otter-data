/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-09 14:44:33
 * @FilePath: /otter-data/src/views/Set/index.tsx
 * @Description:
 */
import React, { Component, Fragment } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input, Modal } from 'antd'
import { ContentLayout, MODAL_SIZE } from 'otter-pro'

import { NormalLayoutDecorator, RouteDecorator } from '@/decorators'

import { List, SetCollection } from './components'

type IProps = {}
type IState = {
  isCollectionVisible: boolean
}

const { Search } = Input
// @ts-ignore
@RouteDecorator()
// @ts-ignore
@NormalLayoutDecorator()
class Set extends Component<IProps, IState> {
  constructor(props) {
    super(props)
    this.state = {
      isCollectionVisible: false,
    }
  }
  onSearch() {}
  handleCancel() {
    this.setState({
      isCollectionVisible: false,
    })
  }
  render() {
    const { isCollectionVisible } = this.state
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
                this.setState({ isCollectionVisible: true })
              }}
            >
              <PlusOutlined className=" align-middle" /> 新建
            </Button>
          </Fragment>
          <Fragment key="main">
            <List />
          </Fragment>
        </ContentLayout>
        <Modal
          title="新建"
          width={MODAL_SIZE.MD}
          zIndex={10000}
          visible={isCollectionVisible}
          destroyOnClose={true}
          footer={null}
          onCancel={() => {
            this.handleCancel()
          }}
        >
          <SetCollection />
        </Modal>
      </>
    )
  }
}
export default Set
