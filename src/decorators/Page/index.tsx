/*
 * @Author: D.Y.M
 * @Date: 2021-10-20 15:23:19
 * @LastEditTime: 2021-10-20 15:23:19
 * @FilePath: /otter/src/components/Decorators/index.tsx
 * @Description:
 */
import React, { Component } from 'react'

export const PageDecorator = () => (WrappedComponent) => {
  return class PageNormal extends Component {
    render() {
      return (
        <div style={{ backgroundColor: 'red' }}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
