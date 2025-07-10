import { clientFetch } from '../clientFetch'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken() {}

  async loginUser(body) {
    const { data } = clientFetch.post('/user/login', body)
    const { accessToken } = await data
  }

  async registerUser(body) {
    return clientFetch.post('/user/register', body)
  }

  async logout() {
    return clientFetch.get('/user/logout')
  }

  async refresh() {
    return clientFetch.get('/user/refresh')
  }
}
