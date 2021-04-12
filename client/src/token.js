// Store the JWT in the client
// Decode the JWT on the client to store the user data
import jwtDecode from 'jwt-decode'

export function getToken() {
  return localStorage.getItem('token')
}

export function saveToken(token) {
  localStorage.setItem('token', token)
}

export function getDecodedToken() {
  let decoded = null
  try {
    decoded = jwtDecode(getToken())
  } catch (e) {
  }
  return decoded
}

export function removeToken() {
  localStorage.removeItem('token')
}
