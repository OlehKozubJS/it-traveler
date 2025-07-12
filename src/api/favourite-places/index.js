import { clientFetch } from '../clientFetch'

const BASE_PLACES_URL = '/points'

export const getFavoritePlaces = () => {
  return clientFetch.get(BASE_PLACES_URL).then(({ data }) => {
    return data.map((place) => {
      return { ...place, id: place._id }
    })
  })
}

export const addFavoritePlace = (body) => {
  return clientFetch.post(BASE_PLACES_URL, body)
}

export const updateFavoritePlace = (body) => {
  return clientFetch.put(BASE_PLACES_URL, body)
}

export const deleteFavoritePlace = (id) => {
  return clientFetch.delete(BASE_PLACES_URL, body)
}
