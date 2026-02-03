import users from '../data/users.json'

const SESSION_KEY = 'auth_user'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const getRandomDelay = () => Math.floor(Math.random() * 700) + 800

export const authService = {
  async login(username, password) {
    await delay(getRandomDelay())

    const user = users.find(
      u => u.username === username && u.password === password
    )

    if (!user) {
      throw new Error('Invalid username or password')
    }

    const { password: _, ...userWithoutPassword } = user
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword))

    return userWithoutPassword
  },

  async logout() {
    await delay(300)
    sessionStorage.removeItem(SESSION_KEY)
  },

  getCurrentUser() {
    const userData = sessionStorage.getItem(SESSION_KEY)
    return userData ? JSON.parse(userData) : null
  },

  isAuthenticated() {
    return !!this.getCurrentUser()
  }
}
