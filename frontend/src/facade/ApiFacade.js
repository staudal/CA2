const URL = 'http://localhost:8080'

function apiFacade() {
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  const loggedIn = () => {
    const loggedIn = getToken() != null
    return loggedIn
  }
  const logout = () => {
    localStorage.removeItem('jwtToken')
    window.location.reload()
  }

  async function login(username, password) {
    const options = makeOptions('POST', true, {
      username: username,
      password: password,
    })
    const data = await fetch(URL + '/api/login', options)
    const res = await data.json()
    return res
  }

  // fetch data and catch possible errors
  async function fetchAdminData() {
    const options = makeOptions('GET', true)
    const data = await fetch(URL + '/api/info/admin', options)
    return data.json()
  }

  async function fetchUserData() {
    const options = makeOptions('GET', true)
    const data = await fetch(URL + '/api/info/user', options)
    return data.json()
  }

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    }
    if (addToken && loggedIn()) {
      opts.headers['x-access-token'] = getToken()
    }
    if (body) {
      opts.body = JSON.stringify(body)
    }
    return opts
  }
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchAdminData,
    fetchUserData,
  }
}
const facade = apiFacade()
export default facade
