/*
 * @Author: D.Y.M
 * @Date: 2021-11-09 19:50:51
 * @LastEditTime: 2021-11-10 10:09:07
 * @FilePath: /otter-data/src/components/CreateModal/index.tsx
 * @Description:
 */

import { Modal } from 'antd'
import { MODAL_SIZE } from 'otter-pro'

export const CreateModal = ({ onClose, isVisible, children }) => {
  return (
    <Modal
      title="新建"
      width={MODAL_SIZE.MD}
      zIndex={10000}
      visible={isVisible}
      destroyOnClose={true}
      footer={null}
      onCancel={onClose}
    >
      {children}
    </Modal>
  )
}
