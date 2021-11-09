/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:49:24
 * @LastEditTime: 2021-11-09 10:29:27
 * @FilePath: /otter-data/src/views/Set/components/List/index.tsx
 * @Description:
 */

import { useEffect, useState, useRef } from 'react'

import { range } from 'lodash'
import { PartLoading, STATUS } from 'otter-pro'

import { selectSetList, selectSetStatus, useAppDispatch, useAppSelector } from '@/stores'
import SetService from '@/stores/set/set.service'

import Card from '../Card'
import styles from './index.module.less'

const List = () => {
  const list = useAppSelector(selectSetList)
  const status = useAppSelector(selectSetStatus)
  const ref = useRef(null)
  const [empty, setEmpty] = useState(0)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(SetService.getSets())
  }, [])
  useEffect(() => {
    if (list.length > 0) {
      const size = Math.floor(ref.current.clientWidth / 300)
      setEmpty(size - (list.length % size))
    }
  }, [list])
  return (
    <>
      {status === STATUS.LOADING ? (
        <PartLoading />
      ) : (
        <div className={styles['list-wrap']} ref={ref}>
          {list &&
            list.map((n) => {
              return (
                <div className={styles['list-item']}>
                  <Card key={n.id} entity={n} />
                </div>
              )
            })}
          {range(empty).map((n, index) => {
            return <div key={index} className={styles['list-item']} />
          })}
        </div>
      )}
    </>
  )
}
export default List
