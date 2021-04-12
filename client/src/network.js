import axios from 'axios'
import {getDecodedToken, saveToken} from '../src/token'


// export async function login({username, password})
// export async function signUp({email, password, username})
// export async function getPosts()
// export async function getPost({postId}) 
// export async function savePost({type, imageUrl, description})


// Create an object to send it as a bearer token
const authHeader = () => { return { Authorization: `Bearer ${localStorage.getItem('token')}` }}

export async function getPosts() {
  try {
    // Send the JWT in the header of the axios requests from the client
    const result = await axios.get(`/api/posts`, { headers: authHeader() })
    console.log(result)
    return result.data
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}

export async function savePost({type, imageUrl, description}) {
  try {
    //Send the JWT in the header of the axios requests from the client
    await axios.post(`/api/posts`, {type, imageUrl, description}, { headers: authHeader() })
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}  

export async function saveComment({postId, text}) {
  try {
    //Send the JWT in the header of the axios requests from the client
    await axios.post(`/api/posts/${postId}/comments`, {text}, { headers: authHeader() })
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}  

export async function getPost({postId}) {
  try {
    // Send the JWT in the header of the axios requests from the client
    const result = await axios.get(`/api/posts/${postId}`, { headers: authHeader() })
    return result.data
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}

export async function login({username, password}) {
  try {
    const result = await axios.post('/api/users/login', {username, password})
    const token = result.data.accessToken
    saveToken(token)
    return getDecodedToken()
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }    
}

export async function signUp({email, password, username}) {
  try {  
    const result = await axios.post('/api/users', {username, password,email})
    const token = result.data.accessToken
    saveToken(token)
    return getDecodedToken()
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }    
}
