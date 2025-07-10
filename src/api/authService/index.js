class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }

  setToken() {}

  async loginUser(body) {
    return clientFetch.post('/user/login', body)
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
