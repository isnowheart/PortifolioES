import axios from 'axios'
import qs from 'qs'
import errors from '@/constants/errors'
import interceptors from './inteceptors'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  paramsSerializer: qs.stringify,
})

api.interceptors.request.use(interceptors.request.authorization)
api.interceptors.response.use(
  interceptors.response.onSuccess,
  interceptors.response.onError(errors),
)

export default api
