import authorization from './request/authorization'
import onError from './response/onError'
import onSuccess from './response/onSuccess'

export default {
  request: {
    authorization,
  },
  response: {
    onError,
    onSuccess,
  },
}
