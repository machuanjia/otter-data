/*
 * @Author: D.Y.M
 * @Date: 2021-11-11 08:51:33
 * @LastEditTime: 2021-11-12 13:48:30
 * @FilePath: /otter-data/src/views/Set/detail.tsx
 * @Description:
 */
import React, { Component } from 'react'

import { ContentLayout, LAYOUT_TYPE } from 'otter-pro'
import { connect } from 'react-redux'

import type { ISet } from '@/models'
import { setLayout } from '@/stores'
import SetService from '@/stores/set/set.service'

type IProps = {
  match: {
    params: {
      id: string
    }
  }
  detail: ISet
  getSetDetail: (id: string) => void
  setLayout: (type: string) => void
}
type IState = {}
const mapStateToProps = (state) => ({
  detail: state.set.detail,
})
const mapDispatchToProps = (dispatch) => ({
  getSetDetail: (id) => dispatch(SetService.getSetDetail(id)),
  setLayout: (payload) => dispatch(setLayout(payload)),
})
// @ts-ignore
@connect(mapStateToProps, mapDispatchToProps)
class SetDetail extends Component<IProps, IState> {
  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { match, getSetDetail, setLayout } = this.props
    getSetDetail(match.params.id)
    setLayout(LAYOUT_TYPE.FULL)
  }
  render() {
    return <ContentLayout>SetDetail</ContentLayout>
  }
}

export default SetDetail
