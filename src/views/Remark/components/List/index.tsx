/*
 * @Author: D.Y.M
 * @Date: 2021-11-15 09:38:17
 * @LastEditTime: 2021-11-15 14:01:04
 * @FilePath: /otter-data/src/views/Remark/components/List/index.tsx
 * @Description:
 */
import { FundViewOutlined } from '@ant-design/icons'
import { Table } from 'antd'
import { useTranslation } from 'react-i18next'

import { useRemarkModel } from '@/models'

const List = () => {
  const { t } = useTranslation()
  const { list } = useRemarkModel()
  const columns = [
    {
      title: t('common.list.name'),
      dataIndex: 'name',
      key: 'name',
      render: (text) => <>{text}</>,
    },
    {
      title: t('common.list.actions'),
      dataIndex: 'actions',
      with: 100,
      key: 'actions',
      render: () => <div>
        <FundViewOutlined />
      </div>,
    },
  ]
  return (
    <>
      <Table className=" m-2" bordered={true} columns={columns} dataSource={list} />
    </>
  )
}
export default List
