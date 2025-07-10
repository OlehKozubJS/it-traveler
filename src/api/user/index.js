import { clientFetch } from '../clientFetch'

export const login = (body) => {
  return clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  return clientFetch.post('/user/register', body)
}
