/*
 * @Author: D.Y.M
 * @Date: 2021-11-08 10:54:54
 * @LastEditTime: 2021-11-09 14:40:41
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
          id: '1',
          name: '身份证拍摄扫描',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
        {
          id: '2',
          name: '身份证拍摄扫描2',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
        {
          id: '3',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '4',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '5',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '6',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '7',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },{
          id: '8',
          name: '身份证拍摄扫描3',
          status: 1,
          description: '这个数据集是将身份证数据集打印后手动拍照构造',
        },
      ],
    },
  },
}
module.exports = proxy
