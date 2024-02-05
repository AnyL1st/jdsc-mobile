import request from '@/utils/request.js'

export const getAddressList = () => {
  return request({
    url: '/address/list'
  })
}

export const theData =
    JSON.stringify({
      url: '/address/add',
      method: 'post',
      data: {
        name: '3RROR',
        phone: '17608901506',
        region: [{
          value: 782,
          label: '上海'
        },
        {
          value: 783,
          label: '上海市'
        },
        {
          value: 785,
          label: '徐汇区'
        }
        ],
        detail: '我的老家'
      }
    })
export const setThatAddress = () => {
  return request({
    theData
  })
}
