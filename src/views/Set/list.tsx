/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-12 08:54:14
 * @FilePath: /otter-data/src/views/Set/list.tsx
 * @Description:
 */
import React, { useState } from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { ContentLayout } from 'otter-pro'

import NormalLayout from '@/layouts/NormalLayout'

import { List, SetCollection } from './components'
import { SetListContext } from './context'

const { Search } = Input

const SetList = () => {
  const [isCollectionVisible, setIsCollectionVisible] = useState(false)
  const onSearch = () => {
  }

  return (
    <NormalLayout>
      <SetListContext.Provider value={{ isCollectionVisible, setIsCollectionVisible }}>
        <ContentLayout
          hLeft={
            <Search
              className="search"
              placeholder="请您输入..."
              onSearch={onSearch}
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
      </SetListContext.Provider>
    </NormalLayout>
  )
}
export default SetList
