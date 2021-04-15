import axios from 'axios'
import {getDecodedToken, saveToken} from '../src/token'
import { upload } from './s3'


// export async function login({username, password})
// export async function signUp({email, password, username})
// export async function getPosts()
// export async function getPost({postId}) 
// export async function savePost({type, imageUrl, description})

// const BASE_API = "https://fathomless-lake-61399.herokuapp.com/api"
const BASE_API = "http://localhost:5000/api"

// Create an object to send it as a bearer token
const authHeader = () => { return { Authorization: `Bearer ${localStorage.getItem('token')}` }}

export async function getPosts() {
  try {
    // Send the JWT in the header of the axios requests from the client
    const result = await axios.get(`${BASE_API}/posts`, { headers: authHeader() })
    console.log(result)
    return result.data
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}

export async function getSearchPosts({search}) {
  try {
    // Send the JWT in the header of the axios requests from the client
    const query = `${BASE_API}/posts${ search ? `?search=${search}` : '' }`
    console.log('query+++++++++++',query)
    const result = await axios.get(query, { headers: authHeader() })
    console.log(result)
    return result.data
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }
}

export async function savePost(data) {
  // try {
  //   //Send the JWT in the header of the axios requests from the client
  //   await axios.post(`/api/posts`, {type, imageUrl, description}, { headers: authHeader() })

  //   console.log(data)

  // } catch (error) {
  //   throw (error.response.data.error ? Error(error.response.data.error) : error)
  // }

  try {
    console.log(data)

    let ret = null;
    if(data.upload_image_file) {
      ret = await upload(data.upload_image_file)
    }
    //Send the JWT in the header of the axios requests from the client
  
    console.log({ ...data, upload_image_file:ret?.location})

    await axios.post(`${BASE_API}/posts`, { ...data, upload_image_file:ret?.location },  { headers: authHeader() })
  } catch (err) {
    throw (err.message || JSON.stringify(err))
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
    const result = await axios.post(`${BASE_API}/users/login`,{username, password})
    const token = result.data.accessToken
    saveToken(token)
    return getDecodedToken()
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }    
}

export async function signUp({email, password, username}) {
  try {  
    // const result = await axios.post('/api/users', {username, password,email})
    const result = await axios.post(`${BASE_API}/users`, {username, password,email})
    const token = result.data.accessToken
    saveToken(token)
    return getDecodedToken()
  } catch (error) {
    throw (error.response.data.error ? Error(error.response.data.error) : error)
  }    
}
