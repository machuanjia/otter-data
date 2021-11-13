/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:54:54
 * @LastEditTime: 2021-11-11 08:41:35
 * @FilePath: /otter-data/mock/set.js
 * @Description:
 */
const proxy = {
  'GET /api/v1/sets': {
    code: 200,
    data: {
      total: 200,
      page_size: 20,
      page_index: 1,
      value: [
        {
          id: '11',
          name: '身份证拍摄扫描',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
        {
          id: '21',
          name: '身份证拍摄扫描2',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
        {
          id: '31',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '41',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '51',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '61',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '71',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '81',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
      ],
    },
  },
  'GET /api/v1/sets/:id': {
    code: 200,
    data: {
      id: '11',
      name: '身份证拍摄扫描',
      status: 1,
      description: '这个数据集是将身份证数据集打印后手动拍照构造',
    },
  },
}
module.exports = proxy
