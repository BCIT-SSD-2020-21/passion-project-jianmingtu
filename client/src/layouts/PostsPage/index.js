import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import Posts from '../../components/posts/Posts'
import {getPosts} from '../../network'


export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const history = useHistory()

  useEffect(() => {
    (async () => {
      const result = await getPosts()
      console.log(result?.posts)
      setPosts(result?.posts)
    })()
  }, [])

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