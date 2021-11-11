/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 14:46:32
 * @LastEditTime: 2021-11-11 11:45:19
 * @FilePath: /otter-data/src/views/Set/components/Card/index.tsx
 * @Description:
 */
import { memo } from 'react'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Card, Avatar } from 'antd'

import type { ISet } from '@/models'

type IProps = {
  entity: ISet
}

const { Meta } = Card

const SetCard = memo(
  ({ entity }: IProps) => {
    const { name, description } = entity
    return (
      <Card
        className=" w-72"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={name}
          description={description}
        />
      </Card>
    )
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps.entity) === JSON.stringify(nextProps.entity)
  },
)
export default SetCard
