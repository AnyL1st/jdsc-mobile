import request from '@/utils/request'

export const getUserDetailApi = () => {
  return request({
    url: '/user/info'

  })
}
