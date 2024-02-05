import request from '@/utils/request.js'

export const getCargoList = ({ categoryId, goodsName, page }) => {
  return request({
    url: '/goods/list',
    method: 'get',
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}

export const getCargoDetail = (goodsId) => {
  return request({
    url: '/goods/detail',
    method: 'get',
    params: {
      goodsId
    }
  })
}

export const getProComments = (goodsId) => {
  return request({
    url: '/comment/listRows',
    method: 'get',
    params: {
      goodsId,
      limit: 4
    }
  })
}

export const getCommentsTotal = (goodsId) => {
  return request({
    url: '/comment/total',
    method: 'get',
    params: {
      goodsId
    }
  })
}
