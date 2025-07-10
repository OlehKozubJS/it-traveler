import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL)
}

export const addFavoritePlace = () => {
  return clientFetch.post(BASE_PLACES_URL)
}
