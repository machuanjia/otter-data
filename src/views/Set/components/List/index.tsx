/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:49:24
 * @LastEditTime: 2021-11-15 11:39:55
 * @FilePath: /otter-data/src/views/Set/components/List/index.tsx
 * @Description:
 */

import { useEffect, useState, useRef } from 'react'

import { map, range } from 'lodash'
import { PartLoading } from 'otter-pro'
import { useHistory } from 'react-router-dom'

import { useSetModel } from '@/models'

import Card from '../Card'
import styles from './index.module.less'

const List = () => {
  const { list, loading } = useSetModel()
  const ref = useRef(null)
  const [empty, setEmpty] = useState(0)
  const history = useHistory()
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
  const touchSet = (n) => {
    history.push(`/set/${n.id}/version`)
  }
  return (
    <>
      {loading ? (
        <PartLoading />
      ) : (
        <div className={styles['list-wrap']} ref={ref}>
          {map(list, (n, key) => {
            return (
              <div
                key={key}
                className={styles['list-item']}
                onClick={() => {
                  touchSet(n)
                }}
              >
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
