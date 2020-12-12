import { LOCAL_STORAGE_AUTH_TOKEN } from '@/constants/sessions'

export default function authorization(config) {
  const token = localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN)
  if (!token) {
    return config
  }

  const { headers } = config
  return {
    ...config,
    headers: {
      ...headers,
      Authorization: token,
    },
  }
}
