import api from './api'

export default {
  signUp(body) {
    return api.post('/auth/sign-up', body)
  },
  signIn(body) {
    return api.post('/auth/sign-in', body)
  },
  signOut() {
    return api.delete('/auth/sign-out')
  },
}
