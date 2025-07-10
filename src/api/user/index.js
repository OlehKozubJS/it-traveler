import { clientFetch } from '../clientFetch'

export const login = (body) => {
  clientFetch.post('/user/login', body)
}

export const registerUser = (body) => {
  clientFetch.post('/user/register', body)
}
