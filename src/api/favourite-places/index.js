import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = () => {
  return clientFetch.get('/points')
}
