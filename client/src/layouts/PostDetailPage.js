import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import PostDetails from '../components/postDetails/index'
import { getPost } from '../network'


export default function PostDetailsPage({user}) {
  const [post, setPost] = useState()
  const [updatePost, setUpdatePost] = useState(false)
  let { postId } = useParams()

  useEffect(() => {
    (async () => {

        try {
          // Hard code one of your post ids for now, we'll make this dynamic later
          const result = await getPost({postId: postId})
          setPost(result.post)
          setUpdatePost(false)
        } catch (error) {
          console.log(error)
        }
    })()
  }, [])

  const submitComment = async ({postId, text}) => {


  }

  const likeClicked = async data => {
    console.log("Like Clicked", data)
  }

  return (
    <>
    { !post ? // If there's no post, let's just show a loading indicator
      <p>Loading</p>
    :
      <PostDetails 
      post={post} 
      user = {user}
      likeClicked={likeClicked} 
      submitComment={submitComment}
      ></PostDetails>
    }
    </>
  )
}