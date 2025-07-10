import { clientFetch } from '../clientFetch'

class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken(token) {}

  async loginUser(body) {
    const { data } = await clientFetch.post('/user/login', body)
    const { accessToken } = await data

    this.setToken(accessToken)
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
