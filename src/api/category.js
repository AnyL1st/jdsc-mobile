import request from '@/utils/request.js'
export const getCategoryData = () => {
  return request({
    url: '/category/list'
  })
}
