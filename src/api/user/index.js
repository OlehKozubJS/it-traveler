import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/user/register', body)
}

export const logout = (body) => {
  return clientFetch.get('/user/logout')
}

export const refresh = (body) => {
  return clientFetch.get('/user/refresh')
}
