import { clientFetch } from '../clientFetch'

export const login = (body) => {
  clientFetch.post('/user/login', get)
}
