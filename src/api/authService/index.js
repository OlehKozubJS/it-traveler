class AuthService {
  #token = null

  isLoggedIn() {
    return Boolean(this.#token)
  }
}
