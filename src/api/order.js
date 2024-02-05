import request from '@/utils/request.js'

export const checkOrder = (mode, obj) => {
  return request({
    url: '/checkout/order',
    method: 'get',
    params: {
      mode,
      delivery: 10,
      payType: 10,
      couponId: 0,
      isUsePoint: 0,
      ...obj
      //   goodsId,
      //   goodsNum,
      //   goodsSkuId,
      //   cartIds

    }
  })
}

export const postOrder = (mode, obj) => {
  return request({
    url: '/checkout/submit',
    method: 'post',
    data: {
      mode,
      delivery: 10,
      payType: 10,
      couponId: 0,
      isUsePoint: 0,
      ...obj
    }
  })
}

export const getOrderListApi = (dataType, page) => {
  return request({
    url: '/order/list',
    params: {
      dataType,
      page
    }
  })
}
