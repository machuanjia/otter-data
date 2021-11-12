/*
 * @Author: D.Y.M
 * @Date: 2021-11-11 08:51:33
 * @LastEditTime: 2021-11-12 19:41:57
 * @FilePath: /otter-data/src/views/Set/detail.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { Button } from 'antd'
import { LAYOUT_TYPE } from 'otter-pro'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Bread from '@/layouts/Bread'
import type { IRoute, ISet } from '@/models'
import { RouteViewer } from '@/routes'
import { setLayout } from '@/stores'
import SetService from '@/stores/set/set.service'

type IProps = {
  match: {
    params: {
      id: string
    }
  }
  activeRoute: IRoute
  detail: ISet
  getSetDetail: (id: string) => void
  setMainLayout: (type: string) => void
  route: any
  history: {}[]
}
type IState = {
  active: string
}

const mapStateToProps = (state) => ({
  detail: state.set.detail,
  activeRoute: state.app.currentRoute,
})
const mapDispatchToProps = (dispatch) => ({
  getSetDetail: (id) => dispatch(SetService.getSetDetail(id)),
  setMainLayout: (payload) => dispatch(setLayout(payload)),
})
// @ts-ignore
@connect(mapStateToProps, mapDispatchToProps)
class SetDetail extends Component<IProps, IState> {
  componentDidMount() {
    const { match, getSetDetail, setMainLayout } = this.props
    getSetDetail(match.params.id)
    setMainLayout(LAYOUT_TYPE.FULL)
  }
  render() {
    const { route, match, activeRoute } = this.props
    return (
      <section className="h-screen flex flex-col">
        <header className=" border-b border-solid border-divider p-4 text-secondary flex flex-row">
          <Bread />
          <div className="flex-1 flex flex-row justify-center">
            <Link to={`/set/${match.params.id}/version`}>版本{activeRoute?.meta?.key}</Link>
            <Link to={`/set/${match.params.id}/basic`}>基本信息</Link>
          </div>
          <div>
            <Button size="small">Fork</Button>
            <Button size="small" type="primary" className="ml-2 mr-2">
              新建任务
            </Button>
            <Button size="small">删除</Button>
          </div>
        </header>
        <div className={` flex-1 bg-main`}>
          <RouteViewer routers={route.children} />
        </div>
      </section>
    )
  }
}

export default SetDetail
