export default function onError(errors = {}) {
  return (error) => {
    if (error.message === 'Network Error') {
      return Promise.reject({ code: 'NetworkError', message: 'Falha na conexão.' })
    }
    const e = {
      code: error.response?.data?.code,
      message: errors[error.response?.data?.code],
    }
    return Promise.reject(e)
  }
}
