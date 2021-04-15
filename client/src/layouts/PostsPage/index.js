import React, {useState, useEffect} from 'react'
import { useHistory, useLocation } from "react-router-dom"
import Posts from '../../components/posts/Posts'
import {getPosts, getSearchPosts} from '../../network'

export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const history = useHistory()
    let location = useLocation()  

  useEffect(() => {
    (async () => {
      const result = await getPosts()
      console.log(result?.posts)
      setPosts(result?.posts)
    })()
  }, [])

  useEffect(() => {

  const queryString = require('query-string');

  const search = queryString.parse(location.search);

    (async () => {
      const result = await getSearchPosts(search)
      console.log(result?.posts)
      setPosts(result?.posts)
    })()      
  }, [location])  

  const likeClicked = async data => {
    console.log("like clicked", data)
  }

  const cardClicked = async data => {
    console.log(data)
      history.push(`/posts/${data.postId}`)
    }
  const commentClicked = async data => {
    history.push(`/posts/${data.postId}`)
  }

  return (


        <Posts 
        posts={posts} 
        cardClicked={cardClicked}
        ></Posts>
 
  )
}