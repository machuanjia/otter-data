/*
 * @Author: D.Y
 * @Date: 2021-02-04 18:55:58
 * @LastEditTime: 2021-10-25 17:56:46
 * @LastEditors: Please set LastEditors
 * @FilePath: /otter/src/layouts/Route/index.tsx
 * @Description: 
 */
import React, { Component } from 'react';

import { RouteViewer } from '@/routes';


type IRouterProps = {
  route: any;
};

type IRouterState = Record<string, unknown>;

export default class RouteLayout extends Component<IRouterProps, IRouterState> {
  render() {
    const { route } = this.props;
    return <RouteViewer routers={route.children} />;
  }
}
