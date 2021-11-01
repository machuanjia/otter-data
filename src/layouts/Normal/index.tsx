/*
 * @Author: D.Y.M
 * @Date: 2021-10-28 16:10:58
 * @LastEditTime: 2021-11-01 14:21:08
 * @FilePath: /otter-data/src/layouts/Normal/index.tsx
 * @Description:
 */
import { Component } from 'react'

import { RouteDecorator } from '@/decorators'
import type { IRoute } from '@/models'
import { RouteViewer } from '@/routes'
import { store } from '@/stores'

type IProp = {
  route: IRoute
}
type IState = {
  current: IRoute
}
//@ts-ignore
@RouteDecorator()
class NormalLayout extends Component<IProp, IState> {
  subCurrent: any
  constructor(props) {
    super(props)
    this.state = {
      current: store.getState().app.currentRoute,
    }
    this.subCurrent = store.subscribe(() => {
      const { currentRoute } = store.getState().app
      if (currentRoute) {
        this.setState({
          current: currentRoute,
        })
      }
    })
  }

  componentWillUnmount() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.subCurrent && this.subCurrent()
  }
  render() {
    const { route } = this.props
    const { current } = this.state
    return (
      <section>
        <header className=" border-b border-solid border-divider p-4">{current?.meta?.icon}{current?.meta?.name}</header>
        <div>
          <RouteViewer routers={route.children} />{' '}
        </div>
      </section>
    )
  }
}
export default NormalLayout
