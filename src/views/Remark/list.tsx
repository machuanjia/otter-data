/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 09:36:53
 * @LastEditTime: 2021-11-15 11:34:43
 * @FilePath: /otter-data/src/views/Remark/list.tsx
 * @Description:
 */
/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 13:57:38
 * @LastEditTime: 2021-11-12 08:54:14
 * @FilePath: /otter-data/src/views/Set/list.tsx
 * @Description:
 */
import React, { useState } from 'react'

import { FilterOutlined, PlusOutlined } from '@ant-design/icons'
import { useMount } from 'ahooks'
import { Button, Input } from 'antd'
import { ContentLayout } from 'otter-pro'

import NormalLayout from '@/layouts/NormalLayout'
import { useRemarkModel } from '@/models'

import List from './components/List'
import { RemarkListContext } from './context'

const { Search } = Input

const SetList = () => {
  const { getRemarks } = useRemarkModel()
  const [isCollectionVisible, setIsCollectionVisible] = useState(false)
  const onSearch = () => {}
  useMount(() => {
    getRemarks()
  })

  return (
    <NormalLayout>
      <RemarkListContext.Provider value={{ isCollectionVisible, setIsCollectionVisible }}>
        <ContentLayout
          hLeft={
            <Search className="search" placeholder="请您输入..." onSearch={onSearch} enterButton />
          }
          hRight={
            <>
              <Button
                type="primary"
                className=""
                onClick={() => {
                  setIsCollectionVisible(true)
                }}
              >
                <PlusOutlined className=" align-middle" /> 新建
              </Button>
              <FilterOutlined />
            </>
          }
        >
          <List />
        </ContentLayout>
      </RemarkListContext.Provider>
    </NormalLayout>
  )
}
export default SetList
