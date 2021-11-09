/*
 * @Author: D.Y.M
 * @Date: 2021-11-09 10:36:01
 * @LastEditTime: 2021-11-09 16:05:33
 * @FilePath: /otter-data/src/views/Set/components/Collection/index.tsx
 * @Description:
 */
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd'
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field } from '@formily/react'

const form = createForm()

const SetCollection = () => {
  return <div> <FormProvider form={form}>
  <FormLayout layout="vertical">
    <Field
      name="input"
      title="输入框"
      required
      initialValue="Hello world"
      decorator={[FormItem]}
      component={[Input]}
    />
  </FormLayout>
  <FormConsumer>
    {() => (
      <div
        style={{
          marginBottom: 20,
          padding: 5,
          border: '1px dashed #666',
        }}
      >
        实时响应：{form.values.input}
      </div>
    )}
  </FormConsumer>
  <FormButtonGroup>
    <Submit onSubmit={console.log}>提交</Submit>
  </FormButtonGroup>
</FormProvider></div>
}
export default SetCollection
