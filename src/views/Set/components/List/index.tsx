/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:49:24
 * @LastEditTime: 2021-11-11 13:58:10
 * @FilePath: /otter-data/src/views/Set/components/List/index.tsx
 * @Description:
 */

import { useEffect, useState, useRef } from 'react'

import { map, range } from 'lodash'
import { PartLoading, STATUS } from 'otter-pro'
import { useHistory } from "react-router-dom"

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
  const history = useHistory()  
  useEffect(() => {
    dispatch(SetService.getSets())
  }, [])
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(list).length > 0) {
        const size = Math.floor(ref.current.clientWidth / 300)
        setEmpty(size - (Object.keys(list).length % size))
      }
    }, 200)
    return () => {
      clearTimeout(timer)
    }
  }, [list])
  const touchSet = (n)=>{
    history.push(`/set/${n.id}/version`)
  }
  return (
    <>
      {status === STATUS.LOADING ? (
        <PartLoading />
      ) : (
        <div className={styles['list-wrap']} ref={ref}>
          {map(list, (n, key) => {
            return (
              <div key={key} className={styles['list-item']} onClick={()=>{touchSet(n)}}>
                <Card entity={n} />
              </div>
            )
          })}
          {range(empty).map((n) => {
            return <div key={n} className={styles['list-item']} />
          })}
        </div>
      )}
    </>
  )
}
export default List
