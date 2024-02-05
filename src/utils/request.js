import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store/index.js'
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000

})

instance.interceptors.request.use(function (config) {
  Toast.loading({
    message: '<<loading>>',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })
  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // const res = response.data
  if (response.data.status !== 200) {
    Toast.fail(response.data.message)
    return Promise.reject(response.data)
  } else {
    Toast.clear()
  }
  return response.data
}, function (error) {
  return Promise.reject(error)
})
export default instance
