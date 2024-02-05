// 登录页面相关api
import request from '@/utils/request.js'
export const picCodeApi = () => {
  return request({
    url: '/captcha/image',
    method: 'get',
    header: {
      platform: 'H5'
    }
  })
}

export const msgCodeApi = (captchaCode, captchaKey, mobile) => {
  return request({
    url: '/captcha/sendSmsCaptcha',
    method: 'post',
    data: {
      form: {
        captchaCode,
        captchaKey,
        mobile
      }
    }
  })
}

export const loginApi = (mobile, smsCode) => {
  return request({
    url: '/passport/login',
    method: 'post',
    data: {
      form: {
        isParty: false,
        partyData: {},
        mobile,
        smsCode
      }
    }
  })
}
