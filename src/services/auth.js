import api from './api'

export default {
  signUp(body) {
    return api.post('/auth/sign-up', body)
  },
  signIn(body) {
    return api.post('/auth/sign-in', body)
  },
  checkToken() {
    return api.get('/auth/check-token')
  },
  signOut() {
    return api.delete('/auth/sign-out')
  },
}
