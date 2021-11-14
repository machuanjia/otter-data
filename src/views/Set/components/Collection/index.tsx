/*
 * @Author: D.Y.M
 * @Date: 2021-11-09 10:36:01
 * @LastEditTime: 2021-11-10 10:10:26
 * @FilePath: /otter-data/src/views/Set/components/Collection/index.tsx
 * @Description:
 */
import { useContext } from 'react'

import { FormItem, FormLayout, Input, FormButtonGroup, Submit } from '@formily/antd'
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/react'
import { Button } from 'antd'

import { CreateModal } from '@/components'

import { SetListContext } from '../../context'

const { TextArea } = Input
const form = createForm()

const SetCollection = () => {
  const { isCollectionVisible, setIsCollectionVisible } = useContext(SetListContext);
  const handleClose = () => {
    setIsCollectionVisible(false)
  }
  return (
    <CreateModal isVisible={isCollectionVisible} onClose={handleClose}>
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="name"
            title="名称"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[
              Input,
              {
                placeholder: '请输入名称',
              },
            ]}
          />
          <Field
            name="description"
            title="描述"
            required
            initialValue=""
            decorator={[FormItem]}
            component={[
              TextArea,
              {
                placeholder: '请输入描述',
              },
            ]}
          />
        </FormLayout>
        <FormButtonGroup>
          <Submit onSubmit={console.log}>确定</Submit>
          <Button type="link" onClick={handleClose}>
            取消
          </Button>
        </FormButtonGroup>
      </FormProvider>
    </CreateModal>
  )
}
export default SetCollection
