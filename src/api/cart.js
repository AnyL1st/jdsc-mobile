import request from '@/utils/request.js'

export const addToCart = (goodsId, goodsNum) => {
  return request({
    url: '/cart/add',
    method: 'post',
    data: {
      goodsId,
      goodsSkuId: 0,
      goodsNum
    }
  })
}

export const updateCount = (goodsId, goodsSkuId, goodsNum) => {
  return request({
    url: '/cart/update',
    method: 'post',
    data: {
      goodsSkuId,
      goodsId,
      goodsNum
    }
  })
}

export const getCartList = () => {
  return request({
    url: '/cart/list'
  })
}

export const delCartApi = (cartIds) => {
  return request({
    url: '/cart/clear',
    method: 'post',
    data: {
      cartIds
    }
  })
}
